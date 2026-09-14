import Link from "next/link";
import type { Mood } from "@/data/collection";

type Props = {
  slug: string;
  numeral: string;
  name: string;
  tagline: string;
  mood: Mood;
  chapter: string;
  large?: boolean;
};

/**
 * A composed "scene" tile — pure CSS + type only. No product photography.
 * The composition tells you which mood you're in without an image.
 */
export default function MoodTile({ slug, numeral, name, tagline, mood, chapter, large }: Props) {
  return (
    <Link
      href={`/collection/${slug}`}
      data-mood={mood}
      className="group relative block overflow-hidden isolate"
      style={{
        aspectRatio: large ? "5 / 6" : "4 / 5",
        borderRadius: 2,
        color: "var(--mood-ink)",
      }}
    >
      {/* Atmospheric background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "var(--mood-bg)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "var(--mood-halo)",
          transition: "transform 1200ms var(--ease-editorial), opacity 800ms var(--ease-editorial)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 55%, color-mix(in oklab, var(--mood-bg) 90%, transparent) 100%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 grain pointer-events-none"
        style={{ opacity: 0.35 }}
      />

      {/* Silhouette — a stylised, ultra-minimal frame */}
      <FrameSilhouette mood={mood} />

      {/* Copy */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "clamp(20px, 3vw, 40px)" }}
      >
        <div className="flex items-center justify-between">
          <span
            className="numeral"
            style={{
              fontSize: 12,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--mood-glow)",
              opacity: 0.85,
            }}
          >
            {chapter}
          </span>
          <span
            className="serif"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              color: "var(--mood-glow)",
              opacity: 0.35,
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            {numeral}
          </span>
        </div>

        <div>
          <h3
            className="display"
            style={{
              fontSize: large ? "clamp(44px, 5.6vw, 84px)" : "clamp(36px, 4.2vw, 60px)",
              lineHeight: 0.95,
              color: "var(--mood-ink)",
            }}
          >
            {name}
          </h3>
          <p
            className="serif mt-3"
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "var(--mood-muted)",
              maxWidth: 380,
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </p>

          <div
            className="mt-6 flex items-center gap-3"
            style={{ color: "var(--mood-glow)" }}
          >
            <span
              className="inline-flex items-center gap-2"
              style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase" }}
            >
              Regarder la pièce
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  height: 1,
                  width: 32,
                  background: "currentColor",
                  transformOrigin: "left center",
                  transition: "width 500ms var(--ease-out)",
                }}
                className="group-hover:!w-14"
              />
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function FrameSilhouette({ mood }: { mood: Mood }) {
  // A simple, luxurious hint of a frame — never a full product illustration.
  const shape = mood === "cristal" ? "oval" : mood === "rouge" ? "rect" : "panto";

  return (
    <svg
      viewBox="0 0 800 480"
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{
        opacity: 0.22,
        transition: "opacity 900ms var(--ease-editorial), transform 1200ms var(--ease-editorial)",
        color: "var(--mood-glow)",
      }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        {shape === "oval" && (
          <>
            <ellipse cx="270" cy="240" rx="150" ry="95" />
            <ellipse cx="530" cy="240" rx="150" ry="95" />
            <path d="M 420 240 Q 400 220 380 240" />
            <path d="M 120 240 L 40 260" />
            <path d="M 680 240 L 760 260" />
          </>
        )}
        {shape === "rect" && (
          <>
            <rect x="120" y="150" width="240" height="170" rx="18" />
            <rect x="440" y="150" width="240" height="170" rx="18" />
            <path d="M 360 220 Q 400 200 440 220" />
            <path d="M 120 220 L 40 240" />
            <path d="M 680 220 L 760 240" />
          </>
        )}
        {shape === "panto" && (
          <>
            <path d="M 120 200 Q 120 320 270 320 Q 420 320 420 200 Q 420 160 270 160 Q 120 160 120 200 Z" />
            <path d="M 440 200 Q 440 320 590 320 Q 740 320 740 200 Q 740 160 590 160 Q 440 160 440 200 Z" />
            <path d="M 420 230 Q 430 210 440 230" />
            <path d="M 120 230 L 30 250" />
            <path d="M 740 230 L 830 250" />
          </>
        )}
      </g>
    </svg>
  );
}
