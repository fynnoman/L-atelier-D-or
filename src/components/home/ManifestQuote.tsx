import LineReveal from "../LineReveal";

export default function ManifestQuote() {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-11">
            <span className="n-eyebrow block mb-16">Manifeste</span>
            <LineReveal
              as="blockquote"
              className="n-display leading-[0.98]"
              lines={[
                "Quatre pièces par an.",
                "Faites main à Paris.",
                "Numérotées à la main.",
              ]}
              delayStep={130}
              style={{
                fontSize: "clamp(56px, 10vw, 176px)",
                color: "var(--n-ink)",
                fontWeight: 300,
              }}
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-x-6 items-baseline">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="n-body leading-[1.5]"
              style={{
                fontSize: "clamp(18px, 1.6vw, 24px)",
                color: "var(--n-muted)",
              }}
            >
              Acétate d&rsquo;Italie, âme titane, or 18 carats
              là où la pièce l&rsquo;exige. Vente directe depuis
              l&rsquo;atelier. 78,90 € l&rsquo;exemplaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
