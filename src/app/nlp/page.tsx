import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema, getFAQSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "NLP Terapeut i Odense – NLP Terapi Online",
  description:
    "NLP terapi (Neuro-Lingvistisk Programmering) i Odense og online. Ændr begrænsende tankemønstre, overvind forhindringer og nå dine mål med certificeret NLP terapeut.",
  path: "/nlp",
});

const NLP_BENEFITS = [
  { icon: "🧩", title: "Ændr tankemønstre", desc: "Erstat negative og begrænsende tankemønstre med ressourcestærke, positive mønstre." },
  { icon: "🦋", title: "Overvind fobier", desc: "Hurtig og effektiv behandling af fobier og irrationelle frygter." },
  { icon: "🗣️", title: "Bedre kommunikation", desc: "Lær at kommunikere klarere, mere overbevisende og med større empati." },
  { icon: "🌟", title: "Øg selvtillid", desc: "Byg en stærk og autentisk selvtillid, der holder i alle livssituationer." },
  { icon: "🎯", title: "Sæt og nå mål", desc: "Definer klare mål og programmér din underbevidsthed til at nå dem." },
  { icon: "🔓", title: "Fjern begrænsninger", desc: "Identificer og fjern de overbevisninger der holder dig tilbage i livet." },
];

const FAQ_ITEMS = [
  {
    question: "Hvad er NLP?",
    answer:
      "NLP (Neuro-Lingvistisk Programmering) er en samling af kommunikations- og forandringsteknikker, der fokuserer på sammenhængen mellem tanker, sprog og adfærd. NLP hjælper dig med at forstå og omprogrammere de mønstre, der styrer dit liv.",
  },
  {
    question: "Hvad er forskellen på NLP og hypnose?",
    answer:
      "Hypnose arbejder primært via en hypnotisk tilstand med direkte adgang til underbevidstheden. NLP er mere samtalebaseret og bruger specifikke teknikker til at ændre tankemønstre og adfærd i normal bevidst tilstand. De to metoder supplerer hinanden godt og bruges ofte i kombination.",
  },
  {
    question: "Hvor hurtigt virker NLP?",
    answer:
      "Mange klienter oplever mærkbare forandringer allerede fra første session. NLP er generelt en hurtigvirkende terapiform sammenlignet med traditionel samtaleterapi. Antallet af sessioner afhænger af din specifikke udfordring.",
  },
  {
    question: "Er NLP videnskabeligt anerkendt?",
    answer:
      "NLP-teknikker er baseret på studier af effektiv kommunikation og adfærdsændring. Mange NLP-metoder er dokumenteret effektive, og NLP bruges af coacher, terapeuter og ledere verden over. Kombineret med hypnoterapi giver det stærke resultater.",
  },
];

export default function NLPPage() {
  const serviceSchema = getServiceSchema(
    "NLP Terapi",
    "Neuro-Lingvistisk Programmering (NLP) til at ændre begrænsende tankemønstre og nå dine mål."
  );
  const faqSchema = getFAQSchema(FAQ_ITEMS);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        title="NLP Terapeut i Odense"
        subtitle="Neuro-Lingvistisk Programmering til varig personlig forandring. Ændr dine tankemønstre, overvind dine begrænsninger og nå dine mål – i Odense eller online."
        ctaText="Book en tid"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      {/* What is NLP */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <SectionHeading
              title="Hvad er NLP?"
              subtitle="En kraftfuld metode til personlig udvikling og forandring"
            />
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                NLP – Neuro-Lingvistisk Programmering – er en samling af teknikker og modeller, der
                handler om, hvordan vores hjerne (neuro) bruger sprog (lingvistisk) til at skabe
                vores subjektive oplevelse af verden og vores adfærd (programmering).
              </p>
              <p>
                NLP blev udviklet i 1970&apos;erne af Richard Bandler og John Grinder, der studerede
                dygtige terapeuter og kommunikatorer for at finde ud af, hvad der skabte deres
                succes. I dag bruges NLP af terapeuter, coaches, ledere og sportsfolk verden over.
              </p>
              <p>
                Som certificeret NLP-terapeut hjælper jeg dig med at identificere og ændre de
                ubevidste mønstre, der holder dig tilbage – og erstatte dem med ressourcestærke
                mønstre, der hjælper dig frem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="NLP kan hjælpe dig med"
            subtitle="NLP er en fleksibel metode med bred anvendelse"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NLP_BENEFITS.map((b) => (
              <div key={b.title} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{b.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined with hypnosis */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <SectionHeading
              title="NLP kombineret med hypnose"
              subtitle="Synergi der giver kraftfulde og hurtige resultater"
            />
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Mange af mine klienter oplever de bedste resultater, når NLP kombineres med
                hypnoterapi. De to metoder supplerer hinanden perfekt: NLP arbejder bevidst med
                dine tankemønstre og kommunikation, mens hypnose giver direkte adgang til
                underbevidstheden og forankrer forandringerne dybere.
              </p>
              <p>
                Denne kombination giver hurtigere resultater end de to metoder brugt enkeltvis –
                og forandringerne holder bedre på lang sigt.
              </p>
            </div>
            <div className="mt-8 p-6 bg-primary-light rounded-xl border-l-4 border-primary">
              <p className="text-primary font-semibold mb-2">
                Kombineret NLP & Hypnose-forløb
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                I mine sessioner kombinerer jeg altid de bedste elementer fra NLP og hypnoterapi,
                tilpasset netop dine behov og mål. Du får det bedste fra begge verdener.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Ofte stillede spørgsmål om NLP" />
          <div className="max-w-2xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Vil du prøve NLP terapi?"
        text="Tag det første skridt. Book en gratis og uforpligtende telefonsamtale i dag."
      />
    </>
  );
}
