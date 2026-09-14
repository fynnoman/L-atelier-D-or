import type { Piece } from "@/data/collection";
import Reveal from "./Reveal";

export default function ProductSpecs({ piece }: { piece: Piece }) {
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(100px, 16vh, 180px)",
        background: "var(--mood-bg-2)",
        color: "var(--mood-ink)",
      }}
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.24 }} />

      <div className="relative mx-auto max-w-[1200px] grid gap-16 md:grid-cols-[1.1fr_1fr] items-start">
        <Reveal>
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--mood-glow)",
                marginBottom: 20,
              }}
            >
              La pièce · Détails
            </div>
            <h3
              className="display"
              style={{ fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: 1, color: "var(--mood-ink)" }}
            >
              Rien qui ne serve
              <br />
              <span style={{ fontStyle: "italic", color: "var(--mood-glow)" }}>l’élégance du regard.</span>
            </h3>
            <p
              className="serif mt-6"
              style={{ fontSize: 17, lineHeight: 1.6, color: "var(--mood-muted)", maxWidth: 520 }}
            >
              {piece.scene.detail}
            </p>

            {/* Teintes */}
            <div className="mt-10">
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--mood-glow)",
                  opacity: 0.85,
                  marginBottom: 14,
                }}
              >
                Teintes disponibles
              </div>
              <ul className="flex flex-col gap-4">
                {piece.teinte.map((t) => (
                  <li key={t.label} className="flex items-center gap-4">
                    <span
                      aria-hidden
                      style={{
                        display: "inline-block",
                        width: 34,
                        height: 34,
                        borderRadius: 999,
                        background: t.hex,
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 6px 18px rgba(0,0,0,0.25)",
                      }}
                    />
                    <div>
                      <div
                        className="serif"
                        style={{ fontSize: 17, color: "var(--mood-ink)" }}
                      >
                        {t.label}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: "var(--mood-muted)",
                        }}
                      >
                        {t.hex}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <dl
            className="grid grid-cols-2 gap-x-8 gap-y-6"
            style={{ borderTop: "1px solid var(--mood-line)", paddingTop: 32 }}
          >
            {[
              ["Matière", piece.matiere.join(" · ")],
              ["Silhouette", piece.silhouette],
              ["Lieu", piece.place],
              ["Heure", piece.hour],
              ["Édition", "Série brève, numérotée"],
              ["Provenance", "Atelier, France"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="col-span-2 md:col-span-1"
                style={{ borderBottom: "1px solid var(--mood-line)", paddingBottom: 20 }}
              >
                <dt
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--mood-glow)",
                    opacity: 0.85,
                    marginBottom: 6,
                  }}
                >
                  {k}
                </dt>
                <dd className="serif" style={{ fontSize: 16, color: "var(--mood-ink)", lineHeight: 1.4 }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
