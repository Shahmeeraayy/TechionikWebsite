import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MainCaseStudyPage } from "../types/caseStudy.type";
import {
  isRemovedLegacyCaseStudySlug,
  supplementalCaseStudySummaries,
} from "@/data/webCaseStudies";


export interface getMainCaseStudy {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
  layout?: string;        // ← added ?
  isFeatured?: boolean;   // ← added ?
  date: string;           // ← changed Date to string (API sends a string like "2024-01-01")
  categories: string[];
}

export async function getMainCaseStudyData(): Promise<getMainCaseStudy[]> {
  try {
    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.ALL_CASESTUDIES}`,
      { cache: "default" },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch case studies: ${response.status} ${response.statusText}`);
    }

    const json: MainCaseStudyPage = await response.json();

    const apiCaseStudies = json.data
      .map((item) => ({
        id: item?.id ?? " ",
        title: item?.title ?? "this is the title",
        shortDescription: item?.shortDescription ?? "this is the description",
        image: item?.ogImage || "/banners/Software-Development.webp",
        slug: item?.slug ?? " ",
        layout: item?.layout ?? "image-top",
        isFeatured: item?.isFeatured ?? false,
        date: item?.publishedAt ?? " ",
        categories: item?.categories?.map((category) => category?.name ?? " "),
      }))
      .filter((item) => !isRemovedLegacyCaseStudySlug(item.slug));

    const mergedCaseStudies = [...apiCaseStudies];
    const seenSlugs = new Set(apiCaseStudies.map((caseStudy) => caseStudy.slug));

    for (const study of supplementalCaseStudySummaries) {
      if (seenSlugs.has(study.slug)) continue;

      mergedCaseStudies.push({
        id: study.id,
        title: study.title,
        shortDescription: study.shortDescription,
        image: study.image,
        slug: study.slug,
        layout: study.layout,
        isFeatured: study.isFeatured ?? false,
        date: study.date,
        categories: study.categories,
      });
    }

    return mergedCaseStudies;
  } catch (error) {
    // console.log("Error fetching case studies:", error);
    return supplementalCaseStudySummaries.map((study) => ({
      id: study.id,
      title: study.title,
      shortDescription: study.shortDescription,
      image: study.image,
      slug: study.slug,
      layout: study.layout,
      isFeatured: study.isFeatured ?? false,
      date: study.date,
      categories: study.categories,
    }));
  }
}
