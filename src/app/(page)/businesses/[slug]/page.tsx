import React from "react";
import { notFound } from "next/navigation";
import { businessesData, getBusinessBySlug } from "@/data/businesses";
import { BusinessDetailClient } from "@/components/business/BusinessDetailClient";
import type { Metadata } from "next";

interface BusinessPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return businessesData.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: BusinessPageProps): Promise<Metadata> {
  const business = getBusinessBySlug(params.slug);
  if (!business) {
    return {
      title: "Business Not Found | Natural Impact Group",
    };
  }

  return {
    title: `${business.name} | Natural Impact Group`,
    description: business.shortDescription,
    openGraph: {
      title: `${business.name} | Natural Impact Group`,
      description: business.shortDescription,
      images: [
        {
          url: business.heroImage,
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
    },
  };
}

export default function BusinessDetailPage({ params }: BusinessPageProps) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  // Related businesses (excluding current)
  const relatedBusinesses = businessesData
    .filter((b) => b.slug !== business.slug)
    .slice(0, 3);

  return (
    <BusinessDetailClient
      business={business}
      relatedBusinesses={relatedBusinesses}
    />
  );
}
