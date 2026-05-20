// --- API Response Interfaces ---

export interface ITechHead {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  templateData: Record<string, any>; // Keeping generic here is fine
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
}

export interface ITechService {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
}

// --- Strongly Typed Template Data Interfaces ---

export interface ITemplateItem {
  title: string;
  description: string; // HTML string
  icon: string;
  iconAlt?: string;
}

export interface IHeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

export interface IFaqItem {
  question: string;
  answer: string;
}

export interface ITemplateData {
  hero?: {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt?: string;
  };
  imageSection?: {
    title: string;
    imageUrl: string;
    description: string;
  };
  whyChooseTechnology?: {
    title: string;
    description: string; // HTML string
    items: ITemplateItem[];
  };
  whyChooseTechionik?: {
    title: string;
    description: string; // HTML string
    items: ITemplateItem[];
  };
  faq?: IFaqItem[];
  cta?: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonUrl: string;
    description: string; // HTML string
    image: string;
  };
  heroSlides?: IHeroSlide[];
  whatWeDo?: {
    title: string;
    description: string; // HTML string
    items: ITemplateItem[];
  };
  solutionsWeDeliver?: {
    title: string;
    description: string; // HTML string
    cards: ITemplateItem[]; // Note: API uses 'cards' here instead of 'items'
  };
  ourOutsourcingModels?: {
    title: string;
    description: string; // HTML string
    items: ITemplateItem[];
  };
  extraSection?: {
    title: string;
    description: string; // HTML string
    buttonLabel: string;
    buttonUrl: string;
  };
}

// --- Main Technology Interface ---

export interface IApiTechnology {
  id: string;
  name: string;
  title: string;
  slug: string;
  addScheema: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  iconUrl: string;
  templateData: ITemplateData; // Upgraded from Record<string, any>
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
  sortOrder: number;
  heads: ITechHead[];
  services: ITechService[];
}

export interface ITechnologiesApiResponse {
  success: boolean;
  count: number;
  data: IApiTechnology[];
}

// --- UI Interfaces ---

export interface TechnologyItem {
  id: string;
  name: string;
  logo: string;
  dotIcon: string;
  href: string;
  slug: string;
}

export interface TechnologyCategory {
  title: string;
  subTitle?: string;
  items: TechnologyItem[];
}