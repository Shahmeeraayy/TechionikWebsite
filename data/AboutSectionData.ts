import { CALENDLY_URL } from "@/utils/links";

export interface AboutHeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export const AboutUsData: AboutHeroSlide[] = [
  {
    title: "Software Development",
    subtitle: "& Global IT Outsourcing Company",
    description:
      "We build secure, reliable, and custom software solutions designed to streamline operations and accelerate business growth.",
    image: "/images/about/about-us.png",
    ctaText: "Book a Call",
    ctaLink: CALENDLY_URL,
  },
];
