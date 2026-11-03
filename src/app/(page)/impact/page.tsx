import React from "react";
import Image from "next/image";
import Link from "next/link";
import { verifiedMetrics } from "@/data/group";
import {
  Sprout,
  Users,
  ShieldCheck,
  TrendingUp,
  Droplets,
  Trees,
  CheckCircle,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { AnimatedLine } from "@/components/ui/motion";

export const metadata = {
  title: "Our Impact & Responsibility | Natural Impact Group",
  description:
    "Explore Natural Impact Group's verified ground-level impact: 85,000+ acres under regenerative cultivation, 32,000+ smallholder producers mobilized, and 100% cloud batch traceability.",
};

export default function ImpactPage() {
  const impactPillars = [
    {
      icon: Trees,
      title: "Regenerative Agroforestry & Soil Health",
      metric: "85,000+ Acres",
      description:
        "Transitioning degraded monoculture farming belts into biodiverse agroforestry canopies. Integrating nitrogen-fixing shade trees with annual cash crops enhances soil microbial density, retains soil moisture, and creates natural windbreaks.",
      highlights: [
        "Over 1.2 million indigenous saplings planted",
        "Average 22% increase in Soil Organic Carbon (SOC)",
        "Zero-chemical bio-input preparation centers",
      ],
    },
    {
      icon: Users,
      title: "Producer Collectives & Economic Self-Reliance",
      metric: "32,000+ Growers",
      description:
        "Building autonomous Farmer Producer Companies (FPCs) with statutory board governance, democratic shareholder voting, and direct market bargaining power to insulate rural families from debt traps.",
      highlights: [
        "65+ incorporated Farmer Producer Companies",
        "38% average increase in net farmgate income realization",
        "Dedicated women and youth leadership incubation tracks",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Geospatial Traceability & Governance",
      metric: "100% Verifiable",
      description:
        "Mapping farmer plot polygons to comply with international anti-deforestation standards (such as EUDR) and stamping immutable cryptographic provenance records across every processing and transport batch.",
      highlights: [
        "450,000+ mapped farmer plot coordinates",
        "Full compliance with EUDR and global Scope-3 directives",
        "Tamper-evident QR codes on all commercial commodity sacks",
      ],
    },
    {
      icon: Droplets,
      title: "Decentralized Watershed Management",
      metric: "42% Water Saved",
      description:
        "Constructing community micro-check dams, percolation tanks, and recharge borewells to restore local groundwater aquifers and insulate farming communities against cyclical monsoon failures.",
      highlights: [
        "140+ community micro-check dams built",
        "Sub-surface moisture retention extended by 45 days post-monsoon",
        "Solar drip irrigation integration for high-value horticulture",
      ],
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#20251F]">
      {/* Editorial Page Hero */}
      <section className="py-16 md:py-24 border-b border-[#DCE4D8] bg-[#123D2A] text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#1C5038]/40 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#B78B53] uppercase tracking-wider mb-6">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Verifiable Group Responsibility</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-white tracking-tight leading-[1.08]">
              Evidence-Led Ecological & Rural Impact.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#DCE4D8] font-light leading-relaxed">
              We reject unsubstantiated corporate greenwashing in favor of verifiable ground-level metrics, audited commodity provenance, and durable producer equity.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Metrics Bar */}
      <section className="py-12 bg-[#1C5038] text-white border-b border-[#286649]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {verifiedMetrics.slice(1, 5).map((m, idx) => (
              <div key={idx} className="border-l-2 border-[#B78B53] pl-4">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {m.value}{m.numericSuffix}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#A8B7A0] mt-1 font-semibold">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {impactPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE4D8] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#123D2A]/10 text-[#123D2A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#B78B53]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#123D2A] leading-snug">
                    {pillar.title}
                  </h2>

                  <p className="mt-4 text-base text-[#363D34] font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#DCE4D8] space-y-2.5">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#20251F]">
                        <CheckCircle className="w-4 h-4 text-[#1C5038] shrink-0" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="bg-[#123D2A] text-white rounded-2xl p-8 border border-[#1C5038] text-center flex flex-col items-center justify-center min-h-[260px] shadow-lg">
                    <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold">
                      Verified Indicator
                    </span>
                    <div className="text-4xl sm:text-5xl font-heading font-bold text-white mt-3 mb-2">
                      {pillar.metric}
                    </div>
                    <p className="text-xs text-[#DCE4D8]/80 max-w-xs font-light">
                      Documented through field registries, GIS polygon records, and third-party accredited audits.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sustainable Development Goals Alignment */}
      <section className="py-20 bg-[#EDEAE0] border-t border-[#DCE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C5038]">
              Global Frameworks
            </span>
            <h3 className="section-title font-heading font-medium text-[#123D2A] tracking-tight mt-2 leading-[1.14]">
              Alignment With United Nations SDGs
            </h3>
            <p className="mt-4 text-base text-[#363D34] font-light">
              Our corporate interventions directly contribute to verifiable targets across four primary global goals:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8] shadow-xs">
              <span className="text-xs font-bold text-[#B78B53] font-mono">SDG 1 & 2</span>
              <h4 className="font-heading font-semibold text-lg text-[#123D2A] mt-1 mb-2">
                No Poverty & Zero Hunger
              </h4>
              <p className="text-xs text-[#363D34] leading-relaxed font-light">
                Direct farmgate aggregation and price realization elevate rural household net income by 38%.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8] shadow-xs">
              <span className="text-xs font-bold text-[#B78B53] font-mono">SDG 8</span>
              <h4 className="font-heading font-semibold text-lg text-[#123D2A] mt-1 mb-2">
                Decent Work & Growth
              </h4>
              <p className="text-xs text-[#363D34] leading-relaxed font-light">
                Incorporating farmer collectives as formalized corporations with working capital access and professional management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8] shadow-xs">
              <span className="text-xs font-bold text-[#B78B53] font-mono">SDG 12</span>
              <h4 className="font-heading font-semibold text-lg text-[#123D2A] mt-1 mb-2">
                Responsible Consumption
              </h4>
              <p className="text-xs text-[#363D34] leading-relaxed font-light">
                100% cryptographic batch provenance and deforestation-free supply chains compliant with international EUDR mandates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8] shadow-xs">
              <span className="text-xs font-bold text-[#B78B53] font-mono">SDG 13 & 15</span>
              <h4 className="font-heading font-semibold text-lg text-[#123D2A] mt-1 mb-2">
                Climate Action & Life on Land
              </h4>
              <p className="text-xs text-[#363D34] leading-relaxed font-light">
                85,000+ acres under regenerative agroforestry canopies and micro-catchment water conservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
