import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import ConciergeForm from "@/components/ConciergeForm";
import { SALONS } from "@/data/salons";

export const metadata = {
  title: "Concierge — Rendez-vous privés",
  description:
    "La collection n'est pas exposée en vitrine. Nous la présentons sur rendez-vous, entre quatre yeux, à Paris, Berlin et Londres.",
};

export default function ConciergePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24">
        <div className="n-page">
          <PageEyebrow numeral="Concierge" label="Rendez-vous privés · Sans vitrine" className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={["Entre quatre yeux,", "à l’heure qui vous", "convient."]}
                delayStep={130}
                style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Trois salons — Paris, Berlin, Londres. Un jour, une heure, quatre pièces à essayer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trois salons */}
      <section className="pb-24" style={{ background: "var(--n-bg-warm)" }}>
        <div className="n-page py-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {SALONS.map((s, i) => (
              <article
                key={s.city}
                className="col-span-12 md:col-span-4 border-t pt-8 n-rise"
                style={{ borderColor: "var(--n-line)" }}
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="n-mono opacity-60">0{i + 1}</span>
                  <span className="n-mono opacity-60">{s.gmt}</span>
                </div>
                <h2
                  className="n-display leading-[0.95] mb-8"
                  style={{ fontSize: "clamp(44px, 6vw, 84px)" }}
                >
                  {s.city}
                </h2>
                <div className="n-serif text-[19px] leading-[1.4] mb-2">{s.address}</div>
                <div className="n-serif text-[17px] leading-[1.4] mb-6" style={{ color: "var(--n-muted)" }}>
                  {s.district}
                </div>
                <div className="n-mono opacity-60 mb-2">{s.hosting}</div>
                <div className="n-mono opacity-60">{s.days}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-32">
        <div className="n-page grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <PageEyebrow numeral="§ Écrire" label="Un mot suffit" className="mb-8" />
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
            >
              Nous répondons <br />
              <span className="n-serif-italic opacity-80">à la main.</span>
            </h2>
            <p
              className="n-serif text-[17px] leading-[1.55] mt-8 max-w-[38ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Un courriel court, une date approximative, la ville — c&rsquo;est déjà assez.
              Le reste se règle en quelques échanges.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a href="mailto:concierge@latelier-dor.com" className="n-link self-start">
                concierge@latelier-dor.com
              </a>
              <span className="n-mono opacity-60">Réponse sous 24 h ouvrées</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-14 md:mt-0">
            <ConciergeForm />
          </div>
        </div>
      </section>

      {/* Rappel discrétion */}
      <section className="py-24" style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}>
        <div className="n-page grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-9">
            <p
              className="n-serif-italic leading-[1.2]"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              « Vos coordonnées ne sortent jamais de la maison. »
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-8 md:mt-0">
            <p className="n-mono opacity-70">
              Aucune revente, aucun outil de suivi publicitaire.<br />
              Cookies strictement nécessaires uniquement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
