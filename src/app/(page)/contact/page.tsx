"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { businessesData } from "@/data/businesses";
import { groupConfig } from "@/data/group";
import {
  MapPin,
  Mail,
  CheckCircle2,
  AlertCircle,
  Building2,
  Clock,
  ArrowRight,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultBusinessSlug = searchParams.get("business") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessDivision: defaultBusinessSlug
      ? businessesData.find((b) => b.slug === defaultBusinessSlug)?.name || "General Group Inquiry"
      : "General Group Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid corporate email.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending inquiry to Natural Impact corporate desk
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#879783]/20 text-[#233B30] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-[#4D6249]" />
        </div>
        <h3 className="text-2xl font-heading font-semibold text-[#233B30]">
          Inquiry Received Successfully
        </h3>
        <p className="text-sm text-[#404640] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Natural Impact Group. A representative from our corporate office or the relevant division will review your brief and contact you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              businessDivision: "General Group Inquiry",
              message: "",
            });
          }}
          className="mt-6 px-6 py-2.5 rounded-full bg-[#233B30] text-white text-xs font-semibold hover:bg-[#1A2D24] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <h2 className="text-2xl font-heading font-semibold text-[#233B30]">
          Corporate Inquiry Form
        </h2>
        <p className="text-xs text-[#879783] mt-1">
          All fields marked with an asterisk (*) are required.
        </p>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-semibold uppercase tracking-wider text-[#233B30] mb-2"
        >
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          placeholder="Enter your name"
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#233B30] bg-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#879783] ${
            errors.fullName
              ? "border-red-500 bg-red-50/20"
              : "border-[#DCE4D8]"
          }`}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#233B30] mb-2"
          >
            Corporate Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="name@company.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#233B30] bg-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#879783] ${
              errors.email
                ? "border-red-500 bg-red-50/20"
                : "border-[#DCE4D8]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#233B30] mb-2"
          >
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+91 / Country Code"
            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D8] text-sm text-[#233B30] bg-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#879783]"
          />
        </div>
      </div>

      {/* Business Division Selector */}
      <div>
        <label
          htmlFor="businessDivision"
          className="block text-xs font-semibold uppercase tracking-wider text-[#233B30] mb-2"
        >
          Area of Interest or Subsidiary Division
        </label>
        <select
          id="businessDivision"
          value={formData.businessDivision}
          onChange={(e) =>
            setFormData({ ...formData, businessDivision: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-[#DCE4D8] text-sm text-[#233B30] bg-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#879783]"
        >
          <option value="General Group Inquiry">
            General Natural Impact Group Inquiry
          </option>
          {businessesData.map((b) => (
            <option key={b.id} value={b.name}>
              {b.name} ({b.category})
            </option>
          ))}
          <option value="Institutional Off-Take">
            Direct Institutional Commodity Off-Take
          </option>
          <option value="Careers and Recruitment">
            Careers & Talent Opportunities
          </option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#233B30] mb-2"
        >
          Inquiry Details / Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Please specify your organization, scope of interest, commodity requirements, or questions..."
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#233B30] bg-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#879783] ${
            errors.message
              ? "border-red-500 bg-red-50/20"
              : "border-[#DCE4D8]"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#233B30] hover:bg-[#1A2D24] text-[#F7F5EF] font-semibold text-sm transition-all duration-300 shadow-md disabled:opacity-50"
      >
        <span>{isSubmitting ? "Transmitting..." : "Send Corporate Inquiry"}</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F7F5EF] text-[#292D29]">
      {/* Page Hero */}
      <section className="py-16 md:py-20 border-b border-[#DCE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#879783]/20 border border-[#879783]/40 text-xs font-semibold text-[#233B30] uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5 text-[#4D6249]" />
              <span>Corporate Desk & Inquiries</span>
            </div>
            <h1 className="hero-title font-heading font-medium text-[#233B30] tracking-tight">
              Connect With Natural Impact Group
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#404640] font-light leading-relaxed">
              Reach our corporate headquarters at Noida One to explore enterprise commodity procurement, FPO partnerships, technology integration, or investment collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form Left, Offices Right */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Inquiry Form with Suspense Boundary */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE4D8] shadow-sm">
            <Suspense
              fallback={
                <div className="p-8 text-center text-sm text-[#879783]">
                  Loading corporate inquiry desk...
                </div>
              }
            >
              <ContactFormContent />
            </Suspense>
          </div>

          {/* Headquarters Info & Verified Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#233B30] text-[#F7F5EF] rounded-3xl p-8 sm:p-10 border border-[#3B4D38] shadow-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A4B4A0]">
                Headquarters
              </span>
              <h3 className="text-2xl font-heading font-semibold text-white mt-1 mb-6">
                Corporate Office
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A2D24] border border-[#4D6249] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#879783]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Noida One Complex</div>
                    <div className="text-xs text-[#DCE4D8]/80 mt-1 leading-relaxed">
                      {groupConfig.headquarters.building},<br />
                      {groupConfig.headquarters.sector},<br />
                      {groupConfig.headquarters.city},<br />
                      {groupConfig.headquarters.country} - {groupConfig.headquarters.pin}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A2D24] border border-[#4D6249] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#879783]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Official Correspondence</div>
                    <a
                      href={`mailto:${groupConfig.headquarters.email}`}
                      className="text-xs text-[#DCE4D8] hover:underline mt-1 block"
                    >
                      {groupConfig.headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A2D24] border border-[#4D6249] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#879783]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Office Hours</div>
                    <div className="text-xs text-[#DCE4D8]/80 mt-1">
                      Monday to Friday: 09:30 AM – 06:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification / Security Note */}
            <div className="bg-[#EDEAE0] rounded-2xl p-6 border border-[#DCE4D8] text-xs text-[#404640] leading-relaxed">
              <p className="font-semibold text-[#233B30] mb-1">
                Institutional Data Security Notice
              </p>
              <p>
                Inquiries submitted via this portal are handled with strict corporate confidentiality. Natural Impact Group does not share commercial correspondence with unauthorized third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
