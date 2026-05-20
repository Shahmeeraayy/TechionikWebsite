import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import {
  SubServiceData,
  SubServiceResponse,
} from "../types/subService.type";

export async function getSubService(
  serviceSlug: string,
  subServiceSlug: string,
): Promise<SubServiceData | null> {
  const SUB_SERVICE_API_URL = `${BASE_URL}${ENDPOINTS.PARENTSERVICE}/${serviceSlug}/${subServiceSlug}`;

  try {
    console.log("🔄 Fetching sub-service from:", SUB_SERVICE_API_URL);
    const response = await fetch(SUB_SERVICE_API_URL, {
      cache: "default",
    });

    if (!response.ok) {
      console.error(`❌ API Error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch sub-service: ${response.status}`);
    }

    const json: SubServiceResponse = await response.json();

    if (json.success && json.data) {
      console.log(`✅ Fetched sub-service: "${json.data.subService.name}"`);
      return json.data;
    }

    console.warn("⚠️ API returned success false or no data.");
    return null;
  } catch (error) {
    console.error("❌ Error fetching sub-service:", error);
    return null;
  }
}
