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
};

// LV Damen/Herren-style campaign section: full-bleed image with editorial
// copy stacked over one side, thin outline CTA.
export default function Campaign({
  eyebrow,
  title,
  paragraph,
  image,
  imageAlt,
  cta,
  align = "left",
  tone = "light",
  height = "h-[92dvh] min-h-[620px]",
}: Props) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const eyebrowClass = tone === "light" ? "eyebrow-light" : "eyebrow";
  const btnClass = tone === "light" ? "lv-btn lv-btn-light" : "lv-btn";

  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  return (
    <section className={`relative w-full overflow-hidden ${height} bg-ink`}>
      <PlaceholderImage
        src={image}
        alt={imageAlt}
        sizes="100vw"
        quality={80}
        className="object-cover"
      />
      {tone === "light" && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-ink/25" />
      )}

      <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-14 md:pb-20">
        <div className={`flex flex-col gap-5 max-w-xl ${alignClasses} ${textColor}`}>
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className="font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em]">
            {title}
          </h2>
          {paragraph && (
            <p
              className={`max-w-md text-[14px] leading-[1.75] ${
                tone === "light" ? "text-white/85" : "text-muted"
              }`}
            >
              {paragraph}
            </p>
          )}
          <Link href={cta.href} className={`${btnClass} mt-2`}>
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
