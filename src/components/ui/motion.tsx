"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";

// Luxury easing curve used by Apple & high-end brands
export const luxuryEase = [0.16, 1, 0.3, 1] as const;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 28,
  className = "",
  once = true,
  ...props
}) => {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.12,
  className = "",
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  distance = 24,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: luxuryEase,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

/**
 * Animated counter that parses numbers (e.g., "32,000+", "85,000+", "100%", "5", "2019")
 * and smoothly counts from 0 up to target when scrolled into view.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    const rawStr = String(value);
    // Find numeric part
    const matches = rawStr.match(/([\d,]+)/);
    if (!matches) {
      setDisplayValue(rawStr);
      return;
    }

    const numberStr = matches[0];
    const prefix = rawStr.substring(0, matches.index || 0);
    const suffix = rawStr.substring((matches.index || 0) + numberStr.length);
    const targetNumber = parseInt(numberStr.replace(/,/g, ""), 10);

    if (isNaN(targetNumber)) {
      setDisplayValue(rawStr);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easedProgress * targetNumber);

      const formattedNumber = currentNumber.toLocaleString();
      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(rawStr);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : "0"}
    </span>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#879783] via-[#DCE4D8] to-[#879783] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(135,151,131,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#233B30] text-[#F7F5EF] border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-[#1A2D24] hover:scale-110 active:scale-95 group ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

interface AosFlipCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Aditya Birla signature 3D flip-left scroll entrance animation (data-aos="flip-left").
 * Smooth perspective rotateY from 30deg to 0deg with fade-in and subtle lift.
 */
export const AosFlipCard: React.FC<AosFlipCardProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 28, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedLineProps {
  className?: string;
  delay?: number;
  width?: string;
}

/**
 * Aditya Birla signature section accent line that expands smoothly when scrolled into view.
 */
export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  className = "h-[2px] bg-[#879783]",
  delay = 0.1,
  width = "36px",
}) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay, ease: luxuryEase }}
      className={className}
    />
  );
};

interface PulsePlayButtonProps {
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Aditya Birla media/podcast play button with ambient pulsing rings and hover zoom.
 */
export const PulsePlayButton: React.FC<PulsePlayButtonProps> = ({
  onClick,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  const iconSizes = {
    sm: "w-3.5 h-3.5 ml-0.5",
    md: "w-4 h-4 ml-0.5",
    lg: "w-6 h-6 ml-0.5",
  }[size];

  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Play video or audio"
      className={`relative inline-flex items-center justify-center rounded-full bg-[#879783] text-[#1A2D24] shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 group ${sizeClasses} ${className}`}
    >
      {/* Outer Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#879783]/40 animate-ping group-hover:bg-white/40 duration-1000" />
      {/* Play Triangle SVG */}
      <svg
        className={`${iconSizes} fill-current text-[#1A2D24] relative z-10 transition-transform duration-300 group-hover:scale-110`}
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
};

/**
 * Aditya Birla Floating Right Dock with Circular Scroll Progress, Back-to-Top, and Quick Links.
 */
export const AdityaFloatingDock: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(current);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDashoffset = 100 - scrollProgress;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Circular Progress & Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="relative w-12 h-12 rounded-full bg-[#1A2D24]/90 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 group hover:border-[#879783]"
      >
        {/* SVG Circular Progress Track */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-white/10 fill-none"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-[#879783] fill-none transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray="125.66"
            strokeDashoffset={125.66 - (125.66 * scrollProgress) / 100}
            strokeLinecap="round"
          />
        </svg>

        {/* Up Arrow with Hover Lift */}
        <svg
          className="w-4 h-4 text-[#DCE4D8] group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>

        {/* Tooltip on Hover */}
        <span className="absolute right-14 px-2.5 py-1 rounded-md bg-[#1A2D24] text-[#F7F5EF] text-[11px] font-medium tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-white/10">
          Back to Top ({Math.round(scrollProgress)}%)
        </span>
      </button>
    </div>
  );
};

