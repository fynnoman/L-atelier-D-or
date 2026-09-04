import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { maison, artisans } from "@/data/maison";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Maison L'Atelier d'Or. Concierge: Léa Marchand. Paris, Berlin, Jura.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt · Réservation"
        title="Sprechen Sie mit der Maison."
        intro="Ob Erstanfrage, laufende Reservation oder eine Fassung nach Maß — die gesamte Auftragsabwicklung liegt in einer Hand."
      />

      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
            {/* Concierge card */}
            <div className="border border-line-soft p-8 md:p-12">
              <p className="eyebrow">Concierge · Réservation</p>
              <p className="mt-5 font-light text-ink text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.015em]">
                {maison.concierge.name}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-muted">
                {maison.concierge.role}
              </p>
              <p className="mt-6 max-w-lg text-[14.5px] leading-[1.75] text-muted">
                Erste Ansprechpartnerin für Angebote, Terminierung, Sehstärke
                und Anpassung. Rückmeldung innerhalb eines Werktages.
              </p>
              <div className="mt-8 hairline-soft" />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="eyebrow">Telefon</p>
                  <a
                    href={`tel:${maison.concierge.phone.replace(/\s/g, "")}`}
                    className="mt-3 block font-light text-ink text-[18px] link-underline"
                  >
                    {maison.concierge.phone}
                  </a>
                </div>
                <div>
                  <p className="eyebrow">E-Mail</p>
                  <a
                    href={`mailto:${maison.concierge.email}`}
                    className="mt-3 block font-light text-ink text-[16px] link-underline break-all"
                  >
                    {maison.concierge.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <aside className="bg-bg-2 p-8 md:p-12">
              <p className="eyebrow">Anschrift · Siège</p>
              <p className="mt-5 font-light text-ink text-[20px] leading-tight tracking-[-0.01em]">
                {maison.legalForm}
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-muted">
                {maison.address.street}
                <br />
                {maison.address.zip} {maison.address.city}
                <br />
                {maison.address.country}
              </p>
              <div className="mt-8 hairline-soft" />
              <p className="eyebrow mt-6">Maître · Fondateur</p>
              <p className="mt-4 font-light text-ink text-[18px] leading-tight">
                {maison.founder}
              </p>
              <a
                href="mailto:remi@latelier-dor.example"
                className="mt-2 block link-underline text-[13.5px] text-muted break-all"
              >
                remi@latelier-dor.example
              </a>
            </aside>
          </div>

          {/* Weitere Ansprechpersonen */}
          <div className="mt-24">
            <p className="eyebrow">Weitere Ansprechpersonen</p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {artisans
                .filter((m) => m.name !== "Léa Marchand" && m.name !== "Rémi Kessler")
                .map((m) => (
                  <li key={m.name} className="border-t border-line-soft pt-6">
                    <p className="font-light text-ink text-[18px] leading-tight tracking-[-0.01em]">
                      {m.name}
                    </p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-muted-2">
                      {m.role}
                    </p>
                    {m.email && (
                      <a
                        href={`mailto:${m.email}`}
                        className="mt-4 inline-block text-[13px] text-muted link-underline break-all"
                      >
                        {m.email}
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Quick form */}
          <div className="mt-24 border border-line-soft p-8 md:p-14">
            <p className="eyebrow">Formular · Schnelle Anfrage</p>
            <h2 className="mt-5 max-w-3xl font-light text-ink text-[clamp(1.4rem,2.6vw,2.2rem)] leading-tight tracking-[-0.01em]">
              Beschreiben Sie uns kurz Anlass und Silhouette.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${maison.concierge.email}`}
      method="post"
      encType="text/plain"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Input label="Vorname" name="vorname" required />
      <Input label="Nachname" name="nachname" required />
      <Input label="E-Mail" name="email" type="email" required />
      <Input label="Telefon" name="telefon" type="tel" />
      <Input
        label="Interesse"
        name="interesse"
        placeholder="Solène, Malbec, Orphée, Valois, Maßfertigung …"
        wide
      />
      <div className="md:col-span-2">
        <label className="eyebrow block">Anmerkungen</label>
        <textarea
          name="nachricht"
          rows={5}
          required
          className="mt-3 w-full border border-line px-4 py-3 text-[14.5px] leading-relaxed text-ink outline-none resize-none focus:border-ink"
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Vertraulich · Nur im Haus
        </p>
        <button type="submit" className="lv-btn lv-btn-solid">
          Anfrage senden
        </button>
      </div>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2" : ""}>
      <label className="eyebrow block">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border border-line px-4 py-3 text-[14.5px] text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
