import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terapi til dig – Privat psykoterapi i Odense & online",
  description:
    "Privat psykoterapi, naturterapi og nervesystemsregulering i Odense og på Fyn. Skræddersyet forløb til dig – i klinikken, hjemme eller online. Book gratis samtale.",
  path: "/til-dig",
});

const SERVICES = [
  {
    icon: "🧬",
    title: "Nervesystemet & ro",
    description:
      "Lær at regulere dit nervesystem med åndedrætsterapi, mindfulness og somatiske teknikker. Effektivt mod stress, angst og søvnproblemer.",
    href: "/til-dig/nervesystemet",
  },
  {
    icon: "🌲",
    title: "Naturterapi",
    description:
      "Terapeutiske forløb i naturen på Fyn. Naturen som medterapeut – rolig, nærværende og virkningsfuld. Særligt egnet til stressramte.",
    href: "/til-dig/naturterapi",
  },
  {
    icon: "🧠",
    title: "Psykoterapi",
    description:
      "Helhedsorienteret psykoterapi der kombinerer samtaleterapi, hypnoterapi, NLP, KAT og DAT. Tilpasset netop dig og din situation.",
    href: "/til-dig/psykoterapi",
  },
];

export default function TilDigPage() {
  return (
    <>
      <Hero
        title="Terapi til dig"
        subtitle="Du fortjener at have det godt. Uanset om du kæmper med stress, angst, lavt selvværd eller bare ønsker at vokse som menneske – jeg er her."
        ctaText="Book gratis samtale"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      <section className="section-padding">
        <div className="container-width">
          <SectionHeading
            title="Mine tilbud til dig"
            subtitle="Tre indgange – én fælles retning: mere ro, mere frihed og mere dig."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Terapi i klinikken, online eller hjemme hos dig" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Jeg møder dig, hvor du er – bogstaveligt talt. Du kan komme til min klinik på
              Lumbyvej i Odense, vi kan have sessionen online via video, eller jeg kan komme ud
              til dig. Udekørende terapi på Fyn er uden merpris og særligt velegnet til sårbare
              grupper, fysisk handicappede eller familier i krise.
            </p>
            <p>
              Det vigtigste for mig er, at du føler dig tryg. Alle sessioner er fortrolige og
              foregår i et ikke-dømmende rum, hvor du kan være præcis, som du er.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🏢", title: "I klinikken", desc: "Lumbyvej 11, Odense" },
              { icon: "💻", title: "Online", desc: "Video – overalt i Danmark" },
              { icon: "🚗", title: "Hjemme hos dig", desc: "Udekørende på Fyn – ingen merpris" },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold text-text-dark text-sm">{item.title}</p>
                <p className="text-text-muted text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
