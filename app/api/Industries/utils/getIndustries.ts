import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { AllIndustriesResponse } from "../types/AllIndustries.type";

export interface TransformedAllIndustriesPage {
  id: number | string;
  title: string;
  image: string;
  description: string;
  link: string;
}

export async function getAllIndustries(): Promise<TransformedAllIndustriesPage[] | null> {
  const url = `${BASE_URL}${ENDPOINTS.AllIndustries}`

  // console.log(`📡 Fetching service from: ${url}`);


  try {
    const response = await fetch(url, {
      cache: "default",
    });

    if (!response.ok) {
      console.log(`❌ API Error: ${response.statusText}`);
      return null;
    }

    const json: AllIndustriesResponse = await response.json();

    if (!json?.success || !json?.data) {
      console.log("⚠️ Invalid API response");
      return null;
    }

    // ✅ Transform data
    return json.data.map((item, i) => ({
      id: item?.id ?? i + 1,
      title: item?.title ?? item.name ?? "Untitled",
      description: item?.description ?? "empty description",
      image: item?.imageUrl || "/banners/dollers.webp",
      link: `/industries/${item?.slug}`, // ✅ fix routing
    }));

  }
  catch (error) {
    console.log("❌ Fetch failed:", error);
    return null;
  }
}