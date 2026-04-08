import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Faglig vikardækning – Psykoterapeut til sociale institutioner på Fyn",
  description:
    "Kvalificeret faglig vikardækning til botilbud og sociale institutioner på Fyn. Reg. psykoterapeut med pædagogisk erfaring. Fleksibel og professionel løsning.",
  path: "/til-kommuner/vikardaekning",
});

export default function VikardaekningPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Faglig vikardækning", "Kvalificeret faglig vikardækning til sociale institutioner og botilbud på Fyn og i Syddanmark.")} />
      <Hero
        title="Faglig vikardækning"
        subtitle="Kvalificeret og fleksibel vikardækning til sociale institutioner og botilbud – med den ekstra dimension at vikaren er reg. psykoterapeut med pædagogisk erfaring."
        ctaText="Kontakt for samarbejde"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvad tilbyder jeg?" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Mange sociale institutioner har behov for faglige vikarer der hurtigt kan indgå i
              eksisterende teams og levere høj kvalitet fra dag ét. Som reg. psykoterapeut med
              praktisk pædagogisk erfaring fra botilbud og asylcentre kan Kristian udfylde den rolle.
            </p>
            <p>
              Vikardækning handler ikke kun om at have &apos;en voksen til stede&apos; – det handler om at
              have faglig kompetence der kan håndtere de situationer der opstår, understøtte borgernes
              trivsel og bidrage konstruktivt til det faglige miljø.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Hvad jeg bringer med" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🧠", title: "Terapeutisk baggrund", desc: "Reg. psykoterapeut (FaDP) med uddannelse i bl.a. KAT, DAT, NLP og åndedrætsterapi." },
              { icon: "🏠", title: "Pædagogisk erfaring", desc: "Praktisk erfaring fra botilbud og asylcenter med udsatte borgere og komplekse situationer." },
              { icon: "⚡", title: "Fleksibilitet", desc: "Kan træde til med kort varsel og tilpasse sig hurtigt til institutionens kultur og behov." },
              { icon: "📋", title: "Dokumentation", desc: "Erfaren i pædagogisk dokumentation, handleplaner og rapportskrivning." },
              { icon: "🤝", title: "Samarbejde", desc: "Stærk i tværfagligt samarbejde med psykologer, socialrådgivere og plejepersonale." },
              { icon: "🌱", title: "Anerkendende tilgang", desc: "Traumeinformeret og anerkendende pædagogisk praksis der møder borgeren der, hvor de er." },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Praktisk information" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Institutionstyper", value: "Botilbud, asylcentre, dagtilbud" },
              { label: "Fleksibilitet", value: "Kort varsel muligt" },
              { label: "Geografisk rækkevidde", value: "Fyn og Syddanmark" },
              { label: "Timebasis eller aftale", value: "Tilpasses jeres behov" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 p-4 bg-bg-cream rounded-lg border border-gray-100">
                <span className="text-primary font-semibold text-sm w-40 flex-shrink-0">{item.label}</span>
                <span className="text-text-muted text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Har I brug for en faglig vikar?"
        text="Kontakt mig for en snak om jeres behov og mine muligheder for at hjælpe."
        buttonText="Kontakt for samarbejde"
      />
    </>
  );
}
