import { BASE_URL, ENDPOINTS } from "../config/apiConfig";

// Type definitions
export interface AuthorData {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  content: string;
  avatar: string;
  imageUrl: string;
  addScheema?: string;
  socialLinks: {
    website: string;
    linkedin: string;
    twitter: string;
    github: string;
  };
  createdAt: string;
}

export interface AuthorCategory {
  success: boolean;
  count: number;
  data: AuthorData[];
}

// Shape for UI
export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  addScheema?: string;
}

// Combined service + transform
export async function getAuthors(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}${ENDPOINTS.AUTHORS}`, {
      cache: "default",
    });
  console.log(`${BASE_URL}${ENDPOINTS.AUTHORS}`,"ENDPOINTSAUTHOR")

    if (!res.ok) {
      throw new Error(`Failed to fetch authors: ${res.status} ${res.statusText}`);
    }

    const json: AuthorCategory = await res.json();

    // Transform API response → UI-friendly shape
    return json.data.map((item) => ({
      id: item?.id ?? " ",
      name: item?.name ?? "Noman",
      slug: item?.slug ?? "/",
      avatar: item?.avatar || "/author/author.png",
      imageUrl: item?.imageUrl || "/author/author.png",
      addScheema: item?.addScheema ?? "",
    }));
  } catch (error) {
    console.error("Error fetching authors:", error);
    return []; // Return an empty string/array to gracefully handle errors in UI
  }
}