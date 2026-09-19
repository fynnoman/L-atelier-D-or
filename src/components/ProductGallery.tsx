"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

export default function ProductGallery({
  slides,
  ratio = "16 / 10",
}: {
  slides: Slide[];
  ratio?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback(
    (i: number) => {
      const t = trackRef.current;
      if (!t) return;
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      t.scrollTo({ left: clamped * t.clientWidth, behavior: "smooth" });
    },
    [slides.length]
  );

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (t.clientWidth > 0) {
          setIndex(Math.round(t.scrollLeft / t.clientWidth));
        }
      });
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      t.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative select-none">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="flex-none w-full snap-start relative overflow-hidden"
            style={{ aspectRatio: ratio, background: "var(--n-bg-2)" }}
          >
            <img
              src={s.src}
              alt={s.alt}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            aria-label="Vorheriges Bild"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center transition-opacity disabled:opacity-25"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#0A0A0A",
              fontSize: "20px",
              lineHeight: 1,
              backdropFilter: "blur(6px)",
            }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollTo(index + 1)}
            disabled={index === slides.length - 1}
            aria-label="Nächstes Bild"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center transition-opacity disabled:opacity-25"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#0A0A0A",
              fontSize: "20px",
              lineHeight: 1,
              backdropFilter: "blur(6px)",
            }}
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Bild ${i + 1} von ${slides.length}`}
                className="h-[2px] transition-all"
                style={{
                  width: i === index ? "32px" : "16px",
                  background: "#FFFFFF",
                  opacity: i === index ? 0.95 : 0.5,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
