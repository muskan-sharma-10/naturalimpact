"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { businessesData } from "@/data/businesses";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Building2,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryEase } from "@/components/ui/motion";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBusinessesOpen, setIsMobileBusinessesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomepage = pathname === "/";
  // On homepage, start transparent over dark hero; on other pages or when scrolled, show solid light styling
  const isTransparent = isHomepage && !isScrolled && !isMegaMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const navLinks = [
    { label: "About the Group", href: "/about" },
    { label: "Our Businesses", href: "/businesses", hasMegaMenu: true },
    { label: "Our Impact", href: "/impact" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/about#careers" },
  ];

  const featuredBusiness = businessesData.find((b) => b.featured) || businessesData[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isTransparent
            ? "bg-transparent text-white border-b border-white/10"
            : "bg-[#F7F5EF]/95 backdrop-blur-md text-[#233B30] border-b border-[#DCE4D8]/80 shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <BrandLogo lightMode={!isTransparent} size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium tracking-wide rounded-full transition-all duration-200 nav-link-animated ${isActive ? "active font-semibold" : ""
                          } ${isActive
                            ? isTransparent
                              ? "text-white bg-white/10"
                              : "text-[#233B30] bg-[#879783]/15"
                            : isTransparent
                              ? "text-white/85 hover:text-white hover:bg-white/10"
                              : "text-[#292D29]/80 hover:text-[#233B30] hover:bg-[#879783]/10"
                          }`}
                        aria-expanded={isMegaMenuOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 text-[15px] font-medium tracking-wide rounded-full transition-all duration-200 nav-link-animated ${isActive ? "active font-semibold" : ""
                      } ${isActive
                        ? isTransparent
                          ? "text-white bg-white/10"
                          : "text-[#233B30] bg-[#879783]/15"
                        : isTransparent
                          ? "text-white/85 hover:text-white hover:bg-white/10"
                          : "text-[#292D29]/80 hover:text-[#233B30] hover:bg-[#879783]/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Contact */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className={`group inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-semibold tracking-wide rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${isTransparent
                    ? "bg-[#F7F5EF] text-[#233B30] hover:bg-white"
                    : "bg-[#233B30] text-[#F7F5EF] hover:bg-[#1A2D24]"
                  }`}
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-[#233B30] hover:bg-[#879783]/15"
                  }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown with AnimatePresence */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: luxuryEase }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full bg-[#FCFAF6] border-b border-[#DCE4D8] shadow-2xl z-50"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Column: Group Ecosystem Introduction */}
                  <div className="col-span-3 border-r border-[#DCE4D8]/80 pr-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#879783]/15 text-[#233B30] text-[12px] font-semibold uppercase tracking-wider mb-3">
                        <Building2 className="w-3.5 h-3.5 text-[#4D6249]" />
                        <span>Group Portfolio</span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-[#233B30] tracking-tight">
                        Our Business Ecosystem
                      </h3>
                      <p className="mt-2 text-sm text-[#404640] leading-relaxed">
                        Explore five specialized, connected companies driving sustainable agriculture, collective rural empowerment, and transparent supply chain commerce.
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href="/businesses"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#233B30] hover:text-[#4D6249] group"
                      >
                        <span>View All Businesses</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Middle Columns: Business Cards List */}
                  <div className="col-span-6 grid grid-cols-2 gap-4">
                    {businessesData.map((business) => (
                      <Link
                        key={business.id}
                        href={`/businesses/${business.slug}`}
                        className="group p-3.5 rounded-xl border border-transparent hover:border-[#DCE4D8] hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden relative shrink-0 border border-[#DCE4D8]/60 shadow-xs">
                            <Image
                              src={business.thumbnailImage}
                              alt={business.shortName}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                              sizes="48px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#879783]">
                              {business.category}
                            </p>
                            <h4 className="text-[14px] font-semibold font-heading text-[#233B30] group-hover:text-[#4D6249] truncate mt-0.5">
                              {business.shortName}
                            </h4>
                            <p className="text-[12px] text-[#404640] line-clamp-2 mt-1 leading-snug">
                              {business.shortDescription}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column: Featured Business Highlight */}
                  <div className="col-span-3 bg-[#F0EFE9] rounded-2xl p-5 border border-[#DCE4D8] flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#233B30] text-[#F7F5EF] text-[11px] font-medium tracking-wide mb-3">
                        <Sparkles className="w-3 h-3 text-[#A4B4A0]" />
                        <span>Featured Pillar</span>
                      </div>
                      <h4 className="text-base font-semibold font-heading text-[#233B30]">
                        {featuredBusiness.name}
                      </h4>
                      <p className="text-xs text-[#404640] mt-2 line-clamp-3 leading-relaxed">
                        {featuredBusiness.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#DCE4D8]">
                      <Link
                        href={`/businesses/${featuredBusiness.slug}`}
                        className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#233B30] hover:text-[#4D6249] group"
                      >
                        <span>Explore Division</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: luxuryEase }}
              className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#F7F5EF] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between z-50 border-l border-[#DCE4D8]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#DCE4D8]">
                  <BrandLogo lightMode={true} size="sm" />
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#233B30] rounded-full hover:bg-[#879783]/15 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1.5">
                  <Link
                    href="/about"
                    className="block px-3.5 py-2.5 text-base font-medium text-[#233B30] hover:bg-[#879783]/15 rounded-xl transition-colors"
                  >
                    About the Group
                  </Link>

                  {/* Mobile Businesses Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsMobileBusinessesOpen(!isMobileBusinessesOpen)}
                      className="flex items-center justify-between w-full px-3.5 py-2.5 text-base font-medium text-[#233B30] hover:bg-[#879783]/15 rounded-xl transition-colors"
                    >
                      <span>Our Businesses</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileBusinessesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileBusinessesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-4 pr-2 py-2 space-y-1.5 bg-white/70 rounded-xl mt-1 border border-[#DCE4D8]/60 overflow-hidden"
                        >
                          {businessesData.map((b) => (
                            <Link
                              key={b.id}
                              href={`/businesses/${b.slug}`}
                              className="block p-2 text-sm font-medium text-[#404640] hover:text-[#233B30] hover:bg-white rounded-lg transition-colors"
                            >
                              <div className="font-semibold text-[#233B30]">{b.shortName}</div>
                              <div className="text-xs text-[#879783]">{b.category}</div>
                            </Link>
                          ))}
                          <Link
                            href="/businesses"
                            className="block pt-2 text-xs font-bold uppercase tracking-wider text-[#233B30] hover:underline"
                          >
                            View Full Business Directory →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/impact"
                    className="block px-3.5 py-2.5 text-base font-medium text-[#233B30] hover:bg-[#879783]/15 rounded-xl transition-colors"
                  >
                    Our Impact
                  </Link>

                  <Link
                    href="/insights"
                    className="block px-3.5 py-2.5 text-base font-medium text-[#233B30] hover:bg-[#879783]/15 rounded-xl transition-colors"
                  >
                    Insights & Stories
                  </Link>

                  <Link
                    href="/about#careers"
                    className="block px-3.5 py-2.5 text-base font-medium text-[#233B30] hover:bg-[#879783]/15 rounded-xl transition-colors"
                  >
                    Careers & Partnerships
                  </Link>
                </nav>
              </div>

              <div className="pt-8 border-t border-[#DCE4D8] mt-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-5 py-3.5 text-sm font-semibold text-white bg-[#233B30] hover:bg-[#1A2D24] rounded-full shadow-md transition-colors"
                >
                  <span>Connect With Group</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <p className="text-xs text-center text-[#404640] mt-3">
                  NOIDA ONE, Sector-62, Noida, India
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;