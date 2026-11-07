"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const t = useT();
  const locale = useLocale();
  const N = pieces.length;
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const activeIndex = isMobile ? mobileIndex : desktopIndex;
  const goTo = (i: number) => isMobile ? setMobileIndex(i) : setDesktopIndex(i);
  const touchStart = useRef<{ x: number; y: number } | null>(null);


  return (
    <section
      ref={sectionRef}
      className="collection-cinema-reel relative h-[100svh]"
      aria-label="Collection Roi"
    >
      
      <div className="collection-cinema-reel-inner relative h-[100svh] overflow-hidden"
        onTouchStart={(e) => { touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
        onTouchEnd={(e) => {
          if (!touchStart.current || window.innerWidth >= 768) return;
          const dx = e.changedTouches[0].clientX - touchStart.current.x;
          const dy = e.changedTouches[0].clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            setMobileIndex((i) => Math.max(0, Math.min(N - 1, i + (dx < 0 ? 1 : -1))));
          }
        }}
      >
        {pieces.map((piece, i) => (
          <PieceCanvas
            key={piece.slug}
            piece={piece}
            index={i}
            total={N}
            active={i === activeIndex}
            locale={locale}
            ctaLabel={t.home.alternating.voirLaPiece}
          />
        ))}

        <ProgressRail
          pieces={pieces}
          activeIndex={activeIndex}
          total={N}
        />
        <div className="absolute bottom-5 md:bottom-8 right-6 md:right-12 z-10 flex items-center gap-4" style={{ color: "#FFFFFF" }}>
          <button type="button" aria-label="Vorheriges Modell" disabled={activeIndex === 0} onClick={() => goTo(Math.max(0, activeIndex - 1))} className="rounded-full border border-white/40 bg-black/50 px-4 py-2 disabled:opacity-30">←</button>
          <span className="text-sm tabular-nums">{activeIndex + 1} / {N}</span>
          <button type="button" aria-label="Nächstes Modell" disabled={activeIndex === N - 1} onClick={() => goTo(Math.min(N - 1, activeIndex + 1))} className="rounded-full border border-white/40 bg-black/50 px-4 py-2 disabled:opacity-30">→</button>
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
  active,
}: {
  piece: Piece;
  index: number;
  total: number;
  active: boolean;
  locale: "fr" | "de" | "en" | "it";
  ctaLabel: string;
}) {
  const loc = localizePiece(piece, locale);
  const palette = PALETTES[piece.mood];
  const weight = active ? 1 : 0;
  const shift = 0;
  const imgShift = 0;

  return (
    <div
      className="collection-piece absolute inset-0 transition-opacity duration-300"
      style={{
        opacity: weight,
        background: palette.bg,
        pointerEvents: weight > 0.6 ? "auto" : "none",
        transition: "opacity 300ms ease",
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
            style={{
              transform: `translate3d(0, ${shift}px, 0)`,
              willChange: "transform",
            }}
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
            style={{
              transform: `translate3d(0, ${imgShift}px, 0)`,
              willChange: "transform",
            }}
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

function ProgressRail({
  pieces,
  activeIndex,
  total,
}: {
  pieces: Piece[];
  activeIndex: number;
  total: number;
}) {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 z-[3] flex flex-col items-center gap-5"
    >
      {pieces.map((piece, i) => {
        const active = i === activeIndex ? 1 : 0;
        const palette = PALETTES[piece.mood];
        return (
          <span
            key={piece.slug}
            className="block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: palette.accent,
              opacity: 0.35 + 0.65 * active,
              transform: `scale(${1 + 0.9 * active})`,
              transition: "opacity 160ms linear, transform 160ms linear",
            }}
          />
        );
      })}
    </div>
  );
}
