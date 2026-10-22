import React from "react";
import { notFound } from "next/navigation";
import { insightArticles, getArticleBySlug } from "@/data/insights";
import { InsightDetailClient } from "@/components/insights/InsightDetailClient";
import type { Metadata } from "next";

interface InsightDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found | Natural Impact Group",
    };
  }

  return {
    title: `${article.title} | Natural Impact Group`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Natural Impact Group`,
      description: article.excerpt,
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function InsightDetailPage({ params }: InsightDetailPageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightArticles.filter((a) => a.slug !== article.slug);

  return (
    <InsightDetailClient
      article={article}
      relatedArticles={relatedArticles}
    />
  );
}
