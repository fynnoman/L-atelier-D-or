"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

// Route-level gold sweep + fade on navigation.
export default function PageTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
        {!reduce && <GoldCurtain />}
      </motion.div>
    </AnimatePresence>
  );
}

function GoldCurtain() {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.72, ease: [0.77, 0, 0.175, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        transformOrigin: "top center",
        pointerEvents: "none",
        zIndex: 88,
        background:
          "linear-gradient(180deg, var(--noir) 0%, var(--noir-2) 60%, var(--parchment) 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--or) 20%, var(--or-glow) 50%, var(--or) 80%, transparent)",
        }}
      />
    </motion.div>
  );
}
