import { getMainCaseStudyData } from "./getCaseStudies";

/**
 * Fetches and normalizes case study data from the API to be used across the application.
 */
export async function getNormalizedCaseStudies() {
  const CaseStudiesComponent = await getMainCaseStudyData();
  
  return (CaseStudiesComponent ?? []).map((item: any, index: number) => ({
    id: item?.id ?? index,
    brand: item?.brand || " ",
    title: item?.title || " ",
    description: item?.shortDescription || "",
    solution: item?.solution || "Optimized scalable solution",
    stats: item?.stats || [
      { value: " ", label: " " }
    ],
    imageDesktop: item?.image || "/banners/caseStudy.webp",
    imageMobile: item?.image || "/banners/caseStudy.webp",
    href: `/case-study/${item?.slug ?? "#"}`,
  }));
}
