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
        sage: {
          DEFAULT: "#879783",
          light: "#A4B4A0",
          soft: "#DCE4D8",
          dark: "#6F806B",
        },
        forest: {
          DEFAULT: "#233B30",
          deep: "#1A2D24",
          light: "#2D4B3E",
        },
        olive: {
          DEFAULT: "#4D6249",
          dark: "#3B4D38",
          light: "#60795B",
        },
        ivory: {
          DEFAULT: "#F7F5EF",
          light: "#FCFAF6",
          dark: "#EDEAE0",
        },
        charcoal: {
          DEFAULT: "#292D29",
          soft: "#404640",
          muted: "#6B726A",
        },
        beige: {
          DEFAULT: "#D8CCB8",
          soft: "#EBE5D8",
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