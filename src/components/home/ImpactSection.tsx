"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, AnimatedLine, AosFlipCard } from "@/components/ui/motion";

export const ImpactSection: React.FC = () => {
  const initiatives = [
    {
      title: "Regenerative Agroforestry Corridors",
      category: "Ecological Restoration",
      image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      description:
        "Over 1.2 million native shade and timber trees planted alongside food crops to build living soil sponge layers and sequester carbon.",
      stat: "85,000+ Acres",
    },
    {
      title: "Farmer Collective Corporation Incubation",
      category: "Rural Community Wealth",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
      description:
        "Equipping farmer-owned enterprises with statutory governance, audited bookkeeping, and working capital lines to prevent distress sales.",
      stat: "32,000+ Growers",
    },
    {
      title: "Micro-Check Dam & Water Catchment Networks",
      category: "Resource Conservation",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      description:
        "Decentralized recharge ponds and micro-check dams constructed across semi-arid belts, reducing external irrigation demand by 42%.",
      stat: "42% Water Saved",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F7F5EF] text-[#292D29] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#879783]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
              <AnimatedLine width="36px" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Impact & Responsibility
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                Tangible Commitments. Verified Field Outcomes.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
                We measure our performance not merely in trade velocity, but in acres regenerated, farmer incomes elevated, and biodiversity conserved.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="shrink-0">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#233B30] hover:text-[#4D6249] group"
            >
              <span className="border-b-2 border-[#879783] pb-0.5 group-hover:border-[#233B30] transition-colors">
                Read Detailed Impact Report
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </FadeIn>
        </div>

        {/* 3 Editorial Initiative Cards with Aditya Birla 3D Flip-Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
          {initiatives.map((item, idx) => (
            <AosFlipCard key={idx} delay={idx * 0.15} duration={0.7} className="h-full">
              <div className="bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-sm hover:shadow-2xl hover:border-[#879783]/60 transition-all duration-500 flex flex-col group hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1A2D24]/85 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/15">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#879783] text-[#1A2D24] text-xs font-bold font-mono shadow-lg transition-transform duration-300 group-hover:scale-105">
                    {item.stat}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-[#233B30] group-hover:text-[#4D6249] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#404640] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCE4D8]/60">
                    <Link
                      href="/impact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#233B30] hover:text-[#4D6249] group/link"
                    >
                      <span className="group-hover/link:underline underline-offset-4">View Methodology</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </AosFlipCard>
          ))}
        </div>
      </div>
    </section>
  );
};
