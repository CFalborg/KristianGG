import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side ikke fundet – 404",
  description: "Den side du leder efter findes ikke.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-width text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-3xl font-bold">?</span>
          </div>
          <h1 className="text-4xl font-bold text-text-dark mb-3">Side ikke fundet</h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            Den side du leder efter eksisterer desværre ikke eller er blevet flyttet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Gå til forsiden
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt mig
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
