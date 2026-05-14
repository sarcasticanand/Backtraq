import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <section className="pt-32 pb-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-forest transition-colors mb-8"
          >
            ← Back to all articles
          </Link>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-muted">{article.readTime}</span>
            <span className="text-xs text-muted">·</span>
            <span className="text-xs text-muted">{article.date}</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center text-forest text-xs font-bold">
              {article.author.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="text-sm font-semibold text-charcoal">{article.author}</p>
              <p className="text-xs text-muted">Inspector, Backtraq</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-border p-8 sm:p-12">
            <Post />
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Ready to know what you&apos;re signing?
          </h2>
          <p className="text-cream/70 mb-8">
            Book an inspection before you commit. 5 minutes to book. 12 hours to your report.
          </p>
          <Link
            href="/book"
            className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl hover:bg-terracotta-dark transition-colors"
          >
            Book an Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
