"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { articles } from "@/lib/blog";

const categories = ["All", "For Renters", "For Buyers", "Guides", "Gurgaon", "Delhi"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    } finally {
      setSubscribing(false);
    }
  }

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
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === activeCategory
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
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <AnimatedSection key={article.slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="bg-white border border-border rounded-2xl p-7 h-full flex flex-col hover:shadow-md hover:border-forest/30 transition-all group"
                  >
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
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted">
              No articles in this category yet.
            </div>
          )}

          {/* Newsletter CTA */}
          <AnimatedSection className="mt-16">
            <div className="bg-cream border border-border rounded-2xl p-10 text-center max-w-xl mx-auto">
              {subscribed ? (
                <>
                  <h3
                    className="text-2xl font-bold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    You&apos;re on the list.
                  </h3>
                  <p className="text-muted">We&apos;ll notify you when new guides drop. No spam.</p>
                </>
              ) : (
                <>
                  <h3
                    className="text-2xl font-bold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    Get new guides by email.
                  </h3>
                  <p className="text-muted mb-6">
                    Useful guides from inspectors who know what they&apos;re talking about. No spam.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-3 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                    />
                    <button
                      type="submit"
                      disabled={subscribing}
                      className="bg-forest text-cream font-semibold px-5 py-3 rounded-xl hover:bg-forest-dark transition-colors flex-shrink-0 disabled:opacity-60"
                    >
                      {subscribing ? "..." : "Notify me"}
                    </button>
                  </form>
                </>
              )}
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
