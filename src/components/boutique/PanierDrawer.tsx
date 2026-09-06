"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import PlaceholderImage from "../PlaceholderImage";
import { editionNumeral } from "@/lib/boutique/price";

export default function PanierDrawer() {
  const {
    cart,
    subtotal,
    removeFromCart,
    formatCurrency,
    closeDrawer,
  } = useBoutique();

  return (
    <motion.aside
      key="panier-sheet"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className="fixed right-0 top-0 bottom-0 z-[95] w-full sm:w-[440px] md:w-[480px] bg-bg text-ink flex flex-col shadow-[-24px_0_60px_-40px_rgba(10,8,6,0.35)]"
      role="dialog"
      aria-label="Panier Signature"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-line-soft">
        <div>
          <p className="eyebrow-gold">Panier Signature</p>
          <p className="mt-1.5 text-[11px] text-muted uppercase tracking-[0.24em]">
            {cart.length} {cart.length === 1 ? "Fassung" : "Fassungen"}
          </p>
        </div>
        <button
          onClick={closeDrawer}
          className="h-9 w-9 -mr-2 flex items-center justify-center text-ink hover:text-or-2"
          style={{ transition: "color 220ms var(--ease-out)" }}
          aria-label="Panier schließen"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {cart.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="eyebrow-gold">Vide pour l&apos;instant</p>
          <h3 className="mt-6 display text-ink text-[clamp(1.8rem,3vw,2.4rem)] leading-[1]">
            Noch keine Fassung
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-fraunces), serif",
                color: "var(--or-2)",
              }}
            >
              reserviert.
            </span>
          </h3>
          <p className="mt-6 text-[13px] leading-[1.8] text-muted max-w-[280px]">
            Jede Fassung entsteht in kleiner Auflage. Wählen Sie Ihre Signatur,
            die Gravur und das Coloris. Wir bestätigen im Salon.
          </p>
          <Link
            href="/kollektion"
            onClick={closeDrawer}
            className="btn-gold mt-9"
          >
            Kollektion entdecken
          </Link>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 space-y-6">
            {cart.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-[88px_1fr_auto] gap-4 pb-6 border-b border-line-soft last:border-b-0"
              >
                <Link
                  href={`/kollektion/${item.slug}`}
                  onClick={closeDrawer}
                  className="relative block h-[110px] w-[88px] overflow-hidden bg-bg-3"
                >
                  <PlaceholderImage
                    src={item.image}
                    alt={item.name}
                    sizes="88px"
                    quality={72}
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 mix-blend-multiply opacity-30"
                    style={{
                      background: `linear-gradient(180deg, transparent 55%, ${item.color.hex}22)`,
                    }}
                  />
                </Link>
                <div className="min-w-0 pr-2">
                  <p className="eyebrow">{item.subtitle}</p>
                  <h4 className="mt-1.5 text-[15px] text-ink font-light leading-tight truncate">
                    {item.name}
                  </h4>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                    <span
                      className="inline-flex items-center gap-1.5"
                      style={{ color: "var(--or-2)" }}
                    >
                      <span
                        className="inline-block h-[6px] w-[6px] rounded-full"
                        style={{ background: item.color.hex }}
                      />
                      {item.color.label}
                    </span>
                    <span className="text-muted-2">·</span>
                    <span>{editionNumeral(item.editionNumber)}</span>
                  </div>
                  {item.engraving && item.engraving.initials && (
                    <p
                      className="mt-2 text-[11px] italic"
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        color: "var(--patine)",
                      }}
                    >
                      Gravure «&nbsp;{item.engraving.initials.toUpperCase()}
                      &nbsp;» ·{" "}
                      {item.engraving.placement === "inside-bridge"
                        ? "Steg innen"
                        : item.engraving.placement === "temple-left"
                          ? "Bügel links"
                          : "Bügel rechts"}
                    </p>
                  )}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 text-[10.5px] uppercase tracking-[0.22em] text-muted hover:text-ink"
                    style={{ transition: "color 220ms var(--ease-out)" }}
                  >
                    Entfernen
                  </button>
                </div>
                <p className="text-[14px] text-ink font-light whitespace-nowrap self-start numeral">
                  {formatCurrency(item.priceValue)}
                </p>
              </article>
            ))}
          </div>

          <footer className="border-t border-line-soft px-6 md:px-8 py-6 space-y-5 bg-bg-2/40">
            <dl className="space-y-2 text-[13px]">
              <div className="flex justify-between text-muted">
                <dt>Sous-total</dt>
                <dd className="numeral">{formatCurrency(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Livraison</dt>
                <dd>Offerte · Colissimo Signature</dd>
              </div>
              <div className="flex justify-between text-ink text-[15px] pt-3 border-t border-line-soft">
                <dt>Total</dt>
                <dd className="numeral">{formatCurrency(subtotal)}</dd>
              </div>
            </dl>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="btn-gold w-full justify-center"
            >
              Signature bestätigen
            </Link>
            <p className="text-[10.5px] uppercase tracking-[0.24em] text-muted text-center">
              Anzahlung 30 % · Fertigung 4 bis 6 Wochen
            </p>
          </footer>
        </>
      )}
    </motion.aside>
  );
}
