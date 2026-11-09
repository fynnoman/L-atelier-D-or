import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  invert?: boolean;
};

const HEIGHT_DESKTOP = {
  sm: 40,
  md: 60,
  lg: 72,
  xl: 96,
} as const;

const HEIGHT_MOBILE = {
  sm: 26,
  md: 32,
  lg: 40,
  xl: 56,
} as const;

const LOGO_ASPECT = 2171 / 724;

export default function Wordmark({ className, size = "md", invert = false }: Props) {
  const hDesktop = HEIGHT_DESKTOP[size];
  const hMobile = HEIGHT_MOBILE[size];
  return (
    <span
      className={clsx("inline-flex items-center leading-none", className)}
      aria-label="L'Atelier d'Or"
      style={{
        height: `clamp(${hMobile}px, ${hMobile}px + 1vw, ${hDesktop}px)`,
        aspectRatio: `${LOGO_ASPECT}`,
      }}
    >
      <img
        src="/logo-white.png"
        alt="L'Atelier d'Or"
        width={2171}
        height={724}
        style={{
          height: "100%",
          width: "auto",
          maxWidth: "none",
          display: "block",
          flexShrink: 0,
          objectFit: "contain",
          aspectRatio: `${LOGO_ASPECT}`,
          filter: invert ? "invert(1)" : "none",
        }}
        draggable={false}
      />
    </span>
  );
}
