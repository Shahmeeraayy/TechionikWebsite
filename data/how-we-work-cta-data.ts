import { IconType } from "react-icons";

export interface HowWeWorkCTA {
  title: string;
  highlight?: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant?: "glass" | "gradient" | "solid";
  buttonIcon?: string;
}


export const HowWeWorkCTAData = {
  title: "Ready to Elevate Your Business?",
  highlight: "Elevate",
  description:
    "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
  backgroundImage: "/banners/buissness-banner.png",
  buttonText: "Let’s Talk",
  buttonLink: "#contact",
  buttonVariant: "glass",
  buttonIcon: "/icons/arrow-right.svg",
};
