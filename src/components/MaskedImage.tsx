import { clsx } from "clsx";
import type { CSSProperties } from "react";

type Tone =
  | "warm"
  | "parchment"
  | "ink"
  | "rouge"
  | "foret"
  | "cristal"
  | "emeraude";

type Props = {
  src?: string;
  alt?: string;
  tone?: Tone;
  ratio?: string;
  className?: string;
  style?: CSSProperties;
  objectPosition?: string;
  overlay?: React.ReactNode;
  rounded?: boolean;
};

export default function MaskedImage({
  src,
  alt = "",
  tone = "warm",
  ratio = "4 / 5",
  className,
  style,
  objectPosition = "50% 50%",
  overlay,
  rounded = false,
}: Props) {
  return (
    <div
      className={clsx("n-mask relative overflow-hidden", rounded && "rounded-[2px]", className)}
      style={{ aspectRatio: ratio, ...style }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={clsx("n-tile", `is-${tone}`)} />
      )}
      {overlay}
    </div>
  );
}
