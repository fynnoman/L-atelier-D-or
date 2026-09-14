import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bySlug, collection } from "@/data/collection";
import ProductStage from "@/components/ProductStage";
import ProductScene from "@/components/ProductScene";
import ProductSpecs from "@/components/ProductSpecs";
import ProductNotes from "@/components/ProductNotes";
import ProductPrice from "@/components/ProductPrice";
import OtherPieces from "@/components/OtherPieces";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return collection.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const piece = bySlug(slug);
  if (!piece) return {};
  return {
    title: `${piece.name} — ${piece.chapter.split(" — ")[1] ?? piece.chapter}`,
    description: `${piece.tagline} · ${piece.scene.title}`,
    openGraph: {
      title: `${piece.name} · L’Atelier d’Or`,
      description: piece.tagline,
    },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const piece = bySlug(slug);
  if (!piece) notFound();

  return (
    <div data-mood={piece.mood}>
      <ProductStage piece={piece} />
      <ProductScene piece={piece} />
      <ProductSpecs piece={piece} />
      <ProductNotes piece={piece} />
      <ProductPrice piece={piece} />
      <OtherPieces current={piece} />
    </div>
  );
}
