"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Globe2, Briefcase, Mail, MapPin } from "lucide-react";
import { groupConfig } from "@/data/group";
import { FadeIn, AnimatedLine } from "@/components/ui/motion";

export const CareersSection: React.FC = () => {
  const pathways = [
    {
      icon: Handshake,
      title: "Enterprise & Institutional Buyers",
      description:
        "Direct origin procurement programs, certified quality specifications, and EUDR-compliant batch traceability for food FMCGs and commodity houses.",
      cta: "Procurement Inquiries",
      link: "/contact?intent=buyer",
    },
    {
      icon: Globe2,
      title: "Development & Investment Partners",
      description:
        "Blended finance structures, FPO equity capitalization, and corporate Scope-3 carbon insetting initiatives across active agroforestry belts.",
      cta: "Investment Partnerships",
      link: "/contact?intent=partner",
    },
    {
      icon: Briefcase,
      title: "Professionals & Field Leaders",
      description:
        "Join our corporate desk at Noida One or our on-the-ground agronomy, digital technology, and rural collective incubation field teams.",
      cta: "Explore Careers",
      link: "/contact?intent=career",
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=600&q=80",
      caption: "Agronomy Leadership",
    },
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      caption: "Organic Belts",
    },
    {
      url: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
      caption: "Producer Alliances",
    },
    {
      url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
      caption: "Digital Telemetry",
    },
    {
      url: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=600&q=80",
      caption: "Canopy Restoration",
    },
    {
      url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=600&q=80",
      caption: "Field Operations",
    },
  ];

  return (
    <section id="careers" className="py-24 md:py-36 bg-[#123D2A] text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#1C5038]/40 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up" distance={30}>
          <div className="bg-[#1C5038] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#286649] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <AnimatedLine width="40px" className="h-[2px] bg-[#B78B53]" />
                  <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#B78B53]">
                    Partnerships & Engagement
                  </span>
                </div>

                <h2 className="section-title font-heading font-medium text-white tracking-tight leading-[1.12]">
                  Let's Build More Resilient Value Chains Together.
                </h2>

                <p className="mt-4 text-[17px] md:text-[18px] text-[#DCE4D8] font-light leading-relaxed">
                  Whether you are a global enterprise seeking verified origin supply, a development institution
                  investing in rural resilience, or a professional eager to transform agriculture — we welcome engagement.
                </p>

                {/* 3 Audience Pathways */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
                  {pathways.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#123D2A]/70 border border-white/10 hover:border-[#B78B53]/60 transition-all duration-300 group hover:-translate-y-1 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#B78B53] transition-colors">
                            <Icon className="w-5 h-5 text-[#B78B53] group-hover:text-[#123D2A] transition-colors" />
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#F7F5EF] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#DCE4D8]/80 mt-1 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>

                        <Link
                          href={item.link}
                          className="mt-4 pt-2 border-t border-white/10 text-[11px] font-semibold text-[#B78B53] group-hover:text-[#C8A06A] inline-flex items-center gap-1"
                        >
                          <span>{item.cta}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#B78B53] hover:bg-[#C8A06A] text-[#123D2A] font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Initiate Corporate Inquiry</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`mailto:${groupConfig.headquarters.email}`}
                    className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-all duration-300 hover:border-white/40"
                  >
                    <span>Direct: {groupConfig.headquarters.email}</span>
                  </a>
                </div>
              </div>

              {/* Right Media (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-2xl group bg-[#123D2A]">
                  <Image
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80"
                    alt="Natural Impact Field Leadership"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#123D2A]/90 backdrop-blur-md border border-white/15 text-xs text-[#DCE4D8] shadow-lg">
                    <p className="font-semibold text-white">Headquarters & Field Belts</p>
                    <p className="mt-0.5 text-[#A8B7A0]">
                      NOIDA ONE, Block B Industrial Area, Sector-62, Noida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Ground Realities Strip */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-5">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B78B53]">
              Ground Realities & Collective Culture
            </div>
            <span className="text-xs text-[#A8B7A0]">Active Agricultural Belts & Aggregation Centers</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 group shadow-md hover:border-[#B78B53]/60 transition-all duration-300"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-500 ease-out"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white/90 truncate group-hover:text-white transition-colors">
                  {img.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
