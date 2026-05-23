export interface HeroSlide {
    title: string;
    subtitle: string;
    description?: string;
    video: string;
    ctaText?: string;
    ctaLink?: string;
}

export const HeroIndustryData: HeroSlide[] = [
    {
        title: "Transforming Industries Through Innovation and Expertise",
        subtitle: "", // required
        description:
            "Delve into our case studies showcasing how precision and cutting-edge innovation at TECHIONIK drive transformative outcomes in sectors like oil and gas, fintech, healthcare, and more.",
        video: "/banners/ai-vedio-2.webm", // required
        ctaText: "Let's Discuss Your Idea",
        ctaLink: "/contact-us",
    },
];
