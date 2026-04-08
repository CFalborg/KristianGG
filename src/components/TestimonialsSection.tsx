import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const TESTIMONIALS = [
  {
    quote:
      "Kristian er utrolig dygtig og professionel. Jeg gik til ham med en kraftig angst, og efter bare 3 sessioner mærkede jeg en kæmpe forskel. Kan klart anbefale ham.",
    author: "Mette H.",
    rating: 5,
  },
  {
    quote:
      "Jeg var skeptisk over for hypnose, men Kristian formåede at skabe et trygt rum, hvor jeg virkelig kunne slappe af og arbejde med mine udfordringer. Super professionel.",
    author: "Thomas K.",
    rating: 5,
  },
  {
    quote:
      "Kristian GG hjælp mig med at overvinde min rygevane efter 15 år. Bare én session og jeg har ikke røget siden. Fantastisk!",
    author: "Susanne B.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-bg-cream">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Hvad mine klienter siger
          </h2>
          <p className="text-text-muted text-lg">
            Læs mere på{" "}
            <a
              href={BUSINESS.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Trustpilot
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="card">
              <StarRating rating={t.rating} />
              <blockquote className="text-text-muted text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-text-dark font-semibold text-sm">— {t.author}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={BUSINESS.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Se alle anmeldelser på Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
