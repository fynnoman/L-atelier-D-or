import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  invert?: boolean;
};

const FONT_SIZE = {
  sm: "clamp(18px, 2.4vw, 24px)",
  md: "clamp(22px, 3vw, 30px)",
  lg: "clamp(28px, 3.8vw, 40px)",
  xl: "clamp(38px, 5vw, 56px)",
} as const;

export default function Wordmark({ className, size = "md", invert = false }: Props) {
  return (
    <span
      className={clsx("inline-flex items-baseline leading-none n-brand", className)}
      aria-label="L'atelier d'or"
      style={{
        fontSize: FONT_SIZE[size],
        letterSpacing: "0.01em",
        color: invert ? "#0A0A0A" : "#FFFFFF",
        gap: "0.9em",
        whiteSpace: "nowrap",
      }}
    >
      <span>L&rsquo;atelier</span>
      <span>d&rsquo;or</span>
    </span>
  );
}
