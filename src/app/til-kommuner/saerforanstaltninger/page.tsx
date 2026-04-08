import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pæd. særforanstaltninger – Ungestøtte & botilbud på Fyn",
  description:
    "Specialiseret pædagogisk støtte og særforanstaltninger til udsatte unge og borgere med komplekse behov. Erfaring fra botilbud og asylcenter. Fyn og Syddanmark.",
  path: "/til-kommuner/saerforanstaltninger",
});

const COMPETENCIES = [
  { icon: "🏠", title: "Botilbud", desc: "Praktisk erfaring fra arbejde på botilbud med unge og voksne borgere med komplekse sociale og psykiske udfordringer." },
  { icon: "🌍", title: "Asylcenter", desc: "Erfaring fra arbejde med traumatiserede flygtninge og asylansøgere. Kulturel sensitivitet og traumeinformeret tilgang." },
  { icon: "🧠", title: "Psykologisk støtte", desc: "Terapeutisk baggrund giver mulighed for at arbejde med de psykologiske aspekter af komplekse pædagogiske situationer." },
  { icon: "👶", title: "Ungestøtte", desc: "Specialiseret støtte til udsatte unge i overgangsfaser – fra institution til selvstændigt liv eller videre uddannelse." },
  { icon: "🤝", title: "Relationspædagogik", desc: "Stærk i etablering af tillidsfulde relationer – fundamentet for al effektiv pædagogisk praksis." },
  { icon: "📋", title: "Dokumentation", desc: "Erfaring med pædagogiske handleplaner, status-dokumenter og tværfagligt samarbejde med kommunale myndigheder." },
];

export default function SaerforanstaltningerPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Pædagogiske særforanstaltninger", "Specialiseret pædagogisk støtte til udsatte unge og borgere med komplekse behov på Fyn og i Syddanmark.")} />
      <Hero
        title="Pæd. særforanstaltninger"
        subtitle="Specialiseret pædagogisk bistand til udsatte unge og borgere med komplekse behov – baseret på solid erfaring fra botilbud og asylcenter kombineret med terapeutisk baggrund."
        ctaText="Kontakt for samarbejde"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Faglige kompetencer"
            subtitle="Den unikke kombination af pædagogisk praksis og terapeutisk uddannelse giver en særlig faglig profil."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPETENCIES.map((c) => (
              <div key={c.title} className="card">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{c.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Tilgang og metode" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I arbejdet med udsatte borgere og unge er relationen altid fundamentet. Kristian arbejder
              med en anerkendende, traumeinformeret tilgang der møder borgeren der, hvor de er –
              og skaber de betingelser der gør forandring mulig.
            </p>
            <p>
              Den terapeutiske baggrund betyder at Kristian ikke kun arbejder med adfærd og struktur,
              men forstår de psykologiske og nervesystemsmæssige mekanismer bag uhensigtsmæssig
              adfærd og kan arbejde med dem direkte.
            </p>
            <p>
              Erfaring med dokumentation, handleplaner og tværfagligt samarbejde med kommunale
              sagsbehandlere, psykologer og socialrådgivere sikrer professionel kommunikation på alle niveauer.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Praktisk information" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Målgruppe", value: "Udsatte unge og voksne borgere" },
              { label: "Ydelsesform", value: "Timebaseret eller forløb" },
              { label: "Geografisk rækkevidde", value: "Fyn og Syddanmark" },
              { label: "Samarbejdsform", value: "Direkte aftale eller via leverandøraftale" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 p-4 bg-bg-cream rounded-lg border border-gray-100">
                <span className="text-primary font-semibold text-sm w-40 flex-shrink-0">{item.label}</span>
                <span className="text-text-muted text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Lad os tale om jeres behov"
        text="Tag kontakt for en uforpligtende snak om, hvordan jeg kan bidrage til jeres særforanstaltninger."
        buttonText="Kontakt for samarbejde"
      />
    </>
  );
}
