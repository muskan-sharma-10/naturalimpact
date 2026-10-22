import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { BusinessesSection } from "@/components/home/BusinessesSection";
import { FeaturedSpotlightSection } from "@/components/home/FeaturedSpotlightSection";
import { GroupAtAGlanceSection } from "@/components/home/GroupAtAGlanceSection";
import { ApproachVisionSection } from "@/components/home/ApproachVisionSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CareersSection } from "@/components/home/CareersSection";

export const metadata = {
  title: "Natural Impact Group | Nature-Based, Market-Led Agri-Commerce Ecosystems",
  description:
    "Natural Impact is a corporate group operating market-linked agri-commerce, producer enterprise development, digital traceability, trade finance, and regenerative climate solutions.",
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <HeroSection />

      {/* Section 2: Introduction to Natural Impact */}
      <IntroSection />

      {/* Section 3: Our Businesses — The Main Feature */}
      <BusinessesSection />

      {/* Section 4: Featured Business Spotlight */}
      <FeaturedSpotlightSection />

      {/* Section 5: The Group at a Glance */}
      <GroupAtAGlanceSection />

      {/* Section 6: Our Approach and Vision */}
      <ApproachVisionSection />

      {/* Section 7: Impact and Responsibility */}
      <ImpactSection />

      {/* Section 8: News, Stories and Insights */}
      <InsightsSection />

      {/* Section 9: Careers or Collaboration */}
      <CareersSection />
    </>
  );
}