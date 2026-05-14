import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CostCalculator from "@/components/CostCalculator";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroAnnotation from "@/components/HeroAnnotation";

export const metadata: Metadata = {
  title: "Backtraq — Home Inspections for Renters & Buyers in Gurgaon & Delhi NCR",
  description:
    "Independent home inspections. 75-point check, photo report in 12 hours, zero allegiance to the landlord or broker. Starting ₹1,499.",
};

const renterFeatures = [
  { label: "40 inspection checkpoints", included: true },
  { label: "Photo report", included: true },
  { label: "Basic risk summary", included: true },
  { label: "Moisture meter check", included: false },
  { label: "Negotiation talking points", included: false },
  { label: "Inspector walkthrough call", included: false },
];

const standardFeatures = [
  { label: "75 inspection checkpoints", included: true },
  { label: "Photo report + detailed risk summary", included: true },
  { label: "Moisture meter check", included: true },
  { label: "Negotiation talking points", included: true },
  { label: "15-min inspector walkthrough call", included: true },
  { label: "Report in 12 hours", included: true },
];

const premiumFeatures = [
  { label: "75 checkpoints + thermal imaging", included: true },
  { label: "Detailed risk summary with scoring", included: true },
  { label: "Moisture meter + thermal camera", included: true },
  { label: "Society background check", included: true },
  { label: "30-min inspector walkthrough call", included: true },
  { label: "Same-day report + 7-day follow-up", included: true },
];

const faqs = [
  {
    question: "How is this different from what brokers tell me?",
    answer:
      "Brokers earn commission when the deal closes. We earn ours regardless of whether you sign or walk away. That's the whole difference. Our inspector's job is to tell you the truth about the property, not to keep the deal alive.",
  },
  {
    question: "What if the landlord refuses to let you inspect?",
    answer:
      "That's information. Any landlord who refuses an independent inspection before lease signing has something to hide. We'd suggest finding a different property. In our experience, landlords with well-maintained properties welcome inspections.",
  },
  {
    question: "Do you do repairs or just inspect?",
    answer:
      "Just inspect. We deliberately don't do repairs — because any company that inspects AND repairs has a financial incentive to find problems. We find what's there. What you do with that is entirely your call.",
  },
  {
    question: "How fast can you inspect?",
    answer:
      "We typically confirm within 30 minutes of booking and can usually schedule within 24-48 hours. For urgent requests, WhatsApp us directly — we'll do our best.",
  },
  {
    question: "What if I find issues after moving in?",
    answer:
      "If you find something we should have caught and flagged — something obvious, not something that developed after — we'll re-inspect for free. No questions asked. We stand behind our reports.",
  },
  {
    question: "Do you work outside Gurgaon and Delhi?",
    answer:
      "Currently we operate across Gurgaon and Delhi NCR (including Noida and Faridabad). If you're in a location we don't yet cover, WhatsApp us — we're expanding and may still be able to help.",
  },
];

const testimonials = [
  {
    name: "Riya M.",
    area: "Sector 49, Gurgaon",
    quote:
      "The inspector found active seepage behind the wardrobe that the landlord had painted over. Saved me from a nightmare. Negotiated ₹5,000 off the rent and got a written commitment to fix it.",
    issue: "Seepage behind wardrobe",
  },
  {
    name: "Arjun K.",
    area: "Dwarka, Delhi",
    quote:
      "I was ready to sign the next day. The report came back with faulty earthing in the kitchen and bathroom. Honestly a safety issue, not just an inconvenience. So glad I did this first.",
    issue: "Faulty earthing, 3 sockets",
  },
  {
    name: "Priya & Rohan S.",
    area: "Golf Course Road, Gurgaon",
    quote:
      "We were buying our first home. The Backtraq inspector flagged an illegal balcony extension and potential water table issues in the basement. Our lawyer said those would have been a headache for years.",
    issue: "Illegal balcony extension",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(31,61,42,0.06),transparent)]" />
        {/* Large decorative number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-forest/4 leading-none select-none pointer-events-none hidden xl:block"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          aria-hidden="true"
        >
          75
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                Gurgaon & Delhi NCR
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.04] mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Don&apos;t sign the lease until you know what&apos;s{" "}
                <em className="text-terracotta not-italic">behind the walls.</em>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
                Independent home inspections for renters and buyers in Gurgaon & Delhi NCR.
                75-point check, photo report in 12 hours, zero allegiance to the landlord or broker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-forest text-cream font-semibold px-7 py-4 rounded-xl text-base hover:bg-forest-dark transition-colors text-center shadow-sm hover:shadow-md"
                >
                  Book an Inspection
                </Link>
                <Link
                  href="/sample-report"
                  className="border border-border text-charcoal font-semibold px-7 py-4 rounded-xl text-base hover:border-forest hover:text-forest transition-colors text-center"
                >
                  See a Sample Report →
                </Link>
              </div>

              {/* Stats — bolder treatment */}
              <div className="mt-12 grid grid-cols-3 border border-border rounded-xl overflow-hidden">
                {[
                  { value: "200+", label: "Inspections" },
                  { value: "₹18L", label: "Saved for tenants" },
                  { value: "67%", label: "Deals renegotiated" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`py-5 px-4 text-center ${i < 2 ? "border-r border-border" : ""}`}
                  >
                    <p
                      className="text-3xl font-bold text-charcoal leading-none mb-1.5"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedSection>
              <HeroAnnotation />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">The problem</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mt-3"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The rental market has a built-in information problem. We fix it.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Landlords show you the good stuff.",
                body: "We find what's hidden behind the freshly painted wall. The seepage. The faulty socket. The drainage that only backs up during monsoon.",
              },
              {
                num: "02",
                title: "Brokers want the deal closed.",
                body: "We have no commission tied to whether you sign. Our inspector gets paid the same whether you move in or walk away. That's the difference.",
              },
              {
                num: "03",
                title: "You can't unsee a bad house.",
                body: "Better to spend ₹2,499 now than ₹50,000 later. Deposit fights, broken things, months of stress. We've seen it. You don't have to.",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`flex gap-8 py-10 ${i < 2 ? "border-b border-border" : ""}`}>
                  <div
                    className="text-6xl font-bold text-forest/10 flex-shrink-0 leading-none pt-1 hidden sm:block w-16"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    aria-hidden="true"
                  >
                    {card.num}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-muted text-lg leading-relaxed max-w-2xl">{card.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cost calculator */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">
                The maths
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-charcoal mt-3 mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                The ₹50,000 mistake you almost made.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Most people think of rent as a monthly number. But the real commitment is made on day one —
                before you&apos;ve spent a single night in the flat.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Drag the slider to see how much you&apos;re actually committing, and what a bad decision
                really costs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <CostCalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">
              The process
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mt-3 mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Four steps. No surprises.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Book your inspection",
                body: "Tell us the property, date, and time. We confirm within 30 minutes by WhatsApp.",
              },
              {
                step: "02",
                title: "We inspect",
                body: "Trained inspector spends 60–90 minutes covering 75+ checkpoints. No landlord hovering.",
              },
              {
                step: "03",
                title: "You get your report",
                body: "Detailed photo report + risk summary on WhatsApp within 12 hours. Clear language, no jargon.",
              },
              {
                step: "04",
                title: "You decide",
                body: "Sign with confidence, negotiate better, or walk away. We don't take sides. Ever.",
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative p-8 rounded-2xl bg-cream border border-border h-full hover:border-forest/30 hover:shadow-sm transition-all">
                  <div
                    className="text-6xl font-bold text-forest/10 mb-4 leading-none"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {s.step}
                  </div>
                  <h3
                    className="text-xl font-bold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed press/credibility strip */}
      <section className="py-12 bg-forest">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-xs font-semibold uppercase tracking-widest text-center mb-8">As seen in</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["YourStory", "Housing.com", "Moneycontrol"].map((outlet) => (
              <span
                key={outlet}
                className="text-cream/60 font-semibold text-lg"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">
              Real findings
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mt-3 mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What we found for them.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              These aren&apos;t edge cases. These are Tuesday inspections in normal apartments.
            </p>
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

      {/* Two-path: Renter vs Buyer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What are you looking at?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0.05}>
              <Link
                href="/for-renters"
                className="group block p-10 rounded-2xl bg-cream border border-border hover:border-forest hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-5">🏠</div>
                <div className="inline-block bg-forest/8 text-forest text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  I&apos;m renting
                </div>
                <h3
                  className="text-2xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Rental Inspection
                </h3>
                <p className="text-muted mb-6">
                  Avoid bad flats. Negotiate deposit. Move in confident.
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xl font-bold text-forest"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    From ₹1,499
                  </span>
                  <span className="text-forest group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Link
                href="/for-buyers"
                className="group block p-10 rounded-2xl bg-forest text-cream hover:bg-forest-dark hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-5">🏗️</div>
                <div className="inline-block bg-cream/10 text-cream/80 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  I&apos;m buying
                </div>
                <h3
                  className="text-2xl font-bold text-cream mb-3"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Buyer Inspection
                </h3>
                <p className="text-cream/70 mb-6">
                  Make a ₹50 lakh decision with eyes wide open.
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xl font-bold text-terracotta"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    From ₹4,999
                  </span>
                  <span className="text-cream group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mt-3 mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Simple, honest pricing.
            </h2>
            <p className="text-muted text-lg">For renters. No surprise charges.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <PricingCard
                name="Basic"
                price="₹1,499"
                description="Covers the essentials. Good for quick checks."
                features={renterFeatures}
                ctaHref="/book?tier=basic"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <PricingCard
                name="Standard"
                price="₹2,499"
                description="Our most popular. Everything you need to decide."
                features={standardFeatures}
                popular
                ctaHref="/book?tier=standard"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <PricingCard
                name="Premium"
                price="₹3,999"
                description="For the thorough ones. Includes thermal imaging."
                features={premiumFeatures}
                ctaHref="/book?tier=premium"
              />
            </AnimatedSection>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-forest font-semibold hover:underline underline-offset-4"
            >
              See full comparison + buyer pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The questions everyone asks.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-forest text-cream relative overflow-hidden">
        <div
          className="absolute right-0 bottom-0 text-[18rem] font-bold text-cream/3 leading-none select-none pointer-events-none"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          aria-hidden="true"
        >
          75
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2
              className="text-5xl sm:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Stop guessing.
              <br />
              <em className="text-terracotta not-italic">Start knowing.</em>
            </h2>
            <p className="text-cream/70 text-xl mb-10 max-w-xl mx-auto">
              Book before you sign. Not after you regret.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors shadow-lg"
              >
                Book an Inspection
              </Link>
              <Link
                href="/sample-report"
                className="border border-cream/30 text-cream font-semibold px-8 py-4 rounded-xl text-lg hover:border-cream/60 transition-colors"
              >
                See Sample Report
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
