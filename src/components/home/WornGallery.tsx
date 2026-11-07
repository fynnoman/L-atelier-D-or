"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Piece } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { localizePiece } from "@/lib/i18n/content";

/**
 * Große Bildersektion: horizontaler Scroll-Snap-Track.
 * Desktop: manuelle Vor-/Zurück-Pfeile + Positionsanzeige (kein scroll-
 * gesteuertes Pinning mehr). Mobil: natives horizontales Touch-Swipen.
 * Alle Bilder sind in beiden Fällen erreichbar.
 */
export default function WornGallery({ pieces }: { pieces: Piece[] }) {
  const locale = useLocale();
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const shots = pieces.filter((p) => p.imageWorn);
  const N = shots.length;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (el.clientWidth === 0) return;
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex((prev) => (prev === i ? prev : i));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }, []);

  if (N === 0) return null;

  const arrowClass =
    "hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white transition-opacity disabled:opacity-30 disabled:cursor-default hover:enabled:border-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

  return (
    <section
      className="relative h-[100svh]"
      style={{ background: "#000" }}
      aria-label="Portées"
      aria-roledescription="carousel"
    >
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 z-[2] flex items-center gap-4 pointer-events-none"
      >
        <span className="block h-px" style={{ width: 40, background: "rgba(255,255,255,0.35)" }} />
        <span className="n-eyebrow" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.32em" }}>
          {t.home.showcase.footerLine}
        </span>
        <span className="block h-px" style={{ width: 40, background: "rgba(255,255,255,0.35)" }} />
      </div>

      <div
        ref={trackRef}
        className="absolute inset-0 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overscrollBehaviorX: "contain", touchAction: "pan-x pan-y" }}
      >
        {shots.map((piece, i) => {
          const loc = localizePiece(piece, locale);
          return (
            <figure
              key={piece.slug}
              className="relative flex-shrink-0 snap-center flex items-center justify-center"
              style={{
                width: "100%",
                height: "100%",
                padding: "clamp(60px, 10vh, 120px) clamp(24px, 8vw, 180px)",
              }}
              aria-label={`${i + 1} / ${N}`}
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "clamp(10px, 1vw, 18px)",
                  maxWidth: "min(1100px, 100%)",
                  margin: "0 auto",
                }}
              >
                <img
                  src={piece.imageWorn!}
                  alt={`${piece.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
                  }}
                />
                <figcaption className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center">
                  <div
                    className="n-product-name"
                    style={{ fontSize: "clamp(32px, 4.4vw, 68px)", color: "#F2F2F2", lineHeight: 1 }}
                  >
                    {piece.name}
                  </div>
                  <div
                    className="n-serif-italic mt-3"
                    style={{
                      fontSize: "clamp(13px, 1vw, 16px)",
                      color: "rgba(242,242,242,0.72)",
                      maxWidth: "36ch",
                      margin: "12px auto 0",
                    }}
                  >
                    {loc.tagline}
                  </div>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>

      {/* Desktop-Pfeile */}
      <button
        type="button"
        aria-label="Vorheriges Bild"
        disabled={index === 0}
        onClick={() => goTo(Math.max(0, index - 1))}
        className={`${arrowClass} absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-[3]`}
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Nächstes Bild"
        disabled={index === N - 1}
        onClick={() => goTo(Math.min(N - 1, index + 1))}
        className={`${arrowClass} absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[3]`}
      >
        →
      </button>

      {/* Positionsanzeige */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-4">
        <div aria-hidden className="flex items-center gap-3">
          {shots.map((piece, i) => (
            <span
              key={piece.slug}
              className="block h-px"
              style={{
                width: 28,
                background: i === index ? "#F2F2F2" : "rgba(242, 242, 242, 0.25)",
                transition: "background 200ms ease",
              }}
            />
          ))}
        </div>
        <span
          aria-live="polite"
          className="text-xs tabular-nums"
          style={{ color: "rgba(242,242,242,0.7)", letterSpacing: "0.2em" }}
        >
          {index + 1} / {N}
        </span>
      </div>
    </section>
  );
}
