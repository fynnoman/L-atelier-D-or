import Link from "next/link";
import PageEyebrow from "../PageEyebrow";
import { CAHIERS } from "@/data/journal";

export default function JournalStrip() {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-6">
            <PageEyebrow numeral="§ 05" label="Journal" className="mb-8" />
            <h2
              className="n-display leading-[0.94]"
              style={{ fontSize: "clamp(48px, 8vw, 132px)" }}
            >
              Les cahiers <br />
              <span className="n-serif-italic opacity-80">de la maison.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-6 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Trois cahiers pour l&rsquo;instant. Nous en publions un ou deux par saison,
              quand nous avons quelque chose à dire — et jamais autrement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {CAHIERS.map((c, i) => {
            const align = i === 1 ? "md:translate-y-16" : i === 2 ? "md:translate-y-8" : "";
            return (
              <Link
                key={c.slug}
                href={`/journal/${c.slug}`}
                className={`col-span-12 md:col-span-4 group ${align} block`}
              >
                <article
                  className="relative n-mask overflow-hidden"
                  style={{ aspectRatio: "5 / 6" }}
                >
                  <div className={`n-tile is-${c.tone}`} />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,15,10,0) 45%, rgba(20,15,10,0.55) 100%)",
                    }}
                  />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="n-mono" style={{ color: "rgba(244,240,232,0.85)" }}>
                      Cahier {c.numeral} · {c.rubric}
                    </span>
                    <span className="n-mono opacity-70" style={{ color: "rgba(244,240,232,0.75)" }}>
                      {c.read}
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-6 right-6">
                    <h3
                      className="n-display leading-[1.02] mb-4"
                      style={{
                        fontSize: "clamp(28px, 3.4vw, 44px)",
                        color: "var(--n-bg)",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="n-serif text-[15px] leading-[1.5] opacity-80 max-w-[42ch]"
                      style={{ color: "var(--n-bg)" }}
                    >
                      {c.chapo}
                    </p>
                  </div>
                </article>

                <div className="mt-6 flex items-baseline justify-between">
                  <span className="n-mono opacity-55">{c.date}</span>
                  <span
                    className="n-serif-italic text-[15px]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    Lire le cahier →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
