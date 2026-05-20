import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { CaseStudyDetailPage } from "../types/casetudyDetail.type";

export interface TransformedCaseStudyDetail {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  addScheema?: string;
  content: string;
  layout?: string;
  ogImage: string;
  publishedAt: string;
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
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
  seo: {
    title: string;
    description: string;
    ogImage: string;
    robots: string;
    keywords: string[];
  };
}

export async function getTransformedCaseStudyDetail(
  slug: string,
): Promise<TransformedCaseStudyDetail | null> {
  try {
    console.log("1. Slug received:", slug);

    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.ALL_CASESTUDIES}/${slug}`,
      {
        cache: "default",
      },
    );

    if (!response.ok) {
      console.error("2. Fetch failed:", response.status, response.statusText);
      return null;
    }

    let json: CaseStudyDetailPage;

    try {
      json = await response.json();
    } catch (parseError) {
      console.error("3. JSON parsing failed:", parseError);
      return null;
    }

    console.log("4. API response:", JSON.stringify(json, null, 2));

    if (!json?.success || !json?.data) {
      console.warn("5. Invalid API shape:", json);
      return null;
    }

    const item = json.data;

    return {
      id: item?.id ?? " ",
      title: item?.title ?? " ",
      slug: item?.slug ?? " ",
      shortDescription: item?.shortDescription ?? " ",
      content: item?.content ?? " ",
      layout: item?.layout ?? "image-top",

      ogImage:
        item?.ogImage ||
        item?.seo?.ogImage ||
        "/images/default-blog.jpg",

      publishedAt: item?.publishedAt ?? "",

      categories: (item?.categories ?? []).map((cat) => ({
        id: cat?.id ?? "",
        name: cat?.name ?? "",
        slug: cat?.slug ?? "",
      })),

      tags: (item?.tags ?? []).map((tag) => ({
        id: tag?.id ?? "",
        name: tag?.name ?? "",
        slug: tag?.slug ?? "",
      })),

      author: {
        id: item?.author?.id ?? "",
        name: item?.author?.name ?? "Unknown",
        slug: item?.author?.slug ?? "",
        role: item?.author?.role ?? "Author",
        socialLinks: item?.author?.socialLinks ?? {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
        },
      },

      seo: {
        title: item?.seo?.title || item?.title,
        description: item?.seo?.description || item?.shortDescription,
        ogImage: item?.seo?.ogImage || "",
        robots: item?.seo?.robots || "index,follow",
        keywords: item?.seo?.keywords || [],
      },
      addScheema: item?.addScheema || ""
    };

  } catch (error) {
    console.error("6. Unexpected error in getTransformedCaseStudyDetail:", error);
    return null;
  }
}