import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { blogCategory } from "../types/CaseStudy-Category.type";
import { supplementalCaseStudyCategories } from "@/data/webCaseStudies";

// This is the shape your CategoryComponent already understands
export interface CaseStudyCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  parentCategoryName?: string;
  parentCategorySlug?: string;
}

export async function getCaseStudyCategories(): Promise<CaseStudyCategory[]> {
 try{
   const res = await fetch(
    `${BASE_URL}${ENDPOINTS.CASESTUDY_CATEGORY}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch blog categories");

  const json: blogCategory = await res.json();

  // Translate API data → component-friendly shape
  const apiCategories = json.data.map((item) => ({
    id: item?.id ?? " ",
    name: item?.name ?? "",
    slug: item?.slug ?? " ",
    imageUrl: item?.imageUrl || undefined,
    parentCategoryName: item?.parentCategoryName || undefined,
    parentCategorySlug: item?.parentCategorySlug || undefined,
  }));

  const mergedCategories = [...apiCategories];
  const seenSlugs = new Set(apiCategories.map((category) => category.slug));

  for (const category of supplementalCaseStudyCategories) {
    if (seenSlugs.has(category.slug)) continue;

    mergedCategories.push({
      id: category.id,
      name: category.name,
      slug: category.slug,
      imageUrl: undefined,
      parentCategoryName: category.parentCategoryName,
      parentCategorySlug: category.parentCategorySlug,
    });
  }

  return mergedCategories;
 }catch(error){
  console.log("this is the error ", error)
  return supplementalCaseStudyCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    imageUrl: undefined,
    parentCategoryName: category.parentCategoryName,
    parentCategorySlug: category.parentCategorySlug,
  }));
 }

}
