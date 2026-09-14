import Link from "next/link";
import type { Piece } from "@/data/collection";
import Reveal from "./Reveal";

export default function ProductPrice({ piece }: { piece: Piece }) {
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(90px, 14vh, 160px)",
        background: "var(--mood-bg-2)",
        color: "var(--mood-ink)",
      }}
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.24 }} />

      <div className="relative mx-auto max-w-[1100px] grid gap-14 md:grid-cols-[1fr_1fr] items-center">
        <Reveal>
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
                marginBottom: 12,
              }}
            >
              Prix
            </div>
            <div
              className="display"
              style={{
                fontSize: "clamp(56px, 8vw, 128px)",
                lineHeight: 0.95,
                color: "var(--mood-ink)",
              }}
            >
              {piece.price}
              <span style={{ fontSize: "0.4em", fontStyle: "italic", marginLeft: 12, color: "var(--mood-glow)" }}>€</span>
            </div>
            <p
              className="serif mt-6"
              style={{ fontSize: 17, lineHeight: 1.55, color: "var(--mood-muted)", maxWidth: 460 }}
            >
              Quatre-vingts euros la pièce. Ni plus, ni moins. Nous vendons
              en direct, sans intermédiaire, et sans mystère sur ce que vous
              recevez.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            style={{
              padding: "clamp(24px, 3vw, 40px)",
              border: "1px solid var(--mood-line)",
              background:
                "color-mix(in oklab, var(--mood-glow) 4%, transparent)",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
                marginBottom: 16,
              }}
            >
              Deux manières de la recevoir
            </div>
            <ul className="serif space-y-4" style={{ fontSize: 16, lineHeight: 1.5, color: "var(--mood-ink)" }}>
              <li className="flex items-baseline gap-4">
                <span className="numeral" style={{ color: "var(--mood-glow)", fontSize: 13 }}>Ⅰ</span>
                Rendez-vous privé à Paris, Berlin ou Londres — essayage, ajustage, verres si vous le souhaitez.
              </li>
              <li className="flex items-baseline gap-4">
                <span className="numeral" style={{ color: "var(--mood-glow)", fontSize: 13 }}>Ⅱ</span>
                Livraison en écrin dédié, main-propre à Paris ou en transporteur suivi ailleurs en Europe.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/concierge" className="btn-or">
                Réserver cette pièce
              </Link>
              <Link
                href="/atelier"
                className="btn-ghost"
                style={{ color: "var(--mood-ink)", borderColor: "var(--mood-line)" }}
              >
                Voir l’atelier
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
