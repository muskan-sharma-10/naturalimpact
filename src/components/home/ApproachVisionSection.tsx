"use client";

import React from "react";
import Image from "next/image";
import { groupConfig } from "@/data/group";
import { Compass, Target, HeartHandshake, Shield } from "lucide-react";
import { FadeIn, AnimatedLine, AosFlipCard } from "@/components/ui/motion";

export const ApproachVisionSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      step: "01",
      title: "Nature-Rooted Integrity",
      description:
        "Every corporate intervention is designed to protect biological diversity, regenerate soil vitality, and safeguard precious regional water basins.",
    },
    {
      icon: Target,
      step: "02",
      title: "Producer-Centric Equity",
      description:
        "Ensuring the primary grower and rural collective retain democratic ownership and majority value capture across every commercial node.",
    },
    {
      icon: HeartHandshake,
      step: "03",
      title: "Market-Led Competitiveness",
      description:
        "Rejecting unviable tokenism in favor of rigorous quality standards, HACCP certifications, and dependable off-take agreements with global enterprises.",
    },
    {
      icon: Shield,
      step: "04",
      title: "End-to-End Provenance",
      description:
        "Deploying geospatial polygons and immutable batch ledgers that provide indisputable verification from farm plot to final consumer packaging.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FCFAF6] text-[#292D29] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#879783]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
            <AnimatedLine width="36px" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Operating Philosophy
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
              Our Approach and Corporate Vision
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
              We operate through a disciplined ecosystem model that unites ecological stewardship with modern institutional corporate execution.
            </p>
          </FadeIn>
        </div>

        {/* 4 Pillars Grid with Aditya Birla Flip-Left 3D Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 perspective-container">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AosFlipCard key={idx} delay={idx * 0.12} duration={0.7} className="h-full">
                <div className="relative bg-white rounded-2xl p-8 border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full overflow-hidden">
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#879783] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-[#879783] tracking-widest px-2.5 py-1 rounded-full bg-[#879783]/10">
                        {pillar.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#F7F5EF] text-[#233B30] flex items-center justify-center group-hover:bg-[#233B30] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-xs">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#233B30] group-hover:text-[#4D6249] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#404640] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AosFlipCard>
            );
          })}
        </div>

        {/* Visual Ecosystem Banner with Ambient Glow */}
        <FadeIn direction="up" delay={0.2} distance={30}>
          <div className="relative rounded-3xl overflow-hidden bg-[#233B30] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10 group">
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
                alt="Ecosystem Vision Texture"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Ambient inner soft glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#879783]/20 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.2em] font-semibold text-[#A4B4A0] mb-4">
                <span>The Core Group Manifesto</span>
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-light leading-relaxed text-[#F7F5EF] italic">
                “{groupConfig.vision}”
              </blockquote>
              <p className="mt-6 text-sm text-[#DCE4D8]/90 font-light max-w-2xl leading-relaxed">
                By combining on-the-ground cooperative mobilization with cutting-edge technology and structured finance, we prove that market competitiveness and ecological harmony are mutually reinforcing forces.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
