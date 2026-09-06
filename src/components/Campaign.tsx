"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  paragraph?: string;
  image: string;
  imageAlt: string;
  cta: { href: string; label: string };
  align?: "left" | "right" | "center";
  tone?: "light" | "dark";
  height?: string;
  plaque?: string;
};

// Editorial campaign section: image with warm wash, editorial copy stacked
// on one side, gold plaquette in the opposite corner, thin outline CTA.
export default function Campaign({
  eyebrow,
  title,
  paragraph,
  image,
  imageAlt,
  cta,
  align = "left",
  tone = "light",
  height = "h-[96dvh] min-h-[640px]",
  plaque,
}: Props) {
  const alignItems =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right md:ml-auto"
        : "items-start text-left";
  const plaquePos =
    align === "right" ? "left-6 md:left-12" : "right-6 md:right-12";

  return (
    <section className={`relative w-full overflow-hidden ${height} grain grain-dark bg-noir`}>
      <PlaceholderImage
        src={image}
        alt={imageAlt}
        sizes="100vw"
        quality={82}
        className="object-cover"
      />
      {/* Warm cinematic wash */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            tone === "light"
              ? "linear-gradient(180deg, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.05) 45%, rgba(10,8,6,0.75) 100%), radial-gradient(ellipse at 50% 90%, rgba(122,74,26,0.28), transparent 60%)"
              : "linear-gradient(180deg, rgba(245,239,225,0.05) 0%, transparent 40%, rgba(245,239,225,0.15) 100%)",
        }}
      />

      {/* Corner plaque */}
      {plaque && (
        <div className={`absolute top-8 md:top-12 z-10 ${plaquePos}`}>
          <span
            className="inline-flex items-center gap-3 text-[10.5px] uppercase font-medium"
            style={{
              color: "rgba(230, 201, 138, 0.9)",
              letterSpacing: "0.32em",
              textShadow: "0 1px 8px rgba(10,8,6,0.55)",
            }}
          >
            <span
              className="inline-block h-[5px] w-[5px] rotate-45"
              style={{ background: "var(--or)" }}
              aria-hidden
            />
            {plaque}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className={`flex flex-col gap-6 max-w-2xl ${alignItems}`}>
            <div className="inline-flex items-center gap-4">
              <span
                className="inline-block h-px w-10"
                style={{ background: "var(--or)" }}
                aria-hidden
              />
              <p
                className="text-[10.5px] uppercase"
                style={{
                  color: "rgba(230, 201, 138, 0.88)",
                  letterSpacing: "0.34em",
                }}
              >
                {eyebrow}
              </p>
            </div>

            <h2
              className="display text-parchment"
              style={{
                fontSize: "clamp(2.4rem, 6.5vw, 5.8rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
            >
              {title}
            </h2>

            {paragraph && (
              <p
                className="max-w-md text-[14px] leading-[1.9]"
                style={{ color: "rgba(245, 239, 225, 0.82)" }}
              >
                {paragraph}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={cta.href} className="btn-ghost-gold">
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
