import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Conseil-Formular (Beratungsanfrage) via Resend.
 *
 * Benötigte Environment-Variablen (server-only, niemals `NEXT_PUBLIC_`):
 *
 *   RESEND_API_KEY        — API-Key aus dem Resend-Dashboard.
 *   CONTACT_FROM_EMAIL    — Absender, z.B. "L'Atelier d'Or <info@laterlierdor.com>".
 *                           Die Domain muss in Resend verifiziert sein.
 *   CONTACT_TO_EMAIL      — Empfänger-Postfach für Form-Submissions.
 *
 * Reply-To wird auf die E-Mail-Adresse des Kunden gesetzt, damit du direkt
 * aus deinem Mail-Client antworten kannst.
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

function body(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  return {
    html: `<!doctype html>
<html><body style="margin:0;padding:0;background:#F4F0E8;font-family:-apple-system,Segoe UI,Arial,sans-serif;color:#0A0A0A;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="font:500 11px/1 Arial,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#0A0A0A;opacity:.6;margin-bottom:24px;">
      L'Atelier d'Or — Conseil privé
    </div>
    <h1 style="font:600 20px/1.3 Arial,sans-serif;margin:0 0 20px;">Nouvelle demande de conseil</h1>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);width:120px;color:#555;font-size:13px;">Nom</td><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);font-size:14px;">${safeName}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);color:#555;font-size:13px;">E-mail</td><td style="padding:8px 0;border-bottom:1px solid rgba(10,10,10,.1);font-size:14px;"><a href="mailto:${safeEmail}" style="color:#0A0A0A;">${safeEmail}</a></td></tr>
      <tr><td style="padding:12px 0 8px;color:#555;font-size:13px;vertical-align:top;">Message</td><td style="padding:12px 0 8px;font-size:14px;line-height:1.5;">${safeMessage}</td></tr>
    </table>
  </div>
</body></html>`,
    text: [
      "L'Atelier d'Or — Conseil privé",
      "Nouvelle demande de conseil",
      "",
      `Nom    : ${name}`,
      `E-mail : ${email}`,
      "",
      "Message :",
      message,
    ].join("\n"),
  };
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
  const p = parsed as { name?: unknown; email?: unknown; message?: unknown };
  const name = typeof p.name === "string" ? p.name.trim().slice(0, 100) : "";
  const email = typeof p.email === "string" ? p.email.trim().slice(0, 254) : "";
  const message = typeof p.message === "string" ? p.message.trim().slice(0, 3000) : "";

  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "invalid-fields" }, { status: 422 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 422 });
  }

  const content = body(name, email, message);
  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from,
      to,
      subject: `Conseil — ${name}`,
      html: content.html,
      text: content.text,
      ...(email ? { replyTo: email } : {}),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[conseil] resend send failed", err);
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }
}
