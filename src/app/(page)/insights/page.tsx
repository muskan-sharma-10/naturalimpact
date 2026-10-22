import React from "react";
import Image from "next/image";
import Link from "next/link";
import { insightArticles } from "@/data/insights";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Insights & Corporate Publications | Natural Impact Group",
  description:
    "Explore strategic research and whitepapers on origin-to-market agri-commerce, EUDR digital compliance, rural trade finance, and regenerative agriculture.",
};

export default function InsightsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      {/* Page Hero */}
      <section className="py-16 md:py-24 border-b border-[#DCE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#4D6249]" />
              <span>Thought Leadership & Research</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-[#233B30] tracking-tight">
              Insights & Strategic Publications
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
              In-depth research papers, operational case studies, and editorial viewpoints from the leadership and practice heads of Natural Impact Group.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightArticles.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#DCE4D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A2D24]/85 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#879783] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading font-semibold text-xl text-[#233B30] group-hover:text-[#4D6249] transition-colors leading-snug tracking-tight">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#404640] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE4D8]/60 flex items-center justify-between text-xs font-semibold text-[#233B30]">
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Publication</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-[#879783] font-normal">
                    {article.author.role}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
