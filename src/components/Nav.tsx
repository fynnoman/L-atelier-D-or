"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "/collection", label: "Kollektion" },
  { href: "/atelier", label: "Atelier" },
  { href: "/journal", label: "Journal" },
  { href: "/concierge", label: "Beratung" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        style={{
          backdropFilter: scrolled ? "blur(14px)" : "none",
          background: scrolled ? "rgba(255, 255, 255, 0.72)" : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--n-line-soft)"
            : "1px solid transparent",
          color: "inherit",
        }}
      >
        <div className="n-page grid grid-cols-3 items-center gap-6">
          {/* Utility gauche */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/concierge" className="n-meta opacity-70 hover:opacity-100 transition-opacity">
              Beratung
            </Link>
            <span className="n-meta opacity-40">Fait main à Paris</span>
          </div>

          {/* Wordmark centré */}
          <div className="flex justify-start md:justify-center col-start-1 md:col-start-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Wordmark size={scrolled ? "sm" : "md"} />
            </Link>
          </div>

          {/* Menu button droite */}
          <div className="flex justify-end items-center gap-6">
            <nav aria-label="Primär" className="hidden md:flex items-center gap-8">
              {LINKS.slice(0, 3).map((l) => {
                const active =
                  pathname === l.href ||
                  (l.href !== "/" && pathname.startsWith(l.href));
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="n-meta transition-opacity"
                    style={{ opacity: active ? 1 : 0.6 }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              className="inline-flex items-center gap-3 n-meta"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hidden md:inline">Menü</span>
              <span className="inline-flex flex-col gap-[5px]">
                <span
                  className="block h-px w-5 bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(3px) rotate(45deg)" : "none" }}
                />
                <span
                  className="block h-px w-5 bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(-3px) rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menü — voller Fläche, ruhig */}
      <div
        aria-hidden={!open}
        className={clsx(
          "fixed inset-0 z-30 transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--n-bg)" }}
      >
        <div className="n-page pt-40 pb-20 grid grid-cols-12 gap-x-6 gap-y-16">
          <nav className="col-span-12 md:col-span-7 flex flex-col gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="n-display leading-none"
                style={{
                  fontSize: "clamp(48px, 8vw, 128px)",
                  color: "var(--n-ink)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <aside className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-10">
            <div>
              <div className="n-eyebrow mb-4">Atelier</div>
              <p className="n-body text-[16px] leading-[1.5]">
                14, rue de l&rsquo;Éclipse<br />
                75008 Paris
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-4">Kontakt</div>
              <a href="mailto:concierge@latelier-dor.com" className="n-link">
                concierge@latelier-dor.com
              </a>
            </div>
            <Link href="/concierge" className="n-cta self-start">
              Termin vereinbaren
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
