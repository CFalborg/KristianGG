import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary-dark transition-colors"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-lg text-sm font-bold">
              K
            </span>
            <span>Kristian GG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-primary-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/kontakt" className="btn-primary text-sm py-2 px-5">
              Book en tid
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
