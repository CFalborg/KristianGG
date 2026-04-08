import type { Metadata } from "next";
import Link from "next/link";
import AudienceCard from "@/components/AudienceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { getPersonSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Psykoterapeut & Hypnoterapeut i Odense | Kristian GG",
  description:
    "Reg. psykoterapeut og hypnoterapeut i Odense. TRÅD-metoden – nervesystemsbaseret terapi for private, virksomheder og kommuner på Fyn. Book gratis samtale.",
  path: "/",
});

const AUDIENCES = [
  {
    icon: "🌿",
    title: "Til dig",
    subtitle: "Privat terapi og nervesystemsregulering",
    bullets: [
      "Ro på nervesystemet",
      "Naturterapi på Fyn",
      "Psykoterapi, hypnose & NLP",
    ],
    href: "/til-dig",
    accentColor: "border-primary",
  },
  {
    icon: "🏢",
    title: "Til virksomheder",
    subtitle: "Workshops, foredrag og medarbejdertrivsel",
    bullets: [
      "Praksisnære stressworkshops",
      "Foredrag om nervesystemet",
      "Trivselsprogrammer",
    ],
    href: "/til-virksomheder",
    accentColor: "border-accent",
  },
  {
    icon: "🏛️",
    title: "Til kommuner",
    subtitle: "Faglig støtte, vikardækning og borgerforløb",
    bullets: [
      "Pædagogiske særforanstaltninger",
      "Faglig vikardækning",
      "Individuelle borgerforløb",
    ],
    href: "/til-kommuner",
    accentColor: "border-teal-700",
  },
];

const TRAAD_STEPS = [
  { letter: "T", word: "Tilknytning", desc: "Trygge relationer som fundament. Relation før metode – altid." },
  { letter: "R", word: "Regulering", desc: "Nervesystemsregulering og kropsbevidsthed som indgang til forandring." },
  { letter: "Å", word: "Ånde", desc: "Åndedrætsterapi og somatisk forankring aktiverer det parasympatiske system." },
  { letter: "D", word: "Dybde", desc: "Kognitiv og hypnoterapeutisk dybdebehandling forankrer varig forandring." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white">
        <div className="container-width py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">
              Reg. Psykoterapeut (FaDP) · Odense, Fyn
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-6">
              Find ro i nervesystemet – og varig forandring
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
              Jeg er Kristian G. G. Dansted, reg. psykoterapeut og hypnoterapeut. Med TRÅD-metoden
              hjælper jeg dig, din virksomhed eller din kommune med at skabe reel og varig forandring
              – i klinikken i Odense, online eller i naturen på Fyn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Book gratis samtale
              </Link>
              <Link href="/om" className="btn-secondary">
                Om Kristian
              </Link>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary-light" />
      </section>

      {/* 3-segment audience cards */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Hvem kan jeg hjælpe?"
            subtitle="Jeg arbejder med tre målgrupper – med samme menneskesyn og samme forankring i nervesystemet."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {AUDIENCES.map((a) => (
              <AudienceCard key={a.href} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* TRÅD-metoden */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="TRÅD-metoden"
                subtitle="En integreret tilgang der kombinerer det bedste fra nervesystemsbaseret terapi, åndedrætsterapi, hypnoterapi og kognitiv psykologi."
              />
              <p className="text-text-muted leading-relaxed mb-6">
                TRÅD er ikke en enkelt teknik – det er en filosofi om, hvordan varig forandring
                opstår. Den er udviklet ud fra Kristians uddannelser, kliniske erfaring og
                personlige rejse fra en alvorlig rygulykke til psykoterapeut med Ildsjælepris.
              </p>
              <Link href="/om" className="btn-secondary">
                Læs mere om tilgangen
              </Link>
            </div>
            <div className="space-y-4">
              {TRAAD_STEPS.map((step) => (
                <div key={step.letter} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{step.letter}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">{step.word}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-light rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-4xl font-bold">K</span>
              </div>
              <p className="font-bold text-lg text-text-dark">Kristian G. G. Dansted</p>
              <p className="text-text-muted text-sm mt-1">Reg. Psykoterapeut (FaDP)</p>
              <p className="text-text-muted text-sm">Master Neuro Hypnoterapeut · Master NLP</p>
              <p className="text-text-muted text-sm">Åndedrætsterapeut · KAT/DAT</p>
              <div className="mt-3 inline-flex items-center gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted text-xs mt-1">Top-rated på Trustpilot</p>
              <p className="mt-3 text-xs text-primary font-medium">🏆 Ildsjælepris 2019</p>
            </div>
            <div>
              <SectionHeading title="En personlig rejse bag faglig dybde" />
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Jeg hedder Kristian og har selv oplevet, hvad det vil sige at skulle genopbygge
                  sig selv fra bunden. Efter en alvorlig rygulykke som 21-årig håndværker fandt jeg
                  vejen til psykoterapien – og har siden 2019 hjulpet hundredvis af mennesker med
                  at finde tilbage til sig selv.
                </p>
                <p>
                  Jeg er uddannet reg. psykoterapeut (FaDP), Master Neuro Hypnoterapeut, Master NLP
                  Practitioner og åndedrætsterapeut. Min pædagogiske baggrund fra botilbud og
                  asylcentre giver mig en særlig forståelse for sårbare grupper og komplekse forløb.
                </p>
              </div>
              <Link href="/om" className="btn-primary mt-6 inline-block">
                Læs min historie
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        heading="Tag det første skridt i dag"
        text="Book en gratis og uforpligtende telefonsamtale. Jeg vender tilbage inden for 24 timer."
        buttonText="Book gratis samtale"
      />
    </>
  );
}
