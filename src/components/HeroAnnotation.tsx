"use client";

import { useEffect, useRef, useState } from "react";

const findings = [
  { severity: "high", label: "Active seepage, NW wall", room: "Master bedroom", delay: 0.5 },
  { severity: "high", label: "Faulty earthing — kitchen socket", room: "Kitchen", delay: 1.0 },
  { severity: "medium", label: "Drain slow — 4.2 min clearance", room: "Bathroom 2", delay: 1.5 },
  { severity: "low", label: "9/11 sockets pass earthing", room: "All rooms", delay: 2.0 },
];

const severityConfig = {
  high: { dot: "bg-red-500", badge: "bg-red-50 border-red-200 text-red-700" },
  medium: { dot: "bg-amber-500", badge: "bg-amber-50 border-amber-200 text-amber-700" },
  low: { dot: "bg-green-500", badge: "bg-green-50 border-green-200 text-green-700" },
};

export default function HeroAnnotation() {
  const [visible, setVisible] = useState<boolean[]>(findings.map(() => false));
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          findings.forEach((f, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, f.delay * 1000);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Report card */}
      <div className="bg-white rounded-2xl border border-border shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-forest px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-cream/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-terracotta" />
            </div>
            <div>
              <p
                className="text-cream font-bold text-sm leading-none"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Backtraq
              </p>
              <p className="text-cream/60 text-xs mt-0.5">Inspection Report · Standard Plan</p>
            </div>
          </div>
          <div className="text-right text-xs text-cream/60">
            <p>2BHK, Sector 49</p>
            <p>Gurgaon</p>
          </div>
        </div>

        {/* Risk summary bar */}
        <div className="border-b border-border px-6 py-4 grid grid-cols-3 gap-4">
          {[
            { count: 2, label: "High", color: "bg-red-500" },
            { count: 2, label: "Medium", color: "bg-amber-500" },
            { count: 1, label: "Low", color: "bg-green-500" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`w-2 h-2 rounded-full ${s.color} mx-auto mb-1`} />
              <p
                className="text-2xl font-bold text-charcoal leading-none"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {s.count}
              </p>
              <p className="text-xs text-muted mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Findings list */}
        <div className="divide-y divide-border">
          {findings.map((f, i) => {
            const config = severityConfig[f.severity as keyof typeof severityConfig];
            return (
              <div
                key={i}
                className={`px-6 py-4 flex items-start gap-3 transition-all duration-500 ${
                  visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full border flex items-center gap-1.5 flex-shrink-0 mt-0.5 ${config.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                  {f.severity.charAt(0).toUpperCase() + f.severity.slice(1)}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">{f.room}</p>
                  <p className="text-sm font-semibold text-charcoal leading-snug">{f.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-cream border-t border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            <span className="text-xs font-semibold text-forest">Inspector active</span>
          </div>
          <p className="text-xs text-muted">Delivered in 12 hours</p>
        </div>
      </div>

      {/* Floating annotation circle */}
      <div className="absolute -top-4 -right-4 w-16 h-16 pointer-events-none">
        <div className="absolute inset-0 rounded-full border-2 border-terracotta animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full border-2 border-terracotta" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-terracotta" />
        </div>
      </div>
    </div>
  );
}
