"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  position?: string;
};

export default function ProductGallery({
  slides,
  ratio = "1 / 1",
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
            style={{
              aspectRatio: ratio,
              background: "var(--n-bg-2)",
              borderRadius: "clamp(18px, 1.8vw, 32px)",
            }}
          >
            <img
              src={s.src}
              alt={s.alt}
              draggable={false}
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: s.fit ?? "cover",
                objectPosition: s.position ?? "50% 50%",
              }}
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
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center transition-all disabled:opacity-25 hover:scale-[1.06]"
            style={{
              background: "rgba(255,255,255,0.72)",
              color: "#0A0A0A",
              fontSize: "20px",
              lineHeight: 1,
              backdropFilter: "saturate(1.4) blur(14px)",
              WebkitBackdropFilter: "saturate(1.4) blur(14px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 4px 18px rgba(10,10,10,0.18)",
            }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollTo(index + 1)}
            disabled={index === slides.length - 1}
            aria-label="Nächstes Bild"
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center transition-all disabled:opacity-25 hover:scale-[1.06]"
            style={{
              background: "rgba(255,255,255,0.72)",
              color: "#0A0A0A",
              fontSize: "20px",
              lineHeight: 1,
              backdropFilter: "saturate(1.4) blur(14px)",
              WebkitBackdropFilter: "saturate(1.4) blur(14px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 4px 18px rgba(10,10,10,0.18)",
            }}
          >
            ›
          </button>

          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "saturate(1.4) blur(14px)",
              WebkitBackdropFilter: "saturate(1.4) blur(14px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 4px 14px rgba(10,10,10,0.18)",
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Bild ${i + 1} von ${slides.length}`}
                className="h-[6px] rounded-full transition-all"
                style={{
                  width: i === index ? "22px" : "6px",
                  background: "#0A0A0A",
                  opacity: i === index ? 0.9 : 0.35,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
