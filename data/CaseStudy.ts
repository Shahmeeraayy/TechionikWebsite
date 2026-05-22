import { supplementalCaseStudySummaries } from "./webCaseStudies";

export interface CaseStudy {
  id: number;
  brand: string;
  title: string;
  solution: string;
  stats: { label: string; value: string }[];
  imageDesktop: string;
  imageMobile: string;
  href: string;
}

const CASE_STUDY_SHOWCASE_COPY: Record<
  string,
  {
    brand: string;
    title: string;
    solution: string;
  }
> = {
  "erp-enterprise-resource-planning-system": {
    brand: "ERP",
    title: "Centralized operations and business management",
    solution: "ERP / Business Automation",
  },
  "assetra-wealth-management-software": {
    brand: "Assetra",
    title: "Portfolio visibility and wealth operations",
    solution: "Finance / WealthTech",
  },
  "homecert-ie-real-estate-compliance-platform": {
    brand: "Homecert.ie",
    title: "Property compliance and certification workflows",
    solution: "Real Estate / Compliance",
  },
  "data-driven-real-estate-acquisition-platform": {
    brand: "Investors Buying Houses",
    title: "Data-driven real estate acquisition workflows",
    solution: "PropTech / Real Estate",
  },
  "layoffhub-ai-review-management-software": {
    brand: "Layoffhub.ai",
    title: "Customer review collection and analysis",
    solution: "SaaS / AI Platform",
  },
};

export const caseStudies: CaseStudy[] = supplementalCaseStudySummaries.map(
  (study, index) => {
    const copy = CASE_STUDY_SHOWCASE_COPY[study.slug];

    return {
      id: index + 1,
      brand: copy.brand,
      title: copy.title,
      solution: copy.solution,
      stats: [],
      imageDesktop: study.image,
      imageMobile: study.image,
      href: `/case-study/${study.slug}`,
    };
  },
);
