import { MetadataRoute } from "next";
import { BASE_URL } from "./api/config/apiConfig";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 86400;

type RouteItem = {
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  isActive?: boolean;
  hasPage?: boolean;
  subServices?: RouteItem[];
};

const STATIC_ROUTES = [
  "",
  "/about-us",
  "/contact-us",
  "/technology",
  "/industries",
  "/services",
  "/ceo-suite",
  "/careers",
  "/blog",
  "/case-study",
  "/our-clients",
  "/how-we-work",
  "/hire-developers",
].map((route) => route);

async function fetchRouteData<T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return [];
    }

    const json = (await response.json()) as { data?: T[] };
    return Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}

function toDate(value?: string) {
  return value ? new Date(value) : new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const [blogs, caseStudies, services, technologies, industries] =
    await Promise.all([
      fetchRouteData<RouteItem>(`${BASE_URL}/blogs`),
      fetchRouteData<RouteItem>(`${BASE_URL}/case-studies`),
      fetchRouteData<RouteItem>(`${BASE_URL}/services`),
      fetchRouteData<RouteItem>(`${BASE_URL}/technologies`),
      fetchRouteData<RouteItem>(`${BASE_URL}/industries`),
    ]);

  const serviceDetails = await Promise.all(
    services.map(async (service) => {
      try {
        const response = await fetch(`${BASE_URL}/services/${service.slug}`, {
          next: { revalidate: 86400 },
        });

        if (!response.ok) {
          return service;
        }

        const json = (await response.json()) as { data?: RouteItem };
        return json.data ?? service;
      } catch {
        return service;
      }
    }),
  );

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...blogs.map((blog) => ({
      url: `${siteUrl}/blog/${blog.slug}`,
      lastModified: toDate(blog.updatedAt ?? blog.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/case-study/${caseStudy.slug}`,
      lastModified: toDate(caseStudy.updatedAt ?? caseStudy.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...serviceDetails.flatMap((service) => {
      const routes: MetadataRoute.Sitemap = [];

      if (service.isActive !== false && service.hasPage !== false) {
        routes.push({
          url: `${siteUrl}/services/${service.slug}`,
          lastModified: toDate(service.updatedAt ?? service.publishedAt),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }

      if (Array.isArray(service.subServices)) {
        service.subServices.forEach((subService) => {
          if (subService.isActive !== false && subService.hasPage !== false) {
            routes.push({
              url: `${siteUrl}/services/${service.slug}/${subService.slug}`,
              lastModified: toDate(
                subService.updatedAt ?? subService.publishedAt,
              ),
              changeFrequency: "monthly",
              priority: 0.7,
            });
          }
        });
      }

      return routes;
    }),
    ...technologies.map((technology) => ({
      url: `${siteUrl}/technology/${technology.slug}`,
      lastModified: toDate(technology.updatedAt ?? technology.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: toDate(industry.updatedAt ?? industry.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...dynamicRoutes];
}
