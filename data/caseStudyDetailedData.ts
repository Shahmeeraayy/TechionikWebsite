import { HeroSlide } from "./HeroIndustryData";
export interface DetailCaseStudySectionInterface{
    title: string;
    spanTitle: string;
    description1: string;
    description2: string;
}
export interface CaseStudyDetailed {
  slug: string;
  name: string;
  heroData: HeroSlide[];
  caseStudySection: DetailCaseStudySectionInterface;
}
export const CaseStudyDetailedData: Record<string, CaseStudyDetailed> = {
  rastah: {
    name: "RASTAH",
    slug: "rastah",
    heroData: [
      {
        title: "Assetra a Wealth",
        subtitle: "Management Software",
        description:
          "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
        video: "/banners/ai-vedio-2.mp4",
        ctaText: "Let's Discuss Your Idea",
        ctaLink: "#contact",
      },
    ],
    caseStudySection: {
      title: "About",
      spanTitle: "Rastah",
      description1: "Rastah is a leading provider of innovative AI-powered solutions for businesses worldwide. With a focus on cutting-edge technology and exceptional customer service, Rastah helps companies streamline their operations, enhance productivity, and drive growth in an increasingly competitive marketplace.",
      description2: " Rastah is a subscription-based wealth management software platform built to streamline and simplify asset management for high-net-worth individuals, family offices, and their teams. With a centralized dashboard and advanced AI tools, Rastah enables seamless management of real estate holdings, bank accounts, company assets, lease contracts, and tenants—all in one place.",
    },
  },
};
