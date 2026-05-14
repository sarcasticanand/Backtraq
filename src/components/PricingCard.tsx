import Link from "next/link";
import { Check, Minus } from "lucide-react";

interface Feature {
  label: string;
  included: boolean | string;
}

interface Props {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaLabel = "Book Now",
  ctaHref = "/book",
}: Props) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        popular
          ? "bg-forest text-cream shadow-2xl ring-2 ring-forest"
          : "bg-white border border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-terracotta text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`font-serif text-xl font-bold mb-1 ${popular ? "text-cream" : "text-charcoal"}`}
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {name}
        </h3>
        <div className="flex items-baseline gap-1 my-3">
          <span className={`text-3xl font-bold ${popular ? "text-cream" : "text-charcoal"}`}>
            {price}
          </span>
        </div>
        <p className={`text-sm ${popular ? "text-cream/70" : "text-muted"}`}>{description}</p>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            {f.included ? (
              <Check
                size={16}
                className={`mt-0.5 flex-shrink-0 ${popular ? "text-terracotta" : "text-forest"}`}
              />
            ) : (
              <Minus size={16} className="mt-0.5 flex-shrink-0 text-muted/40" />
            )}
            <span
              className={`text-sm ${
                f.included
                  ? popular
                    ? "text-cream/90"
                    : "text-charcoal"
                  : "text-muted/50"
              }`}
            >
              {typeof f.included === "string" ? f.included : f.label}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block text-center text-sm font-semibold py-3 rounded-lg transition-all ${
          popular
            ? "bg-terracotta text-white hover:bg-terracotta-dark"
            : "bg-forest text-cream hover:bg-forest-dark"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
