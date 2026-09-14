import Link from "next/link";
import Reveal from "./Reveal";

export default function ConciergeBand() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--noir-2)",
        color: "var(--parchment)",
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(90px, 16vh, 180px)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% 20%, rgba(215,170,90,0.16), transparent 60%), radial-gradient(900px 400px at 10% 90%, rgba(215,170,90,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] grid gap-14 md:grid-cols-[1.2fr_1fr] items-center">
        <Reveal>
          <div>
            <div className="eyebrow-or">Concierge</div>
            <h2
              className="display mt-4"
              style={{
                fontSize: "clamp(40px, 5.6vw, 84px)",
                lineHeight: 1,
                color: "var(--parchment)",
              }}
            >
              Un rendez-vous,
              <br />
              <span style={{ fontStyle: "italic", color: "var(--or-glow)" }}>en discrétion.</span>
            </h2>
            <p className="serif mt-6" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 520, color: "color-mix(in oklab, var(--parchment) 82%, transparent)" }}>
              Nous recevons sur demande à Paris, à Berlin et à Londres. Les
              essayages ont lieu chez notre partenaire opticien ou dans un salon
              privé, selon votre convenance.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative"
            style={{
              border: "1px solid rgba(215,170,90,0.28)",
              padding: "clamp(24px, 3vw, 40px)",
              background:
                "linear-gradient(180deg, rgba(215,170,90,0.06), rgba(215,170,90,0.02))",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--or-glow)",
                marginBottom: 20,
              }}
            >
              Rendez-vous privés
            </div>
            <ul className="serif space-y-4" style={{ fontSize: 17, lineHeight: 1.5 }}>
              <li className="flex items-baseline gap-4">
                <span className="numeral" style={{ color: "var(--or-soft)", fontSize: 14 }}>Ⅰ</span>
                Essayage des quatre pièces, dans la lumière du jour ou du soir.
              </li>
              <li className="flex items-baseline gap-4">
                <span className="numeral" style={{ color: "var(--or-soft)", fontSize: 14 }}>Ⅱ</span>
                Ajustage personnalisé, plaquettes, longueur des branches.
              </li>
              <li className="flex items-baseline gap-4">
                <span className="numeral" style={{ color: "var(--or-soft)", fontSize: 14 }}>Ⅲ</span>
                Verres correcteurs ou solaires, montés par notre maître opticien.
              </li>
            </ul>

            <div className="mt-10">
              <Link href="/concierge" className="btn-or">
                Demander un rendez-vous
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
