import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema, getFAQSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Psykoterapi i Odense – Hypnose, NLP, KAT & Samtaleterapi",
  description:
    "Professionel psykoterapi i Odense. Reg. psykoterapeut der kombinerer hypnoterapi, NLP, KAT og samtaleterapi. I klinikken, online eller hjemme hos dig på Fyn.",
  path: "/til-dig/psykoterapi",
});

const METHODS = [
  { icon: "💬", title: "Samtaleterapi", desc: "Helhedsorienteret samtale der skaber indsigt, forståelse og nye perspektiver på dine udfordringer." },
  { icon: "🧠", title: "Hypnoterapi", desc: "Direkte adgang til underbevidstheden. Effektivt mod angst, fobier, søvn, vaner og dybt rodfæstede mønstre." },
  { icon: "🎯", title: "NLP", desc: "Neuro-Lingvistisk Programmering til at ændre begrænsende tankemønstre og programmere nye, ressourcestærke reaktioner." },
  { icon: "🔄", title: "KAT", desc: "Kognitiv Adfærdsterapi – identificer og udfordre negative automatiske tanker og adfærdsmønstre." },
  { icon: "🌊", title: "DAT", desc: "Dialektisk Adfærdsterapi – styrk følelsesregulering og mellemmenneskelige færdigheder." },
  { icon: "💨", title: "Åndedrætsterapi", desc: "Direkte nervesystemsregulering via vejrtrækning. Hurtigt virkende og let at integrere i hverdagen." },
];

const HELPS_WITH = [
  "Stress og udbrændthed", "Angst og bekymringer", "Depression og lavt humør",
  "Fobier", "Lavt selvværd", "Sorg og tab", "Traumer", "Søvnproblemer",
  "Rygestop", "Uønskede vaner", "Livsovergange", "Personlig udvikling",
];

const FAQ_ITEMS = [
  {
    question: "Hvad er forskellen på en psykolog og en psykoterapeut?",
    answer:
      "En psykolog er akademisk uddannet (cand.psych.) og autoriseret af Psykolognævnet. En reg. psykoterapeut er uddannet på terapeutuddannelse og certificeret af FaDP (Foreningen af Danske Psykoterapeuter). Begge arbejder terapeutisk, men har forskellig baggrund og tilgang. Kristian er reg. psykoterapeut (FaDP) med supplerende uddannelser i hypnoterapi, NLP og kognitive metoder.",
  },
  {
    question: "Er hypnose farligt?",
    answer:
      "Nej. Under hypnose er du altid fuldt bevidst og i kontrol. Du kan aldrig tvinges til at sige eller gøre noget imod din vilje. Hypnose er en naturlig, fokuseret tilstand – ikke søvn og ikke bevidstløshed.",
  },
  {
    question: "Kan jeg få terapi hjemmefra?",
    answer:
      "Ja. Online sessioner via video er dokumenteret ligeså effektive som fremmøde for langt de fleste udfordringer. Du kan også booke udekørende terapi – Kristian kommer til dig på Fyn uden merpris.",
  },
  {
    question: "Hvor mange sessioner har jeg brug for?",
    answer:
      "Det varierer meget afhængigt af din udfordring. Mange oplever tydelig forskel allerede efter 1–3 sessioner. Et typisk forløb er 4–8 sessioner. Vi evaluerer løbende og tilpasser.",
  },
];

export default function PsykoterapiPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Psykoterapi i Odense", "Reg. psykoterapeut der kombinerer hypnoterapi, NLP, KAT, DAT og samtaleterapi. I klinikken, online eller hjemme.")} />
      <JsonLd data={getFAQSchema(FAQ_ITEMS)} />

      <Hero
        title="Psykoterapi i Odense"
        subtitle="Helhedsorienteret psykoterapi der kombinerer det bedste fra samtaleterapi, hypnoterapi, NLP og kognitive metoder. Tilpasset netop dig."
        ctaText="Book gratis samtale"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading title="Mine terapeutiske metoder" subtitle="Jeg er uddannet i seks komplementære tilgange – og vælger altid den kombination der passer bedst til dig." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODS.map((m) => (
              <div key={m.title} className="card">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{m.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Hvad kan psykoterapi hjælpe med?" centered />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {HELPS_WITH.map((item) => (
              <div key={item} className="bg-white rounded-lg px-3 py-2.5 text-sm text-text-muted text-center border border-gray-100 shadow-sm">
                {item}
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

      <CTASection heading="Klar til forandring?" text="Book en gratis og uforpligtende telefonsamtale – ingen binding, bare en snak." />
    </>
  );
}
