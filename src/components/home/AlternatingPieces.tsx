import Link from "next/link";
import type { Piece } from "@/data/collection";
import { formatEuro } from "@/data/collection";

function PieceSection({
  piece,
  index,
  flip,
}: {
  piece: Piece;
  index: number;
  flip: boolean;
}) {
  const isVelour = piece.mood === "rouge";
  const bg = isVelour
    ? undefined
    : index % 2 === 0
    ? "var(--n-bg)"
    : "var(--n-bg-2)";
  return (
    <section
      className={`relative overflow-hidden ${
        isVelour ? "n-velour n-velour-fade-top n-velour-fade-bottom" : ""
      }`}
      style={{
        paddingBlock: "clamp(96px, 14vh, 180px)",
        ...(bg ? { background: bg } : {}),
      }}
    >
      <div className="n-page relative z-[1]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 items-center">
          <div
            className={`col-span-12 md:col-span-6 ${
              flip ? "md:col-start-7 md:order-2" : "md:col-start-1"
            }`}
          >
            <Link href={`/collection/${piece.slug}`} className="group block">
              <div
                className="n-frame n-frame-11 n-mask relative"
                style={{ background: "var(--n-bg-3)" }}
              >
                {piece.image && (
                  <>
                    <img
                      src={piece.image}
                      alt={`${piece.name} — ${piece.tagline}`}
                      className="absolute inset-0 w-full h-full object-contain transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-[1.015]"
                      loading="lazy"
                      decoding="async"
                    />
                    {piece.imageWorn && (
                      <img
                        src={piece.imageWorn}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.04] transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
                        style={{ objectPosition: "50% 30%" }}
                        loading="lazy"
                        decoding="async"
                        aria-hidden
                      />
                    )}
                  </>
                )}
              </div>
            </Link>
          </div>

          <div
            className={`col-span-12 md:col-span-5 ${
              flip ? "md:col-start-1 md:order-1 md:pr-8" : "md:col-start-8 md:pl-8"
            }`}
          >
            <div className="flex items-baseline gap-6 mb-10">
              <span
                className="n-display leading-none opacity-25"
                style={{ fontSize: "clamp(64px, 6vw, 108px)", fontWeight: 300 }}
              >
                {piece.numeral}
              </span>
              <span
                className="n-eyebrow"
                style={isVelour ? { color: "rgba(237,227,206,0.72)" } : undefined}
              >
                {piece.chapter}
              </span>
            </div>

            <h2
              className="n-display leading-[0.94] mb-8"
              style={{
                fontSize: "clamp(48px, 7vw, 108px)",
                fontWeight: 300,
                color: isVelour ? "#EDE3CE" : undefined,
              }}
            >
              {piece.name}
            </h2>

            <p
              className="n-quote text-[22px] md:text-[26px] leading-[1.35] mb-8 max-w-[36ch]"
              style={{ color: isVelour ? "#EDE3CE" : "var(--n-ink)" }}
            >
              « {piece.tagline} »
            </p>

            <p
              className="n-body leading-[1.6] mb-10 max-w-[42ch]"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                color: isVelour ? "rgba(237,227,206,0.72)" : "var(--n-muted)",
              }}
            >
              {piece.materie}
            </p>

            <div
              className="flex items-baseline gap-6 pt-6 border-t"
              style={{
                borderColor: isVelour
                  ? "rgba(237,227,206,0.28)"
                  : "var(--n-line-soft)",
              }}
            >
              <span
                className="n-serif leading-none"
                style={{
                  fontSize: "clamp(22px, 2vw, 28px)",
                  color: isVelour ? "#EDE3CE" : undefined,
                }}
              >
                {formatEuro(piece.priceEuro)}
              </span>
              <Link
                href={`/collection/${piece.slug}`}
                className="n-link"
                style={isVelour ? { color: "#EDE3CE" } : undefined}
              >
                Voir la pièce
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AlternatingPieces({ pieces }: { pieces: Piece[] }) {
  return (
    <>
      {pieces.map((piece, i) => (
        <PieceSection
          key={piece.slug}
          piece={piece}
          index={i}
          flip={i % 2 === 1}
        />
      ))}
    </>
  );
}
