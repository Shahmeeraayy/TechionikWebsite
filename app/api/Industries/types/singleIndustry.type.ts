// ─────────────────────────────────────────────
// SINGLE INDUSTRY API — TYPE DEFINITIONS
// ─────────────────────────────────────────────

import { Author } from "../../blog/blog.api";
import { Tag } from "../../singleService/types/singleService.type";

// Root response
export interface SingleIndustryResponse {
  success: boolean;
  data: SingleIndustry;
}

// ─────────────────────────────────────────────
// MAIN INDUSTRY OBJECT
// ─────────────────────────────────────────────
export interface SingleIndustry {
  id: string;
  name: string;
  title: string;
  slug: string;
  addScheema?: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  templateData: IndustryTemplateData;
  scope: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
  isActive: boolean;
  blogs: BlogItem[];
  caseStudies: CaseStudyItem[];
  subIndustries: SubIndustry[];
}

// ─────────────────────────────────────────────
// TEMPLATE DATA
// ─────────────────────────────────────────────
export interface IndustryTemplateData {
  heroSlides: HeroSlide[];
  whatYouGet: WhatYouGet;
  softwareSolutions: SoftwareSolutions;
  technologyExpertise: TechnologyExpertise;
  cta: IndustryCTA;
}

// ─────────────────────────────────────────────
// HERO SLIDES
// ─────────────────────────────────────────────
export interface HeroSlide {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  video?: string;
}

// ─────────────────────────────────────────────
// WHAT YOU GET
// ─────────────────────────────────────────────
export interface WhatYouGet {
  id: number;
  title1: string;
  spanTitle: string;
  title2: string;
  reviews: any[];
  RightDescription1: string;
}

// ─────────────────────────────────────────────
// SOFTWARE SOLUTIONS
// ─────────────────────────────────────────────
export interface SoftwareSolutions {
  title: string;
  middleTitle: string;
  description: string;
  lastTitle: string;
  items: SoftwareSolutionItem[];
}

export interface SoftwareSolutionItem {
  id: number;
  title: string;
  description: string;
}

// ─────────────────────────────────────────────
// TECHNOLOGY EXPERTISE
// ─────────────────────────────────────────────
export interface TechnologyExpertise {
  mainTitle: string;
  mainDescription: string;
  cards: TechnologyCard[];
}

export interface TechnologyCard {
  id: number;
  title: string;
  description: string[];
  icon: string;
}

// ─────────────────────────────────────────────
// CTA SECTION
// ─────────────────────────────────────────────
export interface IndustryCTA {
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
}

// ─────────────────────────────────────────────
// BLOGS, CASE STUDIES, SUB-INDUSTRIES
// ─────────────────────────────────────────────
export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  categories: Category[];
  tags: Tag[];
  ogImage?: string;
  author: Author;
  publishedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  metaId?: number;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  categories: Category[];
  tags: Tag[];
  ogImage?: string;
  author: Author;
  publishedAt: string;
}

export interface SubIndustry {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
}