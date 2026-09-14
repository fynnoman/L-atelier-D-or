import type { Piece } from "@/data/collection";
import Reveal from "./Reveal";

export default function ProductScene({ piece }: { piece: Piece }) {
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(100px, 16vh, 180px)",
        background:
          "linear-gradient(180deg, var(--mood-bg) 0%, var(--mood-bg-2) 100%)",
        color: "var(--mood-ink)",
      }}
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.28 }} />

      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="hair" style={{ background: "var(--mood-glow)", width: 40 }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
              }}
            >
              {piece.scene.kicker}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h2
            className="display"
            style={{
              fontSize: "clamp(36px, 5.4vw, 80px)",
              lineHeight: 1.05,
              color: "var(--mood-ink)",
              letterSpacing: "-0.005em",
              maxWidth: 980,
            }}
          >
            <span style={{ fontStyle: "italic" }}>« </span>
            {piece.scene.title}
            <span style={{ fontStyle: "italic" }}> »</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1fr]">
          {piece.scene.body.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p
                className="serif"
                style={{
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.7,
                  color: "var(--mood-muted)",
                }}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
