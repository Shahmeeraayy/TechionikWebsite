import { CALENDLY_URL } from "@/utils/links";

export interface IdeaBannerData {
  title: string;
  highlight?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  buttonVariant?: "glass" | "gradient";
  buttonIcon?: string;
}

export const ideaBannerContent: IdeaBannerData = {
  title: "Ready to accelerate your roadmap?",
  highlight: "roadmap",
  description:
    "Get software development services, built around your needs. Schedule a call.",
  ctaText: "Schedule a Call",
  ctaLink: CALENDLY_URL,
  backgroundImage: "/banners/idea-banner.png",
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
