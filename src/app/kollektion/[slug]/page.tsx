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
    <>
      <div className="bg-bg pt-28 md:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link
            href="/kollektion"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink link-underline"
          >
            ← Kollektion
          </Link>
        </div>
      </div>
      <ProductDetail product={product} />
    </>
  );
}
