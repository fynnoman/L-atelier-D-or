import type { Metadata } from "next";
import Checkout from "@/components/checkout/Checkout";

export const metadata: Metadata = {
  title: "Signature Checkout",
  description:
    "Bestätigung Ihrer Reservierung. Anzahlung 30 %, Fertigung 4 bis 6 Wochen, Signatur im Salon.",
};

export default function CheckoutPage() {
  return <Checkout />;
}
