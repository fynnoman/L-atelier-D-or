import type { Piece } from "@/data/collection";

export default function WornGallery({ pieces }: { pieces: Piece[] }) {
  const shots = pieces.filter((p) => p.imageWorn);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingBlock: "clamp(96px, 14vh, 160px)",
        background: "var(--n-bg-3)",
      }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-3 md:gap-6">
          {shots.map((p) => (
            <figure
              key={p.slug}
              className="col-span-6 md:col-span-3 relative overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                background: "var(--n-bg-2)",
                borderRadius: "clamp(14px, 1.4vw, 24px)",
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
          ))}
        </div>
      </div>
    </section>
  );
}
