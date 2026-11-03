"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessesData } from "@/data/businesses";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, AnimatedLine, luxuryEase } from "@/components/ui/motion";

export const BusinessesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentBusiness = businessesData[activeTab];

  return (
    <section id="businesses" className="py-24 md:py-36 bg-[#FCFAF6] text-[#20251F] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#1C5038]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-[#B78B53]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
              <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
                Interconnected Corporate Portfolio
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight leading-[1.12]">
                Five Specialized Divisions. One Integrated Ecosystem.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-[17px] md:text-[18px] text-[#363D34] leading-relaxed font-light">
                Natural Impact operates as a corporate conglomerate where five distinct business units work in synergy — from origin aggregation and farmer collective governance to cloud traceability, trade liquidity, and landscape regeneration.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="shrink-0">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#123D2A] text-[#F7F5EF] hover:bg-[#1C5038] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Complete Directory</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Division Selector Tabs (01 to 05) */}
        <FadeIn direction="up" delay={0.2} className="mb-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-none border-b border-[#DCE4D8]">
            {businessesData.map((b, idx) => {
              const isSelected = activeTab === idx;
              const formattedIndex = `0${idx + 1}`;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex items-center gap-3 px-5 py-3.5 rounded-xl text-left whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isSelected
                      ? "bg-[#123D2A] text-white shadow-lg"
                      : "bg-white text-[#363D34] border border-[#DCE4D8] hover:border-[#1C5038]/40 hover:bg-[#F7F5EF]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isSelected ? "text-[#B78B53]" : "text-[#A8B7A0] group-hover:text-[#1C5038]"
                    }`}
                  >
                    {formattedIndex}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-tight">{b.shortName}</span>
                    <span
                      className={`text-[10px] uppercase tracking-wider ${
                        isSelected ? "text-[#A8B7A0]" : "text-[#5C6659]"
                      }`}
                    >
                      {b.category.split(" ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active Division Spotlight Experience */}
        <div className="bg-[#123D2A] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1C5038] shadow-2xl relative overflow-hidden mb-16 text-white">
          {/* Subtle Watermark Number */}
          <div className="absolute -top-10 -right-4 font-heading font-black text-[12rem] lg:text-[16rem] text-white/[0.03] select-none pointer-events-none">
            0{activeTab + 1}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Left Column: Visual Photography (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl bg-[#1C5038] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBusiness.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: luxuryEase }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentBusiness.heroImage}
                      alt={currentBusiness.name}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-[#123D2A]/25 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D2A]/85 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#F7F5EF] shadow-md z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B78B53]" />
                  <span>Division 0{activeTab + 1} of 05</span>
                </div>

                {/* Bottom Verified Metric Indicator */}
                {currentBusiness.metrics && currentBusiness.metrics[0] && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#123D2A]/90 backdrop-blur-md border border-white/15 flex items-center justify-between z-10 shadow-lg">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {currentBusiness.metrics[0].value}
                      </div>
                      <div className="text-xs text-[#A8B7A0]">
                        {currentBusiness.metrics[0].label}
                      </div>
                    </div>
                    {currentBusiness.metrics[1] && (
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                          {currentBusiness.metrics[1].value}
                        </div>
                        <div className="text-xs text-[#A8B7A0]">
                          {currentBusiness.metrics[1].label}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Division Narrative & Offerings (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBusiness.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: luxuryEase }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#B78B53] mb-3">
                    <span>{currentBusiness.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-white tracking-tight leading-snug">
                    {currentBusiness.name}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base font-medium text-[#C8A06A] italic">
                    "{currentBusiness.tagline}"
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-[#DCE4D8] font-light leading-relaxed">
                    {currentBusiness.fullDescription}
                  </p>

                  {/* Core Capabilities */}
                  <div className="mt-6 pt-6 border-t border-white/15 space-y-2.5">
                    <div className="text-xs uppercase tracking-wider text-[#A8B7A0] font-semibold mb-2">
                      Key Capabilities:
                    </div>
                    {currentBusiness.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white">{cap.title}</span> —{" "}
                          <span className="text-[#DCE4D8]/80">{cap.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explore Division CTA */}
                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href={`/businesses/${currentBusiness.slug}`}
                      className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B78B53] hover:bg-[#C8A06A] text-[#123D2A] font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>Explore Full {currentBusiness.shortName} Division</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    {/* Prev/Next Quick Controls */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      <button
                        onClick={() => setActiveTab((prev) => (prev - 1 + businessesData.length) % businessesData.length)}
                        className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
                        aria-label="Previous division"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveTab((prev) => (prev + 1) % businessesData.length)}
                        className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
                        aria-label="Next division"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Portfolio Overview Grid (All 5 Divisions at a Glance) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#123D2A]">
              Complete Group Portfolio Overview
            </h3>
            <span className="text-xs text-[#5C6659] uppercase tracking-wider font-semibold">
              5 Operating Units
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessesData.map((business, idx) => {
              const formattedIndex = `0${idx + 1}`;
              return (
                <Link
                  key={business.id}
                  href={`/businesses/${business.slug}`}
                  className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-[#DCE4D8] bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#1C5038]/50 transition-all duration-400 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D2A]/10 text-xs font-semibold text-[#123D2A]">
                        <span className="font-mono text-[#B78B53]">{formattedIndex}</span>
                        <span>•</span>
                        <span>{business.category.split(" ")[0]}</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#F7F5EF] group-hover:bg-[#123D2A] text-[#123D2A] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-heading font-semibold text-xl text-[#123D2A] group-hover:text-[#1C5038] transition-colors leading-snug">
                      {business.name}
                    </h4>

                    <p className="mt-3 text-sm text-[#363D34] font-light line-clamp-3 leading-relaxed">
                      {business.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCE4D8] flex items-center justify-between text-xs font-semibold text-[#123D2A]">
                    <span className="group-hover:text-[#1C5038] transition-colors inline-flex items-center gap-1.5">
                      <span>View Division Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    {business.metrics && business.metrics[0] && (
                      <span className="font-mono text-[11px] text-[#5C6659] bg-[#F7F5EF] px-2 py-0.5 rounded">
                        {business.metrics[0].value}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
