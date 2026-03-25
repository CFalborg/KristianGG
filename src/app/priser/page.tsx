import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PriceCard from "@/components/PriceCard";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Priser – Hypnose & NLP Terapi",
  description:
    "Se priser for hypnose og NLP terapi hos Kristian GG i Odense. Enkeltsession fra 850 kr. Pakketilbud tilgængelige. Gratis uforpligtende samtale.",
  path: "/priser",
});

const PRICES = [
  {
    title: "Gratis samtale",
    price: "Gratis",
    duration: "Ca. 15–20 minutter · Telefonsamtale",
    features: [
      "Uforpligtende introduktion",
      "Vi afklarer dine behov",
      "Du spørger, jeg svarer",
      "Ingen binding",
    ],
    highlighted: false,
    note: "Den gratis samtale er altid det første skridt. Ingen forpligtelse.",
  },
  {
    title: "Enkeltsession",
    price: "850",
    duration: "Ca. 60–75 minutter · Klinik eller online",
    features: [
      "Fuld terapeutisk session",
      "Hypnose og/eller NLP",
      "Individuel tilpasning",
      "Hjemmeøvelser inkluderet",
    ],
    highlighted: false,
  },
  {
    title: "Pakke – 3 sessioner",
    price: "2.250",
    duration: "3 × 60–75 min · Spar 300 kr",
    features: [
      "Alt fra enkeltsession",
      "Samlet og struktureret forløb",
      "Løbende evaluering",
      "Spar 100 kr pr. session",
    ],
    highlighted: true,
  },
  {
    title: "Pakke – 5 sessioner",
    price: "3.500",
    duration: "5 × 60–75 min · Spar 750 kr",
    features: [
      "Alt fra enkeltsession",
      "Intensivt og dybtgående forløb",
      "Prioriteret booking",
      "Spar 150 kr pr. session",
    ],
    highlighted: false,
  },
];

export default function PriserPage() {
  return (
    <>
      <Hero
        title="Priser"
        subtitle="Gennemsigtige priser uden skjulte omkostninger. Start altid med en gratis og uforpligtende telefonsamtale."
        ctaText="Book en gratis samtale"
        ctaHref="/kontakt"
        centered
      />

      {/* Price cards */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICES.map((p) => (
              <PriceCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="Praktisk information"
            subtitle="Alt du skal vide om betaling, afbestilling og booking"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">💳 Betaling</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  MobilePay (foretrukket)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Kontant ved fremmøde
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Bankoverførsel forud for online sessioner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Betaling sker ved sessionens start
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">📅 Afbestilling</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Afbud senest 24 timer før aftalt tid
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Ved afbud under 24 timer opkræves 50% af sessionsprisen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Fleksibel ombooking ved sygdom
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">🏥 Tilskud</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Hypnoterapi og NLP er som udgangspunkt ikke dækket af det offentlige sygesikring.
                Tjek din private sygeforsikring – nogle forsikringer yder tilskud til alternativ
                og komplementær behandling. Spørg din forsikring om vilkårene.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">📍 Lokation</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Klinik i Odense (adresse oplyses ved booking)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Online via video (Zoom/Teams)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Parkering tilgængelig
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  God adgang med offentlig transport
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Usikker på, hvad du har brug for?"
        text="Ring eller skriv til mig for en helt uforpligtende snak om dine muligheder. Gratis telefonsamtale inkluderet."
      />
    </>
  );
}
