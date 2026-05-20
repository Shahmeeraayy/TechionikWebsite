// =====================
// ROOT RESPONSE
// =====================
export interface HireDeveloperApiResponse {
  success: boolean;
  data: HireDeveloperData;
}

// =====================
// MAIN DATA
// =====================
export interface HireDeveloperData {
  id: string;
  title: string;
  slug: string;
  middleTitle?: string;
  lastTitle?: string;
  addScheema?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  metadata?: {
    section?: string;
  };
  templateData: TemplateData;
  metaTitle?: string;
  metaDescription?: string;
  isActive: boolean;
  subHirings: any[];
}

// =====================
// TEMPLATE DATA
// =====================
export interface TemplateData {
  hero: HeroSection;
  hiringPageData: HiringPageData;
  offshoreDeveloper: OffshoreDeveloperSection;
  whyChooseNext: WhyChooseNextSection;
  technicalExperts: TechnicalExpertsSection;
  tailoredOffshore: TailoredOffshoreSection;
  hiringProcess: HiringProcessSection;
  programmerSkills: ProgrammerSkillsSection;
  cutCostNotTalent: CutCostSection;
  outsourcing: OutsourcingSection;
  emergingTechnologies: EmergingTechnologies;
  whyChooseTechionik: WhyChooseTechionikSection;
  faq: FAQItem[];
}


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
// =====================
// HERO
// =====================
export interface HeroSection {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}

// =====================
// COMMON TYPES
// =====================
export interface SectionHeader {
  mainTitle: string;
  highlightTitle?: string;
  subtitle?: string;
}

export interface FeatureCard {
  id: number;
  title?: string;
  category?: string;
  icon?: string;
  features: string[];
}

export interface InfoCard {
  id: number;
  title: string;
  description?: string;
  icon?: string;
  label?: string;
}

// =====================
// HIRING PAGE
// =====================
export interface HiringPageData {
  header: SectionHeader;
  cards: FeatureCard[];
}

// =====================
// OFFSHORE DEVELOPER
// =====================
export interface OffshoreDeveloperSection {
  cards: OffshoreCard[];
}

export interface OffshoreCard {
  id: number;
  title: string;
  description?: string;
  icon?: string;
  label?: string;
}

// =====================
// WHY CHOOSE NEXT
// =====================
export interface WhyChooseNextSection {
  mainTitle: string;
  middleTitle?: string;
  endTitle?: string;
  mainDescription?: string;
  cards: InfoCard[];
}

// =====================
// TECHNICAL EXPERTS
// =====================
export interface TechnicalExpertsSection {
  header: SectionHeader;
  cards: FeatureCard[];
}

// =====================
// TAILORED OFFSHORE
// =====================
export interface TailoredOffshoreSection {
  header: TailoredHeader;
  cards: TailoredCard[];
}

export interface TailoredHeader {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  description?: string;
}

export interface TailoredCard {
  id: number;
  title: string;
  description?: string;
  bgPattern?: string;
}

// =====================
// HIRING PROCESS
// =====================
export interface HiringProcessSection {
  header: SectionHeader;
  steps: HiringStep[];
}

export interface HiringStep {
  id: string;
  title: string;
  description?: string;
  extraContent?: string;
  bulletPoints: string[];
}

// =====================
// PROGRAMMER SKILLS
// =====================
export interface ProgrammerSkillsSection {
  header: ProgrammerSkillsHeader;
  cards: ProgrammerSkillCard[];
}

export interface ProgrammerSkillsHeader {
  mainTitle: string;
  highlightTitle?: string;
  brandName?: string;
  subtitle?: string;
}

export interface ProgrammerSkillCard {
  id: number;
  title: string;
  icon?: string;
  skills: string[];
}

// =====================
// CUT COST SECTION
// =====================
export interface CutCostSection {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  highlight?: string;
  description?: string;
  backgroundImage?: string;
  lgImage1?: string;
  lgImage2?: string;
  lgImage3?: string;
  lgImage4?: string;
  smImage1?: string;
  smImage2?: string;
  smImage3?: string;
  smImage4?: string;
  buttonText?: string;
  buttonLink?: string;
  features: CutCostFeature[];
}

export interface CutCostFeature {
  icon?: string;
  text: string;
}

// =====================
// OUTSOURCING
// =====================
export interface OutsourcingSection {
  slides: OutsourcingSlide[];
}

export interface OutsourcingSlide {
  title: string;
  MiddleTitle?: string;
  lastTitle?: string;
  description?: string;
  items: OutsourcingItem[];
}

export interface OutsourcingItem {
  title: string;
  description?: string;
  image?: string;
  hoverImage?: string;
}

// =====================
// WHY CHOOSE TECHIONIK
// =====================
export interface WhyChooseTechionikSection {
  title: string;
  middleTitle?: string;
  description?: string;
  items: WhyChooseItem[];
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description?: string;
  image?: string;
  alt?: string;
}

// =====================
// FAQ
// =====================
export interface FAQItem {
  question: string;
  answer: string;
}