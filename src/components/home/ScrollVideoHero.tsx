"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useT, useLocale } from "@/lib/i18n/LanguageContext";
import { formatPrice } from "@/lib/i18n/format";
import { PIECES } from "@/data/collection";

export default function ScrollVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const t = useT();
  const locale = useLocale();

  const panels = 1 + PIECES.length;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    const tt = trackRef.current;
    if (!tt) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (tt.clientWidth > 0) {
          const i = Math.round(tt.scrollLeft / tt.clientWidth);
          setIndex((prev) => (prev === i ? prev : i));
        }
      });
    };
    tt.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      tt.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (i: number) => {
    const tt = trackRef.current;
    if (!tt) return;
    tt.scrollTo({ left: i * tt.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "#0A0A0A" }}
      aria-label="Intro"
    >
      <div
        ref={trackRef}
        className="absolute inset-0 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollSnapStop: "always",
          overscrollBehaviorX: "contain",
          overscrollBehaviorY: "auto",
          touchAction: "pan-x pan-y",
        }}
      >
        {/* Panel 1 — Hero Video */}
        <div className="relative flex-none w-full h-full snap-start">
          <video
            ref={videoRef}
            poster="/video/hero-loop-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          >
            <source
              src="/video/hero-loop-mobile.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src="/video/hero-loop.mp4" type="video/mp4" />
          </video>

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.05) 22%, rgba(10,10,10,0.05) 55%, rgba(10,10,10,0.78) 100%)",
            }}
          />

          {/* Ecken-Marker oben links */}
          <div
            aria-hidden
            className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-10"
          >
            <span
              className="block h-px w-8"
              style={{ background: "rgba(255,255,255,0.5)" }}
            />
            <img
              src="/logo.png"
              alt=""
              style={{
                height: "22px",
                width: "auto",
                filter: "invert(1)",
                opacity: 0.82,
              }}
              draggable={false}
            />
          </div>

          <div
            aria-hidden
            className="hidden md:flex absolute top-8 right-8 items-center gap-3 z-10"
          >
            <span
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {t.home.hero.edition}
            </span>
            <span
              className="block h-px w-8"
              style={{ background: "rgba(255,255,255,0.5)" }}
            />
          </div>

          <div className="absolute inset-0 flex items-end z-10 pointer-events-none">
            <div
              className="n-page w-full pointer-events-auto"
              style={{
                paddingBottom:
                  "max(64px, env(safe-area-inset-bottom, 0px) + 48px)",
              }}
            >
              <div className="grid grid-cols-12 gap-x-6 items-end">
                <div className="col-span-12 md:col-span-9 lg:col-span-8">
                  <span
                    className="block mb-6 md:mb-10"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "11px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {t.home.hero.eyebrow}
                  </span>
                  <h1
                    className="n-quote max-w-[18ch]"
                    style={{
                      fontSize: "clamp(40px, 7.4vw, 136px)",
                      lineHeight: 1.02,
                      color: "#FFFFFF",
                      paddingBottom: "0.08em",
                    }}
                  >
                    {t.home.hero.title1} <br />
                    {t.home.hero.title2}
                  </h1>
                  {t.home.hero.lede && (
                    <p
                      className="n-body mt-6 md:mt-8 max-w-[46ch]"
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 17px)",
                        color: "rgba(255,255,255,0.78)",
                        lineHeight: 1.55,
                      }}
                    >
                      {t.home.hero.lede}
                    </p>
                  )}
                  <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-5">
                    <Link
                      href="/collection"
                      className="n-cta n-cta-ghost"
                      style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                    >
                      {t.home.hero.ctaCollection}
                    </Link>
                    <Link
                      href="/conseil"
                      className="n-cta n-cta-ghost"
                      style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                    >
                      {t.home.hero.ctaConseil}
                    </Link>
                    <Link
                      href="/atelier"
                      className="n-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      {t.home.hero.ctaAtelier}
                    </Link>
                  </div>
                </div>

                <div className="hidden md:flex col-span-12 md:col-span-3 lg:col-span-4 items-center justify-end gap-3">
                  <span
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "11px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {t.home.hero.scroll}
                  </span>
                  <span
                    className="block h-14 w-px"
                    style={{ background: "rgba(255,255,255,0.4)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Swipe-Hinweis rechts, nur Panel 1 */}
          <button
            type="button"
            onClick={() => scrollTo(1)}
            aria-label={locale === "de" ? "Zur Kollektion wischen" : "Faire défiler vers la collection"}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 items-center gap-3 group"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {locale === "de" ? "Produkte" : "Pièces"}
            </span>
            <span
              aria-hidden
              className="block h-px w-10 transition-[width] duration-300 group-hover:w-14"
              style={{ background: "currentColor" }}
            />
            <span aria-hidden style={{ fontSize: "14px" }}>→</span>
          </button>
        </div>

        {/* Panel 2..n — ein Panel pro Piece */}
        {PIECES.map((p) => (
          <div
            key={p.slug}
            className="relative flex-none w-full h-full snap-start"
            style={{
              background: `linear-gradient(160deg, ${p.teintes[0]?.hex ?? "#111"} 0%, ${p.teintes[1]?.hex ?? "#000"} 100%)`,
            }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-contain p-[8%] md:p-[6%]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            )}

            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0.28) 0%, rgba(10,10,10,0) 24%, rgba(10,10,10,0) 60%, rgba(10,10,10,0.62) 100%)",
              }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end z-10">
              <div
                className="n-page w-full"
                style={{
                  paddingBottom:
                    "max(64px, env(safe-area-inset-bottom, 0px) + 48px)",
                }}
              >
                <div className="grid grid-cols-12 gap-x-6 items-end">
                  <div className="col-span-12 md:col-span-8">
                    <span
                      className="block mb-5 md:mb-8"
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "11px",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {t.home.showcase.piece}
                    </span>
                    <h2
                      className="n-display"
                      style={{
                        fontSize: "clamp(44px, 8vw, 144px)",
                        fontWeight: 300,
                        lineHeight: 0.98,
                        color: "#FFFFFF",
                      }}
                    >
                      {p.name}
                    </h2>
                    <p
                      className="n-serif-italic mt-4 md:mt-5 max-w-[42ch]"
                      style={{
                        fontSize: "clamp(15px, 1.3vw, 20px)",
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {p.tagline}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 mt-6 md:mt-0 flex items-end justify-start md:justify-end gap-6">
                    <span
                      className="n-serif"
                      style={{
                        fontSize: "clamp(18px, 1.8vw, 24px)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {formatPrice(p.priceEuro, locale)}
                    </span>
                    <Link
                      href={`/collection/${p.slug}`}
                      className="n-cta n-cta-ghost"
                      style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                    >
                      {t.home.alternating.voirLaPiece}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots-Navigation */}
      <div
        className="absolute left-0 right-0 z-20 flex items-center justify-center gap-2 pointer-events-none"
        aria-hidden
        style={{
          bottom:
            "max(16px, calc(env(safe-area-inset-bottom, 0px) + 12px))",
        }}
      >
        {Array.from({ length: panels }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className="h-[3px] transition-all pointer-events-auto"
            style={{
              width: i === index ? "28px" : "14px",
              background:
                i === index ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.42)",
              borderRadius: "2px",
            }}
            aria-label={`Panel ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
