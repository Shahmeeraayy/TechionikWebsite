import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { blogCategory } from "../types/CaseStudy-Category.type";

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
  return json.data.map((item) => ({
    id: item?.id ?? " ",
    name: item?.name ?? "",
    slug: item?.slug ?? " ",
    imageUrl: item?.imageUrl || undefined,
    parentCategoryName: item?.parentCategoryName || undefined,
    parentCategorySlug: item?.parentCategorySlug || undefined,
  }));
 }catch(error){
  console.log("this is the error ", error)
  return [];
 }

}
