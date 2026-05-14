interface Props {
  name: string;
  area: string;
  quote: string;
  issue?: string;
  initials?: string;
}

export default function TestimonialCard({ name, area, quote, issue, initials }: Props) {
  const init = initials ?? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="bg-white border border-border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md transition-shadow">
      <div
        className="text-7xl leading-none text-terracotta/20 font-bold select-none -mb-3"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote
        className="text-charcoal leading-relaxed text-base flex-1"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        {quote}
      </blockquote>

      {issue && (
        <div className="flex items-center gap-2.5 bg-terracotta/8 border border-terracotta/20 rounded-lg px-3 py-2.5 text-xs">
          <div className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
          <span className="text-charcoal font-medium">Found: {issue}</span>
        </div>
      )}

      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center text-forest text-xs font-bold flex-shrink-0">
          {init}
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">{name}</p>
          <p className="text-xs text-muted">{area}</p>
        </div>
      </div>
    </div>
  );
}
