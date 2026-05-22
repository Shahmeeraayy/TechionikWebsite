import { MetadataRoute } from "next";
import { BASE_URL } from "./api/config/apiConfig";
import { aiAutomationCaseStudies } from "@/data/aiAutomationCaseStudies";
import { getSiteUrl } from "@/lib/site";
import { serviceMenuItems } from "@/data/services/serviceRegistry";

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
  "/services/software-development",
  "/services/software-development/custom",
  "/services/software-development/enterprise",
  "/services/software-development/mvp",
  "/services/software-development/outsourcing",
  "/services/software-development/full-stack",
  "/services/software-development/frontend",
  "/services/software-development/backend",
  "/services/application-development",
  "/services/application-development/overview",
  "/services/application-development/mobile",
  "/services/application-development/mobile-app-consulting",
  "/services/application-development/desktop",
  "/services/application-development/web",
  "/services/ai-ml",
  "/services/ai-ml/consulting",
  "/services/ai-ml/ai-software-development",
  "/services/ai-ml/generative-ai",
  "/services/ai-ml/machine-learning",
  "/services/ai-ml/agentic-ai",
  "/services/data-analytics",
  "/services/data-analytics/business-intelligence",
  "/services/data-analytics/data-engineering",
  "/services/design",
  "/services/design/ui-ux",
  "/services/quality-assurance",
  "/services/quality-assurance/testing",
  "/services/infrastructure-devops",
  "/services/infrastructure-devops/devops",
  "/services/infrastructure-devops/cloud",
  "/services/integration-api",
  "/services/integration-api/custom-api",
  "/services/integration-api/cms",
  "/services/integration-api/erp",
  "/services/automation",
  "/services/automation/bpa",
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

  const [blogs, caseStudies, technologies, industries] =
    await Promise.all([
      fetchRouteData<RouteItem>(`${BASE_URL}/blogs`),
      fetchRouteData<RouteItem>(`${BASE_URL}/case-studies`),
      fetchRouteData<RouteItem>(`${BASE_URL}/technologies`),
      fetchRouteData<RouteItem>(`${BASE_URL}/industries`),
    ]);

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
    ...serviceMenuItems.flatMap((service) => [
      {
        url: `${siteUrl}${service.href ?? `/services/${service.slug}`}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      ...(service.children ?? []).map((child) => ({
        url: `${siteUrl}${child.href ?? `${service.href ?? `/services/${service.slug}`}/${child.slug}`}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ]),
    ...aiAutomationCaseStudies.map((study) => ({
      url: `${siteUrl}${study.route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const allRoutes = [...staticPages, ...dynamicRoutes];
  const seen = new Set<string>();

  return allRoutes.filter((route) => {
    if (seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  });
}
