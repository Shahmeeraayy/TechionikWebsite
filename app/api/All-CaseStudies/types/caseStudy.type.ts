export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Seo {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  keywords: string[];
  twitterCard: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  slug: string;
  isFeatured?: boolean;
  layout?: string; // Kept from your initial snippet (marked optional as it is not in the JSON)
  shortDescription: string;
  content: string;
  contentBlocks: any[]; 
  categories: Category[];
  subCategories: any[]; 
  tags: string[];
  author: Author;
  ogImage: string;
  seo: Seo;
  publishedAt: string;
}

export interface MainCaseStudyPage{
  success: boolean;
  count: number;
  data: CaseStudyData[];
}