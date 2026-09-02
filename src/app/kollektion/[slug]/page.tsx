import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: PageProps<"/kollektion/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Link
          href="/kollektion"
          className="eyebrow inline-flex items-center gap-2 hover:text-ink transition"
        >
          ← Zur Kollektion
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
