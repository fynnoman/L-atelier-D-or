"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useT } from "@/lib/i18n/LanguageContext";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const t = useT();
  const lines = t.collectionIndex.title;
  const whisper = t.collectionIndex.lede;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const grainOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.18, 0.18, 0]);
  const fade = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);
  const rise = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden n-velour"
      style={{ minHeight: "110vh" }}
      aria-label="Manifeste"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: grainOpacity,
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(237,227,206,0.35), transparent 40%), radial-gradient(1px 1px at 70% 60%, rgba(237,227,206,0.25), transparent 50%), radial-gradient(1px 1px at 40% 80%, rgba(237,227,206,0.3), transparent 45%)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="absolute inset-0 flex items-center">
        <div className="n-page w-full relative z-[1]">
          <motion.div
            style={{ opacity: fade, y: rise }}
            className="mx-auto max-w-[1280px] text-center"
          >
            <div className="flex items-center justify-center gap-5 mb-10 md:mb-14">
              <span
                className="block h-px"
                style={{ width: "48px", background: "rgba(237,227,206,0.45)" }}
              />
              <span
                className="n-eyebrow"
                style={{
                  color: "rgba(237,227,206,0.72)",
                  letterSpacing: "0.32em",
                }}
              >
                {t.home.endCall.eyebrow}
              </span>
              <span
                className="block h-px"
                style={{ width: "48px", background: "rgba(237,227,206,0.45)" }}
              />
            </div>

            <h2
              className="n-display"
              style={{
                fontSize: "clamp(56px, 11vw, 192px)",
                lineHeight: 0.96,
                color: "#EDE3CE",
                letterSpacing: "-0.02em",
              }}
            >
              {lines.map((line, i) => (
                <LineReveal key={i} line={line} index={i} progress={scrollYProgress} />
              ))}
            </h2>

            {whisper && (
              <p
                className="n-serif-italic mt-14 md:mt-20 mx-auto whitespace-pre-line"
                style={{
                  fontSize: "clamp(16px, 1.4vw, 22px)",
                  color: "rgba(237,227,206,0.78)",
                  maxWidth: "48ch",
                  lineHeight: 1.55,
                }}
              >
                {whisper}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LineReveal({
  line,
  index,
  progress,
}: {
  line: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.12 + index * 0.08;
  const end = start + 0.18;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [24, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        display: "block",
      }}
    >
      {line}
    </motion.span>
  );
}
