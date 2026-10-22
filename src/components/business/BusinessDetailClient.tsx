"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Business } from "@/types";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Mail,
  Layers,
  Share2,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  Briefcase,
  Compass,
  Award,
  Globe2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  AnimatedLine,
  AosFlipCard,
  luxuryEase,
} from "@/components/ui/motion";

interface BusinessDetailClientProps {
  business: Business;
  relatedBusinesses: Business[];
}

export const BusinessDetailClient: React.FC<BusinessDetailClientProps> = ({
  business,
  relatedBusinesses,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Copy URL to clipboard
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight" && selectedImageIndex !== null && business.gallery) {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % business.gallery.length : null
        );
      }
      if (e.key === "ArrowLeft" && selectedImageIndex !== null && business.gallery) {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + business.gallery.length) % business.gallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, business.gallery]);

  // Section observer for sticky in-page nav
  useEffect(() => {
    const sections = ["overview", "capabilities", "offerings", "footprint", "gallery", "enquiry"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  // Icons for capabilities
  const capIcons = [Building2, Sparkles, ShieldCheck, TrendingUp, Compass, Award];

  return (
    <div className="pt-20 md:pt-24 pb-24 bg-[#F7F5EF] text-[#292D29] min-h-screen">
      {/* Toast Notification for Copied Link */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: luxuryEase }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#1A2D24] text-white shadow-2xl border border-[#879783]/40 backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-[#879783]" />
            <span className="text-xs sm:text-sm font-medium">
              Division link copied to clipboard!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {selectedImageIndex !== null && business.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            {business.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + business.gallery.length) % business.gallery.length
                      : null
                  );
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {business.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) =>
                    prev !== null ? (prev + 1) % business.gallery.length : null
                  );
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Active Image Container */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: luxuryEase }}
              className="relative max-w-5xl w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={business.gallery[selectedImageIndex]}
                alt={`${business.name} operation view`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#879783] font-semibold">
                    {business.shortName} Operations
                  </span>
                  <p className="text-sm text-white/90 mt-1 font-light">
                    Operational Field Infrastructure
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-mono">
                  {selectedImageIndex + 1} / {business.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#EDEAE0] border-b border-[#DCE4D8] py-3.5 sticky top-16 md:top-20 z-30 backdrop-blur-sm bg-[#EDEAE0]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <nav
              className="flex items-center space-x-2 text-xs font-medium text-[#6B726A]"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="hover:text-[#233B30] transition-colors flex items-center gap-1.5"
              >
                <span>Natural Impact Group</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#879783]" />
              <Link
                href="/businesses"
                className="hover:text-[#233B30] transition-colors"
              >
                Our Businesses
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#879783]" />
              <span className="text-[#233B30] font-semibold truncate max-w-[200px] sm:max-w-none">
                {business.shortName}
              </span>
            </nav>

            {/* Back link & share button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white text-xs font-medium text-[#233B30] border border-[#DCE4D8] transition-all duration-200 hover:shadow-sm"
                title="Share this business profile"
              >
                <Share2 className="w-3 h-3 text-[#4D6249]" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <Link
                href="/businesses"
                className="text-xs text-[#4D6249] hover:text-[#233B30] font-semibold flex items-center gap-1 transition-colors"
              >
                <span className="hidden sm:inline">All Businesses</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hero Banner with Ambient Parallax & Stagger Entrance */}
      <section className="relative min-h-[58vh] md:min-h-[68vh] flex items-center justify-center bg-[#14231C] text-white overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={business.heroImage}
            alt={business.name}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Deep Forest Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14231C] via-[#1A2D24]/85 to-[#14231C]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(135,151,131,0.25),transparent_60%)]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            {/* Category Tag with Animated Pulse Indicator */}
            <FadeIn direction="right" distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-[#DCE4D8] uppercase tracking-wider mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#879783] animate-pulse" />
                <Layers className="w-3.5 h-3.5 text-[#A4B4A0]" />
                <span>{business.category}</span>
              </div>
            </FadeIn>

            {/* Main Title with Stagger Entrance */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="hero-title font-heading font-medium text-white tracking-tight leading-[1.08] drop-shadow-sm">
                {business.name}
              </h1>
            </FadeIn>

            {/* Tagline Quote */}
            <FadeIn direction="up" delay={0.2}>
              <div className="mt-5 flex items-start gap-3 pl-4 border-l-2 border-[#879783]">
                <p className="text-lg sm:text-2xl font-light text-[#DCE4D8] italic leading-relaxed">
                  "{business.tagline}"
                </p>
              </div>
            </FadeIn>

            {/* Short Narrative */}
            <FadeIn direction="up" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
                {business.shortDescription}
              </p>
            </FadeIn>

            {/* Interactive CTAs */}
            <FadeIn direction="up" delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#enquiry"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#879783] hover:bg-[#97A793] text-[#14231C] font-semibold text-sm transition-all duration-300 shadow-xl hover:shadow-[#879783]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Initiate Division Enquiry</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-[#DCE4D8]" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Decorative Bottom Wave/Curve Accent */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#F7F5EF] to-transparent pointer-events-none" />
      </section>

      {/* Verified Metrics Strip with AnimatedCounter */}
      {business.metrics && business.metrics.length > 0 && (
        <section className="bg-[#233B30] text-[#F7F5EF] py-12 border-b border-[#3B4D38] relative overflow-hidden shadow-lg">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#879783]/10 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StaggerContainer
              staggerDelay={0.15}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left"
            >
              {business.metrics.map((metric, idx) => (
                <StaggerItem
                  key={idx}
                  className="sm:border-r sm:border-[#4D6249]/50 sm:last:border-none sm:pr-8 group"
                >
                  <div className="flex flex-col sm:items-start items-center">
                    <div className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight flex items-center gap-1 group-hover:text-[#DCE4D8] transition-colors">
                      <AnimatedCounter value={metric.value} duration={1.6} />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#879783]" />
                      <span className="text-xs sm:text-sm uppercase tracking-wider text-[#A4B4A0] font-medium">
                        {metric.label}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Sticky In-Page Navigation Bar */}
      <div className="sticky top-[53px] md:top-[69px] z-20 bg-[#EDEAE0]/95 backdrop-blur-md border-b border-[#DCE4D8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 py-2.5 overflow-x-auto no-scrollbar">
            {[
              { id: "overview", label: "Overview" },
              { id: "capabilities", label: "Capabilities" },
              { id: "offerings", label: "Market Offerings" },
              { id: "footprint", label: "Footprint & Sectors" },
              ...(business.gallery && business.gallery.length > 0
                ? [{ id: "gallery", label: "Field Showcase" }]
                : []),
              { id: "enquiry", label: "Enquiry" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${activeTab === tab.id
                    ? "bg-[#233B30] text-white shadow-sm"
                    : "text-[#6B726A] hover:text-[#233B30] hover:bg-white/60"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Overview & Capabilities Grid */}
      <section id="overview" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Executive Overview */}
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-3">
                <AnimatedLine width="32px" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                  Operational Scope
                </span>
              </div>
              <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                Executive Overview & Operating Mandate
              </h2>
              <div className="mt-6 text-[17px] text-[#404640] leading-relaxed font-light space-y-4">
                <p>{business.fullDescription}</p>
              </div>

              {/* Strategic Purpose Callout Card */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#EDEAE0] to-[#E3DFD3] border border-[#DCE4D8] flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#233B30] text-[#879783] shrink-0 mt-0.5">
                  <Compass className="w-5 h-5 text-[#879783]" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#233B30]">
                    Integrated Group Mandate
                  </h4>
                  <p className="text-xs text-[#525B51] mt-1 leading-relaxed">
                    Operates in synchronization with Natural Impact's upstream Farmer Collectives and downstream institutional logistics to eliminate supply chain leakage.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Core Capabilities */}
            <div id="capabilities" className="pt-10 border-t border-[#DCE4D8]">
              <FadeIn direction="up">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                      Core Competencies
                    </span>
                    <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#233B30] mt-1">
                      Technical & Operational Capabilities
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#EDEAE0] text-xs font-mono font-semibold text-[#4D6249]">
                    {business.capabilities.length} Verified Modules
                  </span>
                </div>
              </FadeIn>

              {/* Interactive Staggered Capability Cards */}
              <StaggerContainer staggerDelay={0.12} className="space-y-5">
                {business.capabilities.map((cap, idx) => {
                  const IconComponent = capIcons[idx % capIcons.length];
                  return (
                    <StaggerItem key={idx}>
                      <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783] hover:-translate-y-1 transition-all duration-300">
                        {/* Hover Left Accent Indicator */}
                        <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-md bg-[#879783] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-[#F7F5EF] text-[#233B30] group-hover:bg-[#233B30] group-hover:text-white transition-colors duration-300 shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-heading font-semibold text-lg text-[#233B30] group-hover:text-[#1A2D24] transition-colors">
                                {cap.title}
                              </h4>
                              <span className="font-mono text-xs font-bold text-[#879783] bg-[#F7F5EF] px-2.5 py-0.5 rounded-full border border-[#DCE4D8]">
                                0{idx + 1}
                              </span>
                            </div>
                            <p className="text-sm text-[#404640] font-light leading-relaxed mt-2">
                              {cap.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>

          {/* Sidebar: Key Offerings, Differentiators & Footprint (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Offerings Box */}
            <div
              id="offerings"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE4D8] shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#879783]/10 rounded-bl-full pointer-events-none" />

              <FadeIn direction="up">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                  Commercial Portfolio
                </span>
                <h3 className="text-xl font-heading font-semibold text-[#233B30] mt-1 mb-5">
                  Key Market Offerings
                </h3>

                <ul className="space-y-3.5">
                  {business.keyOfferings.map((offering, idx) => (
                    <li
                      key={idx}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F5EF] transition-colors duration-200 text-sm text-[#404640]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E5EBE3] group-hover:bg-[#4D6249] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200">
                        <Check className="w-3 h-3 text-[#233B30] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <span className="leading-snug font-medium text-[#333733]">
                        {offering}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Differentiators Box */}
            <div className="bg-[#EDEAE0] rounded-3xl p-6 sm:p-8 border border-[#DCE4D8] shadow-sm">
              <FadeIn direction="up">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#879783]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                    Competitive Edge
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#233B30] mb-5">
                  Core Differentiators
                </h3>

                <div className="space-y-4">
                  {business.differentiators.map((diff, idx) => (
                    <div
                      key={idx}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#DCE4D8] hover:border-[#879783] hover:shadow-md transition-all duration-300"
                    >
                      <h5 className="font-heading font-semibold text-sm text-[#233B30] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#4D6249]" />
                        {diff.title}
                      </h5>
                      <p className="text-xs text-[#525B51] mt-1.5 leading-relaxed pl-4">
                        {diff.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Regional Footprint & Target Sectors */}
            <div id="footprint" className="space-y-6">
              {business.operationalFootprint && (
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE4D8] shadow-sm">
                  <FadeIn direction="up">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#879783] mb-3">
                      <MapPin className="w-4 h-4 text-[#879783]" />
                      <span>Operational Footprint</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {business.operationalFootprint.map((loc, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full bg-[#F7F5EF] text-xs font-medium text-[#233B30] border border-[#DCE4D8] hover:border-[#879783] hover:bg-white hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* Target Sectors */}
              {business.targetSectors && (
                <div className="bg-[#233B30] text-white rounded-3xl p-6 sm:p-7 border border-[#3B4D38] shadow-md">
                  <FadeIn direction="up">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A4B4A0] mb-3">
                      <Briefcase className="w-4 h-4 text-[#879783]" />
                      <span>Institutional Client Sectors</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {business.targetSectors.map((sec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs font-light text-[#DCE4D8] border border-white/15"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Showcase / Gallery with 3D Flip & Interactive Lightbox */}
      {business.gallery && business.gallery.length > 0 && (
        <section
          id="gallery"
          className="py-20 bg-[#EDEAE0] border-y border-[#DCE4D8] relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <AnimatedLine width="28px" />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                      Field Operations & Infrastructure
                    </span>
                  </div>
                  <h3 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                    Operational Showcase
                  </h3>
                </div>
                <p className="text-xs text-[#6B726A] sm:text-right max-w-xs font-light">
                  Click any image to inspect high-resolution ground infrastructure
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {business.gallery.map((imgUrl, idx) => (
                <AosFlipCard key={idx} delay={idx * 0.15}>
                  <div
                    onClick={() => setSelectedImageIndex(idx)}
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#DCE4D8] shadow-md group cursor-pointer bg-[#233B30]"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${business.name} operation ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Expand Badge on Hover */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs">
                      <span className="font-medium tracking-wide">
                        Facility View 0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] uppercase font-mono">
                        Inspect
                      </span>
                    </div>
                  </div>
                </AosFlipCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Institutional Procurement & Enquiry CTA Section */}
      <section id="enquiry" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="relative rounded-3xl p-8 sm:p-14 text-white overflow-hidden bg-gradient-to-br from-[#1A2D24] via-[#233B30] to-[#14231C] border border-[#3B4D38] shadow-2xl">
            {/* Ambient Lighting Orbs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#879783]/20 blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#4D6249]/30 blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#A4B4A0] uppercase tracking-wider mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#879783]" />
                  <span>Institutional Procurement & Partnerships</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-heading font-medium text-white tracking-tight leading-tight">
                  Partner Directly with {business.shortName}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#DCE4D8]/90 font-light leading-relaxed">
                  Engage our corporate procurement desk at Sector-62 Noida for commodity aggregation, contract farming covenants, FPO equity alliances, or structured liquidity lines.
                </p>

                {/* Quick Trust Highlights */}
                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#A4B4A0]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#879783]" />
                    HACCP & ISO Verified
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#879783]" />
                    Direct Farmgate Origin
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#879783]" />
                    Institutional SLA Support
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  href={`/contact?business=${business.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#879783] hover:bg-[#97A793] text-[#14231C] font-semibold text-sm transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 text-center"
                >
                  <span>Submit Division Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all duration-300 text-center"
                >
                  <Share2 className="w-4 h-4 text-[#DCE4D8]" />
                  <span>Share Profile</span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Connected Group Ecosystem: Explore Other Operating Divisions */}
      <section className="py-20 border-t border-[#DCE4D8] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Connected Group Ecosystem
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#233B30] mt-1">
                Explore Other Group Divisions
              </h3>
            </div>
            <Link
              href="/businesses"
              className="text-xs sm:text-sm font-semibold text-[#4D6249] hover:text-[#233B30] flex items-center gap-1 group transition-colors"
            >
              <span>View All 5 Divisions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {relatedBusinesses.map((b) => (
            <StaggerItem key={b.id}>
              <Link
                href={`/businesses/${b.slug}`}
                className="group flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#879783] bg-[#F7F5EF] px-3 py-1 rounded-full border border-[#DCE4D8]">
                      {b.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#879783] group-hover:text-[#233B30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h4 className="font-heading font-semibold text-lg sm:text-xl text-[#233B30] group-hover:text-[#4D6249] transition-colors mt-2 mb-2">
                    {b.shortName}
                  </h4>

                  <p className="text-xs text-[#6B726A] line-clamp-3 leading-relaxed font-light">
                    {b.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE4D8]/70 flex items-center justify-between text-xs font-semibold text-[#233B30]">
                  <span>Explore Division</span>
                  <div className="w-7 h-7 rounded-full bg-[#F7F5EF] group-hover:bg-[#233B30] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
};
