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
  
  export interface CaseStudyAuthor {
    id: string;
    name: string;
    slug: string;
    role: string;           // ← API sends this, you were missing it
    socialLinks: {          // ← API sends this, you were missing it
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  }
  
  export interface DetailCaseStudyTags {
    id: string;
    name: string;
    slug: string;
  }
  
  export interface DetailCaseStudyCategories {
    id: string;
    name: string;
    slug: string;
  }
  
  export interface CaseStudyDetailData{
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    addScheema?: string;
    content: string;
    layout?: string;
    contentBlocks: any[];
    categories: DetailCaseStudyCategories[];
    subCategories: any[];
    tags: DetailCaseStudyTags[];
    author: CaseStudyAuthor;      // ← NOT an array, API sends a single object
    ogImage: string;         // ← API sends this at top level
    publishedAt: string;
    seo: SEO;                // ← NOT an array, API sends a single object
  }
  
  export interface CaseStudyDetailPage {
    success: boolean;
    data: CaseStudyDetailData;    // ← NOT an array, API sends a single object
  }