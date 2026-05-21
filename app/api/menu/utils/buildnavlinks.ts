// app/api/menu/utils/buildNavLinks.ts

import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MenuResponse } from "../types/menu.type";
import { MegaMenuResponses } from "@/data/megaMenuData";

export interface NavChild {
  id: number;
  name: string;
  slug: string;
  href?: string;
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

const HOMEPAGE_SERVICE_MENU = MegaMenuResponses["services"].menu as NavChild[];

const FALLBACK_NAV_LINKS: Navlink[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    isMega: true,
    children: HOMEPAGE_SERVICE_MENU,
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
    name: "Staffing Hire",
    href: "/staffing",
    isMega: true,
    children: [
      {
        id: 13,
        name: "General Hiring",
        slug: "hire-developers",
        href: "/staffing/hire-developers",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          {
            id: 1301,
            name: "General Hiring Overview",
            slug: "overview",
            href: "/staffing/hire-developers",
          },
        ],
      },
      {
        id: 14,
        name: "AI Teams",
        slug: "ai-ml",
        href: "/staffing/ai-ml/hire-ai-developers",
        icon: "/icons/ai-brain.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          {
            id: 1401,
            name: "AI Teams Bridge",
            slug: "bridge",
            href: "/staffing/ai-ml/hire-ai-developers",
          },
        ],
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

    if (fallbackSlug === "services") {
      return {
        ...fallback,
        ...apiLink,
        children: HOMEPAGE_SERVICE_MENU,
        isMega: true,
      };
    }

    const apiChildren = apiLink.children ?? [];
    const fallbackChildren = fallback.children ?? [];
    const isStaffingHub = fallbackSlug === "staffing";
    const children = isStaffingHub
      ? fallbackChildren
      : apiChildren.length > 0
        ? apiChildren
        : fallbackChildren;

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
