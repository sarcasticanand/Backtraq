import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Sample Inspection Report — See What You Get",
  description:
    "See a real Backtraq inspection report before you book. 2BHK, Sector 49 Gurgaon. Photo documentation, risk scoring, and negotiation talking points.",
};

const findings = [
  {
    severity: "High",
    color: "red",
    room: "Master Bedroom",
    finding: "Active seepage behind wardrobe, NW wall",
    detail:
      "Moisture meter reading: 78% (threshold: 25%). Hidden behind freshly painted surface. Likely source: external waterproofing failure or terrace drainage issue above.",
    recommendation: "Pre-move-in repair essential. Negotiate reduction or written commitment to fix within 30 days.",
    photo: "Moisture meter reading 78% on bedroom wall, annotated photo",
  },
  {
    severity: "High",
    color: "red",
    room: "Kitchen",
    finding: "Faulty earthing — socket near sink",
    detail:
      "Socket tester confirmed incorrect earthing on kitchen socket adjacent to sink. Water proximity makes this a direct shock hazard.",
    recommendation: "Request immediate electrician fix before signing. Non-negotiable safety item.",
    photo: "Socket tester showing earthing fault, kitchen",
  },
  {
    severity: "Medium",
    color: "amber",
    room: "Bathroom 2",
    finding: "Drainage slow — potential partial blockage",
    detail:
      "Drain cleared in 4.2 minutes (standard: <2 min). Likely partial blockage in the P-trap. Functional but will worsen.",
    recommendation: "Request plumber visit before move-in. Low cost to fix (₹500-800).",
    photo: "Drain timer documentation, bathroom 2",
  },
  {
    severity: "Medium",
    color: "amber",
    room: "Living Room",
    finding: "Hairline cracks — 3 locations, E wall",
    detail:
      "Three hairline cracks noted, 20-35cm length each. Current assessment: cosmetic/settling, not structural. Monitor if worsening.",
    recommendation: "Document with photos. Not a deal-breaker but should be noted in the lease agreement.",
    photo: "Crack documentation, living room east wall",
  },
  {
    severity: "Low",
    color: "green",
    room: "All Rooms",
    finding: "General electrical — 9/11 sockets pass",
    detail:
      "9 of 11 sockets tested pass earthing and polarity check. 2 sockets (bedroom 2, main hall) excluded from finding above.",
    recommendation: "No action needed for the 9 passing sockets.",
    photo: "Socket testing log, all rooms",
  },
];

const negotiationPoints = [
  {
    item: "Active seepage, master bedroom",
    ask: "Repair before move-in OR ₹5,000-8,000 deposit reduction + written timeline",
    priority: "Must-have",
  },
  {
    item: "Faulty kitchen socket earthing",
    ask: "Electrician certification before move-in. Non-negotiable for safety.",
    priority: "Must-have",
  },
  {
    item: "Slow bathroom 2 drainage",
    ask: "Plumber visit before move-in. ₹500-800 cost to them, major inconvenience to you.",
    priority: "Recommended",
  },
  {
    item: "Hairline cracks — document in lease",
    ask: "Add clause: cracks noted at move-in, not tenant liability at move-out.",
    priority: "Recommended",
  },
];

const severityColor: Record<string, string> = {
  red: "bg-red-50 border-red-200 text-red-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  green: "bg-green-50 border-green-200 text-green-700",
};

const severityDot: Record<string, string> = {
  red: "bg-red-500",
  amber: "bg-amber-500",
  green: "bg-green-500",
};

export default function SampleReportPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Sample Report
            </div>
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What a real report looks like.
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              This is an actual inspection report format — property details changed, findings representative.
              What you receive looks exactly like this.
            </p>
          </div>
        </div>
      </section>

      {/* Report viewer */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Report header */}
          <AnimatedSection>
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="bg-forest text-cream px-8 py-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-cream/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full border border-terracotta" />
                      </div>
                      <span className="text-cream/80 text-sm font-semibold" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Backtraq</span>
                    </div>
                    <h2
                      className="text-2xl font-bold text-cream"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      Inspection Report
                    </h2>
                    <p className="text-cream/70 text-sm mt-1">Standard Plan · 75-point inspection</p>
                  </div>
                  <div className="text-right text-sm text-cream/70">
                    <p>Report #BT-2024-0847</p>
                    <p>Inspected: 14 Nov 2024</p>
                    <p>Delivered: 14 Nov 2024, 11:42 PM</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-border">
                {[
                  { label: "Property", value: "2BHK, 3rd floor" },
                  { label: "Location", value: "Sector 49, Gurgaon" },
                  { label: "Built-up area", value: "~1,100 sqft" },
                  { label: "Inspector", value: "Ramesh P." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-muted mb-1">{item.label}</p>
                    <p className="font-semibold text-charcoal text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Risk summary */}
              <div className="px-8 py-6">
                <h3
                  className="font-bold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Executive Summary
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { count: 2, label: "High Priority", color: "bg-red-500" },
                    { count: 2, label: "Medium Priority", color: "bg-amber-500" },
                    { count: 1, label: "Low / Info", color: "bg-green-500" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-xl bg-cream border border-border">
                      <div className={`w-3 h-3 rounded-full ${s.color} mx-auto mb-2`} />
                      <p
                        className="text-3xl font-bold text-charcoal"
                        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                      >
                        {s.count}
                      </p>
                      <p className="text-xs text-muted mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                  <strong>Overall assessment:</strong> Property has 2 high-priority issues that should be resolved before signing or factored into negotiation. Structural condition is adequate. Recommend conditional move-in only after addressing high-priority electrical and seepage findings.
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Findings */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="px-8 py-6 border-b border-border">
                <h3
                  className="text-xl font-bold text-charcoal"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Detailed Findings
                </h3>
              </div>

              <div className="divide-y divide-border">
                {findings.map((f, i) => (
                  <div key={i} className="px-8 py-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border flex-shrink-0 mt-0.5 ${severityColor[f.color]}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${severityDot[f.color]}`} />
                        {f.severity}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs text-muted mb-1">{f.room}</p>
                            <h4
                              className="font-bold text-charcoal mb-2"
                              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                            >
                              {f.finding}
                            </h4>
                          </div>
                        </div>
                        <p className="text-sm text-muted leading-relaxed mb-3">{f.detail}</p>
                        <div className="flex items-start gap-2 bg-cream rounded-lg px-3 py-2.5 text-sm">
                          <span className="text-forest font-semibold flex-shrink-0">Recommendation:</span>
                          <span className="text-charcoal">{f.recommendation}</span>
                        </div>
                        <p className="text-xs text-muted mt-2 italic">📷 {f.photo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Negotiation points */}
          <AnimatedSection delay={0.15}>
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="px-8 py-6 border-b border-border">
                <h3
                  className="text-xl font-bold text-charcoal"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Negotiation Talking Points
                </h3>
                <p className="text-sm text-muted mt-1">Use these when talking to the landlord. They&apos;re framed as reasonable asks, not demands.</p>
              </div>

              <div className="divide-y divide-border">
                {negotiationPoints.map((np, i) => (
                  <div key={i} className="px-8 py-5 flex items-start gap-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${
                        np.priority === "Must-have"
                          ? "bg-red-50 border border-red-200 text-red-700"
                          : "bg-amber-50 border border-amber-200 text-amber-700"
                      }`}
                    >
                      {np.priority}
                    </span>
                    <div>
                      <p className="font-semibold text-charcoal text-sm mb-1">{np.item}</p>
                      <p className="text-sm text-muted">{np.ask}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Report footer */}
          <AnimatedSection delay={0.2}>
            <div className="bg-forest text-cream rounded-2xl p-8 text-center">
              <p className="text-cream/70 text-sm mb-2">Reviewed by: Senior Inspector, Suresh K.</p>
              <p className="text-cream/50 text-xs">
                This report reflects observations at the time of inspection. Backtraq operates independently.
                We have no financial relationship with the landlord, seller, or any broker involved in this property.
              </p>
            </div>
          </AnimatedSection>
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
              Your property. Your report.
            </h2>
            <p className="text-muted text-lg mb-8">
              Book an inspection and get this level of detail on the property you&apos;re about to commit to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-forest text-cream font-semibold px-8 py-4 rounded-xl text-lg hover:bg-forest-dark transition-colors"
              >
                Book an Inspection
              </Link>
              <Link
                href="/pricing"
                className="border border-border text-charcoal font-semibold px-8 py-4 rounded-xl text-lg hover:border-forest hover:text-forest transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
