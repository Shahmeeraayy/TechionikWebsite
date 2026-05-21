import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { TechnologyExpertise } from "@/data/technologyExpertiseData";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { FAQ } from "@/data/FAQS";
import type { ContactHeroData } from "@/data/ConnectHero";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { CaseStudyType } from "@/views/home/CaseStudies";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";
import type { IndustriesData } from "@/data/Industries Data/types";

import { caseStudyData } from "@/data/caseStudyData";
import { DummyBlogData } from "@/data/blogData";
import { getSiteUrl } from "@/lib/site";

type UIUXBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
};

const heroImage = "/banners/Software-Development.webp";

const defaultReviewImages = [
  {
    image1: "/images/technology/clutch-reviews.png",
    width: 114,
    height: 54,
  },
  {
    image1: "/images/technology/google-reviews.png",
    width: 144,
    height: 42,
  },
  {
    image1: "/images/technology/good-firms.png",
    width: 125,
    height: 42,
  },
];

const caseStudies: CaseStudyType[] = caseStudyData.slice(0, 4).map((item) => ({
  id: item.id,
  brand: item.brandTitle ?? "TECHIONIK",
  title: item.title,
  description:
    item.description ??
    "We design user-centered digital products that improve clarity, conversion, and retention across every key interaction.",
  solution: "UI/UX design",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: UIUXBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const uiUxDesignTechStackData: TechStackData = {
  headingData: {
    title: "TECHIONIK Uses Tools for",
    middleTitle: "UI/UX Design",
    lastTitle: "Services",
    description:
      "Our UI/UX team leverages a comprehensive set of modern design and prototyping tools, including Figma, Adobe XD, Sketch, InVision, Axure, and Hotjar, to create interactive, responsive, and user-centered designs that scale for enterprise applications.",
  },
  filters: ["Frontend", "Mobile Platforms"],
  techIcons: [
    { name: "Figma", icon: "/icons/browser.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Adobe XD", icon: "/icons/coding.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Sketch", icon: "/icons/box-icon.png", category: ["Frontend", "Mobile Platforms"] },
    { name: "InVision", icon: "/icons/data-line.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Axure", icon: "/icons/cloud.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Hotjar", icon: "/icons/ai-brain.svg", category: ["Frontend"] },
  ],
};

export const uiUxDesignPageData = {
  templateVariant: "default",
  meta: {
    title: "UI/UX Design Services | Techionik - Intuitive, AI-Driven Digital Experiences",
    description:
      "Techionik delivers UI/UX design services for web and mobile, combining accessibility, prototyping, user testing, and human-centered interfaces to improve engagement, conversions, retention, and ROI.",
    keywords: [
      "UI/UX design services",
      "mobile app UI/UX",
      "web design services",
      "SaaS UI/UX design",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "UI/UX Design Services",
      subtitle: "Intuitive, AI-driven experiences for web and mobile.",
      description:
        "We deliver intuitive, AI-driven UI/UX design services for web and mobile, combining accessibility, prototypes, human-centered interfaces, and seamless user experiences to boost engagement, conversions, retention, and measurable ROI.",
      image: heroImage,
      imageAlt: "UI/UX design hero banner",
      ctaText: "Deliver Better Experiences",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "UI/UX",
    title2: "Design Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "Our UI/UX design services for web and mobile combine accessibility, prototypes, human-centered interfaces, and seamless user experiences to improve engagement, conversions, retention, and measurable ROI.",
    RightDescription2:
      "Our UI/UX company delivers research-driven wireframing, prototyping, user testing, AI-powered innovation, front-end design, low-code platforms, and app analytics to create intuitive, engaging, and high-performing digital experiences.",
    buttonLabel: "Deliver UI/UX Designs",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "UI/UX Development Services That Turn Ideas into Engaging User Experiences",
    mainDescription:
      "Our UI/UX company delivers research-driven wireframing, prototyping, user testing, AI-powered innovation, front-end design, low-code platforms, and app analytics to create intuitive, engaging, and high-performing digital experiences.",
    cards: [
      {
        id: 1,
        title: "Mobile App UI/UX Services",
        description: [
          "Intuitive Android and iOS app experiences built around smooth navigation, engaging visuals, and consistent brand identity.",
          "Interaction patterns designed to improve user satisfaction, retention, and product adoption across mobile platforms.",
        ],
        icon: "/icons/vibe-coding.svg",
      },
      {
        id: 2,
        title: "UI/UX Consulting",
        description: [
          "Senior UI/UX experts analyze user behavior, optimize interactions, and guide the product from ideation to launch.",
          "Design direction focused on stronger conversions, better usability, and reduced friction across key journeys.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 3,
        title: "Web Design Services",
        description: [
          "Visually appealing, brand-aligned digital products with seamless navigation and modern front-end experiences.",
          "Design decisions that support user engagement, web traffic growth, and measurable business outcomes online.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 4,
        title: "SaaS UI/UX Design Services",
        description: [
          "Interfaces that simplify complex workflows and improve clarity across enterprise-grade software platforms.",
          "High-performing product experiences that support usability, retention, and long-term platform adoption.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 5,
        title: "Wireframing & Prototyping",
        description: [
          "Low- and high-fidelity wireframes and interactive prototypes that define structure, layout, and usability.",
          "Visual validation that supports stakeholder alignment and smooth design-to-development handoff.",
        ],
        icon: "/icons/box-icon.png",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for UI/UX Design Services",
    description:
      "We design digital experiences that connect users and businesses through data-driven design, usability testing, and measurable results. Our approach ensures every interface is purposeful, accessible, and aligned with client goals.",
    cards: [
      {
        id: 1,
        title: "Global Experience and Design Expertise",
        description:
          "With over 10 years of global delivery, 500+ clients, and 250+ skilled designers and developers, TECHIONIK has built a reputation for creating functional, high-impact digital products.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "End-to-End Design Process",
        description:
          "We cover the complete design lifecycle, from research and wireframing to prototyping, testing, and final UI delivery with close collaboration across engineering and product teams.",
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "User-Centric and Data-Backed Decisions",
        description:
          "Every design decision is guided by user research, usability metrics, and behavioral insights using tools like Figma, Adobe XD, and Hotjar.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 4,
        title: "Certified Quality and Security Standards",
        description:
          "TECHIONIK follows ISO 9001 and ISO 27001 standards to maintain quality and data protection throughout the design and development process.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 5,
        title: "Innovation-Driven UI Solutions",
        description:
          "Our in-house innovation labs explore motion design, accessibility, and interactive prototyping to keep products future-ready and aligned with evolving user expectations.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 6,
        title: "Partnership for Measurable Impact",
        description:
          "We treat every engagement as a long-term collaboration, tracking usability ROI through engagement rates, conversion metrics, retention performance, and continuous improvement.",
        icon: "/icons/people-team.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible UI/UX Design Engagement",
    MiddleTitle: "Models for",
    lastTitle: "Scalable, User-Centered Digital Experiences",
    description:
      "Our UI/UX engagement models provide adaptable design solutions supported by expert designers and strategists. We ensure usability, scalability, and faster product delivery across digital platforms.",
    items: [
      {
        title: "UI/UX Design Outsourcing",
        description:
          "<ul><li>Access expert designers on demand</li><li>Reduce design and development expenses</li><li>Accelerate delivery through agile design workflows</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Design Team Augmentation",
        description:
          "<ul><li>Expand your in-house design capabilities instantly</li><li>Bridge skill gaps with senior UI/UX professionals</li><li>Retain full control over design direction and output</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated UI/UX Design Team",
        description:
          "<ul><li>Work with full-time designers committed to your product</li><li>Integrate seamlessly with your internal teams</li><li>Ensure consistent quality, brand alignment, and performance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "End-to-End Design Management",
        description:
          "<ul><li>Complete ownership from concept to deployment</li><li>Comprehensive research, design, and validation process</li><li>Lower operational complexity while improving design outcomes</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "UI/UX Design Services",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What technical capabilities should a UI/UX provider offer?",
        answer:
          "Expect design system architecture, reusable components, accessibility compliance, interactive prototypes, and analytics-driven usability testing to keep the product scalable and consistent.",
      },
      {
        id: 2,
        question: "How do UI/UX services impact business metrics?",
        answer:
          "Strong UI/UX can improve conversion rates, reduce errors, increase task completion, and boost engagement time while creating measurable ROI for the business.",
      },
      {
        id: 3,
        question: "How does UI/UX integrate into digital experience frameworks?",
        answer:
          "UI/UX works with content strategy, front-end architecture, analytics, and design-system governance so the product stays coherent across teams and channels.",
      },
      {
        id: 4,
        question: "How quickly can UI/UX design influence conversion and retention?",
        answer:
          "A well-executed UX can influence conversion and retention within the first user interactions by reducing friction and improving the clarity of key journeys.",
      },
      {
        id: 5,
        question: "What return on investment can businesses expect from UI/UX design?",
        answer:
          "Professional UI/UX can deliver strong ROI by improving usability, reducing errors, and increasing user satisfaction and retention over time.",
      },
      {
        id: 6,
        question: "What factors determine the cost and timeline of a UI/UX design project?",
        answer:
          "Project complexity, research depth, wireframes, interactive prototypes, visual design, testing cycles, tool stack, team size, and the number of iteration rounds all affect cost and delivery time.",
      },
      {
        id: 7,
        question: "What technical risks exist in UI/UX design engagements and how can they be mitigated?",
        answer:
          "Common risks include inconsistent assets, incomplete testing, accessibility gaps, and slow handoffs. Shared design systems, structured prototype-to-code workflows, accessibility audits, and continuous testing help reduce those risks.",
      },
      {
        id: 8,
        question: "What collaborative practices and tools are essential for enterprise UI/UX teams?",
        answer:
          "Version-controlled design assets, interactive prototypes, and tools such as Figma, Sketch, InVision, and Storybook keep design, engineering, and stakeholders aligned while maintaining quality and scalability.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Enhance User Experience with Expert UI/UX Design Solutions",
    description:
      "Partner with our UI/UX team to design intuitive interfaces that drive engagement and strengthen your digital presence.",
    backgroundImage: heroImage,
    imageAlt: "UI/UX design CTA",
    buttonText: "Talk to a UI/UX Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: uiUxDesignTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our UI/UX Design Process",
    descriptiption:
      "We shape digital experiences through research, structure, accessibility, and iterative refinement so every design decision supports business goals.",
    mainDescription:
      "The process keeps collaboration close so the final interface is usable, engaging, and ready for implementation.",
    card: [
      {
        id: 1,
        title: "Research and Discovery",
        description:
          "<p>We learn about your users, goals, constraints, and product vision before defining the experience strategy.</p>",
      },
      {
        id: 2,
        title: "UX Strategy and Information Architecture",
        description:
          "<p>We organize content, user journeys, and navigation patterns so the product structure is easy to understand and scale.</p>",
      },
      {
        id: 3,
        title: "Wireframing and Prototyping",
        description:
          "<p>We create low- and high-fidelity wireframes and interactive prototypes to validate ideas before the full build begins.</p>",
      },
      {
        id: 4,
        title: "Visual UI Design",
        description:
          "<p>We translate the strategy into polished screens, design systems, and branded interfaces that feel modern and cohesive.</p>",
      },
      {
        id: 5,
        title: "Usability Testing and Analytics",
        description:
          "<p>We test real interactions, review behavior, and use analytics to improve clarity, reduce friction, and increase conversions.</p>",
      },
      {
        id: 6,
        title: "Design Handoff and Implementation Support",
        description:
          "<p>We package the design for development with specifications, assets, and support that makes implementation smoother for engineering teams.</p>",
      },
      {
        id: 7,
        title: "Iteration and Optimization",
        description:
          "<p>After launch, we refine the experience using feedback, performance data, and continuous design improvements.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industries We Work With",
    gradientTitle: "UI/UX Design",
    afterGradientTitle: "",
    description:
      "We design user-centered digital experiences for products across SaaS, fintech, healthcare, retail, education, and enterprise platforms.",
    slides: [
      {
        title: "SaaS",
        description:
          "Simplify complex workflows and improve retention with interfaces that help users complete tasks faster.",
        link: "/industries/hi-tech",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Fintech",
        description:
          "Design secure, clear journeys for payments, onboarding, account management, and regulated financial products.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Create friendly, compliant interfaces for patient portals, care workflows, and digital health products.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Retail",
        description:
          "Build conversion-focused experiences for shopping, product discovery, and operations across retail products.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Deliver easy-to-use learning experiences that keep students, teachers, and admins moving with confidence.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Enterprise",
        description:
          "Design internal tools and dashboards that keep teams aligned, productive, and focused on the right information.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Turn product ideas into polished experiences that support fast validation, strong positioning, and growth.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Create accessible service portals and public-facing journeys that improve clarity, trust, and adoption.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    serviceType: "UI/UX Design",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "UI/UX design services for web and mobile, covering research, prototyping, accessibility, usability testing, and digital product experience design.",
  }),
};
