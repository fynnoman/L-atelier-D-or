"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wordmark from "./Wordmark";

const menuLinks = [
  {
    group: "Kollektion",
    items: [
      { href: "/kollektion", label: "Alle Fassungen" },
      { href: "/kollektion/solene-01", label: "Solène" },
      { href: "/kollektion/malbec-02", label: "Malbec" },
      { href: "/kollektion/orphee-03", label: "Orphée" },
      { href: "/kollektion/valois-04", label: "Valois" },
    ],
  },
  {
    group: "Maison",
    items: [
      { href: "/atelier", label: "Histoire" },
      { href: "/atelier#artisans", label: "Ateliers" },
      { href: "/referenzen", label: "Journal" },
    ],
  },
  {
    group: "Service",
    items: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/kontakt", label: "Reservieren" },
      { href: "/kontakt", label: "Réparation à vie" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          scrolled ? "bg-bg/95 backdrop-blur-md border-b border-line-soft" : "bg-transparent",
        ].join(" ")}
        style={{
          transition:
            "background-color 400ms var(--ease-out), border-color 400ms var(--ease-out), backdrop-filter 400ms var(--ease-out)",
        }}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-8 py-4">
          {/* Left cluster: Menu · Search */}
          <div className="flex items-center gap-6 justify-self-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-ink"
              aria-label="Menü öffnen"
            >
              <MenuIcon />
              <span className="hidden sm:inline">Menu</span>
            </button>
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-ink"
              aria-label="Suchen"
            >
              <SearchIcon />
              <span>Suchen</span>
            </button>
          </div>

          {/* Center: wordmark */}
          <Link href="/" className="justify-self-center">
            <Wordmark size="md" />
          </Link>

          {/* Right cluster: Contact · Wishlist · Account */}
          <div className="flex items-center gap-6 justify-self-end">
            <Link
              href="/kontakt"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink link-underline"
            >
              Kontakt
            </Link>
            <Link
              href="/kontakt"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink link-underline"
              aria-label="Wishlist"
            >
              <HeartIcon />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink"
              aria-label="Account"
            >
              <UserIcon />
              <span className="hidden lg:inline">Account</span>
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[70] bg-bg"
          >
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-line-soft">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-ink"
                aria-label="Menü schließen"
              >
                <CloseIcon />
                <span>Schließen</span>
              </button>
              <Wordmark size="md" />
              <span className="w-16" aria-hidden />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-[1600px] px-6 md:px-12 pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 gap-14"
            >
              {menuLinks.map((col) => (
                <div key={col.group}>
                  <div className="eyebrow mb-8">{col.group}</div>
                  <ul className="space-y-5">
                    {col.items.map((l) => (
                      <li key={`${col.group}-${l.label}`}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="font-light text-ink leading-tight text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.01em] link-underline"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <div className="mt-4 border-t border-line-soft">
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-8 grid gap-6 md:grid-cols-3 text-[13px] text-muted">
                <a href="tel:+33144711240" className="link-underline">+33 1 44 71 12 40</a>
                <a href="mailto:atelier@latelier-dor.example" className="link-underline">
                  atelier@latelier-dor.example
                </a>
                <div>12 rue de la Paix, 75002 Paris</div>
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
    <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden>
      <path d="M0 1h18M0 9h18" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M7 12.5s-5-3.2-5-6.5A2.8 2.8 0 0 1 7 4.2 2.8 2.8 0 0 1 12 6c0 3.3-5 6.5-5 6.5z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path
        d="M2 13c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
