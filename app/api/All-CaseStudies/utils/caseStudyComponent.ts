import {
  getMainCaseStudyData,
  type getMainCaseStudy,
} from "./getCaseStudies";

type NormalizedCaseStudySource = getMainCaseStudy & {
  brand?: string;
  solution?: string;
};

/**
 * Fetches and normalizes case study data from the API to be used across the application.
 */
export async function getNormalizedCaseStudies() {
  const CaseStudiesComponent = await getMainCaseStudyData();

  return (CaseStudiesComponent ?? []).map((item: NormalizedCaseStudySource, index: number) => ({
    id: index + 1,
    brand: item?.brand || " ",
    title: item?.title || " ",
    description: item?.shortDescription || "",
    solution: item?.solution || "Optimized scalable solution",
    category: item?.categories?.[0] || "",
    stats: [],
    imageDesktop: item?.image || "/banners/caseStudy.webp",
    imageMobile: item?.image || "/banners/caseStudy.webp",
    href: `/case-studies/${item?.slug ?? "#"}`,
  }));
}
