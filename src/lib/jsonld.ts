import { SITE_URL, BUSINESS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.fullName,
    description:
      "Professionel hypnose og NLP terapi i Odense og online. Hjælp til stress, angst, depression og personlig udvikling.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    priceRange: BUSINESS.priceRange,
    openingHours: BUSINESS.openingHours,
    sameAs: [BUSINESS.facebook, BUSINESS.trustpilot],
    currenciesAccepted: "DKK",
    paymentAccepted: "MobilePay, Kontant, Bankoverførsel",
    areaServed: {
      "@type": "City",
      name: "Odense",
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BUSINESS.name,
    jobTitle: "Hypnoterapeut & NLP Terapeut",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    worksFor: {
      "@type": "LocalBusiness",
      name: BUSINESS.fullName,
    },
    knowsAbout: ["Hypnose", "NLP", "Terapi", "Stress", "Angst", "Depression"],
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
      { "@type": "Country", name: "Danmark" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: SITE_URL,
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
