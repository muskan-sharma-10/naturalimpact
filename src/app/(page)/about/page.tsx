import React from "react";
import Image from "next/image";
import Link from "next/link";
import { groupConfig, groupMilestones, verifiedMetrics } from "@/data/group";
import { businessesData } from "@/data/businesses";
import { ArrowRight, CheckCircle2, Award, Compass, Users, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "About the Group | Corporate Heritage & Ecosystem Architecture",
  description:
    "Learn about Natural Impact Group's founding purpose, operating philosophy, 2019-2024 milestones, and leadership in nature-based agri-commerce.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      {/* Editorial Page Hero */}
      <section className="relative py-16 md:py-24 border-b border-[#DCE4D8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
              <span>Corporate Heritage & Ecosystem</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-[#233B30] tracking-tight">
              Pioneering Market-Led Nature Solutions.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
              Natural Impact Group is an integrated parent enterprise architected to elevate agricultural producers into autonomous, market-aligned corporate actors.
            </p>
          </div>
        </div>
      </section>

      {/* Group Overview & Purpose (Split Layout) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[17px] text-[#404640] leading-relaxed font-light">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Who We Are
            </span>
            <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
              Bridging Grassroots Agricultural Potential With Global Institutional Markets.
            </h2>
            <p>
              Headquartered at Noida One, Sector-62, Natural Impact Group was formed to answer a profound systemic failure in global food supply chains: the profound disconnect between the primary producer and the end market.
            </p>
            <p>
              While rural communities steward our soil, forests, and biodiversity, traditional multi-tiered brokerages extract disproportionate margins, leaving farmers exposed to climate shocks and cash distress. We replace this broken mechanism with five integrated corporate engines that combine direct farmgate processing, FPO governance incubation, cloud traceability, trade finance liquidity, and regenerative land management.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="border-l-2 border-[#879783] pl-4">
                <div className="text-2xl font-bold font-heading text-[#233B30]">2019</div>
                <div className="text-xs uppercase text-[#879783] tracking-wider">Year Founded</div>
              </div>
              <div className="border-l-2 border-[#879783] pl-4">
                <div className="text-2xl font-bold font-heading text-[#233B30]">Noida, India</div>
                <div className="text-xs uppercase text-[#879783] tracking-wider">Corporate HQ</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white">
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
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DCE4D8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#879783]/20 text-[#233B30] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Group Vision
              </span>
              <h3 className="text-2xl font-heading font-semibold text-[#233B30] mt-2 mb-4">
                Autonomous, Resilient Producer Communities
              </h3>
              <p className="text-base text-[#404640] leading-relaxed font-light">
                {groupConfig.vision}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DCE4D8] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#879783]/20 text-[#233B30] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Group Mission
              </span>
              <h3 className="text-2xl font-heading font-semibold text-[#233B30] mt-2 mb-4">
                Catalyzing Nature-Based Enterprise Engines
              </h3>
              <p className="text-base text-[#404640] leading-relaxed font-light">
                {groupConfig.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
            Foundational Ethics
          </span>
          <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight mt-2">
            Our Core Operating Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#404640] font-light">
            Every business decision across all subsidiaries is anchored in four uncompromising tenets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groupConfig.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4D8] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-mono font-bold text-[#879783] mb-4">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-semibold text-lg text-[#233B30] mb-3">
                {val.title}
              </h4>
              <p className="text-sm text-[#404640] leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Milestones Timeline (2019-2024) */}
      <section className="py-24 bg-[#233B30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A4B4A0]">
              Milestones & Trajectory
            </span>
            <h2 className="section-title font-heading font-medium text-white tracking-tight mt-2">
              Our Journey of Purposeful Growth
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#DCE4D8]/80 font-light">
              From our first village collection points to a recognized multi-division agri-commerce corporate group.
            </p>
          </div>

          <div className="relative border-l border-[#4D6249] ml-4 md:ml-32 space-y-12">
            {groupMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Badge on the left */}
                <div className="absolute -left-[45px] top-0 flex items-center justify-center w-22 font-heading font-bold text-sm text-[#879783]">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#879783] border-4 border-[#233B30] -mr-1"></span>
                </div>

                <div className="bg-[#1A2D24] rounded-2xl p-6 sm:p-8 border border-[#3B4D38] shadow-md">
                  <span className="font-mono text-xs font-bold text-[#A4B4A0] tracking-wider uppercase">
                    Year {milestone.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#DCE4D8]/90 font-light leading-relaxed">
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
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Corporate Organization
            </span>
            <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight mt-2">
              The Group Business Architecture
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#404640] font-light">
              Each division functions as an autonomous operating company while contributing to the unified parent mission.
            </p>
          </div>

          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#233B30] text-white hover:bg-[#1A2D24] text-sm font-semibold transition-all shrink-0"
          >
            <span>Explore All Businesses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessesData.map((b) => (
            <Link
              key={b.id}
              href={`/businesses/${b.slug}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#879783]">
                  {b.category}
                </span>
                <h3 className="font-heading font-semibold text-xl text-[#233B30] group-hover:text-[#4D6249] transition-colors mt-1 mb-3">
                  {b.shortName}
                </h3>
                <p className="text-sm text-[#404640] font-light leading-relaxed line-clamp-3">
                  {b.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE4D8]/60 flex items-center justify-between text-xs font-semibold text-[#233B30]">
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
