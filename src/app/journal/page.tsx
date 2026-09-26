import JournalIndexClient from "./JournalIndexClient";

export const metadata = {
  title: "Journal",
  description:
    "Les cahiers de la maison. Trois cahiers pour l'instant. Un ou deux par saison, quand nous avons quelque chose à dire.",
  alternates: { canonical: "/journal" },
};

export default function JournalIndex() {
  return <JournalIndexClient />;
}
