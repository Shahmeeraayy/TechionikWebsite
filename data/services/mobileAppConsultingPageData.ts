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

type MobileAppConsultingBlog = {
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
    "We help teams modernize and launch mobile applications with clearer strategy, better performance, and stronger user engagement.",
  solution: "Mobile app consulting",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: MobileAppConsultingBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const mobileAppConsultingTechStackData: TechStackData = {
  headingData: {
    title: "Mobile App Consulting",
    middleTitle: "Technologies We Use",
    description:
      "Our consultants deliver enterprise-grade mobile strategies using Node.js, Python, Java, AWS, Azure, GCP, microservices, REST and GraphQL APIs, and high-availability architecture for secure, low-latency mobile systems.",
  },
  filters: ["Frontend", "Mobile Platforms", "Backend", "Cloud/DevOps", "Database"],
  techIcons: [
    { name: "Swift", icon: "/iso.svg", category: ["Mobile Platforms"] },
    { name: "Kotlin", icon: "/java.svg", category: ["Mobile Platforms"] },
    { name: "Java", icon: "/java.svg", category: ["Backend", "Mobile Platforms"] },
    { name: "React Native", icon: "/icons/react.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Flutter", icon: "/icons/vibe-coding.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "HTML5", icon: "/icons/html.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "GraphQL", icon: "/icons/coding.svg", category: ["Backend"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Firebase", icon: "/icons/cloud.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "OAuth 2.0", icon: "/icons/check-gradener.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "JWT", icon: "/icons/check.svg", category: ["Backend", "Cloud/DevOps"] },
  ],
};

export const mobileAppConsultingPageData = {
  templateVariant: "default",
  meta: {
    title:
      "Mobile App Consulting Services | Techionik - iOS, Android, Cross-Platform and PWA Strategy",
    description:
      "Techionik provides end-to-end mobile app consulting services covering market positioning, architecture, functionality, audits, testing, budget planning, monetization, modernization, and integration for iOS, Android, hybrid, cross-platform, and PWA solutions.",
    keywords: [
      "mobile app consulting services",
      "mobile app development consulting",
      "cross-platform app consulting",
      "mobile app modernization",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Mobile App Consulting Services",
      subtitle:
        "Strategy, architecture, and launch guidance for iOS, Android, cross-platform, and PWA products.",
      description:
        "We, a mobile app consulting company, provide end-to-end mobile app services, covering market positioning, app architecture, functionality, development process, audits, testing, budget planning, and monetization strategies to deliver user-centric native, cross-platform, and PWA solutions that drive growth and engagement worldwide.",
      image: heroImage,
      imageAlt: "Mobile app consulting hero banner",
      ctaText: "Talk to a Mobile Consultant",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Mobile App",
    spanTitle: "Development Consulting",
    title2: "Services We Offer",
    reviews: defaultReviewImages,
    RightDescription1:
      "We offer strategic platform-specific mobile app consulting for iOS, Android, hybrid apps, and cross-platform. Our services guide ideation, UX and UI design, push strategies, market analysis, feasibility studies, and roadmap planning to deliver optimized, high-performance, conversion-focused apps.",
    RightDescription2:
      "Our mobile consultants provide architecture guidance, integration strategy, performance optimization, and platform alignment to help you launch stable, secure, and efficient mobile applications.",
    buttonLabel: "Request a Mobile Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Mobile App Development Consulting Services We Offer",
    mainDescription:
      "We offer strategic platform-specific mobile app consulting for iOS, Android, hybrid apps, and cross-platform delivery, helping teams make better product, architecture, and roadmap decisions.",
    cards: [
      {
        id: 1,
        title: "Mobile App Development Services",
        description: [
          "Our dedicated mobile app developers create fully functional apps on iOS, Android, and cross-platform frameworks using Swift, Kotlin, Java, and HTML5.",
          "The consulting layer helps solve performance, security, and maintenance challenges early in the product lifecycle.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "Cross-Platform App Development",
        description: [
          "We offer cross-platform app development on iOS, Android, and web using React Native or Flutter.",
          "Integration with REST and GraphQL APIs, test coverage across devices, and secure maintainable architecture reduces code duplication and cost.",
        ],
        icon: "/icons/react.svg",
      },
      {
        id: 3,
        title: "Mobile App Modernization",
        description: [
          "We modernize legacy mobile apps using advanced frameworks, containerized architecture, cloud integration, and AI-assisted workflows.",
          "The result is better runtime performance, secure API gateways, improved UX, and maintainable code for fast expansion.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Mobile App Launch",
        description: [
          "We offer end-to-end mobile app launch consulting, including feasibility analysis, market research, architecture selection, feature planning, and cost estimation.",
          "This helps teams ship market-ready apps aligned with business goals and monetization plans.",
        ],
        icon: "/icons/arrow-right.svg",
      },
      {
        id: 5,
        title: "Mobile App Audit",
        description: [
          "We audit UI and UX, code quality, system architecture, security, compliance, and device compatibility.",
          "You receive gap analysis, technical recommendations, and performance optimization advice that improves retention and overall app quality.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 6,
        title: "Mobile App Integration Services",
        description: [
          "We integrate mobile apps with legacy systems, third-party APIs, and cloud platforms using microservices and event-driven patterns.",
          "This enables real-time synchronization, low-latency workflows, secure operations, and measurable efficiency gains.",
        ],
        icon: "/icons/coding.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Top Mobile App Consulting Company",
    description:
      "TECHIONIK delivers enterprise-grade mobile app consulting services, guiding startups and enterprises through architecture strategy, platform selection, secure integrations, microservices adoption, cloud enablement, CI/CD pipelines, and real-time data workflows.",
    cards: [
      {
        id: 1,
        title: "Proven Mobile App Expertise",
        description:
          "With 4+ years and 200+ projects, our top 3% engineers design scalable apps for iOS, Android, and cross-platform frameworks while improving load times, API response times, and concurrency support.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End Mobile App Lifecycle Consulting",
        description:
          "We advise across architecture design, modular planning, UI and UX evaluation, automated testing, deployment, and post-launch optimization using Agile and Scrum practices.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Security and Compliance Excellence",
        description:
          "We guide encryption, token-based authentication, multi-factor login, threat mitigation, and vulnerability handling with governance aligned to GDPR and ISO standards.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 4,
        title: "Advanced Technology Integration",
        description:
          "Our consulting ensures apps leverage cloud-native services, reusable components, microservices, event-driven architecture, predictive caching, analytics integration, and serverless patterns.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Client-Centric Project Governance",
        description:
          "Dedicated consultants, senior architects, DevOps engineers, QA specialists, and business analysts manage strategy, risk, KPI tracking, reporting, and IP ownership.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement Models",
        description:
          "We offer dedicated teams, hybrid staffing, or project-based consulting so clients can control scope, budget, and timelines with transparent reporting and performance monitoring.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 7,
        title: "Comprehensive Technical Team",
        description:
          "Our team includes mobile architects, backend engineers, DevOps specialists, QA engineers, and business analysts who support modern and legacy mobile ecosystems.",
        icon: "/icons/ai-brain.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Mobile App Consulting",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our mobile app consulting outsourcing models offer flexible engagement options, delivering expert guidance, optimized architecture, and long-term, high-performance mobile solutions.",
    items: [
      {
        title: "Mobile App Consulting Outsourcing",
        description:
          "<ul><li>Expert consultants in iOS, Android, React Native, and Flutter</li><li>Minimize development delays and reduce hiring overhead</li><li>Provide secure, scalable, enterprise-grade mobile architectures and API strategies</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Quickly onboard mobile specialists to fill technical gaps</li><li>Maintain full control over architecture, APIs, workflows, and CI/CD pipelines</li><li>Ensure consistent code quality and measurable performance metrics</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Mobile App Consulting Team",
        description:
          "<ul><li>Full-time consultants aligned with your project goals</li><li>Seamlessly integrate with internal teams and existing infrastructure</li><li>Optimize app performance, security, and API reliability across platforms</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full Mobile App Consulting Outsourcing",
        description:
          "<ul><li>End-to-end advisory and implementation across analysis, architecture, UI/UX, API integration, testing, deployment, and optimization</li><li>Reduce operational complexity while achieving enterprise-ready, future-proof mobile solutions</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Mobile App Consulting",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What does mobile app consulting include?",
        answer:
          "Mobile app consulting includes architecture analysis, tech stack evaluation, API strategy, CI/CD planning, code audits, performance profiling, and scalability mapping.",
      },
      {
        id: 2,
        question: "Can you improve an existing mobile app instead of building a new one?",
        answer:
          "Yes. We optimize existing apps through deep analysis of memory allocation, threading, API latency, caching, rendering speed, and crash logs, then modernize older codebases as needed.",
      },
      {
        id: 3,
        question: "How do you ensure a mobile app integrates smoothly with our backend or third-party systems?",
        answer:
          "We perform API contract review, schema validation, authentication flow mapping, load-test simulations, staging checks, and regression validation before integration begins.",
      },
      {
        id: 4,
        question: "How much does mobile app consulting cost?",
        answer:
          "Costs depend on the depth of consulting, such as architecture redesign, performance optimization, code review, modernization, or full lifecycle advisory.",
      },
      {
        id: 5,
        question: "How fast can we start working together?",
        answer:
          "We can start immediately with requirement mapping and diagnostics, and typically deliver a technical roadmap within 48 to 72 hours.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title:
      "Choose mobile app development consulting services that reduce technical friction and support dependable product evolution.",
    description:
      "We deliver mobile app consulting services focused on architecture planning, system integration, code quality improvement, and long-term performance stability to keep your application running efficiently.",
    backgroundImage: heroImage,
    imageAlt: "Mobile app consulting CTA",
    buttonText: "Talk to a Mobile Consultant",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: mobileAppConsultingTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Mobile App Consulting Process",
    descriptiption:
      "We provide end-to-end mobile app consulting services, guiding businesses through discovery, strategy, architecture, API integration, cloud infrastructure, CI/CD, QA, deployment, and continuous optimization.",
    mainDescription:
      "Our process keeps product strategy, technical design, and delivery priorities aligned so your mobile apps stay secure, scalable, and future-proof.",
    card: [
      {
        id: 1,
        title: "Discovery and Requirement Analysis",
        description:
          "<p>We evaluate business objectives, target audience, platform requirements, budget, and timeline so technical feasibility and KPIs are clearly defined.</p>",
      },
      {
        id: 2,
        title: "Strategy, Architecture and Team Planning",
        description:
          "<p>We design resilient app strategy, modular architecture, microservices patterns, and workflow mapping while planning milestones and team assignments.</p>",
      },
      {
        id: 3,
        title: "UX, UI and API Strategy",
        description:
          "<p>We create wireframes, prototypes, and interaction flows, then define REST, GraphQL, and event-driven API patterns with OAuth 2.0, JWT, caching, and integrations.</p>",
      },
      {
        id: 4,
        title: "Core Technical Blueprinting",
        description:
          "<p>We define modular architecture, offline-first design, analytics integration, messaging, and payment gateways so the solution is enterprise-ready and resilient.</p>",
      },
      {
        id: 5,
        title: "Cloud Infrastructure, CI/CD and DevOps Planning",
        description:
          "<p>We recommend cloud providers, containerization, serverless functions, CI/CD pipelines, automated testing, monitoring, and rollback strategies.</p>",
      },
      {
        id: 6,
        title: "QA, Testing and Performance Assessment",
        description:
          "<p>We validate unit, integration, load, stress, accessibility, and cross-device testing to ensure performance, security, and compatibility across platforms.</p>",
      },
      {
        id: 7,
        title: "Deployment Roadmap and Continuous Improvement",
        description:
          "<p>We provide deployment guidance, monitoring, query optimization, code refactoring, and continuous improvements that maximize resilience, security, and long-term growth.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Our Mobile App Consulting for",
    gradientTitle: "Industry",
    afterGradientTitle: "Needs",
    description:
      "We provide strategic mobile app consulting tailored to industry-specific challenges, advising on cloud-ready architectures, secure integrations, high-throughput APIs, and resilient workflows for measurable business impact.",
    slides: [
      {
        title: "Retail",
        description:
          "Guide inventory, POS, and ecommerce workflows with real-time transaction orchestration, automated stock reconciliation, API strategy, and high-availability planning.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Advise on digital classroom and learning management app architectures with role-based access, analytics pipelines, and offline-first delivery.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Shape cloud-native mobile solutions for citizen service portals, identity management, legacy modernization, and audit-ready automation.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Plan mobile app architectures for banking, fintech, and trading platforms with high-availability APIs, fraud detection, and low-latency workflows.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Guide EHR, telehealth, and diagnostic mobile systems with HIPAA-compliant pipelines, encryption, cloud orchestration, and monitoring.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Consult on mobile-enabled production automation, IoT device management, predictive maintenance, and expandable data pipelines.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Advise startups on MVP and cloud-native app platforms with microservices-ready architecture, API orchestration, and rapid deployment workflows.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Guide media and streaming platforms on high-throughput APIs, caching, distributed systems, cloud orchestration, and audience analytics.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Consulting Services",
    serviceType: "Mobile App Consulting",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Mobile app consulting services for strategy, architecture, modernization, integration, testing, launch planning, and performance optimization across iOS, Android, hybrid, cross-platform, and PWA solutions.",
  }),
};
