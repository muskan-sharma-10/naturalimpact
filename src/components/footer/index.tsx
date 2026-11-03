"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { businessesData } from "@/data/businesses";
import { groupConfig } from "@/data/group";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  ChevronUp,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#123D2A] text-[#F7F5EF] pt-20 pb-12 border-t border-[#1C5038] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#1C5038]/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C5038]">
          {/* Column 1: Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <BrandLogo lightMode={false} size="lg" />
              <p className="mt-6 text-sm text-[#DCE4D8] leading-relaxed max-w-sm font-light">
                Natural Impact Group is an integrated corporate ecosystem operating across nature-based agri-commerce value chains, producer collective incubation, digital traceability, and structured trade finance.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C5038]/70 border border-white/10 text-xs text-[#A8B7A0]">
                <span className="w-2 h-2 rounded-full bg-[#B78B53] animate-pulse" />
                <span>Headquartered at NOIDA ONE, Delhi NCR</span>
              </div>
            </div>

            {/* Verified Social Channels */}
            <div className="mt-8 flex items-center space-x-3">
              <a
                href={groupConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1C5038] border border-white/15 flex items-center justify-center text-[#DCE4D8] hover:text-[#123D2A] hover:bg-[#B78B53] hover:border-[#B78B53] transition-all duration-300 shadow-sm"
                aria-label="Natural Impact LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={groupConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1C5038] border border-white/15 flex items-center justify-center text-[#DCE4D8] hover:text-[#123D2A] hover:bg-[#B78B53] hover:border-[#B78B53] transition-all duration-300 shadow-sm"
                aria-label="Natural Impact Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={groupConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1C5038] border border-white/15 flex items-center justify-center text-[#DCE4D8] hover:text-[#123D2A] hover:bg-[#B78B53] hover:border-[#B78B53] transition-all duration-300 shadow-sm"
                aria-label="Natural Impact YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Business Directory (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B78B53] mb-5">
              Five Operating Divisions
            </h4>
            <ul className="space-y-3">
              {businessesData.map((b, idx) => (
                <li key={b.id}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="group inline-flex items-center justify-between w-full text-sm text-[#DCE4D8] hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      <span className="font-mono text-xs text-[#B78B53]">0{idx + 1}.</span>
                      <span>{b.shortName}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B78B53] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/businesses"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8B7A0] hover:text-[#B78B53] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Complete Directory</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B78B53] mb-5">
              Group Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#DCE4D8]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">
                  Businesses
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Stories
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="hover:text-white transition-colors">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B78B53] mb-5">
                Headquarters
              </h4>
              <div className="space-y-3 text-xs text-[#DCE4D8] leading-relaxed font-light">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
                  <span>
                    {groupConfig.headquarters.building},<br />
                    {groupConfig.headquarters.sector},<br />
                    {groupConfig.headquarters.city},<br />
                    {groupConfig.headquarters.country} - {groupConfig.headquarters.pin}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Mail className="w-4 h-4 text-[#B78B53] shrink-0" />
                  <a
                    href={`mailto:${groupConfig.headquarters.email}`}
                    className="hover:text-white underline underline-offset-2 transition-colors"
                  >
                    {groupConfig.headquarters.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8B7A0] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#1C5038] border border-white/15 flex items-center justify-center text-white group-hover:bg-[#B78B53] group-hover:text-[#123D2A] transition-colors">
                  <ChevronUp className="w-4 h-4" />
                </div>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8B7A0] gap-4">
          <p>
            © {currentYear} Natural Impact Group. All rights reserved. Nature-based, market-led agri-commerce ecosystems.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <span className="text-[#B78B53] font-medium">Enterprise Corporate Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;