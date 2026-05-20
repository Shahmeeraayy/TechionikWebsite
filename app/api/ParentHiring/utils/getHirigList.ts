import { HiringPageData } from "@/data/TechnicalexpertTechStack";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { HireDeveloperApiResponse } from "../types/parentHiring.type";

export interface DeveloperCard {
  id: string;
  title: string;
  image: string;
  description: string | string[];
}

export interface DeveloperListPageData {
  header: {
    mainTitle: string;
    highlightTitle: string;
    subtitle: string;
  };
  cards: DeveloperCard[];
}

export async function ParentHirigList(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.SINGLE_HIRING}/${slug}`, {
      cache: "default",
    });

    const json: HireDeveloperApiResponse = await response.json();

    if (!json?.success || !json.data) return null;

    return {
      ...json.data.templateData,
      addScheema: json.data.addScheema,
    };
  } catch (error) {
    console.error("Error fetching hiring list:", error);
    return null;
  }
}
