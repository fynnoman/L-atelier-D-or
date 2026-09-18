import ScrollVideoHero from "@/components/home/ScrollVideoHero";
import ManifestQuote from "@/components/home/ManifestQuote";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import SalonsBand from "@/components/home/SalonsBand";
import EndCall from "@/components/home/EndCall";
import { PIECES } from "@/data/collection";

export default function Home() {
  return (
    <>
      <ScrollVideoHero />
      <ManifestQuote />
      <CollectionShowcase pieces={PIECES} />
      <SalonsBand />
      <EndCall />
    </>
  );
}
