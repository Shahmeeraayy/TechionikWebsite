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
    title: "AI-Native Digital Engineering and",
    subtitle: "Automation Partner",
    description:
      "Accelerating enterprise-wide transformation through intelligent software, custom engineering, and agile teams.",
    video: "/banners/ai-vedio-2.webm",
    ctaText: "Let's Discuss Your Idea",
    ctaLink: "/contact-us",
  },
  {
    title: "Intelligent Software Engineering ",
    subtitle: "for the Age of AI",
    description:
      "We empower businesses with AI-driven software solutions, expert engineering, and clear collaboration to accelerate digital transformation and growth.",
    video: "/banners/AI1.webm",
    ctaText: "Start Your Project",
    ctaLink: "/contact-us",
  },
   {
    title: "AI Automation for the",
    subtitle: "Future of Business",
    description:
      "Multi-agent AI and expert engineers accelerating migrations, reducing workloads, and delivering software faster",
    video: "/banners/AI2.webm",
    ctaText: "Start Your Project",
    ctaLink: "/contact-us",
  },
    
];