
import type { ParentApiResponse, ParentType } from "../types/getParentTypes.type";
import { ServiceData } from "@/data/services/service-component-types";
import { homeserviceData } from "@/data/services/HomeServicesData";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";

export async function getParentPage(): Promise<ParentApiResponse | null> {
  try {
    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.PARENTSERVICE}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      // console.error("1. Fetch failed:", response.status, response.statusText);
      return null;
    }

    let data: ParentApiResponse;

    try {
      data = await response.json();
    } catch (parseError) {
      console.error("2. JSON parsing failed:", parseError);
      return null;
    }

    if (!data?.data || !Array.isArray(data.data)) {
      console.warn("3. Invalid API shape:", data);
      return null;
    }

    return data;

  } catch (error) {
    console.error("4. Unexpected error in getParentPage:", error);
    return null;
  }
}

export function transformParentServices(
  apiResponse: ParentApiResponse | null,
  type: "home" | "about" | "parent" | "industry" = "home",
  baseData: ServiceData = homeserviceData
): ServiceData {
  console.log(`[DEBUG] transformParentServices context: ${type}`);
  console.log(`[DEBUG] apiResponse keys:`, Object.keys(apiResponse || {}));
  if (apiResponse?.templateData) {
    console.log(`[DEBUG] templateData keys:`, Object.keys(apiResponse.templateData));
  }

  const apiData: ParentType[] = apiResponse?.data ?? [];

  const mappedServices = (apiData ?? []).map((item, index) => {
    const typeSpecificTitle =
      type === "home"
        ? item?.templateData?.homepageCardContent?.title
        : type === "about"
          ? item?.templateData?.aboutUsContent?.title
          : type === "parent"
            ? item?.templateData?.parentServicesContent?.title
            : item?.title;

    const typeSpecificDescription =
      type === "home"
        ? item?.templateData?.homepageCardContent?.description
        : type === "about"
          ? item?.templateData?.aboutUsContent?.description
          : type === "parent"
            ? item?.templateData?.parentServicesContent?.description
            : item?.shortDescription || item?.description;

    return {
      id: item?.id ?? "",
      icon: item?.imageUrl || "/icons/ai-brain.svg",
      title: typeSpecificTitle || item?.title || " ",
      description:
        typeSpecificDescription ||
        item?.shortDescription ||
        item?.description ||
        "",

      state: index === 0,

      lists:
        (item.templateData?.whatWeDo?.items ?? []).map(
          (i) => i?.title ?? ""
        ),

      href: `${item?.hasPage ? `/services/${item.slug}` : "#"}`,
    };
  });

  return {
    ...baseData,
    slider: {
      service1: mappedServices,
      service2: [],
      service3: [],
      service4: [],
      service5: [],
      service6: [],
    },
  };
}
