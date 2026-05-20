export interface IdeaBannerData {
  title: string;
  highlight?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  buttonVariant?: "glass" | "gradient" ;
  buttonIcon?: string;
}

export const ideaBannerContent: IdeaBannerData = {
  title: "Got an idea or Concerns?",
  highlight: "idea",
  description: "Whether you have a groundbreaking idea or specific concerns about your project, we're here to listen and help. Let's turn your vision into reality together.",
  ctaText: "Let’s Discuss",
  ctaLink: "contact-us",
  backgroundImage: "/banners/idea-banner.png",
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
