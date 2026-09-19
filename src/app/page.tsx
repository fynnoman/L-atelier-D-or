import ScrollVideoHero from "@/components/home/ScrollVideoHero";
import ManifestQuote from "@/components/home/ManifestQuote";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import EndCall from "@/components/home/EndCall";
import { PIECES } from "@/data/collection";

export default function Home() {
  return (
    <>
      <ScrollVideoHero />
      <ManifestQuote />
      <CollectionShowcase pieces={PIECES} />
      <EndCall />
    </>
  );
}
