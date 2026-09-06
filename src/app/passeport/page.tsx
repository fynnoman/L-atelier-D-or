import type { Metadata } from "next";
import Link from "next/link";
import PasseportSearch from "@/components/passeport/PasseportSearch";
import { passeports } from "@/data/passeport";

export const metadata: Metadata = {
  title: "Passeport & Provenance",
  description:
    "Jede Fassung führt einen digitalen Pass. Geben Sie Ihre Punze-Nummer ein und sehen Sie die Provenance.",
};

export default function PasseportIndex() {
  return (
    <div className="relative min-h-[100dvh] bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <header className="mb-14 md:mb-20">
          <p className="eyebrow-gold">Passeport & Provenance</p>
          <h1 className="mt-5 display text-ink text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.02em]">
            Jede Fassung führt
            <span
              className="block"
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-fraunces), serif",
                color: "var(--or-2)",
              }}
            >
              ihre eigene Chronik.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[14px] text-muted leading-[1.9]">
            Vom ersten Draht bis zur Signatur im Salon. Rohmaterial, Politur,
            Vergoldung, Punze, Anprobe. Der Passeport lebt mit Ihrer Fassung.
          </p>
        </header>

        <PasseportSearch />

        <section className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow-gold">Musterpasse</p>
              <h2 className="mt-3 display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                Zwei öffentliche Beispiele.
              </h2>
            </div>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {passeports.map((p) => (
              <li key={p.reference}>
                <Link
                  href={`/passeport/${p.reference}`}
                  className="group block border border-line p-6 md:p-8 bg-bg-2/40 hover:border-or-2"
                  style={{ transition: "border-color 260ms var(--ease-out)" }}
                >
                  <div className="flex items-baseline justify-between">
                    <p className="eyebrow-gold">Passeport</p>
                    <p
                      className="numeral text-ink"
                      style={{
                        fontSize: "clamp(1.6rem,2.4vw,2rem)",
                        fontStyle: "italic",
                      }}
                    >
                      {p.reference}
                    </p>
                  </div>
                  <p className="mt-6 text-[17px] text-ink font-light">
                    {p.productName}
                  </p>
                  <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted mt-1">
                    {p.edition} · N° {String(p.editionNumber).padStart(3, "0")}
                  </p>
                  <p className="mt-6 text-[12px] text-muted italic">
                    {p.timeline.length} Stationen · zuletzt {p.timeline[p.timeline.length - 1]?.atelier}
                  </p>
                  <span className="mt-6 inline-block link-gold text-[11px] uppercase tracking-[0.22em]">
                    Passeport öffnen
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
