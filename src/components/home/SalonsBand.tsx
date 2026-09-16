import Link from "next/link";
import PageEyebrow from "../PageEyebrow";
import { SALONS } from "@/data/salons";

export default function SalonsBand() {
  return (
    <section
      className="n-section relative overflow-hidden"
      style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow numeral="§ 04" label="Concierge" className="mb-8" />
            <h2
              className="n-display leading-[0.94]"
              style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
            >
              La collection n&rsquo;est pas <br />
              <span className="n-serif-italic opacity-80">exposée en vitrine.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p className="n-serif text-[18px] leading-[1.55] opacity-80 max-w-[36ch]">
              Nous la présentons sur rendez-vous, entre quatre yeux — à Paris, à Berlin, à Londres.
            </p>
          </div>
        </div>

        {/* Trois villes */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {SALONS.map((s, i) => (
            <article
              key={s.city}
              className="col-span-12 md:col-span-4 border-t pt-8 n-rise"
              style={{ borderColor: "rgba(244,240,232,0.22)" }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="n-mono opacity-60">0{i + 1}</span>
                <span className="n-mono opacity-60">{s.gmt}</span>
              </div>
              <h3
                className="n-display leading-[0.95] mb-8"
                style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
              >
                {s.city}
              </h3>
              <div className="n-serif text-[19px] leading-[1.4] mb-2">{s.address}</div>
              <div className="n-serif text-[17px] opacity-70 mb-6">{s.district}</div>
              <div className="n-mono opacity-70 mb-3">{s.hosting}</div>
              <div className="n-mono opacity-70">{s.days}</div>
            </article>
          ))}
        </div>

        {/* Bas de section — 3 étapes */}
        <div className="mt-32 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-3">
            <span className="n-eyebrow" style={{ color: "var(--n-gold-soft)" }}>
              Un rendez-vous, trois temps
            </span>
          </div>
          {[
            { n: "I", title: "Essai", body: "Les quatre pièces, à la lumière du jour ou du soir." },
            { n: "II", title: "Ajustement", body: "Plaquettes, longueur des branches — au millimètre." },
            { n: "III", title: "Verres", body: "Correction ou solaires, par notre maître opticien." },
          ].map((step) => (
            <div key={step.n} className="col-span-12 md:col-span-3 border-t pt-6" style={{ borderColor: "rgba(244,240,232,0.22)" }}>
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="n-serif text-[36px] leading-none opacity-50"
                  style={{ color: "var(--n-bg)" }}
                >
                  {step.n}
                </span>
                <span className="n-eyebrow opacity-70">Étape</span>
              </div>
              <div className="n-serif text-[22px] leading-[1.2] mb-3">{step.title}</div>
              <p className="n-serif text-[15px] leading-[1.5] opacity-75">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex items-baseline justify-between flex-wrap gap-6">
          <p className="n-serif-italic text-[19px] opacity-75">
            « Vos coordonnées ne sortent jamais de la maison. »
          </p>
          <Link href="/concierge" className="n-cta">
            Écrire au concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
