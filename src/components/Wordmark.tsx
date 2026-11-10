import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  invert?: boolean;
};

const FONT_SIZE = {
  sm: "clamp(24px, 3.2vw, 32px)",
  md: "clamp(30px, 4vw, 42px)",
  lg: "clamp(38px, 5vw, 56px)",
  xl: "clamp(52px, 6.5vw, 76px)",
} as const;

export default function Wordmark({ className, size = "md", invert = false }: Props) {
  return (
    <span
      className={clsx("inline-flex items-baseline leading-none n-product-name", className)}
      aria-label="L'atelier d'or"
      style={{
        fontSize: FONT_SIZE[size],
        color: invert ? "#0A0A0A" : "#FFFFFF",
        gap: "0.55em",
        whiteSpace: "nowrap",
      }}
    >
      <span>L&rsquo;atelier</span>
      <span>d&rsquo;or</span>
    </span>
  );
}
