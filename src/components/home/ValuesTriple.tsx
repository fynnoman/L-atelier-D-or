const VALUES = [
  {
    tag: "Kleine Serien",
    body:
      "Vier Stücke im ersten Jahr. Jedes Exemplar ist von Hand nummeriert.",
  },
  {
    tag: "Fairer Preis",
    body:
      "Achtzig Euro pro Stück. Direktvertrieb, ohne Zwischenhändler.",
  },
  {
    tag: "Zurückhaltung",
    body:
      "Was das Haus der Welt nicht hinzufügt, definiert es ebenso wie das, was es zeigt.",
  },
];

export default function ValuesTriple() {
  return (
    <section
      className="n-section-lg relative"
      style={{ background: "var(--n-bg-2)" }}
    >
      <div className="n-page">
        <span className="n-eyebrow block mb-24">Drei Regeln</span>

        <div className="grid grid-cols-12 gap-x-6 gap-y-24">
          {VALUES.map((v, i) => (
            <article
              key={v.tag}
              className="col-span-12 md:col-span-4 n-rise flex flex-col"
            >
              <span
                className="n-display leading-none mb-10 opacity-25"
                style={{ fontSize: "clamp(80px, 8vw, 140px)", fontWeight: 100 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="n-display leading-[0.98] mb-8"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  fontWeight: 200,
                }}
              >
                {v.tag}
              </h3>
              <p
                className="n-body leading-[1.55] max-w-[36ch]"
                style={{
                  fontSize: "clamp(16px, 1.2vw, 19px)",
                  color: "var(--n-muted)",
                }}
              >
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
