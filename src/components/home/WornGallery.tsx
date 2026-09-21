import type { Piece } from "@/data/collection";

export default function WornGallery({ pieces }: { pieces: Piece[] }) {
  const shots = pieces.filter((p) => p.imageWorn);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingBlock: "clamp(96px, 14vh, 180px)",
        background: "var(--n-bg-3)",
      }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-16">
          {shots.map((p, i) => {
            const layout = [
              "col-span-8 md:col-span-5 md:col-start-1",
              "col-span-4 md:col-span-3 md:col-start-7 md:mt-24",
              "col-span-6 md:col-span-4 md:col-start-2 md:-mt-6",
              "col-span-6 md:col-span-5 md:col-start-7 md:mt-8",
            ];
            const ratio = ["3 / 4", "3 / 4", "4 / 5", "4 / 5"];
            return (
              <figure
                key={p.slug}
                className={`${layout[i] ?? "col-span-6"} relative overflow-hidden`}
                style={{
                  aspectRatio: ratio[i] ?? "3 / 4",
                  background: "var(--n-bg-2)",
                }}
              >
                <img
                  src={p.imageWorn!}
                  alt={`${p.name} portée`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
