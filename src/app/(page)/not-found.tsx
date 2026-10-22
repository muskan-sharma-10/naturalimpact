import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F5EF] text-[#292D29] px-4 py-24">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#879783]/20 text-[#233B30] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-[#4D6249]" />
        </div>
        <span className="text-xs uppercase tracking-widest text-[#879783] font-bold">
          Error 404
        </span>
        <h1 className="text-3xl font-heading font-medium text-[#233B30] mt-2 mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-[#404640] leading-relaxed mb-8 font-light">
          The requested page or corporate division could not be located. It may have moved or been renamed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#233B30] text-white text-xs font-semibold hover:bg-[#1A2D24] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
