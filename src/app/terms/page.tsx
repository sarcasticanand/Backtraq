import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Backtraq's terms of service — what we do, what we don't, and how bookings work.",
};

const sections = [
  {
    title: "The service",
    content: [
      "Backtraq provides independent property inspection services for residential renters and buyers in Gurgaon and Delhi NCR.",
      "We provide a factual report of observable conditions at the time of inspection. This is not a structural certification, legal opinion, or guarantee of future property condition.",
      "We do not perform repairs, provide legal advice, or verify property titles or ownership documents.",
    ],
  },
  {
    title: "Bookings",
    content: [
      "Bookings are confirmed by WhatsApp within 30 minutes of submission during 9am–9pm IST.",
      "You can reschedule with at least 24 hours' notice at no charge. Rescheduling requests within 24 hours of the scheduled inspection are subject to availability.",
      "Cancellations made more than 24 hours before the inspection receive a full refund. Cancellations within 24 hours are non-refundable.",
      "We reserve the right to cancel an inspection if access to the property cannot be arranged, or if safety conditions at the property are a concern. A full refund will be issued in such cases.",
    ],
  },
  {
    title: "Payment",
    content: [
      "Payment can be made at the time of booking (online via Razorpay) or on the day of inspection (cash or UPI).",
      "For Premium and buyer-tier plans, a 50% advance may be required to confirm the slot.",
      "Prices are inclusive of all charges. No travel surcharge within Gurgaon and Delhi NCR. No report fees.",
    ],
  },
  {
    title: "Our re-inspection commitment",
    content: [
      "If you discover an issue after move-in that was clearly visible and present at the time of inspection — and that we should have flagged but did not — we will re-inspect the property at no charge.",
      "This applies to observable conditions present at the time of inspection, not conditions that developed after. It does not apply to issues the client chose not to act on.",
      "Re-inspection requests must be raised within 30 days of the original inspection.",
    ],
  },
  {
    title: "Limitations",
    content: [
      "Our inspections cover observable and accessible areas. We do not inspect inside walls, under floors, inside electrical panels (beyond visible components), or in any area where access would require specialist equipment or cause damage.",
      "Inspection findings are observations at the time of inspection. Conditions can change. We do not guarantee the property will remain in the same condition after inspection.",
      "Backtraq's liability is limited to the fee paid for the inspection. We are not liable for any consequential, indirect, or incidental damages arising from reliance on the inspection report.",
    ],
  },
  {
    title: "Report use",
    content: [
      "The inspection report is prepared for the client who commissioned it. It may be shared with advisors, lawyers, or third parties involved in the property transaction.",
      "The report may not be used for any commercial purpose without our written consent.",
    ],
  },
  {
    title: "Governing law",
    content: [
      "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Gurgaon, Haryana.",
      "We will always attempt to resolve disputes informally first. Contact hello@backtraq.in.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Legal
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Terms of Service
          </h1>
          <p className="text-muted text-lg">Last updated: May 2025</p>
        </div>
      </section>

      <section className="pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-border divide-y divide-border">
            {sections.map((section, i) => (
              <div key={i} className="px-8 py-8">
                <h2
                  className="text-xl font-bold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex gap-3 text-muted leading-relaxed text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-forest/5 border border-forest/15 rounded-2xl text-sm text-muted">
            <p>
              Questions?{" "}
              <a href="mailto:hello@backtraq.in" className="text-forest font-semibold hover:underline">
                hello@backtraq.in
              </a>{" "}
              · Backtraq, Gurgaon, Haryana, India.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/privacy" className="text-sm text-forest font-semibold hover:underline underline-offset-2">
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
