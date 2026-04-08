import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Naturterapi på Fyn – Terapi i naturen i Odense",
  description:
    "Terapeutiske forløb i naturen på Fyn. Naturterapi med certificeret psykoterapeut – skovture, åndedræt og somatisk arbejde i det fri. Særligt effektivt mod stress.",
  path: "/til-dig/naturterapi",
});

export default function NaturterapiPage() {
  return (
    <>
      <JsonLd data={getServiceSchema("Naturterapi på Fyn", "Terapeutiske forløb i naturen på Fyn med certificeret psykoterapeut. Nervesystemsbaseret og somatisk arbejde i det fri.")} />

      <Hero
        title="Naturterapi på Fyn"
        subtitle="Naturen er den ældste terapeut. Kombineret med professionel psykoterapi og nervesystemsbaserede teknikker giver det et unikt rum for forandring."
        ctaText="Book gratis samtale"
        ctaHref="/kontakt"
        secondaryCtaText="Se priser"
        secondaryCtaHref="/priser"
      />

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <SectionHeading title="Hvad er naturterapi?" />
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Naturterapi er en terapiform, hvor naturen indgår som aktiv medterapeut. I stedet for
              at sidde overfor hinanden i et kontorlokale, foregår sessionen i det fri – på en skovsti
              på Fyn, ved vandet eller i et roligt naturområde.
            </p>
            <p>
              Forskning viser, at tid i naturen sænker kortisolniveauet, aktiverer det parasympatiske
              nervesystem og øger velvære. Kombineret med professionel psykoterapi, åndedrætsterapi
              og somatiske teknikker forstærkes effekten markant.
            </p>
            <p>
              Naturterapi er særligt effektivt for dig, der føler dig &ldquo;fanget&rdquo; i fire vægge, har svært
              ved at slappe af, eller bare trives bedre udendørs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Hvad foregår i en naturterapisession?" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "🚶", title: "Vandresamtale", desc: "Vi går og taler – bevægelse løsner tanker og gør det lettere at åbne sig." },
              { icon: "💨", title: "Åndedræt i naturen", desc: "Frisk luft og åbent rum forstærker åndedrætsterapi markant." },
              { icon: "🌱", title: "Sanseopvækkelse", desc: "Bevidste sanseoplevelser ankrer dig i nuet og dæmper overtænkning." },
              { icon: "🧘", title: "Stilhedsøvelser", desc: "Guidede øvelser i stilhed og nærvær – naturen skaber den perfekte ramme." },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
          <div className="p-6 bg-primary-light rounded-xl border-l-4 border-primary">
            <h3 className="font-semibold text-primary mb-2">📍 Lokation</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Naturterapisessioner afholdes i naturområder på Fyn – typisk i nærheden af Odense.
              Præcis lokation aftales ved booking. Transport til mødestedet er klientens eget ansvar.
              Sessioner afholdes ved normalt vejr – vi klæder os på til vejret.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Prøv terapi i naturen"
        text="Book en gratis telefonsamtale, og hør om naturterapi er det rette for dig."
      />
    </>
  );
}
