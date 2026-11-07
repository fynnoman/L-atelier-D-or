"use client";

import { useEffect, useRef } from "react";

/**
 * Cinematic closeup moment — plays the moment it enters the viewport,
 * pauses as it leaves. No text, no CTAs. Just the film.
 */
export default function CloseupFilm({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const s = sectionRef.current;
    if (!v || !s) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.2 }
    );

    io.observe(s);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", background: "#000" }}
      aria-label="Closeup"
    >
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[20vh]"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[20vh]"
        style={{
          background:
            "linear-gradient(0deg, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        }}
      />
    </section>
  );
}
