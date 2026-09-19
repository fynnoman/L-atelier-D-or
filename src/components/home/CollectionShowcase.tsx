import Link from "next/link";
import type { Piece } from "@/data/collection";

const TONE: Record<Piece["mood"], "rouge" | "foret" | "cristal" | "emeraude"> = {
  rouge: "rouge",
  foret: "foret",
  cristal: "cristal",
  emeraude: "emeraude",
};

function PieceCard({ piece, offset }: { piece: Piece; offset?: boolean }) {
  return (
    <Link
      href={`/collection/${piece.slug}`}
      className={`group block ${offset ? "md:mt-24" : ""}`}
    >
      <div
        className="n-frame n-frame-11 n-mask relative"
        style={{ background: "var(--n-bg-2)" }}
      >
        {piece.image ? (
          <>
            <img
              src={piece.image}
              alt={`${piece.name} · ${piece.tagline}`}
              className="absolute inset-0 w-full h-full object-contain will-change-[opacity,transform] transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-[1.015]"
              loading="lazy"
              decoding="async"
            />
            {piece.imageWorn && (
              <img
                src={piece.imageWorn}
                alt={`${piece.name} getragen`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.04] will-change-[opacity,transform] transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
                style={{ objectPosition: "50% 30%" }}
                loading="lazy"
                decoding="async"
                aria-hidden
              />
            )}
          </>
        ) : (
          <div className={`n-tile is-${TONE[piece.mood]}`} />
        )}
      </div>

      <div className="mt-8 flex items-baseline justify-between gap-6">
        <div>
          <div className="n-meta opacity-55 mb-3">
            Fassung {piece.numeral}
          </div>
          <div
            className="n-display leading-none"
            style={{ fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 200 }}
          >
            {piece.name}
          </div>
        </div>
        <span className="n-meta opacity-60">{piece.priceEuro} €</span>
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

export default function CollectionShowcase({ pieces }: { pieces: Piece[] }) {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-8">
            <span className="n-eyebrow block mb-10">Erste Kollektion</span>
            <h2
              className="n-display leading-[0.9]"
              style={{
                fontSize: "clamp(64px, 12vw, 220px)",
                fontWeight: 200,
              }}
            >
              Roi. <br />
              <span className="opacity-80">Vier Fassungen.</span>
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
              Achtzig Euro pro Exemplar. Jede Fassung in Paris von Hand
              gefertigt und von Hand nummeriert.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-8">
          <div className="col-span-12 md:col-span-6">
            <PieceCard piece={pieces[0]} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <PieceCard piece={pieces[1]} offset />
          </div>
          <div className="col-span-12 md:col-span-6">
            <PieceCard piece={pieces[2]} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <PieceCard piece={pieces[3]} offset />
          </div>
        </div>

        <div
          className="mt-32 pt-10 border-t flex items-baseline justify-between flex-wrap gap-6"
          style={{ borderColor: "var(--n-line-soft)" }}
        >
          <span className="n-meta opacity-60">
            Fait main à Paris · Édition numérotée
          </span>
          <Link href="/collection" className="n-link">
            Ganze Kollektion
          </Link>
        </div>
      </div>
    </section>
  );
}
