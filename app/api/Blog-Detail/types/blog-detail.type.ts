// app/api/blog-detail/types/blog-detail.type.ts

export interface SEO {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  robots: string;
  keywords: string[];
  twitterCard: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  slug: string;
  image: string;
  role: string;           // ← API sends this, you were missing it
  socialLinks: {          // ← API sends this, you were missing it
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface DetailBlogTags {
  id: string;
  name: string;
  slug: string;
}

export interface DetailBlogCategories {
  id: string;
  name: string;
  slug: string;
}

export interface BlogDetailData {   
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  addScheema?: string;
  layout?: string;
  contentBlocks: [];
  categories: DetailBlogCategories[];
  subCategories: string;
  tags: DetailBlogTags[];
  author: BlogAuthor;      // ← NOT an array, API sends a single object
  ogImage: string;         // ← API sends this at top level
  publishedAt: string;
  seo: SEO;                // ← NOT an array, API sends a single object
}

export interface BlogDetailPage {
  success: boolean;
  data: BlogDetailData;    // ← NOT an array, API sends a single object
}