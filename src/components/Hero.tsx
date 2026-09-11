"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

// Scroll-scrubbed cinematic opener.
// The outer section is tall; the inner container is sticky and holds the video.
// scrollYProgress (0 → 1 across the section) is mapped to video.currentTime,
// so scrolling advances/reverses the video frame by frame.
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.muted = true;
    v.playsInline = true;

    // Force the browser to actually decode and paint the first frame.
    // Without this, some browsers keep the <video> as an undrawn surface
    // until .play() or a currentTime change, and mouse-triggered repaints
    // over the element can flash raw macroblocks.
    const primeFirstFrame = () => {
      const duration = v.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const p = Math.max(0, Math.min(1, scrollYProgress.get()));
      const t = p * (duration - 0.0001);
      // Play → pause guarantees a real paint of the current frame, then
      // seek to sync with scroll state.
      const playPromise = v.play();
      const settle = () => {
        v.pause();
        v.currentTime = t || 0.0001;
      };
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.then(settle).catch(() => {
          v.currentTime = t || 0.0001;
        });
      } else {
        settle();
      }
    };

    v.addEventListener("loadedmetadata", primeFirstFrame);
    v.addEventListener("loadeddata", primeFirstFrame, { once: true });
    try {
      v.load();
    } catch {
      // no-op
    }
    return () => {
      v.removeEventListener("loadedmetadata", primeFirstFrame);
      v.removeEventListener("loadeddata", primeFirstFrame);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const v = videoRef.current;
    if (!v) return;
    const duration = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 0;
    if (!duration) return;
    // Small epsilon so we can reach the very last frame without clamping issues.
    const clamped = Math.max(0, Math.min(1, p));
    targetTimeRef.current = clamped * (duration - 0.0001);

    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const vid = videoRef.current;
        if (!vid) return;
        // Only seek when the delta is meaningful — avoids thrashing the decoder.
        if (Math.abs(vid.currentTime - targetTimeRef.current) > 1 / 60) {
          vid.currentTime = targetTimeRef.current;
        }
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "300vh", backgroundColor: "var(--noir)" }}
      aria-label="L'Atelier d'Or — Ouverture"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/video/hero.mp4"
          poster="/video/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
