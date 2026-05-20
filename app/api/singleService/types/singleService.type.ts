/* ---------------- Hero, Why Choose, What We Do, Solutions, Outsourcing, Extra, FAQ, CTA ---------------- */
export interface EmergingTechnologiesItem {
  title: string;
  description: string; // HTML string
  image: string;
  imageAlt?: string;
}

export interface EmergingTechnologies {
  title: string;
  middleTitle: string;
  lastTitle: string;
  description: string; // HTML string
  items: EmergingTechnologiesItem[];
  buttonLabel: string;
  buttonLink: string;
}
export interface SingleServiceHero {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

export interface SingleServiceWhyChooseItem {
  title: string;
  description: string;
}

export interface SingleServiceWhyChooseTechionik {
  title: string;
  description: string;
  items: SingleServiceWhyChooseItem[];
}

export interface SingleServiceWhatWeDoItem {
  title: string;
  description: string; // HTML string
}

export interface SingleServiceWhatWeDo {
  title: string;
  description: string;
  items: SingleServiceWhatWeDoItem[];
}

export interface SingleServiceSolutionsWeDeliverCard {
  title: string;
  description: string; // HTML string
}

export interface SingleServiceSolutionsWeDeliver {
  title: string;
  spanTitle?: string; // optional
  description: string;
  cards: SingleServiceSolutionsWeDeliverCard[];
}

export interface SingleServiceOutsourcingModelItem {
  title: string;
  description: string; // HTML string
}

export interface SingleServiceOutsourcingModels {
  title: string;
  description: string; // HTML string
  items: SingleServiceOutsourcingModelItem[];
}

export interface SingleServiceExtraSection {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
}

export interface SingleServiceFaqItem {
  question: string;
  answer: string;
}

export interface SingleServiceCta {
  title: string;
  image?: string;
  imageAlt?: string;
  description: string; // HTML string
  buttonLabel: string;
  buttonUrl: string;
}

export interface SingleServiceTemplateData {
  hero: SingleServiceHero;
  whyChooseTechionik: SingleServiceWhyChooseTechionik;
  EmergingTechnologies: EmergingTechnologies;
  whatWeDo: SingleServiceWhatWeDo;
  solutionsWeDeliver: SingleServiceSolutionsWeDeliver;
  ourOutsourcingModels: SingleServiceOutsourcingModels;
  extraSection: SingleServiceExtraSection;
  faq: SingleServiceFaqItem[];
  cta: SingleServiceCta;
}

/* ---------------- Shared Types ---------------- */

export interface Category {
  id: string;
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  metaId?: number;
  hasPage?: boolean;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  slug: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

/* ---------------- Blogs ---------------- */

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

/* ---------------- Case Studies ---------------- */

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

/* ---------------- Industries ---------------- */

export interface Industry {
  id: string;
  name: string;
  title: string;
  slug: string;
  type: string;
  shortDescription: string;
  imageUrl: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  metaId?: number;
}

/* ---------------- Sub Service ---------------- */

export interface SubServiceItem {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  imageUrl?: string;
  templateData: SingleServiceTemplateData;
  scope: string;
  isActive: boolean;
  industries?: Industry[];
  blogs?: BlogItem[];
  caseStudies?: CaseStudyItem[];
  hasPage?: boolean;
}

/* ---------------- Main Service ---------------- */

export interface SingleServiceItem {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  imageUrl?: string;
  templateData?: SingleServiceTemplateData;
  scope?: string;
  isActive: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  metaId?: number;
  industries?: Industry[];
  blogs?: BlogItem[];
  caseStudies?: CaseStudyItem[];
  subServices?: SubServiceItem[];
  addScheema?: string;
}

/* ---------------- API Response ---------------- */

export interface SingleServiceResponse {
  success: boolean;
  data: SingleServiceItem; // data contains the main service, which includes subServices[]
}