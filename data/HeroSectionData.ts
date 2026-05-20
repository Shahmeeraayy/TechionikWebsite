export interface HeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  imageAlt?:string;
  video?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const heroHomeData: HeroSlide[] = [
  {
    title: "Accelerate Your Roadmap With AI-Native Engineering Talent.",
    subtitle: "",
    description:
      "Access vetted, AI-augmented software engineers across 30+ industries, built around your needs.",
    video: "/banners/ai-vedio-2.webm",
    ctaText: "Let's Discuss Your Idea",
    ctaLink: "/contact-us",
  },
  {
    title: "Intelligent Software Engineering for the Age of AI.",
    subtitle: "",
    description:
      "Get AI-driven software solutions, expert engineering, and clear collaboration to accelerate digital transformation and growth.",
    video: "/banners/AI1.webm",
    ctaText: "Start Your Project",
    ctaLink: "/contact-us",
  },
  {
    title: "AI Automation for the Future of Business.",
    subtitle: "",
    description:
      "Multi-agent AI and expert engineers, accelerating migrations, reducing workloads, and delivering software faster.",
    video: "/banners/AI2.webm",
    ctaText: "Start Your Project",
    ctaLink: "/contact-us",
  },
];
