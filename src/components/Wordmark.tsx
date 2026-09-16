import { clsx } from "clsx";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Wordmark({ className, size = "md" }: Props) {
  const scale = size === "sm" ? "text-[14px]" : size === "lg" ? "text-[22px]" : "text-[17px]";
  return (
    <span
      className={clsx(
        "n-serif inline-flex items-baseline gap-[2px] tracking-[-0.01em] leading-none",
        scale,
        className
      )}
      aria-label="L'Atelier d'Or"
    >
      <span>L&rsquo;Atelier</span>
      <span className="mx-[3px] opacity-70">d&rsquo;</span>
      <span>Or</span>
    </span>
  );
}
