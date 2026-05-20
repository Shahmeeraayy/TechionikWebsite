export interface ServiceHeroSlides {
  title: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export const ServiceHeroData: ServiceHeroSlides[] = [
  {
    title: "Technology Services",
    description:
      "As a technology services provider, we help businesses optimize operations, enhance growth, and offer a competitive edge through our IT solutions.",
    image: "/banners/Hero.webp",
    ctaText: "Let's Discuss Your Idea",
    ctaLink: "#contact",
  },
];
