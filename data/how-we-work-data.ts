export interface HowWeWorkSlide {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HowWeWorkData: HowWeWorkSlide[] = [
  {
    title: "How We Work",
    subtitle: 
      "We help you address complex business problems with technology solutions.",
    description: "",
    image: "/images/about/about-us.png",
    ctaText: "lets Discuss Your Idea",
    ctaLink: "/contact-us",
  },
];
