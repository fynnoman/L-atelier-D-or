"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Piece } from "@/data/collection";
import { formatEuro } from "@/data/collection";

const TONE: Record<Piece["mood"], "rouge" | "foret" | "cristal" | "emeraude"> = {
  rouge: "rouge",
  foret: "foret",
  cristal: "cristal",
  emeraude: "emeraude",
};

function PieceCard({ piece }: { piece: Piece }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slides: { src: string; alt: string; fit: "contain" | "cover"; pos: string }[] = [];
  if (piece.image) slides.push({ src: piece.image, alt: `${piece.name} · ${piece.tagline}`, fit: "contain", pos: "50% 50%" });
  if (piece.imageWorn) slides.push({ src: piece.imageWorn, alt: `${piece.name} portée`, fit: "cover", pos: "50% 30%" });

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (t.clientWidth > 0) setIndex(Math.round(t.scrollLeft / t.clientWidth));
      });
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      t.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="group block">
      <Link href={`/collection/${piece.slug}`} className="block">
        <div
          className="n-frame n-frame-11 relative select-none"
          style={{ background: "var(--n-bg-2)" }}
        >
          {slides.length > 0 ? (
            <div
              ref={trackRef}
              className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="flex-none w-full h-full snap-start relative"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    draggable={false}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: s.fit,
                      objectPosition: s.pos,
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={`n-tile is-${TONE[piece.mood]}`} />
          )}
        </div>
      </Link>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className="h-[2px] transition-all"
              style={{
                width: i === index ? "24px" : "12px",
                background: "var(--n-ink)",
                opacity: i === index ? 0.85 : 0.28,
              }}
              aria-hidden
            />
          ))}
        </div>
      )}

      <Link href={`/collection/${piece.slug}`} className="block">
        <div className="mt-6 flex items-baseline justify-between gap-6">
          <div>
            <div className="n-meta opacity-55 mb-3">Pièce {piece.numeral}</div>
            <div
              className="n-display leading-none"
              style={{ fontSize: "clamp(24px, 2.6vw, 36px)", fontWeight: 300 }}
            >
              {piece.name}
            </div>
          </div>
          <span className="n-meta opacity-60">{formatEuro(piece.priceEuro)}</span>
        </div>
        <p
          className="mt-3 n-body max-w-[38ch]"
          style={{
            fontSize: "clamp(13px, 0.9vw, 15px)",
            color: "var(--n-muted)",
          }}
        >
          {piece.tagline}
        </p>
      </Link>
    </div>
  );
}

export default function CollectionShowcase({ pieces }: { pieces: Piece[] }) {
  return (
    <section
      className="n-section-lg relative"
      style={{ background: "var(--n-bg)" }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-8">
            <span className="n-eyebrow block mb-10">Première Collection</span>
            <h2
              className="n-display leading-[0.94]"
              style={{ fontSize: "clamp(56px, 10vw, 176px)", fontWeight: 300 }}
            >
              Roi. <br />
              <span className="opacity-80">Quatre pièces, un seul regard.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p
              className="n-body leading-[1.55]"
              style={{
                fontSize: "clamp(16px, 1.2vw, 19px)",
                color: "var(--n-muted)",
              }}
            >
              Quatre atmosphères, quatre heures, quatre manières d&rsquo;entrer
              dans une pièce. 78,90 € l&rsquo;exemplaire, numérotée à la main.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-14">
          {pieces.map((piece) => (
            <div key={piece.slug} className="col-span-6 md:col-span-3">
              <PieceCard piece={piece} />
            </div>
          ))}
        </div>

        <div
          className="mt-24 pt-10 border-t flex items-baseline justify-between flex-wrap gap-6"
          style={{ borderColor: "var(--n-line-soft)" }}
        >
          <span className="n-meta opacity-60">
            Fait main à Paris · Édition numérotée
          </span>
          <Link href="/collection" className="n-link">
            Toute la collection
          </Link>
        </div>
      </div>
    </section>
  );
}
