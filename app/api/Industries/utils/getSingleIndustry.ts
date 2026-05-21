import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { SingleIndustryResponse } from "../types/singleIndustry.type";

export interface TransformedHero {
  title: string;
  subtitle: string;
  description?: string;
  video?: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}
export interface TransformedWhatYouGet {
  id: number;
  title1: string;
  spanTitle: string;
  title2: string;
  reviews: Reviews[];
  RightDescription1: string;
  RightDescription2: string;
}

export interface Reviews {
  image1: string;
  width: number;
  height: number;
}

export interface TransformedSoftwareSolutions {
  title: string;
  middleTitle: string;
  description: string;
  lastTitle?: string;
  items: SolutionItem[]
}
export interface SolutionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  alt: string;
}

export interface TransformedTechnologyExpertise {
  mainTitle: string;
  mainDescription?: string
  cards: TTechnologyExpertiseCardData[]
}

export interface TTechnologyExpertiseCardData {
  id: number;
  title: string;
  description: string[];
  icon: string;
}
export interface TransformedContactHero {
  title: string;
  backgroundImage?: string;
  imageAlt?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
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
  author: {
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
  };
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
  author: {
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
  };
}
export interface TransformedSubIndustry {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
}

export interface TransformedSingleIndustry {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  scope: string;
  isActive: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
  heroSlides: TransformedHero;
  whatYouGet: TransformedWhatYouGet;
  softwareSolutions: TransformedSoftwareSolutions;
  technologyExpertise: TransformedTechnologyExpertise;
  cta: TransformedContactHero;
  blogs: TransformedBlog[];
  caseStudies: TransformedCaseStudy[];
  subIndustries: TransformedSubIndustry[];
  addScheema?: string;
}

// ─────────────────────────────────────────────
// HELPER — safe author shape with fallbacks
// ─────────────────────────────────────────────
function transformAuthor(author?: any) {
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

export async function getSingleIndustry(
  slug: string
): Promise<TransformedSingleIndustry | null> {
  const cleanSlug = slug?.toLowerCase().trim();
  const url = `${BASE_URL}${ENDPOINTS.AllIndustries}/${cleanSlug}`;

  console.log(`📡 Fetching Industry from: ${url}`);

  try {
    const response = await fetch(url, {
      cache: "default",
    });

    if (response.status === 404) {
      console.warn(`⚠️ Industry not found for slug: "${cleanSlug}"`);
      return null;
    }

    if (!response.ok) {
      console.error(`❌ API Error: ${response.status}`);
      return null;
    }

    const json: SingleIndustryResponse = await response.json();
    console.log("✅ Industry fetched successfully");

    if (!json || !json.success || !json.data) {
      console.log("⚠️ No industry data returned — returning null");
      return null;
    }

    const item = json.data;
    const t: any = item.templateData;

    return {
      // ── Core fields ──
      id: item?.id ?? "",
      name: item?.name ?? "",
      title: item?.title ?? "",
      slug: item?.slug ?? "",
      description: item?.description ?? "",
      shortDescription: item?.shortDescription ?? "",
      imageUrl: item?.imageUrl ?? "/images/technology/code.png",
      scope: item?.scope ?? "",
      isActive: item?.isActive ?? false,
      metaTitle: item?.metaTitle || item?.title || "",
      metaDescription: item?.metaDescription || item?.shortDescription || "",
      metaKeyWords: item?.metaKeyWords || "",
      addScheema: item?.addScheema ?? "",
      metaId: item?.metaId ?? 0,

      // ── Hero ──
      heroSlides: {
        title: t?.heroSlides?.[0]?.title ?? "Title Here",
        subtitle: t?.heroSlides?.[0]?.subtitle ?? "",
        image: t?.heroSlides?.[0]?.image ?? "/banners/dollers.webp",
        imageAlt: t?.heroSlides?.[0]?.imageAlt ?? "Hero Image Alt Textt",
        description: t?.heroSlides?.[0]?.description ?? "This is the Description",
        video: t?.heroSlides?.[0]?.video ?? t?.heroSlides?.[0]?.image ?? "/banners/ai-vedio-2.mp4",
        ctaText: t?.heroSlides?.[0]?.ctaText ?? "Contact Us",
        ctaLink: t?.heroSlides?.[0]?.ctaLink ?? "/contact-us",
      },

      // ── What You Get ──
      whatYouGet: {
        id: t?.whatYouGet?.id ?? 1,
        title1: t?.whatYouGet?.title1 ?? "What You",
        spanTitle: t?.whatYouGet?.spanTitle ?? "Get",
        title2: t?.whatYouGet?.title2 ?? "From Us",
        reviews: (t?.whatYouGet?.reviews ?? []).map((rev: any) => ({
          image1: rev?.image1 ?? "",
          width: rev?.width ?? 100,
          height: rev?.height ?? 100,
        })),
        RightDescription1: t?.whatYouGet?.RightDescription1 ?? "",
        RightDescription2: t?.whatYouGet?.RightDescription2 ?? "",
      },

      // ── Software Solutions ──
      softwareSolutions: {
        title: t?.softwareSolutions?.title ?? "",
        middleTitle: t?.softwareSolutions?.middleTitle ?? "",
        description: t?.softwareSolutions?.description ?? "",
        lastTitle: t?.softwareSolutions?.lastTitle ?? "",
        items: (t?.softwareSolutions?.items ?? []).map((sol: any, i: number) => ({
          id: sol?.id ?? i + 1,
          title: sol?.title ?? "",
          description: sol?.description ?? "",
          image: sol?.image ?? `/images/about/software-solution/aiLayer${(i % 4) + 1}.svg`,
          hoverImage: sol?.hoverImage ?? `/images/about/software-solution/aiLayer${(i % 4) + 1}-hover.svg`,
          alt: sol?.title ?? "Solution Image",
        })),
      },

      // ── Technology Expertise ──
      technologyExpertise: {
        mainTitle: t?.technologyExpertise?.mainTitle ?? "",
        mainDescription: t?.technologyExpertise?.mainDescription ?? "",
        cards: (t?.technologyExpertise?.cards ?? []).map((card: any) => ({
          id: card?.id ?? 0,
          title: card?.title ?? "",
          description: Array.isArray(card?.description) ? card?.description : [],
          icon: card?.icon ?? "/icons/cloud.svg",
        })),
      },

      // ── CTA ──
      cta: {
        title: t?.cta?.title ?? "",
        description: t?.cta?.description ?? "",
        backgroundImage: t?.cta?.image ?? "",
        imageAlt: t?.cta?.imageAlt ?? "CTA Image Alt Text",
        buttonText: t?.cta?.buttonLabel ?? "Contact Us",
        buttonLink: t?.cta?.buttonUrl ?? "/contact-us",
      },

      // ── Blogs ──
      blogs: (item.blogs ?? []).map((blog: any) => ({
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

      // ── Case Studies ──
      caseStudies: (item.caseStudies ?? []).map((cs: any) => ({
        id: cs?.id ?? "",
        title: cs?.title ?? "",
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

      // ── Sub Industries ──
      subIndustries: (item.subIndustries ?? []).map((sub: any) => ({
        id: sub?.id ?? "",
        name: sub?.name ?? "",
        title: sub?.title ?? "",
        slug: sub?.slug ?? "",
        shortDescription: sub?.shortDescription ?? "",
        imageUrl: sub?.imageUrl ?? "/images/default-industry.jpg",
      })),
    };
  } catch (error) {
    console.error(`❌ Error fetching industry: ${error}`);
    return null;
  }
}
