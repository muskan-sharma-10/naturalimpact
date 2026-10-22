"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessesData } from "@/data/businesses";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedLine } from "@/components/ui/motion";

export const BusinessesSection: React.FC = () => {
  return (
    <section id="businesses" className="py-24 md:py-36 bg-[#FCFAF6] text-[#292D29] border-t border-[#DCE4D8]/60 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#879783]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#233B30]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
              <AnimatedLine width="36px" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Core Group Portfolio
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                A Group of Businesses. One Shared Vision.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
                We operate an integrated corporate architecture where five specialized divisions reinforce each other — from primary aggregation and community incubation to cloud traceability, trade liquidity, and regenerative restoration.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="shrink-0">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#233B30] text-[#F7F5EF] hover:bg-[#1A2D24] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 5 Divisions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Editorial Grid with Staggered Fade-in */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Agri-Commerce (7 cols on desktop) */}
          <StaggerItem className="md:col-span-7">
            <BusinessCard business={businessesData[0]} index="01" large />
          </StaggerItem>

          {/* Card 2: Producer Enterprise (5 cols on desktop) */}
          <StaggerItem className="md:col-span-5">
            <BusinessCard business={businessesData[1]} index="02" />
          </StaggerItem>

          {/* Card 3: Digital Systems (4 cols) */}
          <StaggerItem className="md:col-span-4">
            <BusinessCard business={businessesData[2]} index="03" />
          </StaggerItem>

          {/* Card 4: Trade Finance (4 cols) */}
          <StaggerItem className="md:col-span-4">
            <BusinessCard business={businessesData[3]} index="04" />
          </StaggerItem>

          {/* Card 5: Climate Resilience (4 cols) */}
          <StaggerItem className="md:col-span-4">
            <BusinessCard business={businessesData[4]} index="05" />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

interface BusinessCardProps {
  business: (typeof businessesData)[0];
  index: string;
  large?: boolean;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, index, large = false }) => {
  return (
    <Link
      href={`/businesses/${business.slug}`}
      className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-[#DCE4D8] bg-[#1A2D24] transition-all duration-500 hover:shadow-2xl hover:border-[#879783] hover:-translate-y-1.5 ${
        large ? "min-h-[460px] md:min-h-[520px]" : "min-h-[420px] md:min-h-[460px]"
      }`}
    >
      {/* Background Image with Zoom & Dark Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={business.heroImage}
          alt={business.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Layered Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24] via-[#233B30]/75 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-[#233B30]/30 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-20" />
      </div>

      {/* Top Header Information inside card */}
      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wider uppercase transition-colors group-hover:border-white/40">
          <span className="font-mono text-[#DCE4D8]">{index}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#879783]"></span>
          <span>{business.category}</span>
        </div>

        <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[#879783] group-hover:text-[#1A2D24] group-hover:border-[#879783] transition-all duration-300 group-hover:rotate-45 group-hover:scale-105 shadow-md">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-8 pt-0">
        <h3 className={`font-heading font-semibold text-white tracking-tight group-hover:text-[#F7F5EF] transition-colors ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          {business.name}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-[#DCE4D8]/90 font-light line-clamp-2 sm:line-clamp-3 leading-relaxed">
          {business.shortDescription}
        </p>

        {/* Hover Reveal: CTA & Capabilities preview */}
        <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-semibold text-white group-hover:text-[#DCE4D8] transition-colors">
          <span className="inline-flex items-center gap-2">
            <span>Explore Business Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
          {business.metrics && business.metrics[0] && (
            <span className="hidden sm:inline-block text-xs font-mono text-[#A4B4A0] bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-xs">
              {business.metrics[0].value} {business.metrics[0].label}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
