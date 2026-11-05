"use client";

import { useEffect, useRef, useState } from "react";
import type { Piece } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { localizePiece } from "@/lib/i18n/content";

/**
 * Pinned horizontal gallery — user scrolls vertically, the strip of
 * piece photos drifts horizontally. Classic luxury scroll moment.
 */
export default function WornGallery({ pieces }: { pieces: Piece[] }) {
  const locale = useLocale();
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const shots = pieces.filter((p) => p.imageWorn);
  const N = shots.length;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ticking = false;
    const compute = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, []);

  if (N === 0) return null;

  const eased = easeInOutCubic(progress);
  const translatePercent = -eased * ((N - 1) / N) * 100;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${N * 110}vh`, background: "#000" }}
      aria-label="Portées"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          aria-hidden
          className="absolute top-10 left-1/2 -translate-x-1/2 z-[2] flex items-center gap-4 pointer-events-none"
        >
          <span
            className="block h-px"
            style={{ width: 40, background: "rgba(255,255,255,0.35)" }}
          />
          <span
            className="n-eyebrow"
            style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.32em" }}
          >
            {t.home.showcase.footerLine}
          </span>
          <span
            className="block h-px"
            style={{ width: 40, background: "rgba(255,255,255,0.35)" }}
          />
        </div>

        <div
          className="absolute inset-0 flex items-center"
          style={{
            transform: `translate3d(${translatePercent}vw, 0, 0)`,
            willChange: "transform",
          }}
        >
          <div
            className="flex items-center"
            style={{ width: `${N * 100}vw`, height: "100%" }}
          >
            {shots.map((piece, i) => {
              const loc = localizePiece(piece, locale);
              const slabCenter = (i + 0.5) / N;
              const distance = Math.abs(eased - slabCenter);
              const focus = Math.max(0, 1 - distance * N);
              const nameOpacity = Math.pow(focus, 1.4);

              return (
                <figure
                  key={piece.slug}
                  className="relative flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    padding: "clamp(60px, 10vh, 120px) clamp(24px, 8vw, 180px)",
                  }}
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
                      style={{
                        objectPosition: "50% 30%",
                        transform: `scale(${1 + focus * 0.04})`,
                        transition: "transform 180ms linear",
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />
                    <figcaption
                      className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center"
                      style={{
                        opacity: nameOpacity,
                        transition: "opacity 160ms linear",
                      }}
                    >
                      <div
                        className="n-product-name"
                        style={{
                          fontSize: "clamp(32px, 4.4vw, 68px)",
                          color: "#F2F2F2",
                          lineHeight: 1,
                        }}
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
        </div>

        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex items-center gap-3"
        >
          {shots.map((piece, i) => {
            const slabCenter = (i + 0.5) / N;
            const distance = Math.abs(eased - slabCenter);
            const focus = Math.max(0, 1 - distance * N);
            return (
              <span
                key={piece.slug}
                className="block h-px"
                style={{
                  width: 28,
                  background:
                    focus > 0.5 ? "#F2F2F2" : "rgba(242, 242, 242, 0.25)",
                  transition: "background 200ms ease",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
