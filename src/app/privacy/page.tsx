import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Backtraq collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "What we collect",
    content: [
      "When you book an inspection, we collect your name, phone number, email address, and property address.",
      "When you make a payment, Razorpay processes your payment details directly. Backtraq does not store card or UPI credentials.",
      "When you sign up for our newsletter, we collect your email address.",
      "We may also collect your IP address and browser information for security and analytics purposes.",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "To confirm and coordinate your inspection booking — primarily over WhatsApp and email.",
      "To send you your inspection report and any follow-up communication.",
      "To send newsletter emails if you opted in. You can unsubscribe at any time by emailing hello@backtraq.in.",
      "To improve our service through aggregated, anonymised usage data.",
      "We do not sell your data to third parties. Ever.",
    ],
  },
  {
    title: "Third parties we use",
    content: [
      "Razorpay — processes payments. Governed by Razorpay's own privacy policy.",
      "Resend — sends transactional and notification emails. Data stored on Resend's servers.",
      "Google Sheets — we log booking information in a private spreadsheet for operational use.",
      "Vercel — hosts the website. Server logs may capture request metadata.",
    ],
  },
  {
    title: "Data retention",
    content: [
      "We retain booking and contact information for 2 years after your last interaction with us.",
      "You can request deletion of your data at any time by emailing hello@backtraq.in. We will action requests within 14 days.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "This website does not use tracking cookies or third-party advertising cookies.",
      "A session cookie may be set by the hosting infrastructure for security purposes. It contains no personal information.",
    ],
  },
  {
    title: "Your rights",
    content: [
      "You can request a copy of the personal data we hold about you.",
      "You can request correction or deletion of your data.",
      "You can opt out of marketing emails at any time.",
      "Contact us at hello@backtraq.in for any data-related requests.",
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      "We may update this policy as our service evolves. Material changes will be communicated via email if we have your contact details.",
      "The current version is always available at backtraq.in/privacy.",
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
              Questions about this policy?{" "}
              <a href="mailto:hello@backtraq.in" className="text-forest font-semibold hover:underline">
                hello@backtraq.in
              </a>{" "}
              · Backtraq, Gurgaon, Haryana, India.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/terms" className="text-sm text-forest font-semibold hover:underline underline-offset-2">
              Read our Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
