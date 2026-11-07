"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/lib/i18n/LanguageContext";

/**
 * The site is statically exported. A mailto hand-off avoids pretending that
 * an unavailable server endpoint has received a withdrawal notice.
 */
export default function ReturnRequestForm() {
  const t = useT();
  const [notice, setNotice] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const get = (key: string) => String(values.get(key) || "").trim();
    const subject = "Widerruf / Rücksendung – " + get("order");
    const body = [
      "Hiermit widerrufe ich den Kauf der folgenden Ware(n):",
      "",
      "Bestellnummer: " + get("order"),
      "Artikel: " + get("items"),
      "Name: " + get("name"),
      "E-Mail: " + get("email"),
      "Bestelldatum (falls bekannt): " + get("date"),
      "Optionaler Hinweis: " + get("reason"),
      "",
      "Bitte bestätigen Sie den Eingang meines Widerrufs.",
    ].join("\n");
    setNotice(true);
    window.location.href = "mailto:info@latelierdor.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  const field = "w-full border border-current/20 bg-transparent px-4 py-3 text-base";
  return (
    <section className="n-page pb-32" aria-labelledby="return-form-title">
      <div className="max-w-3xl border-t pt-12" style={{ borderColor: "var(--n-line-soft)" }}>
        <h2 id="return-form-title" className="n-serif text-[32px] mb-5">{t.nav.returns}</h2>
        <p className="n-body mb-7">
          Rücksendung oder Widerruf anmelden. Ein Grund ist nicht erforderlich.
          Das Formular öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.
          Bitte senden Sie die Nachricht dort tatsächlich ab.
        </p>
        <form onSubmit={submit} className="grid gap-5">
          <label className="grid gap-2">Name <input className={field} name="name" required maxLength={120} autoComplete="name" /></label>
          <label className="grid gap-2">E-Mail <input className={field} name="email" type="email" required maxLength={254} autoComplete="email" /></label>
          <label className="grid gap-2">Bestellnummer (falls vorhanden) <input className={field} name="order" maxLength={100} /></label>
          <label className="grid gap-2">Artikel / Ware <textarea className={field} name="items" required rows={2} maxLength={1000} /></label>
          <label className="grid gap-2">Bestelldatum (optional) <input className={field} name="date" type="date" /></label>
          <label className="grid gap-2">Grund / Nachricht (optional) <textarea className={field} name="reason" rows={3} maxLength={1000} /></label>
          <button type="submit" className="n-cta justify-self-start">Widerruf per E-Mail vorbereiten</button>
        </form>
        {notice && <p role="status" className="n-body mt-5">Bitte prüfen Sie Ihr E-Mail-Programm und senden Sie die vorbereitete Nachricht ab. Ohne Versand ist der Widerruf nicht übermittelt.</p>}
        <p className="n-body mt-6 text-sm">Alternativ können Sie Ihren Widerruf direkt an <a className="underline" href="mailto:info@latelierdor.com">info@latelierdor.com</a> senden. Die gesetzlichen Widerrufsrechte bleiben unberührt.</p>
      </div>
    </section>
  );
}
