"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ScrollVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useT();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "#0A0A0A" }}
      aria-label="Intro"
    >
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
          </div>
        </div>
      </div>
    </section>
  );
}
