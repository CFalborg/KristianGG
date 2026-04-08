import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="card group block">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">{description}</p>
      <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Læs mere
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
