import MaskedImage from "../MaskedImage";
import PageEyebrow from "../PageEyebrow";

const PILLARS = [
  {
    numeral: "I",
    title: "La matière",
    lead: "Acétate d'Italie. Âme titane. Filet or 18 carats sur les pièces qui l'exigent.",
    body:
      "Rien de plastique, jamais. Nous choisissons la plaque comme on choisit un tissu — pour la densité, pour la façon dont elle prend la lime, pour la manière dont la couleur se tient dans l'épaisseur.",
    tone: "ink" as const,
    image: "/models/malbec-02.png",
  },
  {
    numeral: "II",
    title: "Le geste",
    lead: "Quatorze mains, un seul regard.",
    body:
      "Chaque paire est montée, ajustée, polie et numérotée dans notre atelier. Quatorze gestes par pièce. Quatre personnes. Les gestes ne se délèguent pas — une machine peut poncer plus vite, elle ne peut pas décider quand s'arrêter.",
    tone: "warm" as const,
    image: "/models/orphee-03.png",
  },
  {
    numeral: "III",
    title: "La retenue",
    lead: "Quatre pièces la première année. Pas plus.",
    body:
      "Une maison se construit par ce qu'elle refuse d'ajouter au monde. Nous refusons trois choses : le plastique, l'intermédiaire, le supplément inutile. Le luxe, ici, n'est pas dans le prix — il est dans la matière, dans le geste, et dans la retenue.",
    tone: "parchment" as const,
    image: "/models/solene-01.png",
  },
];

export default function ThreePillars() {
  return (
    <section className="n-section relative overflow-hidden">
      <div className="n-page">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-24">
          <div>
            <PageEyebrow numeral="§ 03" label="Trois principes" className="mb-8" />
            <h2
              className="n-display leading-[0.94]"
              style={{ fontSize: "clamp(48px, 8vw, 132px)" }}
            >
              La matière. Le geste. <br />
              <span className="n-serif-italic opacity-80">La retenue.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-56">
          {PILLARS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.title} className="grid grid-cols-12 gap-x-6 relative items-center">
                {/* Image */}
                <div
                  className={`col-span-12 md:col-span-6 ${flip ? "md:col-start-7" : "md:col-start-1"} relative`}
                >
                  <MaskedImage
                    src={p.image}
                    tone={p.tone}
                    ratio="4 / 5"
                    className={flip ? "md:-translate-x-6" : "md:translate-x-6"}
                  />

                  {/* Crop détail flottant */}
                  <div
                    className={`hidden md:block absolute w-[200px] h-[130px] ${flip ? "-right-6 -bottom-10" : "-left-6 -bottom-10"} z-10 border`}
                    style={{ borderColor: "var(--n-line)" }}
                  >
                    <MaskedImage
                      src={p.image}
                      tone={p.tone}
                      ratio="200 / 130"
                      objectPosition="30% 40%"
                      className=""
                    />
                  </div>
                </div>

                {/* Texte */}
                <div
                  className={`col-span-12 md:col-span-5 ${flip ? "md:col-start-1 md:pr-6" : "md:col-start-8 md:pl-6"} mt-10 md:mt-0 relative`}
                >
                  <div className="flex items-baseline gap-4 mb-8">
                    <span
                      className="n-serif text-[80px] leading-none opacity-30"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {p.numeral}
                    </span>
                    <span className="n-eyebrow">{`Principe ${p.numeral}`}</span>
                  </div>
                  <h3
                    className="n-display leading-[0.95] mb-8"
                    style={{ fontSize: "clamp(44px, 6vw, 96px)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="n-serif text-[22px] md:text-[26px] leading-[1.4] mb-6 max-w-[38ch]"
                    style={{ color: "var(--n-ink)" }}
                  >
                    {p.lead}
                  </p>
                  <p
                    className="n-serif text-[17px] leading-[1.6] max-w-[46ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
