"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessesData } from "@/data/businesses";
import { Search, ArrowRight, ArrowUpRight, Layers, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, luxuryEase } from "@/components/ui/motion";

export default function BusinessesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(businessesData.map((b) => b.category)));
    return ["All", ...cats];
  }, []);

  const filteredBusinesses = useMemo(() => {
    return businessesData.filter((b) => {
      const matchesCategory =
        selectedCategory === "All" || b.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.keyOfferings.some((o) =>
          o.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#20251F]">
      {/* Directory Page Hero */}
      <section className="py-16 md:py-24 border-b border-[#DCE4D8] relative overflow-hidden bg-[#123D2A] text-white">
        <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#1C5038]/40 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#B78B53] uppercase tracking-wider mb-6">
              <Layers className="w-3.5 h-3.5" />
              <span>Corporate Portfolio Directory</span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="hero-title font-heading font-medium text-white tracking-tight leading-[1.08]">
                Our Five Connected Operating Divisions
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-[#DCE4D8] font-light leading-relaxed">
                Explore the five specialized enterprises operating under the Natural Impact Group umbrella. Each division delivers focused commercial capability while reinforcing a unified nature-based corporate ecosystem.
              </p>
            </FadeIn>
          </div>

          {/* Search & Category Filter Controls */}
          <FadeIn direction="up" delay={0.3} className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-[#A8B7A0] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search divisions, capabilities, or offerings..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-sm text-[#123D2A] placeholder-[#5C6659] focus:outline-none focus:ring-2 focus:ring-[#B78B53] transition-all shadow-md"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#B78B53] shrink-0 hidden sm:block ml-2 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#B78B53] text-[#123D2A] shadow-md font-bold"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Directory Grid with Animated Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredBusinesses.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBusinesses.map((business, idx) => {
                const formattedIndex = `0${idx + 1}`;
                return (
                  <motion.div
                    layout
                    key={business.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.45, ease: luxuryEase }}
                    className="bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-xs hover:shadow-2xl hover:border-[#1C5038]/50 transition-all duration-400 flex flex-col group hover:-translate-y-2 h-full"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-64 overflow-hidden bg-[#123D2A]">
                      <Image
                        src={business.heroImage}
                        alt={business.name}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-[#123D2A]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#123D2A]/90 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15 flex items-center gap-1.5">
                        <span className="font-mono text-[#B78B53]">{formattedIndex}</span>
                        <span>•</span>
                        <span>{business.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="font-heading font-semibold text-xl sm:text-2xl text-[#123D2A] group-hover:text-[#1C5038] transition-colors tracking-tight leading-snug">
                          {business.name}
                        </h2>
                        <p className="mt-2 text-xs font-medium text-[#B78B53] italic">
                          "{business.tagline}"
                        </p>
                        <p className="mt-3 text-sm text-[#363D34] font-light leading-relaxed line-clamp-3">
                          {business.shortDescription}
                        </p>

                        {/* Key Capabilities Preview */}
                        <div className="mt-4 pt-4 border-t border-[#DCE4D8] space-y-1.5">
                          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#5C6659]">
                            Core Capabilities:
                          </div>
                          {business.capabilities.slice(0, 2).map((cap, i) => (
                            <div key={i} className="text-xs text-[#123D2A] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B78B53]"></span>
                              <span className="truncate font-medium">{cap.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-6 pt-4 border-t border-[#DCE4D8] flex items-center justify-between text-xs font-semibold text-[#123D2A]">
                        <Link
                          href={`/businesses/${business.slug}`}
                          className="inline-flex items-center gap-1.5 group-hover:text-[#1C5038] transition-colors"
                        >
                          <span>Explore Full Division</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        {business.metrics && business.metrics[0] && (
                          <span className="font-mono text-[11px] bg-[#F7F5EF] text-[#5C6659] px-2 py-1 rounded">
                            {business.metrics[0].value}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="py-24 text-center">
              <h3 className="text-xl font-heading font-semibold text-[#123D2A]">
                No divisions match your filter.
              </h3>
              <p className="mt-2 text-sm text-[#5C6659]">
                Try adjusting your search criteria or clearing selected category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#123D2A] text-white text-xs font-semibold hover:bg-[#1C5038] transition-colors shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
