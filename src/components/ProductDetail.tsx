"use client";

import { useState, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/data/products";
import PlaceholderImage from "./PlaceholderImage";
import Product3D from "./Product3D";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import { parsePriceLabel } from "@/lib/boutique/price";

type ViewMode = "photo" | "trois-d" | "essai";
type Engraving = {
  initials: string;
  placement: "temple-left" | "temple-right" | "inside-bridge";
  finish: "or-mat" | "or-poli";
};

const ENGRAVING_SUPPLEMENT = 180;

const PLACEMENTS: {
  key: Engraving["placement"];
  label: string;
  hint: string;
}[] = [
  { key: "temple-left", label: "Bügel links", hint: "Aussenseite links" },
  { key: "temple-right", label: "Bügel rechts", hint: "Aussenseite rechts" },
  { key: "inside-bridge", label: "Steg innen", hint: "Diskret innenseitig" },
];

const FINISHES: {
  key: Engraving["finish"];
  label: string;
  hint: string;
}[] = [
  { key: "or-mat", label: "Or mat", hint: "Satiniert, tiefer Glanz" },
  { key: "or-poli", label: "Or poli", hint: "Hochglanz, spiegelnd" },
];

export default function ProductDetail({ product }: { product: Product }) {
  const [colorIx, setColorIx] = useState(0);
  const [view, setView] = useState<ViewMode>("photo");
  const [engraved, setEngraved] = useState(false);
  const [engraving, setEngraving] = useState<Engraving>({
    initials: "",
    placement: "temple-left",
    finish: "or-mat",
  });
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const {
    addToCart,
    openDrawer,
    toggleCabinet,
    isInCabinet,
    formatCurrency,
  } = useBoutique();

  const activeColor = product.colors[colorIx];
  const basePrice = useMemo(() => parsePriceLabel(product.price), [product.price]);
  const totalPrice = basePrice + (engraved ? ENGRAVING_SUPPLEMENT : 0);
  const inCabinet = isInCabinet(product.slug);

  const handleReserve = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      subtitle: product.subtitle,
      edition: product.edition,
      price: product.price,
      priceValue: totalPrice,
      color: activeColor,
      image: product.image,
      engraving: engraved && engraving.initials.trim().length > 0 ? engraving : null,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
    window.setTimeout(() => openDrawer("panier"), 380);
  };

  const handleSave = () => {
    toggleCabinet({
      slug: product.slug,
      name: product.name,
      subtitle: product.subtitle,
      edition: product.edition,
      price: product.price,
      image: product.image,
    });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1200);
  };

  return (
    <section className="relative bg-bg pt-24 md:pt-32 pb-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Image column */}
        <div className="md:col-span-7 lg:col-span-8 md:sticky md:top-24 self-start space-y-2 md:space-y-3">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-3">
            <AnimatePresence mode="wait">
              {view === "photo" ? (
                <motion.div
                  key="photo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <PlaceholderImage
                    src={product.image}
                    alt={product.imageAlt}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    quality={82}
                    className="object-cover"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-multiply opacity-30"
                    style={{
                      background: `linear-gradient(180deg, transparent 60%, ${activeColor.hex}22)`,
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="scene"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(198,154,90,0.15), transparent 60%), #050505",
                  }}
                >
                  <Product3D tint={activeColor.hex} autoRotate />
                </motion.div>
              )}
            </AnimatePresence>

            {/* View toggle */}
            <div className="absolute right-4 top-4 z-10 flex gap-2">
              <ViewChip
                active={view === "photo"}
                onClick={() => setView("photo")}
              >
                Foto
              </ViewChip>
              <ViewChip
                active={view === "trois-d"}
                onClick={() => setView("trois-d")}
              >
                3D
              </ViewChip>
              <ViewChip
                active={false}
                onClick={() => openDrawer("essai")}
                tone="gold"
              >
                Essai
              </ViewChip>
            </div>

            {view === "trois-d" && (
              <div
                className="absolute inset-x-0 bottom-4 z-10 text-center text-white/60 text-[10px] uppercase pointer-events-none"
                style={{ letterSpacing: "0.32em" }}
              >
                Ziehen zum Drehen
              </div>
            )}

            {/* Édition plaquette bottom-left */}
            <div className="absolute left-4 bottom-4 z-10 hidden sm:block">
              <div
                className="inline-flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.28em]"
                style={{
                  color: "var(--or-glow)",
                  background: "rgba(10,8,6,0.55)",
                  border: "1px solid rgba(230, 201, 138, 0.35)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="numeral"
                  style={{ fontStyle: "italic", letterSpacing: 0 }}
                >
                  {product.edition}
                </span>
                <span className="dot" />
                <span>Signée</span>
              </div>
            </div>
          </div>

          {/* Second detail thumbnail row */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            <div className="relative aspect-square overflow-hidden bg-bg-3">
              <PlaceholderImage
                src={product.image}
                alt={`${product.name} · Detail`}
                sizes="30vw"
                quality={76}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-bg-3">
              <PlaceholderImage
                src={product.image}
                alt={`${product.name} · Bügel`}
                sizes="30vw"
                quality={76}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info column */}
        <div className="md:col-span-5 lg:col-span-4 md:pt-4 space-y-10">
          <div>
            <p className="eyebrow">{product.subtitle}</p>
            <h1 className="mt-5 font-light text-ink text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <p className="text-[16px] text-ink font-light numeral">
                {formatCurrency(totalPrice)}
              </p>
              {engraved && (
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
                  inkl. Gravure {formatCurrency(ENGRAVING_SUPPLEMENT)}
                </p>
              )}
            </div>
          </div>

          <div className="hairline-soft" />

          <p className="text-[14.5px] leading-[1.8] text-muted">{product.story}</p>

          <div>
            <p className="eyebrow mb-4">Coloris</p>
            <div className="flex flex-wrap items-center gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c.label}
                  onClick={() => setColorIx(i)}
                  aria-label={c.label}
                  aria-pressed={i === colorIx}
                  className="group"
                  style={{ transition: "transform 160ms var(--ease-out)" }}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <span
                    className="block h-8 w-8 rounded-full border"
                    style={{
                      background: c.hex,
                      borderColor:
                        i === colorIx ? "#111" : "rgba(17,17,17,0.15)",
                      boxShadow:
                        i === colorIx
                          ? "0 0 0 3px #fff, 0 0 0 4px #111"
                          : "none",
                    }}
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-muted">
              {activeColor.label}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Material</p>
            <ul className="space-y-2 text-[13.5px] text-ink font-light">
              {product.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Mesures</p>
            <dl className="divide-y divide-line-soft border-y border-line-soft">
              {product.measurements.map((m) => (
                <div key={m.label} className="flex justify-between py-3">
                  <dt className="text-[13.5px] text-muted">{m.label}</dt>
                  <dd className="text-[13.5px] text-ink font-light">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* GRAVURE PERSONNALISÉE */}
          <div>
            <button
              onClick={() => setEngraved((v) => !v)}
              className="w-full flex items-center justify-between py-3 border-t border-line-soft border-b group"
              aria-expanded={engraved}
            >
              <span className="text-left">
                <span className="eyebrow-gold block">Gravure Personnalisée</span>
                <span className="mt-1 block text-[12px] text-muted">
                  Initialen in Blattgold, im Haus graviert
                </span>
              </span>
              <span
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]"
                style={{ color: engraved ? "var(--or-2)" : "var(--muted)" }}
              >
                <span>{engraved ? "Aktiviert" : "Hinzufügen"}</span>
                <ToggleGlyph on={engraved} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {engraved && (
                <motion.div
                  key="engraving-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 pb-2 space-y-6">
                    <div>
                      <label
                        htmlFor="engraving-initials"
                        className="eyebrow block mb-3"
                      >
                        Initialen · max. 4 Zeichen
                      </label>
                      <input
                        id="engraving-initials"
                        maxLength={4}
                        value={engraving.initials}
                        onChange={(e) =>
                          setEngraving((s) => ({
                            ...s,
                            initials: e.target.value
                              .toUpperCase()
                              .replace(/[^A-Z0-9·. ]/g, ""),
                          }))
                        }
                        placeholder="M · K"
                        className="w-full bg-transparent border border-line px-4 py-4 text-[22px] tracking-[0.6em] text-ink outline-none focus:border-or-2 uppercase text-center numeral"
                        style={{ fontFamily: "var(--font-fraunces), serif" }}
                      />
                    </div>

                    <div>
                      <p className="eyebrow mb-3">Emplacement</p>
                      <div className="grid grid-cols-3 gap-2">
                        {PLACEMENTS.map((p) => (
                          <ChoiceChip
                            key={p.key}
                            active={engraving.placement === p.key}
                            label={p.label}
                            hint={p.hint}
                            onClick={() =>
                              setEngraving((s) => ({ ...s, placement: p.key }))
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow mb-3">Finition</p>
                      <div className="grid grid-cols-2 gap-2">
                        {FINISHES.map((f) => (
                          <ChoiceChip
                            key={f.key}
                            active={engraving.finish === f.key}
                            label={f.label}
                            hint={f.hint}
                            onClick={() =>
                              setEngraving((s) => ({ ...s, finish: f.key }))
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-[11.5px] text-muted leading-[1.7]">
                      Zusatz {formatCurrency(ENGRAVING_SUPPLEMENT)}. Gravur wird
                      nach Ihrer schriftlichen Freigabe ausgeführt. Nicht
                      erstattbar.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-3">
            <button
              ref={triggerRef}
              onClick={handleReserve}
              className="btn-gold w-full justify-center"
            >
              {added ? "Zum Panier hinzugefügt" : "Signature réserver"}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleSave}
                className="lv-btn w-full justify-center"
                aria-pressed={inCabinet}
              >
                {saved
                  ? inCabinet
                    ? "Ins Cabinet"
                    : "Aus Cabinet"
                  : inCabinet
                    ? "Im Cabinet"
                    : "Ins Cabinet"}
              </button>
              <button
                onClick={() => openDrawer("essai")}
                className="lv-btn w-full justify-center"
              >
                Essai Virtuel
              </button>
            </div>
          </div>

          <p className="text-[12px] text-muted leading-relaxed">
            Alle Fassungen werden nach Anprobe und individueller Sehstärke
            gefertigt. Lieferzeit 4 bis 6 Wochen. Réparation à vie.
          </p>
        </div>
      </div>
    </section>
  );
}

function ViewChip({
  active,
  children,
  onClick,
  tone = "ink",
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  tone?: "ink" | "gold";
}) {
  const goldActive = tone === "gold";
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-[10px] uppercase"
      style={{
        letterSpacing: "0.24em",
        background: active
          ? "#111"
          : goldActive
            ? "linear-gradient(100deg, var(--or-2), var(--or) 50%, var(--or-2))"
            : "rgba(255,255,255,0.85)",
        color: active ? "#fff" : goldActive ? "#0a0806" : "#111",
        transition: "background 240ms cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      {children}
    </button>
  );
}

function ChoiceChip({
  active,
  label,
  hint,
  onClick,
}: {
  active: boolean;
  label: string;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="text-left px-3 py-3 border"
      style={{
        borderColor: active ? "var(--or-2)" : "var(--line)",
        background: active ? "rgba(198,154,63,0.08)" : "transparent",
        transition:
          "background 220ms var(--ease-out), border-color 220ms var(--ease-out)",
      }}
    >
      <span
        className="block text-[12px] uppercase tracking-[0.2em]"
        style={{ color: active ? "var(--or-2)" : "var(--ink)" }}
      >
        {label}
      </span>
      <span className="mt-1 block text-[10.5px] text-muted leading-tight">
        {hint}
      </span>
    </button>
  );
}

function ToggleGlyph({ on }: { on: boolean }) {
  return (
    <span
      className="relative inline-block h-[14px] w-[26px] rounded-full"
      style={{
        border: `1px solid ${on ? "var(--or-2)" : "var(--line)"}`,
        background: on ? "rgba(198,154,63,0.16)" : "transparent",
        transition: "background 220ms var(--ease-out), border-color 220ms var(--ease-out)",
      }}
      aria-hidden
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 h-[8px] w-[8px] rounded-full"
        style={{
          left: on ? 14 : 3,
          background: on ? "var(--or)" : "var(--muted)",
          transition: "left 260ms var(--ease-editorial), background 220ms var(--ease-out)",
        }}
      />
    </span>
  );
}
