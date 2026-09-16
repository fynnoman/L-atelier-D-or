"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "/collection", label: "La Collection" },
  { href: "/atelier", label: "L’Atelier" },
  { href: "/journal", label: "Journal" },
  { href: "/concierge", label: "Concierge" },
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

  const isDark = pathname.startsWith("/collection/roi-");

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        style={{
          backdropFilter: scrolled ? "blur(14px)" : "none",
          background: scrolled ? "rgba(244, 240, 232, 0.72)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--n-line-soft)" : "1px solid transparent",
          color: "inherit",
        }}
      >
        <div className="n-page flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Wordmark size={scrolled ? "sm" : "md"} />
          </Link>

          <nav aria-label="Primaire" className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-[12px] tracking-[0.22em] uppercase"
                  style={{
                    color: active ? "var(--n-gold-deep)" : "var(--n-ink)",
                    opacity: active ? 1 : 0.75,
                  }}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{
                      background: "currentColor",
                      transformOrigin: "left",
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 500ms var(--n-ease)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <span className="n-mono opacity-55">Paris · Berlin · Londres</span>
            <Link href="/concierge" className="n-cta">Rendez-vous</Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex flex-col gap-[5px] p-2 -mr-2"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="block h-px w-6 bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(3px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-6 bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(-3px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      <div
        aria-hidden={!open}
        className={clsx(
          "fixed inset-0 z-30 md:hidden transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--n-bg)" }}
      >
        <div className="n-page pt-28 pb-16 flex flex-col gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="n-display text-[42px] leading-none"
              style={{ color: "var(--n-ink)" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3 n-mono opacity-60">
            <span>Paris — 14, rue de l&rsquo;Éclipse, VIIIᵉ</span>
            <span>Berlin — Kurfürstendamm 218</span>
            <span>Londres — Mount Street, Mayfair</span>
          </div>
          <Link href="/concierge" className="n-cta mt-6 self-start">
            Prendre rendez-vous
          </Link>
        </div>
      </div>

      {/* Spacer for hero-less pages */}
      {!scrolled && isDark && <div className="h-2" />}
    </>
  );
}
