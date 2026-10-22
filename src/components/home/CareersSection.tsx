"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Briefcase, Globe } from "lucide-react";
import { FadeIn, AnimatedLine, AosFlipCard } from "@/components/ui/motion";

export const CareersSection: React.FC = () => {
  const pathways = [
    {
      icon: Handshake,
      title: "Enterprise Off-Take",
      description: "Direct institutional supply contracts",
    },
    {
      icon: Globe,
      title: "Development Capital",
      description: "Blended finance & impact structures",
    },
    {
      icon: Briefcase,
      title: "Join Our Team",
      description: "Agronomists, engineers & leaders",
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
      caption: "Digital Lab Operations",
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
    <section id="careers" className="py-24 md:py-36 bg-[#233B30] text-[#F7F5EF] relative overflow-hidden">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#879783]/10 blur-[130px] pointer-events-none animate-ambient-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up" distance={30}>
          <div className="bg-[#1A2D24] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#3B4D38] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <AnimatedLine width="36px" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                    Partnerships & Careers
                  </span>
                </div>

                <h2 className="section-title font-heading font-medium text-white tracking-tight">
                  Collaborate With Natural Impact Group
                </h2>

                <p className="mt-4 text-[17px] md:text-[18px] text-[#DCE4D8]/90 font-light leading-relaxed">
                  Whether you are a food FMCG enterprise seeking verified ethical supply corridors, a development bank investing in rural collectives, or a professional aiming to build high-scale nature-based solutions — we invite collaboration.
                </p>

                {/* Collaboration Pathways with Aditya Birla 3D Flip */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#3B4D38] perspective-container">
                  {pathways.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <AosFlipCard key={idx} delay={0.1 + idx * 0.1} duration={0.65} className="h-full">
                        <div className="p-4 rounded-xl bg-[#233B30]/70 border border-white/10 hover:border-[#879783]/60 hover:bg-[#233B30] transition-all duration-300 group hover:-translate-y-1 shadow-sm h-full flex flex-col justify-between">
                          <div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#879783] transition-colors">
                              <Icon className="w-5 h-5 text-[#879783] group-hover:text-[#1A2D24] transition-colors" />
                            </div>
                            <h4 className="text-sm font-semibold text-white group-hover:text-[#DCE4D8] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#A4B4A0] mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </AosFlipCard>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#879783] hover:bg-[#788874] text-[#1A2D24] font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                  >
                    <span className="relative z-10">Initiate Partnership Inquiry</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="mailto:contact@naturalimpact.global"
                    className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-all duration-300 hover:border-white/40"
                  >
                    <span>Direct: contact@naturalimpact.global</span>
                  </a>
                </div>
              </div>

              {/* Right Media (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80"
                    alt="Natural Impact Field Leadership"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#233B30]/90 backdrop-blur-md border border-white/15 text-xs text-[#DCE4D8] shadow-lg">
                    <p className="font-semibold text-white">Headquarters & Regional Field Offices</p>
                    <p className="mt-0.5 text-[#A4B4A0]">Noida One, Sector 62 & Active Agricultural Belts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Aditya Birla Signature Team & Field Culture Gallery Strip */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
              Ground Realities & Collective Culture
            </div>
            <span className="text-xs text-[#A4B4A0]">Active Belts & Enterprise Centres</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 perspective-container">
            {galleryImages.map((img, idx) => (
              <AosFlipCard key={idx} delay={idx * 0.08} duration={0.6} className="h-32 sm:h-36">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 group shadow-md hover:border-[#879783]/60 transition-all duration-300">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white/90 truncate group-hover:text-white transition-colors">
                    {img.caption}
                  </span>
                </div>
              </AosFlipCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
