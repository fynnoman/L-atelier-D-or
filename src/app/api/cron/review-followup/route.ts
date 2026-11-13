import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Review-Followup-Cron: schickt 14 Tage nach Fulfillment eine Review-Anfrage an
 * Shopify-Kunden. Läuft täglich via Vercel Cron.
 *
 * Benötigte Environment-Variablen (server-only):
 *
 *   RESEND_API_KEY        — identisch zu den anderen Mail-Routes.
 *   CONTACT_FROM_EMAIL    — verifizierter Resend-Absender.
 *   SHOPIFY_STORE_DOMAIN  — "<store>.myshopify.com" (z.B. "shop-latelierdor.myshopify.com").
 *   SHOPIFY_ADMIN_TOKEN   — "shpat_..." aus der Shopify Custom-App mit
 *                           Scopes read_orders und write_orders.
 *   CRON_SECRET           — optional, zur Absicherung; Vercel Cron sendet
 *                           Authorization: Bearer <CRON_SECRET>.
 *
 * Idempotenz: jede verarbeitete Order bekommt den Shopify-Tag "review-mail-sent",
 * damit die Mail nie doppelt rausgeht.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://laterlierdor.com";
const API_VERSION = "2024-10";
const REVIEW_TAG = "review-mail-sent";
const DAYS_AFTER_FULFILLMENT = 14;
const WINDOW_DAYS = 1; // ±1 Tag Toleranz, damit kein Fulfillment durchrutscht

type ShopifyOrder = {
  id: number;
  name: string;
  email: string | null;
  tags: string;
  customer: { first_name: string | null } | null;
  fulfillments: { created_at: string }[];
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function reviewMailHtml(firstName: string, orderName: string) {
  const greeting = firstName
    ? `Guten Tag ${escapeHtml(firstName)},`
    : "Guten Tag,";
  const order = escapeHtml(orderName);
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F4F0E8;font-family:'Instrument Serif','Fraunces',Georgia,serif;color:#0A0A0A;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F4F0E8;">
    <tr><td align="center" style="padding:56px 24px 40px;">
      <table role="presentation" width="520" cellspacing="0" cellpadding="0" style="max-width:520px;width:100%;">
        <tr><td style="padding-bottom:36px;">
          <div style="font:500 11px/1 'Inter',Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#0A0A0A;opacity:.55;">
            L'Atelier d'Or — Lettre de la maison
          </div>
        </td></tr>
        <tr><td>
          <h1 style="font:400 32px/1.1 'Instrument Serif',Georgia,serif;margin:0 0 20px;color:#0A0A0A;">
            ${greeting}
          </h1>
          <p style="font:400 16px/1.6 'Instrument Serif',Georgia,serif;color:#3A342D;margin:0 0 20px;">
            Ihre Bestellung ${order} ist seit zwei Wochen bei Ihnen. Wir hoffen, die Monture trägt sich wie erwartet und würden uns freuen, wenn Sie uns Ihren Eindruck schildern.
          </p>
          <p style="font:400 16px/1.6 'Instrument Serif',Georgia,serif;color:#3A342D;margin:0 0 32px;">
            Ein paar Zeilen genügen. Ihr Feedback hilft der Maison, zu reifen.
          </p>
          <a href="${SITE_URL}/avis"
             style="display:inline-block;font:500 11px/1 'Inter',Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#F4F0E8;background:#0A0A0A;padding:14px 22px;text-decoration:none;">
            Einen Eindruck schildern
          </a>
        </td></tr>
        <tr><td style="padding-top:56px;">
          <div style="border-top:1px solid rgba(10,10,10,.12);padding-top:20px;">
            <div style="font:500 10px/1 'Inter',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#0A0A0A;opacity:.55;">
              L'Atelier d'Or — Édition confidentielle
            </div>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function reviewMailText(firstName: string, orderName: string) {
  const greeting = firstName ? `Guten Tag ${firstName},` : "Guten Tag,";
  return [
    greeting,
    "",
    `Ihre Bestellung ${orderName} ist seit zwei Wochen bei Ihnen. Wir hoffen, die Monture trägt sich wie erwartet und würden uns freuen, wenn Sie uns Ihren Eindruck schildern.`,
    "",
    "Ein paar Zeilen genügen. Ihr Feedback hilft der Maison, zu reifen.",
    "",
    `Einen Eindruck schildern: ${SITE_URL}/avis`,
    "",
    "— L'Atelier d'Or",
  ].join("\n");
}

async function shopifyFetch<T>(
  domain: string,
  token: string,
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`https://${domain}/admin/api/${API_VERSION}${path}`, {
    ...init,
    headers: {
      "X-Shopify-Access-Token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`shopify-${res.status}: ${body.slice(0, 200)}`);
  }
  return (await res.json()) as T;
}

export async function GET(req: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
  }

  const shopDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const shopToken = process.env.SHOPIFY_ADMIN_TOKEN;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!shopDomain || !shopToken) {
    return NextResponse.json(
      { ok: false, error: "shopify-not-configured" },
      { status: 503 }
    );
  }
  if (!apiKey || !from) {
    return NextResponse.json(
      { ok: false, error: "resend-not-configured" },
      { status: 503 }
    );
  }

  // Shopify filtert nur auf created_at, nicht auf fulfilled_at — deshalb holen wir
  // Orders der letzten 30 Tage und filtern clientseitig nach Fulfillment-Datum.
  const since = new Date(Date.now() - 30 * 86400 * 1000).toISOString();
  const query = new URLSearchParams({
    status: "any",
    fulfillment_status: "shipped",
    created_at_min: since,
    limit: "100",
  }).toString();

  let orders: ShopifyOrder[] = [];
  try {
    const data = await shopifyFetch<{ orders: ShopifyOrder[] }>(
      shopDomain,
      shopToken,
      `/orders.json?${query}`
    );
    orders = data.orders ?? [];
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "shopify-fetch-failed", detail: (err as Error).message },
      { status: 502 }
    );
  }

  const now = Date.now();
  const target = DAYS_AFTER_FULFILLMENT * 86400 * 1000;
  const windowMs = WINDOW_DAYS * 86400 * 1000;

  const resend = new Resend(apiKey);
  const sent: string[] = [];
  const skippedAlreadyTagged: string[] = [];
  const skippedOutOfWindow: string[] = [];
  const failed: { name: string; reason: string }[] = [];

  for (const order of orders) {
    try {
      const existingTags = (order.tags || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      if (existingTags.includes(REVIEW_TAG)) {
        skippedAlreadyTagged.push(order.name);
        continue;
      }
      const firstFulfillment = order.fulfillments?.[0]?.created_at;
      if (!firstFulfillment) continue;
      const fulfilledAt = new Date(firstFulfillment).getTime();
      const age = now - fulfilledAt;
      if (Math.abs(age - target) > windowMs) {
        skippedOutOfWindow.push(order.name);
        continue;
      }
      if (!order.email) {
        failed.push({ name: order.name, reason: "no-email" });
        continue;
      }

      const firstName = order.customer?.first_name ?? "";
      await resend.emails.send({
        from,
        to: order.email,
        subject: `L'Atelier d'Or — Ihr Eindruck zur Bestellung ${order.name}`,
        html: reviewMailHtml(firstName, order.name),
        text: reviewMailText(firstName, order.name),
      });

      const nextTags = [...existingTags, REVIEW_TAG].join(", ");
      await shopifyFetch(shopDomain, shopToken, `/orders/${order.id}.json`, {
        method: "PUT",
        body: JSON.stringify({ order: { id: order.id, tags: nextTags } }),
      });

      sent.push(order.name);
    } catch (err) {
      failed.push({ name: order.name, reason: (err as Error).message });
    }
  }

  return NextResponse.json({
    ok: true,
    sent: sent.length,
    skippedAlreadyTagged: skippedAlreadyTagged.length,
    skippedOutOfWindow: skippedOutOfWindow.length,
    failed: failed.length,
    details: { sent, skippedAlreadyTagged, failed },
  });
}
