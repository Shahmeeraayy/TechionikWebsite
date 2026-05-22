import { BASE_URL, ENDPOINTS } from "../config/apiConfig";

// ─── Normalized shape for the AllBlogs carousel component ───────────────────
export interface NormalizedBlog {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  stack: string[]; // categories mapped to this field
}

// ─── API response shape (paginated) ─────────────────────────────────────────
interface BlogItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  ogImage?: string;
  categories?: { id: string; name: string; slug: string }[];
  publishedAt?: string;
}

interface PaginatedBlogResponse {
  success: boolean;
  count: number;
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
  data: BlogItem[];
}

/**
 * Fetches up to `limit` blogs from the API and normalizes them
 * to the shape required by the AllBlogs carousel component.
 */
export async function getNormalizedBlogs(limit: number = 5): Promise<NormalizedBlog[]> {
  try {
    const url = `${BASE_URL}${ENDPOINTS.BLOGS}?limit=${limit}&page=1`;
    const res = await fetch(url, {
      next: {
        revalidate: 1800,
      },
    });

    if (!res.ok) {
      // console.error(`❌ Blog API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: PaginatedBlogResponse = await res.json();

    if (!json?.success || !Array.isArray(json.data)) {
      console.warn("⚠️ Unexpected blog API response structure");
      return [];
    }

    return json.data.map((item): NormalizedBlog => ({
      id: item?.id ?? "",
      title: item?.title ?? "Untitled",
      description: item?.shortDescription ?? "",
      image: item?.ogImage || "/banners/dollers.webp",
      slug: item?.slug ?? "",
      stack: Array.isArray(item?.categories)
        ? item?.categories?.map((c) => c?.name).filter(Boolean)
        : [],
    }));
  } catch (error) {
    console.error("❌ getNormalizedBlogs failed:", error);
    return [];
  }
}
