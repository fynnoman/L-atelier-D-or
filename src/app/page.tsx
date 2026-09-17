import ScrollVideoHero from "@/components/home/ScrollVideoHero";
import ChapterMark from "@/components/ChapterMark";
import ManifestQuote from "@/components/home/ManifestQuote";
import ValuesTriple from "@/components/home/ValuesTriple";
import CollectionOpener from "@/components/home/CollectionOpener";
import Diptych from "@/components/home/Diptych";
import AtelierMoment from "@/components/home/AtelierMoment";
import ThreePillars from "@/components/home/ThreePillars";
import SalonsBand from "@/components/home/SalonsBand";
import StepsTriple from "@/components/home/StepsTriple";
import JournalStrip from "@/components/home/JournalStrip";
import EndCall from "@/components/home/EndCall";
import { PIECES } from "@/data/collection";

export default function Home() {
  const pair1: [typeof PIECES[number], typeof PIECES[number]] = [PIECES[0], PIECES[1]];
  const pair2: [typeof PIECES[number], typeof PIECES[number]] = [PIECES[2], PIECES[3]];

  return (
    <>
      <ScrollVideoHero />

      <ChapterMark numeral="I" title="Das Haus" subtitle="Manifest & Prinzipien" />
      <ManifestQuote />
      <ValuesTriple />

      <ChapterMark
        numeral="II"
        title="Die Kollektion"
        subtitle="Roi. Vier Atmosphären."
      />
      <CollectionOpener />
      <Diptych pair={pair1} />
      <AtelierMoment />
      <Diptych pair={pair2} />

      <ChapterMark numeral="III" title="Das Atelier" subtitle="Drei Prinzipien" />
      <ThreePillars />

      <ChapterMark
        numeral="IV"
        title="Die Salons"
        subtitle="Paris · Berlin · London"
        tone="dark"
      />
      <SalonsBand />
      <StepsTriple />

      <ChapterMark numeral="V" title="Das Journal" subtitle="Hefte des Hauses" />
      <JournalStrip />

      <EndCall />
    </>
  );
}
