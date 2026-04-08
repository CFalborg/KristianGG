import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getPersonSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Om Kristian GG – Reg. Psykoterapeut & Hypnoterapeut i Odense",
  description:
    "Mød Kristian G. G. Dansted – reg. psykoterapeut (FaDP), Master NLP og hypnoterapeut i Odense. Ildsjælepris 2019. Personlig rejse fra ulykke til terapeutisk praksis.",
  path: "/om",
});

const CREDENTIALS = [
  { title: "Reg. Psykoterapeut", body: "Registreret hos FaDP (Foreningen af Danske Psykoterapeuter)" },
  { title: "Master Neuro Hypnoterapeut", body: "Certificeret til det højeste niveau inden for hypnoterapi" },
  { title: "Master NLP Practitioner", body: "Master-niveau i Neuro-Lingvistisk Programmering" },
  { title: "Åndedrætsterapeut", body: "Certificeret i terapeutisk brug af vejrtrækning" },
  { title: "Mindfulness-instruktør", body: "Uddannet mindfulness-instruktør" },
  { title: "Kognitiv grunduddannelse", body: "Uddannet i KAT (Kognitiv Adfærdsterapi) og DAT (Dialektisk Adfærdsterapi)" },
];

const VALUES = [
  {
    icon: "🌱",
    title: "Autenticitet",
    desc: "Jeg møder dig som et helt menneske – ikke bare som en udfordring der skal løses. Ærlighed og nærvær er fundamentet.",
  },
  {
    icon: "🧬",
    title: "Videnskabelig tilgang",
    desc: "Mine metoder er evidensbaserede og bygger på forskning i nervesystemet, psykologi og adfærdsvidenskab.",
  },
  {
    icon: "🔄",
    title: "Praksisnærhed",
    desc: "Viden der ikke kan bruges i hverdagen, er halvt så meget værd. Jeg fokuserer altid på konkrete, brugbare redskaber.",
  },
  {
    icon: "❤️",
    title: "Menneskesyn",
    desc: "Jeg tror på at alle mennesker bærer på ressourcer og kapacitet til forandring – min opgave er at hjælpe dem frem.",
  },
];

export default function OmPage() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />
      <Hero
        title="Om Kristian"
        subtitle="Reg. psykoterapeut, hypnoterapeut og foredragsholder – med en personlig rejse der har formet min faglige tilgang."
        centered
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Min historie" />
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              Som 21-årig var Kristian udsat for en alvorlig ulykke der ændrede alt. Den fysiske
              og mentale rejse tilbage til et fuldt liv gav ham en indefra-forståelse af hvad det
              vil sige at stå midt i noget svært – og hvad der faktisk hjælper.
            </p>
            <p>
              Den erfaring blev startskuddet til en faglig rejse: uddannelse til reg. psykoterapeut
              (FaDP), Master Neuro Hypnoterapeut, Master NLP Practitioner, åndedrætsterapeut og
              mindfulness-instruktør. Dertil pædagogisk erfaring fra botilbud og asylcentre.
            </p>
            <p>
              I 2019 modtog Kristian Ildsjæleprisen for sit frivillige sociale arbejde – en anerkendelse
              af den indsats han lægger i at gøre en forskel for andre.
            </p>
            <p>
              I dag driver han praksis fra Lumbyvej 11 i Odense og arbejder med private klienter,
              virksomheder og kommunale samarbejdspartnere over hele Fyn og Syddanmark.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="TRÅD-metoden" subtitle="Min integrerede terapeutiske tilgang" />
          <p className="text-text-muted leading-relaxed mb-8">
            TRÅD er min betegnelse for den integrerede tilgang der gennemsyrer mit arbejde –
            hvad enten det er individuel terapi, workshops eller foredrag.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { letter: "T", word: "Tilknytning", desc: "Trygge relationer som fundament for forandring. Intet terapeutisk arbejde virker uden en tryg relation." },
              { letter: "R", word: "Regulering", desc: "Nervesystemsregulering og kropsbevidsthed. Kroppen kommer altid først – derefter tankerne." },
              { letter: "Å", word: "Ånde", desc: "Åndedrætsterapi og somatisk forankring. Vejrtrækning er den hurtigste vej til nervesystemet." },
              { letter: "D", word: "Dybde", desc: "Kognitiv og hypnoterapeutisk dybdebehandling af mønstre og overbevisninger der holder dig tilbage." },
            ].map((item) => (
              <div key={item.letter} className="p-5 bg-white rounded-xl border border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {item.letter}
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-1">{item.word}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Uddannelser & certificeringer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="p-4 bg-bg-cream rounded-lg border border-gray-100">
                <h4 className="font-semibold text-text-dark text-sm mb-1">{c.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-primary-light rounded-xl border-l-4 border-primary">
            <h4 className="font-semibold text-primary mb-2">🏆 Ildsjælepris 2019</h4>
            <p className="text-text-muted text-sm leading-relaxed">
              Kristian modtog Ildsjæleprisen i 2019 for sit frivillige sociale arbejde – en anerkendelse
              af dedikationen til at gøre en positiv forskel i andres liv.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Værdier" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <div className="p-6 bg-primary-light rounded-xl border-l-4 border-primary">
            <h3 className="font-semibold text-primary mb-2">📍 Find mig</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              <strong>Lumbyvej 11, indgang B · 5000 Odense</strong><br />
              Tlf: <a href="tel:+4531509789" className="text-primary hover:underline">+45 31 50 97 89</a><br />
              E-mail: <a href="mailto:kontakt@kristiangg.dk" className="text-primary hover:underline">kontakt@kristiangg.dk</a>
            </p>
          </div>
        </div>
      </section>

      <CTASection heading="Lad os tage en snak" text="Book en gratis og uforpligtende telefonsamtale – ingen binding, bare en snak om hvad du har brug for." />
    </>
  );
}
