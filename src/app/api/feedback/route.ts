import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Avis-Formular (Kundenfeedback) via Resend.
 *
 * Nutzt dieselben Environment-Variablen wie `/api/conseil`:
 *
 *   RESEND_API_KEY        — API-Key aus dem Resend-Dashboard.
 *   CONTACT_FROM_EMAIL    — Verifizierter Absender in Resend.
 *   CONTACT_TO_EMAIL      — Empfänger-Postfach.
 *
 * Reply-To ist die E-Mail-Adresse des Kunden.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);width:140px;color:#555;font-size:13px;vertical-align:top;">${label}</td><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);font-size:14px;">${value}</td></tr>`;
}

function body(
  name: string,
  email: string,
  model: string,
  rating: string,
  message: string,
  consent: boolean
) {
  const safeEmail = escapeHtml(email);
  const emailCell = email
    ? `<a href="mailto:${safeEmail}" style="color:#0A0A0A;">${safeEmail}</a>`
    : "—";
  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#F4F0E8;font-family:-apple-system,Segoe UI,Arial,sans-serif;color:#0A0A0A;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="font:500 11px/1 Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#0A0A0A;opacity:.6;margin-bottom:24px;">
      L'Atelier d'Or — Avis
    </div>
    <h1 style="font:600 20px/1.3 Arial,sans-serif;margin:0 0 20px;">Nouveau témoignage client</h1>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      ${row("Nom", escapeHtml(name))}
      ${row("E-mail", emailCell)}
      ${row("Modèle", model ? escapeHtml(model) : "—")}
      ${row("Note", rating ? escapeHtml(rating) : "—")}
      ${row("Consentement", consent ? "Oui" : "Non")}
      <tr><td style="padding:12px 0 8px;color:#555;font-size:13px;vertical-align:top;">Message</td><td style="padding:12px 0 8px;font-size:14px;line-height:1.5;">${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  </div>
</body></html>`;
  const text = [
    "L'Atelier d'Or — Avis",
    "Nouveau témoignage client",
    "",
    `Nom          : ${name}`,
    `E-mail       : ${email || "—"}`,
    `Modèle       : ${model || "—"}`,
    `Note         : ${rating || "—"}`,
    `Consentement : ${consent ? "Oui" : "Non"}`,
    "",
    "Message :",
    message,
  ].join("\n");
  return { html, text };
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  let parsed: unknown;
  try {
    parsed = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
  const p = parsed as {
    name?: unknown;
    email?: unknown;
    model?: unknown;
    rating?: unknown;
    message?: unknown;
    consent?: unknown;
  };
  const name = typeof p.name === "string" ? p.name.trim().slice(0, 100) : "";
  const email = typeof p.email === "string" ? p.email.trim().slice(0, 254) : "";
  const model = typeof p.model === "string" ? p.model.trim().slice(0, 100) : "";
  const rating = typeof p.rating === "string" ? p.rating.trim().slice(0, 20) : "";
  const message = typeof p.message === "string" ? p.message.trim().slice(0, 3000) : "";
  const consent = p.consent === true || p.consent === "yes" || p.consent === "on";

  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "invalid-fields" }, { status: 422 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 422 });
  }

  const content = body(name, email, model, rating, message, consent);
  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from,
      to,
      subject: `Avis — ${name}${model ? ` · ${model}` : ""}`,
      html: content.html,
      text: content.text,
      ...(email ? { replyTo: email } : {}),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[feedback] resend send failed", err);
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }
}
