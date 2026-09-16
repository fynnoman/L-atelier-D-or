import { clsx } from "clsx";

export default function PageEyebrow({
  numeral,
  label,
  className,
}: {
  numeral?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      {numeral && (
        <span className="n-mono opacity-60">{numeral}</span>
      )}
      <span className="n-hair" aria-hidden />
      <span className="n-eyebrow">{label}</span>
    </div>
  );
}
