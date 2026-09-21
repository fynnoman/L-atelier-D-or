import Link from "next/link";
import MaskedImage from "../MaskedImage";
import type { Piece } from "@/data/collection";
import { formatEuro } from "@/data/collection";

const TONE: Record<Piece["mood"], "rouge" | "foret" | "cristal" | "emeraude"> = {
  rouge: "rouge",
  foret: "foret",
  cristal: "cristal",
  emeraude: "emeraude",
};

function Card({ piece }: { piece: Piece }) {
  return (
    <Link href={`/collection/${piece.slug}`} className="group block">
      <div className="n-frame n-frame-34 n-mask">
        {piece.image ? (
          <img
            src={piece.image}
            alt={`${piece.name} — ${piece.tagline}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`n-tile is-${TONE[piece.mood]}`} />
        )}
      </div>
      <div className="mt-8 flex items-baseline justify-between gap-6">
        <div>
          <div className="n-meta opacity-60 mb-3">{piece.numeral} · {piece.chapter.split("·")[1]?.trim() ?? ""}</div>
          <div
            className="n-display leading-none"
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 200 }}
          >
            {piece.name}
          </div>
        </div>
        <span className="n-meta opacity-60">{formatEuro(piece.priceEuro)}</span>
      </div>
      <p
        className="mt-4 n-body max-w-[42ch]"
        style={{
          fontSize: "clamp(14px, 1vw, 16px)",
          color: "var(--n-muted)",
        }}
      >
        {piece.tagline}
      </p>
    </Link>
  );
}

export default function Diptych({
  pair,
}: {
  pair: [Piece, Piece];
}) {
  return (
    <section className="n-section relative">
      <div className="n-page grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 md:col-span-6">
          <Card piece={pair[0]} />
        </div>
        <div className="col-span-12 md:col-span-6 md:mt-24">
          <Card piece={pair[1]} />
        </div>
      </div>
    </section>
  );
}

export function DiptychAligned({ pair }: { pair: [Piece, Piece] }) {
  return (
    <section className="n-section relative">
      <div className="n-page grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 md:col-span-6"><Card piece={pair[0]} /></div>
        <div className="col-span-12 md:col-span-6"><Card piece={pair[1]} /></div>
      </div>
    </section>
  );
}
