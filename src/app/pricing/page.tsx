import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { Check, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Transparent, No Surprises",
  description:
    "Backtraq inspection pricing for renters and home buyers. Basic from ₹1,499. Buyer plans from ₹4,999. No hidden charges.",
};

const renterRows = [
  { feature: "Inspection checkpoints", basic: "40", standard: "75", premium: "75 + thermal" },
  { feature: "Photo documentation", basic: true, standard: true, premium: true },
  { feature: "Risk summary", basic: "Basic", standard: "Detailed", premium: "Detailed + scored" },
  { feature: "Moisture meter check", basic: false, standard: true, premium: true },
  { feature: "Thermal imaging", basic: false, standard: false, premium: true },
  { feature: "Negotiation talking points", basic: false, standard: true, premium: true },
  { feature: "Inspector walkthrough call", basic: false, standard: "15 min", premium: "30 min" },
  { feature: "Society background check", basic: false, standard: false, premium: true },
  { feature: "Report delivery", basic: "24 hrs", standard: "12 hrs", premium: "Same day" },
  { feature: "Follow-up support", basic: false, standard: false, premium: "7 days" },
];

const buyerRows = [
  { feature: "Inspection checkpoints", standard: "120", premium: "120 + thermal", prepurchase: "120 × 2 properties" },
  { feature: "Structural engineer co-inspection", standard: false, premium: true, prepurchase: true },
  { feature: "Thermal imaging", standard: false, premium: true, prepurchase: true },
  { feature: "Photo documentation", standard: true, premium: true, prepurchase: true },
  { feature: "Legal flag summary", standard: true, premium: true, prepurchase: true },
  { feature: "Society docs review", standard: false, premium: true, prepurchase: true },
  { feature: "Inspector call", standard: "30 min", premium: "45 min SE + inspector", prepurchase: "60 min consultation" },
  { feature: "Comparative report", standard: false, premium: false, prepurchase: true },
  { feature: "Report delivery", standard: "24 hrs", premium: "24 hrs", prepurchase: "48 hrs" },
  { feature: "Follow-up support", standard: false, premium: "30 days", prepurchase: "30 days" },
];

const faqs = [
  {
    question: "Are there any hidden charges?",
    answer:
      "None. The price you see is the price you pay. No travel surcharge within Gurgaon and Delhi NCR. No report fees. No 'convenience fees'.",
  },
  {
    question: "When do I pay?",
    answer:
      "You can pay upfront via UPI or card when booking, or pay after the inspection is complete. For Premium and buyer plans, we ask for a 50% advance to confirm the slot.",
  },
  {
    question: "Is there a refund if the inspection finds nothing wrong?",
    answer:
      "No — and this is intentional. The inspection is the service. A clean report is a valuable outcome. It means you move in with confidence. We don't refund based on findings.",
  },
  {
    question: "Do you offer corporate or bulk rates?",
    answer:
      "Yes. If you're a company relocating employees, a builder doing pre-handover inspections, or a fund doing due diligence on multiple properties — WhatsApp us. We have custom pricing for bulk work.",
  },
  {
    question: "Why are you cheaper than some civil engineers I've contacted?",
    answer:
      "Two reasons. First, our inspectors are experienced, not PhD-holding consultants who charge for their designation. Second, our process is optimised — 90 minutes on-site, standardised reporting, no back-and-forth. You get the value, not the overhead.",
  },
];

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <Check size={18} className="text-forest mx-auto" />;
  if (val === false) return <Minus size={18} className="text-muted/30 mx-auto" />;
  return <span className="text-sm text-charcoal">{val}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Simple pricing.
              <br />
              <em className="text-terracotta not-italic">No surprises.</em>
            </h1>
            <p className="text-xl text-muted">
              What you see is what you pay. No travel charges within NCR. No hidden fees. No upsells.
            </p>
          </div>
        </div>
      </section>

      {/* Renter pricing table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2
              className="text-3xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              For Renters
            </h2>
            <p className="text-muted">Rental property inspection plans.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left pb-6 pr-6 text-sm font-normal text-muted w-2/5">Feature</th>
                    {[
                      { name: "Basic", price: "₹1,499" },
                      { name: "Standard ⭐", price: "₹2,499", popular: true },
                      { name: "Premium", price: "₹3,999" },
                    ].map((h) => (
                      <th key={h.name} className="pb-6 px-4 text-center">
                        <div
                          className={`rounded-xl p-4 ${h.popular ? "bg-forest text-cream" : "bg-cream border border-border"}`}
                        >
                          <p className={`font-bold text-base ${h.popular ? "text-cream" : "text-charcoal"}`}
                            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                          >
                            {h.name}
                          </p>
                          <p className={`text-2xl font-bold mt-1 ${h.popular ? "text-terracotta" : "text-charcoal"}`}
                            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                          >
                            {h.price}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {renterRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-cream/30 transition-colors">
                      <td className="py-4 pr-6 text-sm text-charcoal">{row.feature}</td>
                      <td className="py-4 px-4 text-center"><CellValue val={row.basic} /></td>
                      <td className="py-4 px-4 text-center bg-forest/3"><CellValue val={row.standard} /></td>
                      <td className="py-4 px-4 text-center"><CellValue val={row.premium} /></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    {["/book?tier=basic", "/book?tier=standard", "/book?tier=premium"].map((href, i) => (
                      <td key={i} className="pt-6 px-4">
                        <Link
                          href={href}
                          className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                            i === 1
                              ? "bg-forest text-cream hover:bg-forest-dark"
                              : "border border-border text-charcoal hover:border-forest hover:text-forest"
                          }`}
                        >
                          Book
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Buyer pricing table */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2
              className="text-3xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              For Home Buyers
            </h2>
            <p className="text-muted">Pre-purchase inspection plans.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left pb-6 pr-6 text-sm font-normal text-muted w-2/5">Feature</th>
                    {[
                      { name: "Standard", price: "₹4,999" },
                      { name: "Premium ⭐", price: "₹8,999", popular: true },
                      { name: "Pre-purchase", price: "₹14,999" },
                    ].map((h) => (
                      <th key={h.name} className="pb-6 px-4 text-center">
                        <div
                          className={`rounded-xl p-4 ${h.popular ? "bg-forest text-cream" : "bg-white border border-border"}`}
                        >
                          <p className={`font-bold text-base ${h.popular ? "text-cream" : "text-charcoal"}`}
                            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                          >
                            {h.name}
                          </p>
                          <p className={`text-2xl font-bold mt-1 ${h.popular ? "text-terracotta" : "text-charcoal"}`}
                            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                          >
                            {h.price}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {buyerRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/60 transition-colors">
                      <td className="py-4 pr-6 text-sm text-charcoal">{row.feature}</td>
                      <td className="py-4 px-4 text-center"><CellValue val={row.standard} /></td>
                      <td className="py-4 px-4 text-center bg-forest/3"><CellValue val={row.premium} /></td>
                      <td className="py-4 px-4 text-center"><CellValue val={row.prepurchase} /></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    {["/book?tier=buyer-standard", "/book?tier=buyer-premium", "/book?tier=prepurchase"].map((href, i) => (
                      <td key={i} className="pt-6 px-4">
                        <Link
                          href={href}
                          className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                            i === 1
                              ? "bg-forest text-cream hover:bg-forest-dark"
                              : "border border-border bg-white text-charcoal hover:border-forest hover:text-forest"
                          }`}
                        >
                          Book
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </AnimatedSection>
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
              Pricing questions.
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
            Pick a plan. Book in 5 minutes.
          </h2>
          <p className="text-cream/70 text-lg mb-8">Confirmation within 30 minutes by WhatsApp.</p>
          <Link
            href="/book"
            className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors"
          >
            Book an Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
