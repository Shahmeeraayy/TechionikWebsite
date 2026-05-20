// app/api/singleService/utils/getSingleService.ts

import { mapIndustriesFromSubService } from "@/app/api/subService/utils/getSubServicePageData";
import type { Industries } from "@/app/api/subService/types/subService.type";
import type { IndustriesData } from "@/data/Industries Data/types";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { SingleServiceResponse } from "../types/singleService.type";

// ─────────────────────────────────────────────
// TRANSFORMED SHAPE — frontend friendly
// ─────────────────────────────────────────────
export interface TransformedEmergingTechItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
}

export interface TransformedEmergingTech {
  title: string;
  gradientText: string;
  afterGradientText: string;
  description: string;
  services: TransformedEmergingTechItem[];
}

export interface TransformedHero {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  video?: string;
  ctaText: string;
  ctaLink: string;
}

export interface TransformedWhyChooseTechionikItem {
  id?: number;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  alt?: string;
}

export interface TransformedWhyChooseTechionik {
  title: string;
  middleTitle: string;
  description: string;
  lastTitle?: string;
  items: TransformedWhyChooseTechionikItem[];
}

export interface TransformedWhatWeDoItem {
  id?: number;
  title: string;
  description: string; // HTML string
}

export interface TransformedWhatWeDo {
  title: string;
  descriptiption: string; // matches component prop
  mainDescription: string;
  card: TransformedWhatWeDoItem[];
}

export interface TransformedSolutionCard {
  title: string;
  description: string; // HTML string
  icon: string;
}

export interface TransformedSolutionsWeDeliver {
  title: string;
  description: string;
  spanTitle: string;
  cards: TransformedSolutionCard[];
}

export interface TransformedOutsourcingItem {
  title: string;
  description: string; // HTML string
  image: string;
  hoverImage: string;
}

export interface TransformedOutsourcingModels {
  title: string;
  description: string;
  MiddleTitle: string;
  lastTitle: string;
  items: TransformedOutsourcingItem[];
}

export interface TransformedExtraSection {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface TransformedFaqItem {
  id: number;
  question: string;
  answer: string;
}
export interface TransformedFaq {
  mainTitle: string;
  spanTitle: string;
  faq: TransformedFaqItem[];
}

export interface TransformedAuthor {
  id: string;
  name: string;
  slug: string;
  role: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface TransformedCta {
  title: string;
  imageAlt: string;
  description: string; // HTML string
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export interface TransformedBlog {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  image: string;
  publishedAt: string;
  categories: { id: string; name: string; slug: string }[];
  tags: { id: string; name: string; slug: string }[];
  author: TransformedAuthor;
}

export interface TransformedCaseStudy {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  layout: string;
  image: string;
  publishedAt: string;
  categories: { id: string; name: string; slug: string }[];
  tags: { id: string; name: string; slug: string }[];
  author: TransformedAuthor;
}

export interface TransformedSubService {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  hasPage?: boolean;
}

export interface TransformedSingleService {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  scope: string;
  isActive: boolean;

  // Template sections
  hero: TransformedHero[];
  emergingTechnologies: TransformedEmergingTech;
  whyChooseTechionik: TransformedWhyChooseTechionik;
  whatWeDo: TransformedWhatWeDo;
  solutionsWeDeliver: TransformedSolutionsWeDeliver;
  outsourcingModels: TransformedOutsourcingModels;
  extraSection: TransformedExtraSection;
  faq: TransformedFaq;
  cta: TransformedCta;

  // Related content
  blogs: TransformedBlog[];
  caseStudies: TransformedCaseStudy[];
  subServices: TransformedSubService[];
  industries: IndustriesData;

  // SEO Metadata
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  hasPage?: boolean;
  addScheema?: string;
}

// ─────────────────────────────────────────────
// HELPER — safe author shape with fallbacks
// ─────────────────────────────────────────────
function transformAuthor(author?: any): TransformedAuthor {
  return {
    id: author?.id ?? "",
    name: author?.name ?? "Unknown",
    slug: author?.slug ?? "",
    role: author?.role ?? "Author",
    socialLinks: {
      facebook: author?.socialLinks?.facebook ?? "",
      twitter: author?.socialLinks?.twitter ?? "",
      instagram: author?.socialLinks?.instagram ?? "",
      linkedin: author?.socialLinks?.linkedin ?? "",
    },
  };
}

// ─────────────────────────────────────────────
// COMBINED SERVICE + SUBSERVICE TRANSFORM FUNCTION
// ─────────────────────────────────────────────
export async function getSingleService(
  slug: string
): Promise<TransformedSingleService | null> {
  try {
    const cleanSlug = slug?.toLowerCase().trim();
    const url = `${BASE_URL}${ENDPOINTS.PARENTSERVICE}/${cleanSlug}`;

    const response = await fetch(url, { cache: "default" });
    if (response.status === 404) return null;
    if (!response.ok) return null;

    const json: SingleServiceResponse = await response.json();
    if (!json?.success || !json.data) return null;

    // Use subService as the primary templateData (as per new API)
    const item = json.data;
    const t: any = item?.templateData ?? {};

    return {
      id: item?.id ?? "",
      name: item?.name ?? "",
      title: item?.title ?? "",
      slug: item?.slug ?? "",
      shortDescription: item?.description ?? "",
      imageUrl: item?.imageUrl || "/images/technology/code.png",
      scope: item?.scope ?? "",
      isActive: item?.isActive ?? false,

      // Hero
      hero:
        t?.heroSlides && Array.isArray(t.heroSlides) && t.heroSlides.length > 0
          ? t.heroSlides.map((slide: any) => ({
              title: slide?.title ?? "Title Here",
              subtitle: slide?.subtitle ?? "Subtitle Here",
              description: slide?.description ?? "This is the Description",
              image:
                slide?.image ||
                slide?.imageUrl ||
                (slide?.video ? "" : "/banners/Hero.webp"),
              imageAlt: slide?.imageAlt || "Service Image",
              video: slide?.video,
              ctaText: slide?.ctaText ?? slide?.ctaLabel ?? "CTA Text Here",
              ctaLink: slide?.ctaLink ?? slide?.ctaUrl ?? "/contact-us",
            }))
          : [
              {
                title: t?.hero?.title ?? "Title Here",
                subtitle: t?.hero?.subtitle ?? "Subtitle Here",
                description: t?.hero?.description ?? "This is the Description",
                image:
                  t?.hero?.image ??
                  t?.hero?.imageUrl ??
                  "/banners/Hero.webp",
                imageAlt: t?.hero?.imageAlt || "Service Image",
                video: t?.hero?.video,
                ctaText: t?.hero?.ctaText ?? t?.hero?.ctaLabel ?? "CTA Text Here",
                ctaLink: t?.hero?.ctaLink ?? t?.hero?.ctaUrl ?? "/contact-us",
              },
            ],

      // Why Choose Techionik
      whyChooseTechionik: {
        title: t?.whyChooseTechionik?.title ?? "MainTitle",
        middleTitle: t?.whyChooseTechionik?.middleTitle ?? "",
        lastTitle: t?.whyChooseTechionik?.lastTitle ?? "",
        description:
          t?.whyChooseTechionik?.description ??
          "<p>Description\nDescription\nDescription</p>",
        items: (t?.whyChooseTechionik?.items?.length > 0
          ? t.whyChooseTechionik.items
          : [{}, {}, {}]
        ).map((item: any, i: number) => {
          const imageIndex = (i % 4) + 1;
          return {
            id: i + 1,
            title: item?.title ?? "Title",
            description: item?.description ?? "Description",
            image: `/images/about/software-solution/aiLayer${imageIndex}.svg`,
            hoverImage:
              item?.hoverImage ??
              `/images/about/software-solution/aiLayer${imageIndex}-hover.svg`,
            alt: item?.title ?? "Dummy Alt",
          };
        }),
      },

      // Emerging Technologies
      emergingTechnologies: {
        title:
          t?.emergingTechnologies?.title ?? t?.EmergingTechnologies?.title ?? "",
        gradientText:
          t?.emergingTechnologies?.middleTitle ??
          t?.EmergingTechnologies?.middleTitle ??
          "",
        afterGradientText:
          t?.emergingTechnologies?.lastTitle ??
          t?.EmergingTechnologies?.lastTitle ??
          "",
        description:
          t?.emergingTechnologies?.description ??
          t?.EmergingTechnologies?.description ??
          "",
        services: (
          t?.emergingTechnologies?.items ??
          t?.EmergingTechnologies?.items ??
          []
        ).map((item: any, i: number) => ({
          id: i + 1,
          title: item?.title ?? "",
          description: item?.description ?? "",
          image: item?.image ?? "/images/home/ai-image.webp",
          ctaText:
            t?.emergingTechnologies?.buttonLabel ??
            t?.EmergingTechnologies?.buttonLabel ??
            "View Details",
          ctaLink:
            t?.emergingTechnologies?.buttonLink ??
            t?.EmergingTechnologies?.buttonLink ??
            "#",
          imageAlt: item?.imageAlt || "Emerging Technologies Image",
        })),
      },

      // What We Do
      whatWeDo: {
        title: t?.whatWeDo?.title ?? "What We Do Title Here",
        descriptiption: t?.whatWeDo?.description ?? "What We Do Description Here",
        mainDescription: t?.whatWeDo?.mainDescription ?? "",
        card: (t?.whatWeDo?.items ?? []).map((item: any) => ({
          title: item?.title ?? "",
          description: item?.description ?? "",
        })),
      },

      // Solutions We Deliver
      solutionsWeDeliver: {
        title: t?.solutionsWeDeliver?.title ?? "",
        spanTitle: t?.solutionsWeDeliver?.spanTitle ?? "",
        description: t?.solutionsWeDeliver?.description ?? "",
        cards: (t?.solutionsWeDeliver?.cards ?? []).map((card: any) => ({
          title: card?.title ?? "",
          description: card?.description ?? "",
          icon: card?.icon ?? "/icons/cloud.svg",
        })),
      },

      // Outsourcing Models
      outsourcingModels: {
        title: t?.ourOutsourcingModels?.title ?? "",
        MiddleTitle: t?.ourOutsourcingModels?.MiddleTitle ?? "",
        lastTitle: t?.ourOutsourcingModels?.lastTitle ?? "",
        description: t?.ourOutsourcingModels?.description ?? "",
        items: (t?.ourOutsourcingModels?.items ?? []).map((item: any) => ({
          title: item?.title ?? "",
          description: item?.description ?? "",
          image:
            item?.image ?? "/images/ParentServices/outsourcingmedia/full.webp",
          hoverImage:
            item?.hoverImage ??
            "/images/ParentServices/outsourcingmedia/colorfull.webp",
        })),
      },

      // Extra Section
      extraSection: {
        title: t?.extraSection?.title ?? "",
        description: t?.extraSection?.description ?? "",
        buttonLabel: t?.extraSection?.buttonLabel ?? "",
        buttonUrl: t?.extraSection?.buttonUrl ?? "",
      },

      // FAQ
      faq: {
        mainTitle: t?.faq?.mainTitle ?? "Software Development",
        spanTitle: t?.faq?.spanTitle ?? "FAQs",
        faq: (Array.isArray(t?.faq) ? t.faq : t?.faq?.faq ?? []).map(
          (item: any, i: number) => ({
            id: item?.id ?? i + 1,
            question: item?.question ?? "",
            answer: item?.answer ?? "",
          })
        ),
      },

      // CTA
      cta: {
        title: t?.cta?.title ?? "",
        description: t?.cta?.description ?? "",
        imageAlt: t?.cta?.imageAlt || "CTA Image",
        buttonText: t?.cta?.buttonLabel || "Contact Us",
        buttonLink: t?.cta?.buttonUrl || "/contact-us",
        backgroundImage: t?.cta?.image || "/banners/dollers.webp",
      },

      // Blogs
      blogs: (item?.blogs ?? []).map((blog: any) => ({
        id: blog?.id ?? "",
        title: blog?.title ?? "",
        slug: blog?.slug ?? "",
        shortDescription: blog?.shortDescription ?? "",
        layout: blog?.layout ?? "image-top",
        image: blog?.ogImage ?? "/banners/dollers.webp",
        publishedAt: blog?.publishedAt ?? "",
        categories: (blog?.categories ?? []).map((cat: any) => ({
          id: cat?.id ?? "",
          name: cat?.name ?? "",
          slug: cat?.slug ?? "",
        })),
        tags: (blog?.tags ?? []).map((tag: any) => ({
          id: tag?.id ?? "",
          name: tag?.name ?? "",
          slug: tag?.slug ?? "",
        })),
        author: transformAuthor(blog?.author),
      })),

      // Case Studies
      caseStudies: (item?.caseStudies ?? []).map((cs: any) => ({
        id: cs?.id ?? "",
        title: cs?.title ?? "Untitled Case Study",
        slug: cs?.slug ?? "",
        shortDescription: cs?.shortDescription ?? "",
        layout: cs?.layout ?? "image-top",
        image: cs?.ogImage ?? "/banners/caseStudy.webp",
        publishedAt: cs?.publishedAt ?? "",
        categories: (cs?.categories ?? []).map((cat: any) => ({
          id: cat?.id ?? "",
          name: cat?.name ?? "",
          slug: cat?.slug ?? "",
        })),
        tags: (cs?.tags ?? []).map((tag: any) => ({
          id: tag?.id ?? "",
          name: tag?.name ?? "",
          slug: tag?.slug ?? "",
        })),
        author: transformAuthor(cs?.author),
      })),

      // Sub Services
      subServices: (item?.subServices ?? []).map((sub: any) => ({
        id: sub?.id ?? "",
        name: sub?.name ?? "",
        title: sub?.title ?? "",
        slug: sub?.slug ?? "",
        shortDescription: sub?.shortDescription ?? "",
        imageUrl: sub?.imageUrl ?? "/images/default-service.jpg",
        hasPage: sub?.hasPage ?? false,
      })),

      industries: mapIndustriesFromSubService(
        (item?.industries ?? []) as Industries[]
      ),

      // SEO Metadata
      metaTitle: item?.metaTitle ?? item?.title ?? "",
      metaDescription: item?.metaDescription ?? item?.description ?? "",
      metaKeyWords: item?.metaKeyWords ?? "",
      addScheema: item?.addScheema ?? "",
    };
  } catch (error) {
    console.error("❌ Unexpected error in getSingleService:", error);
    return null;
  }
}
