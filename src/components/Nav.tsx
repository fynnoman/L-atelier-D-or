"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`mx-4 mt-4 rounded-full transition-all duration-500 ${
          scrolled ? "glass" : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-7 py-3">
          <Link
            href="/"
            className="font-display text-lg md:text-xl tracking-tight leading-none"
          >
            L&apos;Atelier <span className="serif-italic gold-text">d&apos;Or</span>
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-[0.78rem] uppercase tracking-[0.22em] text-ink-2">
            <Link href="/kollektion" className="hover:text-ink transition">
              Kollektion
            </Link>
            <Link href="/atelier" className="hover:text-ink transition">
              Atelier
            </Link>
            <Link href="/#anfrage" className="hover:text-ink transition">
              Reservieren
            </Link>
          </nav>

          <Link href="/kollektion" className="btn btn-ghost text-[0.72rem] py-2 px-4">
            Entdecken
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
