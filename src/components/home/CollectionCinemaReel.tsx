"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Piece } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { formatPrice } from "@/lib/i18n/format";
import { localizePiece } from "@/lib/i18n/content";

type MoodPalette = {
  bg: string;
  ink: string;
  muted: string;
  halo: string;
  accent: string;
};

const PALETTES: Record<Piece["mood"], MoodPalette> = {
  rouge: {
    bg: "#140A0C",
    ink: "#F3E7D7",
    muted: "rgba(243,231,215,0.62)",
    halo: "radial-gradient(60% 60% at 70% 40%, rgba(173, 42, 55, 0.35), transparent 70%)",
    accent: "#C4414E",
  },
  foret: {
    bg: "#000000",
    ink: "#F2F2F2",
    muted: "rgba(242,242,242,0.6)",
    halo: "radial-gradient(60% 60% at 70% 40%, rgba(79, 125, 91, 0.22), transparent 70%)",
    accent: "#4F7D5B",
  },
  cristal: {
    bg: "#000000",
    ink: "#F2F2F2",
    muted: "rgba(242,242,242,0.6)",
    halo: "radial-gradient(60% 60% at 70% 40%, rgba(180, 200, 210, 0.18), transparent 70%)",
    accent: "#B8BCC4",
  },
  emeraude: {
    bg: "#000000",
    ink: "#F2F2F2",
    muted: "rgba(242,242,242,0.6)",
    halo: "radial-gradient(60% 60% at 70% 40%, rgba(46, 128, 105, 0.22), transparent 70%)",
    accent: "#2E8069",
  },
};

export default function CollectionCinemaReel({ pieces }: { pieces: Piece[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const pieceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const t = useT();
  const locale = useLocale();
  const N = pieces.length;

  // Scroll-gesteuert: Fortschritt per rAF, direkt ins DOM geschrieben
  // (kein React-Re-Render pro Scroll-Frame).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    let last = -1;
    const apply = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
      if (Math.abs(p - last) < 0.0005) return;
      last = p;
      const f = p * (N - 1);
      for (let i = 0; i < N; i++) {
        const w = Math.max(0, Math.min(1, 1.5 - Math.abs(f - i) * 3));
        const node = pieceRefs.current[i];
        if (node) {
          node.style.opacity = String(w);
          node.style.pointerEvents = w > 0.6 ? "auto" : "none";
          node.style.willChange = w > 0.02 && w < 0.98 ? "opacity" : "auto";
          node.setAttribute("aria-hidden", w < 0.6 ? "true" : "false");
        }
        const dot = dotRefs.current[i];
        if (dot) {
          const a = Math.max(0, 1 - Math.abs(f - i));
          dot.style.opacity = String(0.35 + 0.65 * a);
          dot.style.transform = `scale(${1 + 0.9 * a})`;
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [N]);

  return (
    <section
      ref={sectionRef}
      className="collection-cinema-reel relative"
      style={{ height: `${N * 100}svh` }}
      aria-label="Collection Roi"
    >
      <div className="collection-cinema-reel-inner sticky top-0 h-[100svh] overflow-hidden">
        {pieces.map((piece, i) => (
          <PieceCanvas
            key={piece.slug}
            piece={piece}
            index={i}
            total={N}
            locale={locale}
            ctaLabel={t.home.alternating.voirLaPiece}
            innerRef={(node) => {
              pieceRefs.current[i] = node;
            }}
          />
        ))}

        <div
          aria-hidden
          className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 z-[3] flex flex-col items-center gap-5"
        >
          {pieces.map((piece, i) => (
            <span
              key={piece.slug}
              ref={(node) => {
                dotRefs.current[i] = node;
              }}
              className="block rounded-full"
              style={{
                width: 6,
                height: 6,
                background: PALETTES[piece.mood].accent,
                opacity: i === 0 ? 1 : 0.35,
                transform: `scale(${i === 0 ? 1.9 : 1})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PieceCanvas({
  piece,
  index,
  total,
  locale,
  ctaLabel,
  innerRef,
}: {
  piece: Piece;
  index: number;
  total: number;
  innerRef: (node: HTMLDivElement | null) => void;
  locale: "fr" | "de" | "en" | "it";
  ctaLabel: string;
}) {
  const loc = localizePiece(piece, locale);
  const palette = PALETTES[piece.mood];
  const weight = index === 0 ? 1 : 0;

  return (
    <div
      ref={innerRef}
      className="collection-piece absolute inset-0"
      style={{
        opacity: weight,
        background: palette.bg,
        pointerEvents: weight > 0.6 ? "auto" : "none",
      }}
      aria-hidden={weight < 0.6}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: palette.halo }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[22vh]"
        style={{
          background: `linear-gradient(180deg, ${palette.bg} 0%, transparent 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[26vh]"
        style={{
          background: `linear-gradient(0deg, ${palette.bg} 0%, transparent 100%)`,
        }}
      />

      <div className="n-page relative z-[1] h-full">
        <div className="grid grid-cols-12 gap-x-6 h-full items-center">
          <div
            className="col-span-12 md:col-span-6 relative z-[2]"
          >
            <div className="flex items-center gap-4 mb-10">
              <span
                className="block h-px"
                style={{ width: 36, background: palette.accent }}
              />
              <span
                style={{
                  color: palette.muted,
                  fontSize: "11px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {loc.chapter}
              </span>
            </div>

            <h3
              className="n-product-name mb-10"
              style={{
                fontSize: "clamp(64px, 10vw, 180px)",
                lineHeight: 0.92,
                color: palette.ink,
                textShadow: `0 0 40px ${palette.accent}22`,
              }}
            >
              {piece.name}
            </h3>

            <p
              className="n-quote mb-8"
              style={{
                fontSize: "clamp(20px, 2.2vw, 30px)",
                lineHeight: 1.3,
                color: palette.ink,
                maxWidth: "26ch",
              }}
            >
              « {loc.tagline} »
            </p>

            <p
              className="n-body mb-12"
              style={{
                fontSize: "clamp(14px, 1.05vw, 16px)",
                lineHeight: 1.65,
                color: palette.muted,
                maxWidth: "44ch",
              }}
            >
              {loc.materie}
            </p>

            <div
              className="flex items-baseline gap-8 pt-6 border-t"
              style={{ borderColor: `${palette.ink}22` }}
            >
              <span
                className="n-serif leading-none"
                style={{
                  fontSize: "clamp(22px, 2vw, 28px)",
                  color: palette.ink,
                }}
              >
                {formatPrice(piece.priceEuro, locale)}
              </span>
              <Link
                href={`/collection/${piece.slug}`}
                className="n-link group inline-flex items-center gap-3"
                style={{ color: palette.ink }}
              >
                <span>{ctaLabel}</span>
                <span
                  aria-hidden
                  className="inline-block h-px transition-[width] duration-500"
                  style={{ width: 36, background: palette.accent }}
                />
              </Link>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-6 relative z-[1]"
          >
            <div
              className="relative mx-auto"
              style={{
                aspectRatio: "4 / 5",
                maxWidth: "min(560px, 92%)",
                width: "100%",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(50% 50% at 50% 50%, ${palette.accent}33 0%, transparent 70%)`,
                  filter: "blur(40px)",
                  transform: "scale(1.2)",
                }}
              />
              {piece.image && (
                <img
                  src={piece.image}
                  alt={`${piece.name} · ${loc.tagline}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 n-mono"
        style={{ color: palette.muted, fontSize: "11px", letterSpacing: "0.24em" }}
      >
        {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}

