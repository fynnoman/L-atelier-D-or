import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { maison } from "@/data/maison";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[820px] px-6 md:px-12">
          <article className="space-y-10 text-[14.5px] leading-[1.75] text-muted">
            <div>
              <h2 className="eyebrow">Verantwortlicher</h2>
              <p className="mt-4">
                {maison.legalForm}
                <br />
                {maison.address.street}, {maison.address.zip}{" "}
                {maison.address.city}
                <br />
                Telefon: {maison.concierge.phone}
                <br />
                E-Mail: {maison.emailPrimary}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Datenschutzbeauftragte</h2>
              <p className="mt-4">
                Sabrina Bissig, erreichbar über die oben genannten Kontaktdaten
                mit dem Zusatz „z. H. Datenschutzbeauftragte".
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Erhebung personenbezogener Daten</h2>
              <p className="mt-4">
                Beim Besuch dieser Website werden automatisch Informationen
                allgemeiner Natur erfasst (IP-Adresse, Datum, Uhrzeit,
                Browsertyp). Diese Daten lassen keine Rückschlüsse auf Ihre
                Person zu und sind für die technische Bereitstellung der
                Website erforderlich. Eine Auswertung findet nicht statt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Anfragen per Formular oder E-Mail</h2>
              <p className="mt-4">
                Wenn Sie uns per Formular oder E-Mail kontaktieren, werden
                Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b
                DSGVO). Wir geben diese Daten nicht weiter.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Speicherdauer</h2>
              <p className="mt-4">
                Personenbezogene Daten werden gelöscht, sobald der Zweck der
                Verarbeitung entfällt. Gesetzliche Aufbewahrungsfristen bleiben
                unberührt.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Ihre Rechte</h2>
              <p className="mt-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung, Datenübertragbarkeit und Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten.
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Cookies</h2>
              <p className="mt-4">
                Diese Website verwendet ausschließlich technisch erforderliche
                Cookies. Es findet kein Tracking und keine Analyse Ihres
                Nutzungsverhaltens statt.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
