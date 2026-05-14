import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1
      className="text-4xl font-bold text-charcoal mt-10 mb-4 leading-tight"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="text-3xl font-bold text-charcoal mt-10 mb-4 leading-tight"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-2xl font-bold text-charcoal mt-8 mb-3"
      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-charcoal leading-relaxed mb-5 text-[1.05rem]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 pl-0 list-none counter-reset-[item]">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 text-charcoal leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-charcoal">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-terracotta pl-6 py-1 my-8 text-muted italic text-lg leading-relaxed">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors"
    >
      {children}
    </Link>
  ),
  hr: () => <hr className="border-border my-10" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
