import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import { formatEuro } from "@/data/collection";

export const metadata = {
  title: "Questions",
  description:
    "Ce que l'on nous demande souvent : le produit, la commande, la livraison, le retour, l'entretien.",
  alternates: { canonical: "/faq" },
};

type QA = { q: string; a: string | React.ReactNode; pending?: boolean };
type Section = { title: string; eyebrow: string; qas: QA[] };

const SECTIONS: Section[] = [
  {
    title: "La pièce",
    eyebrow: "§ 01 · Le produit",
    qas: [
      {
        q: "Combien coûte une pièce Roi ?",
        a: `Chaque pièce de la collection Roi est proposée à ${formatEuro(78.9)}. Ni plus, ni moins.`,
      },
      {
        q: "Combien de modèles composent la collection ?",
        a: "La première collection comprend quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude.",
      },
      {
        q: "Chaque exemplaire est-il numéroté ?",
        a: "Oui. Chaque exemplaire est numéroté à la main, un par un.",
      },
      {
        q: "Puis-je choisir entre plusieurs coloris ?",
        a: "Chaque pièce a une teinte définie. Les quatre atmosphères correspondent aux quatre pièces.",
      },
    ],
  },
  {
    title: "La commande",
    eyebrow: "§ 02 · Commander",
    qas: [
      {
        q: "Comment passer commande ?",
        a: (
          <>
            La commande s’effectue en ligne, directement depuis la page
            de la pièce.{" "}
            <Link href="/collection" className="underline underline-offset-4">
              Voir la collection
            </Link>
            .
          </>
        ),
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "En cours de rédaction. Les moyens de paiement définitifs seront publiés à l'ouverture de la boutique.",
        pending: true,
      },
      {
        q: "Puis-je annuler ma commande après paiement ?",
        a: "En cours de rédaction. Les conditions d'annulation seront publiées à l'ouverture de la boutique.",
        pending: true,
      },
    ],
  },
  {
    title: "La livraison",
    eyebrow: "§ 03 · Livraison",
    qas: [
      {
        q: "Où livrez-vous ?",
        a: "En cours de rédaction. Les zones de livraison seront communiquées à l'ouverture de la boutique.",
        pending: true,
      },
      {
        q: "Quels sont les délais ?",
        a: "En cours de rédaction. Les délais indicatifs seront communiqués à l'ouverture.",
        pending: true,
      },
      {
        q: "Quels sont les frais de port ?",
        a: "En cours de rédaction. La grille sera publiée à l'ouverture.",
        pending: true,
      },
    ],
  },
  {
    title: "Le retour",
    eyebrow: "§ 04 · Retour & échange",
    qas: [
      {
        q: "Puis-je retourner ma pièce ?",
        a: "En cours de rédaction. Les conditions de retour seront publiées à l'ouverture de la boutique. Le droit de rétractation légal de quatorze jours s'applique en tout état de cause aux acheteurs consommateurs dans l'Union européenne.",
        pending: true,
      },
      {
        q: "Comment procéder à un retour ?",
        a: "En cours de rédaction.",
        pending: true,
      },
    ],
  },
  {
    title: "L’entretien",
    eyebrow: "§ 05 · Entretien",
    qas: [
      {
        q: "Comment nettoyer ma pièce ?",
        a: "Utilisez un chiffon microfibre propre, à sec ou légèrement humide. Évitez les produits abrasifs, les solvants et l'alcool, qui altèrent le fini des matières.",
      },
      {
        q: "Comment ranger ma pièce ?",
        a: "Dans son écrin dédié, à l'abri de la chaleur et de la lumière directe prolongée.",
      },
      {
        q: "Que faire en cas de vis desserrée ou de branche déformée ?",
        a: "Un opticien saura ajuster ou resserrer. Pour un ajustement lié à la maison, écrivez-nous.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SECTIONS.flatMap((s) =>
    s.qas
      .filter((qa) => !qa.pending && typeof qa.a === "string")
      .map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a as string },
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

      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow numeral="FAQ" label="Ce que l'on nous demande" className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={["Les questions,", "les réponses."]}
                delayStep={140}
                style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Certaines réponses définitives arrivent à l’ouverture
                de la boutique. Les autres sont déjà là.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          {SECTIONS.map((section, i) => (
            <div
              key={section.title}
              className="grid grid-cols-12 gap-x-6 gap-y-6 py-14 border-t"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <div className="col-span-12 md:col-span-4">
                <PageEyebrow numeral={`§ 0${i + 1}`} label={section.title} />
              </div>
              <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
                {section.qas.map((qa) => (
                  <article key={qa.q}>
                    <h3
                      className="n-serif text-[20px] leading-[1.3] mb-3"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {qa.q}
                    </h3>
                    <p
                      className="n-body text-[16px] leading-[1.6]"
                      style={{
                        color: qa.pending ? "var(--n-muted-2)" : "var(--n-muted)",
                        fontStyle: qa.pending ? "italic" : "normal",
                      }}
                    >
                      {qa.a}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div
            className="mt-16 pt-10 border-t flex flex-col md:flex-row items-baseline justify-between gap-6"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <p
              className="n-serif text-[17px] leading-[1.55] max-w-[46ch]"
              style={{ color: "var(--n-muted)" }}
            >
              Une question qui n’est pas ici ? Écrivez-nous — nous
              répondons personnellement.
            </p>
            <Link href="/conseil" className="n-cta">
              Poser ma question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
