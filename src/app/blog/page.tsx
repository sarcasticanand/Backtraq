import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog & Resources — Backtraq",
  description:
    "Guides for renters and home buyers in Gurgaon and Delhi NCR. What to look for, how to negotiate, and how to avoid common mistakes.",
};

const categories = ["All", "For Renters", "For Buyers", "Guides", "Gurgaon", "Delhi"];

const articles = [
  {
    category: "For Renters",
    title: "The 7 things I check in every flat before recommending a tenant sign",
    excerpt: "After 340+ inspections in Gurgaon, here's the short list that catches 80% of problems. Written by our lead inspector, Ramesh P.",
    readTime: "5 min read",
    date: "Coming soon",
  },
  {
    category: "For Buyers",
    title: "What an illegal construction actually means for your property purchase",
    excerpt: "Not every unauthorised modification is a dealbreaker. Here's how to think about what matters and what doesn't.",
    readTime: "7 min read",
    date: "Coming soon",
  },
  {
    category: "Guides",
    title: "How to negotiate rent using an inspection report: a practical guide",
    excerpt: "Real language. Real examples. How to present findings to a landlord without starting a war.",
    readTime: "6 min read",
    date: "Coming soon",
  },
  {
    category: "Gurgaon",
    title: "Which Gurgaon sectors have the most seepage issues — and why",
    excerpt: "Based on our inspection data across 200+ properties. The answer might surprise you.",
    readTime: "4 min read",
    date: "Coming soon",
  },
  {
    category: "For Renters",
    title: "Monsoon-proofing your flat check: 9 things to verify before July",
    excerpt: "The drainage that looks fine in April will back up in July. Here's what to check while you still can negotiate.",
    readTime: "5 min read",
    date: "Coming soon",
  },
  {
    category: "For Buyers",
    title: "Under-construction inspection: what to look for at each stage",
    excerpt: "Pre-slab, post-slab, at handover. Three different inspections for three different risks.",
    readTime: "8 min read",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Resources for renters and buyers.
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Guides written by people who have inspected hundreds of properties.
              Not generic advice — specific, actionable, local.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-forest text-cream"
                      : "bg-cream border border-border text-charcoal hover:border-forest/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="bg-white border border-border rounded-2xl p-7 h-full flex flex-col hover:shadow-md hover:border-forest/30 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted">{article.date}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-charcoal mb-3 flex-1 group-hover:text-forest transition-colors"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="text-xs text-muted">{article.readTime}</span>
                    <span className="text-forest text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter CTA */}
          <AnimatedSection className="mt-16">
            <div className="bg-cream border border-border rounded-2xl p-10 text-center max-w-xl mx-auto">
              <h3
                className="text-2xl font-bold text-charcoal mb-3"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Articles dropping soon.
              </h3>
              <p className="text-muted mb-6">
                Get notified when we publish. No spam — just useful guides from inspectors who know
                what they&apos;re talking about.
              </p>
              <div className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                <button className="bg-forest text-cream font-semibold px-5 py-3 rounded-xl hover:bg-forest-dark transition-colors flex-shrink-0">
                  Notify me
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-forest text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Rather just book an inspection?
          </h2>
          <p className="text-cream/70 mb-8">Reading is useful. Knowing is better.</p>
          <Link
            href="/book"
            className="inline-block bg-terracotta text-white font-semibold px-7 py-4 rounded-xl hover:bg-terracotta-dark transition-colors"
          >
            Book an Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
