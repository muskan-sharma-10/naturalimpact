"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedLine, AosFlipCard } from "@/components/ui/motion";

export const IntroSection: React.FC = () => {
  const tenets = [
    "Decentralized Farmgate Processing & Aggregation",
    "Full-Lifecycle FPO Corporate Governance",
    "Geotagged Polygon Batch Provenance",
    "Warehouse Receipt & Working Capital Liquidity",
  ];

  return (
    <section id="intro-section" className="py-24 md:py-36 bg-[#F7F5EF] text-[#292D29] relative overflow-hidden">
      {/* Subtle background ambient mesh/glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#879783]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-[#DCE4D8]/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-header label with expanding AnimatedLine */}
        <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-6">
          <AnimatedLine width="36px" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
            About Natural Impact Group
          </span>
        </FadeIn>

        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Story (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                Transforming Primary Agriculture Into A Structured, High-Value Corporate Ecosystem.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-8 space-y-6 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
              <p>
                Natural Impact Group was founded on a fundamental conviction: sustainable, nature-based agriculture must be market-competitive, technologically governed, and commercially viable to effect durable economic change.
              </p>
              <p>
                Operating across the agricultural heartlands from our headquarters in Noida One, we unify fragmented rural collectives with institutional consumer brands, structured commodity finance, and farm-to-shelf traceability. Rather than viewing sustainability as an isolated philanthropic gesture, we engineer interconnected commercial businesses that protect biodiversity while multiplying farmgate value.
              </p>
            </FadeIn>

            {/* Core Tenets with Staggered Entrance */}
            <div className="mt-8 pt-6 border-t border-[#DCE4D8]">
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tenets.map((tenet, idx) => (
                  <StaggerItem key={idx} distance={16}>
                    <div className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-[#4D6249]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#4D6249] transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4D6249] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-[#233B30] group-hover:text-[#4D6249] transition-colors">
                        {tenet}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Link to About Page */}
            <FadeIn direction="up" delay={0.4} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#233B30] hover:text-[#4D6249] transition-colors"
              >
                <span className="border-b-2 border-[#879783] pb-0.5 group-hover:border-[#233B30] transition-colors">
                  Discover Our Mission & Ecosystem Architecture
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Real Photography Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.25} distance={30}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
                <Image
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80"
                  alt="Natural Impact Farmer & Sustainable Produce"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-xl bg-[#233B30]/85 backdrop-blur-md border border-white/15 shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-widest text-[#A4B4A0] font-semibold">
                    Origin-to-Market Model
                  </p>
                  <p className="text-sm font-medium text-white/95 mt-1 leading-snug">
                    Empowering rural producers with market alignment, quality control, and direct trade corridors.
                  </p>
                </div>
              </div>

              {/* Decorative Floating Since 2019 Badge */}
              <div className="absolute -top-6 -left-6 hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#879783] text-[#1A2D24] shadow-2xl p-2 text-center border-2 border-white animate-float-gentle">
                <span className="text-[10px] uppercase font-bold tracking-widest">Since</span>
                <span className="text-xl font-heading font-extrabold leading-none">2019</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold">Origin</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
