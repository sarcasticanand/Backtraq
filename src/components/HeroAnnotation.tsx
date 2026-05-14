"use client";

import { useEffect, useRef, useState } from "react";

const annotations = [
  { top: "28%", left: "22%", label: "Seepage behind wall", delay: 0.4 },
  { top: "55%", left: "68%", label: "Faulty socket earthing", delay: 0.9 },
  { top: "72%", left: "35%", label: "Cracked floor tile", delay: 1.4 },
  { top: "18%", left: "60%", label: "Damp ceiling patch", delay: 1.9 },
];

export default function HeroAnnotation() {
  const [visible, setVisible] = useState<boolean[]>(annotations.map(() => false));
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          annotations.forEach((a, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, a.delay * 1000);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      {/* Apartment illustration (CSS-based since we don't have a real photo) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0D5] via-[#D9CEC0] to-[#C8BBA8]">
        {/* Room silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#BFB09A]" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#C8BBA8]" />
        {/* Window */}
        <div className="absolute top-12 right-16 w-32 h-40 bg-[#A8C4D4]/60 rounded border-4 border-[#9BA89A]">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#B8D4E4]/40" />
            ))}
          </div>
        </div>
        {/* Door */}
        <div className="absolute bottom-1/4 left-20 w-20 h-36 bg-[#A89880] rounded-t border-2 border-[#8C7A60]">
          <div className="absolute top-1/2 right-3 w-2 h-2 rounded-full bg-[#C8A951]" />
        </div>
        {/* Wall texture hints */}
        <div className="absolute top-28 left-8 w-24 h-16 bg-[#C2B5A4]/50 rounded" />
        <div className="absolute top-16 left-1/3 w-40 h-3 bg-[#BFB09A]/60 rounded" />
      </div>

      {/* Inspector badge */}
      <div className="absolute top-4 left-4 bg-forest text-cream text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
        Inspector active
      </div>

      {/* Annotations */}
      {annotations.map((a, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: a.top, left: a.left, transform: "translate(-50%, -50%)" }}
        >
          <div
            className={`transition-all duration-500 ${
              visible[i] ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {/* Circle */}
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-terracotta animate-ping opacity-30" />
              <div className="absolute inset-0 rounded-full border-2 border-terracotta" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-terracotta -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* Label */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-border">
              {a.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
