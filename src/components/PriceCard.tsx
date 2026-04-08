type PriceCardProps = {
  title: string;
  price: string;
  duration: string;
  features: string[];
  highlighted?: boolean;
  note?: string;
};

export default function PriceCard({
  title,
  price,
  duration,
  features,
  highlighted = false,
  note,
}: PriceCardProps) {
  return (
    <div
      className={`rounded-xl p-6 border-2 flex flex-col ${
        highlighted
          ? "border-primary bg-primary-light shadow-md"
          : "border-gray-100 bg-white shadow-sm"
      }`}
    >
      {highlighted && (
        <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
          Mest populær
        </span>
      )}
      <h3 className="text-xl font-bold text-text-dark mb-1">{title}</h3>
      <div className="mb-1">
        <span className="text-4xl font-bold text-primary">{price}</span>
        {price !== "Gratis" && <span className="text-text-muted ml-1">kr</span>}
      </div>
      <p className="text-text-muted text-sm mb-5">{duration}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      {note && <p className="text-xs text-text-muted mt-auto pt-4 border-t border-gray-200">{note}</p>}
    </div>
  );
}
