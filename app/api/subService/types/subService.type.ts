export interface EmergingTechnologiesItem {
  title: string;
  description: string; // HTML string
  image: string;
  imageAlt: string;
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

export interface SubServiceCategory {
  id: string;
  name: string;
  slug: string;
}

export interface SubServiceTag {
  id: string;
  name: string;
  slug: string;
}

export interface SubServiceSocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface SubServiceAuthor {
  id: string;
  name: string;
  role: string;
  slug: string;
  socialLinks?: SubServiceSocialLinks;
}

export interface SubServiceBlog {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  categories: SubServiceCategory[];
  tags: SubServiceTag[];
  ogImage: string;
  author: SubServiceAuthor;
  publishedAt: string;
}

export interface SubServiceCaseStudy {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  categories: SubServiceCategory[];
  tags: SubServiceTag[];
  ogImage: string;
  author: SubServiceAuthor;
  publishedAt: string;
}

export interface SubServiceParentService {
  id: string;
  name: string;
  title: string;
  slug: string;
  blogs: SubServiceBlog[];
  caseStudies: SubServiceCaseStudy[];
}

export interface SubServiceHero {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

export interface SubServiceWhyChooseItem {
  title: string;
  description: string;
}

export interface SubServiceWhyChooseTechionik {
  title: string;
  description: string;
  items: SubServiceWhyChooseItem[];
}

export interface SubServiceWhatWeDoItem {
  title: string;
  description: string; // HTML string
}

export interface SubServiceWhatWeDo {
  title: string;
  description: string;
  items: SubServiceWhatWeDoItem[];
}

export interface SubServiceSolutionsWeDeliverCard {
  title: string;
  description: string; // HTML string
}

export interface SubServiceSolutionsWeDeliver {
  title: string;
  spanTitle: string;
  description: string;
  cards: SubServiceSolutionsWeDeliverCard[];
}

export interface SubServiceOutsourcingModelItem {
  title: string;
  description: string; // HTML string
}

export interface SubServiceOutsourcingModels {
  title: string;
  description: string; // HTML string
  items: SubServiceOutsourcingModelItem[];
}

export interface SubServiceExtraSection {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface SubServiceFaqItem {
  question: string;
  answer: string;
}
export interface Industries {
  id: string | number;
  name: string;
  title: string;
  slug: string;
  type: string;
  shortDescription: string;
  imageUrl: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
}

export interface SubServiceCta {
  title: string;
  image: string
  imageAlt?: string;
  description: string; // HTML string
  buttonLabel: string;
  buttonUrl: string;
}

export interface SubServiceTemplateData {
  hero: SubServiceHero;
  heroSlides?: SubServiceHero[];
  EmergingTechnologies: EmergingTechnologies;
  whyChooseTechionik: SubServiceWhyChooseTechionik;
  whatWeDo: SubServiceWhatWeDo;
  solutionsWeDeliver: SubServiceSolutionsWeDeliver;
  ourOutsourcingModels: SubServiceOutsourcingModels;
  extraSection: SubServiceExtraSection;
  faq: SubServiceFaqItem[];
  cta: SubServiceCta;
}

export interface SubServiceItem {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  templateData: SubServiceTemplateData;
  scope: string;
  isActive: boolean;
  industries: Industries[];
  blogs: SubServiceBlog[];
  caseStudies: SubServiceCaseStudy[];
  hasPage?: boolean;
  addScheema?: string;
}

export interface SubServiceData {
  service: SubServiceParentService;
  subService: SubServiceItem;
}

export interface SubServiceResponse {
  success: boolean;
  data: SubServiceData;
}
