import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";

export const metadata = {
  title: "L’Atelier — 14, rue de l’Éclipse, VIIIᵉ",
  description:
    "Deux étages dans un immeuble du VIIIᵉ. Acétate d'Italie, âme titane, quatorze mains, un seul regard. La maison présentée sur rendez-vous.",
};

const GESTES = [
  { n: "I", label: "Tracé" },
  { n: "II", label: "Découpe" },
  { n: "III", label: "Pose de l’âme titane" },
  { n: "IV", label: "Limage" },
  { n: "V", label: "Polissage chamois" },
  { n: "VI", label: "Vérification lumière rasante" },
  { n: "VII", label: "Finissage — le président" },
];

export default function AtelierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow numeral="La Maison" label="L’Atelier · Paris VIIIᵉ" className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={["Quatorze mains,", "un seul regard."]}
                delayStep={130}
                style={{ fontSize: "clamp(64px, 12vw, 210px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Deux étages. Fenêtres hautes, lumière du nord, planchers de bois. Rien qu&rsquo;on ait rénové sans nécessité.
              </p>
            </div>
          </div>
        </div>

        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 gap-y-10 items-start">
          <div className="col-span-12 md:col-span-8 relative">
            <MaskedImage tone="warm" ratio="16 / 10" />
            <div
              className="hidden md:block absolute -right-6 -bottom-10 w-[260px] h-[170px] z-10 border"
              style={{ borderColor: "var(--n-line)" }}
            >
              <MaskedImage tone="parchment" ratio="260 / 170" />
            </div>
          </div>
          <aside className="col-span-12 md:col-span-4 flex flex-col gap-8 md:pt-6">
            <div>
              <div className="n-eyebrow mb-3">L’adresse</div>
              <p className="n-serif text-[19px] leading-[1.35]">
                14, rue de l’Éclipse<br />
                75008 Paris — France
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">La matière</div>
              <p className="n-serif text-[19px] leading-[1.35]">
                Acétate d’Italie — Mazzucchelli, Castiglione Olona. Titane. Or 18 carats sur les pièces qui l’exigent.
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">La règle</div>
              <p className="n-serif-italic text-[19px] leading-[1.4]" style={{ color: "var(--n-muted)" }}>
                « Rien de plastique, jamais. »
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Le geste */}
      <section
        className="relative py-36"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow numeral="§ 01" label="Le geste" className="mb-8" />
            <h2 className="n-display leading-[0.94]" style={{ fontSize: "clamp(48px, 8vw, 132px)" }}>
              Les gestes ne se <br />
              <span className="n-serif-italic opacity-80">délèguent pas.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Chaque paire passe entre quatorze gestes. Quatre personnes. Une machine peut poncer plus vite ; elle ne peut pas décider quand s&rsquo;arrêter.
            </p>
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-4">
          {GESTES.map((g, i) => (
            <article
              key={g.n}
              className="col-span-12 md:col-span-6 flex items-baseline gap-6 py-6 border-t"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <span
                className="n-serif leading-none opacity-40"
                style={{ fontSize: "clamp(40px, 4vw, 64px)" }}
              >
                {g.n}
              </span>
              <div>
                <div className="n-eyebrow opacity-70 mb-1">Geste 0{i + 1}</div>
                <div className="n-serif text-[22px] leading-[1.15]">{g.label}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-6 relative">
            <MaskedImage tone="ink" ratio="4 / 5" />
            <div
              className="hidden md:block absolute -right-8 top-10 w-[180px] h-[240px] border"
              style={{ borderColor: "var(--n-line)" }}
            >
              <MaskedImage tone="warm" ratio="180 / 240" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-0">
            <span className="n-serif opacity-15 leading-none block mb-4" style={{ fontSize: "clamp(120px, 14vw, 220px)" }}>
              <Numeral n={4} />
            </span>
            <p
              className="n-serif text-[22px] leading-[1.5] max-w-[42ch] mb-8"
              style={{ color: "var(--n-ink)" }}
            >
              Le finissage, c&rsquo;est moi. Une paire ne quitte l&rsquo;atelier tant qu&rsquo;elle
              accroche encore la lumière comme un métal. On veut qu&rsquo;elle la retienne comme une peau.
            </p>
            <p
              className="n-serif-italic text-[16px] leading-[1.55]"
              style={{ color: "var(--n-muted)" }}
            >
              — Le président en exercice
            </p>
          </div>
        </div>
      </section>

      {/* La retenue */}
      <section className="n-section relative">
        <div className="n-page grid grid-cols-12 gap-x-6 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow numeral="§ 02" label="La retenue" className="mb-8" />
            <h2 className="n-display leading-[0.94]" style={{ fontSize: "clamp(48px, 8vw, 132px)" }}>
              Ce que nous ajoutons <br />
              <span className="n-serif-italic opacity-80">volontairement peu.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Quatre pièces la première année. Pas plus. Une maison se construit par ce qu&rsquo;elle refuse d&rsquo;ajouter au monde.
            </p>
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-10">
          {[
            { t: "Pas d’intermédiaire", b: "Nous vendons en direct. La marge sert la matière, pas la vitrine." },
            { t: "Pas de vitrine publique", b: "La collection n’est pas exposée. Nous la présentons sur rendez-vous." },
            { t: "Pas de supplément inutile", b: "Un écrin, une paire, un numéro. Rien d’autre à emporter chez soi." },
          ].map((v, i) => (
            <article key={v.t} className="col-span-12 md:col-span-4 border-t pt-8" style={{ borderColor: "var(--n-line)" }}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="n-serif text-[40px] leading-none opacity-40">0{i + 1}</span>
                <span className="n-eyebrow">Principe</span>
              </div>
              <div className="n-serif text-[24px] leading-[1.15] mb-4">{v.t}</div>
              <p className="n-serif text-[16px] leading-[1.55]" style={{ color: "var(--n-muted)" }}>{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32" style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}>
        <div className="n-page grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(48px, 8vw, 132px)" }}
            >
              On entre comme on entre <br />
              <span className="n-serif-italic opacity-80">chez soi.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p className="n-serif text-[18px] leading-[1.55] opacity-80 max-w-[36ch] mb-8">
              L&rsquo;Atelier se visite sur rendez-vous, entre quatre yeux. Il est chez vous davantage qu&rsquo;en boutique.
            </p>
            <Link href="/concierge" className="n-cta">Prendre rendez-vous</Link>
          </div>
        </div>
      </section>
    </>
  );
}
