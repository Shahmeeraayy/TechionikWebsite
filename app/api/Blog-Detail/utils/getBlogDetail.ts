// app/api/blog-detail/utils/transformBlogDetail.ts

import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { BlogDetailPage } from "../types/blog-detail.type";

// This is the clean shape your UI component will use
export interface TransformedBlogDetail {
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
    image: string;
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

export async function getTransformedBlogDetail(
  slug: string
): Promise<TransformedBlogDetail | null> {
  try {
    const res = await fetch(
      `${BASE_URL}${ENDPOINTS.BLOGS}/${slug}`,
      { cache: "default" }
    );

    if (!res.ok) {
      return null;
    }

    let json: BlogDetailPage;

    try {
      json = await res.json();
    } catch (parseError) {
      console.error("3. JSON parsing failed:", parseError);
      return null;
    }

    if (!json?.success || !json?.data) {
      return null;
    }

    const item = json.data;

    return {
      id: item?.id ?? " ",
      title: item?.title ?? " Blog Title ",
      slug: item?.slug ?? "",
      shortDescription: item?.shortDescription ?? "",
      content: item?.content ?? "",
      layout: item?.layout ?? "image-top",
      ogImage:
        item?.ogImage ||
        item?.seo?.ogImage ||
        "/author/author.png",
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
        image: item?.author?.image ?? "/author/author.png",
        role: item?.author?.role ?? "Author",
        socialLinks: item?.author?.socialLinks ?? {
          facebook: "www.facebook.com",
          twitter: "www.facebook.com",
          instagram: "www.facebook.com",
          linkedin: "www.facebook.com",
        },
      },

      seo: {
        title: item?.seo?.title || item?.title || " Blog Title ",
        description: item?.seo?.description || item?.shortDescription || " Blog Description ",
        ogImage: item?.seo?.ogImage || "",
        robots: item?.seo?.robots || "index,follow",
        keywords: item?.seo?.keywords || [],
      },
      addScheema:item?.addScheema || ""
    };

  } catch (error) {
    console.error("6. Unexpected error in getTransformedBlogDetail:", error);
    return null;
  }
}