type Props = {
  edition: string;
  number?: string;
  variant?: "gold" | "noir";
  className?: string;
};

// Signature numbered plaque — hallmark aesthetic.
// e.g. Édition de 60 · N° 042/060
export default function Plaque({
  edition,
  number,
  variant = "gold",
  className = "",
}: Props) {
  return (
    <span className={`plaque ${variant === "noir" ? "plaque-noir" : ""} ${className}`}>
      <span>{edition}</span>
      {number && (
        <>
          <span className="diamond" aria-hidden />
          <span className="plaque-numeral">{number}</span>
        </>
      )}
    </span>
  );
}
