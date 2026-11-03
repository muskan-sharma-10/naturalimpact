"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Boxes,
  QrCode,
  Coins,
  Globe2,
  Trees,
  ArrowRight,
  CheckCircle2,
  Repeat,
} from "lucide-react";
import { FadeIn, AnimatedLine } from "@/components/ui/motion";

interface JourneyStep {
  step: string;
  title: string;
  divisionId: string;
  divisionName: string;
  divisionSlug: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  synergy: string;
  metric: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    title: "Producer Communities",
    divisionId: "producer-enterprise",
    divisionName: "Producer Enterprise Development",
    divisionSlug: "producer-enterprise-development",
    icon: Users,
    tagline: "Incubation & Collective Governance",
    description:
      "Mobilizing smallholder growers into corporatized Farmer Producer Companies (FPCs) with statutory board governance, member share equity, and autonomous leadership.",
    synergy: "Feeds structured grower clusters into Origin Aggregation.",
    metric: "32,000+ Growers",
  },
  {
    step: "02",
    title: "Aggregation & Quality",
    divisionId: "agri-commerce",
    divisionName: "Agri-Commerce & Value Chains",
    divisionSlug: "agri-commerce-value-chains",
    icon: Boxes,
    tagline: "Farmgate Grading & Standardization",
    description:
      "Operating decentralized collection hubs equipped with optical grading, moisture analyzers, solar dehydrators, and standardized bulk packaging.",
    synergy: "Standardizes physical commodity for Digital Provenance.",
    metric: "48+ Clusters Linked",
  },
  {
    step: "03",
    title: "Digital Traceability",
    divisionId: "digital-systems",
    divisionName: "Digital Systems & Traceability",
    divisionSlug: "digital-systems-traceability",
    icon: QrCode,
    tagline: "Geospatial Provenance & EUDR Passports",
    description:
      "Capturing polygon farm plot boundaries, real-time weighments, and stamping immutable QR batch records from living soil to enterprise shelf.",
    synergy: "Validates collateral security for Structured Trade Finance.",
    metric: "100% Traceability",
  },
  {
    step: "04",
    title: "Trade & Finance",
    divisionId: "trade-finance",
    divisionName: "Supply Chain & Trade Finance",
    divisionSlug: "supply-chain-trade-finance",
    icon: Coins,
    tagline: "Warehouse Receipts & Post-Harvest Liquidity",
    description:
      "Deploying electronic warehouse receipt (e-NWR) financing and invoice discounting to provide immediate cash on harvest day, preventing distressed sales.",
    synergy: "Eliminates cash distress and guarantees institutional fulfillment.",
    metric: "₹180 Cr+ Liquidity",
  },
  {
    step: "05",
    title: "Institutional Markets",
    divisionId: "agri-commerce",
    divisionName: "Agri-Commerce Off-Take",
    divisionSlug: "agri-commerce-value-chains",
    icon: Globe2,
    tagline: "Direct Corporate & Export Corridors",
    description:
      "Executing long-term off-take agreements with global food FMCGs, nutraceutical houses, and ethical consumer brands at predictable commercial margins.",
    synergy: "Generates sustained revenue surplus for Ecological Reinvestment.",
    metric: "18k+ MT Aggregated",
  },
  {
    step: "06",
    title: "Regenerative Impact",
    divisionId: "climate-resilience",
    divisionName: "Climate Resilience & Nature Solutions",
    divisionSlug: "climate-resilience-nature-solutions",
    icon: Trees,
    tagline: "Agroforestry & Soil Restoration",
    description:
      "Reinvesting value into agroforestry corridors, indigenous microbial inputs, rainwater micro-catchments, and long-term soil organic carbon enrichment.",
    synergy: "Protects farmer yields and closes the loop back to Producer Communities.",
    metric: "85,000+ Acres",
  },
];

export const EcosystemJourneySection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const activeStepData = JOURNEY_STEPS[selectedStep];

  return (
    <section className="py-24 md:py-36 bg-[#123D2A] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-[#1C5038]/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#B78B53]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
            <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#B78B53]">
              Closed-Loop Value Chain Architecture
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="section-title font-heading font-medium text-white tracking-tight leading-[1.12]">
              The Connected Ecosystem: How Our Divisions Work Together.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-[17px] md:text-[18px] text-[#DCE4D8] leading-relaxed font-light">
              Rather than disjointed services, Natural Impact forms a continuous, circular economic loop.
              Each capability reinforces the next — returning durable value to primary growers while securing
              resilient supply lines for global buyers.
            </p>
          </FadeIn>
        </div>

        {/* 6-Step Connected Journey Horizontal Flow on Desktop */}
        <div className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {JOURNEY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStep(idx)}
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#1C5038] border-2 border-[#B78B53] shadow-xl -translate-y-1"
                      : "bg-[#123D2A]/80 border border-white/10 hover:border-white/30 hover:bg-[#1C5038]/50"
                  }`}
                >
                  {/* Step Number & Connector */}
                  <div className="flex items-center justify-between mb-4 w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-[#B78B53]" : "text-[#A8B7A0]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#B78B53] text-[#123D2A]"
                          : "bg-white/10 text-white group-hover:bg-white/20"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white leading-tight">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-[#A8B7A0] uppercase tracking-wider block mt-1">
                      {item.tagline.split(" ")[0]}
                    </span>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-mono text-[#C8A06A]">
                    {item.metric}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Synergy Showcase Box */}
        <div className="bg-[#1C5038] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#286649] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#B78B53] uppercase tracking-wider mb-4 border border-white/10">
                <span>Phase {activeStepData.step} of 06</span>
                <span>•</span>
                <span className="text-white">{activeStepData.divisionName}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white tracking-tight">
                {activeStepData.title}: {activeStepData.tagline}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#DCE4D8] font-light leading-relaxed">
                {activeStepData.description}
              </p>

              {/* Inter-division synergy explanation */}
              <div className="mt-6 p-4 rounded-xl bg-[#123D2A]/80 border border-white/10 flex items-start gap-3">
                <Repeat className="w-5 h-5 text-[#B78B53] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A8B7A0]">
                    Systemic Interconnection:
                  </span>
                  <p className="text-sm text-white/95 mt-0.5 font-medium">
                    {activeStepData.synergy}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col justify-center sm:items-start lg:items-end">
              <div className="p-6 rounded-2xl bg-[#123D2A] border border-white/15 w-full text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider text-[#A8B7A0] font-semibold">
                  Verified Outcome:
                </span>
                <div className="text-3xl font-heading font-bold text-white mt-1 mb-2">
                  {activeStepData.metric}
                </div>
                <Link
                  href={`/businesses/${activeStepData.divisionSlug}`}
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-[#B78B53] hover:text-[#C8A06A] transition-colors mt-2"
                >
                  <span>Explore Associated Division</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
