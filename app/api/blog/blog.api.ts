import { BASE_URL, ENDPOINTS } from "../config/apiConfig";

// ---------- Type definitions ----------
export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Seo {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  keywords: string[];
  twitterCard: string;
}

export interface BlogData {
  id: string;
  title: string;
  slug: string;
  isFeatured?: boolean;
  layout?: string;
  shortDescription: string;
  content: string;
  contentBlocks: [];
  categories: Category[];
  subCategories:string;
  ogImage: string;
  tags: string[];
  author: Author;
  seo: Seo;
  publishedAt: string;
}

export interface MainBlogPage {
  success: boolean;
  count: number;
  data: BlogData[];
}

// ---------- Shape for frontend UI ----------
export interface MainBlog {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
  layout?: string;
  isFeatured?: boolean;
  date: string;
  categories: string[];
  author?: Author;
}

// ---------- Combined service + transform ----------
export async function getMainBlogData(): Promise<MainBlog[]> {
  try {
    const res = await fetch(`${BASE_URL}${ENDPOINTS.BLOGS}`, {
      cache: "default",
    });

    // HTTP-level error
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    let json: MainBlogPage;

    // JSON parsing safety
    try {
      json = await res.json();
    } catch (err) {
      throw new Error("Invalid JSON response from server");
    }

    // Validate structure
    if (!json || !Array.isArray(json.data)) {
      throw new Error("Unexpected API response structure");
    }

    // Transform safely
    return json.data.map((item) => ({
      id: item?.id ?? "",
      title: item?.title ?? "Untitled",
      shortDescription: item?.shortDescription ?? "",
      image: item?.ogImage || "/banners/Software-Development.webp",
      slug: item?.slug ?? "",
      layout: item?.layout || "image-top",
      isFeatured: item?.isFeatured ?? false,
      date: item?.publishedAt ?? "",
      categories: Array.isArray(item?.categories)
        ? item?.categories.map((c) => c?.name ?? "")
        : [],
      author: item?.author,
    }));

  } catch (error: any) {
    // Centralized error handling
    // console.error("getMainBlogData error:", error.message);

    // Optional: return fallback instead of crashing UI
    return [];

  }
}