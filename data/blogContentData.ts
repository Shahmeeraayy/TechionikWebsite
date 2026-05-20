export interface BlogContentData{
    title: string;
    subtitle: string;
    description?: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
}
export const BlogData: BlogContentData[] = [
  {
    title: "Building Scalable Software",
    subtitle: "For Digital Success",
    description:
      "We build secure, reliable, and custom software solutions designed to streamline operations and accelerate business growth.",
    image: "/images/about/about-us.png",
    
    ctaLink: "#",
  },
];