import type { HeroSlide } from "@/data/HeroSectionData";
import type { FAQ } from "@/data/FAQS";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { TechnologyExpertise } from "@/data/technologyExpertiseData";
import type { ContactHeroData } from "@/data/ConnectHero";
import type { CaseStudyType } from "@/views/home/CaseStudies";

import { getSubService } from "./getSubService";
import type { Industries, SubServiceData } from "../types/subService.type";
import { WhatWeDo } from "@/data/what-we-do-data";

const SUB_SERVICE_API_FALLBACK_IMAGE = "/banners/Hero.webp";
const SOLUTIONS_ICON_FALLBACK = "/icons/cloud.svg";
const OUTSOURCING_IMAGE_FALLBACK =
  "/images/ParentServices/outsourcingmedia/full.webp";
const OUTSOURCING_HOVER_IMAGE_FALLBACK =
  "/images/ParentServices/outsourcingmedia/colorfull.webp";
const TECH_EXPERTISE_ICON_FALLBACK = "/icons/box-icon.png";
const CONTACT_HERO_BG_FALLBACK = "/banners/buissness-banner.webp";
const BLOG_PLACEHOLDER = "/images/home/blog-one.png";

function stripHtml(html?: string) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n")
    .replace(/<\/?p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function htmlToLines(html?: string): string[] {
  const text = html ? stripHtml(html) : "";
  if (!text) return [];

  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return lines.length ? lines : [text];
}

export interface SubServiceBlogFrontend {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
}

export interface SubServicePageData {
  heroSlides: HeroSlide[];
  whatYouGet: WhatYouGett | null;
  technologyExpertise: TechnologyExpertise | null;
  solutionsWeDeliver: SolutionWeDeliver;
  outsourcingModels: OutsourcingSlide | null;
  faq: FAQ | null;
  contactHero: ContactHeroData | null;
  caseStudies: CaseStudyType[];
  whatWeDo: WhatWeDo;
  blogs: SubServiceBlogFrontend[];
  industries: any; 
  addScheema?: string;
}

// ── Map Industries ──
export function mapIndustriesFromSubService(industriesFromApi: Industries[] = []) {
  return {
    title: "We Help Businesses ",
    gradientTitle: "Use Technology to Grow, ",
    afterGradientTitle: "Innovate, and Succeed",
    description:
      "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",
    slides: (industriesFromApi || []).map((industry) => ({
      title: industry?.title ?? " ",
      description:
        industry?.shortDescription ?? industry?.metaDescription ?? "",
      link: `/industries/${industry?.slug}`,
      bgImage: industry?.imageUrl ?? "/banners/dollers.webp",
      icon: "", // Default empty icon since API doesn't provide icons
    })),
  };
}

// ── Map SubService API Data ──
function mapSubServiceToPageData(apiData: SubServiceData): SubServicePageData {
  const t: any = apiData?.subService.templateData;
  const parentService = apiData?.service;
  const subService = apiData?.subService;

  // ── 1. Hero Slides ──
  const heroSlides: HeroSlide[] =
    t?.heroSlides && Array.isArray(t.heroSlides) && t.heroSlides.length > 0
      ? t.heroSlides.map((slide: any) => ({
          title: slide?.title ?? subService?.name ?? "Hero Title",
          subtitle: slide?.subtitle ?? " ",
          description:
            stripHtml(slide?.description ?? subService?.shortDescription) ||
            "Discover our innovative solutions",
          video: slide?.video ?? undefined,
          image:
            slide?.image ??
            (slide?.video ? "" : SUB_SERVICE_API_FALLBACK_IMAGE),
          ctaText: slide?.ctaText || "Get Started",
          ctaLink: slide?.ctaLink || "/contact-us",
          imageAlt: slide?.imageAlt || "SubService Image",
        }))
      : [
          {
            title: t?.hero?.title ?? subService?.name ?? "Hero Title",
            subtitle: t?.hero?.subtitle ?? " ",
            description:
              stripHtml(
                t?.hero?.description ??
                  t?.cta?.description ??
                  subService?.shortDescription,
              ) ?? "Discover our innovative solutions",
            video: t?.hero?.video ?? undefined,
            image:
              t?.hero?.image ??
              (t?.hero?.video ? "" : SUB_SERVICE_API_FALLBACK_IMAGE),
            ctaText: t?.cta?.ctaText || "Get Started",
            ctaLink: t?.cta?.ctaLink || "/contact-us",
            imageAlt: t?.hero?.imageAlt || "SubService Image",
          },
        ];

  // ── 2. Why Choose Techionik (What You Get) ──
  const whatYouGet: WhatYouGett | null =
    t?.extraSection && t.extraSection.title
      ? {
          id: 1,
          title1: t?.extraSection?.title ?? "This the extra section",
          spanTitle: "",
          title2: "",
          reviews: [
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
          ],
          RightDescription1:
            stripHtml(t?.extraSection?.description) ?? "",
          RightDescription2: "",
        }
      : {
          id: 1,
          title1: "This is Extra Section",
          spanTitle: "Techionik",
          title2: "",
          reviews: [
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
          ],
          RightDescription1: subService?.shortDescription ?? "",
          RightDescription2: "",
        };

  // ── 3. Technology Expertise ──
  const technologyExpertise: TechnologyExpertise | null = t?.whatWeDo?.items
    ?.length
    ? {
        mainTitle: t?.whatWeDo?.title ?? "Technology Expertise",
        mainDescription:
          stripHtml(t?.whatWeDo?.description) ??
          "Our comprehensive technology expertise",
        cards: t?.whatWeDo?.items.map((item: any, idx: number) => ({
          id: idx + 1,
          title: item?.title ?? `Expertise ${idx + 1}`,
          description: htmlToLines(item?.description) ?? [
            "Specialized knowledge and experience",
          ],
          icon: TECH_EXPERTISE_ICON_FALLBACK,
        })),
      }
    : null;

  // ── 4. Solutions We Deliver ──
  const solutionsWeDeliver: SolutionWeDeliver = t?.solutionsWeDeliver?.cards
    ?.length
    ? {
        title: t?.solutionsWeDeliver?.title ?? "Solutions",
        spanTitle: t?.solutionsWeDeliver?.spanTitle ?? "We Deliver",
        description:
          stripHtml(t?.solutionsWeDeliver?.description) ??
          "We IT-enable all kinds of B2B, B2C interactions and internal Operations",
        cards: t?.solutionsWeDeliver?.cards?.map((card: any, idx: number) => ({
          id: idx + 1,
          title: card?.title ?? `Solution ${idx + 1}`,
          description: htmlToLines(card?.description) ?? [
            "Innovative solution description",
          ],
          icon: card?.icon ?? SOLUTIONS_ICON_FALLBACK,
        })),
      }
    : {
        title: "Solutions",
        spanTitle: "We Deliver",
        description:
          "We IT-enable all kinds of B2B, B2C interactions and internal Operations",
        cards: [],
      };

  // ── 5. Outsourcing Models ──
  const outsourcingModels: OutsourcingSlide | null = t?.ourOutsourcingModels
    ?.items?.length
    ? {
        title: t?.ourOutsourcingModels?.title ?? "Our Outsourcing Models",
        MiddleTitle: "",
        lastTitle: "",
        description:
          stripHtml(t?.ourOutsourcingModels?.description) ??
          "Flexible outsourcing solutions tailored to your needs",
        items: t?.ourOutsourcingModels?.items?.map(
          (item: any, idx: number) => ({
            title: item?.title ?? `Model ${idx + 1}`,
            description: stripHtml(item?.description) ?? "",
            image: item?.image ?? OUTSOURCING_IMAGE_FALLBACK,
            hoverImage: item?.hoverImage ?? OUTSOURCING_HOVER_IMAGE_FALLBACK,
            bulletPoints: htmlToLines(item?.description) ?? [],
          }),
        ),
      }
    : null;

  // ── 6. Contact Hero (CTA) ──
  // const contactHero: ContactHeroData | null =
  //   t?.cta && t?.cta?.title
  //     ? {
  //       title: t?.cta?.title ?? "Let's Connect",
  //       description: stripHtml(t?.cta?.description) ?? "Get in touch with our team to discuss your project",
  //       backgroundImage: CONTACT_HERO_BG_FALLBACK,
  //       buttonText: t?.cta?.buttonLabel ?? "Let's Talk",
  //       buttonLink: t?.cta?.buttonUrl ?? "/contact",
  //       buttonVariant: "glass",
  //       buttonIcon: "/icons/arrow-right.svg",
  //     }
  //     : null;
  const contactHero: ContactHeroData | null = t?.cta
    ? {
        title: t?.cta?.title ?? "Let's Connect",
        description:
          stripHtml(t?.cta?.description) ??
          "Get in touch with our team to discuss your project",
        backgroundImage: t?.cta?.image ?? "/banners/dollers.webp",
        imageAlt: t?.cta?.imageAlt || "CTA Image",
        buttonText: t?.cta?.buttonLabel || "Contact Us",
        buttonLink: t?.cta?.buttonUrl || "/contact-us",
        buttonVariant: "glass",
        buttonIcon: "/icons/arrow-right.svg",
      }
    : null;
  const whatWeDo: WhatWeDo = t?.whyChooseTechionik
    ? {
        title: t?.whyChooseTechionik?.title ?? "What We Do",
        descriptiption: stripHtml(t?.whyChooseTechionik?.description) ?? "",
        // mainDescription: stripHtml(t?.whyChooseTechionik?.description),
        card: (t?.whyChooseTechionik?.items ?? []).map(
          (item: any, idx: number) => ({
            id: idx + 1,
            title: item?.title,
            description: item?.description,
          }),
        ),
      }
    : {
        title: "What We Do",
        descriptiption:
          "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
        card: [],
      };

  // ── 7. FAQ ──
  const rawFaqs = Array.isArray(t?.faq)
    ? t.faq
    : (t?.faq?.faqItem ?? t?.faq?.faq ?? []);
  const faq: FAQ | null = rawFaqs?.length
    ? {
        mainTitle: "",
        spanTitle: "FAQs",
        faq: rawFaqs?.map((item: any, idx: number) => ({
          id: idx + 1,
          question: item?.question ?? "",
          answer: item?.answer ?? "",
        })),
      }
    : null;

  // ── 8. Case Studies ──
  const rawCaseStudies =
    subService?.caseStudies?.length > 0
      ? subService?.caseStudies
      : parentService?.caseStudies || [];

  const caseStudies: CaseStudyType[] = rawCaseStudies.map(
    (cs: any, idx: number) => ({
      id: cs?.id ?? idx + 1,
      brand: "",
      title: cs?.title ?? "Case Study",
      description: cs?.shortDescription ?? "",
      solution: "",
      image: cs?.ogImage ?? "/banners/caseStudy.webp",
      imageDesktop: cs?.ogImage ?? "/banners/caseStudy.webp",
      imageMobile: cs?.ogImage ?? "/banners/caseStudy.webp",
      category: cs?.categories?.[0]?.name ?? "Success Story",
      href: `/case-study/${cs.slug}`,
      stats: [],
    }),
  );

  // ── 9. Blogs ──
  const rawBlogs =
    subService?.blogs?.length > 0
      ? subService?.blogs
      : parentService?.blogs || [];

  const blogs: SubServiceBlogFrontend[] = rawBlogs.map((b: any) => ({
    id: b?.id ?? Math.random().toString(),
    title: b?.title ?? "Blog Post",
    description: b?.shortDescription ?? "",
    image: b?.ogImage ?? "/banners/dollers.webp",
    stack: b?.tags?.map((tag: any) => tag?.name) ?? [],
    slug: b?.slug ?? "",
  }));

  // ── 10. Industries ──
  const industries = mapIndustriesFromSubService(subService?.industries);

  return {
    heroSlides,
    whatWeDo,
    whatYouGet,
    technologyExpertise,
    solutionsWeDeliver,
    outsourcingModels,
    contactHero,
    faq,
    caseStudies,
    blogs,
    industries,
    addScheema: subService?.addScheema ?? "",
  };
}

// ── Exported Function ──
export async function getSubServicePageDataBySlug(
  serviceSlug: string,
  subServiceSlug: string,
): Promise<SubServicePageData | null> {
  const apiData = await getSubService(serviceSlug, subServiceSlug);
  if (!apiData) return null;

  return mapSubServiceToPageData(apiData);
}
