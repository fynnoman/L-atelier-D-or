"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  productName?: string;
};

export default function InquiryModal({ open, onClose, productName }: Props) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      const t = window.setTimeout(() => setSent(false), 400);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            key="sheet"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="glass max-w-lg w-full rounded-[28px] p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Schließen"
              className="absolute right-5 top-5 text-muted hover:text-ink transition text-xl"
            >
              ×
            </button>

            {!sent ? (
              <>
                <div className="eyebrow">Reservierung</div>
                <h3 className="mt-3 font-display text-4xl leading-tight">
                  {productName ? (
                    <>
                      {productName.split(" ")[0]}{" "}
                      <span className="serif-italic gold-text">
                        {productName.split(" ").slice(1).join(" ")}
                      </span>
                    </>
                  ) : (
                    <>Anfrage</>
                  )}
                </h3>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                  Wir melden uns innerhalb von 24 Stunden persönlich zurück,
                  klären die passende Sehstärke und vereinbaren die Anprobe.
                </p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Vorname"
                      className="glass-soft rounded-full px-4 py-3 text-sm outline-none placeholder:text-muted"
                    />
                    <input
                      required
                      placeholder="Nachname"
                      className="glass-soft rounded-full px-4 py-3 text-sm outline-none placeholder:text-muted"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="E-Mail"
                    className="w-full glass-soft rounded-full px-4 py-3 text-sm outline-none placeholder:text-muted"
                  />
                  <input
                    placeholder="Telefon (optional)"
                    className="w-full glass-soft rounded-full px-4 py-3 text-sm outline-none placeholder:text-muted"
                  />
                  <textarea
                    rows={3}
                    placeholder="Anmerkungen"
                    className="w-full glass-soft rounded-2xl px-4 py-3 text-sm outline-none placeholder:text-muted resize-none"
                  />
                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Anfrage senden
                  </button>
                  <p className="text-[0.68rem] text-muted text-center leading-relaxed">
                    Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
                    verwendet.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="eyebrow">Bestätigt</div>
                <h3 className="mt-4 font-display text-4xl gold-text">Merci.</h3>
                <p className="mt-4 text-ink-2 leading-relaxed">
                  Wir melden uns in Kürze.
                </p>
                <button onClick={onClose} className="btn btn-ghost mt-8">
                  Schließen
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
