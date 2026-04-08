import Link from "next/link";

type AudienceCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  accentColor?: string;
};

export default function AudienceCard({
  icon,
  title,
  subtitle,
  bullets,
  href,
  accentColor = "border-primary",
}: AudienceCardProps) {
  return (
    <div className={`card border-t-4 ${accentColor} flex flex-col`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-text-dark mb-1">{title}</h3>
      <p className="text-text-muted text-sm mb-4">{subtitle}</p>
      <ul className="space-y-2 flex-1 mb-6">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
            <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="btn-primary inline-flex items-center gap-2 justify-center text-sm py-2.5"
      >
        Læs mere
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
