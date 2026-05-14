"use client";

import { useState } from "react";

function formatINR(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function CostCalculator() {
  const [rent, setRent] = useState(30000);

  const deposit = rent * 2;
  const brokerage = rent * 1;
  const movingCost = 15000;
  const totalCommitted = deposit + brokerage + movingCost;
  const costOfBadHouse = deposit + brokerage + rent * 3;

  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="rent-slider" className="text-sm font-semibold text-charcoal">
            Your monthly rent
          </label>
          <span className="text-2xl font-bold text-forest" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
            ₹{rent.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          id="rent-slider"
          type="range"
          min={15000}
          max={100000}
          step={5000}
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
          className="w-full accent-forest cursor-pointer h-1.5 rounded-full"
          style={{
            background: `linear-gradient(to right, #1F3D2A ${((rent - 15000) / 85000) * 100}%, #E2DDD6 ${((rent - 15000) / 85000) * 100}%)`,
          }}
          aria-label="Monthly rent slider"
        />
        <div className="flex justify-between text-xs text-muted mt-1.5">
          <span>₹15,000</span>
          <span>₹1,00,000</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { label: "Security deposit (2 months)", value: deposit, note: "Locked in, hard to get back" },
          { label: "Brokerage (1 month)", value: brokerage, note: "Gone the moment you sign" },
          { label: "Moving + setup costs", value: movingCost, note: "Packers, curtains, misc" },
          { label: "Total committed on day 1", value: totalCommitted, bold: true },
        ].map((row) => (
          <div
            key={row.label}
            className={`flex justify-between items-start py-3 ${
              row.bold ? "border-t border-border pt-4" : ""
            }`}
          >
            <div>
              <p className={`text-sm ${row.bold ? "font-semibold text-charcoal" : "text-charcoal"}`}>
                {row.label}
              </p>
              {row.note && <p className="text-xs text-muted mt-0.5">{row.note}</p>}
            </div>
            <span
              className={`font-bold text-right ${
                row.bold ? "text-xl text-forest" : "text-charcoal"
              }`}
              style={row.bold ? { fontFamily: "var(--font-fraunces), Georgia, serif" } : {}}
            >
              {formatINR(row.value)}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-5">
        <p className="text-sm text-muted mb-1">Cost of a bad house decision</p>
        <p
          className="text-3xl font-bold text-terracotta mb-2"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Up to {formatINR(costOfBadHouse)}
        </p>
        <p className="text-sm text-charcoal">
          (deposit loss + brokerage paid again + 3 months wasted rent)
        </p>
      </div>

      <div className="mt-5 flex items-center gap-4 bg-forest text-cream rounded-xl p-4">
        <div>
          <p className="text-cream/70 text-xs mb-0.5">A Backtraq inspection</p>
          <p className="text-xl font-bold" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
            ₹2,499
          </p>
        </div>
        <div className="h-10 w-px bg-cream/20" />
        <p className="text-sm text-cream/80 flex-1">
          That&apos;s {((2499 / costOfBadHouse) * 100).toFixed(1)}% of what a bad call could cost you.
          The math speaks for itself.
        </p>
      </div>
    </div>
  );
}
