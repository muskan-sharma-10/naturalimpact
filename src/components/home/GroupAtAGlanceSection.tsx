"use client";

import React from "react";
import { verifiedMetrics } from "@/data/group";
import { TrendingUp, Users, ShieldCheck, Sprout, Building } from "lucide-react";
import { FadeIn, AnimatedCounter, AnimatedLine, AosFlipCard } from "@/components/ui/motion";

export const GroupAtAGlanceSection: React.FC = () => {
  const icons = [Building, Users, Sprout, ShieldCheck, TrendingUp];

  return (
    <section className="py-24 md:py-36 bg-[#F7F5EF] text-[#292D29] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-[#879783]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
            <AnimatedLine width="36px" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Verified Scale & Footprint
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
              The Group at a Glance
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
              Ground-level operational indicators reflecting our verified footprint across rural producer ecosystems, verified acreage, and capital deployment.
            </p>
          </FadeIn>
        </div>

        {/* Metrics Grid with Aditya Birla Flip-Left 3D Entrance and Animated Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 perspective-container">
          {verifiedMetrics.map((metric, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <AosFlipCard key={idx} delay={idx * 0.1} duration={0.65} className="h-full">
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#879783]/15 text-[#233B30] flex items-center justify-center mb-6 group-hover:bg-[#233B30] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <div className="font-heading font-bold text-3xl sm:text-4xl text-[#233B30] tracking-tight flex items-baseline">
                      <AnimatedCounter value={metric.value} duration={1.8} />
                      {metric.numericSuffix && (
                        <span className="text-[#879783] ml-0.5">{metric.numericSuffix}</span>
                      )}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[#292D29] group-hover:text-[#4D6249] transition-colors">
                      {metric.label}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#DCE4D8]/60 text-xs text-[#6B726A] leading-relaxed">
                    {metric.sublabel}
                  </div>
                </div>
              </AosFlipCard>
            );
          })}
        </div>

        {/* Institutional Accreditation Footnote */}
        <FadeIn direction="up" delay={0.3} className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#EDEAE0] border border-[#DCE4D8] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#404640] gap-4 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4D6249] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4D6249]"></span>
            </span>
            <span>All indicators derived from active producer collective operations and audited supply chains.</span>
          </div>
          <span className="font-medium text-[#233B30] bg-white/60 px-3 py-1 rounded-full border border-white/80">
            Headquarters: Noida One, Sector-62, Noida
          </span>
        </FadeIn>
      </div>
    </section>
  );
};
