import Link from "next/link";

type CTASectionProps = {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTASection({
  heading = "Klar til at tage det første skridt?",
  text = "Book en gratis og uforpligtende telefonsamtale, så vi kan tale om, hvordan jeg bedst kan hjælpe dig.",
  buttonText = "Book en gratis samtale",
  buttonHref = "/kontakt",
}: CTASectionProps) {
  return (
    <section className="bg-primary">
      <div className="container-width py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-primary-light text-lg mb-8 max-w-xl mx-auto">{text}</p>
        <Link
          href={buttonHref}
          className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary-light transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
