"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import { maison } from "@/data/maison";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";

type SalonId = "paris" | "berlin" | "jura" | "video";
type Format = "essai" | "signature" | "reparation" | "consultation";

type Step = "salon" | "format" | "creneau" | "profil" | "confirmation";

const SALONS: {
  id: SalonId;
  name: string;
  city: string;
  address: string;
  hint: string;
  hours: string;
}[] = [
  {
    id: "paris",
    name: "Salon Paris",
    city: "Paris · France",
    address: "12 rue de la Paix · 75002",
    hint: "Léa Marchand, Camille Aubry.",
    hours: "Lundi Samedi · 10 19 h",
  },
  {
    id: "berlin",
    name: "Salon Berlin",
    city: "Berlin · Deutschland",
    address: "Kantstraße · Charlottenburg",
    hint: "Antoine Devaux, mobile Anpassung DACH.",
    hours: "Dienstag Freitag · 11 19 Uhr",
  },
  {
    id: "jura",
    name: "Manufaktur Jura",
    city: "Le Sentier · Suisse",
    address: "Route du Bugnon · 1347",
    hint: "Rémi Kessler persönlich. Nur wenige Termine.",
    hours: "Nach Vereinbarung",
  },
  {
    id: "video",
    name: "Salon Virtuel",
    city: "Video · WhatsApp · FaceTime",
    address: "Weltweit",
    hint: "45 Minuten mit der Concierge, live.",
    hours: "Nach Vereinbarung",
  },
];

const FORMATS: { id: Format; label: string; hint: string }[] = [
  { id: "essai", label: "Anprobe", hint: "60 Minuten · Auswahl mehrerer Fassungen" },
  {
    id: "signature",
    label: "Signature",
    hint: "90 Minuten · finale Anpassung, Gravur, Sehstärke",
  },
  {
    id: "reparation",
    label: "Réparation à vie",
    hint: "45 Minuten · Pflege, Nachjustierung, Politur",
  },
  {
    id: "consultation",
    label: "Consultation Privée",
    hint: "45 Minuten · für Presse, Sammler, Nachlass",
  },
];

const TIME_SLOTS = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];

export default function Concierge() {
  const { cabinet } = useBoutique();
  const [step, setStep] = useState<Step>("salon");
  const [salon, setSalon] = useState<SalonId | null>(null);
  const [format, setFormat] = useState<Format | null>(null);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [selectedFrames, setSelectedFrames] = useState<string[]>([]);
  const [profil, setProfil] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    note: "",
  });
  const [confirmation, setConfirmation] = useState<null | {
    reference: string;
  }>(null);

  const salonMeta = SALONS.find((s) => s.id === salon);
  const formatMeta = FORMATS.find((f) => f.id === format);

  const cabinetPreselected = useMemo(
    () => cabinet.map((c) => c.slug),
    [cabinet],
  );

  const toggleFrame = (slug: string) => {
    setSelectedFrames((frames) =>
      frames.includes(slug)
        ? frames.filter((f) => f !== slug)
        : [...frames, slug],
    );
  };

  const profilValid =
    profil.prenom.trim().length > 1 &&
    profil.nom.trim().length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(profil.email.trim());

  const handleConfirm = () => {
    if (!profilValid) return;
    const reference =
      "CON-" +
      Math.random().toString(36).slice(2, 6).toUpperCase() +
      "-" +
      String(Date.now()).slice(-4);
    setConfirmation({ reference });
    setStep("confirmation");
  };

  const stepIndex = ["salon", "format", "creneau", "profil", "confirmation"].indexOf(
    step,
  );

  return (
    <div className="relative min-h-[100dvh] bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1300px] px-6 md:px-12">
        <header className="mb-12 md:mb-16 grid gap-8 md:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <p className="eyebrow-gold">Salon Privé · Concierge</p>
            <h1 className="mt-5 display text-ink text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.02em]">
              Ein Termin im Haus,
              <span
                className="block"
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-fraunces), serif",
                  color: "var(--or-2)",
                }}
              >
                nicht am Ladentisch.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[14px] text-muted leading-[1.9]">
              Léa Marchand koordiniert die Anprobe in Paris, Berlin oder im
              Jura. Kaffee, Zeit, Ruhe. Jede Fassung wird an Ihrer Physiognomie
              vermessen und im Haus signiert.
            </p>
          </div>
          <div className="border border-line-soft p-5 bg-bg-2/40">
            <p className="eyebrow-gold">Concierge</p>
            <p className="mt-2 text-[15px] text-ink font-light">
              {maison.concierge.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted mt-1">
              {maison.concierge.role}
            </p>
            <div className="mt-4 hairline-soft" />
            <div className="mt-4 space-y-1 text-[13px] text-ink font-light">
              <p>{maison.concierge.phone}</p>
              <a
                href={`mailto:${maison.concierge.email}`}
                className="link-gold text-[13px]"
              >
                {maison.concierge.email}
              </a>
            </div>
          </div>
        </header>

        <Stepper stepIndex={stepIndex} />

        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <AnimatePresence mode="wait">
              {step === "salon" && (
                <motion.section key="salon" {...panelMotion} className="space-y-8">
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 01 · Salon</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      Wo darf sich die Maison zeigen?
                    </h2>
                  </div>
                  <div className="grid gap-3">
                    {SALONS.map((s) => (
                      <BigChoice
                        key={s.id}
                        active={salon === s.id}
                        onClick={() => setSalon(s.id)}
                        title={s.name}
                        eyebrow={s.city}
                        hint={s.address}
                        meta={s.hours}
                        note={s.hint}
                      />
                    ))}
                  </div>
                  <StepFooter>
                    <Link href="/atelier" className="lv-btn">
                      Maison entdecken
                    </Link>
                    <button
                      disabled={!salon}
                      onClick={() => setStep("format")}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Weiter · Format
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "format" && (
                <motion.section
                  key="format"
                  {...panelMotion}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 02 · Format</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      Wieviel Zeit dürfen wir Ihnen widmen?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {FORMATS.map((f) => (
                      <SmallChoice
                        key={f.id}
                        active={format === f.id}
                        onClick={() => setFormat(f.id)}
                        title={f.label}
                        hint={f.hint}
                      />
                    ))}
                  </div>
                  <StepFooter>
                    <button
                      onClick={() => setStep("salon")}
                      className="lv-btn"
                    >
                      Zurück
                    </button>
                    <button
                      disabled={!format}
                      onClick={() => setStep("creneau")}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Weiter · Créneau
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "creneau" && (
                <motion.section
                  key="creneau"
                  {...panelMotion}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 03 · Créneau</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      Datum und Uhrzeit.
                    </h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow block mb-2">Wunschdatum</span>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent border border-line px-4 py-3 text-[14.5px] text-ink outline-none focus:border-or-2"
                      />
                    </label>
                    <div>
                      <span className="eyebrow block mb-2">Créneau</span>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            onClick={() => setTime(t)}
                            aria-pressed={time === t}
                            className="px-3 py-3 border text-[13px] text-ink font-light"
                            style={{
                              borderColor:
                                time === t ? "var(--or-2)" : "var(--line)",
                              background:
                                time === t
                                  ? "rgba(198,154,63,0.08)"
                                  : "transparent",
                              transition:
                                "border-color 220ms var(--ease-out), background 220ms var(--ease-out)",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11.5px] text-muted leading-[1.8]">
                    Konkrete Bestätigung erfolgt persönlich. Alternativvorschläge
                    innerhalb von 24 Stunden per E-Mail.
                  </p>
                  <StepFooter>
                    <button
                      onClick={() => setStep("format")}
                      className="lv-btn"
                    >
                      Zurück
                    </button>
                    <button
                      disabled={!date}
                      onClick={() => setStep("profil")}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Weiter · Profil
                    </button>
                  </StepFooter>
                </motion.section>
              )}

              {step === "profil" && (
                <motion.section
                  key="profil"
                  {...panelMotion}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="eyebrow-gold">Étape 04 · Profil</p>
                    <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)]">
                      An wen richten wir uns?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field
                      label="Prénom"
                      value={profil.prenom}
                      onChange={(v) => setProfil((s) => ({ ...s, prenom: v }))}
                    />
                    <Field
                      label="Nom"
                      value={profil.nom}
                      onChange={(v) => setProfil((s) => ({ ...s, nom: v }))}
                    />
                    <Field
                      label="E-Mail"
                      type="email"
                      value={profil.email}
                      onChange={(v) => setProfil((s) => ({ ...s, email: v }))}
                      className="sm:col-span-2"
                    />
                    <Field
                      label="Téléphone (opt.)"
                      value={profil.telephone}
                      onChange={(v) =>
                        setProfil((s) => ({ ...s, telephone: v }))
                      }
                      className="sm:col-span-2"
                    />
                  </div>

                  <div>
                    <p className="eyebrow-gold mb-3">
                      Fassungen für die Anprobe
                    </p>
                    <p className="text-[12px] text-muted mb-4">
                      Wählen Sie die Fassungen, die im Salon bereitliegen
                      sollen. Ihr Cabinet Privé ist bereits vorgemerkt.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {products.map((p) => {
                        const active =
                          selectedFrames.includes(p.slug) ||
                          cabinetPreselected.includes(p.slug);
                        return (
                          <button
                            key={p.slug}
                            onClick={() => toggleFrame(p.slug)}
                            aria-pressed={active}
                            className="px-3 py-3 text-left border"
                            style={{
                              borderColor: active
                                ? "var(--or-2)"
                                : "var(--line)",
                              background: active
                                ? "rgba(198,154,63,0.08)"
                                : "transparent",
                              transition:
                                "border-color 220ms var(--ease-out), background 220ms var(--ease-out)",
                            }}
                          >
                            <span className="text-[12.5px] text-ink font-light block">
                              {p.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-muted block mt-0.5">
                              {p.subtitle.split(",")[0]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="block">
                    <span className="eyebrow block mb-2">Note à la concierge</span>
                    <textarea
                      value={profil.note}
                      onChange={(e) =>
                        setProfil((s) => ({ ...s, note: e.target.value }))
                      }
                      rows={3}
                      placeholder="Sehstärke bereits im Haus, Anfahrt mit dem Zug, Vertraulich…"
                      className="w-full bg-transparent border border-line px-4 py-3 text-[14px] text-ink outline-none focus:border-or-2 resize-none placeholder:text-muted-2"
                    />
                  </label>

                  <StepFooter>
                    <button
                      onClick={() => setStep("creneau")}
                      className="lv-btn"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={!profilValid}
                      className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Termin anfragen
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
                    <p className="eyebrow-gold">Confirmation</p>
                    <h2 className="display text-ink text-[clamp(2rem,3.4vw,3rem)]">
                      Merci,{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          fontFamily: "var(--font-fraunces), serif",
                          color: "var(--or-2)",
                        }}
                      >
                        {profil.prenom || "Madame, Monsieur"}.
                      </span>
                    </h2>
                    <p className="text-[14px] text-muted leading-[1.9] max-w-xl">
                      {maison.concierge.name} meldet sich innerhalb von 24 Stunden
                      persönlich zurück und bestätigt Ihren Termin.
                    </p>
                  </div>

                  <div className="border border-line p-6 md:p-8 grid gap-6 md:grid-cols-2 bg-bg-2/40">
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
                      <p className="eyebrow">Salon</p>
                      <p className="mt-2 text-[15px] text-ink font-light">
                        {salonMeta?.name}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-muted mt-1">
                        {formatMeta?.label} · {date} {time && `· ${time}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/journal" className="btn-gold">
                      Livre d&apos;Or lesen
                    </Link>
                    <Link href="/kollektion" className="lv-btn">
                      Kollektion ansehen
                    </Link>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {step !== "confirmation" && (
            <aside className="md:sticky md:top-32 self-start border border-line-soft bg-bg-2/40 p-6 space-y-5">
              <p className="eyebrow-gold">Récapitulatif</p>
              <RecapRow label="Salon">
                {salonMeta ? salonMeta.name : "—"}
                {salonMeta && (
                  <span className="block text-[11px] text-muted uppercase tracking-[0.22em] mt-1">
                    {salonMeta.address}
                  </span>
                )}
              </RecapRow>
              <RecapRow label="Format">
                {formatMeta ? formatMeta.label : "—"}
                {formatMeta && (
                  <span className="block text-[11px] text-muted uppercase tracking-[0.22em] mt-1">
                    {formatMeta.hint}
                  </span>
                )}
              </RecapRow>
              <RecapRow label="Créneau">
                {date ? date : "—"}
                {time && <span className="text-muted"> · {time}</span>}
              </RecapRow>
              <RecapRow label="Fassungen">
                {selectedFrames.length === 0 &&
                cabinetPreselected.length === 0
                  ? "Wählen Sie im Schritt 04"
                  : [
                      ...selectedFrames,
                      ...cabinetPreselected.filter(
                        (s) => !selectedFrames.includes(s),
                      ),
                    ]
                      .map(
                        (slug) =>
                          products.find((p) => p.slug === slug)?.name ?? slug,
                      )
                      .join(" · ")}
              </RecapRow>

              <p className="text-[11px] uppercase tracking-[0.24em] text-muted pt-4 border-t border-line-soft">
                Réponse en 24 h · Vertraulich
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
  const labels = ["Salon", "Format", "Créneau", "Profil", "Confirmation"];
  return (
    <ol className="grid grid-cols-5 gap-2 md:gap-6 border-t border-b border-line-soft py-6">
      {labels.map((label, i) => {
        const done = i < stepIndex;
        const active = i === stepIndex;
        return (
          <li key={label} className="flex flex-col gap-2">
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
            <p
              className="text-[10.5px] uppercase tracking-[0.22em]"
              style={{
                color: active
                  ? "var(--or-2)"
                  : done
                    ? "var(--ink)"
                    : "var(--muted)",
              }}
            >
              {label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

function BigChoice({
  active,
  onClick,
  title,
  eyebrow,
  hint,
  meta,
  note,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  eyebrow: string;
  hint: string;
  meta: string;
  note: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="w-full text-left px-5 py-5 border grid gap-3 md:grid-cols-[1fr_auto] md:items-center"
      style={{
        borderColor: active ? "var(--or-2)" : "var(--line)",
        background: active ? "rgba(198,154,63,0.06)" : "transparent",
        transition:
          "border-color 220ms var(--ease-out), background 220ms var(--ease-out)",
      }}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <p className="text-[16px] text-ink font-light mt-1">{title}</p>
        <p className="text-[12px] text-muted mt-1">{hint}</p>
        <p className="text-[11.5px] text-muted italic mt-2">{note}</p>
      </div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted md:text-right">
        {meta}
      </p>
    </button>
  );
}

function SmallChoice({
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
      <p className="text-[15px] text-ink font-light">{title}</p>
      <p className="text-[11.5px] text-muted mt-1">{hint}</p>
    </button>
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
      />
    </label>
  );
}

function StepFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 flex flex-wrap items-center gap-3 justify-between">
      {children}
    </div>
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
    <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline pb-4 border-b border-line-soft last:border-b-0 last:pb-0">
      <p className="eyebrow">{label}</p>
      <p className="text-[13.5px] text-ink font-light">{children}</p>
    </div>
  );
}
