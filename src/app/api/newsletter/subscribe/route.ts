import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Newsletter-Anmeldung via Resend.
 *
 * Benötigte Environment-Variablen (server-only, niemals `NEXT_PUBLIC_`):
 *
 *   RESEND_API_KEY              — API-Key aus dem Resend-Dashboard.
 *   NEWSLETTER_FROM_EMAIL       — Absender-Adresse, z.B. "L'Atelier d'Or <lettre@laterlierdor.com>".
 *                                 Die Domain muss in Resend verifiziert sein.
 *   NEWSLETTER_AUDIENCE_ID      — optional: Audience-ID, falls die Adresse in
 *                                 eine Resend-Audience aufgenommen werden soll.
 *   NEWSLETTER_INTERNAL_TO      — optional: interne Benachrichtigungs-Adresse
 *                                 (bekommt eine kurze Info-Mail bei jeder Anmeldung).
 *
 * Ohne RESEND_API_KEY antwortet die Route mit 503 und einer klaren Meldung.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function welcomeHtml(_email: string) {
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
            Merci. Vous êtes inscrit·e.
          </h1>
          <p style="font:400 16px/1.6 'Instrument Serif',Georgia,serif;color:#3A342D;margin:0 0 20px;">
            La lettre de la maison arrive une à deux fois par saison :
            nouvelles pièces, journal, rendez-vous. Rien de plus.
          </p>
          <p style="font:400 16px/1.6 'Instrument Serif',Georgia,serif;color:#3A342D;margin:0 0 32px;">
            En attendant, la collection Roi se découvre en ligne.
          </p>
          <a href="https://laterlierdor.vercel.app/collection"
             style="display:inline-block;font:500 11px/1 'Inter',Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#F4F0E8;background:#0A0A0A;padding:14px 22px;text-decoration:none;">
            Voir la collection
          </a>
        </td></tr>
        <tr><td style="padding-top:56px;">
          <div style="border-top:1px solid rgba(10,10,10,.12);padding-top:20px;">
            <div style="font:500 10px/1 'Inter',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#0A0A0A;opacity:.55;">
              L'Atelier d'Or — Paris · Berlin · Londres
            </div>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function welcomeText() {
  return [
    "Merci. Vous êtes inscrit·e.",
    "",
    "La lettre de la maison arrive une à deux fois par saison :",
    "nouvelles pièces, journal, rendez-vous. Rien de plus.",
    "",
    "En attendant, la collection Roi se découvre en ligne :",
    "https://laterlierdor.vercel.app/collection",
    "",
    "— L'Atelier d'Or",
    "Paris · Berlin · Londres",
  ].join("\n");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { ok: false, error: "not-configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad-request" },
      { status: 400 }
    );
  }

  const email =
    typeof (body as { email?: unknown }).email === "string"
      ? ((body as { email: string }).email).trim().toLowerCase()
      : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, error: "invalid-email" },
      { status: 422 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to: email,
      subject: "Merci. Vous êtes inscrit·e.",
      html: welcomeHtml(email),
      text: welcomeText(),
      headers: {
        "List-Unsubscribe": `<mailto:${from.replace(/^[^<]*<([^>]+)>.*$/, "$1")}?subject=unsubscribe>`,
      },
    });

    // Optional: Adresse in eine Resend-Audience aufnehmen
    const audienceId = process.env.NEWSLETTER_AUDIENCE_ID;
    if (audienceId) {
      try {
        await resend.contacts.create({ audienceId, email, unsubscribed: false });
      } catch {
        // audience-add ist best-effort — Welcome-Mail zählt als Erfolg
      }
    }

    // Optional: interne Benachrichtigung
    const internalTo = process.env.NEWSLETTER_INTERNAL_TO;
    if (internalTo) {
      try {
        await resend.emails.send({
          from,
          to: internalTo,
          subject: `Newsletter · nouvelle inscription`,
          text: `Nouvelle inscription : ${email}`,
        });
      } catch {
        // best-effort
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter.subscribe] resend send failed", err);
    return NextResponse.json(
      { ok: false, error: "send-failed" },
      { status: 502 }
    );
  }
}
