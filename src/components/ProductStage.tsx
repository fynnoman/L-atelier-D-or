import type { Mood, Piece } from "@/data/collection";
import Reveal from "./Reveal";

type Props = { piece: Piece };

export default function ProductStage({ piece }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingInline: "var(--page-x)",
        paddingTop: "clamp(140px, 22vh, 260px)",
        paddingBottom: "clamp(80px, 12vh, 140px)",
        background: "var(--mood-bg)",
        color: "var(--mood-ink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--mood-halo)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain"
        style={{ opacity: 0.32 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--mood-bg) 92%, transparent) 100%)",
        }}
      />

      <BigSilhouette mood={piece.mood} />

      <div className="relative mx-auto max-w-[1400px] flex flex-col items-center text-center">
        <Reveal>
          <div className="flex items-center gap-4" style={{ color: "var(--mood-muted)" }}>
            <span className="hair" style={{ background: "var(--mood-glow)" }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
              }}
            >
              {piece.chapter}
            </span>
            <span className="hair" style={{ background: "var(--mood-glow)" }} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            aria-hidden
            className="mt-10 serif"
            style={{
              fontSize: "clamp(72px, 12vw, 220px)",
              lineHeight: 0.9,
              opacity: 0.16,
              color: "var(--mood-glow)",
              letterSpacing: "0.08em",
            }}
          >
            {piece.numeral}
          </div>
        </Reveal>

        <Reveal delay={100} className="-mt-8 md:-mt-16">
          <h1
            className="display"
            style={{
              fontSize: "clamp(60px, 11vw, 180px)",
              lineHeight: 0.9,
              color: "var(--mood-ink)",
            }}
          >
            {piece.name}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="serif mt-8 mx-auto"
            style={{
              fontSize: "clamp(18px, 2vw, 26px)",
              lineHeight: 1.4,
              maxWidth: 640,
              color: "var(--mood-muted)",
            }}
          >
            {piece.tagline}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div
            className="mt-14 grid gap-10 md:grid-cols-3"
            style={{ color: "var(--mood-muted)" }}
          >
            {[
              ["Le lieu", piece.place],
              ["L’heure", piece.hour],
              ["La silhouette", piece.silhouette],
            ].map(([label, value]) => (
              <div key={label} className="text-left md:text-center">
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.34em",
                    textTransform: "uppercase",
                    color: "var(--mood-glow)",
                    opacity: 0.8,
                    marginBottom: 8,
                  }}
                >
                  {label}
                </div>
                <div
                  className="serif"
                  style={{ fontSize: 16, lineHeight: 1.45, color: "var(--mood-ink)" }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BigSilhouette({ mood }: { mood: Mood }) {
  const shape = mood === "cristal" ? "oval" : mood === "rouge" ? "rect" : "panto";
  return (
    <svg
      viewBox="0 0 1200 640"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] w-[min(1200px,140%)] h-auto pointer-events-none"
      style={{ opacity: 0.10, color: "var(--mood-glow)" }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        {shape === "oval" && (
          <>
            <ellipse cx="430" cy="320" rx="220" ry="130" />
            <ellipse cx="770" cy="320" rx="220" ry="130" />
            <path d="M 650 320 Q 600 290 550 320" />
            <path d="M 210 320 L 60 340" />
            <path d="M 990 320 L 1140 340" />
          </>
        )}
        {shape === "rect" && (
          <>
            <rect x="200" y="190" width="360" height="260" rx="26" />
            <rect x="640" y="190" width="360" height="260" rx="26" />
            <path d="M 560 300 Q 600 275 640 300" />
            <path d="M 200 300 L 40 320" />
            <path d="M 1000 300 L 1160 320" />
          </>
        )}
        {shape === "panto" && (
          <>
            <path d="M 200 260 Q 200 440 420 440 Q 640 440 640 260 Q 640 200 420 200 Q 200 200 200 260 Z" />
            <path d="M 660 260 Q 660 440 880 440 Q 1100 440 1100 260 Q 1100 200 880 200 Q 660 200 660 260 Z" />
            <path d="M 640 310 Q 650 290 660 310" />
            <path d="M 200 310 L 40 330" />
            <path d="M 1100 310 L 1260 330" />
          </>
        )}
      </g>
    </svg>
  );
}
