import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import ChecklistAccordion from "@/components/ChecklistAccordion";

export const metadata: Metadata = {
  title: "Pre-Purchase Property Inspection — For Home Buyers",
  description:
    "A ₹50 lakh decision deserves more than a 30-minute walkthrough. Backtraq's buyer inspection covers 120+ points. From ₹4,999.",
};

const buyerChecklist = [
  {
    name: "Structural Integrity",
    icon: "🏗️",
    items: [
      "Foundation settling signs",
      "Load-bearing wall identification",
      "Column and beam condition",
      "Staircase structural integrity",
      "Roof slab condition (top floor)",
      "Expansion joint condition",
      "Settlement cracks vs. structural cracks",
    ],
  },
  {
    name: "Electrical Systems",
    icon: "⚡",
    items: [
      "Electrical load capacity check",
      "All socket earthing (every room)",
      "Panel board / distribution box condition",
      "MCB rating adequacy",
      "Concealed wiring assessment",
      "Meter reading and connection legitimacy",
    ],
  },
  {
    name: "Plumbing & Waterproofing",
    icon: "🚿",
    items: [
      "Water supply source and pressure",
      "All bathroom waterproofing test",
      "Terrace/roof waterproofing",
      "Pipe material and age assessment",
      "Sewer line slope and flow",
      "Underground water tank condition",
      "Borewell functionality (if applicable)",
    ],
  },
  {
    name: "Legal & Documentation Flags",
    icon: "📋",
    items: [
      "Obvious illegal construction flags",
      "Balcony encroachments",
      "Floor plan deviations from approved plan",
      "Occupancy certificate / completion cert (flag if absent)",
      "Society NOC status",
    ],
  },
  {
    name: "Society & External",
    icon: "🏢",
    items: [
      "Society health — maintenance disputes",
      "Pending dues by seller",
      "Lift modernisation notices",
      "Common area condition",
      "Parking allocation document",
      "Building age and last renovation",
    ],
  },
  {
    name: "Pest & Environmental",
    icon: "🌿",
    items: [
      "Termite infestation signs",
      "Mould and fungal growth",
      "Proximity to industrial areas",
      "Drainage and waterlogging risk (area-level)",
    ],
  },
  {
    name: "Safety",
    icon: "🔐",
    items: [
      "Fire safety compliance",
      "Building height and fire NOC (flag if absent)",
      "Balcony railing load test",
      "Gas line safety",
    ],
  },
];

const standardBuyerFeatures = [
  { label: "120-point inspection", included: true },
  { label: "Detailed photo report", included: true },
  { label: "Structural risk assessment", included: true },
  { label: "Legal flag summary", included: true },
  { label: "30-min inspector call", included: true },
  { label: "Report in 24 hours", included: true },
];

const premiumBuyerFeatures = [
  { label: "120-point inspection", included: true },
  { label: "Structural engineer co-inspection", included: true },
  { label: "Thermal imaging scan", included: true },
  { label: "Legal flag summary + society docs", included: true },
  { label: "45-min inspector + SE call", included: true },
  { label: "30-day follow-up support", included: true },
];

const prePurchaseFeatures = [
  { label: "Two properties inspected", included: true },
  { label: "Comparative risk report", included: true },
  { label: "Full 120-point each", included: true },
  { label: "Decision-support summary", included: true },
  { label: "Priority scheduling", included: true },
  { label: "60-min consultation call", included: true },
];

const testimonials = [
  {
    name: "Sandeep & Meera K.",
    area: "DLF Phase 4, Gurgaon",
    quote:
      "The Backtraq inspector found an illegal kitchen extension that wasn't in the approved plan. Our legal consultant said it would have been a nightmare during resale. Saved us from a bad deal.",
    issue: "Illegal kitchen extension",
  },
  {
    name: "Rahul N.",
    area: "Noida Sector 137",
    quote:
      "We were looking at a 10-year-old flat. The Premium inspection with the structural engineer found hairline cracks in two columns. Not an immediate danger, but a valid negotiation lever. Knocked ₹4L off the price.",
    issue: "Column hairline cracks",
  },
  {
    name: "Pooja & Aditya S.",
    area: "Dwarka Expressway, Gurgaon",
    quote:
      "We used the pre-purchase package to compare two flats in the same society. The comparative report made the decision easy — one had serious waterproofing issues, the other was solid.",
    issue: "Waterproofing failure, flat B",
  },
];

const faqs = [
  {
    question: "How is a buyer inspection different from a rental inspection?",
    answer:
      "Buyer inspections are longer (2-3 hours vs. 60-90 min), cover more structural and legal flag areas, and involve more rigorous documentation. You're making a decision worth lakhs, not thousands — the inspection reflects that.",
  },
  {
    question: "Do you provide legal due diligence?",
    answer:
      "We are not lawyers and we don't do legal title verification. What we do is flag visual indicators of potential legal issues — illegal constructions, obvious deviations from floor plans, missing NOC notices — and recommend you follow up with a lawyer. Think of us as the first filter.",
  },
  {
    question: "What does a structural engineer co-inspection involve?",
    answer:
      "In the Premium plan, a qualified structural engineer joins the inspection. They focus specifically on load-bearing elements, column and beam conditions, foundation settling signs, and roof slab integrity. They provide a separate written assessment included in your report.",
  },
  {
    question: "Can you inspect under-construction properties?",
    answer:
      "Yes — and this is often the best time to inspect. We check construction quality, compliance with floor plans, material quality, and flag concerns before handover. Scope the pre-purchase package for comparison between properties.",
  },
  {
    question: "The seller won't allow an inspection before signing — what do I do?",
    answer:
      "Walk away. A seller who refuses a pre-purchase inspection is signalling something. No reputable seller with a legitimate property objects to a professional inspection. If they're insisting you sign first, that's your answer.",
  },
];

export default function ForBuyersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cream/10 text-cream/80 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              For Home Buyers
            </div>
            <h1
              className="text-5xl sm:text-6xl font-bold text-cream leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              ₹50 lakh deserves more than a{" "}
              <em className="text-terracotta not-italic">30-minute walkthrough.</em>
            </h1>
            <p className="text-xl text-cream/70 leading-relaxed mb-10">
              Independent property inspection before you sign the agreement. We find structural,
              legal, and society-level risks the seller and broker won&apos;t mention.
            </p>
            <Link
              href="/book"
              className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors"
            >
              Book Buyer Inspection — From ₹4,999
            </Link>
          </div>
        </div>
      </section>

      {/* What's at risk */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What you&apos;re actually buying.
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Beyond the floor plan and the freshly painted walls, here&apos;s what&apos;s worth checking.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏗️",
                title: "Structural integrity",
                body: "Load-bearing walls, column conditions, foundation settling, roof slab. The things that are expensive — or impossible — to fix after you own it.",
              },
              {
                icon: "⚖️",
                title: "Legal risk flags",
                body: "Illegal balcony extensions, unauthorised constructions, deviations from approved plans. These create resale problems and sometimes legal liability.",
              },
              {
                icon: "🏢",
                title: "Society health",
                body: "Maintenance disputes, pending dues by the seller, lift modernisation orders, parking allocation legality. You inherit these when you buy.",
              },
              {
                icon: "💧",
                title: "Hidden water damage",
                body: "Waterproofing failures in bathrooms, terraces, and external walls. Often invisible until the first monsoon — after which they're your problem.",
              },
              {
                icon: "🔧",
                title: "Future maintenance costs",
                body: "We flag items that need attention in 6-12 months, so you know what you're inheriting — and can negotiate accordingly.",
              },
              {
                icon: "📝",
                title: "Missing documentation flags",
                body: "Occupancy certificates, completion certificates, society NOCs. We flag their absence — and recommend you follow up before signing.",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border hover:shadow-md transition-shadow h-full">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3
                    className="text-lg font-bold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{card.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The 120-point buyer checklist.
            </h2>
            <p className="text-muted text-lg">
              More rigorous. More thorough. Because the stakes are higher.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <ChecklistAccordion categories={buyerChecklist} />
          </AnimatedSection>
        </div>
      </section>

      {/* Buyer pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Buyer pricing.
            </h2>
            <p className="text-muted text-lg">Three options depending on your situation.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <PricingCard
                name="Standard Buyer"
                price="₹4,999"
                description="Full 120-point inspection + detailed report."
                features={standardBuyerFeatures}
                ctaLabel="Book Standard"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <PricingCard
                name="Premium Buyer"
                price="₹8,999"
                description="With structural engineer co-inspection."
                features={premiumBuyerFeatures}
                popular
                ctaLabel="Book Premium"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <PricingCard
                name="Pre-purchase"
                price="₹14,999"
                description="Compare two properties. One report to decide."
                features={prePurchaseFeatures}
                ctaLabel="Book Package"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What buyers found.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Buyer questions.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Make a ₹50 lakh decision with eyes wide open.
          </h2>
          <p className="text-cream/70 text-lg mb-8">
            The inspection costs ₹4,999. The mistake costs a lot more.
          </p>
          <Link
            href="/book"
            className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors"
          >
            Book Buyer Inspection — From ₹4,999
          </Link>
        </div>
      </section>
    </>
  );
}
