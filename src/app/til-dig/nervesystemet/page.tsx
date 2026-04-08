import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema, getFAQSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Nervesystemet & ro – Åndedrætsterapi og stressregulering i Odense",
  description:
    "Lær at regulere dit nervesystem med åndedrætsterapi, mindfulness og somatiske teknikker. Effektivt mod stress, angst og søvnproblemer i Odense og Fyn.",
  path: "/til-dig/nervesystemet",
});

const FAQ_ITEMS = [
  {
    question: "Hvad vil det sige at regulere nervesystemet?",
    answer:
      "Nervesystemsregulering handler om at hjælpe din krop og dit sind med at skifte fra en aktiveret (stresset) tilstand til en rolig, tryg tilstand. Når nervesystemet er reguleret, sover du bedre, tænker klarere og reagerer mere hensigtsmæssigt på udfordringer.",
  },
  {
    question: "Hvad er åndedrætsterapi?",
    answer:
      "Åndedrætsterapi bruger bevidst vejrtrækning til at aktivere det parasympatiske nervesystem – den del der er ansvarlig for ro og restitution. Det er videnskabeligt dokumenteret effektivt mod stress, angst og kronisk aktivering.",
  },
  {
    question: "Kan det hjælpe mod søvnproblemer?",
    answer:
      "Ja. Mange søvnproblemer skyldes et overaktiveret nervesystem. Med nervesystemsbaserede teknikker – bl.a. åndedrætsterapi og visualiseringer – kan du lære at 'skrue ned' og falde i søvn naturligt.",
  },
  {
    question: "Hvor mange sessioner kræves det?",
    answer:
      "Mange oplever tydelig forskel allerede efter 1–3 sessioner. Et fuldt forløb er typisk 4–8 sessioner, afhængigt af din situation og dine mål.",
  },
];

export default function NervesystemetPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Nervesystemsregulering & Åndedrætsterapi", "Nervesystemsbaseret terapi med åndedrætsterapi, mindfulness og somatiske teknikker mod stress og angst i Odense.")} />
      <JsonLd data={getFAQSchema(FAQ_ITEMS)} />

      <Hero
        title="Nervesystemet & ro"
        subtitle="Stress, angst og tankemylder er ofte tegn på et overaktiveret nervesystem. Jeg hjælper dig med at finde tilbage til ro – gennem kroppen, ikke mod den."
        ctaText="Book gratis samtale"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvorfor nervesystemet?" subtitle="Forstå roden til stress og uro" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Vores nervesystem er designet til at reagere på trusler – men i moderne tid er det
              konstant aktiveret af deadlines, skærme, sociale forventninger og bekymringer. Resultatet
              er kronisk stress, angst, søvnproblemer og en følelse af aldrig rigtig at koble fra.
            </p>
            <p>
              Nervesystemsbaseret terapi starter ikke med at analysere tankerne – den starter med
              kroppen. Når nervesystemet er reguleret, løser mange psykiske udfordringer sig selv
              eller bliver langt lettere at arbejde med.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Metoder vi bruger" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "💨", title: "Åndedrætsterapi", desc: "Aktiverer det parasympatiske nervesystem direkte via vejrtrækning. Hurtigt virkende og let at bruge i hverdagen." },
              { icon: "🧘", title: "Mindfulness", desc: "Øger nærvær og reducerer tankemylder. Træner evnen til at observere frem for at reagere automatisk." },
              { icon: "🫀", title: "Somatiske teknikker", desc: "Kropsbaserede øvelser der frigiver spænding og signalerer tryghed til nervesystemet." },
              { icon: "🌊", title: "Visualisering", desc: "Guidede visualiseringer der aktiverer ro, ressourcer og indre tryghed." },
              { icon: "🧠", title: "Hypnoterapi", desc: "Dyb afslapning der giver direkte adgang til underbevidstheden og forankrer ro på et dybt niveau." },
              { icon: "🌙", title: "Søvnoptimering", desc: "Kombinerede teknikker til at regulere nervesystemet og skabe naturlig søvn." },
            ].map((m) => (
              <div key={m.title} className="card">
                <div className="text-2xl mb-3">{m.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{m.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading title="Ofte stillede spørgsmål" />
          <div className="max-w-2xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTASection heading="Klar til at finde ro?" text="Book en gratis telefonsamtale, og lad os tale om, hvad der holder dig tilbage fra ro." />
    </>
  );
}
