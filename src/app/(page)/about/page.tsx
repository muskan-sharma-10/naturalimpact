import React from "react";
import Image from "next/image";
import Link from "next/link";
import { groupConfig, groupMilestones, verifiedMetrics } from "@/data/group";
import { businessesData } from "@/data/businesses";
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, MapPin, Building2, TrendingUp } from "lucide-react";
import { AnimatedLine } from "@/components/ui/motion";

export const metadata = {
  title: "Our Story & Ecosystem Architecture | Natural Impact Group",
  description:
    "Learn about Natural Impact Group's founding purpose, operating philosophy, 2019-2024 milestones, and leadership in nature-based agri-commerce from Noida One, Delhi NCR.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#20251F]">
      {/* Editorial Page Hero */}
      <section className="relative py-16 md:py-24 border-b border-[#DCE4D8] overflow-hidden bg-[#123D2A] text-white">
        <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=80"
            alt="Natural Impact Landscape Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#1C5038]/50 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#B78B53] uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Heritage & Ecosystem Architecture</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-white tracking-tight leading-[1.08]">
              Where Nature, Enterprise and Opportunity Meet.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#DCE4D8] font-light leading-relaxed">
              Natural Impact Group is an integrated parent conglomerate architected to transition rural agricultural producers into autonomous, market-aligned corporate actors.
            </p>
          </div>
        </div>
      </section>

      {/* Group Overview & Purpose (Split Layout) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[17px] text-[#363D34] leading-relaxed font-light">
            <div className="flex items-center gap-3 mb-2">
              <AnimatedLine width="36px" className="h-[2px] bg-[#B78B53]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
                Who We Are
              </span>
            </div>
            <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight leading-[1.14]">
              Bridging Grassroots Agricultural Potential With Global Institutional Markets.
            </h2>
            <p>
              Headquartered at Noida One, Sector-62, Natural Impact Group was formed to answer a profound systemic
              challenge in global agri-commerce: the disconnect between the primary producer and institutional markets.
            </p>
            <p>
              While rural communities steward soil, water, and biodiversity, traditional multi-tiered brokerages
              extract disproportionate margins. We replace this broken model with five integrated corporate divisions
              combining direct farmgate processing, FPO governance incubation, cloud traceability, trade liquidity,
              and regenerative agroforestry.
            </p>
            <div className="pt-4 flex items-center gap-8">
              <div className="border-l-2 border-[#B78B53] pl-4">
                <div className="text-2xl font-bold font-heading text-[#123D2A]">2019</div>
                <div className="text-xs uppercase text-[#5C6659] tracking-wider">Foundation Year</div>
              </div>
              <div className="border-l-2 border-[#B78B53] pl-4">
                <div className="text-2xl font-bold font-heading text-[#123D2A]">Noida, India</div>
                <div className="text-xs uppercase text-[#5C6659] tracking-wider">NOIDA ONE HQ</div>
              </div>
              <div className="border-l-2 border-[#B78B53] pl-4">
                <div className="text-2xl font-bold font-heading text-[#123D2A]">5 Divisions</div>
                <div className="text-xs uppercase text-[#5C6659] tracking-wider">Connected Structure</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white bg-[#123D2A]">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                alt="Natural Impact Landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-[#EDEAE0] border-y border-[#DCE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DCE4D8] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#123D2A]/10 text-[#123D2A] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#123D2A]" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B78B53]">
                Group Vision
              </span>
              <h3 className="text-2xl font-heading font-medium text-[#123D2A] mt-2 mb-4">
                Autonomous, Resilient Producer Communities
              </h3>
              <p className="text-base text-[#363D34] leading-relaxed font-light">
                {groupConfig.vision}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DCE4D8] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#123D2A]/10 text-[#123D2A] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#123D2A]" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B78B53]">
                Group Mission
              </span>
              <h3 className="text-2xl font-heading font-medium text-[#123D2A] mt-2 mb-4">
                Catalyzing Nature-Based Enterprise Engines
              </h3>
              <p className="text-base text-[#363D34] leading-relaxed font-light">
                {groupConfig.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-2">
            <AnimatedLine width="36px" className="h-[2px] bg-[#B78B53]" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
              Foundational Ethics
            </span>
          </div>
          <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight mt-2">
            Our Core Operating Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#363D34] font-light">
            Every business decision across all divisions is anchored in four uncompromising tenets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {groupConfig.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4D8] shadow-xs hover:shadow-xl hover:border-[#1C5038]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-xs font-mono font-bold text-[#B78B53] mb-4">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-semibold text-lg text-[#123D2A] group-hover:text-[#1C5038] transition-colors mb-3">
                {val.title}
              </h4>
              <p className="text-sm text-[#363D34] leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Milestones Timeline (2019-2024) */}
      <section className="py-24 bg-[#123D2A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#B78B53]">
              Milestones & Trajectory
            </span>
            <h2 className="section-title font-heading font-medium text-white tracking-tight mt-2">
              Our Journey of Purposeful Growth
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#DCE4D8] font-light">
              From our first village collection points to a recognized multi-division agri-commerce corporate group.
            </p>
          </div>

          <div className="relative border-l border-[#1C5038] ml-4 md:ml-32 space-y-12">
            {groupMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[45px] top-0 flex items-center justify-center font-heading font-bold text-sm text-[#B78B53]">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#B78B53] border-4 border-[#123D2A] -mr-1" />
                </div>

                <div className="bg-[#1C5038] rounded-2xl p-6 sm:p-8 border border-[#286649] shadow-md hover:border-[#B78B53]/50 transition-colors">
                  <span className="font-mono text-xs font-bold text-[#B78B53] tracking-wider uppercase">
                    Year {milestone.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#DCE4D8] font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Business Ecosystem Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1C5038]">
              Corporate Organization
            </span>
            <h2 className="section-title font-heading font-medium text-[#123D2A] tracking-tight mt-2">
              The Five Operating Divisions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#363D34] font-light">
              Each division functions as a specialized operating unit while contributing to the unified parent mission.
            </p>
          </div>

          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123D2A] text-white hover:bg-[#1C5038] text-sm font-semibold transition-all shrink-0 shadow-md"
          >
            <span>Explore All Businesses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessesData.map((b, idx) => (
            <Link
              key={b.id}
              href={`/businesses/${b.slug}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4D8] shadow-xs hover:shadow-xl hover:border-[#1C5038]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#5C6659] mb-2">
                  <span className="font-mono text-[#B78B53]">0{idx + 1}.</span>
                  <span>{b.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#123D2A] group-hover:text-[#1C5038] transition-colors mb-3">
                  {b.shortName}
                </h3>
                <p className="text-sm text-[#363D34] font-light leading-relaxed line-clamp-3">
                  {b.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE4D8] flex items-center justify-between text-xs font-semibold text-[#123D2A]">
                <span>View Dedicated Page</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
