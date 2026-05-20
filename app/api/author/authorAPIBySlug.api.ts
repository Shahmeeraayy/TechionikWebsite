import { BASE_URL, ENDPOINTS } from "../config/apiConfig";

// Type definitions based on the provided API response
export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface AuthorDetail {
  id: string;
  name: string;
  role: string;
  slug: string;
  shortDescription: string;
  content: string;
  avatar: string;
  addScheema?: string;
  socialLinks: SocialLinks;
  createdAt: string;
}

export interface AuthorBySlugResponse {
  success: boolean;
  data: {
    author: AuthorDetail;
    blogs: any[];
    caseStudies: any[];
  } | null;
}

/**
 * Fetch a single author by their slug.
 * Endpoint: /api/frontend/authors/{slug}
 */
export async function getAuthorBySlug(slug: string): Promise<AuthorBySlugResponse | null> {
  if (!slug) return null;

  try {
    const encodedSlug = encodeURIComponent(slug);
    const res = await fetch(`${BASE_URL}${ENDPOINTS.AUTHOR_BY_SLUG(encodedSlug)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch author with slug "${slug}": ${res.status} ${res.statusText}`);
    }

    const json: AuthorBySlugResponse = await res.json();
    return json;

  } catch (error: any) {
    // Avoid console.error(error) directly to prevent Next.js Turbopack sourceMapURL parsing crashes
    console.log(`Error fetching author "${slug}": ${error?.message || "fetch failed"}`);
    return null; // Gracefully handle the error and prevents app crashes by returning null
  }
}
