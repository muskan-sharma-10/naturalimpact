"use client";

import React from "react";
import { verifiedMetrics } from "@/data/group";
import { TrendingUp, Users, ShieldCheck, Sprout, Building2 } from "lucide-react";
import { FadeIn, AnimatedCounter, AnimatedLine } from "@/components/ui/motion";

export const GroupAtAGlanceSection: React.FC = () => {
  const icons = [Building2, Users, Sprout, ShieldCheck, TrendingUp];

  return (
    <section className="py-24 md:py-36 bg-[#F7F5EF] text-[#20251F] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-[#1C5038]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
            <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
              Verified Scale & Footprint
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight leading-[1.12]">
              The Group at a Glance
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-[17px] md:text-[18px] text-[#363D34] leading-relaxed font-light">
              Ground-level operational indicators reflecting our verified footprint across rural producer ecosystems, acreage under regenerative stewardship, and facilitated trade liquidity.
            </p>
          </FadeIn>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {verifiedMetrics.map((metric, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE4D8] shadow-xs hover:shadow-xl hover:border-[#1C5038]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#123D2A]/10 text-[#123D2A] flex items-center justify-center mb-6 group-hover:bg-[#123D2A] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-xs">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-[#123D2A] tracking-tight flex items-baseline">
                    <AnimatedCounter value={metric.value} duration={1.8} />
                    {metric.numericSuffix && (
                      <span className="text-[#B78B53] ml-0.5">{metric.numericSuffix}</span>
                    )}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#20251F] group-hover:text-[#1C5038] transition-colors leading-snug">
                    {metric.label}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DCE4D8] text-xs text-[#5C6659] leading-relaxed">
                  {metric.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Accreditation Footnote */}
        <FadeIn direction="up" delay={0.3} className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#EDEAE0] border border-[#DCE4D8] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#363D34] gap-4 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1C5038] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1C5038]"></span>
            </span>
            <span>All indicators derived from active producer collective operations and audited supply chains.</span>
          </div>
          <span className="font-semibold text-[#123D2A] bg-white/80 px-3.5 py-1 rounded-full border border-[#DCE4D8]">
            Headquarters: Noida One, Sector-62, Noida
          </span>
        </FadeIn>
      </div>
    </section>
  );
};
