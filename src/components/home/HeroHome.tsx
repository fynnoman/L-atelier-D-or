import Link from "next/link";
import LineReveal from "../LineReveal";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "118vh" }}>
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
              "linear-gradient(180deg, rgba(244,240,232,0.28) 0%, rgba(244,240,232,0.02) 22%, rgba(244,240,232,0.55) 78%, rgba(244,240,232,0.98) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 n-page pt-48 md:pt-72 pb-40 md:pb-56">
        <div className="flex items-center gap-4 mb-24 md:mb-32">
          <span className="n-mono opacity-70">L&rsquo;Atelier d&rsquo;Or présente</span>
          <span className="n-hair opacity-40" aria-hidden />
          <span className="n-mono opacity-55">Édition brève</span>
        </div>

        <LineReveal
          as="h1"
          className="n-display leading-[0.86] tracking-[-0.025em]"
          lines={["Une vision", "d’exception."]}
          delayStep={140}
          style={{ fontSize: "clamp(96px, 19vw, 340px)", color: "var(--n-ink)" }}
        />

        <div className="mt-28 md:mt-40 max-w-[54ch]">
          <p
            className="n-serif-italic text-[26px] md:text-[38px] leading-[1.2]"
            style={{ color: "var(--n-ink)" }}
          >
            Une petite maison française de lunetterie.
          </p>
          <p
            className="n-serif text-[19px] md:text-[22px] leading-[1.55] mt-8 max-w-[44ch]"
            style={{ color: "var(--n-muted)" }}
          >
            Quatre pièces la première année. Édition brève.
          </p>

          <div className="mt-16 flex items-center gap-8 flex-wrap">
            <Link href="/collection" className="n-cta">Découvrir Roi</Link>
            <Link href="/atelier" className="n-link self-center">L&rsquo;atelier</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-0 right-0 z-20 n-page flex items-baseline justify-between">
        <span
          className="n-serif-italic text-[19px] md:text-[22px] opacity-75"
          style={{ color: "var(--n-ink)" }}
        >
          Voyez le monde à votre dimension.
        </span>
        <div className="flex items-center gap-3 n-mono opacity-55">
          <span>Défiler</span>
          <span aria-hidden className="block w-10 h-px" style={{ background: "currentColor" }} />
        </div>
      </div>
    </section>
  );
}
