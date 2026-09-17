import MaskedImage from "../MaskedImage";

const PILLARS = [
  {
    numeral: "I",
    title: "Die Materie",
    lead: "Italienisches Acetat. Titankern. Goldfaden 18 Karat, wo das Stück es verlangt.",
    body:
      "Nie Kunststoff. Wir wählen die Platte wie einen Stoff — für ihre Dichte, für die Art, wie sie die Feile annimmt, für die Weise, in der die Farbe in der Tiefe steht.",
    tone: "ink" as const,
  },
  {
    numeral: "II",
    title: "Die Geste",
    lead: "Vierzehn Hände, ein einziger Blick.",
    body:
      "Jede Fassung wird bei uns montiert, angepasst, poliert und nummeriert. Handgriffe delegieren wir nicht. Eine Maschine kann schneller schleifen; sie kann nicht entscheiden, wann sie aufhört.",
    tone: "warm" as const,
  },
  {
    numeral: "III",
    title: "Die Zurückhaltung",
    lead: "Vier Stücke im ersten Jahr. Nicht mehr.",
    body:
      "Ein Haus definiert sich durch das, was es der Welt nicht hinzufügt. Der Luxus liegt hier nicht im Preis, sondern in der Materie, in der Geste, in der Zurückhaltung.",
    tone: "parchment" as const,
  },
];

export default function ThreePillars() {
  return (
    <section className="n-section-lg relative overflow-hidden">
      <div className="n-page">
        <span className="n-eyebrow block mb-24">Drei Prinzipien</span>

        <div className="flex flex-col gap-40 md:gap-56">
          {PILLARS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={p.title}
                className="grid grid-cols-12 gap-x-6 items-center"
              >
                <div
                  className={`col-span-12 md:col-span-6 ${flip ? "md:col-start-7 md:order-2" : "md:col-start-1"}`}
                >
                  <MaskedImage tone={p.tone} ratio="4 / 5" />
                </div>

                <div
                  className={`col-span-12 md:col-span-5 mt-14 md:mt-0 ${flip ? "md:col-start-1 md:order-1 md:pr-6" : "md:col-start-8 md:pl-6"}`}
                >
                  <div className="flex items-baseline gap-6 mb-10">
                    <span
                      className="n-display leading-none opacity-30"
                      style={{
                        fontSize: "clamp(80px, 8vw, 128px)",
                        fontWeight: 100,
                      }}
                    >
                      {p.numeral}
                    </span>
                    <span className="n-eyebrow">Prinzip {p.numeral}</span>
                  </div>
                  <h3
                    className="n-display leading-[0.94] mb-10"
                    style={{
                      fontSize: "clamp(48px, 7vw, 108px)",
                      fontWeight: 200,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="n-body mb-8 max-w-[38ch]"
                    style={{
                      fontSize: "clamp(20px, 2vw, 28px)",
                      lineHeight: 1.4,
                      color: "var(--n-ink)",
                      fontWeight: 300,
                    }}
                  >
                    {p.lead}
                  </p>
                  <p
                    className="n-body leading-[1.6] max-w-[42ch]"
                    style={{
                      fontSize: "clamp(15px, 1.1vw, 17px)",
                      color: "var(--n-muted)",
                    }}
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
