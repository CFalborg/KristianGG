import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terapi i Odense – Samtaleterapi & Hypnoterapi",
  description:
    "Professionel terapi i Odense. Kombineret samtaleterapi, hypnoterapi og NLP. Skræddersyet forløb til dine behov. Også online sessioner tilgængelige.",
  path: "/terapi",
});

const FOR_WHO = [
  "Stress og udbrændthed",
  "Angst og bekymringer",
  "Depression og lavt humør",
  "Lavt selvværd og selvtillid",
  "Sorg og tab",
  "Relationsproblemer",
  "Livsovergange og kriser",
  "Personlig udvikling og vækst",
  "Traumer og PTSD",
  "Uønskede vaner",
];

export default function TerapiPage() {
  const serviceSchema = getServiceSchema(
    "Terapi",
    "Hollistisk samtaleterapi kombineret med hypnoterapi og NLP i Odense og online."
  );

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Hero
        title="Terapi i Odense"
        subtitle="Skræddersyet terapi der virker – i klinikken eller online. Jeg kombinerer samtaleterapi, hypnoterapi og NLP for det bedste resultat."
        ctaText="Book en tid"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      {/* My approach */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <SectionHeading
              title="Min tilgang til terapi"
              subtitle="Helhedsorienteret og evidensbaseret"
            />
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Jeg tror ikke på én-størrelse-passer-alle i terapi. Hvert menneske er unikt, og
                hvert terapiforløb tilpasses din specifikke situation, dine mål og din personlighed.
              </p>
              <p>
                Min tilgang kombinerer tre kraftfulde metoder: klassisk samtaleterapi for at skabe
                forståelse og indsigt, hypnoterapi for direkte adgang til underbevidstheden, og
                NLP for at ændre uønskede mønstre og adfærd. Denne kombination giver hurtigere
                og mere varige resultater end én metode alene.
              </p>
              <p>
                Alle sessioner foregår i et trygt, fortroligt og ikke-dømmende rum, hvor du frit
                kan tale om det, der er vigtigt for dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is therapy for */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Hvem er terapi for?"
                subtitle="Terapi er for alle, der ønsker forandring og vækst"
              />
              <p className="text-text-muted leading-relaxed mb-6">
                Du behøver ikke have en diagnose eller en krise for at have glæde af terapi.
                Mange af mine klienter kommer, fordi de ønsker at komme videre i livet, forbedre
                relationer eller nå mål, der har føltes umulige.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOR_WHO.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="card border-l-4 border-primary">
                <h3 className="font-semibold text-text-dark mb-2">🏢 Terapi i klinikken</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Mød mig personligt i min klinik i Odense. Et roligt og professionelt rum, der
                  er skabt til at give dig den bedste terapeutiske oplevelse.
                </p>
              </div>
              <div className="card border-l-4 border-accent">
                <h3 className="font-semibold text-text-dark mb-2">💻 Online terapi</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Fuldstændig den samme kvalitet hjemmefra. Online sessioner via video er
                  dokumenteret ligeså effektive og giver dig fuld fleksibilitet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online therapy */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <SectionHeading
              title="Online terapi – fleksibilitet uden kompromis"
              subtitle="Professionel terapi hvorfra som helst i Danmark"
            />
            <div className="space-y-4 text-text-muted leading-relaxed mb-6">
              <p>
                Online terapi via video er et fantastisk alternativ for dig, der bor langt fra
                Odense, har en travl hverdag, eller simpelthen foretrækker at arbejde med dig
                selv i dine egne omgivelser.
              </p>
              <p>
                Forskning viser, at online terapi er ligeså effektiv som terapi med fysisk
                fremmøde for langt de fleste udfordringer. Alt du behøver er en stabil
                internetforbindelse og et roligt sted, hvor du kan sidde uforstyrret.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🌍", title: "Overalt i Danmark", desc: "Ingen transport – ingen spildt tid" },
                { icon: "📅", title: "Fleksible tider", desc: "Aftaler tilpasset din kalender" },
                { icon: "🔒", title: "Fuldt fortroligt", desc: "Sikker krypteret videoplatform" },
              ].map((item) => (
                <div key={item.title} className="card text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-text-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="Et typisk terapiforløb"
            subtitle="Hvad du kan forvente fra første kontakt til afslutning"
          />
          <div className="max-w-2xl space-y-6">
            {[
              {
                step: "Indledende samtale (gratis)",
                desc: "En kort telefonsamtale på 15–20 minutter, hvor vi afklarer dine behov, og om jeg er den rette terapeut for dig. Helt uforpligtende.",
              },
              {
                step: "Første session – intake",
                desc: "En grundig afdækning af din situation, baggrund og mål. Vi lægger en plan for forløbet og påbegynder det terapeutiske arbejde.",
              },
              {
                step: "Løbende sessioner",
                desc: "Typisk 3–6 sessioner, afhængigt af dit behov. Hvert møde bygger videre på det forrige og bringer dig tættere på dit mål.",
              },
              {
                step: "Evaluering og afslutning",
                desc: "Vi evaluerer løbende din fremgang og afslutter forløbet, når du har nået dine mål. Du forlader med konkrete værktøjer til fremtiden.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">{s.step}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Tag det første skridt i dag"
        text="Book en gratis og uforpligtende telefonsamtale, og lad os tale om, hvad du har brug for."
      />
    </>
  );
}
