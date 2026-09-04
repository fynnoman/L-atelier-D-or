import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { maison } from "@/data/maison";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
};

export default function BarrierefreiheitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Erklärung zur Barrierefreiheit"
      />
      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[820px] px-6 md:px-12">
          <article className="space-y-8 text-[14.5px] leading-[1.75] text-muted">
            <p>
              Wir bemühen uns, unsere Website im Einklang mit den Vorgaben zur
              Barrierefreiheit im Web zugänglich zu gestalten. Grundlage ist
              der Standard WCAG 2.2 auf Level AA.
            </p>
            <div>
              <h2 className="eyebrow">Stand der Vereinbarkeit</h2>
              <p className="mt-4">
                Diese Website ist teilweise vereinbar mit den genannten
                Anforderungen. Einzelne Bereiche werden schrittweise
                nachgezogen.
              </p>
            </div>
            <div>
              <h2 className="eyebrow">Barrieren melden</h2>
              <p className="mt-4">
                Fällt Ihnen eine nicht barrierefreie Stelle auf, wenden Sie
                sich bitte an{" "}
                <a
                  className="link-underline text-ink"
                  href={`mailto:${maison.emailPrimary}`}
                >
                  {maison.emailPrimary}
                </a>
                . Wir prüfen den Hinweis und melden uns zeitnah zurück.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
