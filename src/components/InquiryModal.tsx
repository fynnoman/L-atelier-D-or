"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  productName?: string;
  triggerRef?: React.RefObject<HTMLElement | HTMLButtonElement | null>;
};

// LV-style reservation modal: white sheet, hairline borders, thin outline
// buttons. Escape-close, focus restore.
export default function InquiryModal({
  open,
  onClose,
  productName,
  triggerRef,
}: Props) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      document.documentElement.style.overflow = "";
      const t = window.setTimeout(() => setSent(false), 400);
      return () => window.clearTimeout(t);
    }
  }, [open, onClose]);

  useEffect(() => {
    if (!open && triggerRef?.current) {
      (triggerRef.current as HTMLElement).focus?.();
    }
  }, [open, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[90] flex items-center justify-center px-4"
          style={{ background: "rgba(17,17,17,0.4)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            key="sheet"
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-bg p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Schließen"
              className="absolute right-4 top-4 h-9 w-9 flex items-center justify-center text-ink"
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

            {!sent ? (
              <>
                <p className="eyebrow">Réservation</p>
                <h3 className="mt-4 font-light text-ink text-[26px] leading-tight tracking-[-0.01em]">
                  {productName ?? "Anfrage an die Maison"}
                </h3>
                <div className="mt-5 hairline-soft" />
                <p className="mt-5 text-[14px] text-muted leading-[1.75]">
                  Wir melden uns innerhalb von 24 Stunden persönlich zurück und
                  vereinbaren die Anprobe.
                </p>

                <form
                  className="mt-6 space-y-3.5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Vorname"
                      className="w-full border border-line px-4 py-3 text-[14px] text-ink outline-none focus:border-ink placeholder:text-muted-2"
                    />
                    <input
                      required
                      placeholder="Nachname"
                      className="w-full border border-line px-4 py-3 text-[14px] text-ink outline-none focus:border-ink placeholder:text-muted-2"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="E-Mail"
                    className="w-full border border-line px-4 py-3 text-[14px] text-ink outline-none focus:border-ink placeholder:text-muted-2"
                  />
                  <input
                    placeholder="Telefon (optional)"
                    className="w-full border border-line px-4 py-3 text-[14px] text-ink outline-none focus:border-ink placeholder:text-muted-2"
                  />
                  <textarea
                    rows={3}
                    placeholder="Anmerkungen"
                    className="w-full border border-line px-4 py-3 text-[14px] text-ink outline-none resize-none focus:border-ink placeholder:text-muted-2"
                  />
                  <button
                    type="submit"
                    className="lv-btn lv-btn-solid w-full justify-center mt-2"
                  >
                    Anfrage senden
                  </button>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted text-center pt-1">
                    Vertraulich · Nur im Haus
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 text-center"
              >
                <p className="eyebrow">Bestätigt</p>
                <h3 className="mt-4 font-light text-ink text-[36px] leading-tight tracking-[-0.01em]">
                  Merci.
                </h3>
                <div className="mt-6 hairline-soft mx-auto max-w-[160px]" />
                <p className="mt-6 text-[14px] text-muted leading-[1.75] max-w-xs mx-auto">
                  Wir melden uns in Kürze mit einem persönlichen Vorschlag.
                </p>
                <button onClick={onClose} className="lv-btn mt-8">
                  Schließen
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
