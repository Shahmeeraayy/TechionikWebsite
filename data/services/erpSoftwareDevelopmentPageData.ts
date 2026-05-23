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

type ErpBlog = {
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
    "We build enterprise systems that unify operations, improve visibility, and support long-term growth.",
  solution: "ERP software development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  category: item.category,
  stats: [],
}));

const blogs: ErpBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const erpSoftwareDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "ERP Development Technologies",
    middleTitle: "We Use",
    description:
      "Our ERP specialists use enterprise platforms, modern frameworks, cloud providers, analytics tools, and integration layers to build resilient business systems.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps"],
  techIcons: [
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend"] },
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend"] },
    { name: "MongoDB", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "MySQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "Java", icon: "/icons/java.svg", category: ["Backend"] },
    { name: ".NET", icon: "/icons/dot.svg", category: ["Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Odoo", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "SAP", icon: "/icons/cloud.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "OpenText", icon: "/icons/cloud.svg", category: ["Backend"] },
    { name: "BizTalk", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Power BI", icon: "/icons/data-line.svg", category: ["Frontend", "Database"] },
    { name: "Tableau", icon: "/icons/data-line.svg", category: ["Frontend", "Database"] },
    { name: "Oracle BI", icon: "/icons/data-line.svg", category: ["Frontend", "Database"] },
    { name: "IoT", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "Microservices", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "GraphQL", icon: "/icons/browser.svg", category: ["Backend"] },
  ],
};

export const erpSoftwareDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title:
      "ERP Software Development Services | Techionik - AI-Powered Custom ERP Systems",
    description:
      "Techionik delivers full-cycle ERP software development services with custom ERP systems, mobile applications, implementation, AI integration, cloud ERP, migration, consulting, and dashboard development for startups and enterprises.",
    keywords: [
      "ERP software development services",
      "custom ERP development",
      "cloud ERP development",
      "ERP implementation services",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "ERP Software Development Services",
      subtitle: "",
      description:
        "We deliver full-cycle ERP services to organizations across 12+ industries, designing and developing custom ERP solutions aligned with their unique business processes. As a trusted custom ERP development company, we build AI-powered, scalable, and business-ready ERP systems that adapt seamlessly to startups, SMBs, and large enterprises.",
      image: heroImage,
      imageAlt: "ERP software development hero banner",
      ctaText: "Talk to an ERP Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "ERP Software Development",
    spanTitle: "Services We Offer",
    title2: "",
    reviews: defaultReviewImages,
    RightDescription1:
      "We deliver end-to-end ERP software development led by skilled ERP developers, IT consultants, and QA engineers, integrating AI, analytics, and IoT to automate core business processes and build high-end, scalable ERP systems that drive efficiency and growth.",
    RightDescription2:
      "Our ERP solutions unify business operations across finance, HR, inventory, supply chain, CRM, dashboards, and reporting so teams can make faster decisions with greater confidence.",
    buttonLabel: "Request an ERP Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "ERP Software Development Services We Offer",
    mainDescription:
      "We design integrated ERP systems that automate core processes, connect departments, and provide real-time visibility across mobile, web, and cloud environments.",
    cards: [
      {
        id: 1,
        title: "Custom ERP System Development",
        description: [
          "We build fully integrated enterprise systems using Node.js, Angular or React, and MongoDB.",
          "These systems automate business processes and provide real-time visibility for better decisions.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "ERP Mobile Applications Development",
        description: [
          "We design ERP mobile applications and cloud ERP solutions for SaaS, web, and mobile systems.",
          "Push notifications, analytics, and API connectivity keep teams informed and productive.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "ERP Implementation",
        description: [
          "We cover the complete ERP implementation process from business analysis to post-launch support.",
          "Integration tools and enterprise buses help unify systems across the organization.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "ERP AI Integration Services",
        description: [
          "We combine ML, NLP, computer vision, predictive analytics, and cloud automation to create intelligent ERP ecosystems.",
          "AI-driven orchestration improves workflows and boosts responsiveness.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 5,
        title: "Cloud ERP Development Services",
        description: [
          "We build flexible, reliable Cloud ERP solutions on AWS, Azure, Java, .NET, Python, and Node.js.",
          "The result is real-time data access and collaboration across all devices.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "ERP Migration Services",
        description: [
          "We use AI-driven error detection, automated mapping, ETL tools, and cloud frameworks to upgrade ERP systems safely.",
          "Migration protects data integrity while improving efficiency and automation.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 7,
        title: "ERP Consulting",
        description: [
          "We provide low-risk implementation guidance, architecture design, integration strategy, and compliance planning.",
          "Consulting aligns the ERP program with business goals and secure deployment practices.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 8,
        title: "Custom ERP Dashboards",
        description: [
          "We build real-time dashboards with role-based KPIs and business intelligence using Power BI, Tableau, and Oracle BI.",
          "Leadership gets precise, data-driven insights without visibility gaps.",
        ],
        icon: "/icons/data-line.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Techionik",
    spanTitle: "for Custom ERP Software Development Company",
    description:
      "Techionik is one of the leading custom ERP software companies, delivering scalable solutions that align with business needs and long-term growth.",
    cards: [
      {
        id: 1,
        title: "Proven Expertise and Track Record",
        description:
          "With 5+ years delivering ERP solutions and 20+ ERP projects across healthcare, retail, automotive, and manufacturing, we focus on measurable ROI.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End Custom ERP Development",
        description:
          "We manage business analysis, design, development, integration, deployment, and post-implementation support in one delivery flow.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Certified Quality and Robust Security",
        description:
          "ISO 9001 and ISO 27001 practices, encryption, vulnerability testing, and NDAs help protect sensitive business data.",
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Agile and Flexible Development Approach",
        description:
          "Iterative delivery and AI-driven planning help us adapt quickly while keeping ERP builds scalable and future-ready.",
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "Platform Expertise and Technology Focus",
        description:
          "We build on Odoo, SAP, Microsoft, OpenText, AWS, DevOps, microservices, and cloud architecture for resilient ERP systems.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "Customization and Scalability",
        description:
          "ERP systems are tailored to business processes with modular functionality, automation, and integration capabilities that scale with growth.",
        icon: "/icons/streamline.svg",
      },
      {
        id: 7,
        title: "Continuous Collaboration and Support",
        description:
          "We stay close to your team after launch with support, enhancements, and UX/UI optimizations that keep adoption strong.",
        icon: "/icons/browser.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "ERP Outsourcing",
    MiddleTitle: "Models",
    lastTitle: "",
    description:
      "Choose the engagement model that fits your ERP scope, budget, and governance needs.",
    items: [
      {
        title: "Staff Augmentation",
        description:
          "<ul><li>Rapidly scale ERP teams with vetted specialists</li><li>Access niche ERP expertise without long-term commitments</li><li>Keep control over project execution and quality</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Team",
        description:
          "<ul><li>Full-time ERP experts committed to your roadmap</li><li>Flexible team size as requirements evolve</li><li>Consistent delivery and long-term collaboration</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Project-Based Outsourcing",
        description:
          "<ul><li>Defined scope, timeline, and budget for ERP delivery</li><li>Fixed-cost structure for predictable ROI</li><li>Expert management without internal resource strain</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Managed IT Services",
        description:
          "<ul><li>Continuous ERP monitoring, maintenance, and optimization</li><li>Proactive security and compliance assurance</li><li>Lower operational overhead while improving reliability</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "ERP Software Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What is an ERP system and how does it optimize business operations?",
        answer:
          "An ERP system unifies finance, HR, inventory, supply chain, and CRM into a modular platform that automates workflows and provides real-time analytics.",
      },
      {
        id: 2,
        question: "Why should a business invest in custom ERP development?",
        answer:
          "Custom ERP aligns the system with your workflows, integrations, and compliance needs, usually delivering better fit and ROI than off-the-shelf software.",
      },
      {
        id: 3,
        question: "How do cloud-based and on-premise ERP systems differ?",
        answer:
          "Cloud ERP is easier to scale and access remotely, while on-premise ERP provides more direct control and data residency flexibility.",
      },
      {
        id: 4,
        question: "What core features should a custom ERP system include?",
        answer:
          "Core modules usually include finance, inventory, HR, payroll, CRM, reporting, and API-enabled integrations based on your business priorities.",
      },
      {
        id: 5,
        question: "Can a custom ERP integrate with existing business software?",
        answer:
          "Yes. API-first, modular ERP architectures make it possible to connect CRM, eCommerce, accounting, HR, and payment systems.",
      },
      {
        id: 6,
        question: "How is data security ensured in ERP development?",
        answer:
          "We use multi-layer encryption, role-based access, multi-factor authentication, secure APIs, and compliance-driven controls such as GDPR and HIPAA.",
      },
      {
        id: 7,
        question: "How long does custom ERP software development typically take?",
        answer:
          "Basic systems may take a few months, while multi-module cloud-native ERP platforms often require 6 to 12 months or more.",
      },
      {
        id: 8,
        question: "What challenges occur during ERP development and implementation?",
        answer:
          "Common challenges include data migration, system integration, user adoption, and change management, which we address with phased rollouts and training.",
      },
      {
        id: 9,
        question: "Is a custom ERP system scalable for growing enterprises?",
        answer:
          "Yes. Modular, cloud-native ERP systems can add users, modules, and workflows as your organization grows.",
      },
      {
        id: 10,
        question: "How do I choose the right ERP development partner?",
        answer:
          "Choose a partner with enterprise ERP experience, modular architecture expertise, secure development practices, and strong post-launch support.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Build an ERP system that matches the way your business actually runs.",
    description:
      "Techionik builds AI-powered ERP systems that unify operations, improve visibility, and support startups, SMBs, and enterprises with secure scalability.",
    backgroundImage: heroImage,
    imageAlt: "ERP development CTA",
    buttonText: "Talk to an ERP Consultant",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: erpSoftwareDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "ERP Development Process at Techionik",
    descriptiption:
      "Our custom ERP development services deliver solutions aligned with your business processes, goals, and needs using a structured agile approach.",
    mainDescription:
      "We keep discovery, design, development, integration, QA, and support coordinated so ERP delivery stays predictable and business-focused.",
    card: [
      {
        id: 1,
        title: "Discovery and Requirements Engineering",
        description:
          "<p>We analyze business strategy, workflows, goals, integrations, and industry requirements to define the ERP scope and setup plan.</p>",
      },
      {
        id: 2,
        title: "Design and Architecture Planning",
        description:
          "<p>We craft scalable system architecture, role-based UX/UI, secure technology stacks, and detailed data flow diagrams.</p>",
      },
      {
        id: 3,
        title: "Project Planning and Resource Allocation",
        description:
          "<p>We define scope, modules, milestones, budgets, timelines, and KPIs so the team and delivery plan stay aligned.</p>",
      },
      {
        id: 4,
        title: "ERP Development and Customization",
        description:
          "<p>Our engineers configure, customize, and extend ERP software while implementing business process automation and real-time analytics.</p>",
      },
      {
        id: 5,
        title: "Integration and Data Migration",
        description:
          "<p>We integrate ERP with CRM, IoT, vendor portals, and legacy platforms while moving data securely and preserving integrity.</p>",
      },
      {
        id: 6,
        title: "Quality Assurance and Testing",
        description:
          "<p>Comprehensive testing covers functionality, performance, compatibility, security, and usability before production deployment.</p>",
      },
      {
        id: 7,
        title: "Deployment, User Training and Ongoing Support",
        description:
          "<p>We deploy the ERP, train users, and provide maintenance and upgrades so the system remains scalable and aligned with strategy.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "ERP Solutions for Industries",
    gradientTitle: "We Serve",
    afterGradientTitle: "",
    description:
      "We design and develop custom ERP solutions tailored to industry-specific workflows, compliance requirements, and scale demands.",
    slides: [
      {
        title: "Healthcare",
        description:
          "ERP for patient records, inventory, payroll, billing, and compliance with real-time dashboards for operational efficiency.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Retail and eCommerce",
        description:
          "ERP for inventory control, multi-channel sales, demand forecasting, and CRM systems that improve responsiveness.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "ERP for production schedules, materials, supply chain, and quality assurance with operational visibility.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Construction and Real Estate",
        description:
          "ERP for project management, budgeting, contracts, vendor coordination, and financial reporting across developments.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Small Business and Startups",
        description:
          "Modular ERP systems for startups that automate core processes, improve visibility, and scale with the business.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Finance and Banking",
        description:
          "ERP for transaction processing, cash flow tracking, risk assessment, and regulatory reporting with transparency.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Education and Workforce Management",
        description:
          "ERP for enrollment, attendance, scheduling, payroll, and financial aid within a unified compliance-friendly system.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ERP Software Development Services",
    serviceType: "ERP Software Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "ERP software development services for custom ERP systems, cloud ERP, implementation, migration, dashboards, AI integration, and enterprise process automation.",
  }),
};
