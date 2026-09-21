import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import ConseilEcrin from "@/components/conseil/ConseilEcrin";

export const metadata = {
  title: "Conseil privé",
  description:
    "Un mot à la maison. Un écrin s’ouvre, une carte vous attend — et notre conseil vous est personnellement destiné.",
};

export default function ConseilPage() {
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow
            numeral="Conseil"
            label="La maison à votre écoute"
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={["Conseillez-", "moi."]}
                delayStep={140}
                style={{ fontSize: "clamp(64px, 12vw, 210px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Une conversation à quatre yeux. Ouvrez l&rsquo;écrin,
                glissez quelques mots à la maison.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          <ConseilEcrin />
        </div>
      </section>
    </>
  );
}
