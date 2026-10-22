import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { businessesData } from "@/data/businesses";
import { groupConfig } from "@/data/group";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  Shield,
  FileText,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#233B30] text-[#F7F5EF] pt-20 pb-12 border-t border-[#1A2D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3B4D38]">
          {/* Column 1: Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <BrandLogo lightMode={false} size="lg" />
              <p className="mt-6 text-sm text-[#DCE4D8]/90 leading-relaxed max-w-sm">
                Natural Impact Group is an integrated corporate ecosystem building nature-based, market-led agri-commerce value chains, accelerating rural producer enterprises, and deploying transparent digital traceability and trade finance.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A2D24]/60 border border-[#4D6249]/40 text-xs text-[#A4B4A0]">
                <span className="w-2 h-2 rounded-full bg-[#879783] animate-pulse"></span>
                <span>Headquartered at NOIDA ONE, Delhi NCR</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center space-x-3">
              <a
                href={groupConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A2D24] border border-[#4D6249]/50 flex items-center justify-center text-[#DCE4D8] hover:text-white hover:bg-[#879783] transition-colors"
                aria-label="Natural Impact LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={groupConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A2D24] border border-[#4D6249]/50 flex items-center justify-center text-[#DCE4D8] hover:text-white hover:bg-[#879783] transition-colors"
                aria-label="Natural Impact Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={groupConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A2D24] border border-[#4D6249]/50 flex items-center justify-center text-[#DCE4D8] hover:text-white hover:bg-[#879783] transition-colors"
                aria-label="Natural Impact YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Business Directory (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A4B4A0] mb-5">
              Group Businesses
            </h4>
            <ul className="space-y-3.5">
              {businessesData.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="group inline-flex items-center justify-between w-full text-sm text-[#F7F5EF]/90 hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {b.shortName}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#879783] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/businesses"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A4B4A0] hover:text-white inline-flex items-center gap-1"
                >
                  <span>Explore Complete Directory</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A4B4A0] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#F7F5EF]/85">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Group
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">
                  Our Businesses
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Research
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

          {/* Column 4: Contact & Office (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A4B4A0] mb-5">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-[#DCE4D8]/90 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#879783] shrink-0 mt-0.5" />
                <span>
                  {groupConfig.headquarters.building},<br />
                  {groupConfig.headquarters.sector},<br />
                  {groupConfig.headquarters.city},<br />
                  {groupConfig.headquarters.country} - {groupConfig.headquarters.pin}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 text-[#879783] shrink-0" />
                <a
                  href={`mailto:${groupConfig.headquarters.email}`}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {groupConfig.headquarters.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A4B4A0] gap-4">
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
            <span className="text-[#879783]">Enterprise Corporate Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;