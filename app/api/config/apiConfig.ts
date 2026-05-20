
// Base url
export const DEFAULT_API_BASE_URL =
  "https://techionik-nodejs-web-backend.onrender.com/api/frontend";

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL;


// Endpoints
export const ENDPOINTS = {
  MENU_STRUCTURE: "/menu-structure",
  ALL_CASESTUDIES: "/case-studies",
  AUTHORS: "/authors",
  AUTHOR_BY_SLUG: (slug: string) => `/authors/${slug}`,
  BLOG_CATEGORIES: "/blogs/categories",
  BLOGS: "/blogs",
  MENU: "/menu",
  PARENTSERVICE: "/services",
  AllIndustries: "/industries",
  CASESTUDY_CATEGORY: "/case-studies/categories",
  TECHNOLOGY: "/technologies",
  CLIENT_SERVICES: "/dropdowns/services",
  CLIENT_INDUSTRIES: "/dropdowns/industries",
  ALL_CLIENTS: "/clients",
  SINGLE_HIRING: `/hirings`

};
