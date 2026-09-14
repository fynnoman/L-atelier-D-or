import Link from "next/link";
import { clsx } from "clsx";

type Props = { className?: string; muted?: boolean };

export default function Wordmark({ className, muted }: Props) {
  return (
    <Link
      href="/"
      aria-label="L’Atelier d’Or, retour à l’accueil"
      className={clsx(
        "inline-flex flex-col items-center leading-none",
        muted ? "text-current" : "text-ink",
        className,
      )}
    >
      <span
        className="serif"
        style={{
          fontSize: "clamp(14px, 1.05vw, 18px)",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          fontWeight: 400,
        }}
      >
        L’Atelier
      </span>
      <span
        className="serif"
        aria-hidden="true"
        style={{
          fontSize: "clamp(12px, 0.9vw, 15px)",
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: "var(--or)",
          marginTop: 2,
          fontWeight: 400,
        }}
      >
        d’Or
      </span>
    </Link>
  );
}
