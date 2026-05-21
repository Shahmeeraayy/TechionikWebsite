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

type FrontendBlog = {
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
    "We build front-end experiences that improve performance, consistency, and user engagement across devices.",
  solution: "Front-end development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: FrontendBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const frontendDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Front-End Development",
    middleTitle: "Tools and Frameworks",
    lastTitle: "We Use",
    description:
      "Our expert front-end developers use modern frameworks and tools to develop reliable, user-friendly web apps, portals, and mobile solutions, leveraging 20+ years of experience for high-performance, future-ready products.",
  },
  filters: ["Frontend", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend"] },
    { name: "Vue.js", icon: "/icons/tech-Vue.svg", category: ["Frontend"] },
    { name: "Next.js", icon: "/next.svg", category: ["Frontend"] },
    { name: "JavaScript", icon: "/icons/tech-Javascript.svg", category: ["Frontend"] },
    { name: "TypeScript", icon: "/icons/coding.svg", category: ["Frontend"] },
    { name: "HTML5", icon: "/icons/tech-Html.svg", category: ["Frontend"] },
    { name: "CSS3", icon: "/icons/css.svg", category: ["Frontend"] },
    { name: "Redux", icon: "/icons/data-line.svg", category: ["Frontend"] },
    { name: "Tailwind CSS", icon: "/icons/values.svg", category: ["Frontend"] },
    { name: "Bootstrap", icon: "/icons/box-icon.png", category: ["Frontend"] },
    { name: "Figma", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "Storybook", icon: "/icons/coding2.svg", category: ["Frontend"] },
    { name: "SSR", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "PWA", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "Cypress", icon: "/icons/browser.svg", category: ["Cloud/DevOps"] },
    { name: "Jest", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "Playwright", icon: "/icons/arrow-right.svg", category: ["Cloud/DevOps"] },
    { name: "Lighthouse", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "Web Vitals", icon: "/icons/data-line.svg", category: ["Cloud/DevOps"] },
    { name: "AI-assisted Tools", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Hotjar", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
  ],
};

export const frontendDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Front-End Development Services | Techionik",
    description:
      "Techionik provides front-end development services for high-quality, fast, and stable web apps with modular code, E2E testing, security audits, React, Angular, Vue, SSR, and PWA frameworks.",
    keywords: [
      "front-end development services",
      "React front-end development",
      "AngularJS development",
      "Vue.js development",
      "progressive web applications",
      "single-page applications",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Front-End Development Services",
      subtitle: "High-quality, fast, and stable web apps for every device.",
      description:
        "We provide Front-End Development Services, delivering high-quality, fast, and stable web apps with modular code, E2E testing, security audits, React, Angular, Vue, SSR, and PWA frameworks, SLA-backed performance, optimized for all browsers, devices, and operating systems.",
      image: heroImage,
      imageAlt: "Front-end development hero banner",
      ctaText: "Talk to a Front-End Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Front-End Development Services",
    spanTitle: "We Provide",
    title2: "",
    reviews: defaultReviewImages,
    RightDescription1:
      "Our custom front-end development solutions, combined with expert offshore software development, deliver high-performance web applications, mobile apps, SPAs, and cross-browser, cross-platform websites using AI-driven tools and leading frameworks for efficient, maintainable digital innovation.",
    RightDescription2:
      "We focus on speed, structure, and user experience so your interface stays responsive, scalable, and easy to evolve as your product grows.",
    buttonLabel: "Request Front-End Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Front-End Development Services We Provide",
    mainDescription:
      "We combine user-centered design, reactive frameworks, and scalable component systems to deliver front-end products that are fast, maintainable, and ready for continuous growth.",
    cards: [
      {
        id: 1,
        title: "UI/UX Design",
        description: [
          "We decode user behavior by combining Google Analytics data with Hotjar insights to guide Figma prototypes and usability testing.",
          "The result is a clear, user-friendly, and high-converting experience.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "AngularJS Development",
        description: [
          "Develop high-performance AngularJS applications using TypeScript for component-based architecture, RESTful API integration, modular services, and maintainable code.",
          "We build secure, enterprise-grade interfaces backed by rich libraries and efficient front-end engineering practices.",
        ],
        icon: "/icons/angular.svg",
      },
      {
        id: 3,
        title: "ReactJS Development",
        description: [
          "We develop ReactJS apps using SSR, Virtual DOM optimization, TypeScript, modular components, and secure architecture.",
          "Our team ensures fast rendering, scalable growth, clean code quality, and high-performance execution for modern platforms.",
        ],
        icon: "/icons/react.svg",
      },
      {
        id: 4,
        title: "Vue.js Development",
        description: [
          "We build high-speed Vue.js apps with clean code, solid integration, modular components, and optimized load performance.",
          "Our team ships advanced interfaces powered by Vue CLI, mature tooling, and efficient runtime behavior for business expansion.",
        ],
        icon: "/icons/tech-Vue.svg",
      },
      {
        id: 5,
        title: "Progressive Web Applications",
        description: [
          "Develop fast, reliable Progressive Web Applications using React that deliver native app-like experiences across all devices.",
          "Offline access, push notifications, responsive design, rich UIs, and consistent performance help drive user engagement.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "Single-page Applications",
        description: [
          "We build SPAs with React, Angular, and Vue using a single HTML page that loads swiftly and reduces visual interruptions.",
          "The result is a smooth app-like experience that cuts bandwidth costs and simplifies release cycles.",
        ],
        icon: "/icons/streamline.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Expert Front-End Development Company",
    description:
      "TECHIONIK, a trusted front-end development company since 2004, delivers front-end excellence with top 3% developers, user-centric solutions, and modern interactive web apps that engage visitors and drive business results globally.",
    cards: [
      {
        id: 1,
        title: "Proven Front-End Expertise",
        description:
          "Delivered 100+ projects using React, Angular, Vue, PWAs, SSR, and Micro Frontends. Expert teams build front-end applications optimized for enterprise needs, performance benchmarks, and clear user engagement outcomes.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Full-Cycle Development Management",
        description:
          "We cover the complete front-end lifecycle: UI/UX design, responsive development, testing, deployment, and maintenance. Agile methodology supports smooth execution, modular components, structured architecture, consistent quality, and alignment with changing business requirements.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Advanced Technology Integration",
        description:
          "We integrate modern frameworks and architectures including Atomic Design, Composable Architecture, and Micro Frontends to deliver modular, maintainable front-end systems with optimized performance and long-term adaptability.",
        icon: "/icons/browser.svg",
      },
      {
        id: 4,
        title: "Certified Standards & Compliance",
        description:
          "We follow ISO 9001:2015, ISO 27001:2022, ISO 20000-1:2018, ISO 14001, ISO 45001, and ISO 22301 standards to provide secure, reliable, sustainable, and high-quality front-end solutions.",
        icon: "/icons/check.svg",
      },
      {
        id: 5,
        title: "Client-Focused Collaboration & Transparency",
        description:
          "Senior front-end advisors oversee project milestones, performance, and agile updates. Full IP ownership, transparent communication, and collaborative workflows support solutions that match business goals and maintain clean, dependable code structures.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 6,
        title: "Flexible, Cost-Effective Engagement Models",
        description:
          "We offer dedicated teams, hybrid models, or project-based delivery. Automation and optimized pipelines reduce costs while maintaining enterprise-grade quality, fast deployment, growth-ready architecture, and adaptive front-end solutions.",
        icon: "/icons/values.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible Front-End Development",
    MiddleTitle: "Outsourcing",
    lastTitle: "for Reliable Enterprise Solutions",
    description:
      "Our Front-End Development outsourcing model addresses talent gaps, reduces operational overhead, and accelerates project delivery while delivering front-end solutions aligned with your business goals and user experience objectives.",
    items: [
      {
        title: "Front-End Development Outsourcing",
        description:
          "<ul><li>Access experienced front-end engineers skilled in React, Angular, Vue, and modern UI/UX frameworks.</li><li>Reduce development costs and avoid delays caused by hiring limitations.</li><li>Deliver enterprise-grade web and application interfaces faster without compromising performance, responsiveness, or maintainability.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Integrate front-end specialists quickly to fill expertise gaps and meet project deadlines.</li><li>Retain full control over code, component architecture, workflows, and UI/UX design decisions.</li><li>Ensure consistent, high-quality output aligned with your organizational and project objectives.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Front-End Development Team",
        description:
          "<ul><li>Full-time front-end engineers focused solely on your project requirements and technical goals.</li><li>Smooth alignment with internal processes, tools, and existing infrastructure.</li><li>Reliable delivery that improves application performance, user engagement, and operational efficiency.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full Front-End Development Outsourcing",
        description:
          "<ul><li>End-to-end front-end lifecycle handled by our expert team.</li><li>From requirement analysis, UI/UX design, modular architecture, and coding to testing, deployment, and continuous optimization.</li><li>Reduce operational burden while ensuring enterprise-ready, adaptive, high-performance front-end solutions.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Front-End Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question:
          "Do you work with legacy systems or migrate from older frameworks like jQuery or AngularJS?",
        answer:
          "Yes. We upgrade legacy front ends by rewriting critical components, replacing outdated libraries, and refactoring code to modern standards. We handle migrations from jQuery, AngularJS, Backbone, Knockout, and similar frameworks, and we use phased rollouts to avoid disruptions during the transition.",
      },
      {
        id: 2,
        question:
          "Can you integrate the front end with our existing backend, APIs, or third-party services?",
        answer:
          "Yes. We build front ends that connect securely with REST, GraphQL, WebSocket, and custom API layers. We align data contracts, handle authentication logic, manage state workflows, and integrate third-party platforms such as payment gateways, CRM tools, marketing systems, and cloud services.",
      },
      {
        id: 3,
        question: "How long does it take to design and develop a front end?",
        answer:
          "Timelines depend on scope, complexity, and required integrations. A simple interface may take 2-4 weeks, while multi-screen or component-heavy systems typically range from 6-12 weeks. We provide a clear timeline with phased deliverables after reviewing the requirements.",
      },
      {
        id: 4,
        question:
          "How do you ensure mobile responsiveness, accessibility, and cross-browser support?",
        answer:
          "We use fluid grids, modular components, and breakpoint-driven styling to keep layouts consistent across screen sizes. Accessibility is covered with semantic markup, ARIA roles, keyboard support, and contrast validation. Cross-browser compatibility is tested on Chrome, Safari, Firefox, and Edge.",
      },
      {
        id: 5,
        question:
          "How does your team ensure clean, scalable, and future-ready code?",
        answer:
          "We follow component-based architecture, modular file structures, and strict code-quality rules. Our team uses reusable components, optimized bundling, continuous testing, and performance audits so the front end stays adaptable and easy to expand.",
      },
      {
        id: 6,
        question:
          "Do you use AI or automation in your front-end development process?",
        answer:
          "Yes. We use AI-supported tools for code quality checks, test generation, UI validation, and performance monitoring. Automation pipelines handle builds, deployments, regression tests, bundle optimization, and environment provisioning.",
      },
      {
        id: 7,
        question:
          "How quickly can we start the project, and what are the onboarding steps?",
        answer:
          "We can begin within a few days. The onboarding process includes requirement validation, technical discovery, architecture planning, and environment setup. After that, we define milestones, assign the team, and start with wireframes or component mapping.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Improve product performance with frontend solutions",
    middleTitle:
      "crafted for speed, user experience, and stronger digital engagement.",
    description:
      "Our frontend solutions deliver fast, clear interfaces using modern frameworks and structured architecture that enhance user interaction, support complex functions, and maintain consistent application stability.",
    backgroundImage: heroImage,
    imageAlt: "Front-end development CTA",
    buttonText: "Talk to a Front-End Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: frontendDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Front-End Development Process",
    descriptiption:
      "We structure front-end development through requirement analysis, planning, UI/UX design, coding, testing, deployment, and continuous optimization, ensuring scalable, responsive, and performance-driven applications aligned with business objectives.",
    mainDescription:
      "We keep the work organized from the first discovery session to post-launch refinement so delivery stays predictable and measurable.",
    card: [
      {
        id: 1,
        title: "Requirement Analysis & Business Context",
        description:
          "<p>We analyze business goals, timelines, budget, and technical requirements to define project scope, engagement models, and KPIs such as responsiveness, scalability, and user experience impact.</p>",
      },
      {
        id: 2,
        title: "Strategy, Planning & Architecture",
        description:
          "<p>Our team conducts market and audience research, competitor analysis, defines milestones, assigns team roles, and designs front-end architecture so the project stays aligned with business objectives and technical feasibility.</p>",
      },
      {
        id: 3,
        title: "UI/UX Design & Prototyping",
        description:
          "<p>We create wireframes, interactive prototypes, and high-fidelity designs, integrating brand identity, accessibility standards, and user feedback. Designs are optimized for React, Angular, and Vue applications.</p>",
      },
      {
        id: 4,
        title: "Front-End Development & Coding",
        description:
          "<p>Developers implement scalable, maintainable code using React, Angular, Vue, Redux, Tailwind, and Bootstrap. API integrations, lazy loading, code splitting, and caching ensure robust, responsive applications.</p>",
      },
      {
        id: 5,
        title: "Testing, QA & Performance Evaluation",
        description:
          "<p>E2E testing covers cross-browser compatibility, device responsiveness, accessibility, usability, and performance metrics like LCP and FCP. Automated and manual QA ensures functionality, reliability, and a seamless user experience.</p>",
      },
      {
        id: 6,
        title: "Deployment & Continuous Optimization",
        description:
          "<p>We deploy applications via CI/CD pipelines, monitor runtime performance, refactor code, and optimize for speed, accessibility, and engagement. Continuous improvements maintain reliability, SEO performance, and measurable business growth.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Custom Front-End Development",
    gradientTitle: "Solutions for",
    afterGradientTitle: "Industry Needs",
    description:
      "We deliver custom Front-End Development services with component-based architectures, modular UI frameworks, optimized state management, integrated API workflows, and automated deployment pipelines, delivering fast-loading, adaptable, and highly reliable user interfaces across platforms.",
    slides: [
      {
        title: "Retail",
        description:
          "Build responsive e-commerce platforms, POS dashboards, and inventory management interfaces that improve conversions and provide real-time analytics.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create interactive learning platforms, digital classrooms, and student portals with intuitive UI/UX and data-driven dashboards.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop compliant web applications, citizen service portals, and internal dashboards for workflow automation and legacy modernization.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Offer secure, scalable web solutions for banking, trading, and investment platforms with dashboards, reporting systems, and client portals.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Deliver patient portals, telehealth interfaces, EHR dashboards, and healthcare apps with responsive UI and secure data handling.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Create dashboards, IoT monitoring panels, and production management platforms with real-time data visualization and predictive insights.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Develop MVP web platforms, cloud-ready applications, and automation tools with clean code and fast-loading performance.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Build media streaming interfaces, content management dashboards, and audience analytics platforms with smooth navigation and performance optimization.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Front-End Development Services",
    serviceType: "Front-End Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Front-end development services for responsive web apps, SPAs, PWAs, UI/UX design, legacy modernization, and performance-optimized user interfaces.",
  }),
};
