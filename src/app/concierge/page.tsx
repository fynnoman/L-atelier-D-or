import type { Metadata } from "next";
import Concierge from "@/components/concierge/Concierge";

export const metadata: Metadata = {
  title: "Salon Privé · Concierge",
  description:
    "Vereinbaren Sie Ihre Anprobe in Paris, Berlin oder im Jura. Léa Marchand bestätigt persönlich innerhalb von 24 Stunden.",
};

export default function ConciergePage() {
  return <Concierge />;
}
