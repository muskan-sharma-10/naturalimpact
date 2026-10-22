"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter, luxuryEase } from "@/components/ui/motion";

interface HeroSlide {
  id: string;
  shortName: string;
  sectorTitle: string;
  badge: string;
  headline: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "agri-commerce",
    shortName: "Agri-Commerce",
    sectorTitle: "Agri-Commerce",
    badge: "Origin-to-Market Supply Chains",
    headline: "Building Sustainable Supply Corridors",
    description:
      "Direct aggregation, state-of-the-art farmgate grading, and institutional trade corridors connecting certified farmer collectives to international buyers.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85",
    ctaText: "Explore Agri-Commerce",
    ctaLink: "/businesses/agri-commerce",
  },
  {
    id: "producer-enterprise",
    shortName: "Producer Enterprise",
    sectorTitle: "Producer Enterprise",
    badge: "FPO Governance & Incubation",
    headline: "Empowering Autonomous Producer Collectives",
    description:
      "Statutory compliance, professional board management, and capacity building for rural collectives to retain democratic ownership and fair pricing power.",
    image:
      "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=2400&q=85",
    ctaText: "Explore Producer Enterprises",
    ctaLink: "/businesses/producer-enterprise",
  },
  {
    id: "digital-systems",
    shortName: "Digital Systems",
    sectorTitle: "Digital Systems",
    badge: "Polygon Traceability & EUDR",
    headline: "Traceability From Living Soil to Global Shelf",
    description:
      "Geotagged plot mapping, tamper-evident batch QR passports, and automated regulatory reporting ensuring complete supply chain transparency.",
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=2400&q=85",
    ctaText: "Explore Digital Systems",
    ctaLink: "/businesses/digital-systems",
  },
  {
    id: "trade-finance",
    shortName: "Trade Finance",
    sectorTitle: "Trade Finance",
    badge: "Liquidity & Warehouse Receipts",
    headline: "Institutional Capital for Rural Growth",
    description:
      "Electronic warehouse receipt financing, cash-flow lending, and working capital lines protecting farmer organizations from distress sales.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=85",
    ctaText: "Explore Trade Finance",
    ctaLink: "/businesses/trade-finance",
  },
  {
    id: "climate-resilience",
    shortName: "Climate Resilience",
    sectorTitle: "Climate Resilience",
    badge: "Nature-Based Solutions",
    headline: "Restoring Ecology Through Market-Led Impact",
    description:
      "Over 85,000 acres under regenerative agroforestry, micro-catchment water conservation, and soil carbon enrichment frameworks.",
    image:
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=2400&q=85",
    ctaText: "Explore Climate Resilience",
    ctaLink: "/businesses/climate-resilience",
  },
];

const SLIDE_DURATION = 6500; // 6.5s per slide

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeSlide = HERO_SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Timer & Progress Animation
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 50;
    const increment = (intervalStep / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  const scrollToContent = () => {
    const el = document.getElementById("intro-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A2D24]">
      {/* Background Slides with Aditya Birla Cross-Fade & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.headline}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multilayered Atmospheric Gradients for High Visual Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24] via-[#233B30]/80 to-[#1A2D24]/50" />
        <div className="absolute inset-0 bg-[#1A2D24]/40 mix-blend-multiply" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#879783]/20 blur-[130px] pointer-events-none animate-ambient-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#4D6249]/25 blur-[150px] pointer-events-none animate-ambient-glow"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 flex flex-col justify-between min-h-screen">
        {/* Top Spacer for Header */}
        <div className="h-4 sm:h-8" />

        {/* Center Main Stage: Aditya Birla Split-Title and Reveal Narrative */}
        <div className="my-auto max-w-5xl">
          {/* Subtle Pre-header Badge with Ping Animation */}
          <motion.div
            key={`badge-${activeSlide.id}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-[#F7F5EF] mb-8 shadow-lg group hover:border-white/40 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#879783] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#879783]"></span>
            </span>
            <span>{activeSlide.badge}</span>
          </motion.div>

          {/* Aditya Birla Signature Split Typography: Group Name + Dynamic Rotating Sector */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-[#DCE4D8]/80 font-mono"
            >
              Natural Impact Group
            </motion.div>

            {/* Alternating Headline with Smooth Slide & Fade In */}
            <div className="overflow-hidden min-h-[4.5rem] sm:min-h-[6rem] lg:min-h-[8rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -35 }}
                  transition={{ duration: 0.75, ease: luxuryEase }}
                  className="hero-title font-heading font-medium text-white tracking-tight leading-[1.08]"
                >
                  {activeSlide.headline.split(" ")[0]} <br />
                  <span className="text-[#DCE4D8] font-normal italic editorial-serif inline-block bg-gradient-to-r from-[#DCE4D8] via-[#FFFFFF] to-[#A4B4A0] bg-clip-text text-transparent">
                    {activeSlide.headline.split(" ").slice(1).join(" ")}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Concise Supporting Copy with Crossfade */}
          <div className="min-h-[4.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeSlide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#F7F5EF]/90 max-w-2xl font-light leading-relaxed"
              >
                {activeSlide.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Two Clear Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <Link
              href={activeSlide.ctaLink}
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#879783] hover:bg-[#788874] text-[#1A2D24] font-semibold text-base tracking-wide transition-all duration-300 shadow-[0_10px_25px_rgba(135,151,131,0.35)] hover:shadow-[0_15px_35px_rgba(135,151,131,0.45)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10">{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EF] border border-white/25 backdrop-blur-sm font-medium text-base tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:border-white/40 shadow-sm"
            >
              <span>Our Vision & Leadership</span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar: Slide Progress Tabs + Play/Pause & Indicators + Statistics Counter */}
        <div className="mt-12 pt-8 border-t border-white/15">
          {/* Aditya Birla Slide Selector Tabs with Progress Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8">
            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelect(idx)}
                    className={`relative text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 overflow-hidden border ${isActive
                        ? "bg-white/15 border-[#879783] text-white shadow-md backdrop-blur-md"
                        : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {/* Active Progress Fill Bar */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-[3px] bg-[#879783] transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(135,151,131,0.8)]"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    <span className="font-mono text-[11px] text-[#A4B4A0] mr-2">
                      0{idx + 1}
                    </span>
                    <span>{slide.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Play/Pause & Carousel Navigation Arrows */}
            <div className="flex items-center space-x-2 shrink-0 self-end lg:self-center">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Indicators Bar with Animated Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full text-[#F7F5EF]">
            <div className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight group-hover:text-[#879783] transition-colors">
                <AnimatedCounter value="5" duration={1.5} />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A4B4A0] mt-1.5 font-medium">
                Core Businesses
              </div>
            </div>

            <div className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight group-hover:text-[#879783] transition-colors">
                <AnimatedCounter value="32,000+" duration={2} />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A4B4A0] mt-1.5 font-medium">
                Producers Mobilized
              </div>
            </div>

            <div className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight group-hover:text-[#879783] transition-colors">
                <AnimatedCounter value="85,000+" duration={2.2} />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A4B4A0] mt-1.5 font-medium">
                Acres Regenerative
              </div>
            </div>

            <div className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight group-hover:text-[#879783] transition-colors">
                <AnimatedCounter value="100%" duration={1.6} />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#A4B4A0] mt-1.5 font-medium">
                Batch Traceable
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator with Floating Pulse */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-[#F7F5EF]/70 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium mb-1 group-hover:translate-y-0.5 transition-transform text-[#A4B4A0]">
          Explore
        </span>
        <div className="relative">
          <ChevronDown className="w-4 h-4 animate-bounce text-[#879783]" />
        </div>
      </button>
    </section>
  );
};
