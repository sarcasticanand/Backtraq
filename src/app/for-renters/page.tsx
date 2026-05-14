import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import ChecklistAccordion from "@/components/ChecklistAccordion";

export const metadata: Metadata = {
  title: "Rental Property Inspection — For Renters",
  description:
    "Before you sign the lease, know exactly what you're getting into. Backtraq's rental inspection covers 75 points, delivers a photo report in 12 hours, from ₹1,499.",
};

const renterChecklist = [
  {
    name: "Structural & Walls",
    icon: "🧱",
    items: [
      "Cracks in walls (hairline vs. structural)",
      "Damp patches and seepage stains",
      "Fresh paint over hidden issues",
      "Plaster condition — bubbling, peeling",
      "Ceiling condition",
      "Floor levelness",
    ],
  },
  {
    name: "Electrical Systems",
    icon: "⚡",
    items: [
      "Socket earthing (all rooms)",
      "MCB / fuse box condition",
      "Visible wiring and conduit integrity",
      "Switchboard condition",
      "AC point availability and capacity",
      "Geyser wiring compliance",
    ],
  },
  {
    name: "Plumbing & Water",
    icon: "🚿",
    items: [
      "Water pressure (peak hours estimated)",
      "Hot/cold water availability",
      "Drain flow speed",
      "Under-sink pipe condition",
      "Overhead tank condition",
      "Borewell vs. municipal water clarity",
    ],
  },
  {
    name: "Kitchen",
    icon: "🍳",
    items: [
      "Gas pipeline or cylinder arrangement",
      "Exhaust fan / chimney provision",
      "Counter and cabinet condition",
      "Sink drain and water supply",
      "Tile grouting — gaps and moisture",
    ],
  },
  {
    name: "Bathrooms",
    icon: "🚽",
    items: [
      "Tile and grout condition",
      "Flush mechanism and water tank",
      "Exhaust ventilation",
      "Geyser installation safety",
      "Drainage speed",
      "Waterproofing test (floor pour test)",
    ],
  },
  {
    name: "Ventilation & Light",
    icon: "💨",
    items: [
      "Natural light adequacy per room",
      "Cross-ventilation availability",
      "Window operation and sealing",
      "Monsoon leakage risk at windows",
    ],
  },
  {
    name: "Safety & Security",
    icon: "🔐",
    items: [
      "Door lock quality and deadbolt",
      "Main door frame integrity",
      "Balcony railing safety",
      "Staircase lighting (common area)",
    ],
  },
  {
    name: "Society & Building",
    icon: "🏢",
    items: [
      "Maintenance charge clarity",
      "Parking spot existence and markings",
      "Lift operational status",
      "Common area condition",
      "Visible disputes or notices",
    ],
  },
];

const pricingBasic = [
  { label: "40 inspection checkpoints", included: true },
  { label: "Photo report", included: true },
  { label: "Basic risk summary", included: true },
  { label: "Moisture meter check", included: false },
  { label: "Negotiation talking points", included: false },
  { label: "Report in 24 hours", included: true },
];

const pricingStandard = [
  { label: "75 inspection checkpoints", included: true },
  { label: "Detailed photo report", included: true },
  { label: "Detailed risk summary", included: true },
  { label: "Moisture meter check", included: true },
  { label: "Negotiation talking points", included: true },
  { label: "Report in 12 hours", included: true },
];

const pricingPremium = [
  { label: "75 points + thermal imaging", included: true },
  { label: "Risk report with scoring", included: true },
  { label: "Thermal camera scan", included: true },
  { label: "Society background check", included: true },
  { label: "30-min inspector call", included: true },
  { label: "Same day + 7-day follow-up", included: true },
];

const testimonials = [
  {
    name: "Neha T.",
    area: "Sohna Road, Gurgaon",
    quote:
      "Inspector found the drainage backs up in the master bath during heavy rain. The landlord admitted it was a known issue. Got ₹3,000 off monthly rent and a commitment to fix before monsoon.",
    issue: "Seasonal drainage backup",
  },
  {
    name: "Vikram R.",
    area: "Vasant Kunj, Delhi",
    quote:
      "I was about to pay a 3-month deposit. The report showed two sockets with reversed polarity and a geyser that wasn't earthed properly. Absolute safety hazard. Walked away from that one.",
    issue: "Reversed polarity + geyser earthing",
  },
  {
    name: "Anjali M.",
    area: "Sector 56, Gurgaon",
    quote:
      "The negotiation talking points section was gold. I went in knowing exactly what to say — and got the deposit reduced by ₹10,000 and the seepage fixed before I moved in.",
    issue: "Seepage, 2 walls",
  },
];

const faqs = [
  {
    question: "How much notice do you need to schedule?",
    answer:
      "We can usually schedule within 24–48 hours of booking. We confirm within 30 minutes of receiving your request. For urgent situations, WhatsApp us — we'll try to accommodate.",
  },
  {
    question: "Does the landlord need to be present?",
    answer:
      "No, and we often prefer it that way. The flat should be accessible during the inspection. Ideally someone (your contact, broker, or the watchman) lets us in and stays while we work. Landlord presence can sometimes create awkward dynamics.",
  },
  {
    question: "What's in the negotiation talking points?",
    answer:
      "In the Standard and Premium plans, we give you a clear list of issues ranked by severity, with suggested asks for each. For example: 'Seepage behind bedroom wall — request pre-move-in repair or ₹X reduction in deposit.' Real language you can use.",
  },
  {
    question: "What if I'm on a tight timeline?",
    answer:
      "The Standard plan delivers a report within 12 hours of the inspection. The Premium plan offers same-day delivery. If you're signing tomorrow and inspecting today, the Standard plan is designed for exactly that.",
  },
  {
    question: "Do you inspect furnished and unfurnished flats?",
    answer:
      "Both. For furnished flats, we also check the condition of major items included in the lease (ACs, geysers, kitchen appliances). For unfurnished, we focus purely on the structure and systems.",
  },
];

export default function ForRentersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              For Renters
            </div>
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              You&apos;re about to commit ₹1.5 lakh to a house you saw for{" "}
              <em className="text-terracotta not-italic">20 minutes.</em>
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-10">
              We spend 90 minutes finding what you missed. So you don&apos;t spend 11 months regretting it.
            </p>
            <Link
              href="/book"
              className="inline-block bg-forest text-cream font-semibold px-8 py-4 rounded-xl text-lg hover:bg-forest-dark transition-colors"
            >
              Book Renter Inspection — ₹2,499
            </Link>
          </div>
        </div>
      </section>

      {/* Hidden costs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The real cost of getting it wrong.
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Before you even turn on the first tap, you&apos;ve committed more than most people realise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Security deposit", value: "₹60,000+", note: "Typically 2 months. Hard to recover if disputes arise." },
              { label: "Brokerage", value: "₹30,000+", note: "1 month's rent, gone the moment you sign." },
              { label: "Moving + setup", value: "₹15,000+", note: "Packers, movers, curtains, small fixes." },
              { label: "Mental load of a bad house", value: "Priceless", note: "11 months of noise, damp, broken things, landlord fights." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-cream border border-border">
                  <p
                    className="text-3xl font-bold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {item.value}
                  </p>
                  <p className="font-semibold text-charcoal mb-2">{item.label}</p>
                  <p className="text-sm text-muted">{item.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5 things landlords don't tell you */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">What they don&apos;t mention</span>
            <h2
              className="text-4xl font-bold text-charcoal mt-3 mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The 5 things landlords won&apos;t tell you.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Seepage behind fresh paint",
                body: "A coat of paint takes 2 hours and costs ₹800. It hides months of damp. We use a moisture meter to detect it regardless of what the wall looks like.",
              },
              {
                num: "02",
                title: "Low water pressure that only shows at 7am",
                body: "You visit at 11am when the building has low load. By 7am when you're rushing to work, there's a trickle. We document pressure and ask the watchman the right questions.",
              },
              {
                num: "03",
                title: "Faulty earthing in sockets",
                body: "It looks fine. It is not fine. A socket with incorrect earthing is a shock waiting to happen — especially for geysers and ACs. We test every socket.",
              },
              {
                num: "04",
                title: "Drainage that backs up in monsoon",
                body: "The flat drains fine in April. In July, it backs up into the kitchen. We look at drain grade, building drainage history, and ask the right questions.",
              },
              {
                num: "05",
                title: "Society maintenance disputes",
                body: "That ₹2,000/month 'maintenance' turns into ₹4,500 with parking and a gym you never use. We review what's known about the society before you're locked in.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white border border-border hover:border-forest/30 transition-colors">
                  <div
                    className="text-4xl font-bold text-forest/15 flex-shrink-0 w-12"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-charcoal mb-2"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The 75-point checklist.
            </h2>
            <p className="text-muted text-lg">
              Every category we cover. No shortcuts.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <ChecklistAccordion categories={renterChecklist} />
          </AnimatedSection>
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
              What renters found.
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

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Renter pricing.
            </h2>
            <p className="text-muted text-lg">Pick what fits your situation.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}><PricingCard name="Basic" price="₹1,499" description="Quick essential check." features={pricingBasic} /></AnimatedSection>
            <AnimatedSection delay={0.1}><PricingCard name="Standard" price="₹2,499" description="Everything you need to decide." features={pricingStandard} popular /></AnimatedSection>
            <AnimatedSection delay={0.2}><PricingCard name="Premium" price="₹3,999" description="Thermal imaging included." features={pricingPremium} /></AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Renter questions.
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
            Book before you sign.
          </h2>
          <p className="text-cream/70 text-lg mb-8">Not after you regret.</p>
          <Link
            href="/book"
            className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors"
          >
            Book Renter Inspection — ₹2,499
          </Link>
        </div>
      </section>
    </>
  );
}
