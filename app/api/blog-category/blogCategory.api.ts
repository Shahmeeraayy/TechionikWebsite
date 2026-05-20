import { BASE_URL, ENDPOINTS } from "../config/apiConfig";

// -------- Types --------
export interface BlogCategoryData {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  parentCategoryId: null | string;
  parentCategoryName: string;
  parentCategorySlug: string;
}

export interface BlogCategoryResponse {
  success: boolean;
  count: number;
  data: BlogCategoryData[];
}

// -------- Frontend-friendly shape --------
export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
}

// -------- Service + Transform --------
export async function getBlogCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}${ENDPOINTS.BLOG_CATEGORIES}`, {
      cache: "default",
    });

    // HTTP error handling
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    let json: BlogCategoryResponse;

    // JSON parsing safety
    try {
      json = await res.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    // Validate structure
    if (!json || !Array.isArray(json.data)) {
      throw new Error("Unexpected API response structure");
    }

    // Safe transform
    return json.data.map((item) => ({
      id: item?.id ?? "",
      name: item?.name ?? "Unknown",
      slug: item?.slug ?? "",
      imageUrl: item?.imageUrl || undefined,
    }));

  } catch (error: any) {
    // console.error("getBlogCategories error:", error.message);

    // Prevent UI crash (fallback)
    return [];

    // OR rethrow if needed:
    // throw error;
  }
}