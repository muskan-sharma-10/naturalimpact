"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { InsightArticle } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  User,
  Share2,
  Check,
  Bookmark,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedLine,
  AosFlipCard,
  luxuryEase,
} from "@/components/ui/motion";

interface InsightDetailClientProps {
  article: InsightArticle;
  relatedArticles: InsightArticle[];
}

export const InsightDetailClient: React.FC<InsightDetailClientProps> = ({
  article,
  relatedArticles,
}) => {
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="pt-20 md:pt-24 pb-24 bg-[#F7F5EF] text-[#292D29] min-h-screen relative">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#879783] via-[#4D6249] to-[#879783] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(135,151,131,0.6)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

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
              Article link copied to clipboard!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#EDEAE0] border-b border-[#DCE4D8] py-3.5 sticky top-16 md:top-20 z-20 backdrop-blur-sm bg-[#EDEAE0]/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <nav
              className="flex items-center space-x-2 text-xs font-medium text-[#6B726A]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#233B30] transition-colors">
                Natural Impact Group
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#879783]" />
              <Link
                href="/insights"
                className="hover:text-[#233B30] transition-colors"
              >
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#879783]" />
              <span className="text-[#233B30] font-semibold truncate max-w-xs">
                {article.category}
              </span>
            </nav>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white text-xs font-medium text-[#233B30] border border-[#DCE4D8] transition-all hover:shadow-sm"
            >
              <Share2 className="w-3 h-3 text-[#4D6249]" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Header with FadeIn Animations */}
      <header className="py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="right" distance={15}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
            <Sparkles className="w-3 h-3 text-[#4D6249]" />
            <span>{article.category}</span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-[#233B30] tracking-tight leading-[1.14]">
            {article.title}
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </FadeIn>

        {/* Metadata Bar */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-8 pt-6 border-t border-[#DCE4D8] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#6B726A]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#233B30] text-white flex items-center justify-center font-bold shadow-sm">
                NI
              </div>
              <div>
                <div className="font-semibold text-[#233B30]">
                  {article.author.name}
                </div>
                <div className="text-xs text-[#879783]">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#879783]" />
                {article.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#879783]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* Hero Featured Image with Scale Entrance */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn direction="up" delay={0.35}>
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border border-[#DCE4D8] group">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        </FadeIn>
      </div>

      {/* Editorial Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[17px] md:text-[18px] text-[#333733] font-light leading-relaxed space-y-8">
        {article.content.map((sec, idx) => (
          <FadeIn key={idx} direction="up" delay={idx * 0.08}>
            <div className="space-y-4">
              {sec.subheading && (
                <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#233B30] tracking-tight mt-8 pt-6 border-t border-[#DCE4D8]/80 flex items-center gap-3">
                  <AnimatedLine width="20px" />
                  <span>{sec.subheading}</span>
                </h2>
              )}
              <p className="leading-relaxed">{sec.paragraph}</p>
            </div>
          </FadeIn>
        ))}

        {/* Tags */}
        <FadeIn direction="up">
          <div className="pt-10 border-t border-[#DCE4D8] flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-[#404640] border border-[#DCE4D8] hover:border-[#879783] hover:shadow-sm transition-all duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Back and Related Navigation */}
      <footer className="mt-20 pt-12 border-t border-[#DCE4D8] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#233B30] hover:text-[#4D6249] group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Publications</span>
          </Link>
        </div>

        <FadeIn direction="up">
          <h3 className="text-xl font-heading font-semibold text-[#233B30] mb-6">
            Related Group Research & Insights
          </h3>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {relatedArticles.map((rel) => (
            <StaggerItem key={rel.id}>
              <Link
                href={`/insights/${rel.slug}`}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE4D8] shadow-sm hover:shadow-xl hover:border-[#879783] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase text-[#879783] bg-[#F7F5EF] px-2.5 py-1 rounded-full border border-[#DCE4D8]">
                    {rel.category}
                  </span>
                  <h4 className="font-heading font-semibold text-base sm:text-lg text-[#233B30] group-hover:text-[#4D6249] transition-colors mt-3 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#6B726A] line-clamp-2 leading-relaxed font-light">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#DCE4D8]/60 inline-flex items-center gap-1.5 text-xs font-semibold text-[#233B30]">
                  <span>Read Publication</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </footer>
    </article>
  );
};
