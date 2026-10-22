import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  lightMode?: boolean; // When true, uses dark green text for light backgrounds. When false, uses white/ivory text for dark backgrounds
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  lightMode = true,
  className = "",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight",
    lg: "text-2xl tracking-tight",
  };

  const subtextSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.22em]",
    lg: "text-[12px] tracking-[0.24em]",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#879783] rounded-md ${className}`}
      aria-label="Natural Impact Group Home"
    >
      {/* Editorial Botanical Geometric Emblem */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]} rounded-lg transition-transform duration-300 group-hover:scale-105 ${
          lightMode
            ? "bg-[#233B30] text-[#F7F5EF] shadow-sm"
            : "bg-[#879783] text-[#1A2D24] shadow-md"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6 p-1"
        >
          {/* Interlocking Nature & Ecosystem Leaf Path */}
          <path
            d="M16 3C16 3 7 11 7 19C7 24.5228 11.0294 29 16 29C20.9706 29 25 24.5228 25 19C25 11 16 3 16 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 29V13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 19C18.5 17 21 16 21 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 23C13.5 21 11 20 11 20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-semibold font-heading tracking-tight transition-colors duration-200 ${
            textSizes[size]
          } ${lightMode ? "text-[#233B30] group-hover:text-[#4D6249]" : "text-[#F7F5EF] group-hover:text-[#DCE4D8]"}`}
        >
          NATURAL IMPACT
        </span>
        <span
          className={`font-medium uppercase tracking-[0.24em] mt-0.5 ${
            subtextSizes[size]
          } ${lightMode ? "text-[#879783]" : "text-[#A4B4A0]"}`}
        >
          GROUP
        </span>
      </div>
    </Link>
  );
};
