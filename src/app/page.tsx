import ScrollVideoHero from "@/components/home/ScrollVideoHero";
import Manifesto from "@/components/home/Manifesto";
import CloseupFilm from "@/components/home/CloseupFilm";
import CollectionCinemaReel from "@/components/home/CollectionCinemaReel";
import WornGallery from "@/components/home/WornGallery";
import AvisTeaser from "@/components/home/AvisTeaser";
import EndCall from "@/components/home/EndCall";
import { PIECES } from "@/data/collection";

export default function Home() {
  return (
    <>
      <ScrollVideoHero />
      <Manifesto />
      <CloseupFilm src="/video/closeup.mp4" />
      <CollectionCinemaReel pieces={PIECES} />
      <WornGallery pieces={PIECES} />
      <AvisTeaser />
      <EndCall />
    </>
  );
}
