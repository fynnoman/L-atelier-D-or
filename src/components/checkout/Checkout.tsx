"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import PlaceholderImage from "../PlaceholderImage";
import { editionNumeral } from "@/lib/boutique/price";

type StepId = "identite" | "livraison" | "signature" | "confirmation";
type Delivery = "atelier-paris" | "atelier-berlin" | "postal";

const STEPS: { id: StepId; label: string; hint: string }[] = [
  { id: "identite", label: "Identité", hint: "Kontaktdaten" },
  { id: "livraison", label: "Livraison", hint: "Salon oder Colissimo" },
  { id: "signature", label: "Signature", hint: "Bestätigen" },
  { id: "confirmation", label: "Bestätigt", hint: "Merci" },
];

export default function Checkout() {
  const { cart, subtotal, formatCurrency, clearCart } = useBoutique();
  const [step, setStep] = useState<StepId>("identite");
  const [identite, setIdentite] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });
  const [delivery, setDelivery] = useState<Delivery>("atelier-paris");
  const [salonDate, setSalonDate] = useState<string>("");
  const [wrapping, setWrapping] = useState<"pouch" | "coffret">("coffret");
  const [address, setAddress] = useState({
    ligne1: "",
    ligne2: "",
    zip: "",
    ville: "",
    pays: "France",
  });
  const [conditions, setConditions] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    reference: string;
    editions: number[];
  } | null>(null);

  const deposit = useMemo(() => Math.round(subtotal * 0.3), [subtotal]);
  const remaining = subtotal - deposit;
  const stepIndex = STEPS.findIndex((s) => s.id === step);

  if (cart.length === 0 && step !== "confirmation") {
    return <EmptyState />;
  }

  const identityValid =
    identite.prenom.trim().length > 1 &&
    identite.nom.trim().length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(identite.email.trim());

  const deliveryValid =
    delivery !== "postal"
      ? salonDate.trim().length > 0
      : address.ligne1.trim().length > 2 &&
        address.zip.trim().length > 2 &&
        address.ville.trim().length > 1;

  const canConfirm = identityValid && deliveryValid && conditions;

  const handleConfirm = () => {
    if (!canConfirm) return;
    const reference =
      "LAD-" +
      Math.random().toString(36).slice(2, 6).toUpperCase() +
      "-" +
      String(Date.now()).slice(-4);
    setConfirmation({
      reference,
      editions: cart.map((c) => c.editionNumber),
    });
    setStep("confirmation");
    clearCart();
  };

  return (
    <div className="relative min-h-[100dvh] bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <header className="mb-12 md:mb-16">
          <p className="eyebrow-gold">Signature Checkout</p>
          <h1 className="mt-5 display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] tracking-[-0.02em]">
            Ihre Reservierung
            <span
              className="block"
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-fraunces), serif",
                color: "var(--or-2)",
              }}
            >
              wird handverlesen bestätigt.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[14px] text-muted leading-[1.9]">
            Anzahlung 30 %. Restbetrag im Salon oder bei der Auslieferung.
            Fertigung 4 bis 6 Wochen. Jede Fassung wird von Hand signiert und
            handnummeriert.
          </p>
        </header>

        <Stepper stepIndex={stepIndex} />

        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          {/* Form column */}
          <div>
            <AnimatePresence mode="wait">
              {step === "identite" && (
                <motion.section
                  key="identite"
                  {...panelMotion}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 01 · Identité</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      An wen richten wir uns?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Prénom"
                      value={identite.prenom}
                      onChange={(v) => setIdentite((s) => ({ ...s, prenom: v }))}
                      placeholder="Marie"
                    />
                    <Field
                      label="Nom"
                      value={identite.nom}
                      onChange={(v) => setIdentite((s) => ({ ...s, nom: v }))}
                      placeholder="Kessler"
                    />
                    <Field
                      label="E-Mail"
                      type="email"
                      value={identite.email}
                      onChange={(v) => setIdentite((s) => ({ ...s, email: v }))}
                      placeholder="marie@maison.example"
                      className="sm:col-span-2"
                    />
                    <Field
                      label="Téléphone"
                      value={identite.telephone}
                      onChange={(v) =>
                        setIdentite((s) => ({ ...s, telephone: v }))
                      }
                      placeholder="+33 6 12 34 56 78"
                      className="sm:col-span-2"
                    />
                  </div>
                  <StepFooter>
                    <Link href="/kollektion" className="lv-btn">
                      Zurück zur Kollektion
                    </Link>
                    <button
                      disabled={!identityValid}
                      onClick={() => setStep("livraison")}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Weiter · Livraison
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "livraison" && (
                <motion.section
                  key="livraison"
                  {...panelMotion}
                  className="space-y-10"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 02 · Livraison</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      Salon oder Signature-Versand.
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    <DeliveryChoice
                      active={delivery === "atelier-paris"}
                      onClick={() => setDelivery("atelier-paris")}
                      title="Salon Paris"
                      hint="12 rue de la Paix · 75002"
                      meta="Anprobe · Sehstärke · Übergabe"
                    />
                    <DeliveryChoice
                      active={delivery === "atelier-berlin"}
                      onClick={() => setDelivery("atelier-berlin")}
                      title="Salon Berlin"
                      hint="Kantstraße · Charlottenburg"
                      meta="Nur nach Terminvergabe"
                    />
                    <DeliveryChoice
                      active={delivery === "postal"}
                      onClick={() => setDelivery("postal")}
                      title="Colissimo Signature"
                      hint="Innerhalb Europa · frei"
                      meta="Handübergabe an der Adresse"
                    />
                  </div>

                  {delivery !== "postal" ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field
                        label="Wunschtermin"
                        type="date"
                        value={salonDate}
                        onChange={setSalonDate}
                        className="sm:col-span-2"
                      />
                      <p className="sm:col-span-2 text-[11.5px] text-muted leading-[1.7]">
                        Léa Marchand bestätigt Ihren Termin innerhalb von 24 Stunden.
                        Alternativvorschläge werden per E-Mail vereinbart.
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field
                        label="Adresse Ligne 1"
                        value={address.ligne1}
                        onChange={(v) => setAddress((s) => ({ ...s, ligne1: v }))}
                        className="sm:col-span-2"
                      />
                      <Field
                        label="Adresse Ligne 2 (opt.)"
                        value={address.ligne2}
                        onChange={(v) => setAddress((s) => ({ ...s, ligne2: v }))}
                        className="sm:col-span-2"
                      />
                      <Field
                        label="Code Postal"
                        value={address.zip}
                        onChange={(v) => setAddress((s) => ({ ...s, zip: v }))}
                      />
                      <Field
                        label="Ville"
                        value={address.ville}
                        onChange={(v) => setAddress((s) => ({ ...s, ville: v }))}
                      />
                      <Field
                        label="Pays"
                        value={address.pays}
                        onChange={(v) => setAddress((s) => ({ ...s, pays: v }))}
                        className="sm:col-span-2"
                      />
                    </div>
                  )}

                  <div>
                    <p className="eyebrow mb-4">Écrin</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <WrapChoice
                        active={wrapping === "coffret"}
                        onClick={() => setWrapping("coffret")}
                        title="Coffret Signature"
                        hint="Massivholz · geprägtes Wappen"
                      />
                      <WrapChoice
                        active={wrapping === "pouch"}
                        onClick={() => setWrapping("pouch")}
                        title="Pochette Cuir"
                        hint="Kalbsleder · handgenäht"
                      />
                    </div>
                  </div>

                  <StepFooter>
                    <button
                      onClick={() => setStep("identite")}
                      className="lv-btn"
                    >
                      Zurück
                    </button>
                    <button
                      disabled={!deliveryValid}
                      onClick={() => setStep("signature")}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Weiter · Signature
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "signature" && (
                <motion.section
                  key="signature"
                  {...panelMotion}
                  className="space-y-10"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 03 · Signature</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      Der letzte Handschlag.
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <RecapRow label="Klient">
                      {identite.prenom} {identite.nom}
                      <span className="text-muted"> · {identite.email}</span>
                    </RecapRow>
                    <RecapRow label="Livraison">
                      {delivery === "atelier-paris" && "Salon Paris"}
                      {delivery === "atelier-berlin" && "Salon Berlin"}
                      {delivery === "postal" && "Colissimo Signature"}
                      {delivery !== "postal" && salonDate && (
                        <span className="text-muted"> · {salonDate}</span>
                      )}
                      {delivery === "postal" && address.ville && (
                        <span className="text-muted">
                          {" "}
                          · {address.zip} {address.ville}
                        </span>
                      )}
                    </RecapRow>
                    <RecapRow label="Écrin">
                      {wrapping === "coffret"
                        ? "Coffret Signature (Holz)"
                        : "Pochette Cuir"}
                    </RecapRow>
                  </div>

                  <div className="rounded-none border border-line-soft p-6 bg-bg-2/40 space-y-4">
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-muted">Sous-total</span>
                      <span className="numeral">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-muted">Livraison</span>
                      <span className="text-ink">Offerte</span>
                    </div>
                    <div className="hairline-soft" />
                    <div className="flex justify-between text-[13.5px]">
                      <span
                        className="uppercase tracking-[0.24em] text-[11px]"
                        style={{ color: "var(--or-2)" }}
                      >
                        Anzahlung heute (30 %)
                      </span>
                      <span
                        className="numeral"
                        style={{ color: "var(--or-2)" }}
                      >
                        {formatCurrency(deposit)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-muted uppercase tracking-[0.24em] text-[11px]">
                        Restbetrag im Salon
                      </span>
                      <span className="numeral text-muted">
                        {formatCurrency(remaining)}
                      </span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={conditions}
                      onChange={(e) => setConditions(e.target.checked)}
                      className="mt-1 h-[16px] w-[16px] accent-[color:var(--or-2)]"
                    />
                    <span className="text-[12.5px] text-muted leading-[1.7]">
                      Ich bestätige die Reservierung und akzeptiere die
                      Fertigungsdauer von 4 bis 6 Wochen sowie die
                      Anzahlung. Personalisierte Gravuren sind nicht erstattbar.
                    </span>
                  </label>

                  <StepFooter>
                    <button
                      onClick={() => setStep("livraison")}
                      className="lv-btn"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={!canConfirm}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Reservierung bestätigen
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "confirmation" && confirmation && (
                <motion.section
                  key="confirmation"
                  {...panelMotion}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <p className="eyebrow-gold">Étape 04 · Confirmation</p>
                    <h2 className="display text-ink text-[clamp(2rem,3.4vw,3rem)]">
                      Merci,{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          fontFamily: "var(--font-fraunces), serif",
                          color: "var(--or-2)",
                        }}
                      >
                        {identite.prenom || "Madame, Monsieur"}.
                      </span>
                    </h2>
                    <p className="text-[14px] text-muted leading-[1.9] max-w-xl">
                      Léa Marchand meldet sich innerhalb von 24 Stunden zur
                      Bestätigung. Ihre Reservierungsnummer:
                    </p>
                  </div>

                  <div className="border border-line p-6 md:p-8 grid gap-6 md:grid-cols-[auto_1fr] items-center bg-bg-2/40">
                    <div>
                      <p className="eyebrow">Référence</p>
                      <p
                        className="mt-2 numeral text-ink"
                        style={{ fontSize: "clamp(1.6rem,2.6vw,2.2rem)" }}
                      >
                        {confirmation.reference}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Editionen</p>
                      <p className="mt-2 text-[15px] text-ink font-light leading-relaxed">
                        {confirmation.editions
                          .map(editionNumeral)
                          .join(" · ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/passeport" className="btn-gold">
                      Passeport öffnen
                    </Link>
                    <Link href="/kollektion" className="lv-btn">
                      Weitere Fassungen ansehen
                    </Link>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {/* Summary column */}
          {step !== "confirmation" && (
            <aside className="md:sticky md:top-32 self-start border border-line-soft bg-bg-2/40 p-6">
              <p className="eyebrow-gold">Récapitulatif</p>
              <ul className="mt-5 space-y-5">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-[64px_1fr_auto] gap-3 pb-5 border-b border-line-soft last:border-b-0 last:pb-0"
                  >
                    <div className="relative h-[78px] w-[64px] overflow-hidden bg-bg-3">
                      <PlaceholderImage
                        src={item.image}
                        alt={item.name}
                        sizes="64px"
                        quality={70}
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] text-ink font-light truncate">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.22em] text-muted truncate">
                        {item.color.label} · {editionNumeral(item.editionNumber)}
                      </p>
                      {item.engraving && item.engraving.initials && (
                        <p
                          className="mt-1 text-[10.5px] italic"
                          style={{
                            fontFamily: "var(--font-fraunces), serif",
                            color: "var(--patine)",
                          }}
                        >
                          «&nbsp;{item.engraving.initials}&nbsp;»
                        </p>
                      )}
                    </div>
                    <p className="text-[12.5px] numeral text-ink self-start whitespace-nowrap">
                      {formatCurrency(item.priceValue)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-line space-y-2 text-[13px]">
                <div className="flex justify-between text-muted">
                  <span>Sous-total</span>
                  <span className="numeral">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Anzahlung heute</span>
                  <span
                    className="numeral"
                    style={{ color: "var(--or-2)" }}
                  >
                    {formatCurrency(deposit)}
                  </span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Rest im Salon</span>
                  <span className="numeral">{formatCurrency(remaining)}</span>
                </div>
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted">
                Signé à la main · Paris · Berlin · Jura
              </p>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

const panelMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

function Stepper({ stepIndex }: { stepIndex: number }) {
  return (
    <ol className="grid grid-cols-4 gap-2 md:gap-6 border-t border-b border-line-soft py-6">
      {STEPS.map((s, i) => {
        const done = i < stepIndex;
        const active = i === stepIndex;
        return (
          <li key={s.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span
                className="numeral text-[13px]"
                style={{
                  color: active
                    ? "var(--or-2)"
                    : done
                      ? "var(--ink)"
                      : "var(--muted-2)",
                  fontStyle: "italic",
                }}
              >
                0{i + 1}
              </span>
              <span
                className="h-px flex-1"
                style={{
                  background: done
                    ? "var(--or)"
                    : active
                      ? "linear-gradient(90deg, var(--or), transparent)"
                      : "var(--line-soft)",
                }}
              />
            </div>
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.24em]"
                style={{
                  color: active
                    ? "var(--or-2)"
                    : done
                      ? "var(--ink)"
                      : "var(--muted)",
                }}
              >
                {s.label}
              </p>
              <p className="text-[10.5px] text-muted mt-1 hidden md:block">
                {s.hint}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function StepFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 flex flex-wrap items-center gap-3 justify-between">
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow block mb-2">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-line px-4 py-3 text-[14.5px] text-ink outline-none focus:border-or-2 placeholder:text-muted-2"
        style={{ transition: "border-color 220ms var(--ease-out)" }}
      />
    </label>
  );
}

function DeliveryChoice({
  active,
  onClick,
  title,
  hint,
  meta,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  hint: string;
  meta: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="w-full text-left px-5 py-4 border grid grid-cols-[1fr_auto] items-center gap-4"
      style={{
        borderColor: active ? "var(--or-2)" : "var(--line)",
        background: active ? "rgba(198,154,63,0.06)" : "transparent",
        transition:
          "border-color 220ms var(--ease-out), background 220ms var(--ease-out)",
      }}
    >
      <div>
        <p
          className="text-[14.5px] text-ink font-light"
          style={{ color: active ? "var(--ink)" : "var(--ink)" }}
        >
          {title}
        </p>
        <p className="text-[11px] uppercase tracking-[0.24em] text-muted mt-1">
          {hint}
        </p>
      </div>
      <p className="text-[11.5px] text-muted italic hidden sm:block">{meta}</p>
    </button>
  );
}

function WrapChoice({
  active,
  onClick,
  title,
  hint,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  hint: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="w-full text-left px-5 py-4 border"
      style={{
        borderColor: active ? "var(--or-2)" : "var(--line)",
        background: active ? "rgba(198,154,63,0.06)" : "transparent",
        transition:
          "border-color 220ms var(--ease-out), background 220ms var(--ease-out)",
      }}
    >
      <p className="text-[14px] text-ink font-light">{title}</p>
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted mt-1">
        {hint}
      </p>
    </button>
  );
}

function RecapRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 items-baseline pb-4 border-b border-line-soft">
      <p className="eyebrow">{label}</p>
      <p className="text-[14px] text-ink font-light">{children}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="min-h-[80dvh] bg-bg pt-40 pb-24 grid place-items-center">
      <div className="max-w-md text-center px-6">
        <p className="eyebrow-gold">Panier vide</p>
        <h1 className="mt-5 display text-ink text-[clamp(2rem,3.4vw,3rem)]">
          Noch keine Fassung
          <br />
          <span
            style={{
              fontStyle: "italic",
              fontFamily: "var(--font-fraunces), serif",
              color: "var(--or-2)",
            }}
          >
            gewählt.
          </span>
        </h1>
        <p className="mt-6 text-[14px] text-muted leading-[1.9]">
          Wählen Sie eine Fassung, konfigurieren Sie Coloris und Gravur, dann
          bestätigen wir gemeinsam.
        </p>
        <Link href="/kollektion" className="btn-gold mt-9 inline-flex">
          Kollektion ansehen
        </Link>
      </div>
    </div>
  );
}
