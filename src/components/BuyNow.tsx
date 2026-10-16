import Link from "next/link";
import type { Piece } from "@/data/collection";

type Props = {
  piece: Piece;
  label: string;
  fallbackHref?: string;
  className?: string;
  style?: React.CSSProperties;
};

const RAW_SHOP = process.env.NEXT_PUBLIC_SHOPIFY_SHOP;

/**
 * Erwartet eine reine Domain ("latelierdor.com" oder "latelier-dor.myshopify.com").
 * Falls jemand aus Versehen "https://..." oder einen Admin-Pfad eintraegt,
 * reduzieren wir das defensiv auf die reine Host-Komponente.
 */
function normalizeShop(input: string | undefined): string | null {
  if (!input) return null;
  const trimmed = input.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!trimmed || trimmed.includes("admin.shopify.com")) return null;
  return trimmed;
}

const SHOPIFY_SHOP = normalizeShop(RAW_SHOP);

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
