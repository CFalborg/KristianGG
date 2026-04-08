"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-text-dark hover:bg-primary-light transition-colors"
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white border-t border-gray-100 overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const isExpanded = openSection === link.href;
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setOpenSection(isExpanded ? null : link.href)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-text-dark hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 text-primary transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mt-1 mb-2 border-l-2 border-primary-light pl-4 flex flex-col gap-1">
                        <Link
                          href={link.href}
                          className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary-light rounded-lg transition-colors"
                        >
                          Se alle {link.label.toLowerCase()} →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-primary-light text-primary font-medium"
                                : "text-text-muted hover:bg-gray-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary-light text-primary"
                      : "text-text-dark hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/kontakt" className="mt-4 btn-primary text-center">
              Book gratis samtale
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
