// ==============================
// ROOT API RESPONSE
// ==============================

export interface SingleHiringApiResponse {
  success: boolean;
  data: {
    hiring: unknown; // intentionally not modeled
    subHiring: SubHiring;
  };
}

// ==============================
// SUB HIRING
// ==============================

export interface SubHiring {
  id: string;
  title: string;
  slug: string;
  middleTitle?: string;
  lastTitle?: string;
  description?: string;
  addScheema?:string
  image?: string;
  imageUrl?: string;
  metadata: {
    section: string;
  };
  templateData: SubHiringTemplateData;
  metaTitle?: string;
  metaDescription?: string;
  isActive: boolean;
}

// ==============================
// TEMPLATE DATA
// ==============================

export interface SubHiringTemplateData {
  actionSection: ActionSection;
  howCanHire: HowCanHire;
  cta: CTASection;
  typeOfServices: TypeOfServices;
  priceList: PriceList;
  emergingTechnologies: EmergingTechnologies;
  solutionsForBusiness: SolutionsForBusiness;
  howWeHireDeveloper: HowWeHireDeveloper;
  hireBestDeveloper: HireBestDeveloper;
  footerCta: FooterCTA;
  choiceBestModel: ChoiceBestModel;
  advantageOfHiring: AdvantageOfHiring;
  faq: FAQItem[];
}

// ==============================
// REUSABLE TYPES
// ==============================

export interface TitleDescriptionItem {
  title: string;
  description: string;
}

// ==============================
// SECTIONS
// ==============================

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

export interface ActionSection {
  title: string;
  subtitle: string;
  description: string;
  items: TitleDescriptionItem[];
}

export interface HowCanHire {
  title: string;
  subtitle: string;
  description: string;
  items: TitleDescriptionItem[];
}

export interface CTASection {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  image?: string;
}

// ==============================
// SERVICES
// ==============================

export interface TypeOfServices {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  description: string;
  image?: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  slug: string;
}

// ==============================
// PRICING
// ==============================

export interface PriceList {
  title: string;
  description: string;
  items: PriceItem[];
}

export interface PriceItem {
  pkgTitle: string;
  priceRange: string;
  description: string;
}

// ==============================
// BUSINESS / HIRING
// ==============================

export interface SolutionsForBusiness {
  title: string;
  description: string;
  items: TitleDescriptionItem[];
}

export interface HowWeHireDeveloper {
  title: string;
  subtitle: string;
  description: string;
  items: TitleDescriptionItem[];
}

// ==============================
// HIRING CTA BLOCKS
// ==============================

export interface HireBestDeveloper {
  title: string;
  subtitle: string;
  lastTitle?: string;
  description: string;
  items: HireItem[];
}

export interface HireItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FooterCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  image?: string;
}

// ==============================
// ADDITIONAL SECTIONS
// ==============================

export interface ChoiceBestModel {
  title: string;
  subtitle: string;
  lastTitle?: string;
  description: string;
  items: TitleDescriptionItem[];
}

export interface AdvantageOfHiring {
  title: string;
  description: string;
  items: TitleDescriptionItem[];
}

// ==============================
// FAQ
// ==============================

export interface FAQItem {
  question: string;
  answer: string;
}