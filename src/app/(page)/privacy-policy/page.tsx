import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Natural Impact Group",
  description: "Privacy and data protection policy for Natural Impact Group corporate website and digital systems.",
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck className="w-3.5 h-3.5 text-[#4D6249]" />
          <span>Legal & Compliance</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-medium text-[#233B30] tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE4D8] space-y-6 text-sm text-[#404640] leading-relaxed font-light">
          <p>
            <strong>Last Updated: October 2024</strong>
          </p>
          <p>
            Natural Impact Group (“we,” “our,” or “us”), operating from NOIDA ONE, Block B Industrial Area, Sector-62, Noida, Delhi NCR, India, respects your privacy and is dedicated to protecting all data gathered through our websites, handheld field applications, and enterprise platforms.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            1. Scope of Data Collection
          </h2>
          <p>
            We collect information provided directly through our corporate inquiry forms, including full name, business email address, organization name, phone numbers, and transactional briefs. For producer partners, geolocation coordinates and farm polygon measurements are collected solely for verifiable compliance (e.g., EUDR and organic traceability).
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            2. Purpose of Use
          </h2>
          <p>
            Data is utilized strictly to facilitate legitimate business inquiries, evaluate agricultural supply chain contracts, verify batch authenticity, and comply with regulatory statutory obligations.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            3. Information Sharing & Third Parties
          </h2>
          <p>
            Natural Impact Group never sells, rents, or commercially monetizes your information. We may share information with banking partners and certified auditing agencies solely for the purpose of executing confirmed supply chain finance transactions or traceability audits.
          </p>
          <h2 className="text-lg font-heading font-semibold text-[#233B30] pt-4">
            4. Contact
          </h2>
          <p>
            For privacy inquiries or data rights requests, write to: <strong>contact@naturalimpact.global</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
