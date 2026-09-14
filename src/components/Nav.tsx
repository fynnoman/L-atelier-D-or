"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Wordmark from "./Wordmark";

const links = [
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
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // On product pages we adapt to the mood via CSS vars
  const isProduct = pathname?.startsWith("/collection/") && pathname !== "/collection";

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40",
          "transition-[background-color,backdrop-filter,border-color] duration-500",
        )}
        style={{
          backgroundColor: scrolled
            ? isProduct
              ? "color-mix(in oklab, var(--mood-bg) 78%, transparent)"
              : "color-mix(in oklab, var(--parchment) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "saturate(1.1) blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(1.1) blur(14px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${isProduct ? "var(--mood-line)" : "var(--line-soft)"}`
            : "1px solid transparent",
          color: isProduct ? "var(--mood-ink)" : "var(--ink)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            paddingInline: "var(--page-x)",
            paddingBlock: scrolled ? "14px" : "22px",
            transition: "padding 500ms var(--ease-editorial)",
          }}
        >
          <nav aria-label="Primaire" className="hidden md:flex items-center gap-8">
            {links.slice(0, 2).map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
            ))}
          </nav>

          <Wordmark className={clsx(isProduct && "text-[color:var(--mood-ink)]")} muted={isProduct} />

          <nav aria-label="Secondaire" className="hidden md:flex items-center gap-8">
            {links.slice(2).map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center gap-2"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ letterSpacing: "0.22em", textTransform: "uppercase", fontSize: 11 }}
          >
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 22,
                height: 1,
                background: "currentColor",
                transform: open ? "translateY(3px) rotate(45deg)" : "none",
                transition: "transform 260ms var(--ease-out)",
              }}
            />
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 22,
                height: 1,
                background: "currentColor",
                marginLeft: -22,
                marginTop: 6,
                transform: open ? "translateY(-3px) rotate(-45deg)" : "none",
                transition: "transform 260ms var(--ease-out)",
              }}
            />
            <span className="ml-8">{open ? "Fermer" : "Menu"}</span>
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className="md:hidden fixed inset-0 z-30"
        style={{
          background: "var(--noir)",
          color: "var(--parchment)",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 500ms var(--ease-drawer)",
        }}
      >
        <div
          className="h-full flex flex-col justify-between"
          style={{ paddingInline: "var(--page-x)", paddingTop: 104, paddingBottom: 40 }}
        >
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="serif inline-block"
                  style={{
                    fontSize: "clamp(32px, 8vw, 56px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                    color: pathname === l.href ? "var(--or-soft)" : "var(--parchment)",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ opacity: 0.7, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Paris · Berlin · Londres
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="link relative"
      data-underline
      style={{
        fontSize: 12,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "currentColor",
        opacity: active ? 1 : 0.85,
      }}
    >
      {label}
    </Link>
  );
}
