"use client";

import React from "react";
import Image from "next/image";
import { groupConfig } from "@/data/group";
import { Compass, Target, HeartHandshake, Shield, Sparkles } from "lucide-react";
import { FadeIn, AnimatedLine } from "@/components/ui/motion";

export const ApproachVisionSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      step: "01",
      title: "Nature-Rooted Integrity",
      description:
        "Every intervention protects biological diversity, enhances soil organic carbon, and safeguards regional water basins without tokenism.",
    },
    {
      icon: Target,
      step: "02",
      title: "Producer-Centric Growth",
      description:
        "Ensuring the primary grower and rural collective retain majority equity, democratic governance, and transparent price realization.",
    },
    {
      icon: HeartHandshake,
      step: "03",
      title: "Market-Led Competitiveness",
      description:
        "Rigorous quality standards, HACCP compliance, and commercial dependability that satisfy international corporate buyers.",
    },
    {
      icon: Shield,
      step: "04",
      title: "Transparent Provenance",
      description:
        "Deploying geospatial polygons and cryptographic batch records for absolute traceability from living soil to global consumer shelves.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FCFAF6] text-[#20251F] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#1C5038]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
            <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
              Operating Philosophy
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight leading-[1.12]">
              Our Approach, Vision and Enterprise Principles
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-[17px] md:text-[18px] text-[#363D34] leading-relaxed font-light">
              We operate through a disciplined ecosystem model that unites ecological stewardship with modern institutional corporate execution.
            </p>
          </FadeIn>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 sm:p-8 border border-[#DCE4D8] shadow-xs hover:shadow-xl hover:border-[#1C5038]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#B78B53] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#B78B53] tracking-widest px-2.5 py-1 rounded-full bg-[#B78B53]/10">
                      {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5EF] text-[#123D2A] flex items-center justify-center group-hover:bg-[#123D2A] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#123D2A] group-hover:text-[#1C5038] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#363D34] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Ecosystem Manifesto Banner */}
        <FadeIn direction="up" delay={0.2} distance={30}>
          <div className="relative rounded-3xl overflow-hidden bg-[#123D2A] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10 group">
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
                alt="Ecosystem Vision Texture"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Ambient inner soft glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#B78B53]/15 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-[0.2em] font-semibold text-[#B78B53] mb-4">
                <span>The Core Group Manifesto</span>
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-light leading-relaxed text-[#F7F5EF] italic">
                “{groupConfig.vision}”
              </blockquote>
              <p className="mt-6 text-sm text-[#DCE4D8] font-light max-w-2xl leading-relaxed">
                By combining on-the-ground cooperative mobilization with cutting-edge technology and structured finance,
                we prove that market competitiveness and ecological harmony are mutually reinforcing forces.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
