import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ScrollProgressBar, AdityaFloatingDock } from "@/components/ui/motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5EF] text-[#292D29]">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <AdityaFloatingDock />
    </div>
  );
}

