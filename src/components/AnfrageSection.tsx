"use client";

import { useState } from "react";
import InquiryModal from "./InquiryModal";

export default function AnfrageSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="anfrage" className="relative py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="glass rounded-[36px] px-8 md:px-14 py-16 md:py-24 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(217,183,138,0.55), transparent 60%)",
            }}
          />
          <div className="eyebrow">Persönliche Beratung</div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Anprobe im{" "}
            <span className="serif-italic gold-text">Atelier</span>
            <br />
            oder in Ihrer Stadt.
          </h2>
          <p className="mt-6 max-w-xl text-ink-2 text-lg leading-relaxed">
            Wir kommen zu Ihnen. Vor Ort besprechen wir Sehstärke, Silhouette
            und Material. Auf Wunsch fertigen wir eine Fassung nach Maß.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setOpen(true)} className="btn btn-primary">
              Anfrage stellen
            </button>
            <a href="#kontakt" className="btn btn-ghost">
              Kontakt
            </a>
          </div>
        </div>
      </div>
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
