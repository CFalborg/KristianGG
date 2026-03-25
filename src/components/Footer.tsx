import Link from "next/link";
import { BUSINESS, NAV_LINKS, SITE_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-lg text-sm font-bold">
                K
              </span>
              <span className="font-bold text-lg">Kristian GG</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Certificeret hypnoterapeut og NLP-terapeut i Odense. Hjælp til stress,
              angst og personlig udvikling – i klinikken eller online.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <span className="text-gray-600">·</span>
              <a
                href={BUSINESS.trustpilot}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Trustpilot
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hurtige links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li>{BUSINESS.address.city}, Danmark</li>
              <li className="text-gray-500">{BUSINESS.openingHours}</li>
            </ul>
            <Link
              href="/kontakt"
              className="mt-4 inline-block btn-secondary text-sm py-2 px-4 border-gray-600 text-gray-300 hover:bg-primary hover:border-primary hover:text-white"
            >
              Book en gratis samtale
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {currentYear} {BUSINESS.fullName}. Alle rettigheder forbeholdes.</p>
          <p>
            <a href={SITE_URL} className="hover:text-gray-300 transition-colors">
              kristiangg.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
