import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PriceCard from "@/components/PriceCard";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Priser – Psykoterapi & Hypnoterapi i Odense",
  description:
    "Priser for psykoterapi, hypnoterapi og NLP hos Kristian GG i Odense. Fra 450 kr. Gratis opstartsamtale. Ungestøtte fra 400 kr. Ingen skjulte omkostninger.",
  path: "/priser",
});

const PRICES = [
  {
    title: "Gratis opstartsamtale",
    price: "Gratis",
    duration: "Telefonisk · Ca. 15–20 minutter",
    features: [
      "Uforpligtende introduktion",
      "Vi afklarer dine behov og mål",
      "Du spørger, jeg svarer",
      "Ingen binding",
    ],
    highlighted: false,
    note: "Altid det første skridt. Kontakt mig direkte eller via kontaktformularen.",
  },
  {
    title: "Online samtale",
    price: "450",
    duration: "30 minutter · Video",
    features: [
      "Fokuseret og effektiv session",
      "Via Zoom eller Teams",
      "Opfølgning og sparring",
      "Betaling forud via MobilePay",
    ],
    highlighted: false,
  },
  {
    title: "Session",
    price: "650",
    duration: "60 minutter · Klinik eller online",
    features: [
      "Fuld terapeutisk session",
      "Hypnoterapi, NLP og/eller KAT",
      "Individuel tilpasning",
      "Hjemmeøvelser inkluderet",
    ],
    highlighted: false,
  },
  {
    title: "Fuld session",
    price: "900",
    duration: "90 minutter · Klinik eller online",
    features: [
      "Udvidet terapeutisk session",
      "Tid til dybdegående arbejde",
      "Alle metoder i spil",
      "Anbefales til nye klienter",
    ],
    highlighted: true,
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

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICES.map((p) => (
              <PriceCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Særlige priser" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-2">👶 Ungestøtte</h3>
              <p className="text-3xl font-bold text-primary mb-1">400 kr</p>
              <p className="text-text-muted text-sm mb-3">60 minutter</p>
              <p className="text-text-muted text-sm leading-relaxed">
                Individuel støtte til unge. Forudsætter kommunal aftale eller abonnement.
                Kontakt for mere information.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-2">🏢 Virksomheder & kommuner</h3>
              <p className="text-3xl font-bold text-primary mb-1">Efter aftale</p>
              <p className="text-text-muted text-sm mb-3">Tilpasses omfang og format</p>
              <p className="text-text-muted text-sm leading-relaxed">
                Workshops, foredrag, trivselsprogrammer og borgerforløb prissættes individuelt.
                Kontakt mig for et tilbud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Praktisk information"
            subtitle="Alt du skal vide om betaling, afbestilling og lokation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">💳 Betaling</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {["MobilePay (foretrukket)", "Kontant ved fremmøde", "Bankoverførsel forud for online sessioner", "Betaling sker ved sessionens start"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">📅 Afbestilling</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {["Afbud senest 24 timer før aftalt tid", "Ved afbud under 24 timer opkræves 50% af sessionsprisen", "Fleksibel ombooking ved sygdom"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">🏥 Tilskud</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Psykoterapi og NLP er som udgangspunkt ikke dækket af den offentlige sygesikring.
                Tjek din private sygeforsikring – nogle forsikringer yder tilskud til komplementær
                behandling. Spørg din forsikring om vilkårene.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">📍 Lokation</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {["Klinik: Lumbyvej 11, indgang B, 5000 Odense", "Online via video (Zoom/Teams)", "Hjemmebesøg på Fyn (ingen merpris)", "Parkering og god adgang med offentlig transport"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Usikker på, hvad du har brug for?"
        text="Ring eller skriv til mig for en helt uforpligtende snak om dine muligheder. Gratis telefonsamtale altid det første skridt."
      />
    </>
  );
}
