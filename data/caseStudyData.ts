export interface CaseStudies {
  id: number;
  title: string;
  brandTitle?:string;
  description?: string;
  btnText?: string;
  btnLink?: string;
  imageUrl: string;
  blogCategory: string[]; 
  date: Date;
  slug: string;
  layout: "image-top" | "image-bottom" | "image-left" | "image-right" | "image-background";
  isFeatured?: boolean;
  href:string;
  // content: string;
  // toc?: TocItem[]; // Added dynamic TOC property
}

export const caseStudyData: CaseStudies[] = [
  {
    id: 1,
    title: "Empowering South Asian Fashion Identity with Rastah",
    brandTitle:"Rastah",
    imageUrl: "/images/blog/blog-side-image.jpg",
    // description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["devops", "ai", "tech"],
    layout: "image-right",
    btnLink: `/case-study/rastah`,
    btnText: "Explore More",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",
  },
  {
    id: 2,
    title: "Blockchain Insights and Security Protocols",
    imageUrl: "/images/blog/blog-bg-image.png",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["blockchain", "tech"],
    layout: "image-bottom",
    btnLink: `/case-study/rastah`,
    btnText: "Explore More",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",

  },
  {
    id: 3,
    title: "Modern Tech Infrastructure",
    imageUrl: "/images/blog/blog1.jpg",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["tech", "web-dev"],
    layout: "image-top",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",
  },
  {
    id: 4,
    title: "Artificial Intelligence in Production",
    imageUrl: "/images/blog/blog2.jpg",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["ai", "cloud"],
    layout: "image-bottom",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",
  },
  {
    id: 6,
     title: "Empowering South Asian Fashion Identity with Rastah",
    brandTitle:"Rastah",
    imageUrl: "/images/blog/blog-side-image.jpg",
    // description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["web-dev", "tech"],
    layout: "image-left",
    btnLink: `/case-study/rastah`,
    btnText: "Explore More",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",

  },
  {
    id: 7,
    title: "Cloud Computing and Serverless",
    imageUrl: "/images/blog/blog-portrait-image.jpg",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["cloud", "devops"],
    layout: "image-top",
    date: new Date(),
    slug: "rastah",
    isFeatured: false, 
    href:"/case-study/rastah",
  },
  {
    id: 8,
    title: "Salesforce Ecosystem Guide",
    imageUrl: "/images/blog/blog1.jpg",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["salesforce", "tech"],
    layout: "image-background",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",
  },
  {
    id: 9,
    title: "UI/UX Design Principles",
    imageUrl: "/images/blog/blog2.jpg",
    description: "Explore CO-AI, the AI framework detecting synthetic films, plagiarism, and VFX i",
    blogCategory: ["ui-ux", "web-dev"],
    layout: "image-bottom",
    date: new Date(),
    slug: "rastah",
    isFeatured: false,
    href:"/case-study/rastah",
  },
];


