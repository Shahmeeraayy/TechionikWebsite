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

type QATestingBlog = {
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
    "We help teams strengthen release quality with structured QA, automation, and performance testing.",
  solution: "QA and software testing",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: QATestingBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const qaTestingTechStackData: TechStackData = {
  headingData: {
    title: "Advanced Tech Stack and Tools",
    middleTitle: "Used by Our QA Testing Team",
    description:
      "Our QA testers work with automation frameworks, AI-assisted testing tools, and cloud-native platforms to improve software reliability and release speed across web, mobile, API, and enterprise environments.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "Selenium", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "Cypress", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "Appium", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "XCTest", icon: "/iso.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "JUnit", icon: "/java.svg", category: ["Backend"] },
    { name: "Pytest", icon: "/python.svg", category: ["Backend"] },
    { name: "Postman", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "JMeter", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "k6", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "OWASP ZAP", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "Burp Suite", icon: "/icons/check-gradener.svg", category: ["Cloud/DevOps"] },
    { name: "TestRail", icon: "/icons/data-line.svg", category: ["Database", "Cloud/DevOps"] },
    { name: "Jira", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "Azure DevOps", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "BrowserStack", icon: "/icons/browser.svg", category: ["Frontend", "Cloud/DevOps"] },
    { name: "LambdaTest", icon: "/icons/cloud.svg", category: ["Frontend", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Terraform", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Helm", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AI Testing", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Blockchain QA", icon: "/icons/coding.svg", category: ["AI/ML"] },
  ],
};

export const qaSoftwareTestingPageData = {
  templateVariant: "default",
  meta: {
    title:
      "QA & Software Testing Services | Techionik - Full Cycle QA, Automation and Performance Validation",
    description:
      "Techionik provides full-cycle QA and software testing services with dedicated certified testing teams that can join in 1 to 4 days. We build custom testing frameworks, automate validation, and improve reliability across devices and platforms.",
    keywords: [
      "QA software testing services",
      "software testing company",
      "QA automation testing",
      "performance testing",
      "API testing",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Full-cycle Quality Assurance (QA) and Software Testing Services",
      subtitle: "Certified testing teams for faster, safer releases.",
      description:
        "As a software QA company, we deploy a dedicated certified testing team that can dive into your project within 1-4 days. We build custom testing frameworks, apply structured test execution supported by precision-driven strategies, and deliver full-cycle QA and AQA support powered by advanced methodologies including AI, blockchain, and automation to ensure reliability across all devices and platforms.",
      image: heroImage,
      imageAlt: "QA and software testing hero banner",
      ctaText: "Talk to a QA Lead",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "End-to-End Software Testing and",
    spanTitle: "QA Services",
    title2: "We Offer",
    reviews: defaultReviewImages,
    RightDescription1:
      "We deliver QA software testing services across the full software testing lifecycle, combining risk-based strategies, manual and automated testing, performance validation, and continuous monitoring using industry-standard tools to ensure bug-free software and faster release cycles.",
    RightDescription2:
      "Our QA specialists deliver end-to-end testing, automation, performance, and compliance checks to provide reliable, fully validated software that enhances performance, reduces risks, and strengthens business outcomes.",
    buttonLabel: "Request a QA Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "End-to-End Software Testing and QA Services We Offer",
    mainDescription:
      "We deliver QA software testing services across the full software testing lifecycle, combining risk-based strategies, manual and automated testing, performance validation, and continuous monitoring using industry-standard tools to ensure bug-free software and faster release cycles.",
    cards: [
      {
        id: 1,
        title: "QA Automation Testing",
        description: [
          "We build cross-language QA automation frameworks for large, complex systems under tight deadlines.",
          "The solutions cover UI, mobile, AI, and data testing, reduce maintenance, and integrate with CI/CD pipelines.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "Full Cycle Software Testing",
        description: [
          "We provide full-cycle custom QA and software testing across all development phases.",
          "Coverage includes mobile, desktop, localization, usability, and exploratory testing for enterprise-grade software.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 3,
        title: "Functional Testing",
        description: [
          "We validate modules, integrations, APIs, UI, databases, and security with living test suites that adapt to each sprint.",
          "This helps catch defects pre-release and keeps workflows consistent and reliable.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 4,
        title: "Regression Testing",
        description: [
          "Our QA engineers perform automated and manual regression testing using Selenium, JUnit, and Cypress.",
          "This helps preserve functional integrity, system reliability, data protection, and operational continuity after changes.",
        ],
        icon: "/java.svg",
      },
      {
        id: 5,
        title: "Performance Testing",
        description: [
          "We expose bottlenecks, uptime issues, and load capacity limits across the SDLC.",
          "Performance validation improves responsiveness, stability, and processing efficiency under peak traffic.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "Cross Browser Compatibility Testing",
        description: [
          "We validate applications across browsers and devices using automated frameworks and CI/CD pipelines.",
          "This reduces rendering issues, functional defects, and processing delays across web and mobile experiences.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 7,
        title: "API and Microservices QA",
        description: [
          "We validate API contracts, simulate failures, and virtualize dependencies for complex distributed systems.",
          "The outcome is faster delivery, less rework, and stronger integration stability.",
        ],
        icon: "/icons/arrow-right.svg",
      },
      {
        id: 8,
        title: "QA Outsourcing",
        description: [
          "We embed expert testers into your SDLC and combine automated and manual validation with CI/CD.",
          "This reduces release cost, accelerates cycles, and keeps quality visible and measurable.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 9,
        title: "Mobile App Testing",
        description: [
          "We validate iOS and Android applications using real-device clouds and CI-integrated pipelines.",
          "Appium and XCTest help us catch issues conventional QA workflows miss.",
        ],
        icon: "/iso.svg",
      },
      {
        id: 10,
        title: "Code Audit",
        description: [
          "Our code review process exposes structural flaws, unsafe dependencies, logic gaps, and hidden performance leaks.",
          "We harden the codebase so it is production-ready, secure, and maintainable over the long term.",
        ],
        icon: "/icons/check-gradener.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Best QA software testing company",
    description:
      "Since 2021, TECHIONIK has provided end-to-end QA solutions as a professional software testing company, covering UI, functional, performance, security, and automation testing. With full test coverage, real-time dashboards, and strict quality standards, we ensure reliable, enterprise-grade software performance for every project.",
    cards: [
      {
        id: 1,
        title: "Proven QA Expertise",
        description:
          "ISTQB and Cisco-certified QA engineers, top 3% specialists, and domain expertise across 11+ industries help us reduce defects and improve test quality.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End QA Strategy and Implementation",
        description:
          "We manage test planning, environment setup, execution, defect management, and closure with Agile and DevOps practices to accelerate delivery.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "QA Security, Governance and Compliance",
        description:
          "Our workflows are aligned with GDPR, ISO 9001, 27001, 20000, 14001, 45001, and 22301 to minimize operational and regulatory risk.",
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Advanced Automation and Testing Technology",
        description:
          "We leverage CI/CD pipelines, AI-assisted testing, cloud QA platforms, and performance monitoring tools for scalable validation.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 5,
        title: "QA-Focused Project Governance",
        description:
          "Dedicated QA leads, engineers, Agile coaches, and Scrum masters manage risk, KPIs, and delivery timelines with transparent reporting.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement for QA Projects",
        description:
          "Choose dedicated teams, part-time, monthly, or hourly models aligned to your time zone, budget, and delivery needs.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 7,
        title: "Comprehensive QA Technical Team",
        description:
          "Our team includes QA professionals, Agile developers, performance testers, security testers, and DevOps experts using Selenium, Appium, JMeter, Postman, Jenkins, and cloud QA platforms.",
        icon: "/icons/cloud.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Quality Assurance (QA) Outsourcing",
    MiddleTitle: "Models",
    lastTitle: "",
    description:
      "At offshore QA and testing company Techionik, we provide flexible QA outsourcing models including dedicated teams, project-based collaboration, and hybrid approaches to deliver expert guidance, optimized QA workflows, and bug-free software.",
    items: [
      {
        title: "QA Project Outsourcing",
        description:
          "<ul><li>Minimize release delays and hiring overhead</li><li>Implement secure, scalable QA architectures and automated frameworks</li><li>Ensure high-quality software delivery across all environments</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "QA Team Augmentation",
        description:
          "<ul><li>Maintain control over QA workflows and test pipelines</li><li>Ensure full test coverage and adherence to QA standards</li><li>Track and report measurable software quality metrics</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated QA Team",
        description:
          "<ul><li>Integrate seamlessly with internal teams and development pipelines</li><li>Optimize test execution, defect management, and reporting</li><li>Scale QA processes for web, mobile, and cloud environments</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full QA Outsourcing",
        description:
          "<ul><li>Reduce operational complexity and manage end-to-end QA</li><li>Ensure compliance, security, and reliable QA processes</li><li>Deliver predictable, high-performance software outcomes</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "QA and Software Testing",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "How do you optimize QA for performance, security, and reliability?",
        answer:
          "We use layered testing that combines performance simulation, security validation, reliability checks, automation, and observability so software stays fast, secure, and stable.",
      },
      {
        id: 2,
        question: "Do you support niche or legacy technology stacks?",
        answer:
          "Yes. We test SAP, mainframes, proprietary APIs, microservices, .NET, Java EE, and custom enterprise solutions with tailored automation and environment provisioning.",
      },
      {
        id: 3,
        question: "How do you take over QA from an existing vendor without slowing releases?",
        answer:
          "We use RTM-driven onboarding, environment mirroring, regression automation, and clear defect tracking so the takeover stays smooth and release cadence stays intact.",
      },
      {
        id: 4,
        question: "How quickly can QA engineers be onboarded or scaled for urgent project requirements?",
        answer:
          "We can onboard ISTQB-certified QA engineers within 48 to 72 hours for urgent projects and align them to your RTM and sprint plan immediately.",
      },
      {
        id: 5,
        question: "What metrics and KPIs demonstrate the effectiveness of QA services in real time?",
        answer:
          "We track test coverage, defect density, regression success rate, test execution velocity, and release stability through dashboards integrated with Jira, TestRail, or Azure DevOps.",
      },
      {
        id: 6,
        question: "Do you offer NDA and IP protection for projects?",
        answer:
          "Yes. We provide NDA coverage, copyright and source code ownership, full intellectual property protection, and secure handling of proprietary assets throughout the engagement.",
      },
      {
        id: 7,
        question: "Will a dedicated Project Manager or Scrum Master be assigned to my team?",
        answer:
          "Yes. A dedicated Project Manager or Scrum Master oversees sprint planning, progress tracking, issue resolution, and QA and development coordination for the full engagement.",
      },
      {
        id: 8,
        question: "What are the payment terms and methods after engagement?",
        answer:
          "Payments can be made via ACH or wire transfer to our U.S.-registered entity, with tax documentation provided for compliant transactions and international transfers supported.",
      },
      {
        id: 9,
        question: "How has Agile and DevOps changed the role of QA teams?",
        answer:
          "QA now works continuously across the lifecycle, shifting left, increasing automation, and collaborating more closely with developers so speed, quality, and feedback stay connected.",
      },
      {
        id: 10,
        question: "How does automation testing adoption impact delivery speed?",
        answer:
          "Automation reduces manual effort, increases regression coverage, and aligns QA with CI/CD, which shortens delivery timelines while keeping validation consistent and repeatable.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Partner with a trusted software testing provider to accelerate releases and eliminate critical software issues.",
    description:
      "Software testing services company helping businesses eliminate software risks, detect performance issues, identify hidden bugs, reduce downtime, and deliver end-to-end automated and manual testing with comprehensive quality assurance solutions.",
    backgroundImage: heroImage,
    imageAlt: "QA and software testing CTA",
    buttonText: "Hire QA Engineers",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: qaTestingTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Start the Enterprise QA and Software Testing Process Within 2-4 Weeks",
    descriptiption:
      "Our QA process follows an engineering-driven framework aligned with SDLC, STLC, Agile, DevOps, and CI/CD pipelines so each phase improves traceability, reduces defects, and supports predictable software quality.",
    mainDescription:
      "From test strategy through release monitoring, we keep quality, risk, and delivery aligned across microservices and cloud environments.",
    card: [
      {
        id: 1,
        title: "Requirement Analysis and Test Strategy",
        description:
          "<p>We analyze functional, non-functional, and integration requirements, build risk matrices, map compliance needs, and create RTMs that link acceptance criteria to QA activities.</p><p><strong>Tools/Practices:</strong> RTM, Jira, Confluence, risk matrices, compliance mapping.</p>",
      },
      {
        id: 2,
        title: "Test Design and Data Preparation",
        description:
          "<p>We design test cases, datasets, and automation scripts using Selenium, Cypress, JUnit, Pytest, and Postman to cover edge cases and end-to-end flows.</p><p><strong>Tools/Practices:</strong> Selenium, Cypress, JUnit, Pytest, Postman.</p>",
      },
      {
        id: 3,
        title: "Environment Setup and Framework Provisioning",
        description:
          "<p>We configure production-like environments with IaC, container orchestration, device farms, and integration endpoints so testing mirrors real deployment conditions.</p><p><strong>Tools/Practices:</strong> Terraform, Helm, device farms, integration endpoints.</p>",
      },
      {
        id: 4,
        title: "Automated Test Development and Execution",
        description:
          "<p>Reusable automation libraries, page objects, and API clients keep coverage maintainable while unit, integration, regression, system, and acceptance tests are executed continuously.</p><p><strong>Tools/Practices:</strong> Jira, Azure DevOps, TestRail, automation libraries, API clients.</p>",
      },
      {
        id: 5,
        title: "Defect Triage and Quality Control",
        description:
          "<p>Defects are categorized by severity, stability risk, and deployment priority while root-cause analysis and QA gates eliminate recurring failure patterns.</p><p><strong>Tools/Practices:</strong> defect triage, RCA, QA gates, release reviews.</p>",
      },
      {
        id: 6,
        title: "Performance, Security and Compliance Validation",
        description:
          "<p>We run load, stress, penetration, and vulnerability tests using k6, JMeter, and OWASP ZAP while validating HIPAA, PCI DSS, GDPR, and other compliance needs.</p><p><strong>Tools/Practices:</strong> k6, JMeter, OWASP ZAP, penetration testing, compliance checks.</p>",
      },
      {
        id: 7,
        title: "User Acceptance Testing and Observability",
        description:
          "<p>Stakeholders validate workflows, UX, accessibility, and real-world scenarios while observability tools help refine software behavior before release.</p><p><strong>Tools/Practices:</strong> UAT, monitoring dashboards, observability, accessibility review.</p>",
      },
      {
        id: 8,
        title: "Release Readiness and Governance Sign-off",
        description:
          "<p>We verify build stability, regression results, documentation, and KPIs so automated QA gates and DORA metrics support confident production approval.</p><p><strong>Tools/Practices:</strong> DORA metrics, coverage dashboards, release governance.</p>",
      },
      {
        id: 9,
        title: "Post-Release Monitoring and Optimization",
        description:
          "<p>We track system health, production logs, and error budgets after release so hotfix validation and continuous monitoring keep software reliable at scale.</p><p><strong>Tools/Practices:</strong> logs, error budgets, hotfix validation, continuous monitoring.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industry-Specific Quality Assurance",
    gradientTitle: "QA",
    afterGradientTitle: "Solutions",
    description:
      "We provide strategic QA consulting tailored to industry-specific challenges, advising on secure architectures, automated testing pipelines, compliance frameworks, and workflows engineered for operational resilience and measurable software quality.",
    slides: [
      {
        title: "Retail",
        description:
          "We ensure retail QA for POS, inventory, and e-commerce systems with testing for recommendation engines, stock forecasting, API integrations, and high-availability pipelines.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Our education QA validates LMS and digital classroom platforms, ensuring predictive analytics, offline-first models, secure content delivery, and role-based access.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "We deliver government QA for citizen portals, identity verification systems, and legacy modernization workflows with audit-ready testing and secure data handling.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Our finance QA verifies fraud detection, low-latency APIs, regulatory compliance, and resilient transaction workflows for secure, high-performance operations.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "We provide healthcare QA for EHR, telehealth, and diagnostic systems with HIPAA-compliant pipelines, encrypted data handling, and performance monitoring.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Our manufacturing QA validates IoT devices, predictive maintenance, production automation, and analytics workflows for operational efficiency.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "We support startup QA for AI-powered MVPs and cloud platforms with microservices-ready architectures, API orchestration, and rapid deployment workflows.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment and Media",
        description:
          "Our media QA protects streaming and content platform reliability with high-throughput APIs, caching strategies, distributed deployment, and audience analytics.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA and Software Testing Services",
    serviceType: "Quality Assurance and Software Testing",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Full-cycle QA and software testing services for functional, regression, performance, security, automation, API, and mobile validation across web, desktop, and cloud applications.",
  }),
};
