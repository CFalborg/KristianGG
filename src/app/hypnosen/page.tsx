import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema, getFAQSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Hypnose i Odense – Professionel Hypnoterapi",
  description:
    "Oplev kraften i professionel hypnose i Odense. Effektiv behandling mod angst, stress, fobier og uønskede vaner. Også online sessioner. Book i dag.",
  path: "/hypnosen",
});

const TREATMENT_AREAS = [
  { icon: "😰", title: "Stress", desc: "Bryd stressmønstret og genfind ro og balance i hverdagen." },
  { icon: "😨", title: "Angst", desc: "Overvind angst og bekymringer – inkl. social angst og panikangst." },
  { icon: "😔", title: "Depression", desc: "Styrk dit humør og din livsglæde med hypnoterapeutisk støtte." },
  { icon: "🕷️", title: "Fobier", desc: "Slip frygten for flyvning, edderkopper, sprøjter og meget mere." },
  { icon: "🚬", title: "Rygestop", desc: "Stop med at ryge med effektiv hypnose – mange klarer det på én session." },
  { icon: "⚖️", title: "Vægttab", desc: "Skab sunde vaner og et sundere forhold til mad og krop." },
  { icon: "😴", title: "Søvnproblemer", desc: "Forbedre din søvnkvalitet og vågn udhvilet op." },
  { icon: "💪", title: "Selvtillid", desc: "Styrk din selvtillid og tro på dig selv i alle livets områder." },
];

const FAQ_ITEMS = [
  {
    question: "Er hypnose det samme som at sove?",
    answer:
      "Nej. Under hypnose er du fuldt bevidst og i fuld kontrol. Det er en dybere afslappet tilstand, der minder om den tilstand du er i, lige inden du falder i søvn. Du er fokuseret og modtagelig, men hverken sovende eller bevidstløs.",
  },
  {
    question: "Kan alle blive hypnotiseret?",
    answer:
      "De fleste mennesker kan opnå en hypnotisk tilstand. Evnen til at lade sig hypnotisere varierer fra person til person, men med en erfaren terapeut og det rette samarbejde kan langt de fleste opleve fordelene ved hypnoterapi.",
  },
  {
    question: "Vil jeg afsløre hemmeligheder under hypnose?",
    answer:
      "Nej. Hypnose er ikke et sandhedsserum. Du bevarer fuldt ud kontrollen over, hvad du siger og gør. Du kan aldrig tvinges til at sige eller gøre noget imod din vilje under hypnose.",
  },
  {
    question: "Hvor mange sessioner har jeg brug for?",
    answer:
      "Det afhænger af din udfordring og dit mål. Mange oplever tydelig fremgang allerede fra første session. Et typisk forløb består af 3–6 sessioner, men vi tilpasser altid antallet til dine behov.",
  },
  {
    question: "Virker online hypnose ligeså godt som fremmøde?",
    answer:
      "Ja. Online hypnoterapi via video er dokumenteret ligeså effektiv som fysisk fremmøde. Du får den fulde terapeutiske oplevelse hjemmefra med din computer eller tablet.",
  },
];

export default function HypnosenPage() {
  const serviceSchema = getServiceSchema(
    "Hypnoterapi",
    "Professionel hypnoterapi mod stress, angst, fobier og uønskede vaner i Odense og online."
  );
  const faqSchema = getFAQSchema(FAQ_ITEMS);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        title="Hypnose i Odense"
        subtitle="Professionel hypnoterapi til varig forandring. Effektiv behandling mod angst, stress, fobier og uønskede vaner – i klinikken eller online."
        ctaText="Book en tid"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      {/* What is hypnosis */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <SectionHeading
              title="Hvad er hypnose?"
              subtitle="Hypnoterapi er en dokumenteret og effektiv behandlingsmetode"
            />
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Hypnose er en naturlig tilstand af fokuseret opmærksomhed og dyb afslapning, som
                muliggør en direkte kontakt med underbevidstheden. I denne tilstand er du mere
                åben for positive forslag og forandringer, end du er i din normale bevidste
                tilstand.
              </p>
              <p>
                Som certificeret hypnoterapeut bruger jeg videnskabeligt funderede teknikker til at
                hjælpe dig med at ændre uønskede tankemønstre, følelser og adfærd. Hypnoterapi
                er anerkendt af Sundhedsstyrelsen og bruges med dokumenteret succes verden over.
              </p>
              <p>
                Du er hele tiden fuldt bevidst og i kontrol under en session. Jeg guider dig blot
                ind i en dybere afslappet tilstand, hvorfra det terapeutiske arbejde kan foregå
                meget mere effektivt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment areas */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="Hvad kan hypnose hjælpe med?"
            subtitle="Hypnoterapi er effektiv mod en bred vifte af udfordringer"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TREATMENT_AREAS.map((area) => (
              <div key={area.title} className="card text-center">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{area.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session process */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Hvordan foregår en session?"
            subtitle="En typisk hypnoterapi-session er tryg, struktureret og professionel"
          />
          <div className="max-w-2xl space-y-6">
            {[
              {
                step: "1",
                title: "Indledende samtale",
                desc: "Vi starter med en samtale om dit mål og dine udfordringer. Jeg forklarer, hvad der vil ske, og besvarer dine spørgsmål.",
              },
              {
                step: "2",
                title: "Induktion og afslapning",
                desc: "Jeg guider dig langsomt ind i en dyb, afslappet tilstand ved hjælp af rolige instruktioner og visualiseringer.",
              },
              {
                step: "3",
                title: "Terapeutisk arbejde",
                desc: "I den hypnotiske tilstand arbejder vi med de specifikke mønstre, følelser eller adfærd, som du ønsker at ændre.",
              },
              {
                step: "4",
                title: "Forankring",
                desc: "Vi forankrer de positive forandringer, så de holder på lang sigt, og du vågner op rolig og opfrisket.",
              },
              {
                step: "5",
                title: "Opfølgning",
                desc: "Vi taler om oplevelsen, og jeg giver dig eventuelle hjemmeøvelser til at understøtte din forandring.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading
            title="Ofte stillede spørgsmål om hypnose"
          />
          <div className="max-w-2xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Klar til at prøve hypnose?"
        text="Book en gratis og uforpligtende telefonsamtale, og lad os tale om, hvad jeg kan gøre for dig."
      />
    </>
  );
}
