import LineReveal from "../LineReveal";

export default function CollectionOpener() {
  return (
    <section className="n-section-lg relative">
      <div className="n-page">
        <span className="n-eyebrow block mb-24">Erste Kollektion</span>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12">
            <LineReveal
              as="h2"
              className="n-display leading-[0.9]"
              lines={["Roi.", "Vier Atmosphären."]}
              delayStep={140}
              style={{
                fontSize: "clamp(72px, 14vw, 260px)",
                color: "var(--n-ink)",
                fontWeight: 200,
              }}
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="n-body leading-[1.55]"
              style={{
                fontSize: "clamp(18px, 1.6vw, 24px)",
                color: "var(--n-muted)",
              }}
            >
              Wir haben nicht vier Fassungen entworfen, sondern vier Stunden,
              vier Orte, vier Arten, einen Raum zu betreten.
            </p>

            <div
              className="mt-14 pt-8 border-t grid grid-cols-2 gap-y-3"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <span className="n-meta opacity-70">I. Der Salon</span>
              <span className="n-meta opacity-70">III. Die Kapelle</span>
              <span className="n-meta opacity-70">II. Die Jagd</span>
              <span className="n-meta opacity-70">IV. Das Dîner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
