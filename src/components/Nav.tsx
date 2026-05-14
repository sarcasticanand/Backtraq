"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/for-renters", label: "For Renters" },
  { href: "/for-buyers", label: "For Home Buyers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sample-report", label: "Sample Report" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-terracotta" />
          </div>
          <span
            className="font-serif text-xl font-bold text-forest"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Backtraq
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-forest ${
                pathname === l.href ? "text-forest" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/book"
            className="bg-forest text-cream text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-forest-dark transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-border mt-1">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-base font-medium py-1 ${
                  pathname === l.href ? "text-forest" : "text-charcoal"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 bg-forest text-cream text-sm font-medium px-5 py-3 rounded-lg text-center"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
