import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Use | Natural Impact Group",
  description: "Terms and conditions governing the use of Natural Impact Group corporate website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#879783] hover:text-[#233B30] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#879783]/20 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-4">
          <FileText className="w-3.5 h-3.5 text-[#4D6249]" />
          <span>Legal & Terms</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-medium text-[#233B30] tracking-tight mb-8">
          Terms of Use
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE4D8] space-y-6 text-sm text-[#404640] leading-relaxed font-light">
          <p>
            <strong>Effective Date: October 2024</strong>
          </p>
          <p>
            By accessing or browsing this website (naturalimpact.global), you agree to comply with and be bound by these Terms of Use.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            1. Intellectual Property
          </h2>
          <p>
            All content, brand names, subsidiary designations, text, photography, architectural graphics, and digital system descriptions featured on this website are the proprietary property of Natural Impact Group and protected under applicable copyright and trademark statutes.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            2. Permitted Use
          </h2>
          <p>
            You may browse this website and review informational materials for legitimate corporate evaluation, partnership scoping, research, or direct contact. Unauthorized scraping, reproduction, or framing without prior written consent is strictly prohibited.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            3. Disclaimer
          </h2>
          <p>
            The content provided on this portal is for general informational and corporate overview purposes. Formal commodity contracts, debt facilities, and service level agreements are executed under separate binding commercial agreements.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            4. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India, with courts located in Gautam Buddha Nagar / Delhi NCR possessing exclusive jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
