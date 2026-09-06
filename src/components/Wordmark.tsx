type Props = {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  variant?: "dark" | "light" | "gold" | "shimmer";
  as?: "span" | "h1" | "h2";
};

const sizeMap = {
  sm: "text-[12px] tracking-[0.28em]",
  md: "text-[14px] md:text-[15px] tracking-[0.26em]",
  lg: "text-[20px] md:text-[26px] tracking-[0.24em]",
  xl: "text-[32px] md:text-[44px] tracking-[0.22em]",
  hero: "text-[clamp(2.2rem,5.6vw,4.4rem)] tracking-[0.18em]",
};

// Engraved-plate wordmark: L'ATELIER · D'OR — separated by a small
// diamond glyph. Available in ink, parchment, static gold, or shimmering gold.
export default function Wordmark({
  size = "md",
  className = "",
  variant = "dark",
  as = "span",
}: Props) {
  const Tag = as;

  const colorClass =
    variant === "light"
      ? "text-parchment"
      : variant === "dark"
        ? "text-ink"
        : "";

  const goldClass =
    variant === "gold"
      ? "gilded"
      : variant === "shimmer"
        ? "gilded-shimmer"
        : "";

  return (
    <Tag
      className={`wordmark leading-none inline-flex items-center ${sizeMap[size]} ${colorClass} ${goldClass} ${className}`}
      aria-label="L'Atelier d'Or"
      style={{ fontWeight: 500 }}
    >
      <span>L&apos;ATELIER</span>
      <span
        aria-hidden
        className="mx-[0.55em] inline-block h-[0.32em] w-[0.32em] rotate-45"
        style={{
          background: variant === "gold" || variant === "shimmer" ? "var(--or)" : "currentColor",
          opacity: variant === "gold" || variant === "shimmer" ? 0.9 : 0.75,
        }}
      />
      <span>D&apos;OR</span>
    </Tag>
  );
}
