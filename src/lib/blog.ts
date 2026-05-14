export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    slug: "7-things-inspectors-check",
    title: "The 7 things I check in every flat before recommending a tenant sign",
    category: "For Renters",
    excerpt:
      "After 340+ inspections in Gurgaon, here's the short list that catches 80% of problems. Written by our lead inspector, Ramesh P.",
    readTime: "5 min read",
    date: "April 2025",
    author: "Ramesh P.",
  },
  {
    slug: "illegal-construction-purchase",
    title: "What an illegal construction actually means for your property purchase",
    category: "For Buyers",
    excerpt:
      "Not every unauthorised modification is a dealbreaker. Here's how to think about what matters and what doesn't.",
    readTime: "7 min read",
    date: "March 2025",
    author: "Suresh K.",
  },
  {
    slug: "negotiate-rent-inspection-report",
    title: "How to negotiate rent using an inspection report: a practical guide",
    category: "Guides",
    excerpt:
      "Real language. Real examples. How to present findings to a landlord without starting a war.",
    readTime: "6 min read",
    date: "March 2025",
    author: "Ramesh P.",
  },
  {
    slug: "gurgaon-sectors-seepage",
    title: "Which Gurgaon sectors have the most seepage issues — and why",
    category: "Gurgaon",
    excerpt:
      "Based on our inspection data across 200+ properties. The answer might surprise you.",
    readTime: "4 min read",
    date: "February 2025",
    author: "Suresh K.",
  },
  {
    slug: "monsoon-proofing-flat",
    title: "Monsoon-proofing your flat check: 9 things to verify before July",
    category: "For Renters",
    excerpt:
      "The drainage that looks fine in April will back up in July. Here's what to check while you still can negotiate.",
    readTime: "5 min read",
    date: "February 2025",
    author: "Anil V.",
  },
  {
    slug: "under-construction-inspection",
    title: "Under-construction inspection: what to look for at each stage",
    category: "For Buyers",
    excerpt:
      "Pre-slab, post-slab, at handover. Three different inspections for three different risks.",
    readTime: "8 min read",
    date: "January 2025",
    author: "Suresh K.",
  },
];
