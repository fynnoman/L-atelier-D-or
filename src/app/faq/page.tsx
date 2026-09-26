import FaqClient from "./FaqClient";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata = {
  title: "Questions",
  description:
    "Ce que l'on nous demande souvent : le produit, la commande, la livraison, le retour, l'entretien.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dictionaries.fr.faq.sections.flatMap((s) =>
    s.qas
      .filter((qa) => !qa.pending)
      .map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a },
      }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
