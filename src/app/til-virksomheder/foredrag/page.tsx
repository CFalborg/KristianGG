import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Foredrag om stress & overtænkning – Virksomheder i Odense & Fyn",
  description:
    "Engagerende foredrag om nervesystemet, overtænkning og mental robusthed til virksomheder. Certificeret psykoterapeut og foredragsholder. Kontakt for tilbud.",
  path: "/til-virksomheder/foredrag",
});

const TOPICS = [
  {
    icon: "🧬",
    title: "Forstå dit nervesystem",
    desc: "Videnskabelig og letforståelig gennemgang af stressreaktionen, aktivering og hvad der faktisk sker i kroppen under pres.",
  },
  {
    icon: "🧠",
    title: "Overtænkning – fra tankemylder til ro",
    desc: "Hvorfor overtænker vi? Og hvad kan vi gøre ved det? Et foredrag om hjernens autopilot og konkrete strategier til at bryde mønstret.",
  },
  {
    icon: "💨",
    title: "Åndedræt som lederværktøj",
    desc: "Tre enkle åndedrætsteknikker der kan bruges i mødelokalet, under pres og i konfliktsituationer – demonstreret live.",
  },
  {
    icon: "🔋",
    title: "Mental robusthed & restitution",
    desc: "Hvad adskiller dem der holder ud fra dem der brænder ud? Evidensbaseret viden om restitution, recovery og bæredygtig performance.",
  },
  {
    icon: "🤝",
    title: "Psykologisk tryghed på arbejdspladsen",
    desc: "Hvad det er, hvorfor det er afgørende for performance, og hvad ledere og medarbejdere konkret kan gøre for at skabe det.",
  },
  {
    icon: "🌱",
    title: "Fra stress til styrke",
    desc: "Personlig fortælling kombineret med faglig viden. Inspirerende og ærligt foredrag om at vende modgang til vækst.",
  },
];

export default function ForedragPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Foredrag til virksomheder", "Engagerende foredrag om nervesystemet, overtænkning og mental robusthed til virksomheder og organisationer.")} />
      <Hero
        title="Foredrag til virksomheder"
        subtitle="Faglig viden der inspirerer, underholder og giver dine medarbejdere konkrete redskaber – leveret af en certificeret psykoterapeut med personlig erfaring."
        ctaText="Kontakt for tilbud"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Foredragstemaer"
            subtitle="Alle foredrag kan holdes som keynote (45–60 min) eller som et længere oplæg med øvelser og dialog (90–120 min)."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPICS.map((t) => (
              <div key={t.title} className="card">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{t.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Populært foredrag: Overtænkning" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              &ldquo;Overtænkning – fra tankemylder til indre ro&rdquo; er det mest bestilte foredrag.
              Det tager udgangspunkt i hverdagsoplevelser vi alle kender: bekymringen der ikke vil
              stoppe, beslutningen der aldrig landes, tankerne der kører i ring kl. 02 om natten.
            </p>
            <p>
              Foredraget kombinerer neuropsykologi, mindfulness og konkrete teknikker – og slutter
              altid med en fælles øvelse som deltagerne kan bruge allerede samme aften.
            </p>
          </div>
          <div className="mt-6 p-5 bg-white rounded-xl border-l-4 border-primary">
            <p className="text-sm text-text-muted italic leading-relaxed">
              &ldquo;Kristian formåede at gøre kompleks viden om hjernen letforståelig og underholdende.
              Alle deltagere forlod med noget de konkret kunne bruge. Vi har fået mange positive
              tilbagemeldinger.&rdquo;
            </p>
            <p className="text-xs text-text-muted mt-3 font-semibold">— HR-chef, mellemstor virksomhed på Fyn</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Praktisk information" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Varighed", value: "45 min – 2 timer (tilpasses)" },
              { label: "Deltagere", value: "10–500+ personer" },
              { label: "Lokation", value: "Hos jer eller i konferencelokale" },
              { label: "Format", value: "Keynote eller interaktivt oplæg" },
              { label: "Geografisk rækkevidde", value: "Fyn, Syddanmark, hele DK" },
              { label: "Pris", value: "Efter aftale – kontakt for tilbud" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 p-4 bg-bg-cream rounded-lg border border-gray-100">
                <span className="text-primary font-semibold text-sm w-32 flex-shrink-0">{item.label}</span>
                <span className="text-text-muted text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Book et foredrag"
        text="Kontakt mig for et uforpligtende tilbud. Jeg tilpasser altid foredraget til jeres målgruppe og anledning."
        buttonText="Kontakt for tilbud"
      />
    </>
  );
}
