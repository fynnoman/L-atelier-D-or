type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "dark" | "light";
};

const sizeMap = {
  sm: "text-[13px]",
  md: "text-[15px] md:text-[17px]",
  lg: "text-[20px] md:text-[24px]",
  xl: "text-[28px] md:text-[36px]",
};

// LV-style wordmark: all caps, wide tracking, dropped weight, no italic.
// Reads like the LOUIS VUITTON masthead.
export default function Wordmark({
  size = "md",
  className = "",
  variant = "dark",
}: Props) {
  const fg = variant === "light" ? "text-white" : "text-ink";
  return (
    <span
      className={`wordmark leading-none ${sizeMap[size]} ${fg} ${className}`}
      aria-label="L'Atelier d'Or"
    >
      L&apos;ATELIER D&apos;OR
    </span>
  );
}
