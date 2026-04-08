import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Stressworkshop & Nervesystem-workshops til virksomheder – Odense & Fyn",
  description:
    "Praksisnære workshops om stresshåndtering og nervesystemet til virksomheder på Fyn og i Danmark. Certificeret psykoterapeut og foredragsholder. Kontakt for tilbud.",
  path: "/til-virksomheder/workshops",
});

const WORKSHOP_THEMES = [
  { icon: "🧬", title: "Forstå dit nervesystem", desc: "Videnskabelig og praksisnær viden om stress, aktivering og regulation. Alle deltager i øvelser." },
  { icon: "💨", title: "Åndedræt som redskab", desc: "Lær tre konkrete åndedrætsteknikker der kan bruges ved møder, konflikter og overbelastning." },
  { icon: "🧠", title: "Overtænkning & beslutningskraft", desc: "Forstå hvorfor vi overtænker og få konkrete strategier til at komme ud af tankemylderet." },
  { icon: "🌱", title: "Bæredygtige vaner", desc: "Vanedannelse, motivation og hvad der faktisk skal til for at ændre adfærd varigt." },
  { icon: "🤝", title: "Psykologisk tryghed", desc: "Hvad er psykologisk tryghed, hvorfor er det vigtigt, og hvordan skaber I det i jeres team?" },
  { icon: "🔋", title: "Restitution og recovery", desc: "Lær hvad der faktisk oplader batteriet – og hvad der bare distraherer." },
];

export default function WorkshopsPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Stressworkshops til virksomheder", "Praksisnære workshops om nervesystemet, stresshåndtering og mental sundhed til virksomheder på Fyn og i Danmark.")} />
      <Hero
        title="Workshops til virksomheder"
        subtitle="Praksisnær viden der gør en forskel – fra dag ét. Alle workshops kombinerer teori, øvelser og konkrete redskaber som dine medarbejdere tager med hjem."
        ctaText="Kontakt for tilbud"
        ctaHref="/kontakt"
      />
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading title="Workshop-temaer" subtitle="Alle workshops kan tilpasses jeres specifikke behov, branche og teamstørrelse." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOP_THEMES.map((w) => (
              <div key={w.title} className="card">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{w.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Praktisk information" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Varighed", value: "2–4 timer (tilpasses)" },
              { label: "Deltagere", value: "5–50 personer" },
              { label: "Lokation", value: "Hos jer eller i Odense" },
              { label: "Format", value: "Oplæg, øvelser og dialog" },
              { label: "Geografisk rækkevidde", value: "Fyn, Syddanmark, hele DK" },
              { label: "Pris", value: "Efter aftale – kontakt for tilbud" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 p-4 bg-white rounded-lg border border-gray-100">
                <span className="text-primary font-semibold text-sm w-32 flex-shrink-0">{item.label}</span>
                <span className="text-text-muted text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading="Book en workshop" text="Kontakt mig for et uforpligtende tilbud – jeg svarer inden for 24 timer." buttonText="Kontakt for tilbud" />
    </>
  );
}
