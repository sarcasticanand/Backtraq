import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — Why We Started Backtraq",
  description:
    "The honest story behind Backtraq. Why a home inspection service for Indian renters and buyers was overdue — and what we stand for.",
};

const principles = [
  {
    icon: "◎",
    title: "No commissions. Ever.",
    body: "We don't take referral fees, introduction bonuses, or partnerships from landlords, builders, or brokers. Our only income is the inspection fee. This isn't idealism — it's the only way to be trusted.",
  },
  {
    icon: "◎",
    title: "Photo evidence for every claim.",
    body: "We don't write 'possible seepage in bedroom'. We write 'moisture meter reading 78% at coordinate NW-wall-bedroom-1, see photo #3.' You can verify every finding we make.",
  },
  {
    icon: "◎",
    title: "Two-inspector review on every report.",
    body: "The inspector who visits your property writes the initial report. A second senior inspector reviews it before it goes out. One set of eyes misses things. Two sets don't.",
  },
  {
    icon: "◎",
    title: "We re-inspect if we miss something obvious.",
    body: "If you move in and find something we clearly should have caught — not something that developed after, but something that was there — we come back for free. This matters more than any marketing claim.",
  },
  {
    icon: "◎",
    title: "We don't do repairs.",
    body: "Intentionally. Any company that both inspects and repairs has a financial incentive to find problems. We are only paid to find the truth. What you do with that truth is your call.",
  },
];

const team = [
  {
    name: "Ramesh P.",
    role: "Lead Field Inspector",
    bio: "12 years as a building maintenance supervisor at DLF Properties across Gurgaon. Knows what good maintenance looks like — and what negligence is being hidden. Specialist in electrical systems and structural assessment.",
    inspections: "340+",
  },
  {
    name: "Suresh K.",
    role: "Senior Inspector & Report Reviewer",
    bio: "Civil engineering background. 8 years with PWD on infrastructure projects, followed by 4 years of private property inspections. Expert in waterproofing failures and plumbing systems.",
    inspections: "210+",
  },
  {
    name: "Anil V.",
    role: "Inspector",
    bio: "Former site supervisor with a mid-size construction firm in Noida. Saw bad construction decisions get covered up. Now makes sure buyers and renters know what they're getting into.",
    inspections: "95+",
  },
];

const press = [
  { outlet: "Your Story", title: "The startup fixing India's opaque rental market, one inspection at a time" },
  { outlet: "Housing.com Blog", title: "Why pre-move-in inspections are becoming a must for Gurgaon renters" },
  { outlet: "Moneycontrol", title: "The ₹2,499 check that saves lakhs: home inspection services on the rise" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-5xl sm:text-6xl font-bold text-charcoal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Why we started this.
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              The honest version. Not the press release version.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                I moved flats three times in four years in Gurgaon. Each time I spent a weekend
                visiting properties, picked the one that felt right, and signed. Each time something
                was wrong that I could have known about before committing.
              </p>
              <p>
                The second flat had seepage in the bedroom wall that showed up in the first monsoon.
                The landlord said it had never happened before. He&apos;d painted over it two weeks
                before I viewed it. The third flat had faulty earthing in the bathroom geyser — I
                found out because the MCB kept tripping.
              </p>
              <p>
                None of this was unique to me. Everyone I know has a version of this story. A
                friend who lost her deposit fighting over &quot;pre-existing&quot; damage that was
                already there. A colleague who bought a flat and only found out about the illegal
                balcony extension when he tried to sell it five years later.
              </p>
              <p>
                The information is obtainable. With the right tools and the right eyes, you can know
                most of what you need to know before you sign. There just wasn&apos;t a reliable,
                independent service doing that for renters and buyers in NCR — not one that wasn&apos;t
                also trying to sell you repairs or had a relationship with the brokers sending them
                business.
              </p>
              <p className="font-semibold text-charcoal">
                So we built it. That&apos;s the whole story.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-lg">
                KS
              </div>
              <div>
                <p className="font-semibold text-charcoal">Karan Sharma</p>
                <p className="text-sm text-muted">Founder, Backtraq</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What we won&apos;t compromise on.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="bg-white border border-border rounded-2xl p-7 flex gap-5">
                  <span className="text-terracotta text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <h3
                      className="text-xl font-bold text-charcoal mb-2"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The people who do the inspections.
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Not consultants. Not people with certificates but no field time. People who&apos;ve
              spent years inside buildings.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border h-full">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-lg mb-5">
                    {member.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <h3
                    className="text-xl font-bold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-terracotta text-sm font-semibold mb-4">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="text-xs text-muted">
                      <strong className="text-charcoal">{member.inspections}</strong> inspections completed
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              In the press.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {press.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-border hover:border-forest/30 transition-colors">
                  <div className="text-xs font-bold text-muted bg-cream border border-border px-3 py-1.5 rounded-lg flex-shrink-0">
                    {item.outlet}
                  </div>
                  <p className="text-charcoal font-medium">{item.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              className="text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Get in touch.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "WhatsApp (fastest)",
                value: `+91 ${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999000000").slice(2)}`,
                href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999000000"}`,
                note: "Response within 30 min during 9am-9pm",
              },
              {
                label: "Email",
                value: "hello@backtraq.in",
                href: "mailto:hello@backtraq.in",
                note: "For detailed queries and reports",
              },
              {
                label: "Coverage area",
                value: "Gurgaon & Delhi NCR",
                href: null,
                note: "Including Noida and Faridabad",
              },
            ].map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-cream/15 rounded-2xl p-6">
                  <p className="text-cream/60 text-xs uppercase tracking-wider mb-2">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-xl font-semibold text-cream hover:text-terracotta transition-colors"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p
                      className="text-xl font-semibold text-cream"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {c.value}
                    </p>
                  )}
                  <p className="text-cream/50 text-sm mt-2">{c.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/book"
              className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-terracotta-dark transition-colors"
            >
              Book an Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
