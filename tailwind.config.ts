import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        forest: {
          deep: "#123D2A", // Deep Forest Green
          DEFAULT: "#1C5038", // Rich Evergreen
          rich: "#1C5038",
          dark: "#123D2A",
          light: "#286649",
        },
        earth: {
          DEFAULT: "#B78B53", // Restrained Earth Accent
          light: "#C8A06A",
          dark: "#966D3B",
          subtle: "#F0E4D2",
        },
        sage: {
          DEFAULT: "#A8B7A0", // Muted Sage
          light: "#C2CEC0",
          soft: "#DCE4D8",
          dark: "#6F806B",
        },
        ivory: {
          DEFAULT: "#F7F5EF", // Warm Ivory
          light: "#FCFAF6",
          dark: "#EDEAE0",
        },
        charcoal: {
          DEFAULT: "#20251F", // Charcoal
          soft: "#363D34",
          muted: "#5C6659",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;