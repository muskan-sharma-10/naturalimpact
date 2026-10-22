"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { insightArticles } from "@/data/insights";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { FadeIn, AnimatedLine, AosFlipCard, PulsePlayButton } from "@/components/ui/motion";

export const InsightsSection: React.FC = () => {
  const featuredArticle = insightArticles[0];
  const supportingArticles = insightArticles.slice(1, 3);

  return (
    <section className="py-24 md:py-36 bg-[#FCFAF6] text-[#292D29] border-t border-[#DCE4D8] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-[#879783]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <FadeIn direction="right" distance={20} className="flex items-center gap-3 mb-4">
              <AnimatedLine width="36px" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#879783]">
                Corporate Publications & Media
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="section-title font-heading font-medium text-[#233B30] tracking-tight">
                News, Stories and Industry Insights
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-[17px] md:text-[18px] text-[#404640] leading-relaxed font-light">
                Authoritative perspectives on agri-commerce structures, origin-to-market mechanics, EUDR digital compliance, and rural trade finance.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="shrink-0">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#233B30] text-[#F7F5EF] hover:bg-[#1A2D24] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Editorial Publication Layout: 1 Large Left, 2 Stacked Right with Aditya Birla Flip-Left 3D */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 perspective-container">
          {/* Featured Large Article (7 cols) */}
          <div className="lg:col-span-7">
            <AosFlipCard delay={0.1} duration={0.7} className="h-full">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-sm hover:shadow-2xl hover:border-[#879783]/60 transition-all duration-500 h-full flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={featuredArticle.heroImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D24]/75 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1A2D24]/85 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/15">
                    Featured Publication
                  </div>

                  {/* Aditya Birla Play Button Overlay */}
                  <div className="absolute bottom-4 right-4 pointer-events-none">
                    <PulsePlayButton size="md" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#879783] mb-3 font-medium flex-wrap">
                      <span className="uppercase tracking-wider font-semibold text-[#233B30] bg-[#879783]/15 px-2.5 py-0.5 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#6B726A]">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredArticle.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#6B726A]">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#233B30] group-hover:text-[#4D6249] transition-colors tracking-tight leading-snug">
                      {featuredArticle.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#404640] font-light leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCE4D8]/60 flex items-center justify-between text-sm font-semibold text-[#233B30]">
                    <span className="inline-flex items-center gap-1 group-hover:text-[#4D6249] transition-colors">
                      <span>Read Complete Story</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                    <span className="text-xs text-[#879783] font-normal">
                      By {featuredArticle.author.name}
                    </span>
                  </div>
                </div>
              </Link>
            </AosFlipCard>
          </div>

          {/* Supporting Articles Stacked (5 cols) with Flip-Left */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {supportingArticles.map((article, idx) => (
              <AosFlipCard key={article.id} delay={0.2 + idx * 0.15} duration={0.65} className="flex-1">
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783]/60 transition-all duration-300 h-full flex flex-col sm:flex-row p-6 gap-6 items-center hover:-translate-y-1"
                >
                  <div className="relative w-full sm:w-40 h-44 sm:h-full rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      sizes="160px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#879783] mb-2 font-medium">
                        <span className="font-semibold text-[#233B30] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h4 className="font-heading font-semibold text-base sm:text-lg text-[#233B30] group-hover:text-[#4D6249] transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="mt-2 text-xs text-[#404640] line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DCE4D8]/60 inline-flex items-center gap-1 text-xs font-semibold text-[#233B30] group-hover:text-[#4D6249] transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AosFlipCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
