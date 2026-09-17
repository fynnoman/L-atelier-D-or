import LineReveal from "../LineReveal";

export default function ManifestQuote() {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-11">
            <span className="n-eyebrow block mb-16">Manifest</span>
            <LineReveal
              as="blockquote"
              className="n-display leading-[0.94]"
              lines={[
                "Der richtige Preis.",
                "Die richtige Geste.",
                "Nichts zu viel,",
                "nichts zu wenig.",
              ]}
              delayStep={130}
              style={{
                fontSize: "clamp(56px, 11vw, 200px)",
                color: "var(--n-ink)",
                fontWeight: 200,
              }}
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="n-body leading-[1.5]"
              style={{
                fontSize: "clamp(18px, 1.6vw, 24px)",
                color: "var(--n-muted)",
              }}
            >
              Ein Haus definiert sich durch das, was es der Welt nicht hinzufügt.
              Wir verzichten auf drei Dinge: auf Kunststoff, auf Zwischenhändler,
              auf jede überflüssige Zugabe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
