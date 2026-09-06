"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import PlaceholderImage from "../PlaceholderImage";

export default function CabinetDrawer() {
  const {
    cabinet,
    removeFromCabinet,
    closeDrawer,
    clearCabinet,
  } = useBoutique();
  const [copied, setCopied] = useState(false);

  const shareCabinet = async () => {
    if (typeof window === "undefined") return;
    const slugs = cabinet.map((c) => c.slug).join(",");
    const url = `${window.location.origin}/cabinet?slugs=${encodeURIComponent(slugs)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <motion.aside
      key="cabinet-sheet"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className="fixed right-0 top-0 bottom-0 z-[95] w-full sm:w-[440px] md:w-[480px] bg-bg text-ink flex flex-col shadow-[-24px_0_60px_-40px_rgba(10,8,6,0.35)]"
      role="dialog"
      aria-label="Cabinet Privé"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-line-soft">
        <div>
          <p className="eyebrow-gold">Cabinet Privé</p>
          <p className="mt-1.5 text-[11px] text-muted uppercase tracking-[0.24em]">
            {cabinet.length}{" "}
            {cabinet.length === 1 ? "Fassung notiert" : "Fassungen notiert"}
          </p>
        </div>
        <button
          onClick={closeDrawer}
          className="h-9 w-9 -mr-2 flex items-center justify-center text-ink hover:text-or-2"
          style={{ transition: "color 220ms var(--ease-out)" }}
          aria-label="Cabinet schließen"
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

      {cabinet.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="eyebrow-gold">Encore vide</p>
          <h3 className="mt-6 display text-ink text-[clamp(1.7rem,3vw,2.4rem)] leading-[1]">
            Ihre Auswahl
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-fraunces), serif",
                color: "var(--or-2)",
              }}
            >
              in Ruhe.
            </span>
          </h3>
          <p className="mt-6 text-[13px] leading-[1.8] text-muted max-w-[280px]">
            Speichern Sie Fassungen für den nächsten Salontermin. Teilbar per
            Link. Ohne Konto.
          </p>
          <Link
            href="/kollektion"
            onClick={closeDrawer}
            className="btn-gold mt-9"
          >
            Fassungen ansehen
          </Link>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4">
            <ul className="grid grid-cols-2 gap-4">
              {cabinet.map((item) => (
                <li key={item.slug} className="group">
                  <Link
                    href={`/kollektion/${item.slug}`}
                    onClick={closeDrawer}
                    className="relative block aspect-[4/5] overflow-hidden bg-bg-3"
                  >
                    <PlaceholderImage
                      src={item.image}
                      alt={item.name}
                      sizes="220px"
                      quality={72}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="mt-2.5">
                    <p className="eyebrow text-[9.5px]">{item.subtitle}</p>
                    <p className="text-[13.5px] text-ink font-light leading-tight mt-1">
                      {item.name}
                    </p>
                    <div className="mt-1 flex items-baseline justify-between">
                      <p className="text-[11.5px] text-muted numeral">
                        {item.price}
                      </p>
                      <button
                        onClick={() => removeFromCabinet(item.slug)}
                        aria-label="Aus Cabinet entfernen"
                        className="text-[9.5px] uppercase tracking-[0.22em] text-muted-2 hover:text-ink"
                        style={{ transition: "color 220ms var(--ease-out)" }}
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <footer className="border-t border-line-soft px-6 md:px-8 py-6 space-y-3 bg-bg-2/40">
            <button
              onClick={shareCabinet}
              className="lv-btn lv-btn-solid w-full justify-center"
            >
              {copied ? "Link kopiert" : "Cabinet teilen"}
            </button>
            <div className="flex items-center justify-between text-[10.5px] uppercase tracking-[0.22em]">
              <Link
                href="/concierge"
                onClick={closeDrawer}
                className="link-gold"
              >
                Salon vereinbaren
              </Link>
              <button
                onClick={clearCabinet}
                className="text-muted hover:text-ink"
                style={{ transition: "color 220ms var(--ease-out)" }}
              >
                Cabinet leeren
              </button>
            </div>
          </footer>
        </>
      )}
    </motion.aside>
  );
}
