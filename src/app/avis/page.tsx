import AvisClient from "./AvisClient";

export const metadata = {
  title: "Avis",
  description:
    "Ce que la maison entend. Les premiers témoignages arrivent — la parole se prend en confiance.",
  alternates: { canonical: "/avis" },
};

export default function AvisPage() {
  return <AvisClient />;
}
