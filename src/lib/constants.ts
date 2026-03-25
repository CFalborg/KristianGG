export const SITE_URL = "https://kristiangg.dk";

export const BUSINESS = {
  name: "Kristian GG",
  fullName: "Kristian GG – Hypnoterapeut & NLP Terapeut",
  phone: "+45 12 34 56 78",
  email: "kontakt@kristiangg.dk",
  address: {
    street: "Odense",
    city: "Odense",
    country: "DK",
    postalCode: "5000",
  },
  priceRange: "850 kr",
  openingHours: "Man–Fre 09:00–17:00",
  facebook: "https://www.facebook.com/Kristiangg.dk/",
  trustpilot: "https://dk.trustpilot.com/review/kristiangg.dk",
} as const;

export const NAV_LINKS = [
  { label: "Hypnose", href: "/hypnosen" },
  { label: "NLP", href: "/nlp" },
  { label: "Terapi", href: "/terapi" },
  { label: "Hypnoseshow", href: "/hypnoseshow" },
  { label: "Priser", href: "/priser" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
