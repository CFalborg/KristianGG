import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Hypnoseshow – Underholdning til Events",
  description:
    "Book et professionelt hypnoseshow til firmafest, fødselsdage eller events. Sjov og sikker underholdning med certificeret hypnotisør. Hele Danmark.",
  path: "/hypnoseshow",
});

const PERFECT_FOR = [
  { icon: "🏢", title: "Firmafester", desc: "Giv jeres firmafest et uforglemmelig twist med et hypnoseshow der binder teamet sammen." },
  { icon: "🎂", title: "Fødselsdage", desc: "Perfekt underholdning til runde fødselsdage og jubilæer med alle aldre." },
  { icon: "🎪", title: "Foreningsarrangementer", desc: "Et showstopper-element til jeres næste arrangement eller generalforsamling." },
  { icon: "👥", title: "Teambuilding", desc: "Skab grin, fællesskab og uforglemmelige minder med jeres kollegaer." },
  { icon: "🎓", title: "Studenterfester", desc: "Det perfekte show til dimission, rustur eller studenterfest." },
  { icon: "✨", title: "Private events", desc: "Enhver særlig lejlighed fortjener særlig underholdning." },
];

export default function HypnoseshowPage() {
  const serviceSchema = getServiceSchema(
    "Hypnoseshow",
    "Professionelt og underholdende hypnoseshow til firmafester, fødselsdage og events i hele Danmark."
  );

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Hero
        title="Hypnoseshow"
        subtitle="Uforglemmelig underholdning til dit arrangement. Et professionelt og sjovt hypnoseshow, der giver dine gæster en oplevelse, de taler om i årevis."
        ctaText="Kontakt mig for et tilbud"
        ctaHref="/kontakt"
        secondaryCtaText="Læs mere om hypnose"
        secondaryCtaHref="/hypnosen"
      />

      {/* About the show */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Om hypnoseshowet"
                subtitle="Underholdning der kombinerer humor, mystik og ægte hypnose"
              />
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Et hypnoseshow med Kristian GG er en unik oplevelse, der blander professionel
                  hypnose med humor og underholdning. Frivillige fra publikum guides ind i en
                  hypnotisk tilstand og udfører morsomme og imponerende aktiviteter på scenen –
                  altid med respekt og kontrol.
                </p>
                <p>
                  Det er 100% trygt og etisk forsvarligt. Ingen deltagere gør noget imod deres
                  vilje, og alle er sikre hele vejen igennem. Showet er familievenligt og
                  tilpasset alle aldersgrupper.
                </p>
                <p>
                  Varighed: Typisk 60–90 minutter, inkl. introduktion og afslutning.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⏱️", title: "60–90 min", desc: "Showets varighed" },
                { icon: "👥", title: "Fra 20 pers.", desc: "Mindste antal gæster" },
                { icon: "🇩🇰", title: "Hele DK", desc: "Vi kommer til dig" },
                { icon: "✅", title: "100% sikkert", desc: "Altid trygt og etisk" },
              ].map((item) => (
                <div key={item.title} className="card text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-text-dark text-sm">{item.title}</p>
                  <p className="text-text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="Perfekt til"
            subtitle="Hypnoseshowet passer til alle typer af arrangementer"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERFECT_FOR.map((item) => (
              <div key={item.title} className="card">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Praktisk information"
            subtitle="Alt du skal vide om at booke et hypnoseshow"
          />
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">📋 Krav til lokalet</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-primary">·</span> Sceneområde på min. 4×3 meter</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Stole til deltagere (ca. 5–8 stk.)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Mikrofon og anlæg (kan medbringes)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> God belysning</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-dark mb-3">💰 Pris</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                Prisen aftales individuelt og afhænger af sted, rejsetid og arrangementets
                størrelse.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Kontakt mig for et uforpligtende tilbud – jeg svarer hurtigt!
              </p>
              <Link href="/kontakt" className="btn-primary mt-4 inline-block text-sm py-2">
                Få et tilbud
              </Link>
            </div>
            <div className="card md:col-span-2">
              <h3 className="font-semibold text-text-dark mb-3">📍 Geografisk dækning</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Jeg er baseret i Odense men tager gerne ud i hele Danmark. Transport og
                eventuel overnatning aftales i forbindelse med booking. For arrangementer
                udenfor Fyn tillægges et transporttillæg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Book et hypnoseshow"
        text="Kontakt mig for et uforpligtende tilbud. Jeg besvarer alle henvendelser inden for 24 timer."
        buttonText="Kontakt mig for et tilbud"
      />
    </>
  );
}
