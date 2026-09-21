import ScrollVideoHero from "@/components/home/ScrollVideoHero";
import AlternatingPieces from "@/components/home/AlternatingPieces";
import WornGallery from "@/components/home/WornGallery";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import EndCall from "@/components/home/EndCall";
import { PIECES } from "@/data/collection";

export default function Home() {
  return (
    <>
      <ScrollVideoHero />
      <AlternatingPieces pieces={PIECES} />
      <WornGallery pieces={PIECES} />
      <CollectionShowcase pieces={PIECES} />
      <EndCall />
    </>
  );
}
