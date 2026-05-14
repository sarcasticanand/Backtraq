import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ChecklistAccordion from "@/components/ChecklistAccordion";

export const metadata: Metadata = {
  title: "How It Works — Our Inspection Process",
  description:
    "From booking to report in 12 hours. See exactly how a Backtraq inspection works — our process, inspectors, tools, and principles.",
};

const renterChecklist = [
  {
    name: "Structural & Walls",
    icon: "🧱",
    items: [
      "Cracks in walls (hairline vs. structural)",
      "Damp patches and seepage stains",
      "Fresh paint over hidden issues",
      "Plaster condition",
      "Ceiling integrity",
      "Floor levelness",
    ],
  },
  {
    name: "Electrical",
    icon: "⚡",
    items: [
      "All socket earthing",
      "MCB / fuse box condition",
      "Visible wiring integrity",
      "Switchboard condition",
      "AC point capacity",
      "Geyser wiring",
    ],
  },
  {
    name: "Plumbing & Water",
    icon: "🚿",
    items: [
      "Water pressure test",
      "Hot/cold water availability",
      "Drain flow rate",
      "Under-sink pipes",
      "Overhead tank condition",
    ],
  },
  {
    name: "Kitchen",
    icon: "🍳",
    items: [
      "Gas line arrangement",
      "Exhaust provision",
      "Counter and cabinet condition",
      "Sink drain and supply",
      "Tile grouting moisture",
    ],
  },
  {
    name: "Bathrooms",
    icon: "🚽",
    items: [
      "Tile and grout condition",
      "Flush mechanism",
      "Exhaust ventilation",
      "Geyser safety",
      "Drainage speed",
      "Waterproofing test",
    ],
  },
  {
    name: "Safety & Society",
    icon: "🔐",
    items: [
      "Door lock quality",
      "Balcony railing safety",
      "Maintenance charge clarity",
      "Parking allocation",
      "Common area condition",
    ],
  },
];

const buyerExtra = [
  {
    name: "Structural (Buyer-only)",
    icon: "🏗️",
    items: [
      "Foundation settling signs",
      "Load-bearing wall identification",
      "Column and beam condition",
      "Roof slab condition",
      "Expansion joint status",
    ],
  },
  {
    name: "Legal Flags (Buyer-only)",
    icon: "📋",
    items: [
      "Illegal construction indicators",
      "Floor plan deviations",
      "Occupancy certificate flag",
      "Society NOC status",
      "Balcony encroachments",
    ],
  },
];

const inspectors = [
  {
    name: "Ramesh P.",
    title: "Senior Inspector",
    background: "12 years as building maintenance supervisor, DLF Properties. Specialist in electrical and structural assessment.",
    inspections: "340+",
    city: "Gurgaon",
  },
  {
    name: "Suresh K.",
    title: "Lead Inspector",
    background: "Civil engineering background, 8 years with PWD followed by 4 years of private inspections. Expert in waterproofing and plumbing.",
    inspections: "210+",
    city: "Delhi",
  },
  {
    name: "Anil V.",
    title: "Inspector",
    background: "Former site supervisor with a mid-size construction firm in Noida. Specialises in new construction and under-construction assessments.",
    inspections: "95+",
    city: "Noida / Faridabad",
  },
];

const tools = [
  { name: "Moisture meter", icon: "💧", what: "Detects moisture behind walls regardless of fresh paint. Makes hidden seepage visible." },
  { name: "Socket tester", icon: "⚡", what: "Tests earthing, polarity, and live/neutral wiring in every socket. Essential for safety." },
  { name: "Drain flow timer", icon: "⏱️", what: "Times how fast drains clear. Identifies partial blockages before they become full ones." },
  { name: "Thermal camera", icon: "🌡️", what: "Premium tier only. Detects heat anomalies — moisture, electrical faults, insulation gaps — invisible to the naked eye." },
  { name: "Laser level", icon: "📐", what: "Checks floor levelness. Uneven floors can indicate foundation settling or poor construction." },
  { name: "Photo documentation rig", icon: "📷", what: "Every finding is photographed with context — location, close-up, annotation. Not just 'damp found' but exactly where and how bad." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Transparency
            </div>
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              How an inspection actually works.
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              No mystery. No magic. Just a trained person with the right tools, the right checklist,
              and no incentive to tell you what you want to hear.
            </p>
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The four steps.
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Book your inspection",
                duration: "5 minutes",
                body: "Fill in the property address, preferred date and time slot, and choose your tier. We confirm by WhatsApp within 30 minutes. No upfront payment required for Standard and Basic — you can pay on the day.",
                detail: "We ask for the address so we can do a basic location assessment in advance — flood zone history, known society issues, area infrastructure.",
              },
              {
                step: "02",
                title: "The inspector arrives",
                duration: "60–90 minutes on-site",
                body: "Our inspector introduces themselves to whoever is present, explains what they'll cover, and then works systematically through the checklist. They don't rush. They don't skip rooms. They photograph everything.",
                detail: "For Premium plans with thermal imaging, add 20-30 minutes. For buyer Premium with a structural engineer, add 45-60 minutes.",
              },
              {
                step: "03",
                title: "Report compilation",
                duration: "Within 12 hours",
                body: "Every inspection goes through a two-check process: the field inspector writes the raw report, a second senior inspector reviews it before delivery. We don't deliver a report we wouldn't stake our reputation on.",
                detail: "Reports are delivered as a PDF on WhatsApp and email. They include: executive summary, risk rating, room-by-room findings, photos, and (Standard/Premium) negotiation talking points.",
              },
              {
                step: "04",
                title: "You decide",
                duration: "Entirely your call",
                body: "Sign with confidence. Negotiate using the findings. Walk away if the risk is too high. We don't have a position. Our job ends when the report is delivered.",
                detail: "Standard and Premium clients get a 15-30 minute walkthrough call with the inspector to discuss the findings before making their decision.",
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-8 p-8 rounded-2xl border border-border bg-cream hover:border-forest/30 transition-colors">
                  <div
                    className="text-7xl font-bold text-forest/10 flex-shrink-0 w-20 leading-none pt-1 hidden sm:block"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-2xl font-bold text-charcoal"
                        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                      >
                        {s.title}
                      </h3>
                      <span className="text-xs font-semibold text-terracotta bg-terracotta/10 px-3 py-1.5 rounded-full flex-shrink-0">
                        {s.duration}
                      </span>
                    </div>
                    <p className="text-charcoal mb-3 leading-relaxed">{s.body}</p>
                    <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Inspectors */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The people who do the work.
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Not consultants. Not people who read about buildings. People who&apos;ve spent years
              in them, maintaining them, building them.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspectors.map((insp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-7 h-full">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-lg mb-5">
                    {insp.name.split(" ")[0][0]}{insp.name.split(" ")[1]?.[0] ?? ""}
                  </div>
                  <h3
                    className="text-xl font-bold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {insp.name}
                  </h3>
                  <p className="text-terracotta text-sm font-semibold mb-4">{insp.title}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">{insp.background}</p>
                  <div className="flex items-center gap-4 text-xs text-muted border-t border-border pt-4">
                    <span><strong className="text-charcoal">{insp.inspections}</strong> inspections</span>
                    <span>Based: {insp.city}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-4">
            <span className="text-terracotta text-sm font-semibold uppercase tracking-wider">Complete checklist</span>
          </AnimatedSection>
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Every renter checkpoint. Expanded.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <ChecklistAccordion categories={renterChecklist} />
          </AnimatedSection>

          <div className="mt-16">
            <AnimatedSection className="mb-12">
              <h2
                className="text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Extra buyer-only checks.
              </h2>
              <p className="text-muted">These are in addition to the renter checklist, not instead of it.</p>
            </AnimatedSection>
            <AnimatedSection>
              <ChecklistAccordion categories={buyerExtra} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The tools we bring.
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Not to impress you. To find things a human eye can&apos;t.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-border p-6">
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3
                    className="font-bold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{tool.what}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Our non-negotiables.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                title: "We don't take commissions from landlords or brokers.",
                body: "Ever. Not a referral fee, not a partnership, not an 'introduction bonus'. Zero. When we say there's damp behind the wall, there's damp behind the wall.",
              },
              {
                title: "We report what we find. Not what's convenient.",
                body: "If the landlord is standing in the room, our inspector still calls it. If the finding risks the deal, our inspector still calls it. That's the job.",
              },
              {
                title: "Every report is reviewed by a second inspector.",
                body: "Not because we don't trust our people. Because two sets of eyes catch things one misses. Our clients deserve that.",
              },
              {
                title: "If we miss something obvious, we re-inspect for free.",
                body: "Our reports are our reputation. If something obvious was there and we missed it — not something that developed later, but something that was there — we go back. No argument.",
              },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border border-cream/15 rounded-2xl p-7 hover:border-cream/30 transition-colors">
                  <h3
                    className="text-xl font-bold text-cream mb-3"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Ready to book?
            </h2>
            <p className="text-muted text-lg mb-8">Takes 5 minutes. Saves months of regret.</p>
            <Link
              href="/book"
              className="inline-block bg-forest text-cream font-semibold px-8 py-4 rounded-xl text-lg hover:bg-forest-dark transition-colors"
            >
              Book an Inspection
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
