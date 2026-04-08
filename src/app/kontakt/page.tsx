import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { getFAQSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Kontakt & Book en Tid",
  description:
    "Kontakt Kristian GG for hypnose og NLP terapi i Odense. Book en gratis telefonsamtale eller send en besked. Svar inden for 24 timer.",
  path: "/kontakt",
});

const FAQ_ITEMS = [
  {
    question: "Hvor hurtigt får jeg svar?",
    answer:
      "Jeg svarer på alle henvendelser inden for 24 timer på hverdage. Modtager du ikke svar, bedes du tjekke din spam-mappe eller kontakte mig på telefon.",
  },
  {
    question: "Hvad sker der, når jeg booker?",
    answer:
      "Når du booker, kontakter jeg dig for at bekræfte aftalen og sende dig praktisk information om, hvad du skal forvente. Vi starter altid med en kort gratis telefonsamtale.",
  },
  {
    question: "Er der parkering ved klinikken?",
    answer:
      "Ja, der er parkering i nærheden af klinikken. Du modtager præcis adresse og parkeringsinformation ved bekræftelse af din aftale.",
  },
  {
    question: "Hvad skal jeg tage med til første session?",
    answer:
      "Du behøver ikke tage noget med. Bare dig selv og en åben indstilling. Jeg sørger for alt det praktiske. Det kan dog være en god idé at have overvejet, hvad du gerne vil arbejde med.",
  },
];

export default function KontaktPage() {
  const faqSchema = getFAQSchema(FAQ_ITEMS);

  return (
    <>
      <JsonLd data={faqSchema} />

      <Hero
        title="Kontakt mig"
        subtitle="Tag det første skridt – jeg er klar til at hjælpe dig. Skriv, ring, eller book en gratis uforpligtende telefonsamtale direkte her."
        centered
      />

      {/* Contact section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                title="Send en besked"
                subtitle="Udfyld formularen, og jeg vender tilbage inden for 24 timer."
              />
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <SectionHeading
                title="Kontaktoplysninger"
                subtitle="Du er også velkommen til at kontakte mig direkte"
              />
              <div className="space-y-4">
                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm mb-0.5">Telefon</p>
                    <a
                      href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:text-primary-dark transition-colors text-sm"
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="text-text-muted text-xs mt-1">{BUSINESS.openingHours}</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm mb-0.5">Email</p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-primary hover:text-primary-dark transition-colors text-sm"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm mb-0.5">Adresse</p>
                    <p className="text-text-muted text-sm">{BUSINESS.address.city}, {BUSINESS.address.postalCode}</p>
                    <p className="text-text-muted text-xs mt-1">Præcis adresse oplyses ved booking</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm mb-0.5">Åbningstider</p>
                    <p className="text-text-muted text-sm">{BUSINESS.openingHours}</p>
                    <p className="text-text-muted text-xs mt-1">Aftentider og weekender efter aftale</p>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-primary-light rounded-xl">
                  <p className="text-primary font-semibold mb-1">💡 Gratis telefonsamtale</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Usikker på om hypnose eller NLP er noget for dig? Jeg tilbyder altid en
                    gratis og uforpligtende telefonsamtale, inden du booker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-cream">
        <div className="container-width">
          <SectionHeading title="Praktiske spørgsmål" />
          <div className="max-w-2xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </>
  );
}
