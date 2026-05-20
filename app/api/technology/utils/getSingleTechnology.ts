// app/api/technology/utils/getSingleTechnology.ts

import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { IApiTechnology, ITechnologiesApiResponse } from "./getAllTechnologies";

export interface TransformedHeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  video?: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface TransformedServiceWeProvide {
  mainHeading: string;
  middleHeading: string;
  endHeading: string;
  description: string;
  btnText: string;
  btnLink?: string;
  images: { image1: string; width: number; height: number }[];
}

export interface TransformedServiceCard {
  index: number;
  title: string;
  description: string;
  btnText: string;
  href: string;
}

export interface TransformedOutsourcingSlide {
  title: string;
  MiddleTitle?: string;
  lastTitle?: string;
  description?: string;
  items: {
    title: string;
    description?: string;
    image: string;
    hoverImage: string;
  }[];
}

export interface TransformedWhyChooseCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconAlt?: string;
  label: string;
}

export interface TransformedWhyChooseNext {
  mainTitle: string;
  middleTitle: string;
  endTitle: string;
  mainDescription: string;
  cards: TransformedWhyChooseCard[];
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

export interface TransformedMultipleFAQs {
  id: number;
  question: string;
  answer: string;
}

export interface TransformedFAQ {
  mainTitle: string;
  spanTitle: string;
  faq: TransformedMultipleFAQs[];
}

export interface TransformedContactHeroData {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "glass" | "gradient" | "solid";
  buttonIcon?: string;
}

export interface TransformedSingleTechnology {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  iconUrl: string;
  heroSlides: TransformedHeroSlide[];
  extraSection: TransformedServiceWeProvide;
  extraSectionServices: TransformedServiceCard[];
  outsourcingModels: TransformedOutsourcingSlide;
  whyChooseTechnology: TransformedWhyChooseNext;
  whyChooseTechionik: TransformedWhyChooseTechionik;
  faq: TransformedFAQ;
  cta: TransformedContactHeroData;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  addScheema?: string;
}

export interface ISingleTechnologyResponse {
  success: boolean;
  data: IApiTechnology;
}

export const getSingleTechnology = async (
  slug: string
): Promise<TransformedSingleTechnology | null> => {
  try {
    const cleanSlug = slug?.toLowerCase().trim();
    console.log("[DEBUG] Fetching single technology, slug:", cleanSlug);
    console.log("[DEBUG] Fetching from URL:", `${BASE_URL}${ENDPOINTS.TECHNOLOGY}/${cleanSlug}`);

    const response = await fetch(`${BASE_URL}${ENDPOINTS.TECHNOLOGY}/${cleanSlug}`, {
      next: { revalidate: 60 },
    });
    console.log("[DEBUG] Single tech response status:", response.status);

    if (!response.ok) {
      console.log(`Failed to fetch technology: ${response.status}`);
      return null;
    }

    // API returns { success, count, data: [...] } — data is an ARRAY
    const json: ITechnologiesApiResponse = await response.json();
    console.log("[DEBUG] Single tech response success:", json?.success);
    console.log("[DEBUG] Single tech data type:", typeof json?.data);
    console.log("[DEBUG] Single tech data is array:", Array.isArray(json?.data));

    if (!json?.success || !json.data) {
      console.log("[DEBUG] No data returned or success is false");
      return null;
    }

    // Find the matching slug from the array
    const item = json.data;
    console.log("[DEBUG] Retrieved tech item:", item?.name, "with imageUrl:", item?.imageUrl);

    if (!item) return null;

    const t: any = item?.templateData ?? [{}][0]; // Safely access templateData and fallback to empty object

    return {
      id: item?.id ?? "",
      name: item?.name ?? "",
      title: item?.title ?? "",
      slug: item?.slug ?? "",
      description: item?.description ?? "",
      shortDescription: item?.shortDescription ?? "",
      imageUrl: item?.imageUrl ?? "",
      iconUrl: item?.iconUrl ?? "",

      // Hero — API sends heroSlides as array
      heroSlides:
        Array.isArray(t?.heroSlides) && t.heroSlides.length > 0
          ? t.heroSlides.map((slide: any) => ({
            title: slide?.title || item?.title || "",
            subtitle: slide?.subtitle || "",
            description: slide?.description || item?.shortDescription || "",
            video: slide?.video || "/banners/ai-vedio-2.mp4",
            image: slide?.image || "",
            imageAlt: slide?.imageAlt || "Hero Image Alt Text",
            ctaText: slide?.ctaText || "Let's Discuss Your Idea",
            ctaLink: slide?.ctaLink || "/contact-us",
          }))
          : [
            {
              title: item?.title || "",
              subtitle: item?.shortDescription || "",
              description: item?.shortDescription || "",
              video: "/banners/ai-vedio-2.mp4",
              image: item?.imageUrl || "",
              // imageAlt: item?.imageAlt || "Hero Image Alt Text",
              ctaText: "Let's Discuss Your Idea",
              ctaLink: "/contact",
            },
          ],

      // Extra Section
      extraSection: {
        mainHeading: t?.extraSection?.title || item?.title || "",
        middleHeading: "Services",
        endHeading: "We Provide",
        description: t?.extraSection?.description || item?.shortDescription || "",
        btnText: t?.extraSection?.buttonLabel || "Book Your Consultation Call",
        btnLink: t?.extraSection?.buttonUrl || "/contact",
        images: [
          { image1: "/images/technology/clutch-reviews.png", width: 114, height: 54 },
          { image1: "/images/technology/google-reviews.png", width: 144, height: 42 },
          { image1: "/images/technology/good-firms.png", width: 125, height: 42 },
        ],
      },

      // Services on right side
      extraSectionServices: (item?.services ?? []).map((srv: any, i: number) => ({
        index: i + 1,
        title: srv?.title || srv?.name || "",
        description: srv?.shortDescription || srv?.description || "",
        btnText: "Learn More",
        href: `/services/${srv?.slug}`,
      })),

      // Outsourcing Models
      outsourcingModels: {
        title: t?.ourOutsourcingModels?.title || "",
        MiddleTitle: "Outsourcing",
        lastTitle: "Models",
        description: t?.ourOutsourcingModels?.description || "",
        items: (t?.ourOutsourcingModels?.items ?? []).map((outItem: any) => ({
          title: outItem?.title || "",
          description: outItem?.description || "",
          image: outItem?.image || "/images/ParentServices/outsourcingmedia/full.webp",
          hoverImage: outItem?.hoverImage || "/images/ParentServices/outsourcingmedia/colorfull.webp",
        })),
      },

      // Why Choose Technology
      whyChooseTechnology: {
        mainTitle: t?.whyChooseTechnology?.title || "Why Choose",
        middleTitle: item?.title || "Technology",
        endTitle: "With Techionik",
        mainDescription: t?.whyChooseTechnology?.description || "",
        cards: (t?.whyChooseTechnology?.items ?? []).map((cardItem: any, i: number) => ({
          id: i + 1,
          title: cardItem?.title || "",
          description: cardItem?.description || "",
          icon: cardItem?.icon ||"/icons/smallbd.svg",
          iconAlt: cardItem?.iconAlt || "icon alt text",
          label: cardItem?.title || "",
        })),
      },

      // Why Choose Techionik
      whyChooseTechionik: {
        title: t?.whyChooseTechionik?.title || "",
        middleTitle: "Techionik",
        lastTitle: "For This?",
        description: t?.whyChooseTechionik?.description || "",
        items: (t?.whyChooseTechionik?.items ?? []).map((wItem: any, i: number) => ({
          id: i + 1,
          title: wItem?.title || "",
          description: wItem?.description || "",
          image: `/images/about/software-solution/aiLayer${(i % 4) + 1}.svg`,
          hoverImage: `/images/about/software-solution/aiLayer${(i % 4) + 1}-hover.svg`,
          alt: wItem?.title || "",
        })),
      },

      // FAQ
      faq: {
        mainTitle: item?.title || "Technology",
        spanTitle: "FAQs",
        faq: (Array.isArray(t?.faq) ? t.faq : []).map((faqItem: any, i: number) => ({
          id: i + 1,
          question: faqItem?.question || "",
          answer: faqItem?.answer || "",
        })),
      },

      // CTA
      cta: {
        title: t?.cta?.title || "",
        middleTitle: "",
        lastTitle: "",
        description: t?.cta?.description || "",
        backgroundImage: t?.cta?.image || "/banners/hero1.png",
        buttonText: t?.cta?.buttonLabel || "Let's Talk",
        buttonLink: t?.cta?.buttonUrl || "/contact",
        buttonVariant: "glass",
        buttonIcon: "/icons/arrow-right.svg",
      },

      // SEO
      metaTitle: item?.metaTitle || item?.title || "",
      metaDescription: item?.metaDescription || item?.shortDescription || "",
      metaKeyWords: item?.metaKeyWords || "",
      addScheema: item?.addScheema || "",
    };
  } catch (error) {
    console.error(`❌ Error mapping technology ${slug}:`, error);
    return null;
  }
};