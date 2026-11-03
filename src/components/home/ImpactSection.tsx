"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trees, Users, Droplets, ShieldCheck, TrendingUp } from "lucide-react";
import { FadeIn, AnimatedLine, AnimatedCounter } from "@/components/ui/motion";

export const ImpactSection: React.FC = () => {
  const verifiedOutcomes = [
    {
      title: "Regenerative Agroforestry & Living Soil",
      category: "Ecological Stewardship",
      image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      description:
        "Over 1.2 million native shade and timber trees integrated across 85,000+ acres to build organic soil sponge layers, enhance microbial biodiversity, and sequester carbon.",
      stat: "85,000+",
      statLabel: "Acres Regenerated",
      subtext: "Verified protocol compliance across active belts",
    },
    {
      title: "Autonomous Producer Collectives",
      category: "Rural Enterprise Equity",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
      description:
        "Mobilizing 32,000+ smallholder farmers across 65+ incorporated Farmer Producer Companies with professional management, audited balance sheets, and working capital lines.",
      stat: "32,000+",
      statLabel: "Producers Mobilized",
      subtext: "100% equity retained by rural shareholder families",
    },
    {
      title: "Micro-Catchment & Water Resilience",
      category: "Resource Conservation",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      description:
        "Decentralized recharge ponds, check dams, and gravity drip networks constructed across rainfed zones, cutting irrigation demand by 42% and extending soil moisture by 45 days.",
      stat: "42%",
      statLabel: "Irrigation Water Saved",
      subtext: "Insulating communities against cyclical drought",
    },
  ];

  return (
    <section id="impact" className="py-24 md:py-36 bg-[#123D2A] text-white border-t border-[#1C5038] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#1C5038]/50 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#B78B53]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
              <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#B78B53]">
                Impact & Responsibility
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-white tracking-tight leading-[1.12]">
                Tangible Commitments. Verified Field Outcomes.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-[17px] md:text-[18px] text-[#DCE4D8] leading-relaxed font-light">
                We measure our group performance not merely in trade volume, but in acres ecologically regenerated,
                rural farmer wealth created, and verified batch traceability delivered to global buyers.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="shrink-0">
            <Link
              href="/impact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-sm font-semibold transition-all duration-300"
            >
              <span>Read Detailed Impact Report</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* 3 Editorial Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verifiedOutcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1C5038] rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#B78B53]/50 transition-all duration-400 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative h-64 overflow-hidden bg-[#123D2A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C5038] via-[#123D2A]/40 to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#123D2A]/85 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                  {item.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight flex items-baseline">
                      <AnimatedCounter value={item.stat} duration={1.6} />
                    </div>
                    <div className="text-xs text-[#B78B53] font-medium">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-white group-hover:text-[#F7F5EF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#DCE4D8] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#A8B7A0]">{item.subtext}</span>
                  <Link
                    href="/impact"
                    className="inline-flex items-center gap-1 text-white font-semibold hover:text-[#B78B53] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footnote Bar */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#1C5038]/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DCE4D8] gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#B78B53] shrink-0" />
            <span>
              All numerical claims are grounded in audited collective books, WDRA warehouse receipts, and geotagged field telemetry.
            </span>
          </div>
          <span className="text-[#B78B53] font-semibold uppercase tracking-wider text-[11px] shrink-0">
            HQ: Noida One, Sector-62
          </span>
        </div>
      </div>
    </section>
  );
};
