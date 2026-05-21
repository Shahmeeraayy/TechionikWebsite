import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { TechnologyExpertise } from "@/data/technologyExpertiseData";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { FAQ } from "@/data/FAQS";
import type { ContactHeroData } from "@/data/ConnectHero";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";
import type { IndustriesData } from "@/data/Industries Data/types";

import { getSiteUrl } from "@/lib/site";

const heroImage = "/images/home/Software-Development.webp";

export const mobileAppConsultingTechStackData: TechStackData = {
  headingData: {
    title: "Mobile app consulting technologies",
    middleTitle: "We Use",
    description:
      "Our consultants deliver enterprise-grade backend systems using Node.js, Python, Java, AWS, Azure, and GCP. Using microservices, REST/GraphQL APIs, and high-availability frameworks, we enable secure, low-latency, live data handling that drives business efficiency.",
    hideViewAllButton: true,
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
  hideDefaultSections: true,
  meta: {
    title:
      "Mobile App Consulting Services | Techionik",
    description:
      "We, a mobile app consulting company, provide end-to-end mobile app services, covering market positioning, app architecture, functionality, development process, audits, testing, budget planning, and monetization strategies to deliver user-centric native, cross-platform, and PWA solutions that drive growth and engagement worldwide.",
    keywords: [
      "mobile app consulting services",
      "mobile app development consulting",
      "mobile app development services",
      "cross-platform app development",
      "cross-platform app consulting",
      "mobile app modernization",
      "mobile app audit",
      "mobile app integration services",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Mobile app consulting services",
      subtitle: "",
      description:
        "We, a mobile app consulting company, provide end-to-end mobile app services, covering market positioning, app architecture, functionality, development process, audits, testing, budget planning, and monetization strategies to deliver user-centric native, cross-platform, and PWA solutions that drive growth and engagement worldwide.",
      image: heroImage,
      imageAlt: "Mobile app consulting hero banner",
      ctaText: "",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    fullTitle: "Mobile App Development Consulting Services We Offer",
    title1: "",
    spanTitle: "",
    title2: "",
    reviews: [],
    RightDescription1:
      "We offer strategic platform-specific mobile app consulting for iOS, Android, hybrid apps, and cross-platform. Our services guide ideation, UX/UI design, push strategies, market analysis, feasibility studies, and roadmap planning to deliver optimized, high-performance, conversion-focused apps.",
    RightDescription2:
      "<p>Choose mobile app development consulting services that reduce technical friction and support dependable product evolution.</p><p>We deliver mobile app consulting services focused on architecture planning, system integration, code quality improvement, and long-term performance stability to keep your application running efficiently.</p>",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "",
    mainDescription: "",
    showAllDescriptions: true,
    cards: [
      {
        id: 1,
        title: "Mobile App Development Services",
        description:
          "Our dedicated mobile app developers create fully functional apps on iOS, Android, and cross-platform frameworks using mobile programming languages like Swift, Kotlin, Java, and HTML5, solving performance, security, and maintenance challenges for your business.",
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "Cross-Platform App development",
        description:
          "We offer Cross-Platform App development on iOS, Android, and web using React Native or Flutter, integrating REST/GraphQL APIs, tested across devices, reducing code duplication, with secure, maintainable architecture, optimized UX, and cost efficiency.",
        icon: "/icons/react.svg",
      },
      {
        id: 3,
        title: "Mobile App Modernization",
        description:
          "We modernize legacy mobile apps using advanced frameworks, containerized architecture, cloud integration, and AI-assisted workflows, enhancing runtime performance, secure API gateways, UX, and maintainable code for fast expansion and market relevance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Mobile App Launch",
        description:
          "We offer end-to-end mobile app launch consulting, including feasibility analysis, market research, architecture and technology selection, UX/UI design, feature integration, cost estimation, and project scoping to deliver optimized, market-ready apps aligned with business goals.",
        icon: "/icons/arrow-right.svg",
      },
      {
        id: 5,
        title: "Mobile app audit",
        description:
          "We audit mobile apps’ UI/UX, code quality, system architecture, security, compliance, and device/platform compatibility, providing gap analysis, performance optimization, actionable improvements, and technical recommendations to enhance user retention, security, and overall app quality.",
        icon: "/icons/check.svg",
      },
      {
        id: 6,
        title: "Mobile App Integration Services",
        description:
          "We integrate mobile apps with legacy systems, third-party APIs, and cloud platforms using microservices and event-driven patterns, enabling real-time synchronization, low-latency workflows, secure operations, and measurable efficiency improvements across your infrastructure.",
        icon: "/icons/coding.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Top mobile App Consulting Company",
    description:
      "TECHIONIK delivers enterprise-grade Mobile App Consulting Services, guiding startups and enterprises through app architecture strategy, platform selection, secure integrations, microservices adoption, cloud enablement, CI/CD pipelines, and real-time data workflows.",
    cards: [
      {
        id: 1,
        title: "Proven Mobile App Expertise",
        description:
          "With 4+ years and 200+ projects, our top 3% engineers design scalable apps for iOS, Android, and cross-platform frameworks (Flutter, React Native, Swift, Kotlin, Java). We optimize API integration, offline-first architecture, and backend connectivity, reducing load times by up to 40%, improving API response times by 35%, and supporting 500k+ concurrent users.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End Mobile App Lifecycle Consulting",
        description:
          "We provide advisory across the app lifecycle, architecture design, modular codebase planning, UI/UX evaluation, automated testing, deployment, and post-launch optimization. Agile and Scrum practices enable maintainable, event-driven, and microservices-aligned apps while improving deployment frequency, reliability, and operational efficiency.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Security & Compliance Excellence",
        description:
          "We guide encryption, token-based authentication, multi-factor login, threat mitigation, and vulnerability handling (SQL injection, XSS, CSRF). Compliance spans GDPR and ISO 9001, 27001, 20000, 14001, 45001, 22301, delivering audit-ready, enterprise-grade mobile apps that reduce operational risk.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 4,
        title: "Advanced Technology Integration",
        description:
          "Our consulting ensures apps leverage cloud-native services, reusable components, automated pipelines, microservices, event-driven architecture, AI-assisted predictive caching, and analytics integration. We optimize push notification scaling, serverless functions, and real-time workflows, ensuring high-performance, maintainable, enterprise-ready solutions.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Client-Centric Project Governance",
        description:
          "Dedicated consultants, senior architects, DevOps engineers, QA specialists, and business analysts manage strategy, risk mitigation, KPI tracking, IP ownership, and structured reporting. Real-time dashboards and automated alerts ensure informed decisions and measurable business impact.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement Models",
        description:
          "We offer advisory via dedicated teams, hybrid staffing, or project-based consulting. Clients control scope, budget, and timelines with transparent reporting, CI/CD guidance, and continuous performance monitoring for scalable, enterprise-ready mobile ecosystems.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 7,
        title: "Comprehensive Technical Team",
        description:
          "Our team includes mobile architects, backend engineers, DevOps specialists, QA engineers, and business analysts. We support modern frameworks (Flutter, React Native, Swift, Kotlin, Java) and legacy platforms, enabling end-to-end, enterprise-grade mobile app integration and strategy execution",
        icon: "/icons/ai-brain.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Mobile App Consulting",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our mobile app consulting outsourcing models offer flexible engagement options including dedicated teams, project-based collaboration, and hybrid approaches - delivering expert guidance, optimized architecture, and long-term, high-performance mobile solutions.",
    items: [
      {
        title: "Mobile App Consulting Outsourcing",
        description:
          "<ul><li>Expert consultants in iOS, Android, React Native, Flutter.</li><li>Minimize development delays and reduce hiring overhead.</li><li>Provide secure, scalable, enterprise-grade mobile architectures and API strategies.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Quickly onboard mobile specialists to fill technical gaps.</li><li>Maintain full control over app architecture, APIs, workflows, and CI/CD pipelines.</li><li>Ensure consistent code quality, adherence to standards, and measurable performance metrics.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Mobile App Consulting Team",
        description:
          "<ul><li>Full-time consultants aligned with your project goals.</li><li>Seamlessly integrate with internal teams, existing infrastructure, and development processes.</li><li>Optimize app performance, security, and API reliability across all platforms.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full Mobile App Consulting Outsourcing",
        description:
          "<ul><li>End-to-end advisory and implementation: analysis, architecture, UI/UX guidance, API integration, testing, deployment, and performance optimization.</li><li>Reduce operational complexity while achieving enterprise-ready, future-proof mobile solutions.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Mobile App Consulting",
    spanTitle: "FAQs",
    description: null,
    expandAll: true,
    faq: [
      {
        id: 1,
        question: "What does mobile app consulting include?",
        answer:
          "Mobile app consulting includes architecture analysis, tech stack evaluation, API strategy, CI/CD planning, code audits, performance profiling, and scalability mapping. We review existing iOS, Android, React Native, and Flutter apps to identify structural issues, security gaps like OWASP Mobile Top 10, data-flow inefficiencies, and infrastructure risks. You receive a technical roadmap covering architecture patterns such as Clean Architecture, MVVM, and modularization, plus cloud strategy and long-term optimization. If you would like an initial assessment, we can start with a quick architecture review.",
      },
      {
        id: 2,
        question: "Can you improve an existing mobile app instead of building a new one?",
        answer:
          "Yes. We optimize existing apps through deep analysis of memory allocation, threading behavior, API latency, network caching, rendering speed, and crash logs. We typically reduce load time by 20%–50%, improve API response consistency, and stabilize outdated codebases without rewriting entire modules. Our process includes modernizing legacy Objective-C, Java, jQuery Mobile, or AngularJS-based structures into modern Swift, Kotlin, or cross-platform stacks. You can share your current build or repository for a technical audit.",
      },
      {
        id: 3,
        question: "How do you ensure a mobile app integrates smoothly with our backend or third-party systems?",
        answer:
          "We perform full backend-mobile alignment: API contract review, schema validation, versioning checks, authentication flow mapping with OAuth2 and JWT, and load-test simulations. Integration uses middleware layers, network abstraction patterns, error-recovery strategies, background sync, and data-consistency rules. We validate compatibility across legacy systems, cloud services, and third-party APIs through staging tests, sandbox verification, and automated regression suites. If needed, we can run an API readiness test before integration begins.",
      },
      {
        id: 4,
        question: "How much does mobile app consulting cost?",
        answer:
          "Costs depend on the depth of consulting such as architecture redesign, performance optimization, code review, modernization, or full lifecycle advisory. Pricing reflects consultant expertise, time required for technical analysis, documentation effort, and scope of work. Most engagements include:\n<ul><li>Architecture review</li><li>Code audit</li><li>API evaluation</li><li>Tech stack selection</li><li>Optimization planning</li></ul>\nYou can request a quick estimate based on your app’s current complexity.",
      },
      {
        id: 5,
        question: "How fast can we start working together?",
        answer:
          "Onboarding begins immediately. We start with requirement mapping, environment access setup, repo import, dependency analysis, and baseline diagnostics. Within 48 to 72 hours, we deliver a technical roadmap outlining architecture priorities, integration points, risk areas, and execution timelines. This ensures the consulting process begins with accurate data and full alignment with your business and engineering goals. You can begin the onboarding process by sharing your project details or codebase.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title:
      "Partner with mobile consultants who strengthen app performance, streamline flows, and support reliable product growth.",
    description:
      "Our mobile consultants provide architecture guidance, integration strategy, performance optimization, and platform alignment to help you launch stable, secure, and efficient mobile applications.",
    backgroundImage: heroImage,
    imageAlt: "Mobile app consulting CTA",
    buttonText: "",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: mobileAppConsultingTechStackData,
  caseStudies: [],
  blogs: [],
  whatWeDo: {
    title: "Our Mobile App Consulting Process",
    descriptiption:
      "We provide end-to-end mobile app consulting services, guiding businesses through discovery, strategy, architecture, API integration, cloud infrastructure, CI/CD, QA, deployment, and continuous optimization.",
    mainDescription:
      "Our solutions deliver secure, high-performance, scalable, and future-proof apps across iOS, Android, PWA, and hybrid platforms.",
    card: [
      {
        id: 1,
        title: "Discovery & Requirement Analysis",
        description:
          "<p>We evaluate business objectives, target audience, platform requirements, budget, and timeline. Technical feasibility, KPIs, system performance, security compliance, data integrity, and integration needs are defined for customized, measurable solutions.</p>",
      },
      {
        id: 2,
        title: "Strategy, Architecture & Team Planning",
        description:
          "<p>We design resilient app strategy, modular architecture, microservices patterns, and workflow mapping. Team assignments and milestones ensure efficient front-end/back-end integration, operational efficiency, and measurable ROI.</p>",
      },
      {
        id: 3,
        title: "UX, UI & API Strategy",
        description:
          "<p>We create wireframes, prototypes, and interaction flows. APIs follow REST, GraphQL, or event-driven patterns, with authentication (OAuth 2.0, JWT), caching, rate-limiting, and third-party integrations for real-time, secure connectivity.</p>",
      },
      {
        id: 4,
        title: "Core Technical Blueprinting",
        description:
          "<p>We define modular architecture, offline-first design, client-server patterns, analytics integration (Firebase, Mixpanel), messaging (Twilio, FCM), and payment gateways (Stripe, PayPal). Apps are enterprise-ready, resilient, and high-performance.</p>",
      },
      {
        id: 5,
        title: "Cloud Infrastructure, CI/CD & DevOps Planning",
        description:
          "<p>We recommend cloud providers (AWS, Azure, GCP), containerization (Docker, Kubernetes), serverless functions (AWS Lambda), CI/CD pipelines, automated testing, monitoring, and rollback strategies.</p>",
      },
      {
        id: 6,
        title: "QA, Testing & Performance Assessment",
        description:
          "<p>Comprehensive testing includes unit, integration, load, stress, accessibility, and cross-device testing. Performance, security, error handling, and resource optimization are validated across iOS, Android, PWA, and hybrid apps.</p>",
      },
      {
        id: 7,
        title: "Deployment Roadmap & Continuous Improvement",
        description:
          "<p>We provide deployment guidance, front-end integration, real-time monitoring (Datadog, New Relic), query optimization, code refactoring, and third-party service management. Continuous improvements maximize resilience, performance, security, and long-term growth potential.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Our Mobile App Consulting for",
    gradientTitle: "Industry",
    afterGradientTitle: "Needs",
    description:
      "We provide strategic mobile app consulting tailored to industry-specific challenges, advising on cloud-ready, data-intensive architectures, secure integrations, high-throughput APIs, and workflows engineered for operational resilience and measurable business impact.",
    hideViewAllButton: true,
    hideCardButtons: true,
    showAllDescriptions: true,
    slides: [
      {
        title: "Retail",
        description:
          "We guide retailers on mobile app architectures for inventory, POS, and e-commerce workflows, advising on real-time transaction orchestration, automated stock reconciliation strategies, API integration design, and high-availability data pipeline planning.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "We consult on digital classroom and learning management app architectures, recommending role-based access, analytics pipelines, offline-first approaches, and secure content delivery frameworks to enhance platform efficiency and responsiveness.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "We advise public sector organizations on cloud-native mobile solutions, citizen service portals, identity management, and legacy modernization strategies, ensuring audit-ready processes, data security protocols, and scalable workflow automation.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "We provide mobile app consulting for banking, fintech, and trading platforms, recommending architecture strategies for high-availability APIs, fraud detection modules, regulatory compliance tracking, and low-latency, resilient transaction workflows.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "We guide healthcare providers on mobile app strategies for EHR, telehealth, and diagnostic systems, advising on HIPAA-compliant pipelines, encrypted data handling, cloud orchestration, and performance monitoring to maximize reliability and security.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "We consult on mobile-enabled production automation, IoT device management, predictive maintenance, and operational analytics, recommending event-driven architectures, real-time monitoring frameworks, and expandable data pipelines for efficiency.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "We advise startups on MVP and cloud-native app platforms, recommending microservices-ready architectures, API orchestration strategies, integration layers, and rapid deployment workflows to accelerate time-to-market and reduce operational risk.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "We guide media and streaming platforms on mobile app architecture, recommending high-throughput APIs, caching strategies, distributed systems, cloud orchestration, and audience analytics solutions to maximize engagement and performance.",
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
      "We, a mobile app consulting company, provide end-to-end mobile app services, covering market positioning, app architecture, functionality, development process, audits, testing, budget planning, and monetization strategies to deliver user-centric native, cross-platform, and PWA solutions that drive growth and engagement worldwide.",
  }),
};
