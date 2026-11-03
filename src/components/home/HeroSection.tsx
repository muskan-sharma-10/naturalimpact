"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Compass, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { luxuryEase, AnimatedCounter } from "@/components/ui/motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between bg-[#123D2A] text-white overflow-hidden pt-28 lg:pt-36 pb-8">
      {/* Background Cinematic Visual with Slow Ambient Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2560&q=85"
          alt="Natural Impact Group - Regenerative Agricultural Landscape"
          fill
          priority
          className="object-cover object-center animate-ken-burns scale-105"
          sizes="100vw"
        />
        {/* Editorial Multi-Layer Dark Evergreen Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123D2A]/95 via-[#123D2A]/80 to-[#123D2A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A] via-transparent to-[#123D2A]/70" />
        <div className="absolute inset-0 bg-[#1C5038]/30 mix-blend-multiply" />

        {/* Ambient Subtle Glows */}
        <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] rounded-full bg-[#B78B53]/10 blur-[140px] pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#1C5038]/40 blur-[120px] pointer-events-none" />
      </div>

      {/* Main Hero Story Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="max-w-4xl">
          {/* Eyebrow Label with Bronze Earth Accent & Pulse Dot */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#F7F5EF] tracking-wider uppercase mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#B78B53] animate-pulse" />
            <span className="text-[#C8A06A] font-bold">NATURAL IMPACT GROUP</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80 font-normal hidden sm:inline">
              One Group · Connected Businesses · Measurable Impact
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            className="font-heading font-medium text-white tracking-tight leading-[1.06] text-4xl sm:text-6xl md:text-7xl lg:text-[5rem]"
          >
            Building a More Connected Future for Agriculture.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: luxuryEase }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-[22px] text-[#DCE4D8] font-light leading-relaxed max-w-3xl"
          >
            An integrated corporate group uniting primary producer collectives, transparent digital
            provenance, and structured trade finance with institutional global markets to scale
            nature-based commercial resilience.
          </motion.p>

          {/* Dual Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: luxuryEase }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Link
              href="#businesses"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B78B53] hover:bg-[#C8A06A] text-[#123D2A] text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="#impact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/50 text-base font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Our Impact</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Verified Group Scale Ribbon — Refined Conglomerate Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: luxuryEase }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6"
      >
        <div className="bg-[#123D2A]/85 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center">
            {/* Division 1 */}
            <div className="border-l-2 border-[#B78B53] pl-4">
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline">
                <AnimatedCounter value="5" duration={1.2} />
              </div>
              <div className="text-xs font-semibold text-[#A8B7A0] uppercase tracking-wider mt-1">
                Connected Divisions
              </div>
              <div className="text-[11px] text-[#DCE4D8]/80 hidden sm:block">
                Unified Group Ecosystem
              </div>
            </div>

            {/* Division 2 */}
            <div className="border-l-2 border-[#A8B7A0]/60 pl-4">
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline">
                <AnimatedCounter value="32,000" duration={1.6} />
                <span className="text-[#B78B53] ml-0.5">+</span>
              </div>
              <div className="text-xs font-semibold text-[#A8B7A0] uppercase tracking-wider mt-1">
                Producers Mobilized
              </div>
              <div className="text-[11px] text-[#DCE4D8]/80 hidden sm:block">
                Across Rural Collectives
              </div>
            </div>

            {/* Division 3 */}
            <div className="border-l-2 border-[#A8B7A0]/60 pl-4">
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline">
                <AnimatedCounter value="85,000" duration={1.8} />
                <span className="text-[#B78B53] ml-0.5">+</span>
              </div>
              <div className="text-xs font-semibold text-[#A8B7A0] uppercase tracking-wider mt-1">
                Acres Under Stewardship
              </div>
              <div className="text-[11px] text-[#DCE4D8]/80 hidden sm:block">
                Regenerative Protocols
              </div>
            </div>

            {/* Division 4 */}
            <div className="border-l-2 border-[#A8B7A0]/60 pl-4">
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline">
                <AnimatedCounter value="100" duration={1.4} />
                <span className="text-[#B78B53] ml-0.5">%</span>
              </div>
              <div className="text-xs font-semibold text-[#A8B7A0] uppercase tracking-wider mt-1">
                Batch Traceability
              </div>
              <div className="text-[11px] text-[#DCE4D8]/80 hidden sm:block">
                Cloud-Enabled Geotagged
              </div>
            </div>

            {/* Division 5 */}
            <div className="col-span-2 md:col-span-1 border-l-2 border-[#A8B7A0]/60 pl-4">
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline">
                <span className="text-[#B78B53] mr-0.5">₹</span>
                <AnimatedCounter value="180" duration={1.6} />
                <span className="text-[#B78B53] ml-0.5">Cr+</span>
              </div>
              <div className="text-xs font-semibold text-[#A8B7A0] uppercase tracking-wider mt-1">
                Trade Liquidity
              </div>
              <div className="text-[11px] text-[#DCE4D8]/80 hidden sm:block">
                Structured Post-Harvest
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-[#A8B7A0]">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#B78B53]" />
            <span>Noida One, Sector-62, Delhi NCR</span>
          </div>
          <a
            href="#intro-section"
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-[11px] uppercase tracking-widest font-medium">Scroll to explore</span>
            <div className="w-4 h-6 rounded-full border border-white/30 flex items-start justify-center p-1">
              <span className="w-1 h-1.5 rounded-full bg-[#B78B53] animate-bounce" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
