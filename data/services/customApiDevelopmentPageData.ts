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

type ApiBlog = {
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
    "We design secure API ecosystems that improve integration speed, system resilience, and product performance.",
  solution: "Custom API development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: ApiBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const customApiDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "API Development Technologies",
    middleTitle: "We Use",
    description:
      "Our API engineering team architects and implements secure, high-throughput interfaces using modern programming languages, cloud-native stacks, distributed databases, service meshes, and microservices.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps"],
  techIcons: [
    { name: "Java", icon: "/icons/java.svg", category: ["Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend"] },
    { name: ".NET", icon: "/icons/dot.svg", category: ["Backend"] },
    { name: "Go", icon: "/icons/go.svg", category: ["Backend"] },
    { name: "PHP", icon: "/icons/php.svg", category: ["Backend"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "GraphQL", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "gRPC", icon: "/icons/coding.svg", category: ["Backend"] },
    { name: "OpenAPI", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "Swagger", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "OAuth 2.0", icon: "/icons/check.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "JWT", icon: "/icons/check-gradener.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "MySQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "Redis", icon: "/icons/cloud.svg", category: ["Database", "Cloud/DevOps"] },
    { name: "Kafka", icon: "/icons/values.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "RabbitMQ", icon: "/icons/values.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Postman", icon: "/icons/arrow-right.svg", category: ["Backend"] },
  ],
};

export const customApiDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title:
      "Custom API Development Services | Techionik - Secure, Scalable API Engineering",
    description:
      "Techionik provides custom API development services with REST, GraphQL, SOAP, and gRPC, protected authentication, OWASP Top 10 security, OpenAPI documentation, and reliable integration support for products and platforms.",
    keywords: [
      "API development services",
      "custom API development",
      "API integration services",
      "REST API development",
      "GraphQL API development",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Custom API Development Services",
      subtitle: "",
      description:
        "As a leading custom API development company, we provide enterprise-grade API engineering with REST, GraphQL, SOAP, and gRPC, protected authentication and OWASP Top 10 security protocols. Our custom API development services are developed with clear documentation and OpenAPI standards to maintain the API lifecycle, support smooth integration, and improve product performance.",
      image: heroImage,
      imageAlt: "Custom API development hero banner",
      ctaText: "Talk to an API Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "API Development Services Driving",
    spanTitle: "The APIs",
    title2: "Behind Products You Use Every Day",
    reviews: defaultReviewImages,
    RightDescription1:
      "Our custom API development solution provides high-performance front-end integrations, real-time data handling, and dynamic interfaces with dedicated API developers applying React, Angular, Vue, and modern frameworks.",
    RightDescription2:
      "We deliver reliable, protected functionality, cross-platform compatibility, and tested, adaptable API solutions that accelerate business integrations and platform capabilities.",
    buttonLabel: "Request an API Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "API Development Services We Offer",
    mainDescription:
      "We deliver secure, high-performance API engineering across mobile, web, enterprise, and cloud ecosystems, combining design, integration, automation, and lifecycle governance.",
    cards: [
      {
        id: 1,
        title: "Mobile API Development",
        description: [
          "We develop mobile APIs that connect servers, databases, GPS, and messaging systems for smooth app performance.",
          "Token-based authentication and access control keep mobile data flows reliable and flexible.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "Web API Development",
        description: [
          "We build authenticated RESTful and real-time APIs for web applications and third-party services.",
          "The result is load-optimized interaction that supports UX, payments, streaming, and geolocation workflows.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "API Consulting",
        description: [
          "We provide end-to-end API consulting covering strategy, architecture, versioning, benchmarking, compliance, and documentation.",
          "Our consulting aligns API design with company goals and long-term integration plans.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 4,
        title: "API Automation and Management",
        description: [
          "We optimize API workflows using CI/CD, YAML deployments, centralized governance, automated testing, and observability tools.",
          "This improves throughput, reduces errors, and strengthens production readiness.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "Third-Party API Integration",
        description: [
          "We connect payment gateways, CRMs, ERPs, analytics, and cloud services using secure authentication and standardized protocols.",
          "The integrations extend app functionality and accelerate launches without losing data integrity.",
        ],
        icon: "/icons/arrow-right.svg",
      },
      {
        id: 6,
        title: "Custom API Development",
        description: [
          "We design REST, SOAP, GraphQL, and AI-powered APIs for mobile, web, and cloud platforms.",
          "Microservices and third-party integrations help teams deliver predictive insights and faster decisions.",
        ],
        icon: "/icons/cloud.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Top API Development Company",
    description:
      "TECHIONIK delivers custom APIs in Java and Python with secure integrations, end-to-end security, cloud enablement, optimized data pipelines, continuous validation, and microservices architecture. We are a trusted partner for startups and enterprises.",
    cards: [
      {
        id: 1,
        title: "Proven API Expertise",
        description:
          "With 13+ years delivering 100+ API projects, our developers architect enterprise-grade APIs in Java, Python, Node.js, .NET, Golang, and PHP.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End API Lifecycle Management",
        description:
          "We handle architecture design, API creation, automated testing, deployment, CI/CD integration, and ongoing maintenance.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Security and Compliance Excellence",
        description:
          "Encryption, access control, multi-factor authentication, threat detection, and vulnerability mitigation are built into the delivery model.",
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Advanced Technology Integration",
        description:
          "We engineer cloud-native architectures, reusable API components, optimized data pipelines, automated validation, microservices, and event-driven frameworks.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Client-Centric Project Management",
        description:
          "Project managers, API architects, DevOps engineers, QA specialists, and consultants oversee milestones, risk, reporting, and issue resolution.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement Models",
        description:
          "Choose dedicated teams, hybrid staffing, or project-based delivery with DevOps workflows, CI/CD automation, and continuous maintenance.",
        icon: "/icons/browser.svg",
      },
      {
        id: 7,
        title: "Comprehensive Technical Team",
        description:
          "Our API architects and backend teams support modern and legacy technologies, including COBOL, PowerBuilder, and Delphi when needed.",
        icon: "/icons/streamline.svg",
      },
      {
        id: 8,
        title: "Business-Aligned API Excellence",
        description:
          "We combine technical mastery with strategic insight to strengthen user experience, system resilience, compliance, and operational efficiency.",
        icon: "/icons/check-gradener.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Flexible API Development",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our flexible API development outsourcing models provide dedicated teams, project-based, or hybrid collaboration, offering top-tier API developers tailored to your project needs.",
    items: [
      {
        title: "API Development Outsourcing",
        description:
          "<ul><li>Skilled API engineers in Java, Python, Node.js, .NET, Golang, and PHP</li><li>Reduce development costs and avoid hiring delays</li><li>Deliver secure, high-performance, enterprise-ready APIs</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Quickly integrate API specialists to fill expertise gaps</li><li>Maintain full control over architecture, endpoints, and pipelines</li><li>Ensure consistent, high-quality API development aligned with business objectives</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated API Development Team",
        description:
          "<ul><li>Full-time API engineers focused exclusively on your project</li><li>Work seamlessly with internal systems and third-party integrations</li><li>Enhance API performance, data reliability, and operational efficiency</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full API Development Outsourcing",
        description:
          "<ul><li>Complete API lifecycle managed by expert teams</li><li>From discovery and design to testing, deployment, and ongoing optimization</li><li>Reduce operational burden while enabling resilient API solutions</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Custom API Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "How do you approach API architecture for complex products?",
        answer:
          "We define the API architecture around product goals, data flow, security, and lifecycle governance so integrations stay reliable as the platform scales.",
      },
      {
        id: 2,
        question: "Which technologies and frameworks do you use for API development?",
        answer:
          "We work with Java, Python, Node.js, .NET, PHP, Golang, microservices, serverless functions, and cloud-native architectures.",
      },
      {
        id: 3,
        question: "How can custom APIs improve my business workflows and efficiency?",
        answer:
          "Custom APIs automate data flows, unify systems, reduce manual intervention, and enable real-time operations across the business.",
      },
      {
        id: 4,
        question: "How do you ensure APIs are secure, compliant, and enterprise-ready?",
        answer:
          "We embed JWT, OAuth2, encryption, access control, threat detection, audit logs, and penetration testing into the API lifecycle.",
      },
      {
        id: 5,
        question: "Can you integrate APIs with legacy systems or third-party platforms?",
        answer:
          "Yes. We provide full-stack integration for legacy ERPs, CRMs, and third-party platforms with data mapping, protocol translation, and versioning.",
      },
      {
        id: 6,
        question: "How long does it take to develop and deploy a custom API?",
        answer:
          "Small APIs can take 2 to 4 weeks, while enterprise-grade solutions often need 8 to 16 weeks depending on scope and integrations.",
      },
      {
        id: 7,
        question: "What engagement models and support options do you provide?",
        answer:
          "We offer dedicated teams, hybrid models, and project-based delivery with SLA-backed maintenance, monitoring, and proactive issue resolution.",
      },
      {
        id: 8,
        question: "How do you keep APIs scalable, maintainable, and optimized over time?",
        answer:
          "We design modular architectures with reusable components, caching, rate-limiting, load-balancing, and continuous monitoring for long-term stability.",
      },
      {
        id: 9,
        question: "Why are APIs critical for modern applications?",
        answer:
          "APIs are the connective layer for modern software, and the research you shared shows how central they are: nearly 90% of developers use APIs, with 69% using third-party APIs and 20% using internal or private APIs.",
      },
      {
        id: 10,
        question: "How do APIs drive business innovation and efficiency?",
        answer:
          "An API-first approach helps teams build modular products, accelerate integrations, and ship features faster. Your research notes also show adoption rising from 66% in 2023 to 74% in 2024.",
      },
      {
        id: 11,
        question: "What types of APIs do you develop?",
        answer:
          "We develop RESTful, GraphQL, SOAP, and gRPC APIs, along with custom integrations, legacy modernization, and cloud-connected services.",
      },
      {
        id: 12,
        question: "How many APIs does a typical application use today?",
        answer:
          "Modern applications often rely on dozens of APIs, and the figures you provided suggest the average application now uses between 26 and 50 APIs.",
      },
      {
        id: 13,
        question: "What is the market potential for API management?",
        answer:
          "The API management market continues to expand rapidly, with the research you shared valuing it at USD 5.42 billion in 2024 and projecting growth to USD 32.77 billion by 2032 at a 25% CAGR.",
      },
      {
        id: 14,
        question: "How are AI capabilities integrated through APIs?",
        answer:
          "AI capabilities are commonly embedded through AI APIs that connect models to products, and your research notes point to a projected AI API market of $48.5 billion in 2024 with 31.3% CAGR from 2025 to 2030.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Connect, automate, and optimize with expert API integration services.",
    description:
      "Our dedicated API development team provides secure API workflows, real-time processing, and continuous-availability backend connectivity for reliable operations.",
    backgroundImage: heroImage,
    imageAlt: "Custom API development CTA",
    buttonText: "Start Your API Project",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: customApiDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "API Development Process We Use",
    descriptiption:
      "Our end-to-end API development process covers requirement analysis, architecture planning, interface design, coding, testing, validation, deployment, and continuous optimization.",
    mainDescription:
      "We keep API scope, data flow, security, and integration design aligned so products can ship reliably and scale with confidence.",
    card: [
      {
        id: 1,
        title: "Requirements and System Analysis",
        description:
          "<p>We analyze business objectives, integration complexity, data flows, compliance requirements, performance expectations, and KPIs.</p><p><strong>Tools/Practices:</strong> discovery workshops, dependency mapping, API scope definition, security posture review.</p>",
      },
      {
        id: 2,
        title: "API Architecture and Specification",
        description:
          "<p>We architect REST, GraphQL, or event-driven APIs with strict schema definitions, endpoint routing, throttling, and governance policies.</p><p><strong>Tools/Practices:</strong> OpenAPI, Swagger, endpoint governance, architecture reviews.</p>",
      },
      {
        id: 3,
        title: "Endpoint Prototyping and Data Modeling",
        description:
          "<p>We create request-response mocks, validation rules, and optimized schemas so integration gaps can be identified early.</p><p><strong>Tools/Practices:</strong> mocks, schema design, error handling, contract validation.</p>",
      },
      {
        id: 4,
        title: "Backend Logic and Service Integration",
        description:
          "<p>Developers implement self-contained service layers, asynchronous pipelines, secure authentication, and external connectors.</p><p><strong>Tools/Practices:</strong> service layers, ERP/CRM connectors, messaging integration, observability.</p>",
      },
      {
        id: 5,
        title: "Security Enforcement and Compliance",
        description:
          "<p>We apply OAuth 2.0, JWT, encryption, rate limiting, anomaly detection, and access control for enterprise-grade security.</p><p><strong>Tools/Practices:</strong> auth policies, threat detection, access control, compliance checks.</p>",
      },
      {
        id: 6,
        title: "Performance Optimization and Scalability",
        description:
          "<p>We fine-tune caching, parallel processing, query optimization, and load distribution to ensure throughput and low latency.</p><p><strong>Tools/Practices:</strong> caching, load tests, concurrency tuning, resilience planning.</p>",
      },
      {
        id: 7,
        title: "QA Validation and Automated Testing",
        description:
          "<p>Unit, integration, contract, regression, and security tests validate endpoints under real-world conditions.</p><p><strong>Tools/Practices:</strong> automated testing, contract tests, security tests, release gates.</p>",
      },
      {
        id: 8,
        title: "CI/CD Deployment and Version Management",
        description:
          "<p>APIs are deployed with staging, automated rollbacks, versioning, and release management through CI/CD pipelines.</p><p><strong>Tools/Practices:</strong> CI/CD, release branching, rollback strategy, version controls.</p>",
      },
      {
        id: 9,
        title: "Monitoring, Analytics and Lifecycle Maintenance",
        description:
          "<p>We implement real-time monitoring, logging, performance metrics, and security analytics for long-term reliability.</p><p><strong>Tools/Practices:</strong> monitoring, logs, observability, ongoing optimization.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Custom API Development Solutions",
    gradientTitle: "for Industry Needs",
    afterGradientTitle: "",
    description:
      "TECHIONIK delivers Custom API Development Solutions across industries, providing secure, high-performance APIs, cloud-ready integrations, and data-driven workflows.",
    slides: [
      {
        title: "Retail",
        description:
          "APIs for inventory management, POS systems, and e-commerce workflows with real-time transaction handling and automated stock reconciliation.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "API integrations for digital classrooms and LMS platforms with role-based access, analytics pipelines, and secure content delivery.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Compliant, cloud-ready APIs for workflow automation, citizen portals, identity management, and legacy modernization.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "APIs for banking, trading, and fintech applications with risk engines, fraud detection, compliance tracking, and resilient transaction pipelines.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "HIPAA-compliant APIs for EHR systems, telehealth platforms, and diagnostic workflows with secure patient data handling.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "APIs for production automation, IoT device management, predictive maintenance, and operational analytics with event-driven architectures.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Microservices-ready API foundations for MVPs and cloud-native platforms with rapid deployment pipelines and fast validation.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "APIs for streaming platforms, content delivery, audience analytics, and media workflows with caching and distributed architectures.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom API Development Services",
    serviceType: "Custom API Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Custom API development services for REST, GraphQL, SOAP, and gRPC integrations with OpenAPI documentation, secure authentication, and enterprise-grade lifecycle management.",
  }),
};
