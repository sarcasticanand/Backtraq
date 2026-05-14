"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-charcoal pr-4">{item.question}</span>
            {open === i ? (
              <Minus size={16} className="text-terracotta flex-shrink-0" />
            ) : (
              <Plus size={16} className="text-muted flex-shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted text-[0.95rem] leading-relaxed border-t border-border/50 pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
