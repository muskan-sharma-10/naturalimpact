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

export const metadata = {
  title: "Our Impact & Sustainability | Nature-Based Outcomes",
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
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      {/* Editorial Page Hero */}
      <section className="py-16 md:py-24 border-b border-[#DCE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
              <Globe2 className="w-3.5 h-3.5 text-[#4D6249]" />
              <span>Verifiable Responsibility</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-[#233B30] tracking-tight">
              Evidence-Led Ecological & Rural Impact.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
              We reject unsubstantiated corporate greenwashing in favor of verifiable ground-level metrics, audited commodity provenance, and durable producer equity.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Metrics Bar */}
      <section className="py-12 bg-[#233B30] text-white border-b border-[#1A2D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {verifiedMetrics.slice(1, 5).map((m, idx) => (
              <div key={idx} className="border-l border-[#4D6249] pl-4">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {m.value}{m.numericSuffix}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#A4B4A0] mt-1">
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
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE4D8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#879783]/15 text-[#233B30] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#879783]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#233B30]">
                    {pillar.title}
                  </h2>

                  <p className="mt-4 text-base text-[#404640] font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#DCE4D8] space-y-2">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#233B30]">
                        <CheckCircle className="w-4 h-4 text-[#4D6249] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="bg-[#EDEAE0] rounded-2xl p-8 border border-[#DCE4D8] text-center flex flex-col items-center justify-center min-h-[260px]">
                    <span className="text-xs uppercase tracking-widest text-[#879783] font-semibold">
                      Verified Indicator
                    </span>
                    <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#233B30] mt-3 mb-2">
                      {pillar.metric}
                    </div>
                    <p className="text-xs text-[#6B726A] max-w-xs">
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
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Global Frameworks
            </span>
            <h3 className="section-title font-heading font-medium text-[#233B30] tracking-tight mt-2">
              Alignment With United Nations SDGs
            </h3>
            <p className="mt-4 text-base text-[#404640] font-light">
              Our interventions directly contribute to measurable indicators across four primary global objectives:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8]">
              <span className="text-xs font-bold text-[#879783]">SDG 1 & 2</span>
              <h4 className="font-heading font-semibold text-lg text-[#233B30] mt-1 mb-2">
                No Poverty & Zero Hunger
              </h4>
              <p className="text-xs text-[#6B726A] leading-relaxed">
                Enhancing smallholder net incomes by 38% through decentralized value addition and fair market price realization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8]">
              <span className="text-xs font-bold text-[#879783]">SDG 8</span>
              <h4 className="font-heading font-semibold text-lg text-[#233B30] mt-1 mb-2">
                Decent Work & Economic Growth
              </h4>
              <p className="text-xs text-[#6B726A] leading-relaxed">
                Incubating autonomous farmer-owned businesses and creating local green enterprise jobs for youth and women.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8]">
              <span className="text-xs font-bold text-[#879783]">SDG 13</span>
              <h4 className="font-heading font-semibold text-lg text-[#233B30] mt-1 mb-2">
                Climate Action
              </h4>
              <p className="text-xs text-[#6B726A] leading-relaxed">
                Sequestering soil organic carbon and integrating climate-hardy heritage crops across 85,000+ rainfed acres.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE4D8]">
              <span className="text-xs font-bold text-[#879783]">SDG 15</span>
              <h4 className="font-heading font-semibold text-lg text-[#233B30] mt-1 mb-2">
                Life on Land
              </h4>
              <p className="text-xs text-[#6B726A] leading-relaxed">
                Restoring degraded agroforestry corridors with 1.2M+ native trees and guaranteeing zero deforestation via polygon satellite tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#233B30] rounded-3xl p-8 sm:p-12 text-white border border-[#3B4D38] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A4B4A0]">
              Auditing & ESG Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white mt-1">
              Interested in Verifiable Scope-3 Insetting?
            </h3>
            <p className="mt-2 text-sm text-[#DCE4D8]/90 max-w-xl font-light">
              Connect with our sustainability practice at Noida One to explore accredited regenerative supply chains for your institutional brand.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#879783] hover:bg-[#6F806B] text-[#1A2D24] font-semibold text-sm transition-all shrink-0"
          >
            <span>Inquire About ESG Insetting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
