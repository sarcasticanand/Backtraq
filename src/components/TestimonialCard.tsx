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
    <div className="bg-white border border-border rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D97757" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-charcoal leading-relaxed text-[0.95rem]">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {issue && (
        <div className="flex items-center gap-2 bg-cream rounded-lg px-3 py-2 text-xs text-muted">
          <div className="w-2 h-2 rounded-full bg-terracotta flex-shrink-0" />
          <span>Issue found: {issue}</span>
        </div>
      )}

      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center text-forest text-xs font-bold">
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
