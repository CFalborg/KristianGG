import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  centered?: boolean;
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/kontakt",
  secondaryCtaText,
  secondaryCtaHref,
  centered = false,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-light via-white to-white">
      <div className="container-width py-16 md:py-24">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {(ctaText || secondaryCtaText) && (
            <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
              {ctaText && (
                <Link href={ctaHref} className="btn-primary">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="btn-secondary">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary-light" />
    </section>
  );
}
