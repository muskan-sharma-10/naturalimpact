"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessesData } from "@/data/businesses";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, luxuryEase, AnimatedLine } from "@/components/ui/motion";

export const FeaturedSpotlightSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentBusiness = businessesData[selectedIndex];

  // Auto-play spotlight like Aditya Birla
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % businessesData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % businessesData.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + businessesData.length) % businessesData.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 md:py-36 bg-[#233B30] text-[#F7F5EF] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#879783]/15 blur-[120px] pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#1A2D24]/80 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-3">
              <AnimatedLine width="36px" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Division Spotlight
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-white tracking-tight">
                Spotlight on Operational Excellence
              </h2>
            </FadeIn>
          </div>

          {/* Business Selector Tabs with layoutId and Navigation Buttons */}
          <FadeIn direction="up" delay={0.2} className="flex items-center gap-3">
            <div className="hidden md:flex items-center space-x-1.5 p-1 rounded-full bg-[#1A2D24]/80 border border-white/10 backdrop-blur-md mr-3">
              {businessesData.map((b, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 z-10 ${
                      isSelected
                        ? "text-[#1A2D24]"
                        : "text-[#DCE4D8] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="spotlightActivePill"
                        className="absolute inset-0 bg-[#879783] rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{b.shortName}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-sm"
                aria-label="Previous division"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-sm"
                aria-label="Next division"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Split Screen Featured Layout with AnimatePresence */}
        <div className="bg-[#1A2D24] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#3B4D38] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Visual Media with Image (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl bg-[#233B30]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBusiness.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: luxuryEase }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentBusiness.heroImage}
                      alt={currentBusiness.name}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/85 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A2D24]/85 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#A4B4A0] shadow-md z-10">
                  <Layers className="w-3.5 h-3.5 text-[#879783]" />
                  <span>Pillar {selectedIndex + 1} of 5</span>
                </div>

                {currentBusiness.metrics && currentBusiness.metrics[0] && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#233B30]/90 backdrop-blur-md border border-white/15 flex items-center justify-between z-10 shadow-lg">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {currentBusiness.metrics[0].value}
                      </div>
                      <div className="text-xs text-[#A4B4A0]">
                        {currentBusiness.metrics[0].label}
                      </div>
                    </div>
                    {currentBusiness.metrics[1] && (
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                          {currentBusiness.metrics[1].value}
                        </div>
                        <div className="text-xs text-[#A4B4A0]">
                          {currentBusiness.metrics[1].label}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Narrative & Offerings with Smooth Crossfade */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBusiness.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: luxuryEase }}
                >
                  <div className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#879783] mb-2">
                    {currentBusiness.category}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white tracking-tight">
                    {currentBusiness.name}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base font-medium text-[#A4B4A0] italic">
                    "{currentBusiness.tagline}"
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-[#DCE4D8]/90 font-light leading-relaxed">
                    {currentBusiness.fullDescription}
                  </p>

                  {/* Core Offerings Preview */}
                  <div className="mt-6 pt-6 border-t border-[#3B4D38] space-y-2.5">
                    <div className="text-xs uppercase tracking-wider text-[#A4B4A0] font-semibold mb-2">
                      Core Capabilities & Offerings:
                    </div>
                    {currentBusiness.keyOfferings.slice(0, 3).map((offering, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                        <CheckCircle className="w-4 h-4 text-[#879783] shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="mt-8">
                    <Link
                      href={`/businesses/${currentBusiness.slug}`}
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#879783] hover:bg-[#768772] text-[#1A2D24] font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>Explore Full {currentBusiness.shortName} Page</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
