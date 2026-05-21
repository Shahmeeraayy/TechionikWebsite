import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import type { FAQ } from "@/data/FAQS";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";
import type { TrustLogoItem } from "@/components/TrustLogoStrip";
import type { ParentServiceTemplateVariant } from "@/components/service-pages/ParentServiceTemplate";
import type { CaseStudyType } from "@/views/home/CaseStudies";

import { CALENDLY_URL } from "@/utils/links";
import { abouttechStackData } from "@/data/TechStack/AboutTeckStack";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { talentPoolDataHome } from "@/data/Talent Pool/TalentPollDataHome";
import { SoftwareInsightData } from "@/data/softwareInsightsData";
import { caseStudyData } from "@/data/caseStudyData";
import { DummyBlogData } from "@/data/blogData";
import { aiConsultingPageData } from "@/data/services/aiConsultingPageData";
import { agenticAiDevelopmentPageData } from "@/data/services/agenticAiDevelopmentPageData";
import { aiSoftwareDevelopmentPageData } from "@/data/services/aiSoftwareDevelopmentPageData";
import { generativeAiDevelopmentPageData } from "@/data/services/generativeAiDevelopmentPageData";
import { customApiDevelopmentPageData } from "@/data/services/customApiDevelopmentPageData";
import { cmsDevelopmentPageData } from "@/data/services/cmsDevelopmentPageData";
import { erpSoftwareDevelopmentPageData } from "@/data/services/erpSoftwareDevelopmentPageData";
import { enterpriseSoftwareDevelopmentPageData } from "@/data/services/enterpriseSoftwareDevelopmentPageData";
import { frontendDevelopmentPageData } from "@/data/services/frontendDevelopmentPageData";
import { fullStackDevelopmentPageData } from "@/data/services/fullStackDevelopmentPageData";
import { softwareDevelopmentOutsourcingPageData } from "@/data/services/softwareDevelopmentOutsourcingPageData";
import { businessProcessAutomationPageData } from "@/data/services/businessProcessAutomationPageData";
import { devopsServicesPageData } from "@/data/services/devopsServicesPageData";
import { desktopAppDevelopmentPageData } from "@/data/services/desktopAppDevelopmentPageData";
import { machineLearningDevelopmentPageData } from "@/data/services/machineLearningDevelopmentPageData";
import { mobileAppConsultingPageData } from "@/data/services/mobileAppConsultingPageData";
import { qaSoftwareTestingPageData } from "@/data/services/qaSoftwareTestingPageData";
import { backendDevelopmentPageData } from "@/data/services/backendDevelopmentPageData";
import { mvpDevelopmentPageData } from "@/data/services/mvpDevelopmentPageData";
import { uiUxDesignPageData } from "@/data/services/uiUxDesignPageData";
import { applicationDevelopmentPageCopy } from "@/data/services/applicationDevelopmentPageCopy";

export interface ServiceMenuItem {
  id: number;
  name: string;
  slug: string;
  href?: string;
  icon?: string;
  imageUrl?: string;
  children?: ServiceMenuItem[];
}

type ParentPageCopy = {
  templateVariant?: ParentServiceTemplateVariant;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
  };
  trustLogos?: TrustLogoItem[];
  heroSlides: HeroSlide[];
  whatYouGet: WhatYouGett;
  softwareSolutions: SoftwareSolutions | null;
  servicesCTA: ServicesCTAInterface;
  whatWeDo: WhatWeDo | null;
  solutionsWeDeliver: SolutionWeDeliver | null;
  industries: IndustriesData | null;
  faq: FAQ | null;
};

type SubServicePageData = {
  heroSlides: HeroSlide[];
  whatYouGet: WhatYouGett | null;
  technologyExpertise: {
    mainTitle: string;
    mainDescription?: string;
    cards: {
      id: number;
      title: string;
      description: string[] | string;
      icon: string;
    }[];
  } | null;
  solutionsWeDeliver: SolutionWeDeliver;
  outsourcingModels: OutsourcingSlide | null;
  faq: FAQ | null;
  contactHero: {
    title: string;
    description: string;
    backgroundImage?: string;
    imageAlt?: string;
    buttonText: string;
    buttonLink: string;
    buttonVariant?: "glass" | "gradient" | "solid";
    buttonIcon?: string;
  } | null;
  techStackData?: TechStackData | null;
  caseStudies: CaseStudyType[];
  whatWeDo: WhatWeDo;
  blogs: {
    id: string;
    title: string;
    description: string;
    image: string;
    stack: string[];
    slug: string;
  }[];
  industries: IndustriesData;
  addScheema?: string;
};

const defaultReviewImages = [
  {
    image1: "/images/technology/clutch-reviews.png",
    width: 114,
    height: 54,
  },
  {
    image1: "/images/technology/google-reviews.png",
    width: 144,
    height: 42,
  },
  {
    image1: "/images/technology/good-firms.png",
    width: 125,
    height: 42,
  },
];

const defaultTrustLogos: TrustLogoItem[] = [
  {
    src: "/images/our-clients/Layoffhub.png",
    alt: "Layoffhub",
    width: 180,
    height: 54,
  },
  {
    src: "/images/our-clients/Acclutions.png",
    alt: "Acclutions",
    width: 180,
    height: 54,
  },
  {
    src: "/images/our-clients/Capital.png",
    alt: "Capital",
    width: 180,
    height: 54,
  },
  {
    src: "/images/our-clients/boxelu.png",
    alt: "Boxelu",
    width: 180,
    height: 54,
  },
  {
    src: "/images/our-clients/Rastah.png",
    alt: "Rastah",
    width: 180,
    height: 54,
  },
  {
    src: "/images/our-clients/marvel.png",
    alt: "Marvel",
    width: 180,
    height: 54,
  },
];

const defaultSolutionIcons = [
  "/icons/cloud.svg",
  "/icons/box-icon.png",
  "/icons/check.svg",
  "/icons/people-team.svg",
];

const defaultTechExpertiseIcon = "/icons/box-icon.png";

function titleCase(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

function slugLabel(slug: string) {
  const normalized = slug.trim().toLowerCase();
  const replacements: Record<string, string> = {
    "software-development": "Software Development",
    "application-development": "Application Development",
    "ai-ml": "AI & Machine Learning",
    "data-analytics": "Data & Analytics",
    "quality-assurance": "Quality Assurance",
    "infrastructure-devops": "Infrastructure & DevOps",
    "integration-api": "Integration & APIs",
    "automation": "Automation & Process",
    "ui-ux": "UI/UX",
    "bpa": "Business Process Automation",
    "qa": "Quality Assurance",
    "devops": "DevOps",
    "frontend": "Front-End",
    "cms": "CMS",
    "erp": "ERP",
    "b2b": "B2B",
    "b2c": "B2C",
    "data-engineering": "Data Engineering",
    "hire-developers": "Hire Developers",
    "full-stack": "Full-Stack",
    "front-end": "Front-End",
    "backend": "Back-End",
  };

  if (replacements[normalized]) return replacements[normalized];
  return titleCase(normalized);
}

function makeHero(
  title: string,
  subtitle: string,
  description: string,
  image: string,
  ctaText = "Let's Discuss Your Idea",
  ctaLink = "#contact",
): HeroSlide[] {
  return [
    {
      title,
      subtitle,
      description,
      image,
      imageAlt: `${title} hero banner`,
      ctaText,
      ctaLink,
    },
  ];
}

function makeWhatYouGet(
  title1: string,
  spanTitle: string,
  title2: string,
  description1: string,
  description2: string,
  buttonLabel = "Let's Discuss Your Idea",
  buttonLink = "#contact",
): WhatYouGett {
  return {
    id: 1,
    title1,
    spanTitle,
    title2,
    reviews: defaultReviewImages,
    RightDescription1: description1,
    RightDescription2: description2,
    buttonLabel,
    buttonLink,
  };
}

function makeSoftwareSolutions(
  title: string,
  middleTitle: string,
  description: string,
  items: { title: string; description: string }[],
): SoftwareSolutions {
  return {
    title,
    middleTitle,
    lastTitle: "",
    description,
    items: items.map((item, index) => ({
      id: index + 1,
      title: item.title,
      description: item.description,
      image: `/images/about/software-solution/aiLayer${(index % 4) + 1}.svg`,
      hoverImage: `/images/about/software-solution/aiLayer${(index % 4) + 1}-hover.svg`,
      alt: item.title,
    })),
  };
}

function makeServicesCTA(
  startTitle: string,
  spanTitle: string,
  endTitle: string,
  description: string,
  buttonLabel = "Schedule a Call",
  buttonUrl = CALENDLY_URL,
): ServicesCTAInterface {
  return {
    startTitle,
    spanTitle,
    endTitle,
    bgImage: "/banners/servicesCTA.png",
    description,
    buttonLabel,
    buttonUrl,
  };
}

function makeWhatWeDo(
  title: string,
  description: string,
  mainDescription: string,
  cards: { title: string; description: string }[],
): WhatWeDo {
  return {
    title,
    descriptiption: description,
    mainDescription,
    card: cards.map((card, index) => ({
      id: index + 1,
      title: card.title,
      description: `<p>${card.description}</p>`,
    })),
  };
}

function makeSolutionsWeDeliver(
  title: string,
  spanTitle: string,
  description: string,
  cards: { title: string; description: string }[],
): SolutionWeDeliver {
  return {
    title,
    spanTitle,
    description,
    cards: cards.map((card, index) => ({
      id: index + 1,
      title: card.title,
      description: [card.description],
      icon: defaultSolutionIcons[index % defaultSolutionIcons.length],
    })),
  };
}

function makeIndustries(
  title: string,
  gradientTitle: string,
  afterGradientTitle: string,
  description: string,
  industries: { title: string; description: string; link: string; bgImage: string }[],
): IndustriesData {
  return {
    title,
    gradientTitle,
    afterGradientTitle,
    description,
    slides: industries.map((industry) => ({
      title: industry.title,
      description: industry.description,
      link: industry.link,
      bgImage: industry.bgImage,
      icon: "•",
    })),
  };
}

function makeFaq(
  mainTitle: string,
  spanTitle: string,
  faqs: { question: string; answer: string }[],
): FAQ {
  return {
    mainTitle,
    spanTitle,
    faq: faqs.map((faq, index) => ({
      id: index + 1,
      question: faq.question,
      answer: faq.answer,
    })),
  };
}

function makeParentCopy(config: {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  whatYouGetTitle1: string;
  whatYouGetSpan: string;
  whatYouGetTitle2: string;
  whatYouGetDescription1: string;
  whatYouGetDescription2: string;
  whyChooseTitle: string;
  whyChooseMiddle: string;
  whyChooseDescription: string;
  whyChooseItems: { title: string; description: string }[];
  ctaStart: string;
  ctaSpan: string;
  ctaEnd: string;
  ctaDescription: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  whatWeDoMainDescription: string;
  whatWeDoItems: { title: string; description: string }[];
  solutionTitle: string;
  solutionSpan: string;
  solutionDescription: string;
  solutionItems: { title: string; description: string }[];
  industryTitle: string;
  industryGradient: string;
  industryAfter: string;
  industryDescription: string;
  industryItems: { title: string; description: string; link: string; bgImage: string }[];
  faqTitle: string;
  faqSpan: string;
  faqItems: { question: string; answer: string }[];
  image: string;
  keywords: string[];
  trustLogos?: TrustLogoItem[];
  templateVariant?: ParentServiceTemplateVariant;
}): ParentPageCopy {
  return {
    templateVariant: config.templateVariant ?? "default",
    meta: {
      title: `${config.title} | Techionik`,
      description: config.heroDescription,
      keywords: config.keywords,
      image: config.image,
    },
    trustLogos: config.trustLogos ?? defaultTrustLogos,
    heroSlides: makeHero(
      config.heroTitle,
      config.heroSubtitle,
      config.heroDescription,
      config.image,
    ),
    whatYouGet: makeWhatYouGet(
      config.whatYouGetTitle1,
      config.whatYouGetSpan,
      config.whatYouGetTitle2,
      config.whatYouGetDescription1,
      config.whatYouGetDescription2,
    ),
    softwareSolutions: makeSoftwareSolutions(
      config.whyChooseTitle,
      config.whyChooseMiddle,
      config.whyChooseDescription,
      config.whyChooseItems,
    ),
    servicesCTA: makeServicesCTA(
      config.ctaStart,
      config.ctaSpan,
      config.ctaEnd,
      config.ctaDescription,
    ),
    whatWeDo: makeWhatWeDo(
      config.whatWeDoTitle,
      config.whatWeDoDescription,
      config.whatWeDoMainDescription,
      config.whatWeDoItems,
    ),
    solutionsWeDeliver: makeSolutionsWeDeliver(
      config.solutionTitle,
      config.solutionSpan,
      config.solutionDescription,
      config.solutionItems,
    ),
    industries: makeIndustries(
      config.industryTitle,
      config.industryGradient,
      config.industryAfter,
      config.industryDescription,
      config.industryItems,
    ),
    faq: makeFaq(config.faqTitle, config.faqSpan, config.faqItems),
  };
}

function makeSubServicePageData(config: {
  serviceName: string;
  subServiceName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  whatYouGetTitle: string;
  whatYouGetDescription1: string;
  whatYouGetDescription2: string;
  focusTitle: string;
  focusDescription: string;
  focusPoints: { title: string; description: string }[];
  solutionTitle: string;
  solutionSpan: string;
  solutionDescription: string;
  solutionItems: { title: string; description: string }[];
  processTitle: string;
  processDescription: string;
  processMainDescription: string;
  processItems: { title: string; description: string }[];
  industriesTitle: string;
  industriesDescription: string;
  industries: { title: string; description: string; link: string; bgImage: string }[];
  faqTitle: string;
  faqItems: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  techStackData?: TechStackData | null;
  schema?: string;
}): SubServicePageData {
  const heroImage = "/images/home/Software-Development.webp";
  const blogItems = DummyBlogData.slice(0, 5).map((blog) => ({
    id: String(blog.id),
    title: blog.title,
    description: blog.description ?? "",
    image: blog.imageUrl,
    stack: blog.blogCategory,
    slug: blog.slug,
  }));

  const caseStudies = caseStudyData.slice(0, 4).map((item) => ({
    id: item.id,
    brand: item.brandTitle ?? "RASTAH",
    title: item.title,
    description:
      item.description ??
      `We deliver ${config.subServiceName.toLowerCase()} services with scalable delivery, secure integration, and long-term value.`,
    solution: config.solutionTitle,
    imageDesktop: item.imageUrl,
    imageMobile: item.imageUrl,
    href: item.href,
    stats: [],
  }));

  return {
    heroSlides: makeHero(
      config.heroTitle,
      config.heroSubtitle,
      config.heroDescription,
      heroImage,
      "Let's Discuss Your Idea",
      "#contact",
    ),
    whatYouGet: makeWhatYouGet(
      config.whatYouGetTitle,
      config.serviceName,
      config.subServiceName,
      config.whatYouGetDescription1,
      config.whatYouGetDescription2,
      "Let's Discuss Your Idea",
      "#contact",
    ),
    technologyExpertise: {
      mainTitle: config.focusTitle,
      mainDescription: config.focusDescription,
      cards: config.focusPoints.map((point, index) => ({
        id: index + 1,
        title: point.title,
        description: [point.description],
        icon: defaultTechExpertiseIcon,
      })),
    },
    solutionsWeDeliver: makeSolutionsWeDeliver(
      config.solutionTitle,
      config.solutionSpan,
      config.solutionDescription,
      config.solutionItems,
    ),
    outsourcingModels: outsourcingModelsData,
    faq: makeFaq(config.faqTitle, "FAQs", config.faqItems),
    contactHero: {
      title: config.ctaTitle,
      description: config.ctaDescription,
      backgroundImage: heroImage,
      imageAlt: `${config.subServiceName} CTA`,
      buttonText: config.ctaButtonText,
      buttonLink: config.ctaButtonLink,
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    techStackData: config.techStackData ?? abouttechStackData,
    caseStudies,
    whatWeDo: makeWhatWeDo(
      config.processTitle,
      config.processDescription,
      config.processMainDescription,
      config.processItems,
    ),
    blogs: blogItems,
    industries: makeIndustries(
      config.industriesTitle,
      "Empowering Every",
      "Industry Digitally",
      config.industriesDescription,
      config.industries,
    ),
    addScheema: config.schema ?? "",
  };
}

export const serviceMenuItems: ServiceMenuItem[] = [
  {
    id: 1,
    name: "Software Development",
    slug: "software-development",
    href: "/services/software-development",
    icon: "/icons/cloud.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 101, name: "Custom Software Development", slug: "custom", href: "/services/software-development/custom" },
      { id: 102, name: "Enterprise Software Development", slug: "enterprise", href: "/services/software-development/enterprise" },
      { id: 103, name: "MVP Development", slug: "mvp", href: "/services/software-development/mvp" },
      { id: 104, name: "Software Development Outsourcing", slug: "outsourcing", href: "/services/software-development/outsourcing" },
      { id: 105, name: "Full-Stack Development", slug: "full-stack", href: "/services/software-development/full-stack" },
      { id: 106, name: "Front-End Development", slug: "frontend", href: "/services/software-development/frontend" },
      { id: 107, name: "Back-End Development", slug: "backend", href: "/services/software-development/backend" },
    ],
  },
  {
    id: 2,
    name: "Application Development",
    slug: "application-development",
    href: "/services/application-development",
    icon: "/icons/building.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 201, name: "Application Development Services", slug: "overview", href: "/services/application-development/overview" },
      { id: 202, name: "Mobile App Development", slug: "mobile", href: "/services/application-development/mobile" },
      { id: 205, name: "Mobile App Consulting", slug: "mobile-app-consulting", href: "/services/application-development/mobile-app-consulting" },
      { id: 203, name: "Desktop Application Development", slug: "desktop", href: "/services/application-development/desktop" },
      { id: 204, name: "Web Application Development", slug: "web", href: "/services/application-development/web" },
    ],
  },
  {
    id: 3,
    name: "AI & Machine Learning",
    slug: "ai-ml",
    href: "/services/ai-ml",
    icon: "/icons/ai-brain.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 301, name: "AI Consulting Services", slug: "consulting", href: "/services/ai-ml/consulting" },
      { id: 302, name: "AI Software Development", slug: "ai-software-development", href: "/services/ai-ml/ai-software-development" },
      { id: 303, name: "Generative AI Development", slug: "generative-ai", href: "/services/ai-ml/generative-ai" },
      { id: 304, name: "Machine Learning Services", slug: "machine-learning", href: "/services/ai-ml/machine-learning" },
      { id: 305, name: "Agentic AI Development", slug: "agentic-ai", href: "/services/ai-ml/agentic-ai" },
    ],
  },
  {
    id: 4,
    name: "Data & Analytics",
    slug: "data-analytics",
    href: "/services/data-analytics",
    icon: "/icons/data-line.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 401, name: "Business Intelligence Services", slug: "business-intelligence", href: "/services/data-analytics/business-intelligence" },
      { id: 402, name: "Data Engineering / Big Data", slug: "data-engineering", href: "/services/data-analytics/data-engineering" },
    ],
  },
  {
    id: 5,
    name: "Design",
    slug: "design",
    href: "/services/design",
    icon: "/icons/browser.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 501, name: "UI/UX Design Services", slug: "ui-ux", href: "/services/design/ui-ux" },
    ],
  },
  {
    id: 6,
    name: "Quality Assurance",
    slug: "quality-assurance",
    href: "/services/quality-assurance",
    icon: "/icons/cloud.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 601, name: "QA & Software Testing Services", slug: "testing", href: "/services/quality-assurance/testing" },
    ],
  },
  {
    id: 7,
    name: "Infrastructure & DevOps",
    slug: "infrastructure-devops",
    href: "/services/infrastructure-devops",
    icon: "/icons/cloud.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 701, name: "DevOps Services & Solutions", slug: "devops", href: "/services/infrastructure-devops/devops" },
      { id: 702, name: "Cloud Services / Cloud Migration", slug: "cloud", href: "/services/infrastructure-devops/cloud" },
    ],
  },
  {
    id: 8,
    name: "Integration & APIs",
    slug: "integration-api",
    href: "/services/integration-api",
    icon: "/icons/building.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 801, name: "Custom API Development", slug: "custom-api", href: "/services/integration-api/custom-api" },
      { id: 802, name: "CMS Development", slug: "cms", href: "/services/integration-api/cms" },
      { id: 803, name: "ERP Software Development", slug: "erp", href: "/services/integration-api/erp" },
    ],
  },
  {
    id: 9,
    name: "Automation & Process",
    slug: "automation",
    href: "/services/automation",
    icon: "/icons/ai-brain.svg",
    imageUrl: "/images/megamenu-newsletter.png",
    children: [
      { id: 901, name: "Business Process Automation", slug: "bpa", href: "/services/automation/bpa" },
    ],
  },
];

export const parentRouteAliases: Record<string, string> = {
  "custom-software-development": "software-development",
  "ai-automation": "ai-ml",
  "data-science": "data-analytics",
  "business-intelligence": "data-analytics/business-intelligence",
  "staff-augmentation": "hire-developers",
};

export const subRouteAliases: Record<string, string> = {
  "custom-software-development/application-development": "application-development",
  "custom-software-development/backend-development": "software-development/backend",
  "custom-software-development/web-development": "software-development/full-stack",
  "custom-software-development/full-stack-development": "software-development/full-stack",
  "custom-software-development/outsourcing": "software-development/outsourcing",
  "custom-software-development/software-outsourcing": "software-development/outsourcing",
  "custom-software-development/mobile-development": "application-development/mobile",
  "custom-software-development/cms-development": "integration-api/cms",
  "software-development/front-end": "software-development/frontend",
  "software-development/full-stack-development": "software-development/full-stack",
  "software-development/software-outsourcing": "software-development/outsourcing",
  "ai-automation/business-process-automation": "automation/bpa",
  "ai-automation/sales-automation": "automation/bpa",
  "ai-automation/marketing-automation": "automation/bpa",
  "ai-automation/low-code-automation": "automation/bpa",
  "ai-automation/no-code-automation": "automation/bpa",
  "ai-automation/hr-automation": "automation/bpa",
  "ai-automation/calling-automation": "automation/bpa",
  "ai-automation/appointment-automation": "automation/bpa",
  "ai-automation/manual-automation": "automation/bpa",
  "ai-automation/email-automation": "automation/bpa",
  "ai-automation/operation-automation": "automation/bpa",
  "data-science/data-analytics": "data-analytics",
  "data-science/machine-learning-models": "ai-ml/machine-learning",
};

export const parentServicePageCopies: Record<string, ParentPageCopy> = {
  "software-development": {
    ...makeParentCopy({
      title: "Software Development Services",
      heroTitle: "Building Scalable Software",
      heroSubtitle: "",
      heroDescription:
        "We design secure, scalable software solutions that help modern businesses move faster, streamline operations, and turn ambitious ideas into reliable digital products.",
      whatYouGetTitle1: "Our Core Tech Stack for",
      whatYouGetSpan: "Software Development",
      whatYouGetTitle2: "Services",
      whatYouGetDescription1:
        "From discovery and architecture through launch and optimization, we turn complex business needs into clear product roadmaps and dependable delivery plans.",
      whatYouGetDescription2:
        "Our team blends modern engineering, UI/UX thinking, automation, and cloud-ready architecture to build software that is maintainable, adaptable, and ready to scale.",
      whyChooseTitle: "Why Choose TECHIONIK",
      whyChooseMiddle: "for Software Development",
      whyChooseDescription:
        "We build software that drives business growth and long-term value. Our expert teams combine transparent delivery, modern engineering practices, and a product-first mindset to deliver secure, scalable digital solutions.",
      whyChooseItems: [
        {
          title: "Global Trust & Proven Expertise",
          description:
            "We bring a delivery mindset shaped by years of building reliable software systems across different industries.",
        },
        {
          title: "Full-Cycle Development",
          description:
            "We support the full product journey, from discovery and design to engineering, testing, launch, and post-release improvements.",
        },
        {
          title: "Certified Quality & Security",
          description:
            "Security, reliability, and quality are built into every stage of delivery so teams can ship with confidence.",
        },
        {
          title: "Innovation & Technical Excellence",
          description:
            "We stay close to modern engineering practices, emerging AI capabilities, and cloud-native patterns so your platform stays future-ready.",
        },
      ],
      ctaStart: "Streamline Your Business Operations with",
      ctaSpan: "Software",
      ctaEnd: "Solutions",
      ctaDescription:
        "Turn manual workflows into secure, scalable digital systems with a software partner that understands product, architecture, and growth.",
      whatWeDoTitle: "Consistency is Key to Our Delivery Process",
      whatWeDoDescription:
        "We follow the same framework regardless of the project so teams get clarity, structure, and predictable progress from the first workshop through delivery.",
      whatWeDoMainDescription:
        "A shared process keeps communication simple and helps us move quickly without sacrificing quality.",
      whatWeDoItems: [
        { title: "Discovery", description: "We map goals, users, constraints, and success metrics before design or development begins." },
        { title: "Architecture", description: "We shape scalable technical foundations, data flows, and delivery milestones that support the product vision." },
        { title: "Build", description: "We develop the solution in focused iterations with QA, review loops, and clear communication throughout." },
        { title: "Optimize", description: "We refine performance, expand functionality, and support long-term improvements after launch." },
      ],
      solutionTitle: "Solutions",
      solutionSpan: "We Deliver",
      solutionDescription:
        "We deliver tailored software solutions that streamline operations, strengthen collaboration, and help businesses grow with measurable impact.",
      solutionItems: [
        { title: "Custom Platforms", description: "Tailored digital products designed around your workflows, users, and long-term business goals." },
        { title: "Enterprise Systems", description: "Reliable internal systems that improve visibility, automation, and team productivity across the organization." },
        { title: "Integrations", description: "Connected software ecosystems that reduce duplication, share data cleanly, and keep operations moving smoothly." },
        { title: "Cloud-Native Delivery", description: "Modern software architectures that are secure, scalable, and easier to evolve as your product grows." },
      ],
      industryTitle: "We Help Businesses ",
      industryGradient: "Use Technology to Grow, ",
      industryAfter: "Innovate, and Succeed",
      industryDescription:
        "We build industry-aware software that supports efficient workflows, better decision-making, and digital experiences tailored to each sector.",
      industryItems: [
        { title: "Healthcare", description: "Compliant digital solutions across care delivery, patient management, and healthcare analytics.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
        { title: "Finance", description: "Secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
        { title: "Retail & E-Commerce", description: "Automated retail workflows, online and offline operations, and analytics to support growth and market agility.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
        { title: "Manufacturing", description: "Production, supply chain, and business process optimization that reduce costs and improve efficiency.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
        { title: "Hi-Tech", description: "R&D acceleration, software engineering, and faster product release cycles for technology-driven companies.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
        { title: "Insurance", description: "Policy management, claims automation, and operational analytics that improve service delivery.", link: "/industries/insurance", bgImage: "/images/industries/Insurance.webp" },
      ],
      faqTitle: "Software Development",
      faqSpan: "FAQs",
      faqItems: [
        { question: "What software services do you provide?", answer: "We support custom software, web, mobile, enterprise systems, cloud delivery, integrations, and long-term product support." },
        { question: "Can you work with our current systems?", answer: "Yes. We modernize, integrate, and extend existing platforms so your current systems keep working while new capabilities are added safely." },
        { question: "How do you keep projects aligned?", answer: "We use transparent delivery, clear checkpoints, and collaborative planning to keep scope, priorities, and outcomes aligned." },
        { question: "Do you support post-launch improvements?", answer: "Yes. We stay engaged after launch for optimization, support, and feature evolution." },
      ],
      image: "/banners/Hero.webp",
      keywords: ["software development", "custom software", "digital products", "Techionik"],
    }),
  },
  "application-development": applicationDevelopmentPageCopy as ParentPageCopy,
  "ai-ml": makeParentCopy({
    title: "AI & Machine Learning Services",
    heroTitle: "Intelligent Software Engineering",
    heroSubtitle: "",
    heroDescription:
      "Get AI-driven software solutions, expert engineering, and clear collaboration to accelerate digital transformation and growth.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "AI & Machine Learning",
    whatYouGetTitle2: "Solutions",
    whatYouGetDescription1:
      "Access vetted, AI-augmented engineers who can plan, design, and ship intelligent systems that match your roadmap.",
    whatYouGetDescription2:
      "We blend prompt strategy, data engineering, model delivery, and software craftsmanship so AI initiatives become practical business outcomes.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for AI & Machine Learning",
    whyChooseDescription:
      "Our AI teams help organizations move from experimentation to production with confidence, using modern tooling, product thinking, and transparent delivery.",
    whyChooseItems: [
      { title: "AI Opportunity Discovery", description: "We identify where AI can reduce effort, improve insight, and create measurable value." },
      { title: "Production Delivery", description: "We turn ideas into working systems with engineering discipline and operational readiness." },
      { title: "Responsible AI Practices", description: "We build with governance, explainability, and risk awareness in mind." },
      { title: "Cross-Functional Collaboration", description: "We partner with product, data, and engineering teams to keep the solution aligned." },
    ],
    ctaStart: "Accelerate your roadmap with",
    ctaSpan: "AI-powered",
    ctaEnd: "engineering",
    ctaDescription:
      "Partner with TECHIONIK to turn AI opportunities into production-ready systems that automate work, improve decisions, and scale with your business.",
    whatWeDoTitle: "How We Deliver AI Systems",
    whatWeDoDescription:
      "We use a structured delivery model that keeps AI initiatives focused on measurable outcomes, safe implementation, and rapid learning.",
    whatWeDoMainDescription:
      "The process balances discovery, architecture, delivery, and iteration so you can move confidently from idea to impact.",
    whatWeDoItems: [
      { title: "Opportunity Mapping", description: "We identify high-value use cases and data requirements before build begins." },
      { title: "Model Strategy", description: "We choose the right mix of models, prompts, and integrations for the job." },
      { title: "Build & Validate", description: "We implement and test the solution against quality, safety, and performance goals." },
      { title: "Operate & Improve", description: "We monitor, tune, and extend the system once it is in production." },
    ],
    solutionTitle: "AI Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We build practical AI products that automate repetitive work, unlock insights, and help teams make better decisions faster.",
    solutionItems: [
      { title: "AI Consulting", description: "Roadmaps, opportunity assessment, and implementation guidance for AI adoption." },
      { title: "AI Software", description: "Software products enhanced with model-driven intelligence and automation." },
      { title: "Generative AI", description: "Content, knowledge, and workflow experiences powered by generative models." },
      { title: "Machine Learning", description: "Prediction, classification, and recommendation systems tailored to your data." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Use AI to Learn, ",
    industryAfter: "Automate, and Scale",
    industryDescription:
      "Our AI solutions support teams across healthcare, retail, finance, manufacturing, and more with practical intelligence and automation.",
    industryItems: [
      { title: "Healthcare", description: "Clinical and operational intelligence that supports better care and faster workflows.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Finance", description: "Risk, fraud, and decision intelligence that strengthens financial operations.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Retail", description: "Personalization, forecasting, and operational automation for retail growth.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Manufacturing", description: "Predictive maintenance, quality intelligence, and process optimization.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
      { title: "Education", description: "Intelligent learning platforms and data-driven student experiences.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
      { title: "Hi-Tech", description: "AI-native product development and innovation acceleration for tech teams.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
    ],
    faqTitle: "AI & Machine Learning",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Where can AI deliver the most value?", answer: "AI works well in decision support, content workflows, prediction, personalization, and repetitive process automation." },
      { question: "Do you help with data readiness?", answer: "Yes. We can assess, clean, and structure the data foundation needed for production AI systems." },
      { question: "Can you support generative AI use cases?", answer: "Absolutely. We build practical generative AI experiences for knowledge, content, and workflow use cases." },
      { question: "Do you work with internal teams?", answer: "Yes. We collaborate closely with product, data, and engineering teams to keep delivery aligned." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["AI development", "machine learning", "generative AI", "agentic AI", "Techionik"],
  }),
  "data-analytics": makeParentCopy({
    title: "Data & Analytics Services",
    heroTitle: "Transforming Data Into",
    heroSubtitle: "",
    heroDescription:
      "Make better decisions with data engineering, analytics, and business intelligence systems designed for clarity, speed, and scale.",
    whatYouGetTitle1: "Data & Analytics Solutions",
    whatYouGetSpan: "for Modern Teams",
    whatYouGetTitle2: "",
    whatYouGetDescription1:
      "We help organizations turn fragmented data into a reliable decision layer for operations, strategy, and customer experiences.",
    whatYouGetDescription2:
      "From pipelines to dashboards, we build systems that simplify reporting, improve visibility, and support action.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for Data & Analytics",
    whyChooseDescription:
      "Our data teams combine engineering, analytics, and practical delivery so leaders can trust the numbers and act quickly.",
    whyChooseItems: [
      { title: "Reliable Data Foundations", description: "We create pipelines and models that make data easier to trust and use." },
      { title: "Actionable Reporting", description: "We turn raw data into dashboards and views that support real decisions." },
      { title: "Modern Stack", description: "We use cloud, analytics, and BI tooling that scales with the business." },
      { title: "Business Alignment", description: "We focus on the metrics and workflows that matter most to your teams." },
    ],
    ctaStart: "Turn complex data into",
    ctaSpan: "clear decisions",
    ctaEnd: "",
    ctaDescription:
      "Partner with TECHIONIK to build analytics systems that simplify reporting, improve visibility, and accelerate informed action.",
    whatWeDoTitle: "How We Deliver Analytics Programs",
    whatWeDoDescription:
      "We follow a practical delivery model that balances data engineering, governance, visualization, and iteration.",
    whatWeDoMainDescription:
      "The goal is to create a dependable analytics layer that teams can actually use.",
    whatWeDoItems: [
      { title: "Discovery", description: "We map business questions, data sources, and the reporting outcomes you need." },
      { title: "Modeling", description: "We structure the data so it is consistent, measurable, and ready for insight." },
      { title: "Delivery", description: "We build dashboards, reports, and workflows that put insight in the hands of users." },
      { title: "Iteration", description: "We improve the solution as the business changes and more data becomes available." },
    ],
    solutionTitle: "Analytics Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We provide BI and data engineering services that make reporting easier, faster, and more dependable.",
    solutionItems: [
      { title: "Business Intelligence", description: "Reporting and dashboard systems that keep leadership aligned." },
      { title: "Data Engineering", description: "Reliable pipelines and storage layers for clean, usable data." },
      { title: "Analytics Strategy", description: "Roadmaps that connect reporting needs with practical delivery." },
      { title: "Operational Insight", description: "Visibility into the metrics that drive daily decisions and growth." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Make Data Work, ",
    industryAfter: "Not Just Store It",
    industryDescription:
      "Data & analytics systems support teams across finance, retail, manufacturing, healthcare, and education with clearer insight and better reporting.",
    industryItems: [
      { title: "Finance", description: "Secure reporting and operational visibility for financial teams.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Retail", description: "Inventory, sales, and customer insight for better decision-making.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Manufacturing", description: "Operational dashboards and supply chain visibility.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
      { title: "Healthcare", description: "Data-ready reporting for care, operations, and outcomes.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Education", description: "Student, platform, and learning analytics that support progress.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
      { title: "Hi-Tech", description: "Data-informed product and engineering decisions.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
    ],
    faqTitle: "Data & Analytics",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Can you improve our reporting setup?", answer: "Yes. We can consolidate reporting, improve data flow, and make the results easier to consume." },
      { question: "Do you handle data engineering too?", answer: "Yes. We support the pipelines and structures that make analytics dependable." },
      { question: "Can you connect multiple systems?", answer: "Absolutely. We integrate data across sources to create a clearer view of the business." },
      { question: "Do you build dashboards for leadership?", answer: "Yes. We design reporting experiences for executives, teams, and operational users." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["data analytics", "business intelligence", "data engineering", "Techionik"],
  }),
  "design": makeParentCopy({
    title: "Design Services",
    heroTitle: "Designing Clear, Useful",
    heroSubtitle: "",
    heroDescription:
      "Create interfaces that feel polished, intuitive, and aligned with your brand, users, and business goals.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "Design",
    whatYouGetTitle2: "Services",
    whatYouGetDescription1:
      "We combine UX strategy, interface design, and product thinking to shape experiences that are easy to understand and enjoyable to use.",
    whatYouGetDescription2:
      "Our design process keeps research, prototyping, and implementation aligned so the end result is both beautiful and practical.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for Design",
    whyChooseDescription:
      "We focus on human-centered design, clarity, and handoff-ready assets that support smooth product delivery.",
    whyChooseItems: [
      { title: "User-Centered Thinking", description: "Design decisions begin with the people using the product." },
      { title: "Practical Collaboration", description: "We work closely with product and engineering teams from concept to handoff." },
      { title: "Modern UI Patterns", description: "We create interfaces that feel current, usable, and consistent." },
      { title: "Accessible Experiences", description: "We design with accessibility and clarity in mind." },
    ],
    ctaStart: "Build experiences users",
    ctaSpan: "understand and love",
    ctaEnd: "",
    ctaDescription:
      "Partner with TECHIONIK to design products that are attractive, usable, and ready for implementation.",
    whatWeDoTitle: "Our Design Process",
    whatWeDoDescription:
      "We shape digital experiences through research, structure, and iterative refinement.",
    whatWeDoMainDescription:
      "The process keeps collaboration tight so design decisions stay aligned with business goals.",
    whatWeDoItems: [
      { title: "Discovery", description: "We learn about users, goals, and constraints before sketching solutions." },
      { title: "Wireframing", description: "We define information architecture and flow before detailed design." },
      { title: "Visual Design", description: "We turn the structure into clear, modern, branded interfaces." },
      { title: "Handoff", description: "We package the design for implementation and future iteration." },
    ],
    solutionTitle: "Design Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We support product teams with UX and UI work that turns ideas into usable digital products.",
    solutionItems: [
      { title: "UI/UX Design", description: "Interfaces and flows that improve usability and clarity." },
      { title: "Design Systems", description: "Reusable patterns that keep products consistent and scalable." },
      { title: "Prototyping", description: "Interactive concepts that validate ideas before development." },
      { title: "Product Workshops", description: "Collaborative sessions that align stakeholders before build." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Design Better, ",
    industryAfter: "Faster",
    industryDescription:
      "Design services support product teams across SaaS, fintech, healthcare, retail, and more.",
    industryItems: [
      { title: "Hi-Tech", description: "Interfaces and product systems for fast-moving digital teams.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
      { title: "Finance", description: "Clear user journeys for secure financial platforms.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Healthcare", description: "Friendly, compliant interfaces for care and admin workflows.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Retail", description: "Conversion-focused experiences for storefronts and operations.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Education", description: "Learning experiences that are easy to navigate and use.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
      { title: "Manufacturing", description: "Operational interfaces for internal tools and dashboards.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
    ],
    faqTitle: "Design",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Do you help with UX research?", answer: "Yes. We can support research, mapping, and concept validation before design begins." },
      { question: "Can you create design systems?", answer: "Yes. We build reusable systems that help teams scale product design consistently." },
      { question: "Do you collaborate with developers?", answer: "Absolutely. We keep implementation in mind throughout the design process." },
      { question: "Can you refresh an existing product?", answer: "Yes. We can modernize the interface without losing the product logic that already works." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["UI/UX design", "product design", "design systems", "Techionik"],
  }),
  "quality-assurance": makeParentCopy({
    title: "Quality Assurance Services",
    heroTitle: "QA That Protects",
    heroSubtitle: "",
    heroDescription:
      "Reduce release risk with testing services that validate functionality, performance, and user experience before launch.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "Quality Assurance",
    whatYouGetTitle2: "Services",
    whatYouGetDescription1:
      "We help teams ship confidently with testing strategies that catch issues early and keep releases stable.",
    whatYouGetDescription2:
      "Our QA work covers manual and automated testing, regression coverage, and quality gates that support predictable delivery.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for QA & Testing",
    whyChooseDescription:
      "We keep quality practical, repeatable, and aligned with the way your product actually ships.",
    whyChooseItems: [
      { title: "Testing Discipline", description: "We validate the product across the lifecycle, not just at the end." },
      { title: "Automation Mindset", description: "We look for the right places to automate without overcomplicating the stack." },
      { title: "Release Confidence", description: "We help teams release with fewer surprises and better visibility." },
      { title: "Cross-Team Fit", description: "We collaborate with product and engineering teams to keep quality moving." },
    ],
    ctaStart: "Ship with",
    ctaSpan: "confidence",
    ctaEnd: "",
    ctaDescription:
      "Partner with TECHIONIK to improve release quality, reduce regressions, and support dependable delivery.",
    whatWeDoTitle: "Our QA Approach",
    whatWeDoDescription:
      "We build quality checks into the delivery process so issues are found earlier and fixed faster.",
    whatWeDoMainDescription:
      "The result is a more stable release process with fewer surprises after launch.",
    whatWeDoItems: [
      { title: "Plan", description: "We define test coverage, risks, and acceptance criteria." },
      { title: "Validate", description: "We run functional, regression, and exploratory checks." },
      { title: "Automate", description: "We automate repeatable checks where it adds real value." },
      { title: "Stabilize", description: "We support release confidence and ongoing improvement." },
    ],
    solutionTitle: "QA Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We support development teams with quality processes that reduce bugs and improve reliability.",
    solutionItems: [
      { title: "Manual Testing", description: "Human-led validation for flows, logic, and edge cases." },
      { title: "Automation", description: "Repeatable checks for regression and critical paths." },
      { title: "Performance Testing", description: "Checks that keep speed and reliability in view." },
      { title: "Release Support", description: "Quality gates and confidence before deployment." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Ship Better, ",
    industryAfter: "Safer",
    industryDescription:
      "QA services support software teams across SaaS, fintech, healthcare, retail, and enterprise applications.",
    industryItems: [
      { title: "Hi-Tech", description: "QA support for rapidly evolving software products.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
      { title: "Finance", description: "Testing for secure and compliant financial systems.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Healthcare", description: "Quality validation for patient and clinical systems.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Retail", description: "E-commerce and customer-facing quality assurance.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Education", description: "Stable digital learning and admin workflows.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
      { title: "Manufacturing", description: "Quality for operational and industrial software tools.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
    ],
    faqTitle: "Quality Assurance",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Do you support automation?", answer: "Yes. We automate the tests that are worth repeating and keep the rest focused on human review." },
      { question: "Can you work with our current team?", answer: "Absolutely. We can join as a standalone QA function or support your existing workflow." },
      { question: "Do you handle performance checks?", answer: "Yes. We can validate speed, stability, and key user journeys before release." },
      { question: "Will QA slow down delivery?", answer: "No. Our goal is to add confidence without becoming a bottleneck." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["quality assurance", "software testing", "test automation", "Techionik"],
  }),
  "infrastructure-devops": makeParentCopy({
    title: "Infrastructure & DevOps Services",
    heroTitle: "Infrastructure That Keeps",
    heroSubtitle: "",
    heroDescription:
      "Build reliable deployment pipelines, cloud operations, and infrastructure foundations that keep products secure and scalable.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "Infrastructure & DevOps",
    whatYouGetTitle2: "Services",
    whatYouGetDescription1:
      "We help teams reduce deployment friction with cloud, automation, and operations practices that support faster releases.",
    whatYouGetDescription2:
      "The focus is on stability, observability, and practical automation that scales with your product and team.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for DevOps & Cloud",
    whyChooseDescription:
      "We help teams move faster without losing the operational guardrails that matter in production.",
    whyChooseItems: [
      { title: "Cloud Readiness", description: "We plan infrastructure with scale and resilience in mind." },
      { title: "Automation", description: "We reduce repetitive work across build, deploy, and operations." },
      { title: "Observability", description: "We keep performance and issues visible to the team." },
      { title: "Reliability", description: "We design for uptime, rollback safety, and continuity." },
    ],
    ctaStart: "Strengthen your delivery with",
    ctaSpan: "DevOps",
    ctaEnd: "and cloud foundations",
    ctaDescription:
      "Partner with TECHIONIK to improve deployment reliability, cloud operations, and release speed.",
    whatWeDoTitle: "Our DevOps Approach",
    whatWeDoDescription:
      "We set up practical workflows that make software delivery safer, faster, and easier to maintain.",
    whatWeDoMainDescription:
      "The process keeps infrastructure aligned with product delivery and operational needs.",
    whatWeDoItems: [
      { title: "Assess", description: "We review the current delivery and infrastructure environment." },
      { title: "Design", description: "We shape pipelines, environments, and automation patterns." },
      { title: "Implement", description: "We configure the platform and supporting workflows." },
      { title: "Operate", description: "We monitor, adjust, and improve the system over time." },
    ],
    solutionTitle: "Infrastructure Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We help teams standardize delivery, reduce manual work, and improve confidence in production changes.",
    solutionItems: [
      { title: "DevOps Services", description: "Build and release workflows that support a faster development cadence." },
      { title: "Cloud Migration", description: "Move workloads to cloud platforms with care and continuity." },
      { title: "Infrastructure Automation", description: "Reduce repetitive operational effort with automation." },
      { title: "Monitoring & Support", description: "Keep performance visible and operations reliable." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Scale Infrastructure, ",
    industryAfter: "Not Complexity",
    industryDescription:
      "Cloud and DevOps support teams across software, finance, healthcare, retail, and enterprise operations.",
    industryItems: [
      { title: "Hi-Tech", description: "Delivery foundations for fast-moving software teams.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
      { title: "Finance", description: "Secure and reliable environments for regulated systems.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Healthcare", description: "Stable operations for sensitive and critical systems.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Retail", description: "Cloud operations for high-traffic commerce platforms.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Manufacturing", description: "Infrastructure for operational and industrial tools.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
      { title: "Education", description: "Reliable platforms for learning and admin systems.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
    ],
    faqTitle: "Infrastructure & DevOps",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Can you help us migrate to cloud?", answer: "Yes. We can plan and support migrations with an eye on stability and continuity." },
      { question: "Do you set up CI/CD?", answer: "Absolutely. We build practical deployment pipelines that fit the team and product." },
      { question: "Can you improve observability?", answer: "Yes. We can add monitoring and logging that helps teams act quickly." },
      { question: "Do you support ongoing operations?", answer: "Yes. We can stay involved to keep systems healthy after launch." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["DevOps", "cloud migration", "infrastructure", "Techionik"],
  }),
  "integration-api": makeParentCopy({
    title: "Integration & API Services",
    heroTitle: "Connected Systems,",
    heroSubtitle: "",
    heroDescription:
      "Connect products, platforms, and operations through reliable APIs and integrations that keep data moving cleanly across systems.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "Integration & APIs",
    whatYouGetTitle2: "Services",
    whatYouGetDescription1:
      "We design API and integration work that reduces friction between systems and supports a consistent data layer.",
    whatYouGetDescription2:
      "Our approach keeps architecture, security, and scalability in view so integrations remain dependable over time.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for APIs & Integrations",
    whyChooseDescription:
      "We keep integrations practical, maintainable, and aligned to the way your business already works.",
    whyChooseItems: [
      { title: "API Discipline", description: "We build interfaces that are stable, documented, and easy to maintain." },
      { title: "System Connectivity", description: "We connect products, services, and data sources across the stack." },
      { title: "Security Awareness", description: "We keep authentication, authorization, and data handling in scope." },
      { title: "Future Flexibility", description: "We build with change in mind so systems can evolve." },
    ],
    ctaStart: "Simplify your stack with",
    ctaSpan: "better integration",
    ctaEnd: "",
    ctaDescription:
      "Partner with TECHIONIK to connect platforms, automate workflows, and keep data in sync across systems.",
    whatWeDoTitle: "Our Integration Approach",
    whatWeDoDescription:
      "We make integrations predictable by shaping the flow, the contracts, and the operating model before launch.",
    whatWeDoMainDescription:
      "The process gives teams a clearer way to connect systems without creating hidden complexity.",
    whatWeDoItems: [
      { title: "Map", description: "We identify the systems, data, and workflows that need to connect." },
      { title: "Design", description: "We define the API or integration model and the security shape." },
      { title: "Build", description: "We implement the connections and validate the data flow." },
      { title: "Support", description: "We monitor and refine the integration over time." },
    ],
    solutionTitle: "Integration Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We build API-first and platform integration work that reduces manual effort and improves reliability.",
    solutionItems: [
      { title: "Custom APIs", description: "Secure interfaces that expose and consume business capabilities." },
      { title: "CMS Integration", description: "Content and workflow connectivity for marketing and product teams." },
      { title: "ERP Connectivity", description: "System integration that keeps core operations aligned." },
      { title: "Workflow Automation", description: "Connected processes that reduce repetitive manual work." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Connect Systems, ",
    industryAfter: "Not Silo Them",
    industryDescription:
      "API and integration services support software, enterprise, commerce, healthcare, and operations teams.",
    industryItems: [
      { title: "Hi-Tech", description: "Product and platform integrations for software teams.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
      { title: "Finance", description: "System connectivity for secure and regulated environments.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Healthcare", description: "Integrations that move data safely across clinical systems.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Retail", description: "Commerce and operations systems connected without friction.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Manufacturing", description: "Enterprise and operational system connectivity.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
      { title: "Education", description: "Connected learning, admin, and reporting systems.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
    ],
    faqTitle: "Integration & APIs",
    faqSpan: "FAQs",
    faqItems: [
      { question: "Can you integrate our existing tools?", answer: "Yes. We support integration across product, back office, and third-party systems." },
      { question: "Do you work with APIs only?", answer: "No. We can also support CMS, ERP, and broader system integration." },
      { question: "How do you keep integrations secure?", answer: "We keep authentication, permissions, and data flow in scope from the start." },
      { question: "Can you modernize older integrations?", answer: "Yes. We can refactor or replace brittle integrations with cleaner patterns." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["API development", "integration services", "CMS development", "ERP integration", "Techionik"],
  }),
  "automation": makeParentCopy({
    title: "Automation & Process Services",
    heroTitle: "Automation That Reduces",
    heroSubtitle: "",
    heroDescription:
      "Automate repeatable processes with solutions that improve speed, reduce errors, and free teams to focus on higher-value work.",
    whatYouGetTitle1: "What you get with TECHIONIK",
    whatYouGetSpan: "Automation",
    whatYouGetTitle2: "Services",
    whatYouGetDescription1:
      "We help organizations identify the best processes to automate and deliver practical solutions that save time and effort.",
    whatYouGetDescription2:
      "Our approach keeps people, systems, and workflow design in sync so automation creates real operational value.",
    whyChooseTitle: "Why TECHIONIK",
    whyChooseMiddle: "for Automation",
    whyChooseDescription:
      "We focus on business processes that are repetitive, measurable, and worth improving with automation.",
    whyChooseItems: [
      { title: "Process Focus", description: "We look for high-impact workflows that are ready for automation." },
      { title: "Practical Delivery", description: "We keep the solution simple enough to own and scale." },
      { title: "Workflow Alignment", description: "We work with the teams that actually use the process." },
      { title: "Ongoing Improvement", description: "We design for iteration so the automation can evolve." },
    ],
    ctaStart: "Simplify workflows with",
    ctaSpan: "automation",
    ctaEnd: "",
    ctaDescription:
      "Partner with TECHIONIK to automate business processes, reduce manual work, and improve day-to-day operations.",
    whatWeDoTitle: "Our Automation Approach",
    whatWeDoDescription:
      "We analyze the workflow first so the automation fits the business instead of forcing the business to adapt.",
    whatWeDoMainDescription:
      "The process helps us build automation that is useful, maintainable, and measurable.",
    whatWeDoItems: [
      { title: "Assess", description: "We review the current workflow, tools, and pain points." },
      { title: "Design", description: "We define the automation logic, triggers, and outcomes." },
      { title: "Implement", description: "We build and test the workflow with the right controls." },
      { title: "Improve", description: "We refine the automation as the process matures." },
    ],
    solutionTitle: "Automation Solutions",
    solutionSpan: "We Deliver",
    solutionDescription:
      "We build automation programs that improve productivity and reduce unnecessary manual handling.",
    solutionItems: [
      { title: "Business Process Automation", description: "Streamline recurring work across teams and systems." },
      { title: "Workflow Design", description: "Map and improve process logic before the build starts." },
      { title: "Operational Automation", description: "Improve the speed and consistency of everyday tasks." },
      { title: "Support & Optimization", description: "Keep automation useful as the business changes." },
    ],
    industryTitle: "We Help Businesses ",
    industryGradient: "Automate Work, ",
    industryAfter: "Not People",
    industryDescription:
      "Automation services support teams across finance, healthcare, retail, manufacturing, and operations-heavy businesses.",
    industryItems: [
      { title: "Finance", description: "Reduce repetitive handling in secure financial workflows.", link: "/industries/finance", bgImage: "/banners/dollers.webp" },
      { title: "Healthcare", description: "Streamline admin and operational processes without losing control.", link: "/industries/healthcare", bgImage: "/images/industries/Healthcare.webp" },
      { title: "Retail", description: "Automation for order, inventory, and customer-facing workflows.", link: "/industries/retail", bgImage: "/images/industries/Retail.webp" },
      { title: "Manufacturing", description: "Production and operations automation that improves flow.", link: "/industries/manufacturing", bgImage: "/images/industries/Manufacturing.webp" },
      { title: "Education", description: "Back-office and student workflow automation for institutions.", link: "/industries/education", bgImage: "/images/industries/Education.webp" },
      { title: "Hi-Tech", description: "Automation that supports product and support teams.", link: "/industries/hi-tech", bgImage: "/images/industries/HiTech.webp" },
    ],
    faqTitle: "Automation",
    faqSpan: "FAQs",
    faqItems: [
      { question: "What kind of processes can be automated?", answer: "We focus on repetitive, measurable workflows that are suitable for structured improvement." },
      { question: "Can you combine automation with AI?", answer: "Yes. We can design workflows that use AI where it adds practical value." },
      { question: "Do you support rollout and maintenance?", answer: "Absolutely. We can support launch, refinement, and ongoing improvement." },
      { question: "Will automation fit our current tools?", answer: "We design around the systems you already use whenever possible." },
    ],
    image: "/banners/Software-Development.webp",
    keywords: ["business process automation", "workflow automation", "automation services", "Techionik"],
  }),
};

export function getCanonicalParentSlug(slug: string) {
  return parentRouteAliases[slug] ?? slug;
}

export function getCanonicalSubRoute(serviceSlug: string, subSlug: string) {
  const key = `${serviceSlug}/${subSlug}`;
  return subRouteAliases[key] ?? key;
}

export function getParentServicePageCopyBySlug(slug: string): ParentPageCopy | null {
  const canonicalSlug = getCanonicalParentSlug(slug);
  return parentServicePageCopies[canonicalSlug] ?? null;
}

function buildGenericSubServicePageData(
  serviceSlug: string,
  subServiceSlug: string,
): SubServicePageData {
  const serviceName = slugLabel(serviceSlug);
  const subServiceName = slugLabel(subServiceSlug);
  const summary = `We deliver ${subServiceName.toLowerCase()} services under the ${serviceName} umbrella, with clear scope, reliable delivery, and a focus on business outcomes.`;
  const focusPoints = [
    { title: "Discovery & alignment", description: "We define the problem, users, and delivery goals before implementation begins." },
    { title: "Architecture & planning", description: "We shape the technical approach so the work stays maintainable and scalable." },
    { title: "Build & validate", description: "We implement the solution and validate it against quality and performance goals." },
    { title: "Launch & support", description: "We help the work land cleanly and stay useful after launch." },
  ];
  const solutionCards = [
    { title: "Strategy", description: "A clear plan that matches scope, timeline, and the delivery model." },
    { title: "Implementation", description: "Practical build work that moves the project toward launch." },
    { title: "Integration", description: "Connections with the tools and systems your team already uses." },
    { title: "Support", description: "Post-launch help to keep the outcome stable and evolving." },
  ];
  const processCards = [
    { title: "Discovery", description: "We understand the use case, constraints, and desired outcomes." },
    { title: "Design", description: "We map the architecture and user flow before build starts." },
    { title: "Delivery", description: "We create the solution in an iterative, visible way." },
    { title: "Improvement", description: "We support optimization and future changes after launch." },
  ];
  const industryNames = [
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
    "Education",
    "Hi-Tech",
  ];

  const industries = makeIndustries(
    "We Help Businesses ",
    "Use Technology to Grow, ",
    "Innovate, and Succeed",
    `We support ${serviceName.toLowerCase()} projects across industries with dependable systems and practical delivery.`,
    industryNames.map((name, index) => ({
      title: name,
      description: `Custom ${subServiceName.toLowerCase()} delivery for ${name.toLowerCase()} teams.`,
      link: `/industries/${name.toLowerCase().replace(/\s+/g, "-")}`,
      bgImage: [
        "/images/industries/Healthcare.webp",
        "/banners/dollers.webp",
        "/images/industries/Retail.webp",
        "/images/industries/Manufacturing.webp",
        "/images/industries/Education.webp",
        "/images/industries/HiTech.webp",
      ][index],
    })),
  );

  return {
    heroSlides: makeHero(
      subServiceName,
      serviceName,
      summary,
      "/images/home/Software-Development.webp",
    ),
    whatYouGet: makeWhatYouGet(
      "What you get with TECHIONIK",
      subServiceName,
      serviceName,
      summary,
      `We keep ${subServiceName.toLowerCase()} delivery aligned with your roadmap, tech stack, and business goals.`,
      "Let's Discuss Your Idea",
      "#contact",
    ),
    technologyExpertise: {
      mainTitle: `${subServiceName} Services We Provide`,
      mainDescription: `We deliver ${subServiceName.toLowerCase()} solutions with a practical engineering approach and clear delivery focus.`,
      cards: focusPoints.map((point, index) => ({
        id: index + 1,
        title: point.title,
        description: [point.description],
        icon: defaultTechExpertiseIcon,
      })),
    },
    solutionsWeDeliver: makeSolutionsWeDeliver(
      "Solutions",
      "We Deliver",
      `We build ${subServiceName.toLowerCase()} offerings that fit the scope, integrations, and operating model of your project.`,
      solutionCards,
    ),
    outsourcingModels: outsourcingModelsData,
    faq: makeFaq(`${subServiceName}`, "FAQs", [
      {
        question: `What is included in your ${subServiceName.toLowerCase()} service?`,
        answer: `We cover discovery, architecture, implementation, testing, and support depending on the engagement model.`,
      },
      {
        question: `Can you work with our current team?`,
        answer: "Yes. We can slot into your existing process and collaborate with in-house product or engineering teams.",
      },
      {
        question: `How do you keep delivery aligned?`,
        answer: "We keep scope, checkpoints, and communication clear so the work remains predictable and useful.",
      },
      {
        question: `Do you offer support after launch?`,
        answer: "Yes. We can stay involved for improvement, maintenance, and operational support.",
      },
    ]),
    contactHero: {
      title: `Deliver ${subServiceName} that simplifies workflows and supports reliable business functionality.`,
      description: summary,
      backgroundImage: "/images/home/Software-Development.webp",
      imageAlt: subServiceName,
      buttonText: "Get Started",
      buttonLink: "/contact-us",
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    techStackData: abouttechStackData,
    caseStudies: caseStudyData.slice(0, 4).map((item) => ({
      id: item.id,
      brand: item.brandTitle ?? "RASTAH",
      title: item.title,
      description:
        item.description ??
        `We deliver ${subServiceName.toLowerCase()} services that improve reliability, integration, and business outcomes.`,
      solution: subServiceName,
      imageDesktop: item.imageUrl,
      imageMobile: item.imageUrl,
      href: item.href,
      stats: [],
    })),
    whatWeDo: makeWhatWeDo(
      `Our ${subServiceName} Process`,
      `We use a structured delivery flow for ${subServiceName.toLowerCase()} work so the team can move from idea to release with clarity.`,
      `The same framework keeps scope, quality, and communication aligned.`,
      processCards,
    ),
    blogs: DummyBlogData.slice(0, 5).map((blog) => ({
      id: String(blog.id),
      title: blog.title,
      description: blog.description ?? "",
      image: blog.imageUrl,
      stack: blog.blogCategory,
      slug: blog.slug,
    })),
    industries,
    addScheema: "",
  };
}

const staticSubServicePageData: Record<string, SubServicePageData> = {
  "ai-ml/consulting": aiConsultingPageData as SubServicePageData,
  "ai-ml/ai-software-development": aiSoftwareDevelopmentPageData as SubServicePageData,
  "ai-ml/generative-ai": generativeAiDevelopmentPageData as SubServicePageData,
  "ai-ml/machine-learning": machineLearningDevelopmentPageData as SubServicePageData,
  "ai-ml/agentic-ai": agenticAiDevelopmentPageData as SubServicePageData,
  "integration-api/custom-api": customApiDevelopmentPageData as SubServicePageData,
  "integration-api/cms": cmsDevelopmentPageData as SubServicePageData,
  "integration-api/erp": erpSoftwareDevelopmentPageData as SubServicePageData,
  "software-development/enterprise": enterpriseSoftwareDevelopmentPageData as SubServicePageData,
  "software-development/full-stack": fullStackDevelopmentPageData as SubServicePageData,
  "software-development/outsourcing": softwareDevelopmentOutsourcingPageData as SubServicePageData,
  "software-development/frontend": frontendDevelopmentPageData as SubServicePageData,
  "automation/bpa": businessProcessAutomationPageData as SubServicePageData,
  "infrastructure-devops/devops": devopsServicesPageData as SubServicePageData,
  "application-development/desktop": desktopAppDevelopmentPageData as SubServicePageData,
  "application-development/mobile-app-consulting": mobileAppConsultingPageData as SubServicePageData,
  "quality-assurance/testing": qaSoftwareTestingPageData as SubServicePageData,
  "software-development/backend": backendDevelopmentPageData as SubServicePageData,
  "software-development/mvp": mvpDevelopmentPageData as SubServicePageData,
  "design/ui-ux": uiUxDesignPageData as SubServicePageData,
};

export function getSubServicePageDataByRoute(
  serviceSlug: string,
  subServiceSlug: string,
): SubServicePageData | null {
  const canonicalRoute = getCanonicalSubRoute(serviceSlug, subServiceSlug);
  const direct = staticSubServicePageData[canonicalRoute];
  if (direct) {
    return direct;
  }

  if (canonicalRoute === "application-development/overview") {
    return null;
  }

  const [canonicalServiceSlug, canonicalSubSlug] = canonicalRoute.split("/");
  if (!canonicalServiceSlug || !canonicalSubSlug) {
    return null;
  }

  return buildGenericSubServicePageData(canonicalServiceSlug, canonicalSubSlug);
}

export function getParentServiceRedirect(slug: string) {
  return parentRouteAliases[slug] ?? null;
}

export function getSubServiceRedirect(serviceSlug: string, subServiceSlug: string) {
  return subRouteAliases[`${serviceSlug}/${subServiceSlug}`] ?? null;
}

export const servicesTechStackData: TechStackData = abouttechStackData;
export const servicesData = servicesDataHome;
export const servicesOutsourcingData = outsourcingModelsData;
export const servicesTalentPoolData = talentPoolDataHome;
export const servicesSoftwareInsightsData = SoftwareInsightData;

export { makeParentCopy, makeSubServicePageData, makeHero, makeWhatYouGet, makeIndustries, makeFaq, makeSolutionsWeDeliver, makeSoftwareSolutions, makeWhatWeDo };
