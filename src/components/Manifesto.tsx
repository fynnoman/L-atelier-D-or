import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(120px, 22vh, 220px)",
        background:
          "linear-gradient(180deg, var(--parchment) 0%, var(--parchment-2) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex items-center gap-4 mb-10">
          <span className="hair" style={{ background: "var(--or)" }} />
          <span className="eyebrow-or">Manifeste</span>
        </div>

        <Reveal>
          <p
            className="serif"
            style={{
              fontSize: "clamp(32px, 5.4vw, 84px)",
              lineHeight: 1.05,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
              maxWidth: 1080,
              fontWeight: 300,
            }}
          >
            « Le prix juste. Le geste juste.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--or-2)" }}>
              Rien de trop, rien de moins.
            </span>{" "}
            »
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "La matière",
              b: "Acétate d’Italie, âme titane, filet or 18 carats sur les pièces qui le demandent. Rien de plastique, jamais.",
            },
            {
              t: "Le geste",
              b: "Chaque paire est montée, ajustée, polie et numérotée à la main dans notre atelier. Les gestes ne se délèguent pas.",
            },
            {
              t: "La retenue",
              b: "Quatre pièces la première année. Pas plus. Une maison se construit par ce qu’elle refuse d’ajouter au monde.",
            },
          ].map((c) => (
            <div key={c.t}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--or-2)",
                  marginBottom: 12,
                }}
              >
                {c.t}
              </div>
              <p className="serif" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}>
                {c.b}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
