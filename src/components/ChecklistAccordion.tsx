"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Category {
  name: string;
  icon: string;
  items: string[];
}

interface Props {
  categories: Category[];
}

export default function ChecklistAccordion({ categories }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {categories.map((cat, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-cream/50 transition-colors text-left"
            aria-expanded={open === i}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">{cat.icon}</span>
              <span className="font-semibold text-charcoal">{cat.name}</span>
              <span className="text-xs text-muted bg-cream-dark px-2 py-0.5 rounded-full">
                {cat.items.length} points
              </span>
            </div>
            <ChevronDown
              size={18}
              className={`text-muted flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === i && (
            <div className="px-5 pb-5 pt-3 bg-cream/30">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
