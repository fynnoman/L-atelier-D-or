import Link from "next/link";
import type { Piece } from "@/data/collection";

type Props = {
  piece: Piece;
  label: string;
  fallbackHref?: string;
  className?: string;
  style?: React.CSSProperties;
};

const SHOPIFY_SHOP = process.env.NEXT_PUBLIC_SHOPIFY_SHOP;

export default function BuyNow({
  piece,
  label,
  fallbackHref = "/conseil",
  className,
  style,
}: Props) {
  const variantId = piece.shopifyVariantId?.trim();

  if (variantId && SHOPIFY_SHOP) {
    const url = `https://${SHOPIFY_SHOP}/cart/${variantId}:1`;
    return (
      <a href={url} className={className} style={style}>
        {label}
      </a>
    );
  }

  return (
    <Link href={fallbackHref} className={className} style={style}>
      {label}
    </Link>
  );
}
