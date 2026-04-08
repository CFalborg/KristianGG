import { SITE_URL, BUSINESS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.fullName,
    description:
      "Reg. psykoterapeut og hypnoterapeut i Odense. Hjælp til private, virksomheder og kommuner via TRÅD-metoden.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    priceRange: BUSINESS.priceRange,
    openingHours: BUSINESS.openingHours,
    areaServed: [
      { "@type": "City", name: "Odense" },
      { "@type": "AdministrativeArea", name: "Fyn" },
      { "@type": "AdministrativeArea", name: "Syddanmark" },
      { "@type": "Country", name: "Danmark" },
    ],
    sameAs: [BUSINESS.facebook, BUSINESS.trustpilot],
    currenciesAccepted: "DKK",
    paymentAccepted: "MobilePay, Kontant, Bankoverførsel",
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kristian G. G. Dansted",
    jobTitle: "Reg. Psykoterapeut & Hypnoterapeut",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    award: "Ildsjælepris 2019",
    worksFor: {
      "@type": "LocalBusiness",
      name: BUSINESS.fullName,
    },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Reg. Psykoterapeut (FaDP)" },
      { "@type": "EducationalOccupationalCredential", name: "Master Neuro Hypnoterapeut" },
      { "@type": "EducationalOccupationalCredential", name: "Master NLP Practitioner" },
      { "@type": "EducationalOccupationalCredential", name: "Åndedrætsterapeut" },
    ],
    knowsAbout: ["Psykoterapi", "Hypnoterapi", "NLP", "Nervesystemsregulering", "Naturterapi", "Åndedrætsterapi"],
  };
}

export function getServiceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.fullName,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Odense" },
      { "@type": "AdministrativeArea", name: "Fyn" },
      { "@type": "AdministrativeArea", name: "Syddanmark" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BUSINESS.booking,
      servicePhone: BUSINESS.phone,
    },
  };
}

export function getFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
