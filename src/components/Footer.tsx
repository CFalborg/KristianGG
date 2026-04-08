import Link from "next/link";
import { BUSINESS, SITE_URL } from "@/lib/constants";

const FOOTER_SECTIONS = [
  {
    title: "Til dig",
    links: [
      { label: "Nervesystemet & ro", href: "/til-dig/nervesystemet" },
      { label: "Naturterapi", href: "/til-dig/naturterapi" },
      { label: "Psykoterapi", href: "/til-dig/psykoterapi" },
      { label: "Online terapi", href: "/til-dig/psykoterapi" },
    ],
  },
  {
    title: "Til virksomheder",
    links: [
      { label: "Workshops", href: "/til-virksomheder/workshops" },
      { label: "Foredrag", href: "/til-virksomheder/foredrag" },
      { label: "Medarbejdertrivsel", href: "/til-virksomheder/trivsel" },
    ],
  },
  {
    title: "Til kommuner",
    links: [
      { label: "Særforanstaltninger", href: "/til-kommuner/saerforanstaltninger" },
      { label: "Vikardækning", href: "/til-kommuner/vikardaekning" },
      { label: "Borgerforløb", href: "/til-kommuner/borgerforloeb" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-lg text-sm font-bold">K</span>
              <span className="font-bold text-lg">Kristian GG</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Reg. psykoterapeut og hypnoterapeut i Odense. Specialiseret i nervesystemsbaseret
              terapi for private, virksomheder og kommuner på Fyn og i hele Syddanmark.
            </p>
            <p className="text-gray-500 text-xs mb-4">{BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.city}</p>
            <div className="flex gap-3 text-sm">
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="text-gray-400 hover:text-white transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <div className="flex gap-3 mt-2">
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook</a>
              <span className="text-gray-600">·</span>
              <a href={BUSINESS.trustpilot} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Trustpilot</a>
            </div>
          </div>

          {/* Nav sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {currentYear} {BUSINESS.name}. Reg. Psykoterapeut (FaDP). Alle rettigheder forbeholdes.</p>
          <div className="flex gap-4">
            <Link href="/om" className="hover:text-gray-300 transition-colors">Om Kristian</Link>
            <Link href="/priser" className="hover:text-gray-300 transition-colors">Priser</Link>
            <a href={SITE_URL} className="hover:text-gray-300 transition-colors">kristiangg.dk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
