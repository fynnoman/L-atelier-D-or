import { notFound } from "next/navigation";
import MoodClient from "@/components/MoodClient";
import StructuredData, {
  productJsonLd,
  breadcrumbJsonLd,
} from "@/components/StructuredData";
import { PIECES, getPiece, formatEuro } from "@/data/collection";
import PieceClient from "./PieceClient";

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
      <PieceClient piece={piece} />
    </>
  );
}
