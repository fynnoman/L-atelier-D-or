"use client";

const words = [
  "Handgefertigt",
  "Titan Béta",
  "18 Karat",
  "Limitiert",
  "Berlin · Jura",
  "Made in Europe",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-8 border-y border-line marquee-mask">
      <div className="flex gap-16 animate-[scroll_38s_linear_infinite] whitespace-nowrap will-change-transform">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl text-ink-2/70 tracking-tight"
          >
            {w}
            <span className="mx-8 text-gold-2/70">·</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
