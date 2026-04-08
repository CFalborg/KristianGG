import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Borgerforløb – Psykoterapi henvist af kommune på Fyn",
  description:
    "Individuelle terapeutiske forløb for borgere henvist af kommunen. Reg. psykoterapeut i Odense tilbyder støtte til borgere med stress, angst og sociale udfordringer på Fyn.",
  path: "/til-kommuner/borgerforloeb",
});

const HELPS_WITH = [
  "Stress og udbrændthed",
  "Angst og bekymringer",
  "Depression og lavt humør",
  "Traumer og PTSD",
  "Sociale udfordringer",
  "Manglende selvtillid",
  "Sorg og tab",
  "Livsovergange",
  "Reintegration i arbejdslivet",
  "Uønskede mønstre og vaner",
];

export default function BorgerforloebPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Borgerforløb – kommunal henvisning", "Individuelle terapeutiske forløb for borgere henvist af kommunen. Reg. psykoterapeut i Odense.")} />
      <Hero
        title="Borgerforløb"
        subtitle="Individuelle terapeutiske forløb for borgere der har brug for professionel støtte – enten som selvbetaler eller via kommunal aftale eller abonnement."
        ctaText="Kontakt for samarbejde"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvad tilbyder borgerforløb?" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Mange borgere der modtager kommunal støtte vil profitere af et terapeutisk forløb som
              supplement til den sociale indsats. Som reg. psykoterapeut med bred metodisk baggrund
              kan Kristian tilbyde kortere forløb (4–8 sessioner) der konkret styrker borgerens
              mentale sundhed, mestringsevne og livskvalitet.
            </p>
            <p>
              Forløbene kan aftales direkte med kommunen som en del af borgerens indsatsplan, eller
              borgeren kan henvende sig selvstændigt. Alle forløb er fortrolige og professionelt
              håndteret.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Hvad kan forløbene hjælpe med?" centered />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {HELPS_WITH.map((item) => (
              <div key={item} className="bg-white rounded-lg px-3 py-2.5 text-sm text-text-muted text-center border border-gray-100 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Priser og aftaleformer" />
          <div className="space-y-4">
            {[
              {
                title: "Individuel aftale",
                text: "Borgeren betaler selv. Normal session 60 min: 650 kr. Ungestøtte 60 min: 400 kr (forudsætter kommunal aftale).",
              },
              {
                title: "Kommunal leverandøraftale",
                text: "Kommunen indgår en rammeaftale der giver borgere adgang til sessioner til favorabel pris. Kontakt for vilkår.",
              },
              {
                title: "Abonnementsmodel",
                text: "Fast månedlig aftale der sikrer en vis kapacitet til kommunens borgere. Fleksibel og forudsigelig.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-bg-cream rounded-lg border border-gray-100">
                <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interesseret i et samarbejde?"
        text="Kontakt mig for en uforpligtende snak om borgerforløb og mulige aftaleformer."
        buttonText="Kontakt for samarbejde"
      />
    </>
  );
}
