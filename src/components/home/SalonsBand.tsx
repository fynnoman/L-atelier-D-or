import Link from "next/link";
import { SALONS } from "@/data/salons";

const CITY_DE: Record<string, string> = {
  Paris: "Paris",
  Berlin: "Berlin",
  Londres: "London",
};

const DAYS_DE: Record<string, string> = {
  "Mardi — Samedi": "Dienstag bis Samstag",
  "Mercredi & Vendredi": "Mittwoch & Freitag",
  "Jeudi & Samedi": "Donnerstag & Samstag",
};

const HOSTING_DE: Record<string, string> = {
  "Salon privé des Ateliers": "Privatsalon des Ateliers",
  "Invité d'un opticien partenaire": "Zu Gast bei einem Partneroptiker",
  "Invité d'un salon privé de Mayfair": "Zu Gast in einem Privatsalon in Mayfair",
};

export default function SalonsBand() {
  return (
    <section
      className="n-section-lg relative overflow-hidden"
      style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}
    >
      <div className="n-page">
        <span className="n-eyebrow block mb-24" style={{ color: "rgba(255,255,255,0.7)" }}>
          Nur nach Termin
        </span>

        <div className="grid grid-cols-12 gap-x-6 mb-32">
          <div className="col-span-12">
            <h2
              className="n-display leading-[0.9]"
              style={{
                fontSize: "clamp(72px, 13vw, 260px)",
                fontWeight: 200,
              }}
            >
              Nie im <br />
              <span className="opacity-80">Schaufenster.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 mb-32">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="n-body leading-[1.5] opacity-80"
              style={{ fontSize: "clamp(18px, 1.6vw, 24px)" }}
            >
              Die Kollektion wird nicht im Schaufenster gezeigt. Wir zeigen sie
              nach Termin, unter vier Augen — in Paris, in Berlin, in London.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-24">
          {SALONS.map((s, i) => (
            <article
              key={s.city}
              className="col-span-12 md:col-span-4 pt-10 border-t n-rise"
              style={{ borderColor: "rgba(255,255,255,0.22)" }}
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="n-meta opacity-60">0{i + 1}</span>
                <span className="n-meta opacity-60">{s.gmt}</span>
              </div>
              <h3
                className="n-display leading-[0.94] mb-12"
                style={{ fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 200 }}
              >
                {CITY_DE[s.city] ?? s.city}
              </h3>
              <div className="n-body text-[19px] leading-[1.5] mb-2">
                {s.address}
              </div>
              <div
                className="n-body text-[16px] leading-[1.5] mb-10 opacity-70"
              >
                {s.district}
              </div>
              <div className="n-meta opacity-70 mb-3">
                {HOSTING_DE[s.hosting] ?? s.hosting}
              </div>
              <div className="n-meta opacity-70">
                {DAYS_DE[s.days] ?? s.days}
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-32 pt-12 border-t flex items-baseline justify-between flex-wrap gap-6"
          style={{ borderColor: "rgba(255,255,255,0.22)" }}
        >
          <p
            className="n-serif-italic text-[20px] opacity-85 max-w-[46ch]"
            style={{ fontStyle: "italic" }}
          >
            « Vos coordonnées ne sortent jamais de la maison. »
          </p>
          <Link
            href="/concierge"
            className="n-cta n-cta-ghost"
            style={{ color: "var(--n-bg)" }}
          >
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
