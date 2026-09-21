import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  invert?: boolean;
};

const HEIGHT = {
  sm: 18,
  md: 26,
  lg: 44,
  xl: 60,
} as const;

export default function Wordmark({ className, size = "md", invert = false }: Props) {
  const h = HEIGHT[size];
  return (
    <span
      className={clsx("inline-flex items-center leading-none", className)}
      aria-label="L'Atelier d'Or"
    >
      <img
        src="/logo.png"
        alt="L'Atelier d'Or"
        style={{
          height: `${h}px`,
          width: "auto",
          display: "block",
          filter: invert ? "invert(1)" : "none",
        }}
        draggable={false}
      />
    </span>
  );
}
