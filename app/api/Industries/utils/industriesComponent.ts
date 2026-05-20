import { getAllIndustries } from "./getIndustries"

export async function getIndustriesComponent(){
    const industriesFromApi = await getAllIndustries()
    const industriesData = {
    title: "We Help Businesses ",
    gradientTitle: "Use Technology to Grow, ",
    afterGradientTitle: "Innovate, and Succeed",
    description: 
      "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",
    slides: (industriesFromApi || []).map((industry) => ({
      title: industry?.title ?? " empty title",
      description: industry?.description ?? " empty description",
      link: industry?.link ?? "",
      bgImage: industry?.image || "/banners/dollers.webp",
      icon: "", // Default empty icon since API doesn't provide icons
    })),
  }
    return industriesData
}