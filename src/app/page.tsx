import HeroHome from "@/components/home/HeroHome";
import ManifestQuote from "@/components/home/ManifestQuote";
import CollectionMosaic from "@/components/home/CollectionMosaic";
import ThreePillars from "@/components/home/ThreePillars";
import SalonsBand from "@/components/home/SalonsBand";
import JournalStrip from "@/components/home/JournalStrip";
import EndCall from "@/components/home/EndCall";

export default function NouveauHome() {
  return (
    <>
      <HeroHome />
      <ManifestQuote />
      <CollectionMosaic />
      <ThreePillars />
      <SalonsBand />
      <JournalStrip />
      <EndCall />
    </>
  );
}
