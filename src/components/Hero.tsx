import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingInline: "var(--page-x)",
        paddingTop: "clamp(140px, 18vh, 220px)",
        paddingBottom: "clamp(60px, 10vh, 120px)",
        background:
          "radial-gradient(1200px 700px at 22% 18%, rgba(215,170,90,0.24), transparent 62%), radial-gradient(1000px 700px at 82% 88%, rgba(160,120,60,0.16), transparent 62%), linear-gradient(180deg, var(--parchment) 0%, var(--parchment-2) 60%, var(--parchment-3) 100%)",
      }}
    >
      {/* Vignette + grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(24,16,10,0.12), transparent 55%)",
        }}
      />

      {/* Rails */}
      <div
        aria-hidden
        className="hidden md:flex absolute left-6 top-0 h-full flex-col items-center justify-between py-24 z-10"
        style={{ color: "var(--muted)" }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          Chapitre 0 · Vernissage
        </span>
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          Paris — Berlin — Londres
        </span>
      </div>

      <div
        aria-hidden
        className="hidden md:flex absolute right-6 top-0 h-full flex-col items-center justify-between py-24 z-10"
        style={{ color: "var(--muted)" }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          Première collection
        </span>
        <span
          style={{
            writingMode: "vertical-rl",
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          Édition brève
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
        <div className="veil">
          <span className="eyebrow-or">L’Atelier d’Or présente</span>
        </div>

        <h1
          className="display veil mt-8"
          style={{
            fontSize: "clamp(56px, 11vw, 176px)",
            lineHeight: 0.9,
            color: "var(--ink)",
          }}
        >
          Une vision
          <br />
          <span style={{ fontStyle: "italic", color: "var(--or-2)" }}>d’exception.</span>
        </h1>

        <div
          className="rise mt-10 flex items-center gap-4"
          style={{ color: "var(--muted)" }}
        >
          <span className="hair" style={{ background: "var(--or)" }} />
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--ink-2)",
            }}
          >
            La Première Collection · Roi
          </span>
          <span className="hair" style={{ background: "var(--or)" }} />
        </div>

        <p
          className="serif rise mt-12"
          style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            lineHeight: 1.35,
            maxWidth: 720,
            color: "var(--ink-2)",
          }}
        >
          Entrez dans une vision d’exception. Voyez le monde
          <br className="hidden md:block" /> à votre dimension.
          <span
            aria-hidden
            style={{
              display: "block",
              marginTop: 14,
              fontSize: 12,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
            }}
          >
            L’Atelier d’Or
          </span>
        </p>

        <div className="rise mt-14 flex flex-col sm:flex-row items-center gap-4">
          <Link href="/collection" className="btn-or">
            Découvrir la collection
            <span aria-hidden style={{ marginLeft: 4 }}>—→</span>
          </Link>
          <Link
            href="/atelier"
            className="btn-ghost"
            style={{ color: "var(--ink-2)", borderColor: "var(--line)" }}
          >
            Entrer dans l’atelier
          </Link>
        </div>

        <div
          className="rise mt-24 flex items-center gap-12 opacity-80"
          style={{ color: "var(--muted-2)" }}
        >
          {[
            ["Fait main", "en France"],
            ["Séries brèves", "numérotées"],
            ["Quatre pièces", "un seul geste"],
          ].map(([a, b], i) => (
            <div key={i} className="text-left">
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--or-2)",
                  marginBottom: 4,
                }}
              >
                {a}
              </div>
              <div
                className="serif"
                style={{ fontSize: 14, letterSpacing: "0.02em", color: "var(--ink-2)" }}
              >
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
