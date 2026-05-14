import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-cream/10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-terracotta" />
              </div>
              <span
                className="font-serif text-xl font-bold text-cream"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Backtraq
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Independent home inspections for Gurgaon & Delhi NCR.
              We don&apos;t take sides.
            </p>
          </div>

          <div>
            <h4 className="text-cream text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/for-renters" className="hover:text-cream transition-colors">For Renters</Link></li>
              <li><Link href="/for-buyers" className="hover:text-cream transition-colors">For Home Buyers</Link></li>
              <li><Link href="/pricing" className="hover:text-cream transition-colors">Pricing</Link></li>
              <li><Link href="/sample-report" className="hover:text-cream transition-colors">Sample Report</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/how-it-works" className="hover:text-cream transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-cream transition-colors">Blog & Resources</Link></li>
              <li><Link href="/book" className="hover:text-cream transition-colors">Book Inspection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999000000"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@backtraq.in" className="hover:text-cream transition-colors">
                  hello@backtraq.in
                </a>
              </li>
              <li className="text-cream/50 text-xs mt-3">
                Gurgaon & Delhi NCR
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Backtraq. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
