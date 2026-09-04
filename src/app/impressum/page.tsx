import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { maison } from "@/data/maison";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[820px] px-6 md:px-12">
          <article className="space-y-10 text-[14.5px] leading-[1.75] text-muted">
            <div>
              <h2 className="eyebrow">Herausgeber</h2>
              <p className="mt-4 font-light text-ink text-[18px] leading-tight">
                {maison.legalForm}
              </p>
              <p className="mt-3">
                {maison.address.street}
                <br />
                {maison.address.zip} {maison.address.city}
                <br />
                {maison.address.country}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Kontakt</h2>
              <p className="mt-4">
                Telefon:{" "}
                <a
                  href={`tel:${maison.concierge.phone.replace(/\s/g, "")}`}
                  className="link-underline text-ink"
                >
                  {maison.concierge.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${maison.emailPrimary}`}
                  className="link-underline text-ink"
                >
                  {maison.emailPrimary}
                </a>
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Vertretungsberechtigter</h2>
              <p className="mt-4 text-ink">{maison.founder} · Maître Fondateur</p>
            </div>

            <div>
              <h2 className="eyebrow">Registereintrag</h2>
              <p className="mt-4">
                Eingetragen im Handelsregister Paris. Registernummer wird auf
                Anfrage mitgeteilt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Umsatzsteuer-ID</h2>
              <p className="mt-4">
                Umsatzsteuer-Identifikationsnummer wird auf Anfrage mitgeteilt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Inhaltlich verantwortlich</h2>
              <p className="mt-4">
                Léa Marchand · Concierge
                <br />
                Anschrift wie oben
              </p>
            </div>

            <div>
              <h2 className="eyebrow">EU-Streitschlichtung</h2>
              <p className="mt-4">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="link-underline text-ink"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Haftungshinweis</h2>
              <p className="mt-4">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
