// app/api/menu/utils/buildNavLinks.ts

import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MenuResponse } from "../types/menu.type";

export interface NavChild {
  id: number;
  name: string;
  slug: string;
  imageUrl?: string;
  icon?: string;
  children?: NavChild[];
}

export interface Navlink {
  name: string;
  href?: string;
  type?: string;
  isMega?: boolean;
  children?: NavChild[];
}

const FALLBACK_NAV_LINKS: Navlink[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    isMega: true,
    children: [
      {
        id: 1,
        name: "AI Automation",
        slug: "ai-automation",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          {
            id: 9,
            name: "Business process automation",
            slug: "business-process-automation",
          },
        ],
      },
      {
        id: 3,
        name: "Custom Software Development",
        slug: "custom-software-development",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          {
            id: 16,
            name: "Mobile App Consulting",
            slug: "mobile-app-consulting",
          },
        ],
      },
      {
        id: 4,
        name: "AI Development",
        slug: "ai-development",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          { id: 6, name: "AI Consulting", slug: "ai-consulting" },
          { id: 7, name: "Generative AI", slug: "generative-ai" },
          { id: 12, name: "Agentic AI", slug: "agentic-ai" },
        ],
      },
      {
        id: 7,
        name: "UI-UX",
        slug: "ui-ux",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
      {
        id: 8,
        name: "Quality Assurance",
        slug: "quality-assurance",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
      {
        id: 11,
        name: "Business intelligence",
        slug: "business-intelligence",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
      {
        id: 12,
        name: "Data management",
        slug: "data",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          { id: 15, name: "Data Analytics Services", slug: "data-analytics" },
        ],
      },
    ],
  },
  { name: "About us", href: "/about-us" },
  {
    name: "Industries",
    href: "/industries",
    isMega: true,
    children: [
      {
        id: 2,
        name: "Finance",
        slug: "finance",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
    ],
  },
  {
    name: "Technologies",
    href: "/technology",
    isMega: true,
    children: [
      {
        id: 6,
        name: "React js",
        slug: "react-js",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
    ],
  },
  {
    name: "Hire Developers",
    href: "/hire-developers",
    isMega: true,
    children: [
      {
        id: 13,
        name: "AI Developers",
        slug: "ai",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [],
      },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
];

function buildMenuUrl(endpoint: string): string {
  const base = (BASE_URL || "").replace(/\/+$/, "");
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
}

function normalizeSlug(slug: string): string {
  const normalized = slug.toLowerCase().trim();

  if (normalized === "technologies") return "technology";
  if (normalized === "about") return "about-us";
  if (normalized === "contact") return "contact-us";
  if (normalized === "industry") return "industries";

  return normalized;
}

function mergeWithFallback(navLinks: Navlink[]): Navlink[] {
  const bySlug = new Map<string, Navlink>();

  navLinks.forEach((link) => {
    const slug = normalizeSlug((link.href || "").replace(/^\/+/, "") || "home");
    bySlug.set(slug, link);
  });

  return FALLBACK_NAV_LINKS.map((fallback) => {
    const fallbackSlug = normalizeSlug((fallback.href || "").replace(/^\/+/, "") || "home");
    const apiLink = bySlug.get(fallbackSlug);

    if (!apiLink) {
      return fallback;
    }

    const apiChildren = apiLink.children ?? [];
    const fallbackChildren = fallback.children ?? [];
    const children = apiChildren.length > 0 ? apiChildren : fallbackChildren;

    return {
      ...fallback,
      children,
      isMega: fallback.isMega || children.length > 0,
    };
  });
}

export async function getNavLinks(): Promise<Navlink[]> {
  try {
    const primaryUrl = buildMenuUrl(ENDPOINTS.MENU_STRUCTURE);
    const fallbackUrl = buildMenuUrl(ENDPOINTS.MENU);
    let res = await fetch(primaryUrl, { cache: "default" });

    // Some environments may expose /menu instead of /menu-structure.
    if (res.status === 404) {
      res = await fetch(fallbackUrl, { cache: "default" });
    }

    if (!res.ok) {
      
      return FALLBACK_NAV_LINKS;
    }

    let json: MenuResponse;

    try {
      json = await res.json();
    } catch (parseError) {
      console.error("2. JSON parsing failed:", parseError);
      return FALLBACK_NAV_LINKS;
    }

    if (!json?.data || !Array.isArray(json.data)) {
      console.warn("3. Invalid API shape:", json);
      return FALLBACK_NAV_LINKS;
    }

    const navLinks: Navlink[] = json.data.map((item) => {
      const slug = item?.type?.slug ?? "";
      const name = item?.type?.name ?? "";

      const menu = item?.menu ?? [];
      const hasMega = menu?.length > 0;

      const children: NavChild[] = menu.map((sub) => ({
        id: sub?.subTypeId ?? 0,
        name: sub?.name ?? "",
        slug: sub?.slug ?? "",
        imageUrl:
          sub?.imageUrl || "/images/megamenu-newsletter.png",
        icon: "/icons/building.svg",

        children: (sub?.children ?? []).map((cat) => ({
          id: cat?.categoryId ?? 0,
          name: cat?.name ?? "",
          slug: cat?.slug ?? "",
        })),
      }));

      return {
        name,
        href: slug === "home" ? "/" : `/${slug}`,
        isMega: hasMega,
        children: hasMega ? children : undefined,
      };
    });

    return mergeWithFallback(navLinks);

  } catch (error) {
    console.error("4. Unexpected error in getNavLinks:", error);
    return FALLBACK_NAV_LINKS;
  }
}
