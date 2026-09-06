import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPasseport, passeports } from "@/data/passeport";
import PasseportTimeline from "@/components/passeport/PasseportTimeline";

export function generateStaticParams() {
  return passeports.map((p) => ({ reference: p.reference }));
}

export async function generateMetadata({
  params,
}: PageProps<"/passeport/[reference]">): Promise<Metadata> {
  const { reference } = await params;
  const passeport = getPasseport(decodeURIComponent(reference));
  if (!passeport) return { title: "Passeport" };
  return {
    title: `Passeport ${passeport.reference} · ${passeport.productName}`,
    description: `Provenance und Chronik von ${passeport.productName}, ${passeport.edition}.`,
  };
}

export default async function PasseportDetail({
  params,
}: PageProps<"/passeport/[reference]">) {
  const { reference } = await params;
  const passeport = getPasseport(decodeURIComponent(reference));
  if (!passeport) notFound();

  return (
    <div className="relative min-h-[100dvh] bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Link
          href="/passeport"
          className="text-[11px] uppercase tracking-[0.22em] text-ink link-underline"
        >
          ← Alle Passe
        </Link>

        <header className="mt-8 border-b border-line pb-10 md:pb-14 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="eyebrow-gold">Passeport officiel</p>
            <h1 className="mt-4 display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] tracking-[-0.02em]">
              {passeport.productName}
              <span
                className="block mt-2"
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-fraunces), serif",
                  color: "var(--or-2)",
                  fontSize: "0.5em",
                }}
              >
                {passeport.edition}
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 border-l border-line-soft md:pl-8">
            <div>
              <p className="eyebrow">Référence</p>
              <p
                className="mt-2 numeral text-ink"
                style={{
                  fontSize: "clamp(1.4rem,2vw,1.8rem)",
                  fontStyle: "italic",
                }}
              >
                {passeport.reference}
              </p>
            </div>
            <div>
              <p className="eyebrow">Numéro</p>
              <p
                className="mt-2 numeral text-ink"
                style={{
                  fontSize: "clamp(1.4rem,2vw,1.8rem)",
                  fontStyle: "italic",
                }}
              >
                N° {String(passeport.editionNumber).padStart(3, "0")}
              </p>
            </div>
            <div>
              <p className="eyebrow">Sérial</p>
              <p className="mt-2 text-[12.5px] text-ink font-light">{passeport.serial}</p>
            </div>
            <div>
              <p className="eyebrow">Remise</p>
              <p className="mt-2 text-[12.5px] text-ink font-light">
                {passeport.handoverDate}
              </p>
            </div>
          </div>
        </header>

        <section className="mt-12 md:mt-16 grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow-gold mb-4">Matières</p>
            <ul className="border border-line-soft divide-y divide-line-soft">
              {passeport.materials.map((m) => (
                <li
                  key={m.label}
                  className="grid grid-cols-[140px_1fr] gap-4 px-5 py-4"
                >
                  <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted">
                    {m.label}
                  </span>
                  <span className="text-[13.5px] text-ink font-light">
                    {m.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow-gold mb-4">Poinçons</p>
            <ul className="border border-line-soft divide-y divide-line-soft">
              {passeport.hallmarks.map((h) => (
                <li
                  key={h.label}
                  className="grid grid-cols-[140px_1fr] gap-4 px-5 py-4"
                >
                  <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted">
                    {h.label}
                  </span>
                  <span
                    className="text-[15px] text-ink numeral"
                    style={{ fontStyle: "italic" }}
                  >
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-line p-5 bg-bg-2/40">
              <p className="eyebrow">Détenteur</p>
              <p className="mt-2 text-[14px] text-ink font-light italic">
                {passeport.currentOwner}
              </p>
            </div>
          </div>
        </section>

        <PasseportTimeline timeline={passeport.timeline} />

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            href={`/kollektion/${passeport.productSlug}`}
            className="btn-gold"
          >
            Fassung ansehen
          </Link>
          <Link href="/concierge" className="lv-btn">
            Réparation à vie
          </Link>
        </div>
      </div>
    </div>
  );
}
