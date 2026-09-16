import Link from "next/link";
import MaskedImage from "../MaskedImage";
import Numeral from "../Numeral";
import PageEyebrow from "../PageEyebrow";
import { PIECES } from "@/data/collection";

// Compositions asymétriques par pièce
const LAYOUT: Record<
  string,
  { colStart: string; colSpan: string; rowSpan?: string; offsetY?: string; ratio: string; tone: "rouge" | "foret" | "cristal" | "emeraude" }
> = {
  "roi-rouge":     { colStart: "md:col-start-1", colSpan: "md:col-span-6",  rowSpan: "md:row-span-2", offsetY: "md:translate-y-0",   ratio: "3 / 4",  tone: "rouge" },
  "roi-noir":      { colStart: "md:col-start-8", colSpan: "md:col-span-5",  offsetY: "md:translate-y-24", ratio: "4 / 5",  tone: "foret" },
  "roi-cristal":   { colStart: "md:col-start-2", colSpan: "md:col-span-4",  offsetY: "md:translate-y-16", ratio: "1 / 1",  tone: "cristal" },
  "roi-emeraude":  { colStart: "md:col-start-7", colSpan: "md:col-span-6",  offsetY: "md:translate-y-8",  ratio: "4 / 3",  tone: "emeraude" },
};

export default function CollectionMosaic() {
  return (
    <section
      className="n-section-lg relative overflow-hidden"
      style={{ background: "var(--n-bg-warm)" }}
    >
      <div className="n-page">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-24">
          <div>
            <PageEyebrow numeral="§ 02" label="Première Collection" className="mb-8" />
            <h2
              className="n-display leading-[0.94]"
              style={{ fontSize: "clamp(56px, 10vw, 168px)" }}
            >
              Roi. <span className="n-serif-italic opacity-80">Quatre atmosphères.</span>
            </h2>
          </div>
          <p
            className="n-serif max-w-[38ch] text-[19px] leading-[1.5]"
            style={{ color: "var(--n-muted)" }}
          >
            Nous n&rsquo;avons pas dessiné quatre montures. Nous avons dessiné quatre heures,
            quatre lieux, quatre manières d&rsquo;entrer dans une pièce.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-24 md:gap-y-32 relative">
          {PIECES.map((piece) => {
            const l = LAYOUT[piece.slug];
            return (
              <article
                key={piece.slug}
                className={`col-span-12 ${l.colStart} ${l.colSpan} ${l.offsetY ?? ""} relative`}
              >
                <div className="relative">
                  {/* Numéro romain géant en arrière-plan */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -left-6 md:-left-12 opacity-[0.10] select-none"
                  >
                    <span
                      className="n-display leading-none"
                      style={{ fontSize: "clamp(140px, 22vw, 320px)", color: "var(--n-ink)" }}
                    >
                      <Numeral n={piece.index} />
                    </span>
                  </span>

                  <Link href={`/collection/${piece.slug}`} className="group block relative">
                    <MaskedImage
                      src={piece.image}
                      alt={`${piece.name} — ${piece.tagline}`}
                      tone={l.tone}
                      ratio={l.ratio}
                    />

                    {/* Label flottant en haut */}
                    <div
                      className="absolute -top-6 left-4 md:left-8 z-10 flex items-center gap-3 px-3 py-2"
                      style={{
                        background: "var(--n-bg)",
                        border: "1px solid var(--n-line)",
                      }}
                    >
                      <span className="n-mono opacity-70">{piece.numeral}</span>
                      <span className="n-hair opacity-30" aria-hidden />
                      <span className="n-eyebrow" style={{ color: "var(--n-ink)" }}>
                        {piece.name}
                      </span>
                    </div>

                    {/* Note sensorielle en overlay */}
                    <div
                      className="absolute bottom-4 right-4 max-w-[24ch] text-right p-4"
                      style={{
                        background: "rgba(244,240,232,0.88)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <p
                        className="n-serif-italic text-[15px] leading-[1.4]"
                        style={{ color: "var(--n-ink)" }}
                      >
                        « {piece.scene} »
                      </p>
                    </div>
                  </Link>

                  <div className="mt-8 flex items-start justify-between gap-6">
                    <div>
                      <h3
                        className="n-display leading-[1] mb-2"
                        style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
                      >
                        {piece.name}
                      </h3>
                      <p
                        className="n-serif-italic text-[18px] leading-[1.4] max-w-[38ch]"
                        style={{ color: "var(--n-muted)" }}
                      >
                        {piece.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/collection/${piece.slug}`}
                      className="n-link shrink-0 mt-2"
                    >
                      Voir la pièce
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Ligne de bas de section */}
        <div className="mt-40 flex flex-wrap items-baseline justify-between gap-6">
          <p
            className="n-serif text-[22px] leading-[1.4] max-w-[38ch]"
            style={{ color: "var(--n-ink)" }}
          >
            Quatre pièces, un an.<br />
            Quatre-vingts euros. Ni plus, ni moins.
          </p>
          <Link href="/collection" className="n-cta">
            La collection complète
          </Link>
        </div>
      </div>
    </section>
  );
}
