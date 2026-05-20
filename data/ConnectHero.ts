import { IconType } from "react-icons";
import { CALENDLY_URL } from "@/utils/links";

export interface ContactHeroFeature {
  icon: IconType;
  text: string;
}

export interface ContactHeroData {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  lgImage1?: string
  lgImage2?: string
  lgImage3?: string
  lgImage4?: string
  smImage1?: string
  smImage2?: string
  smImage3?: string
  smImage4?: string
  highlight?: string;
  description: string;
  backgroundImage?: string;
  imageAlt?: string;
  features?: ContactHeroFeature[];
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "glass" | "gradient" | "solid";
  buttonIcon?: string;
}
export const contactHeroContent: ContactHeroData = {
  title: "Ready to Elevate ",
  middleTitle: "Your Business?",
  lastTitle: "Elevate",
  description:
    "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
  backgroundImage:  "/banners/hero1.png",
  buttonText: "Let’s Talk",
  buttonLink: CALENDLY_URL,
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
