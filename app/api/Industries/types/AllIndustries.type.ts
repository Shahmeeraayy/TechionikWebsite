// ─────────────────────────────────────────────
// INDUSTRIES API — COMPLETE TYPE DEFINITIONS
// ─────────────────────────────────────────────

// Root Response
export interface AllIndustriesResponse {
  success: boolean;
  count: number;
  data: Industry[];
}

// ─────────────────────────────────────────────
// MAIN INDUSTRY OBJECT
// ─────────────────────────────────────────────
export interface Industry {
  id: string;
  name: string;
  title: string;
  slug: string;
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
  image: string;
  ctaText: string;
  ctaLink: string;
}

// ─────────────────────────────────────────────
// WHAT YOU GET
// ─────────────────────────────────────────────
export interface WhatYouGet {
  id: number;
  title1: string;
  spanTitle: string;
  title2: string;
  reviews: any[]; // refine later if structure is known
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
  description: string[]; // ⚠️ array from API
  icon: string;
}

// ─────────────────────────────────────────────
// CTA SECTION
// ─────────────────────────────────────────────
export interface IndustryCTA {
  title: string;
  description: string; // HTML string
  buttonLabel: string;
  buttonUrl: string;
}