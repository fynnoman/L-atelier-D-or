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
                "Vier Fassungen im Jahr.",
                "In Paris von Hand gefertigt.",
                "Von Hand nummeriert.",
              ]}
              delayStep={130}
              style={{
                fontSize: "clamp(56px, 10vw, 176px)",
                color: "var(--n-ink)",
                fontWeight: 200,
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
              Italienisches Acetat, Titankern, wo nötig Gold 18 Karat.
              Direktvertrieb ab dem Atelier. Achtzig Euro pro Exemplar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
