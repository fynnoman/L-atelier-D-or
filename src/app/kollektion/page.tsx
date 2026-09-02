import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Kollektion · L'Atelier D'Or",
  description: "Vier Fassungen in limitierter Auflage.",
};

export default function KollektionPage() {
  return (
    <div className="pt-40 pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="eyebrow">Kollektion Automne / Hiver</div>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
          Vier <span className="serif-italic gold-text">Objekte</span>.
          <br /> Ausgewählt für Sie.
        </h1>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
