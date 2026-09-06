"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";

const EssaiVirtuel = dynamic(() => import("../essai/EssaiVirtuel"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center text-parchment/70">
      <div className="text-center">
        <p className="eyebrow-light">Chargement</p>
        <p
          className="mt-4 display text-parchment"
          style={{ fontStyle: "italic", fontSize: "clamp(1.6rem,2.6vw,2.2rem)" }}
        >
          Miroir wird eingerichtet
        </p>
      </div>
    </div>
  ),
});

export default function EssaiOverlay() {
  const { closeDrawer } = useBoutique();

  return (
    <motion.section
      key="essai-sheet"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 md:inset-6 lg:inset-10 z-[96] bg-noir text-parchment overflow-hidden grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-label="Essai Virtuel"
    >
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 md:px-10 py-5">
        <div>
          <p className="eyebrow-light">Essai Virtuel</p>
          <p
            className="mt-1 text-[11px] uppercase text-parchment/60"
            style={{ letterSpacing: "0.28em" }}
          >
            Sans caméra distante · tout se passe dans le navigateur
          </p>
        </div>
        <button
          onClick={closeDrawer}
          className="h-10 w-10 flex items-center justify-center text-parchment hover:text-or"
          style={{ transition: "color 220ms var(--ease-out)" }}
          aria-label="Essai schließen"
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

      <EssaiVirtuel />
    </motion.section>
  );
}
