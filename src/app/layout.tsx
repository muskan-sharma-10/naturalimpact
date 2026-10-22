import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../style/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Natural Impact Group",
    default: "Natural Impact Group | Nature-Based, Market-Led Agri-Commerce Ecosystems",
  },
  description:
    "Natural Impact is a corporate group enterprise building nature-based, market-led agri-commerce ecosystems, incubating producer collectives, and deploying digital traceability and trade finance from Noida One, Delhi NCR.",
  keywords: [
    "Natural Impact Group",
    "Agri-Commerce",
    "Value Chain Development",
    "Producer Enterprise Development",
    "FPO Incubation",
    "Digital Traceability",
    "Supply Chain Finance",
    "Climate Resilience",
    "Nature-Based Solutions",
  ],
  authors: [{ name: "Natural Impact Group" }],
  creator: "Natural Impact Group",
  publisher: "Natural Impact Group",
  metadataBase: new URL("https://www.naturalimpact.global"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.naturalimpact.global",
    siteName: "Natural Impact Group",
    title: "Natural Impact Group | Nature-Based, Market-Led Agri-Commerce Ecosystems",
    description:
      "Transforming agricultural value chains, building autonomous producer enterprises, and deploying climate-resilient trade ecosystems.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Natural Impact Group",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F7F5EF] text-[#292D29] antialiased selection:bg-[#879783]/30 selection:text-[#233B30]">
        {children}
      </body>
    </html>
  );
}
