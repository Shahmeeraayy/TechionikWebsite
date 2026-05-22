export interface SupplementalCaseStudySummary {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
  layout: "image-top" | "image-bottom" | "image-left" | "image-right" | "image-background";
  isFeatured?: boolean;
  date: string;
  categories: string[];
}

export interface SupplementalCaseStudyCategory {
  id: string;
  name: string;
  slug: string;
  parentCategoryName: string;
  parentCategorySlug: string;
}

export interface SupplementalCaseStudyDetail {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  layout: "image-top" | "image-bottom" | "image-left" | "image-right" | "image-background";
  ogImage: string;
  publishedAt: string;
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  author: {
    id: string;
    name: string;
    slug: string;
    role: string;
    socialLinks: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
    robots: string;
    keywords: string[];
  };
}

const SUPPLEMENTAL_CASE_STUDY_DATE = "2026-05-22T00:00:00.000Z";

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeHtmlContent(
  title: string,
  categoryLabel: string,
  description: string,
): string {
  return `
    <h2>Overview</h2>
    <p>${title} is a web case study in the ${categoryLabel} category.</p>
    <p>${description}</p>
    <h2>Project Focus</h2>
    <p>This project highlights a digital workflow built for clarity, business efficiency, and better day-to-day operations.</p>
    <h2>What This Platform Supports</h2>
    <p>${description}</p>
  `;
}

export const supplementalCaseStudyCategories: SupplementalCaseStudyCategory[] = [
  {
    id: "supp-category-erp",
    name: "ERP",
    slug: "erp",
    parentCategoryName: "Services",
    parentCategorySlug: "services",
  },
  {
    id: "supp-category-business-automation",
    name: "Business Automation",
    slug: "business-automation",
    parentCategoryName: "Services",
    parentCategorySlug: "services",
  },
  {
    id: "supp-category-finance",
    name: "Finance",
    slug: "finance",
    parentCategoryName: "Industries",
    parentCategorySlug: "industries",
  },
  {
    id: "supp-category-wealthtech",
    name: "WealthTech",
    slug: "wealthtech",
    parentCategoryName: "Technologies & Platforms",
    parentCategorySlug: "technologies-and-platforms",
  },
  {
    id: "supp-category-real-estate",
    name: "Real Estate",
    slug: "real-estate",
    parentCategoryName: "Industries",
    parentCategorySlug: "industries",
  },
  {
    id: "supp-category-compliance",
    name: "Compliance",
    slug: "compliance",
    parentCategoryName: "Services",
    parentCategorySlug: "services",
  },
  {
    id: "supp-category-proptech",
    name: "PropTech",
    slug: "proptech",
    parentCategoryName: "Industries",
    parentCategorySlug: "industries",
  },
  {
    id: "supp-category-saas",
    name: "SaaS",
    slug: "saas",
    parentCategoryName: "Technologies & Platforms",
    parentCategorySlug: "technologies-and-platforms",
  },
  {
    id: "supp-category-ai-platform",
    name: "AI Platform",
    slug: "ai-platform",
    parentCategoryName: "Technologies & Platforms",
    parentCategorySlug: "technologies-and-platforms",
  },
];

export const supplementalCaseStudySummaries: SupplementalCaseStudySummary[] = [
  {
    id: "supp-erp-enterprise-resource-planning-system",
    title: "ERP Enterprise Resource Planning System",
    slug: "erp-enterprise-resource-planning-system",
    shortDescription:
      "A centralized ERP solution built to streamline operations, data flow, and business management.",
    image: "/images/home/Software-Development.webp",
    layout: "image-top",
    date: SUPPLEMENTAL_CASE_STUDY_DATE,
    categories: ["ERP", "Business Automation"],
  },
  {
    id: "supp-assetra-wealth-management-software",
    title: "Assetra Wealth Management Software",
    slug: "assetra-wealth-management-software",
    shortDescription:
      "A modern wealth management platform designed for portfolio visibility, client operations, and financial workflows.",
    image: "/images/blog/blog2.jpg",
    layout: "image-right",
    date: SUPPLEMENTAL_CASE_STUDY_DATE,
    categories: ["Finance", "WealthTech"],
  },
  {
    id: "supp-homecert-ie-real-estate-compliance-platform",
    title: "Homecert.ie Real Estate Compliance Platform",
    slug: "homecert-ie-real-estate-compliance-platform",
    shortDescription:
      "A compliance-focused real estate platform built to simplify property documentation and certification workflows.",
    image: "/images/blog/blog1.jpg",
    layout: "image-top",
    date: SUPPLEMENTAL_CASE_STUDY_DATE,
    categories: ["Real Estate", "Compliance"],
  },
  {
    id: "supp-data-driven-real-estate-acquisition-platform",
    title: "Data-Driven Real Estate Acquisition Platform",
    slug: "data-driven-real-estate-acquisition-platform",
    shortDescription:
      "A real estate acquisition and investor enablement platform powered by structured data and digital workflows.",
    image: "/images/blog/blog-portrait-image.jpg",
    layout: "image-bottom",
    date: SUPPLEMENTAL_CASE_STUDY_DATE,
    categories: ["PropTech", "Real Estate"],
  },
  {
    id: "supp-layoffhub-ai-review-management-software",
    title: "Layoffhub.ai Review Management Software",
    slug: "layoffhub-ai-review-management-software",
    shortDescription:
      "A review management software solution designed to collect, manage, and analyze customer feedback efficiently.",
    image: "/images/blog/blog3.jpg",
    layout: "image-background",
    date: SUPPLEMENTAL_CASE_STUDY_DATE,
    categories: ["SaaS", "AI Platform"],
  },
];

export const supplementalCaseStudyDetails: Record<
  string,
  SupplementalCaseStudyDetail
> = Object.fromEntries(
  supplementalCaseStudySummaries.map((study) => {
    const categoryRecords = study.categories.map((categoryName) => ({
      id: `supp-detail-${slugify(categoryName)}`,
      name: categoryName,
      slug: slugify(categoryName),
    }));

    const categoryLabel = study.categories.join(" / ");

    return [
      study.slug,
      {
        id: study.id,
        title: study.title,
        slug: study.slug,
        shortDescription: study.shortDescription,
        content: makeHtmlContent(
          study.title,
          categoryLabel,
          study.shortDescription,
        ),
        layout: study.layout,
        ogImage: study.image,
        publishedAt: study.date,
        categories: categoryRecords,
        tags: categoryRecords,
        author: {
          id: "techionik-editorial-team",
          name: "Techionik Editorial Team",
          slug: "techionik-editorial-team",
          role: "Techionik Team",
          socialLinks: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
          },
        },
        seo: {
          title: `${study.title} | Techionik Case Study`,
          description: study.shortDescription,
          ogImage: study.image,
          robots: "index,follow",
          keywords: [study.title, ...study.categories, "Techionik case study"],
        },
      },
    ];
  }),
);
