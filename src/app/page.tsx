import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { getPersonSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Hypnoterapeut & NLP Terapeut i Odense | Kristian GG",
  description:
    "Professionel hypnose og NLP terapi i Odense og online. Certificeret hypnoterapeut der hjælper med stress, angst, depression og personlig udvikling. Book i dag.",
  path: "/",
});

const SERVICES = [
  {
    icon: "🧠",
    title: "Hypnose",
    description:
      "Effektiv hypnoterapi mod stress, angst, fobier, søvnproblemer og uønskede vaner. Professionel og tryg behandling i Odense eller online.",
    href: "/hypnosen",
  },
  {
    icon: "🎯",
    title: "NLP Terapi",
    description:
      "Neuro-Lingvistisk Programmering til at ændre begrænsende tankemønstre, overvinde forhindringer og nå dine mål hurtigere.",
    href: "/nlp",
  },
  {
    icon: "💬",
    title: "Terapi",
    description:
      "Skræddersyet samtaleterapi kombineret med hypnose og NLP. Et helhedsorienteret forløb tilpasset netop dine udfordringer.",
    href: "/terapi",
  },
  {
    icon: "🏠",
    title: "Online Terapi",
    description:
      "Få professionel terapi hjemmefra. Online sessioner giver den samme effekt med fuld fleksibilitet – uanset hvor du befinder dig.",
    href: "/terapi",
  },
];

const BENEFITS = [
  { icon: "✅", text: "Certificeret hypnoterapeut & NLP practitioner" },
  { icon: "✅", text: "Mere end 500 tilfredse klienter" },
  { icon: "✅", text: "Klinik i Odense + online sessioner" },
  { icon: "✅", text: "Gratis uforpligtende telefonsamtale" },
  { icon: "✅", text: "Hurtige resultater – allerede fra første session" },
  { icon: "✅", text: "Fortroligt og professionelt rum" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />

      <Hero
        title="Professionel Hypnose & NLP Terapi i Odense"
        subtitle="Certificeret hypnoterapeut og NLP-terapeut. Jeg hjælper dig med at overvinde stress, angst, depression og uønskede mønstre – i klinikken eller online."
        ctaText="Book en gratis samtale"
        ctaHref="/kontakt"
        secondaryCtaText="Se mine ydelser"
        secondaryCtaHref="/hypnosen"
      />

      {/* Services */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Hvad kan jeg hjælpe dig med?"
            subtitle="Jeg tilbyder professionel hypnose og NLP terapi til en bred vifte af udfordringer. Alt foregår i trygge, fortrolige rammer."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Om Kristian GG"
                subtitle="Certificeret hypnoterapeut og NLP-terapeut med base i Odense"
              />
              <p className="text-text-muted leading-relaxed mb-4">
                Jeg er uddannet og certificeret hypnoterapeut og NLP-terapeut. Jeg har hjulpet
                hundredvis af klienter med at overkomme alt fra daglig stress og angst til dybt
                rodfæstede vaner og traumer.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Min tilgang kombinerer klassisk hypnoterapi med moderne NLP-teknikker og
                samtaleterapi – skræddersyet til netop dig. Jeg tror på, at alle har ressourcerne
                til forandring, og mit job er at hjælpe dig med at finde og aktivere dem.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Jeg modtager klienter i min klinik i Odense samt online via video.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {BENEFITS.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <span>{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary">
                Book en tid
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary-light rounded-2xl aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl font-bold">K</span>
                  </div>
                  <p className="text-primary font-semibold text-lg">Kristian GG</p>
                  <p className="text-text-muted text-sm mt-1">Hypnoterapeut & NLP Terapeut</p>
                  <p className="text-text-muted text-sm">Odense, Danmark</p>
                  <div className="mt-4 inline-flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-muted text-xs mt-1">5.0 på Trustpilot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Process */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Sådan forløber det"
            subtitle="Fra første kontakt til varig forandring – et enkelt og trygt forløb"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { step: "1", title: "Gratis samtale", desc: "Vi tager en uforpligtende telefonsamtale, hvor vi afklarer dine behov og muligheder." },
              { step: "2", title: "Første session", desc: "Vi kortlægger din situation og påbegynder det terapeutiske arbejde med klare mål." },
              { step: "3", title: "Forløb", desc: "Typisk 3–5 sessioner, afhængigt af din situation. Hvert møde bygger videre på det forrige." },
              { step: "4", title: "Varig forandring", desc: "Du forlader forløbet med konkrete værktøjer og en ny forståelse af dig selv." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Price teaser */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-3">Priser</h2>
          <p className="text-text-muted text-lg mb-2">
            Enkeltsessioner fra <span className="text-primary font-bold">{BUSINESS.priceRange}</span>
          </p>
          <p className="text-text-muted mb-6">Gratis og uforpligtende telefonsamtale inkluderet</p>
          <Link href="/priser" className="btn-secondary">
            Se alle priser
          </Link>
        </div>
      </section>
    </>
  );
}
