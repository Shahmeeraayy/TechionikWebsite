// /api/utils/getAllTechnologies.ts

import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";

// 1. Define the Expected Interfaces
export interface ITechHead {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  templateData: Record<string, any>;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
}

export interface ITechService {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
}

export interface IApiTechnology {
  id: string;
  name: string;
  title: string;
  slug: string;
  addScheema: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  iconUrl: string;
  templateData: Record<string, any>;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;
  sortOrder: number;
  heads: ITechHead[];
  services: ITechService[];
}

export interface ITechnologiesApiResponse {
  success: boolean;
  count: number;
  data: IApiTechnology;
}

// 2. Create the Utility Function
export const getAllTechnologies = async (): Promise<IApiTechnology[] | null> => {
  try {
    console.log("[DEBUG] Fetching technologies from:", `${BASE_URL}${ENDPOINTS.TECHNOLOGY}`);
    
    const response = await fetch(`${BASE_URL}${ENDPOINTS.TECHNOLOGY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }
    });

    console.log("[DEBUG] Response status:", response.status);

    if (!response.ok) {
      console.error(`Failed to fetch technologies. HTTP Status: ${response.status}`);
      return null;
    }

    const json: ITechnologiesApiResponse = await response.json();

    // Handle null exceptions and invalid response formats safely
    if (!json) {
      console.error("API returned a null or undefined response.");
      return null;
    }

    if (!json.success) {
      console.error("API returned an unsuccessful response.", json);
      return null;
    }

    if (!Array.isArray(json.data)) {
      console.error("Expected 'data' to be an array, but received:", typeof json.data);
      return null;
    }

    console.log("[DEBUG] Returning technologies array with length:", json.data.length);
    // Return the clean data array if everything is successful
    return json.data;

  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error("An error occurred while fetching technologies:", error);
    return null;
  }
};