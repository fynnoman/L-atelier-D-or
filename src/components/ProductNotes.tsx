import type { Piece } from "@/data/collection";
import Reveal from "./Reveal";

export default function ProductNotes({ piece }: { piece: Piece }) {
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
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.24 }} />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--mood-glow)",
              marginBottom: 20,
            }}
          >
            Notes sensorielles
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h3
            className="display"
            style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "var(--mood-ink)", lineHeight: 1 }}
          >
            L’atmosphère,
            <span style={{ fontStyle: "italic", color: "var(--mood-glow)" }}> en quatre notes.</span>
          </h3>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {piece.notes.map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div
                className="relative"
                style={{
                  paddingTop: 28,
                  paddingBottom: 28,
                  borderTop: "1px solid var(--mood-line)",
                  borderBottom: "1px solid var(--mood-line)",
                }}
              >
                <div
                  className="numeral"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.28em",
                    color: "var(--mood-glow)",
                    marginBottom: 8,
                  }}
                >
                  {romanize(i + 1)}
                </div>
                <div
                  className="serif"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)", color: "var(--mood-ink)" }}
                >
                  {n}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function romanize(n: number) {
  return ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ"][n - 1] ?? String(n);
}
