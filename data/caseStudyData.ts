import { supplementalCaseStudySummaries } from "./webCaseStudies";

export interface CaseStudies {
  id: number;
  title: string;
  brandTitle?: string;
  description?: string;
  btnText?: string;
  btnLink?: string;
  imageUrl: string;
  blogCategory: string[];
  date: Date;
  slug: string;
  layout:
    | "image-top"
    | "image-bottom"
    | "image-left"
    | "image-right"
    | "image-background";
  isFeatured?: boolean;
  href: string;
}

const CASE_STUDY_BRANDS: Record<string, string> = {
  "erp-enterprise-resource-planning-system": "ERP",
  "assetra-wealth-management-software": "Assetra",
  "homecert-ie-real-estate-compliance-platform": "Homecert.ie",
  "data-driven-real-estate-acquisition-platform": "Investors Buying Houses",
  "layoffhub-ai-review-management-software": "Layoffhub.ai",
};

function toTag(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const caseStudyData: CaseStudies[] = supplementalCaseStudySummaries.map(
  (study, index) => ({
    id: index + 1,
    title: study.title,
    brandTitle: CASE_STUDY_BRANDS[study.slug],
    description: study.shortDescription,
    btnLink: `/case-study/${study.slug}`,
    btnText: "Explore More",
    imageUrl: study.image,
    blogCategory: study.categories.map(toTag),
    date: new Date(study.date),
    slug: study.slug,
    layout: study.layout,
    isFeatured: study.isFeatured ?? false,
    href: `/case-study/${study.slug}`,
  }),
);
