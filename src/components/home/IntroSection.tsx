"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedLine } from "@/components/ui/motion";

export const IntroSection: React.FC = () => {
  const verifiedPillars = [
    {
      title: "Decentralized Origin Aggregation",
      desc: "Farmgate grading, automated testing, and direct enterprise fulfillment.",
    },
    {
      title: "Producer Collective Corporatization",
      desc: "Incubating autonomous FPOs with statutory governance and equity retention.",
    },
    {
      title: "Geospatial Provenance & Traceability",
      desc: "Polygon farm mapping and batch passports compliant with EUDR directives.",
    },
    {
      title: "Post-Harvest Trade Finance",
      desc: "Electronic warehouse receipts and working capital to prevent distress sales.",
    },
  ];

  return (
    <section id="intro-section" className="py-24 md:py-36 bg-[#F7F5EF] text-[#20251F] relative overflow-hidden">
      {/* Subtle ambient mesh */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#A8B7A0]/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-[#B78B53]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-header label with expanding AnimatedLine */}
        <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-6">
          <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
            About Natural Impact Group
          </span>
        </FadeIn>

        {/* Asymmetrical Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight leading-[1.12]">
                Where Nature, Enterprise and Opportunity Come Together.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-8 space-y-5 text-[17px] md:text-[18px] text-[#363D34] leading-relaxed font-light">
              <p>
                Natural Impact Group is a unified corporate ecosystem of impact enterprises, operating across
                agri-commerce, producer enterprise development, digital systems, supply chain finance, and
                climate resilience.
              </p>
              <p>
                Headquartered at Noida One, Delhi NCR, our work helps primary producer organisations become
                integral, market-aligned, and self-reliant actors in high-value produce supply chains. Rather
                than treating sustainability as an isolated philanthropic gesture, we engineer interconnected
                commercial enterprises that protect biodiversity while multiplying farmgate value.
              </p>
            </FadeIn>

            {/* Verified Capabilities Grid */}
            <div className="mt-8 pt-6 border-t border-[#DCE4D8]">
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {verifiedPillars.map((pillar, idx) => (
                  <StaggerItem key={idx} distance={14}>
                    <div className="p-3.5 rounded-xl bg-white border border-[#DCE4D8] shadow-xs hover:border-[#1C5038]/40 transition-all duration-300 group">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#1C5038]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1C5038] transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1C5038] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#123D2A] group-hover:text-[#1C5038] transition-colors">
                            {pillar.title}
                          </div>
                          <p className="text-xs text-[#5C6659] mt-0.5 leading-snug">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Link to About Page */}
            <FadeIn direction="up" delay={0.35} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 text-base font-semibold text-[#123D2A] hover:text-[#1C5038] transition-colors"
              >
                <span className="border-b-2 border-[#B78B53] pb-0.5 group-hover:border-[#123D2A] transition-colors">
                  Discover Our Mission & Leadership Principles
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.2} distance={30}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-[#123D2A]">
                <Image
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80"
                  alt="Natural Impact Farmer & Sustainable Produce"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-[#123D2A]/20 to-transparent" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#123D2A]/90 backdrop-blur-md border border-white/15 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#B78B53] font-semibold">
                      Origin-to-Market Model
                    </span>
                    <span className="text-[10px] text-white/60 font-mono">HQ: NOIDA ONE</span>
                  </div>
                  <p className="text-sm font-medium text-white/95 mt-1.5 leading-snug">
                    Empowering rural producers with democratic equity, institutional quality standards, and direct trade corridors.
                  </p>
                </div>
              </div>

              {/* Decorative Floating Foundation Badge */}
              <div className="absolute -top-5 -left-5 hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#123D2A] text-[#F7F5EF] shadow-2xl p-2 text-center border-2 border-[#B78B53] animate-float-gentle">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#B78B53]">Since</span>
                <span className="text-xl font-heading font-extrabold leading-none text-white">2019</span>
                <span className="text-[8px] uppercase tracking-wider text-[#A8B7A0]">Foundation</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
