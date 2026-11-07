import type { Piece } from "@/data/collection";

type Props = {
  piece: Piece;
  label: string;
  fallbackHref?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function BuyNow({
  piece,
  label,
  className,
  style,
}: Props) {
  const url = `https://shop.latelierdor.com/${piece.slug}`;
  return (
    <a href={url} className={className} style={style}>
      {label}
    </a>
  );
}
