import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Concierge — rendez-vous privés",
  description:
    "Rendez-vous privés à Paris, Berlin et Londres. Essayage des quatre pièces, ajustage, verres correcteurs si vous le souhaitez.",
};

const cities = [
  {
    city: "Paris",
    address: "14, rue de l’Éclipse, VIIIᵉ",
    hours: "Sur rendez-vous — mardi au samedi",
    line: "Réception dans le salon privé de l’atelier.",
  },
  {
    city: "Berlin",
    address: "Kurfürstendamm 218, Charlottenburg",
    hours: "Sur rendez-vous — mercredi et vendredi",
    line: "En hôte, chez notre partenaire opticien.",
  },
  {
    city: "Londres",
    address: "Mount Street, Mayfair, W1K",
    hours: "Sur rendez-vous — jeudi et samedi",
    line: "En hôte, dans un salon privé de Mayfair.",
  },
];

export default function ConciergePage() {
  return (
    <>
      <PageHead
        chapter="Concierge — Rendez-vous privés"
        eyebrow="Concierge"
        title="Un instant"
        italic="pour vous seul."
        intro="La collection n’est pas exposée en vitrine. Nous la présentons sur rendez-vous, entre quatre yeux, à Paris, Berlin ou Londres."
      />

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(80px, 12vh, 140px)",
          background: "var(--bg)",
        }}
      >
        <div className="mx-auto max-w-[1200px] grid gap-6 md:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c.city} delay={i * 80}>
              <div
                style={{
                  border: "1px solid var(--line-soft)",
                  padding: 28,
                  background: "var(--cream)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--or-2)",
                    marginBottom: 12,
                  }}
                >
                  Salon
                </div>
                <h2
                  className="display"
                  style={{ fontSize: "clamp(28px, 3.4vw, 40px)", color: "var(--ink)", lineHeight: 1 }}
                >
                  {c.city}
                </h2>
                <p className="serif mt-4" style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55 }}>
                  {c.address}
                </p>
                <p className="serif mt-2" style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
                  {c.hours}
                </p>
                <p
                  className="serif mt-6"
                  style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, fontStyle: "italic" }}
                >
                  {c.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(80px, 12vh, 140px)",
          background: "var(--noir)",
          color: "var(--parchment)",
        }}
      >
        <div className="mx-auto max-w-[880px]">
          <Reveal>
            <div className="eyebrow-or">Formulaire</div>
            <h2
              className="display mt-4"
              style={{
                fontSize: "clamp(32px, 4.6vw, 60px)",
                lineHeight: 1,
                color: "var(--parchment)",
              }}
            >
              Demander un rendez-vous.
            </h2>
          </Reveal>

          <form
            action="mailto:concierge@latelier-dor.com"
            method="post"
            encType="text/plain"
            className="mt-12 grid gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Prénom, nom" name="nom" />
              <Field label="Adresse courriel" name="email" type="email" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Select label="Salon souhaité" name="ville" options={["Paris", "Berlin", "Londres", "Sans préférence"]} />
              <Field label="Téléphone (facultatif)" name="tel" />
            </div>
            <TextArea label="Un mot, s’il vous plaît" name="message" />
            <div className="pt-2">
              <button type="submit" className="btn-or">
                Envoyer la demande
              </button>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  color: "color-mix(in oklab, var(--parchment) 68%, transparent)",
                  marginTop: 16,
                }}
              >
                Réponse sous 24 heures ouvrées. Vos coordonnées ne sortent jamais de la maison.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function fieldStyle(): React.CSSProperties {
  return {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(215,170,90,0.35)",
    color: "var(--parchment)",
    padding: "14px 2px",
    fontSize: 16,
    outline: "none",
    fontFamily: "var(--font-inter)",
  };
}

function labelStyle(): React.CSSProperties {
  return {
    fontSize: 10,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    color: "var(--or-glow)",
    marginBottom: 4,
    display: "block",
  };
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span style={labelStyle()}>{label}</span>
      <input name={name} type={type} className="w-full" style={fieldStyle()} required={type === "email"} />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span style={labelStyle()}>{label}</span>
      <select name={name} className="w-full" style={{ ...fieldStyle(), appearance: "none" }}>
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "var(--noir)" }}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span style={labelStyle()}>{label}</span>
      <textarea name={name} rows={4} className="w-full" style={{ ...fieldStyle(), resize: "vertical" }} />
    </label>
  );
}
