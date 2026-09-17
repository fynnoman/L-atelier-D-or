import Link from "next/link";
import MaskedImage from "../MaskedImage";

export default function AtelierMoment() {
  return (
    <section className="relative">
      <div className="n-page grid grid-cols-12 gap-x-6 items-center py-24 md:py-40">
        <div className="col-span-12 md:col-span-7">
          <MaskedImage tone="ink" ratio="16 / 9" />
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-0">
          <span className="n-eyebrow block mb-8">Aus dem Atelier</span>
          <h3
            className="n-display leading-[0.95] mb-8"
            style={{
              fontSize: "clamp(40px, 5vw, 76px)",
              fontWeight: 200,
            }}
          >
            Vierzehn Handgriffe, <br />
            <span className="opacity-80">ein einziger Blick.</span>
          </h3>
          <p
            className="n-body leading-[1.55] mb-10"
            style={{
              fontSize: "clamp(16px, 1.2vw, 19px)",
              color: "var(--n-muted)",
            }}
          >
            Jede Fassung durchläuft vierzehn Handgriffe. Vier Personen. Eine einzige
            Regel: Was der Hand gehört, bleibt bei der Hand.
          </p>
          <Link href="/atelier" className="n-link">
            Atelier betreten
          </Link>
        </div>
      </div>
    </section>
  );
}
