import { clsx } from "clsx";

const NUMERALS = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function Numeral({
  n,
  className,
}: {
  n: number;
  className?: string;
}) {
  const glyph = NUMERALS[n] ?? String(n);
  return (
    <span className={clsx("n-numeral n-serif", className)} aria-hidden="true">
      {glyph}
    </span>
  );
}
