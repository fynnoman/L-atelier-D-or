"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import Wordmark from "./Wordmark";
import { PIECES } from "@/data/collection";

const LINKS = [
  { href: "/collection", label: "Collection", hasSub: true as const },
  { href: "/atelier", label: "Atelier", hasSub: false as const },
  { href: "/journal", label: "Journal", hasSub: false as const },
];

const OVERLAY_LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/atelier", label: "Atelier" },
  { href: "/journal", label: "Journal" },
  { href: "/avis", label: "Avis" },
  { href: "/conseil", label: "Conseil" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const subTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  const openSub = () => {
    if (subTimer.current) window.clearTimeout(subTimer.current);
    setSubOpen(true);
  };
  const scheduleCloseSub = () => {
    if (subTimer.current) window.clearTimeout(subTimer.current);
    subTimer.current = window.setTimeout(() => setSubOpen(false), 160);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        style={{
          backdropFilter: scrolled || subOpen ? "blur(14px)" : "none",
          background: scrolled || subOpen ? "rgba(255, 255, 255, 0.72)" : "transparent",
          borderBottom: scrolled || subOpen
            ? "1px solid var(--n-line-soft)"
            : "1px solid transparent",
          color: "inherit",
        }}
      >
        <div className="n-page grid grid-cols-3 items-center gap-6">
          {/* Utility gauche */}
          <div className="hidden md:flex items-center gap-6">
            <span className="n-meta opacity-40">Édition brève</span>
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
              {LINKS.map((l) => {
                const active =
                  pathname === l.href ||
                  (l.href !== "/" && pathname.startsWith(l.href));
                if (l.hasSub) {
                  return (
                    <div
                      key={l.href}
                      className="relative"
                      onMouseEnter={openSub}
                      onMouseLeave={scheduleCloseSub}
                      onFocus={openSub}
                      onBlur={scheduleCloseSub}
                    >
                      <Link
                        href={l.href}
                        className="n-meta transition-opacity"
                        style={{ opacity: active ? 1 : 0.6 }}
                        aria-haspopup="true"
                        aria-expanded={subOpen}
                      >
                        {l.label}
                      </Link>
                    </div>
                  );
                }
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
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hidden md:inline">Menu</span>
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

        {/* Collection Dropdown auf Desktop */}
        <div
          className={clsx(
            "hidden md:block absolute left-0 right-0 top-full overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            subOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{
            maxHeight: subOpen ? "320px" : "0",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            borderBottom: subOpen ? "1px solid var(--n-line-soft)" : "none",
          }}
          onMouseEnter={openSub}
          onMouseLeave={scheduleCloseSub}
        >
          <div className="n-page py-8 grid grid-cols-4 gap-6">
            {PIECES.map((p) => (
              <Link
                key={p.slug}
                href={`/collection/${p.slug}`}
                className="group flex flex-col gap-3"
              >
                <span
                  className="block w-full aspect-[4/5] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${p.teintes[0]?.hex ?? "#000"} 0%, ${p.teintes[1]?.hex ?? "#000"} 100%)`,
                  }}
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt=""
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="n-meta" style={{ color: "var(--n-ink)" }}>
                    {p.name}
                  </span>
                  <span className="n-meta opacity-55">
                    {p.priceEuro
                      .toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{" "}
                    €
                  </span>
                </div>
              </Link>
            ))}
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
        <div
          className="n-page grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-16 overflow-y-auto max-h-screen"
          style={{
            paddingTop: "max(112px, env(safe-area-inset-top, 0px) + 96px)",
            paddingBottom: "max(56px, env(safe-area-inset-bottom, 0px) + 40px)",
          }}
        >
          <nav className="col-span-12 md:col-span-7 flex flex-col gap-5">
            {OVERLAY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="n-display leading-none"
                style={{
                  fontSize: "clamp(44px, 7vw, 112px)",
                  color: "var(--n-ink)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <aside className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-10">
            <div>
              <div className="n-eyebrow mb-4">Maison</div>
              <p className="n-body text-[16px] leading-[1.5]">
                Édition brève.<br />
                Vente en ligne uniquement.
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-4">Contact</div>
              <Link href="/conseil" className="n-link">
                Nous écrire
              </Link>
            </div>
            <Link href="/collection" className="n-cta self-start">
              Voir la collection
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
