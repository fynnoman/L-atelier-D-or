import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { references } from "@/data/maison";

export const metadata: Metadata = {
  title: "Journal · Presse & Points de Vente",
  description:
    "Presse und Concept Stores in Paris, Berlin, Milan und London — Häuser, die uns tragen.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Presse & Points de Vente."
        intro="Ausgewählte Häuser und Redaktionen, die eine Fassung der Maison als Teil ihrer Handschrift führen."
      />

      <section className="relative bg-bg pb-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ul>
            {references.map((r) => (
              <li
                key={r.name}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-line-soft py-8 last:border-b"
              >
                <p className="font-light text-ink text-[clamp(1.4rem,2.4vw,2.2rem)] leading-tight tracking-[-0.01em]">
                  {r.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                  {r.sector}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-24 text-center">
            <p className="eyebrow">Points de Vente · Anfragen</p>
            <h2 className="mt-6 font-light text-ink text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] tracking-[-0.015em] max-w-2xl mx-auto">
              Für Concept Stores und Redaktionen: Presse-Anfrage per Mail.
            </h2>
            <div className="mt-10 flex justify-center gap-3 flex-wrap">
              <a href="mailto:presse@latelier-dor.example" className="lv-btn">
                Presse-Anfrage
              </a>
              <Link href="/kontakt" className="lv-btn lv-btn-solid">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
