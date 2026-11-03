import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { BusinessesSection } from "@/components/home/BusinessesSection";
import { EcosystemJourneySection } from "@/components/home/EcosystemJourneySection";
import { GroupAtAGlanceSection } from "@/components/home/GroupAtAGlanceSection";
import { ApproachVisionSection } from "@/components/home/ApproachVisionSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CareersSection } from "@/components/home/CareersSection";

export const metadata = {
  title: "Natural Impact Group | Nature-Based, Market-Led Agri-Commerce Ecosystems",
  description:
    "Natural Impact is an integrated corporate group operating market-linked agri-commerce, producer enterprise development, digital traceability, trade finance, and regenerative climate solutions from Noida One, Delhi NCR.",
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Cinematic Single Hero Story */}
      <HeroSection />

      {/* Section 2: About Natural Impact — Where Nature, Enterprise and Opportunity Come Together */}
      <IntroSection />

      {/* Section 3: Group Businesses — 5 Specialized Operating Divisions */}
      <BusinessesSection />

      {/* Section 4: Closed-Loop Ecosystem Architecture — Soil to Enterprise Journey */}
      <EcosystemJourneySection />

      {/* Section 5: The Group at a Glance — Verified Footprint & Numerical Indicators */}
      <GroupAtAGlanceSection />

      {/* Section 6: Our Approach and Corporate Vision */}
      <ApproachVisionSection />

      {/* Section 7: Impact & Measurable Field Outcomes — Dark Evergreen Theme */}
      <ImpactSection />

      {/* Section 8: News, Publications and Industry Insights */}
      <InsightsSection />

      {/* Section 9: Collaboration & Strategic Partnerships — Let's Build More Resilient Value Chains Together */}
      <CareersSection />
    </>
  );
}