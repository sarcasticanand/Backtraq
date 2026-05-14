import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Inspection",
  description:
    "Book a home inspection in Gurgaon or Delhi NCR. Takes 5 minutes. We confirm within 30 minutes by WhatsApp.",
};

export default function BookPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-forest/8 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-8 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Book an inspection
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Let&apos;s sort this out.
          </h1>
          <p className="text-muted text-lg">
            5 minutes to book. 30 minutes to confirm. 12 hours to your report.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
