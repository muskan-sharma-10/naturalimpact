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
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      {/* Directory Page Hero */}
      <section className="py-16 md:py-24 border-b border-[#DCE4D8] relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#879783]/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
              <Layers className="w-3.5 h-3.5 text-[#4D6249]" />
              <span>Group Portfolio Directory</span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="hero-title font-heading font-medium text-[#233B30] tracking-tight">
                Our Businesses & Operating Divisions
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
                Explore the five specialized companies operating under the Natural Impact Group umbrella. Each enterprise delivers targeted expertise while contributing to a unified nature-based agri-commerce ecosystem.
              </p>
            </FadeIn>
          </div>

          {/* Search & Category Filter Controls */}
          <FadeIn direction="up" delay={0.3} className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-[#879783] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search businesses, capabilities, or crops..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-[#DCE4D8] text-sm text-[#233B30] placeholder-[#879783] focus:outline-none focus:ring-2 focus:ring-[#879783] transition-all shadow-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#879783] shrink-0 hidden sm:block ml-2 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#233B30] text-white shadow-sm"
                      : "bg-white text-[#404640] border border-[#DCE4D8] hover:bg-[#EDEAE0]"
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
              {filteredBusinesses.map((business, idx) => (
                <motion.div
                  layout
                  key={business.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.45, ease: luxuryEase }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-sm hover:shadow-2xl hover:border-[#879783]/60 transition-all duration-500 flex flex-col group hover:-translate-y-2 h-full"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={business.heroImage}
                      alt={business.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1A2D24]/85 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                      {business.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-heading font-semibold text-xl sm:text-2xl text-[#233B30] group-hover:text-[#4D6249] transition-colors tracking-tight">
                        {business.name}
                      </h2>
                      <p className="mt-2 text-xs font-medium text-[#879783] italic">
                        "{business.tagline}"
                      </p>
                      <p className="mt-3 text-sm text-[#404640] font-light leading-relaxed line-clamp-3">
                        {business.shortDescription}
                      </p>

                      {/* Key Capabilities Preview */}
                      <div className="mt-4 pt-4 border-t border-[#DCE4D8]/60 space-y-1.5">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-[#879783]">
                          Core Offerings:
                        </div>
                        {business.keyOfferings.slice(0, 2).map((offering, i) => (
                          <div key={i} className="text-xs text-[#233B30] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#879783]"></span>
                            <span className="truncate">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="mt-6 pt-4 border-t border-[#DCE4D8]/60 flex items-center justify-between">
                      <Link
                        href={`/businesses/${business.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#233B30] group-hover:text-[#4D6249] transition-colors"
                      >
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                      <div className="w-9 h-9 rounded-full bg-[#F7F5EF] flex items-center justify-center text-[#233B30] group-hover:bg-[#879783] group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="py-24 text-center bg-white rounded-2xl border border-[#DCE4D8] p-8 max-w-lg mx-auto shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#F7F5EF] text-[#879783] flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#233B30]">
                No businesses found
              </h3>
              <p className="mt-2 text-sm text-[#6B726A]">
                We couldn't find any divisions matching "{searchQuery}". Try adjusting your search term or select another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#233B30] text-white text-xs font-semibold hover:bg-[#1A2D24] transition-colors shadow-sm"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
