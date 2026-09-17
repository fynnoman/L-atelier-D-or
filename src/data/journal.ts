export type Cahier = {
  slug: "geste-juste" | "quatre-atmospheres" | "quatre-vingts-euros";
  numeral: "I" | "II" | "III";
  rubric: "Handwerk" | "Kollektion" | "Preis";
  title: string;
  chapo: string;
  read: string;
  date: string;
  tone: "warm" | "ink" | "parchment";
  body: string[];
};

export const CAHIERS: Cahier[] = [
  {
    slug: "geste-juste",
    numeral: "I",
    rubric: "Handwerk",
    title: "Der richtige Griff, drei Zentimeter vor dem Gesicht",
    chapo:
      "Vierzehn Handgriffe pro Fassung. Vier Personen. Eine einzige Regel: Was der Hand gehört, bleibt bei der Hand.",
    read: "6 Min.",
    date: "September",
    tone: "warm",
    body: [
      "Das Atelier belegt zwei Etagen in einem Gebäude im VIII. Arrondissement. Hohe Fenster, Nordlicht, Holzböden. Nichts renoviert, wo es nicht nötig war. Man betritt es, wie man sein Zuhause betritt.",
      "Das Material erreicht uns in Platten: italienisches Acetat, gegossen bei Mazzucchelli in Castiglione Olona. Ein dickes, dichtes Acetat, tief gefärbt — jenes, das wir bevorzugen, weil es die Feile ohne Klage annimmt.",
      "Jede Fassung durchläuft vierzehn Handgriffe. Vier Personen. Anzeichnen, Zuschnitt, Einsetzen des Titankerns, Feilen, Polieren mit Chamoisleder, Prüfung unter streifendem Licht — dann die Endpolitur.",
      "Die Endpolitur ist meine Aufgabe. Eine Fassung verlässt das Atelier nicht, solange sie das Licht noch wie ein Metall bricht. Sie soll es halten, wie eine Haut es hält.",
      "Wir automatisieren nicht, was das Haus ausmacht. Handgriffe delegieren wir nicht. Eine Maschine schleift schneller — sie kann nicht entscheiden, wann sie aufhört.",
      "Jedes Exemplar wird von Hand nummeriert, an der Innenseite des linken Bügels, in blauer Tinte. Nur das unterscheidet Ihr Paar von unserem.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    numeral: "II",
    rubric: "Kollektion",
    title: "Vier Atmosphären, ein einziger Blick",
    chapo:
      "Die erste Kollektion zeichnet keine Fassungen. Sie zeichnet Stunden, Orte, Rollen.",
    read: "5 Min.",
    date: "September",
    tone: "ink",
    body: [
      "Roi. Vier Atmosphären. Der Salon, die Jagd, die Kapelle, das Dîner. Vier Arten, einen Raum zu betreten.",
      "Roi Rouge gehört dem Abend: 22:10 Uhr, ein Privatsalon unter den Dächern, der Samt, der das Licht einen Augenblick länger hält als die Haut. Das Acetat aus der Masse geschnitten, die Goldscharniere verschraubt, der Goldfaden am Bügelende.",
      "Roi Noir ist ein langer Nachmittag, fünf Stunden vor dem Dîner. Eine hohe Panto, mattes Waldgrün, Titankern, patinierte Bronzenieten. Der trockene Tweed, das feuchte Holz — nichts zu viel.",
      "Roi Cristal ist ein blasser Morgen, 9:45 Uhr. Eine Landkapelle. Der lange Oval, Kristallacetat, Silberschrauben: ein Licht, das niemanden verrät.",
      "Roi Émeraude ist das Dîner unter den Bäumen, in einer Orangerie. Eine männliche Panto, Smaragd von Hand geschnitten, Goldfaden 18 Karat auf der Oberkante, pflaumenfarbenes Scharnier. Gläser klingen, Kerzen flackern.",
      "Jedes Stück kostet achtzig Euro. Jedes ist nummeriert. Keines wird im Schaufenster gezeigt.",
    ],
  },
  {
    slug: "quatre-vingts-euros",
    numeral: "III",
    rubric: "Preis",
    title: "Warum achtzig Euro, und nicht achtzigtausend",
    chapo:
      "Der Preis einer guten Flasche für eine handgefertigte Fassung. Keine Provokation, sondern ein Modell.",
    read: "4 Min.",
    date: "August",
    tone: "parchment",
    body: [
      "Achtzig Euro pro Stück. Der Preis eines ehrlichen Weins. Genau das wollen wir.",
      "Wir halten die Marge knapp. Wir verkaufen direkt. Wir verzichten auf Zwischenhändler. Eine Fassung muss nicht drei Schaufenster und zwei Kataloge durchlaufen, bevor sie auf ein Gesicht kommt.",
      "Wir wollen, dass die Roi getragen wird, nicht weggelegt. Dass sie zu Berufen gehört, zu Gesichtern, zu tätigen Leben — nicht nur zu Vitrinen.",
      "Luxus liegt hier nicht im Preis. Er liegt in der Materie, in der Geste, in der Zurückhaltung. Vier Stücke im ersten Jahr. Nicht mehr.",
      "Ein Haus definiert sich durch das, was es der Welt nicht hinzufügt. Wir verzichten auf drei Dinge: Kunststoff, Zwischenhändler, überflüssige Zugaben.",
      "Nichts zu viel, nichts zu wenig. Der richtige Preis. Die richtige Geste.",
    ],
  },
];

export const getCahier = (slug: string) =>
  CAHIERS.find((c) => c.slug === slug);
