// data/menuCMSData.ts

import { serviceMenuItems, type ServiceMenuItem } from "@/data/services/serviceRegistry";

export interface MenuType {
  id: number;
  name: string;
  slug: string;
}

export type MenuItem = ServiceMenuItem;

export interface MenuResponse {
  type: MenuType;
  menu: MenuItem[];
}

// A dictionary mapping the requested slug to its exact API response
export const MegaMenuResponses: Record<string, MenuResponse> = {
  "services": {
    type: {
      id: 1,
      name: "Services",
      slug: "services"
    },
    menu: serviceMenuItems
  },
  
  "pages": {
    type: {
      id: 2,
      name: "Pages",
      slug: "/"
    },
    menu: [
      {
        id: 8,
        name: "Industry",
        slug: "industries",
        icon: "/icons/building.svg",
        children: [
          { id: 801, name: "Healthcare", slug: "healthcare" },
          { id: 802, name: "Finance", slug: "finance" },
        //   { id: 803, name: "Real Estate", slug: "real-estate" }
        ]
      },
      {
        id: 9,
        name: "Our Clients",
        slug: "our-clients",
        icon: "/icons/ai-brain.svg",
        children: []
      },
      {
        id: 10,
        name: "How We Work",
        slug: "how-we-work",
        icon: "/icons/ai-brain.svg",
        children: []
      },
      {
        id: 11,
        name: "Technology",
        slug: "technology",
        icon: "/icons/cloud.svg",
        children: [
          { id: 1101, name: "React & Next.js", slug: "nextjs" },
          { id: 1102, name: "Python & AI", slug: "python" },
          { id: 1103, name: "Cloud Infrastructure", slug: "cloud" }
        ]
      },
      {
        id: 12,
        name: "Hiring",
        slug: "hiring",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 13,
        name: "Case Studies",
        slug: "case-study",
        icon: "/icons/cloud.svg",
        children: [
          {
            id: 1301,
            name: "ERP Enterprise Resource Planning System",
            slug: "erp-enterprise-resource-planning-system",
          },
          {
            id: 1302,
            name: "Assetra Wealth Management Software",
            slug: "assetra-wealth-management-software",
          },
          {
            id: 1303,
            name: "Homecert.ie Real Estate Compliance Platform",
            slug: "homecert-ie-real-estate-compliance-platform",
          },
          {
            id: 1304,
            name: "Data-Driven Real Estate Acquisition Platform",
            slug: "data-driven-real-estate-acquisition-platform",
          },
          {
            id: 1305,
            name: "Layoffhub.ai Review Management Software",
            slug: "layoffhub-ai-review-management-software",
          },
        ]
      },
      {
        id: 14,
        name: "Location Based Services",
        slug: "location-based-services",
        icon: "/icons/cloud.svg",
      },
      {
        id: 15,
        name: "CEO Suite",
        slug: "CEO-suite",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 16,
        name: "Authors",
        slug: "author",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 18,
        name: "Terms and Conditions",
        slug: "terms",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 19,
        name: "Privacy Policy",
        slug: "privacy-policy",
        icon: "/icons/cloud.svg",
      }
    ]
  }
};
