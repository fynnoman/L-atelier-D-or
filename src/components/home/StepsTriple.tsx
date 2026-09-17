const STEPS = [
  {
    n: "I",
    title: "Anprobe",
    body: "Alle vier Stücke, bei Tages- oder Abendlicht.",
  },
  {
    n: "II",
    title: "Anpassung",
    body: "Nasenpads und Bügellänge, auf den Millimeter.",
  },
  {
    n: "III",
    title: "Gläser",
    body: "Korrektions- oder Sonnengläser, gefertigt durch unseren Meisteroptiker.",
  },
];

export default function StepsTriple() {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <span className="n-eyebrow block mb-24">
          Ein Termin, drei Momente
        </span>

        <div className="grid grid-cols-12 gap-x-6 mb-32">
          <div className="col-span-12">
            <h2
              className="n-display leading-[0.92]"
              style={{
                fontSize: "clamp(56px, 10vw, 180px)",
                fontWeight: 200,
              }}
            >
              Drei Momente, <br />
              <span className="opacity-80">ein Besuch.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-24">
          {STEPS.map((step, i) => (
            <article
              key={step.n}
              className="col-span-12 md:col-span-4 pt-10 border-t n-rise"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <div className="flex items-baseline gap-6 mb-12">
                <span
                  className="n-display leading-none opacity-30"
                  style={{
                    fontSize: "clamp(80px, 8vw, 128px)",
                    fontWeight: 100,
                  }}
                >
                  {step.n}
                </span>
                <span className="n-eyebrow">Schritt 0{i + 1}</span>
              </div>
              <h3
                className="n-display leading-[0.94] mb-8"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  fontWeight: 200,
                }}
              >
                {step.title}
              </h3>
              <p
                className="n-body leading-[1.55] max-w-[34ch]"
                style={{
                  fontSize: "clamp(16px, 1.2vw, 19px)",
                  color: "var(--n-muted)",
                }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
