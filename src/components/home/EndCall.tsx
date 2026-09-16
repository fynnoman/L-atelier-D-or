import Link from "next/link";
import LineReveal from "../LineReveal";

export default function EndCall() {
  return (
    <section
      className="n-section relative overflow-hidden"
      style={{ background: "var(--n-bg-warm)" }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2 text-center">
            <span className="n-eyebrow" style={{ color: "var(--n-gold-deep)" }}>
              Édition brève — Première année
            </span>

            <LineReveal
              as="p"
              className="n-display leading-[0.96] mt-10"
              lines={[
                "Voyez le monde",
                "à votre dimension.",
              ]}
              delayStep={110}
              style={{ fontSize: "clamp(48px, 8vw, 140px)", color: "var(--n-ink)" }}
            />

            <p
              className="n-serif-italic mt-10 text-[19px] leading-[1.5] mx-auto max-w-[46ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Une paire quitte l&rsquo;atelier lorsqu&rsquo;elle a cessé d&rsquo;accrocher la lumière
              comme un métal, et qu&rsquo;elle la retient comme une peau.
            </p>

            <div className="mt-14 flex items-center justify-center gap-6 flex-wrap">
              <Link href="/concierge" className="n-cta">
                Prendre rendez-vous
              </Link>
              <Link href="/atelier" className="n-link">
                Visiter l’Atelier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
