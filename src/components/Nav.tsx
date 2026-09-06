"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wordmark from "./Wordmark";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";

const menuLinks = [
  {
    group: "Collection",
    items: [
      { href: "/kollektion", label: "Toutes les Fassungen", small: "Alle Modelle" },
      { href: "/kollektion/solene-01", label: "Solène 01", small: "Optique · Aviator" },
      { href: "/kollektion/malbec-02", label: "Malbec 02", small: "Solaire · Panto" },
      { href: "/kollektion/orphee-03", label: "Orphée 03", small: "Optique · Rund" },
      { href: "/kollektion/valois-04", label: "Valois 04", small: "Solaire · Cat-Eye" },
    ],
  },
  {
    group: "Maison",
    items: [
      { href: "/atelier", label: "Histoire", small: "1972 · aujourd'hui" },
      { href: "/atelier#artisans", label: "Les Artisans", small: "Fünf Hände" },
      { href: "/journal", label: "Livre d'Or", small: "Journal · Materialkunde" },
      { href: "/referenzen", label: "Presse", small: "Vogue · Monocle · AD" },
    ],
  },
  {
    group: "Service",
    items: [
      { href: "/concierge", label: "Salon Privé", small: "Paris · Berlin · Jura" },
      { href: "/concierge", label: "Réservation", small: "Anprobe vereinbaren" },
      { href: "/passeport", label: "Passeport", small: "Provenance einsehen" },
      { href: "/journal", label: "Livre d'Or", small: "Journal & Materialkunde" },
      { href: "/concierge", label: "Réparation à vie", small: "Lebenslange Betreuung" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, cabinetCount, openDrawer } = useBoutique();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          scrolled
            ? "bg-parchment/90 backdrop-blur-md border-b border-line-soft"
            : "bg-transparent",
        ].join(" ")}
        style={{
          transition:
            "background-color 400ms var(--ease-out), border-color 400ms var(--ease-out), backdrop-filter 400ms var(--ease-out)",
        }}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-8 py-4">
          {/* Left cluster */}
          <div className="flex items-center gap-6 justify-self-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-or-2 transition-colors"
              style={{ transition: "color 220ms var(--ease-out)" }}
              aria-label="Menü öffnen"
            >
              <MenuIcon />
              <span className="hidden sm:inline">Menu</span>
            </button>
            <Link
              href="/kollektion"
              className="hidden md:inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.28em] text-ink link-underline"
            >
              Kollektion
            </Link>
          </div>

          {/* Center: wordmark */}
          <Link
            href="/"
            className="justify-self-center transition-transform active:scale-[0.97]"
            style={{ transition: "transform 160ms var(--ease-out)" }}
          >
            <Wordmark size="md" />
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-5 md:gap-6 justify-self-end">
            <Link
              href="/concierge"
              className="hidden md:inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-ink link-underline"
            >
              Salon Privé
            </Link>
            <button
              type="button"
              onClick={() => openDrawer("recherche")}
              className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-or-2 transition-colors"
              style={{ transition: "color 220ms var(--ease-out)" }}
              aria-label="Recherche Signature öffnen"
            >
              <SearchIcon />
              <span className="hidden lg:inline">Recherche</span>
            </button>
            <button
              type="button"
              onClick={() => openDrawer("cabinet")}
              className="relative inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-or-2 transition-colors"
              style={{ transition: "color 220ms var(--ease-out)" }}
              aria-label={`Cabinet Privé öffnen (${cabinetCount})`}
            >
              <CabinetIcon />
              <span className="hidden md:inline">Cabinet</span>
              {cabinetCount > 0 && <NavBadge value={cabinetCount} />}
            </button>
            <button
              type="button"
              onClick={() => openDrawer("panier")}
              className="relative inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-or-2 transition-colors"
              style={{ transition: "color 220ms var(--ease-out)" }}
              aria-label={`Panier öffnen (${cartCount})`}
            >
              <PanierIcon />
              <span className="hidden sm:inline">Panier</span>
              {cartCount > 0 && <NavBadge value={cartCount} tone="gold" />}
            </button>
          </div>
        </div>

        {/* Gold hairline that appears when scrolled */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px rule-gold"
          style={{
            opacity: scrolled ? 1 : 0,
            transition: "opacity 500ms var(--ease-out)",
          }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[70] bg-noir text-parchment grain grain-dark overflow-y-auto"
            style={{ backgroundColor: "var(--noir)" }}
          >
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-line-noir">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.28em] text-parchment hover:text-or transition-colors"
                style={{ transition: "color 220ms var(--ease-out)" }}
                aria-label="Menü schließen"
              >
                <CloseIcon />
                <span>Schließen</span>
              </button>
              <Wordmark size="md" variant="shimmer" />
              <span className="w-16" aria-hidden />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-[1600px] px-6 md:px-12 pt-16 md:pt-24 pb-16 grid grid-cols-1 md:grid-cols-3 gap-14 relative z-10"
            >
              {menuLinks.map((col, colIdx) => (
                <div key={col.group}>
                  <div className="eyebrow-gold mb-8">{col.group}</div>
                  <ul className="space-y-6">
                    {col.items.map((l, i) => (
                      <motion.li
                        key={`${col.group}-${l.label}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + colIdx * 0.06 + i * 0.05,
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group block"
                        >
                          <span
                            className="display block text-parchment leading-[0.98] tracking-[-0.02em]"
                            style={{
                              fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)",
                              transition: "color 260ms var(--ease-out)",
                            }}
                          >
                            <span className="group-hover:text-or transition-colors" style={{ transition: "color 260ms var(--ease-out)" }}>
                              {l.label}
                            </span>
                          </span>
                          <span className="mt-2 block text-[11px] uppercase tracking-[0.24em] text-muted-2/80" style={{ color: "rgba(230, 201, 138, 0.55)" }}>
                            {l.small}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <div className="mt-4 border-t border-line-noir relative z-10">
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-10 grid gap-8 md:grid-cols-[1fr_1fr_1fr] text-[12.5px]" style={{ color: "rgba(245, 239, 225, 0.72)" }}>
                <div>
                  <p className="eyebrow-gold mb-4">Salon Paris</p>
                  <p>12 rue de la Paix</p>
                  <p>75002 Paris</p>
                  <a href="tel:+33144711240" className="mt-3 inline-block link-gold">+33 1 44 71 12 40</a>
                </div>
                <div>
                  <p className="eyebrow-gold mb-4">Concierge</p>
                  <p>Léa Marchand</p>
                  <p>Réservation privée</p>
                  <a
                    href="mailto:atelier@latelier-dor.example"
                    className="mt-3 inline-block link-gold"
                  >
                    atelier@latelier-dor.example
                  </a>
                </div>
                <div className="flex flex-col items-start md:items-end justify-between">
                  <p className="eyebrow-gold mb-4">Ouverture</p>
                  <p>Lundi — Samedi · 10h — 19h</p>
                  <p>Sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden>
      <path d="M0 1h20M0 9h14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M9.4 9.4l3.2 3.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function CabinetIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M2 4.5c0-1.4 1.1-2.5 2.5-2.5 1 0 1.9.5 2.5 1.3.6-.8 1.5-1.3 2.5-1.3C10.9 2 12 3.1 12 4.5c0 3-5 6-5 6s-5-3-5-6z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanierIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M2.5 4.5h9l-.9 7A1 1 0 0 1 9.6 12.5H4.4a1 1 0 0 1-1-.9L2.5 4.5z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M5 4.5V3.2a2 2 0 0 1 4 0v1.3"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavBadge({ value, tone = "ink" }: { value: number; tone?: "ink" | "gold" }) {
  const label = value > 99 ? "99+" : String(value);
  return (
    <span
      aria-hidden
      className="absolute -top-2 -right-2 min-w-[16px] h-[16px] px-1 rounded-full inline-flex items-center justify-center text-[9px] font-medium"
      style={{
        letterSpacing: "0.04em",
        background: tone === "gold" ? "var(--or)" : "var(--ink)",
        color: tone === "gold" ? "var(--noir)" : "var(--parchment)",
        fontFeatureSettings: "'tnum' 1",
      }}
    >
      {label}
    </span>
  );
}
