import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Medarbejdertrivsel – Stresshåndtering & mental sundhed til virksomheder",
  description:
    "Individuelle og gruppebaserede trivselsprogrammer til virksomheder på Fyn og i Danmark. Reg. psykoterapeut hjælper dine medarbejdere med stress og mental sundhed.",
  path: "/til-virksomheder/trivsel",
});

const FORMATS = [
  {
    icon: "👤",
    title: "Individuelle forløb",
    desc: "Kortere terapeutiske forløb (4–8 sessioner) for medarbejdere under pres. Fortroligt, professionelt og resultatorienteret.",
  },
  {
    icon: "👥",
    title: "Gruppeforløb",
    desc: "Strukturerede gruppeforløb for teams eller afdelinger. Bygger fælles sprog om stress, trivsel og psykologisk tryghed.",
  },
  {
    icon: "📋",
    title: "Trivselsmåling & sparring",
    desc: "Kortlæg stressniveauet i organisationen og få konkrete anbefalinger til indsatser og prioriteringer.",
  },
  {
    icon: "🎯",
    title: "Ledercoaching",
    desc: "Støtte til ledere der ønsker at styrke deres mentale robusthed og evne til at navigere i komplekse menneskelige situationer.",
  },
];

export default function TrivselPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Medarbejdertrivsel til virksomheder", "Individuelle og gruppebaserede trivselsprogrammer der styrker mental sundhed og reducerer stress i virksomheder.")} />
      <Hero
        title="Medarbejdertrivsel"
        subtitle="Stress koster den gennemsnitlige danske virksomhed op mod 37.000 kr. pr. sygemeldt medarbejder. Et investering i trivsel betaler sig hurtigt."
        ctaText="Kontakt for tilbud"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Ydelsesformater"
            subtitle="Jeg tilpasser indsatsen til jeres situation, størrelse og budget."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {FORMATS.map((f) => (
              <div key={f.title} className="card">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvad indeholder et trivselsprogram?" />
          <div className="space-y-4">
            {[
              { step: "1", title: "Behovsafdækning", text: "Vi starter med en uforpligtende samtale om jeres situation, behov og ønsker. Hvad ser I? Hvad vil I gerne opnå?" },
              { step: "2", title: "Skræddersyet program", text: "Jeg sammensætter et program der passer til jeres virksomhed – format, varighed, indhold og opfølgning." },
              { step: "3", title: "Gennemførelse", text: "Sessioner afholdes enten hos jer, i klinikken eller online. Alt er fortroligt og professionelt håndteret." },
              { step: "4", title: "Evaluering og opfølgning", text: "Vi måler effekten og justerer undervejs. Jeg er tilgængelig for spørgsmål mellem sessioner." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvem er det for?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Virksomheder med høj stressforekomst",
              "Teams der har oplevet store forandringer",
              "Ledere der ønsker stærkere trivselsfokus",
              "HR-afdelinger der søger ekstern støtte",
              "Virksomheder med høj personaleomsætning",
              "Organisationer der investerer i mental sundhed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-bg-cream rounded-lg">
                <span className="text-primary font-bold">✓</span>
                <span className="text-text-muted text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Lad os tale om jeres behov"
        text="Kontakt mig for en uforpligtende samtale om, hvordan jeg kan støtte jeres medarbejdere og organisation."
        buttonText="Kontakt for tilbud"
      />
    </>
  );
}
