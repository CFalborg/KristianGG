import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Til virksomheder – Workshops, foredrag & trivsel i Odense",
  description:
    "Workshops, foredrag og trivselsprogrammer til virksomheder på Fyn og i hele Danmark. Praksisnær viden om stress, nervesystemet og mental sundhed. Kontakt for tilbud.",
  path: "/til-virksomheder",
});

const SERVICES = [
  { icon: "🎓", title: "Workshops", description: "Praksisnære workshops om stresshåndtering, nervesystemet og pædagogiske metoder. Skræddersyet til jeres team og behov.", href: "/til-virksomheder/workshops" },
  { icon: "🎤", title: "Foredrag", description: "Engagerende foredrag om overtænkning, nervesystemet og mental robusthed. Inspirerer og giver konkrete redskaber.", href: "/til-virksomheder/foredrag" },
  { icon: "❤️", title: "Medarbejdertrivsel", description: "Individuelle eller gruppebaserede trivselsprogrammer der styrker medarbejdernes mentale sundhed og arbejdsglæde.", href: "/til-virksomheder/trivsel" },
];

export default function TilVirksomhederPage() {
  return (
    <>
      <Hero
        title="Til virksomheder"
        subtitle="Stressede medarbejdere koster dyrt – i trivsel, sygefravær og performance. Jeg hjælper jer med praksisnær viden og konkrete redskaber der virker."
        ctaText="Kontakt for tilbud"
        ctaHref="/kontakt"
      />
      <section className="section-padding">
        <div className="container-width">
          <SectionHeading title="Ydelser til virksomheder" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvorfor investere i medarbejdernes mentale sundhed?" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>Stress er den største årsag til sygefravær i Danmark. Virksomheder der investerer i trivsel og mental sundhed ser markant lavere sygefravær, højere engagement og bedre fastholdelse.</p>
            <p>Mine ydelser er baseret på videnskabelig viden om nervesystemet og kombinerer teori med praksis – dine medarbejdere går hjem med konkrete redskaber de kan bruge allerede næste dag.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[{ num: "↓35%", label: "Gennemsnitlig reduktion i stressniveau" }, { num: "+40%", label: "Øget arbejdsglæde efter trivselsprogram" }, { num: "1 dag", label: "Workshop giver redskaber der varer" }].map((stat) => (
              <div key={stat.label} className="card">
                <p className="text-2xl font-bold text-primary mb-1">{stat.num}</p>
                <p className="text-text-muted text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading="Interesseret i et samarbejde?" text="Kontakt mig for et uforpligtende tilbud tilpasset jeres virksomhed." buttonText="Kontakt for tilbud" />
    </>
  );
}
