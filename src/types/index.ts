export interface Business {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  thumbnailImage: string;
  gallery: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  keyOfferings: string[];
  differentiators: {
    title: string;
    description: string;
  }[];
  metrics?: {
    value: string;
    label: string;
  }[];
  operationalFootprint?: string[];
  targetSectors: string[];
  featured?: boolean;
  order: number;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    paragraph: string;
    subheading?: string;
  }[];
  tags: string[];
}

export interface GroupMetric {
  value: string;
  numericSuffix?: string;
  label: string;
  sublabel: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
