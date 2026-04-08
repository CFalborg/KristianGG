"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavChild } from "@/lib/constants";

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavChild[];
};

export default function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 120);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1 transition-colors ${
          isActive
            ? "text-primary bg-primary-light"
            : "text-text-muted hover:text-primary hover:bg-primary-light"
        }`}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          {items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === child.href
                  ? "text-primary bg-primary-light font-medium"
                  : "text-text-muted hover:text-primary hover:bg-gray-50"
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
