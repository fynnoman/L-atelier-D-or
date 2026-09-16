import LineReveal from "../LineReveal";
import PageEyebrow from "../PageEyebrow";

export default function ManifestQuote() {
  return (
    <section className="n-section relative">
      <div className="n-page">
        <PageEyebrow numeral="§ 01" label="Manifeste" className="mb-16" />

        <div className="grid grid-cols-12 gap-x-6">
          {/* Grande citation, chevauche la colonne de droite */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 relative">
            <LineReveal
              as="blockquote"
              className="n-display leading-[0.98] tracking-[-0.02em]"
              lines={[
                "Le prix juste.",
                "Le geste juste.",
                "Rien de trop,",
                "rien de moins.",
              ]}
              delayStep={110}
              style={{ fontSize: "clamp(48px, 8.5vw, 148px)", color: "var(--n-ink)" }}
            />

            {/* Micro texte flottant */}
            <div
              className="absolute right-0 top-6 md:top-2 max-w-[24ch] text-right hidden md:block"
              style={{ color: "var(--n-muted)" }}
            >
              <span className="n-mono block opacity-70 mb-2">— La Maison</span>
              <p className="n-serif-italic text-[15px] leading-[1.5]">
                Une maison se construit par ce qu&rsquo;elle refuse d&rsquo;ajouter au monde.
              </p>
            </div>
          </div>
        </div>

        {/* Trio de valeurs */}
        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-x-6 gap-y-14">
          {[
            {
              tag: "Séries brèves",
              body: "Quatre pièces, un an. Chaque exemplaire est numéroté à la main.",
            },
            {
              tag: "Prix juste",
              body: "Quatre-vingts euros la pièce. Nous vendons en direct.",
            },
            {
              tag: "Retenue",
              body: "Ce que la maison n’ajoute pas au monde est aussi ce qui la définit.",
            },
          ].map((v, i) => (
            <div key={v.tag} className="col-span-12 md:col-span-4 n-rise">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="n-mono opacity-55">0{i + 1}</span>
                <span className="n-hair opacity-30" aria-hidden />
              </div>
              <div className="n-serif text-[28px] leading-[1.1] mb-4">{v.tag}</div>
              <p
                className="n-serif text-[17px] leading-[1.55] max-w-[36ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
