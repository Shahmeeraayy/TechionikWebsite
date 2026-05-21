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

type FullStackBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
};

const heroImage = "/images/home/Software-Development.webp";

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
    "We build full-stack products that connect interfaces, APIs, data, and cloud infrastructure into one reliable delivery flow.",
  solution: "Full-stack development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: FullStackBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const fullStackDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Full-Stack Development",
    middleTitle: "Tools and Frameworks",
    lastTitle: "We Use",
    description:
      "Our full-stack developers use modern front-end, back-end, mobile, cloud, and DevOps tools to build secure, scalable applications with clean integrations, strong performance, and maintainable architecture.",
  },
  filters: [
    "Frontend",
    "Backend",
    "Mobile Platforms",
    "Database",
    "Cloud/DevOps",
    "AI/ML",
  ],
  techIcons: [
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend"] },
    { name: "Vue.js", icon: "/icons/tech-Vue.svg", category: ["Frontend"] },
    { name: "Next.js", icon: "/next.svg", category: ["Frontend"] },
    { name: "JavaScript", icon: "/icons/tech-Javascript.svg", category: ["Frontend"] },
    { name: "TypeScript", icon: "/icons/coding.svg", category: ["Frontend"] },
    { name: "HTML5", icon: "/icons/tech-Html.svg", category: ["Frontend"] },
    { name: "CSS3", icon: "/icons/css.svg", category: ["Frontend"] },
    { name: "Node.js", icon: "/icons/tech-Node.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Java", icon: "/icons/tech-Java.svg", category: ["Backend"] },
    { name: ".NET", icon: "/icons/tech-Dot-Net.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "PHP", icon: "/icons/tech-Php.svg", category: ["Backend"] },
    { name: "Go", icon: "/icons/tech-Go.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "GraphQL", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "Flutter", icon: "/icons/cloud.svg", category: ["Mobile Platforms"] },
    { name: "React Native", icon: "/icons/react-icon.svg", category: ["Mobile Platforms"] },
    { name: "Firebase", icon: "/icons/browser.svg", category: ["Mobile Platforms", "Cloud/DevOps"] },
    { name: "Kotlin Multiplatform", icon: "/icons/coding2.svg", category: ["Mobile Platforms"] },
    { name: "SQL", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "MySQL", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "MongoDB", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "Redis", icon: "/icons/cloud.svg", category: ["Database", "Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "CI/CD", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "SSR", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "PWA", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "AI-assisted Tools", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Automation", icon: "/icons/vibe-coding.svg", category: ["AI/ML"] },
  ],
};

export const fullStackDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Full-Stack Development Services | Techionik",
    description:
      "Techionik delivers full-stack development services with top 3% engineers, UI-to-database engineering, front-end, back-end, DevOps, API, and cloud solutions for web and mobile products across 13+ industries.",
    keywords: [
      "full-stack development services",
      "custom full stack development services",
      "AI-powered full stack development services",
      "end to end full stack development services",
      "full-stack development outsourcing",
      "full-stack software development company",
      "full-stack web and app development company",
      "top full-stack development company",
      "full-stack development partner",
      "hire full stack developers",
      "nearshore and offshore teams",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Full-Stack Development Services",
      subtitle: "UI-to-database engineering for modern web and mobile products.",
      description:
        "We are the top full-stack development company that provides UI-to-database engineering, front-end, back-end, DevOps, API, and cloud solutions developed by top 3% full-stack engineers. Our high-quality web and mobile products serve 13+ industries and are delivered with consistency through disciplined full-stack engineering practices.",
      image: heroImage,
      imageAlt: "Full-stack development hero banner",
      ctaText: "Talk to a Full-Stack Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Full-Stack Development Services",
    spanTitle: "We Provide",
    title2: "",
    reviews: defaultReviewImages,
    RightDescription1:
      "As a full-stack software development company, our nearshore and offshore teams provide full stack development experts skilled in front-end, back-end, mobile, cloud, and DevOps, delivering end-to-end development services for complex products and demanding engineering workloads.",
    RightDescription2:
      "We build top-tier full stack development solutions with clean architecture, optimized integrations, performance tuning, and continuous product support so your product stays maintainable and ready to scale.",
    buttonLabel: "Hire Full-Stack Developers",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Full-Stack Development Services We Provide",
    mainDescription:
      "We combine front-end, back-end, mobile, cloud, and product design expertise to deliver full-stack applications that are fast, secure, maintainable, and aligned with business goals.",
    cards: [
      {
        id: 1,
        title: "Front End development",
        description: [
          "Front-end engineers develop custom UI/UX using React, Angular, Vue, TypeScript, and modular CSS architectures, applying SSR, hydration, accessibility standards, and SPA/PWA patterns to improve render speed, UI consistency, and cross-platform product delivery.",
        ],
        icon: "/icons/react.svg",
      },
      {
        id: 2,
        title: "Back End development",
        description: [
          "As full stack development consultants we design backend architectures engineered to handle heavy workloads, maintain steady availability, and support high-intensity processing using Node.js, Python, Java, PHP, .NET, and SQL or NoSQL systems.",
          "Our full stack IT services provide secure APIs, reliable server behavior, and strong foundations for custom enterprise applications.",
        ],
        icon: "/icons/tech-Node.svg",
      },
      {
        id: 3,
        title: "Mobile App Development",
        description: [
          "We architect cross-platform mobile applications with unified codebases, rapid delivery cycles, and engineered back-end systems.",
          "Our app developers deploy iOS and Android solutions using Flutter, Firebase, and AWS to handle growth demands and maintain a consistent user experience across all devices.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Full stack Web Development",
        description: [
          "We specialize in engineered systems crafted with React, Node, Next.js, and modern CI/CD workflows that keep releases stable and predictable.",
          "The result is fast load cycles, consistent UI behavior, structured UX flow, QA automation, and growth-ready foundations.",
        ],
        icon: "/next.svg",
      },
      {
        id: 5,
        title: "Web Application Development",
        description: [
          "Our web app developers use React, Node.js, and MongoDB to improve query performance, apply caching methods, and manage high-traffic workloads.",
          "As a full-stack development partner, we deliver fast applications with interfaces that grow with usage and support daily business operations.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 6,
        title: "E-Commerce Solutions",
        description: [
          "We offer e-commerce website design and development services that manage platform workloads through distributed service layers, protected payment routes, replicated data stores, and low-latency API flows.",
          "This supports high-volume transactions, precise inventory states, and stable checkout performance while enforcing strict customer-data safeguards across all operational tiers.",
        ],
        icon: "/icons/box-icon.png",
      },
      {
        id: 7,
        title: "Enterprise Software Development",
        description: [
          "Our enterprise platforms support heavy data activity and enforced access rules across demanding business operations.",
          "We deliver full-stack ERP and CRM systems built with Java, PostgreSQL, Oracle, and Node.js to improve workflow clarity, transaction security, consistent operations, and controlled data exposure.",
        ],
        icon: "/icons/tech-Java.svg",
      },
      {
        id: 8,
        title: "UI/UX Design",
        description: [
          "Full-stack UI/UX designers create research-driven flows, wireframes, and prototypes using color theory, visual language, and user-centered methods.",
          "We apply component systems, interaction models, motion guidelines, accessibility standards, and testing steps to shape reliable journeys across web, mobile, and SaaS products.",
        ],
        icon: "/icons/browser.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for a Full-Stack Development Company",
    description:
      "TECHIONIK is a trusted full-stack technology partner that delivers enterprise-grade software with top 3% engineers, modern frameworks, cloud architecture, and disciplined engineering practices that help teams ship faster and scale with confidence.",
    cards: [
      {
        id: 1,
        title: "Proven Full-Stack Expertise",
        description:
          "We deliver UI-to-database systems that connect front-end, back-end, mobile, and cloud layers into one delivery model for startups, SMBs, and enterprise teams.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End Development Management",
        description:
          "From architecture and prototyping to coding, API integration, QA, deployment, and support, we manage the full product lifecycle with predictable execution.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "AI-Powered, Cloud-Native Architecture",
        description:
          "We combine AI integration, automation, cloud services, and microservices to create resilient systems that adapt to changing business and platform demands.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Security, Compliance, and Resilience",
        description:
          "Our delivery model emphasizes secure APIs, controlled access, testing, and release governance so your systems remain stable, compliant, and ready for scale.",
        icon: "/icons/check.svg",
      },
      {
        id: 5,
        title: "Client-Focused Collaboration & Ownership",
        description:
          "We work transparently with your team, keep communication tight, and ensure full ownership of code, data, and IP so you can move confidently.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement Across Nearshore and Offshore Teams",
        description:
          "Choose dedicated teams, team augmentation, or project-based delivery with nearshore and offshore models that expand engineering capacity without slowing delivery.",
        icon: "/icons/values.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible Full-Stack Development",
    MiddleTitle: "Outsourcing",
    lastTitle: "for Reliable Enterprise Solutions",
    description:
      "Our full-stack development outsourcing model addresses talent gaps, reduces operational overhead, and accelerates project delivery while delivering solutions aligned with your business goals and user experience objectives.",
    items: [
      {
        title: "Full-Stack Development Outsourcing",
        description:
          "<ul><li>Access expert engineers on demand for front-end, back-end, mobile, cloud, and DevOps work.</li><li>Lower infrastructure and development costs while accelerating delivery through agile and DevOps practices.</li><li>Deliver market-ready products faster without sacrificing architecture quality or performance.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Extend your internal engineering team instantly with full-stack specialists.</li><li>Address critical skill gaps while retaining full control over code, architecture, workflows, and delivery.</li><li>Keep execution aligned with your organizational and product objectives.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Full-Stack Developers",
        description:
          "<ul><li>Work with full-time developers focused exclusively on your project requirements and technical goals.</li><li>Integrate seamlessly into your existing workflow and communication rhythm.</li><li>Ensure consistency, security, and optimized performance across every release.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Nearshore and Offshore Teams",
        description:
          "<ul><li>Build distributed teams that fit your time zone, budget, and delivery expectations.</li><li>Keep collaboration structured with shared tooling, clear reporting, and consistent technical standards.</li><li>Scale engineering capacity without losing visibility or product quality.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Full-Stack Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What is full-stack development?",
        answer:
          "Full-stack development combines front-end, back-end, API, data, and cloud engineering so one team can deliver the full product experience. It is ideal when you need a coordinated approach to web apps, mobile apps, and enterprise platforms.",
      },
      {
        id: 2,
        question: "How does full-stack development empower businesses across industries?",
        answer:
          "Full-stack development reduces handoffs between teams, speeds up release cycles, and improves product consistency. Businesses in retail, finance, healthcare, manufacturing, education, and SaaS benefit from faster delivery and clearer technical ownership.",
      },
      {
        id: 3,
        question: "Why hire a full-stack development company instead of separate teams?",
        answer:
          "A full-stack development company can manage the entire product flow, from UI design to backend logic and deployment, which improves alignment, reduces integration friction, and keeps delivery predictable.",
      },
      {
        id: 4,
        question: "Can you handle full-stack web and app development together?",
        answer:
          "Yes. We build full-stack web and app development solutions that share APIs, authentication, data models, and release processes so web and mobile products stay consistent across devices.",
      },
      {
        id: 5,
        question: "Do you support AI integration, automation, and cloud architecture?",
        answer:
          "Yes. We provide AI-powered full stack development services that include workflow automation, predictive features, cloud-native deployment, and integration-ready architectures for modern products.",
      },
      {
        id: 6,
        question: "How do you keep the software secure and compliant?",
        answer:
          "We use secure coding practices, access control, testing, release governance, and cloud configuration standards to reduce risk. Our approach supports compliance-focused delivery for regulated industries and enterprise environments.",
      },
      {
        id: 7,
        question: "Can you work with nearshore and offshore teams or dedicated developers?",
        answer:
          "Yes. We offer full-stack development outsourcing, dedicated developers, team augmentation, and distributed nearshore and offshore models depending on your budget, pace, and collaboration needs.",
      },
      {
        id: 8,
        question: "What support do you provide after launch?",
        answer:
          "After launch, we provide monitoring, bug fixes, performance tuning, version updates, and continued support so the product stays stable, scalable, and ready for future growth.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Hire full stack developers",
    middleTitle: "to speed up product delivery with proven engineering expertise.",
    description:
      "Choose a full-stack development outsourcing partner to increase engineering capacity, shorten delivery cycles, and deliver market-ready apps.",
    backgroundImage: heroImage,
    imageAlt: "Full-stack development CTA",
    buttonText: "Choose Full-Stack Outsourcing",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: fullStackDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Full-Stack Development Process",
    descriptiption:
      "TECHIONIK delivers full-stack development solutions with a structured, end-to-end process combining modern technologies, agile delivery, and disciplined engineering practices to achieve measurable business results.",
    mainDescription:
      "We align user needs, architecture, APIs, interfaces, and release pipelines so the project moves as one coordinated delivery effort from discovery to support.",
    card: [
      {
        id: 1,
        title: "Requirement Analysis & Business Context",
        description:
          "<p>We define business goals, user needs, timelines, budget, and technical requirements to establish project scope, delivery model, and KPIs.</p>",
      },
      {
        id: 2,
        title: "Strategy, Planning & Architecture",
        description:
          "<p>We conduct market and audience research, define milestones, assign roles, and design the front-end, back-end, data, and deployment architecture around your product goals.</p>",
      },
      {
        id: 3,
        title: "UI/UX Design & Prototyping",
        description:
          "<p>We create wireframes, interactive prototypes, and high-fidelity designs that integrate brand identity, accessibility standards, and user feedback.</p>",
      },
      {
        id: 4,
        title: "Full-Stack Development & Coding",
        description:
          "<p>Our team implements scalable code using React, Angular, Vue, Node.js, .NET, Java, Python, and cloud-ready patterns, with API integrations, state management, and modular architecture.</p>",
      },
      {
        id: 5,
        title: "Testing, QA & Performance Evaluation",
        description:
          "<p>E2E testing covers cross-browser compatibility, device responsiveness, accessibility, usability, security, and performance metrics so the product remains reliable under real-world usage.</p>",
      },
      {
        id: 6,
        title: "Deployment & Continuous Optimization",
        description:
          "<p>We deploy applications via CI/CD pipelines, monitor runtime performance, refactor code, and optimize for speed, accessibility, and engagement while keeping the product future-ready.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Custom Full-Stack Development",
    gradientTitle: "Solutions for",
    afterGradientTitle: "Industry Needs",
    description:
      "We deliver custom full-stack development services with component-based architecture, resilient APIs, cloud-native deployment, and high-performance functionality to drive measurable business results across industries.",
    slides: [
      {
        title: "Retail",
        description:
          "Build responsive e-commerce platforms, POS dashboards, and inventory management interfaces with real-time analytics and secure checkout workflows.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create learning platforms, digital classrooms, and student portals with intuitive UX, responsive design, and data-driven dashboards.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop compliant citizen service portals, workflow automation, and legacy modernization solutions across departments.",
        link: "/industries/government",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Integrate core banking, trading, and compliance systems with secure, scalable software built for high-volume operations.",
        link: "/industries/finance",
        bgImage: "/images/industries/Insurance.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Manage EHR, telemedicine, and patient data securely with interoperable, cloud-based, HIPAA-compliant systems.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Automate production, supply chain, and IoT monitoring with real-time, data-driven enterprise software solutions.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Deliver MVPs, scalable platforms, and cloud-native architectures with agile, CI/CD-enabled development pipelines.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Streamline content management, streaming platforms, and audience analytics with secure, high-performance software systems.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full-Stack Development Services",
    serviceType: "Full-Stack Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Full-stack development services for web and mobile applications, API integrations, cloud-native platforms, e-commerce solutions, and enterprise software.",
  }),
};
