"use client";

import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F5EF] text-[#292D29] px-4 py-24">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-heading font-semibold text-[#233B30] mb-2">
          An Unexpected Error Occurred
        </h2>
        <p className="text-sm text-[#404640] mb-8 font-light">
          {error.message || "We encountered an issue loading this section. Please try again."}
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#233B30] text-white text-xs font-semibold hover:bg-[#1A2D24] transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Section</span>
        </button>
      </div>
    </div>
  );
}
