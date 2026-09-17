import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Wordmark({ className, size = "md" }: Props) {
  const scale =
    size === "sm"
      ? "text-[14px]"
      : size === "lg"
      ? "text-[22px]"
      : size === "xl"
      ? "text-[28px]"
      : "text-[17px]";
  return (
    <span
      className={clsx(
        "n-brand inline-flex items-baseline gap-[3px] leading-none",
        scale,
        className
      )}
      aria-label="L'Atelier d'Or"
    >
      <span>L&rsquo;Atelier</span>
      <span className="mx-[3px] opacity-80">d&rsquo;</span>
      <span>Or</span>
    </span>
  );
}
