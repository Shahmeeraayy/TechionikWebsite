import { aiAutomationCaseStudies } from "@/data/aiAutomationCaseStudies";
import {
  isRemovedLegacyCaseStudySlug,
  supplementalCaseStudySummaries,
} from "@/data/webCaseStudies";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MainCaseStudyPage } from "../types/caseStudy.type";

export interface getMainCaseStudy {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
  href?: string;
  layout?: string;
  isFeatured?: boolean;
  date: string;
  categories: string[];
}

function normalizeCaseStudyTitle(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function dedupeCaseStudies(caseStudies: getMainCaseStudy[]): getMainCaseStudy[] {
  const seenSlugs = new Set<string>();
  const seenHrefs = new Set<string>();
  const seenTitles = new Set<string>();

  return caseStudies.filter((caseStudy) => {
    const normalizedSlug = caseStudy.slug.trim().toLowerCase();
    const normalizedHref = (caseStudy.href ?? "").trim().toLowerCase();
    const normalizedTitle = normalizeCaseStudyTitle(caseStudy.title);

    const isDuplicate =
      (normalizedSlug && seenSlugs.has(normalizedSlug)) ||
      (normalizedHref && seenHrefs.has(normalizedHref)) ||
      (normalizedTitle && seenTitles.has(normalizedTitle));

    if (isDuplicate) {
      return false;
    }

    if (normalizedSlug) seenSlugs.add(normalizedSlug);
    if (normalizedHref) seenHrefs.add(normalizedHref);
    if (normalizedTitle) seenTitles.add(normalizedTitle);

    return true;
  });
}

export async function getMainCaseStudyData(): Promise<getMainCaseStudy[]> {
  const aiAutomationRouteBySlug = new Map(
    aiAutomationCaseStudies.map((study) => [study.slug, study.route]),
  );

  const aiAutomationArchiveStudies: getMainCaseStudy[] =
    aiAutomationCaseStudies.map((study, index) => ({
      id: `ai-automation-${index + 1}`,
      title: study.title,
      shortDescription: study.description,
      image: study.image,
      slug: study.slug,
      href: study.route,
      layout: "image-top",
      isFeatured: false,
      date: study.date,
      categories: study.categories,
    }));

  const supplementalArchiveStudies: getMainCaseStudy[] =
    supplementalCaseStudySummaries.map((study) => ({
      id: study.id,
      title: study.title,
      shortDescription: study.shortDescription,
      image: study.image,
      slug: study.slug,
      href: `/case-studies/${study.slug}`,
      layout: study.layout,
      isFeatured: study.isFeatured ?? false,
      date: study.date,
      categories: study.categories,
    }));

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.ALL_CASESTUDIES}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch case studies: ${response.status} ${response.statusText}`,
      );
    }

    const json: MainCaseStudyPage = await response.json();

    const apiCaseStudies = json.data
      .map((item) => ({
        id: item?.id ?? " ",
        title: item?.title ?? "this is the title",
        shortDescription: item?.shortDescription ?? "this is the description",
        image: item?.ogImage || "/banners/Software-Development.webp",
        slug: item?.slug ?? " ",
        href:
          aiAutomationRouteBySlug.get(item?.slug ?? "") ??
          `/case-studies/${item?.slug ?? ""}`,
        layout: item?.layout ?? "image-top",
        isFeatured: item?.isFeatured ?? false,
        date: item?.publishedAt ?? " ",
        categories: item?.categories?.map((category) => category?.name ?? " "),
      }))
      .filter((item) => !isRemovedLegacyCaseStudySlug(item.slug));

    return dedupeCaseStudies([
      ...apiCaseStudies,
      ...aiAutomationArchiveStudies,
      ...supplementalArchiveStudies,
    ]);
  } catch {
    return dedupeCaseStudies([
      ...aiAutomationArchiveStudies,
      ...supplementalArchiveStudies,
    ]);
  }
}
