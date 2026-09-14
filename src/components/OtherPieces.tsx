import Link from "next/link";
import { collection, type Piece } from "@/data/collection";
import Reveal from "./Reveal";

const moodGradient: Record<string, string> = {
  rouge: "linear-gradient(135deg, #1c0a07 0%, #7e1f14 100%)",
  foret: "linear-gradient(135deg, #0a1710 0%, #1f3d24 100%)",
  cristal: "linear-gradient(135deg, #f2f5f8 0%, #b6d2e3 100%)",
  emeraude: "linear-gradient(135deg, #12102a 0%, #1f6b4a 60%, #6a3f8e 100%)",
};

export default function OtherPieces({ current }: { current: Piece }) {
  const others = collection.filter((p) => p.slug !== current.slug);
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(90px, 14vh, 160px)",
        background: "var(--mood-bg)",
        color: "var(--mood-ink)",
      }}
    >
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--mood-glow)",
                  marginBottom: 12,
                }}
              >
                Poursuivre
              </div>
              <h3
                className="display"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--mood-ink)", lineHeight: 1 }}
              >
                Les trois autres pièces.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/collection"
              className="link"
              data-underline
              style={{
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
              }}
            >
              Toute la collection →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                href={`/collection/${p.slug}`}
                className="group relative block overflow-hidden"
                style={{ aspectRatio: "4 / 5" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: moodGradient[p.mood] }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 grain pointer-events-none"
                  style={{ opacity: 0.32 }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-between"
                  style={{
                    padding: 24,
                    color: p.mood === "cristal" ? "var(--noir)" : "var(--parchment)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      opacity: 0.85,
                    }}
                  >
                    {p.numeral} · {p.chapter.split(" — ")[1] ?? p.chapter}
                  </span>
                  <div>
                    <h4
                      className="display"
                      style={{ fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1 }}
                    >
                      {p.name}
                    </h4>
                    <p
                      className="serif mt-2"
                      style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.4, maxWidth: 260 }}
                    >
                      {p.tagline}
                    </p>
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
