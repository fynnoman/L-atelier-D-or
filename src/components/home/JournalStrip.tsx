import Link from "next/link";
import { CAHIERS } from "@/data/journal";

export default function JournalStrip() {
  return (
    <section
      className="n-section-lg relative"
      style={{ background: "var(--n-bg-2)" }}
    >
      <div className="n-page">
        <span className="n-eyebrow block mb-24">Journal</span>

        <div className="grid grid-cols-12 gap-x-6 mb-24">
          <div className="col-span-12">
            <h2
              className="n-display leading-[0.92]"
              style={{
                fontSize: "clamp(56px, 11vw, 200px)",
                fontWeight: 200,
              }}
            >
              Die Hefte <br />
              <span className="opacity-80">des Hauses.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 mb-24">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="n-body leading-[1.5]"
              style={{
                fontSize: "clamp(18px, 1.6vw, 22px)",
                color: "var(--n-muted)",
              }}
            >
              Drei Hefte bislang. Wir veröffentlichen ein bis zwei pro Saison,
              wenn wir etwas zu sagen haben.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-24">
          {CAHIERS.map((c) => (
            <Link
              key={c.slug}
              href={`/journal/${c.slug}`}
              className="col-span-12 md:col-span-4 group block"
            >
              <article
                className="relative n-mask n-frame n-frame-45"
              >
                <div className={`n-tile is-${c.tone}`} />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,0.5) 100%)",
                  }}
                />
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span
                    className="n-meta"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    Heft {c.numeral}
                  </span>
                  <span
                    className="n-meta opacity-70"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {c.read}
                  </span>
                </div>
              </article>

              <div className="mt-8">
                <div className="n-eyebrow mb-4 opacity-70">
                  {c.rubric} · {c.date}
                </div>
                <h3
                  className="n-display leading-[1] mb-4"
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 200,
                  }}
                >
                  {c.title}
                </h3>
                <span
                  className="n-meta"
                  style={{ color: "var(--n-muted)" }}
                >
                  Heft lesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
