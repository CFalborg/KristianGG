import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Til kommuner – Pæd. særforanstaltninger, vikardækning & borgerforløb på Fyn",
  description:
    "Pædagogiske særforanstaltninger, faglig vikardækning og individuelle borgerforløb til kommuner på Fyn og i Syddanmark. Reg. psykoterapeut med erfaring fra botilbud og asylcenter.",
  path: "/til-kommuner",
});

const SERVICES = [
  {
    icon: "🏠",
    title: "Pæd. særforanstaltninger",
    description: "Specialiseret pædagogisk støtte til udsatte unge og borgere med komplekse behov. Erfaring fra botilbud og asylcentre.",
    href: "/til-kommuner/saerforanstaltninger",
  },
  {
    icon: "📋",
    title: "Vikardækning",
    description: "Faglig og kvalificeret vikardækning til sociale institutioner og botilbud. Psykoterapeut-baggrund sikrer faglig kvalitet.",
    href: "/til-kommuner/vikardaekning",
  },
  {
    icon: "🤝",
    title: "Borgerforløb",
    description: "Individuelle terapeutiske forløb for borgere henvist af kommunen. Støtte til borgere med stress, angst og sociale udfordringer.",
    href: "/til-kommuner/borgerforloeb",
  },
];

export default function TilKommunerPage() {
  return (
    <>
      <Hero
        title="Til kommuner"
        subtitle="Specialiseret pædagogisk og terapeutisk bistand til kommunale institutioner og borgere på Fyn og i Syddanmark."
        ctaText="Kontakt for samarbejde"
        ctaHref="/kontakt"
      />
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading title="Ydelser til kommuner" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Baggrund og erfaring" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Kristian G. G. Dansted er reg. psykoterapeut (FaDP) med solid praktisk erfaring fra
              pædagogisk arbejde på botilbud og asylcentre. Den kombination af terapeutisk uddannelse
              og pædagogisk praksis giver en unik faglig profil der matcher kommunale behov.
            </p>
            <p>
              Med bred erfaring i arbejdet med udsatte unge, traumatiserede borgere og komplekse
              sociale situationer leverer Kristian faglig bistand af høj kvalitet – hvad enten det
              er særforanstaltninger, vikardækning eller individuelle borgerforløb.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { num: "2019", label: "Ildsjælepris for frivilligt socialt arbejde" },
              { num: "6+", label: "Terapeutiske metoder og certificeringer" },
              { num: "Fyn", label: "Primær geografisk base, kører ud" },
            ].map((stat) => (
              <div key={stat.label} className="card">
                <p className="text-2xl font-bold text-primary mb-1">{stat.num}</p>
                <p className="text-text-muted text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="Interesseret i et kommunalt samarbejde?"
        text="Kontakt mig for en uforpligtende snak om, hvordan jeg kan bidrage til jeres indsatser."
        buttonText="Kontakt for samarbejde"
      />
    </>
  );
}
