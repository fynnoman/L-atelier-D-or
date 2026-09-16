import Link from "next/link";
import LineReveal from "../LineReveal";
import MaskedImage from "../MaskedImage";
import Numeral from "../Numeral";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "112vh" }}>
      {/* Layer 1 — video de fond */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/video/hero.mp4"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(244,240,232,0.35) 0%, rgba(244,240,232,0.06) 30%, rgba(244,240,232,0.55) 78%, rgba(244,240,232,0.95) 100%)",
          }}
        />
      </div>

      {/* Layer 2 — grande diagonale typographique */}
      <div className="relative z-10 n-page pt-40 md:pt-52 pb-24 md:pb-40">
        <div className="flex items-center gap-4 mb-14">
          <span className="n-mono opacity-70">L&rsquo;Atelier d&rsquo;Or présente</span>
          <span className="n-hair opacity-40" aria-hidden />
          <span className="n-mono opacity-55">Édition brève · Numérotée à la main</span>
        </div>

        <LineReveal
          as="h1"
          className="n-display leading-[0.9] tracking-[-0.02em]"
          lines={[
            "Entrez dans une",
            "vision d’exception.",
          ]}
          delayStep={120}
          style={{ fontSize: "clamp(64px, 12vw, 210px)", color: "var(--n-ink)" }}
        />

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-10 md:gap-24">
          <div className="max-w-[46ch]">
            <p
              className="n-serif text-[22px] md:text-[26px] leading-[1.35]"
              style={{ color: "var(--n-ink)" }}
            >
              Une petite maison française de lunetterie.<br />
              Quatre pièces la première année. Fait main à Paris.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/collection" className="n-cta">Découvrir Roi</Link>
              <Link href="/concierge" className="n-link self-center">
                Rendez-vous privés
              </Link>
            </div>
          </div>

          {/* Layer 3 — carte flottante avec crop d'une pièce */}
          <div className="relative w-full md:w-[380px] shrink-0">
            <div
              className="absolute -top-6 -left-4 z-10 n-mono px-3 py-2"
              style={{
                background: "rgba(244,240,232,0.85)",
                border: "1px solid var(--n-line)",
                color: "var(--n-ink)",
              }}
            >
              I · Roi Rouge
            </div>
            <MaskedImage
              src="/models/malbec-02.png"
              alt="Roi Rouge — vue en biais"
              tone="rouge"
              ratio="4 / 3"
              className="shadow-[0_30px_90px_-40px_rgba(20,15,10,0.45)]"
            />
            <p
              className="n-serif-italic mt-4 text-[16px] leading-[1.4]"
              style={{ color: "var(--n-muted)" }}
            >
              « Le velours retient la lumière plus longtemps que la peau. »
            </p>
          </div>
        </div>

        {/* Numéro romain fantôme */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[3vw] top-[26vh] opacity-[0.08] select-none"
        >
          <span
            className="n-display leading-none"
            style={{ fontSize: "clamp(180px, 34vw, 520px)", color: "var(--n-ink)" }}
          >
            <Numeral n={1} />
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-20 n-page flex items-center justify-between">
        <span className="n-mono opacity-55">Voyez le monde à votre dimension</span>
        <div className="flex items-center gap-3 n-mono opacity-55">
          <span>Défiler</span>
          <span
            aria-hidden
            className="block w-6 h-px"
            style={{ background: "currentColor" }}
          />
        </div>
      </div>
    </section>
  );
}
