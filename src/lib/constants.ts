export const SITE_URL = "https://kristiangg.dk";

export const BUSINESS = {
  name: "Kristian GG",
  fullName: "Kristian G. G. Dansted – Reg. Psykoterapeut & Hypnoterapeut",
  phone: "+45 31 50 97 89",
  email: "kontakt@kristiangg.dk",
  address: {
    street: "Lumbyvej 11, indgang B",
    city: "Odense",
    country: "DK",
    postalCode: "5000",
    region: "Syddanmark",
  },
  priceRange: "450–900 kr",
  openingHours: "Man–Fre 09:00–17:00",
  booking: "https://fynspsykoterapidk.simplybooking.io/v2/",
  facebook: "https://www.facebook.com/Kristiangg.dk/",
  trustpilot: "https://dk.trustpilot.com/review/kristiangg.dk",
} as const;

export type NavChild = { label: string; href: string };
export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href: string; children: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  {
    label: "Til dig",
    href: "/til-dig",
    children: [
      { label: "Nervesystemet & ro", href: "/til-dig/nervesystemet" },
      { label: "Naturterapi", href: "/til-dig/naturterapi" },
      { label: "Psykoterapi", href: "/til-dig/psykoterapi" },
    ],
  },
  {
    label: "Til virksomheder",
    href: "/til-virksomheder",
    children: [
      { label: "Workshops", href: "/til-virksomheder/workshops" },
      { label: "Foredrag", href: "/til-virksomheder/foredrag" },
      { label: "Medarbejdertrivsel", href: "/til-virksomheder/trivsel" },
    ],
  },
  {
    label: "Til kommuner",
    href: "/til-kommuner",
    children: [
      { label: "Pæd. særforanstaltninger", href: "/til-kommuner/saerforanstaltninger" },
      { label: "Vikardækning", href: "/til-kommuner/vikardaekning" },
      { label: "Borgerforløb", href: "/til-kommuner/borgerforloeb" },
    ],
  },
  { label: "Priser", href: "/priser" },
  { label: "Kontakt", href: "/kontakt" },
];
