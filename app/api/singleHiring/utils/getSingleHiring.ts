import { HiringPageData } from "@/data/TechnicalexpertTechStack";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { SingleHiringApiResponse } from "../types/singleHiring.type";

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

export async function SingleHiringList(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.SINGLE_HIRING}/hire-developer/${slug}`, {
      cache: "default",
    });

    const json: SingleHiringApiResponse = await response.json();
    
    console.log("API Response:", JSON.stringify(json, null, 2));

    const subHiring = json.data?.subHiring;
    const items = subHiring?.templateData;
    
    if (!items) return null;

    return {
      ...items,
      addScheema: subHiring?.addScheema,
    };
  } catch (error) {
    console.error("Error fetching hiring list:", error);
    return null;
  }
}
