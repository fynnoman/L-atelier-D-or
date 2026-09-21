import Link from "next/link";
import { notFound } from "next/navigation";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";
import MoodClient from "@/components/MoodClient";
import ProductGallery from "@/components/ProductGallery";
import PieceSwitcher from "@/components/PieceSwitcher";
import StructuredData, {
  productJsonLd,
  breadcrumbJsonLd,
} from "@/components/StructuredData";
import { PIECES, getPiece, formatEuro } from "@/data/collection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://laterlierdor-fynn-schulzs-projects.vercel.app";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return PIECES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};
  return {
    title: `${piece.name} — ${piece.tagline}`,
    description: `${piece.name} — édition brève, numérotée à la main. ${formatEuro(piece.priceEuro)}.`,
    alternates: { canonical: `/collection/${piece.slug}` },
  };
}

export default async function PiecePage({ params }: { params: Params }) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();
  const others = PIECES.filter((p) => p.slug !== piece.slug);

  return (
    <>
      <MoodClient mood={piece.mood} />
      <StructuredData data={productJsonLd(piece, siteUrl)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Accueil", url: `${siteUrl}/` },
          { name: "Collection", url: `${siteUrl}/collection` },
          { name: piece.name, url: `${siteUrl}/collection/${piece.slug}` },
        ])}
      />

      {/* Chapitre — hero */}
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow numeral={`Chapitre ${piece.numeral}`} label={piece.chapter.replace(/^Chapitre [IVX]+\s—\s/, "")} className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end relative">
            <div className="col-span-12 md:col-span-8">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={[piece.name.split(" ")[0], piece.name.split(" ").slice(1).join(" ")]}
                delayStep={130}
                style={{ fontSize: "clamp(72px, 14vw, 240px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
              <p
                className="n-serif-italic text-[22px] leading-[1.35]"
                style={{ color: "var(--n-muted)" }}
              >
                « {piece.tagline} »
              </p>
            </div>
          </div>

          {/* Numéral géant en filigrane */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-[3vw] opacity-[0.08] select-none"
          >
            <span
              className="n-display leading-none"
              style={{ fontSize: "clamp(220px, 42vw, 640px)" }}
            >
              <Numeral n={piece.index} />
            </span>
          </span>
        </div>

        {/* Composition principale — galerie + carte scène */}
        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-8 relative">
            <ProductGallery
              ratio="1 / 1"
              slides={[
                { src: piece.image ?? "", alt: `${piece.name} — Studio`, fit: "contain" as const },
                ...(piece.imageWorn
                  ? [{ src: piece.imageWorn, alt: `${piece.name} — getragen`, fit: "cover" as const, position: "50% 30%" }]
                  : []),
              ].filter((s) => s.src)}
            />
          </div>

          <aside className="col-span-12 md:col-span-4 mt-12 md:mt-4 flex flex-col gap-10">
            <PieceSwitcher current={piece.slug} />
            <div className="h-px" style={{ background: "var(--n-line-soft)" }} />
            <div>
              <div className="n-eyebrow mb-3">Le lieu</div>
              <p className="n-serif text-[19px] leading-[1.4]">{piece.place}</p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">L&rsquo;heure</div>
              <p className="n-serif text-[19px] leading-[1.4]">{piece.time}</p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">Silhouette</div>
              <p className="n-serif text-[19px] leading-[1.4]">{piece.silhouette}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Matière & teintes */}
      <section
        className="relative py-32"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <PageEyebrow numeral="§ 01" label="La matière" className="mb-8" />
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              {piece.materie.split(" · ")[0]}
            </h2>
            <p
              className="n-serif text-[18px] leading-[1.55] mt-6 max-w-[38ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {piece.materie}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-6">
              {piece.teintes.map((t) => (
                <div key={t.hex} className="flex flex-col">
                  <div
                    className="w-full aspect-square"
                    style={{
                      background: t.hex,
                      border: "1px solid var(--n-line)",
                      borderRadius: "clamp(14px, 1.2vw, 22px)",
                      boxShadow: "0 1px 2px rgba(10,10,10,0.06), 0 8px 22px rgba(10,10,10,0.08)",
                    }}
                  />
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="n-serif text-[19px]">{t.name}</span>
                    <span className="n-mono opacity-60">{t.hex}</span>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3">
              {piece.details.map((d) => (
                <li key={d} className="flex items-baseline gap-4">
                  <span className="n-mono opacity-50">·</span>
                  <span className="n-serif text-[17px]" style={{ color: "var(--n-ink)" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Notes sensorielles */}
      <section className="relative py-32">
        <div className="n-page grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <PageEyebrow numeral="§ 02" label="Notes sensorielles" className="mb-8" />
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              <span className="n-serif-italic opacity-80">Comment cette paire</span> <br />
              habite un lieu.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-10 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Quatre notes — ni parfum, ni matière : une manière de tenir la lumière.
            </p>
          </div>
        </div>

        <div className="n-page mt-16 grid grid-cols-12 gap-6">
          {piece.notes.map((note, i) => (
            <div
              key={note}
              className="col-span-6 md:col-span-3 p-8 border n-rise"
              style={{
                borderColor: "var(--n-line)",
                borderRadius: "clamp(18px, 1.6vw, 26px)",
                background: "var(--n-bg)",
                boxShadow: "0 1px 2px rgba(10,10,10,0.04), 0 12px 32px rgba(10,10,10,0.06)",
              }}
            >
              <span className="n-mono opacity-60 block mb-4">Note 0{i + 1}</span>
              <span
                className="n-serif text-[26px] leading-[1.15]"
                style={{ color: "var(--n-ink)" }}
              >
                {note}
              </span>
            </div>
          ))}
        </div>

        <div className="n-page mt-24">
          <p
            className="n-serif-italic max-w-[36ch] mx-auto text-center"
            style={{ fontSize: "clamp(24px, 3.4vw, 40px)", lineHeight: 1.3 }}
          >
            « {piece.scene} »
          </p>
          <div className="mt-14 flex justify-center">
            <Link href="/journal/quatre-atmospheres" className="n-link">
              Lire « Quatre atmosphères »
            </Link>
          </div>
        </div>
      </section>

      {/* Prix / édition / concierge */}
      <section
        className="relative py-32"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-6">
            <PageEyebrow numeral="§ 03" label="Édition brève" className="mb-8" />
            <div className="flex items-baseline gap-8 mb-8">
              <span
                className="n-display leading-none"
                style={{ fontSize: "clamp(76px, 11vw, 180px)" }}
              >
                {formatEuro(piece.priceEuro)}
              </span>
              <div className="flex flex-col">
                <span className="n-mono opacity-60">Prix par pièce</span>
                <span className="n-mono opacity-60">Ni plus, ni moins</span>
              </div>
            </div>
            <p
              className="n-serif text-[19px] leading-[1.5] max-w-[42ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Numérotée à la main, à l&rsquo;intérieur de la branche gauche. Livrée
              dans son écrin dédié — remise en main propre à Paris, transport suivi ailleurs en Europe.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-14 md:mt-0">
            <div
              className="p-10 border"
              style={{
                borderColor: "var(--n-line)",
                background: "var(--n-bg)",
                borderRadius: "clamp(20px, 1.8vw, 32px)",
                boxShadow: "0 1px 2px rgba(10,10,10,0.04), 0 24px 48px rgba(10,10,10,0.08)",
              }}
            >
              <div className="n-eyebrow mb-4">Deux manières de la recevoir</div>
              <ol className="flex flex-col gap-6">
                <li>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="n-serif text-[32px] leading-none opacity-50">I</span>
                    <span className="n-serif text-[19px]">Rendez-vous privé</span>
                  </div>
                  <p
                    className="n-serif text-[15px] leading-[1.5] max-w-[38ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    Paris, Berlin ou Londres. Essai, ajustement, puis verres correcteurs ou solaires.
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="n-serif text-[32px] leading-none opacity-50">II</span>
                    <span className="n-serif text-[19px]">Livraison dans son écrin</span>
                  </div>
                  <p
                    className="n-serif text-[15px] leading-[1.5] max-w-[38ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    En main propre à Paris ; par transport suivi ailleurs en Europe.
                  </p>
                </li>
              </ol>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/collection" className="n-cta">Voir la collection</Link>
                <Link href="/conseil" className="n-link">
                  Écrire à la maison
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres pièces */}
      <section className="relative py-28">
        <div className="n-page">
          <PageEyebrow numeral="§ 04" label="Les trois autres pièces" className="mb-14" />
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/collection/${p.slug}`}
                className="col-span-12 md:col-span-4 group block"
              >
                <div className="relative">
                  <MaskedImage
                    src={p.image}
                    tone={p.mood === "foret" ? "foret" : p.mood === "cristal" ? "cristal" : p.mood === "emeraude" ? "emeraude" : "rouge"}
                    ratio="4 / 5"
                  />
                  <div
                    className="absolute top-4 left-4 flex items-center gap-3 px-3 py-2"
                    style={{
                      background: "rgba(237, 227, 206, 0.72)",
                      border: "1px solid var(--n-line)",
                      borderRadius: "9999px",
                      backdropFilter: "saturate(1.4) blur(14px)",
                      WebkitBackdropFilter: "saturate(1.4) blur(14px)",
                      boxShadow: "0 4px 14px rgba(10,10,10,0.12)",
                    }}
                  >
                    <span className="n-mono opacity-70" style={{ color: "var(--n-ink)" }}>{p.numeral}</span>
                    <span className="n-eyebrow">{p.name}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <div className="n-serif text-[22px] leading-none">{p.name}</div>
                    <div className="n-serif-italic text-[15px] mt-2" style={{ color: "var(--n-muted)" }}>
                      {p.tagline}
                    </div>
                  </div>
                  <span className="n-mono opacity-60">{formatEuro(p.priceEuro)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
