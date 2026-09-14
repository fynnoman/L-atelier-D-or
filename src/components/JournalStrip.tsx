import Link from "next/link";
import { articles } from "@/data/journal";
import Reveal from "./Reveal";

const heroBg: Record<string, string> = {
  boutique:
    "linear-gradient(135deg, var(--parchment-3) 0%, var(--parchment-2) 55%, var(--parchment) 100%)",
  rouge:
    "linear-gradient(135deg, #1c0a07 0%, #7e1f14 100%)",
  foret:
    "linear-gradient(135deg, #0a1710 0%, #1f3d24 100%)",
  cristal:
    "linear-gradient(135deg, #f2f5f8 0%, #b6d2e3 100%)",
  emeraude:
    "linear-gradient(135deg, #12102a 0%, #1f6b4a 60%, #6a3f8e 100%)",
};

export default function JournalStrip() {
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(90px, 14vh, 160px)",
        background: "var(--bg)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <div>
              <div className="eyebrow-or">Journal</div>
              <h2
                className="display mt-4"
                style={{
                  fontSize: "clamp(36px, 5vw, 68px)",
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                Les cahiers de la maison.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/journal" className="link" data-underline style={{ fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-2)" }}>
              Tous les cahiers →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-14">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <Link
                href={`/journal/${a.slug}`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    background: heroBg[a.hero] ?? heroBg.boutique,
                    borderRadius: 2,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 grain pointer-events-none"
                    style={{ opacity: 0.32 }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: 24 }}>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        color: a.hero === "cristal" ? "var(--noir-2)" : "var(--or-glow)",
                      }}
                    >
                      {a.chapter} · {a.kicker}
                    </span>
                    <div
                      className="serif"
                      style={{
                        fontSize: 22,
                        lineHeight: 1.2,
                        color: a.hero === "cristal" ? "var(--noir)" : "var(--parchment)",
                      }}
                    >
                      {a.title}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>
                    {a.dek}
                  </p>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 11,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--or-2)",
                    }}
                  >
                    {a.date} · {a.read} de lecture
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
