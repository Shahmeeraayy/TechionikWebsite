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

type CmsBlog = {
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
    "We create scalable CMS platforms that simplify publishing, improve SEO, and connect content with business systems.",
  solution: "CMS development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  category: item.category,
  stats: [],
}));

const blogs: CmsBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const cmsDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "CMS Development Technologies",
    middleTitle: "We Use",
    description:
      "We build CMS solutions using modern platforms, cloud services, APIs, and secure workflows that support multi-channel publishing, SEO, and scalable content operations.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps"],
  techIcons: [
    { name: "WordPress", icon: "/icons/browser.svg", category: ["Frontend", "Backend"] },
    { name: "Drupal", icon: "/icons/coding.svg", category: ["Frontend", "Backend"] },
    { name: "Joomla", icon: "/icons/browser.svg", category: ["Frontend", "Backend"] },
    { name: "Shopify", icon: "/icons/browser.svg", category: ["Frontend", "Backend"] },
    { name: "Strapi", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Contentful", icon: "/icons/cloud.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Sanity", icon: "/icons/cloud.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Sitecore", icon: "/icons/cloud.svg", category: ["Backend"] },
    { name: "AEM", icon: "/icons/cloud.svg", category: ["Backend"] },
    { name: "Kentico", icon: "/icons/cloud.svg", category: ["Backend"] },
    { name: "Craft CMS", icon: "/icons/browser.svg", category: ["Frontend", "Backend"] },
    { name: "Wix", icon: "/icons/browser.svg", category: ["Frontend", "Backend"] },
    { name: "PHP", icon: "/icons/php.svg", category: ["Backend"] },
    { name: "JavaScript", icon: "/icons/java-script.svg", category: ["Frontend", "Backend"] },
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Next.js", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Cloudflare", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Apache", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "MySQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "GraphQL", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "Webhooks", icon: "/icons/values.svg", category: ["Backend"] },
  ],
};

export const cmsDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title:
      "CMS Development Services | Techionik - Headless, Custom, and Cloud CMS Solutions",
    description:
      "Techionik provides CMS development services with custom, headless, and cloud CMS solutions, responsive UI, integrations, workflow optimization, AI-powered content automation, and enterprise-grade publishing performance.",
    keywords: [
      "CMS development services",
      "custom CMS development",
      "headless CMS development",
      "CMS integration services",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "CMS Development Services",
      subtitle: "",
      description:
        "Techionik CMS Development Company provides full control digital presence with platform-based CMS development services. We deliver custom, headless, and cloud CMS solutions with responsive UI, seamless integrations, workflow optimization, AI-powered content automation, and enterprise-grade performance for faster publishing and SEO dominance.",
      image: heroImage,
      imageAlt: "CMS development hero banner",
      ctaText: "Talk to a CMS Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Our Full-cycle",
    spanTitle: "CMS Development",
    title2: "Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "We provide fully customized CMS development services that help businesses automate workflows, streamline content management, and deploy custom modules with reliable performance.",
    RightDescription2:
      "Our dedicated CMS developers specialize in Shopify, WordPress, Joomla, Drupal, Sitecore, Adobe Experience Manager, Kentico, Wix, and Craft CMS solutions for startups, SMBs, and enterprises.",
    buttonLabel: "Request a CMS Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Our CMS Development Services We Offer",
    mainDescription:
      "We deliver platform-based and bespoke CMS work across custom builds, headless content delivery, mobile integration, migration, module development, and AI-assisted publishing.",
    cards: [
      {
        id: 1,
        title: "Custom CMS Development",
        description: [
          "We deliver industry-specific CMS platforms built around business needs and content workflows.",
          "Using PHP, Python, JavaScript, Apache, and Cloudflare, we simplify workflows and support growth.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "CMS Web Design and Development",
        description: [
          "We craft mobile-responsive, easy-to-use CMS websites with accessible layouts and intuitive navigation.",
          "Wireframes, prototypes, and design systems support clean content management across platforms.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "Custom Headless CMS Development",
        description: [
          "We create enterprise-ready headless CMS solutions with API-first architecture and omnichannel delivery.",
          "Strapi, Contentful, and Sanity help teams build scalable composable content ecosystems.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Mobile App Integration",
        description: [
          "We connect CMS platforms with secure payment gateways, social APIs, real-time messaging, and analytics.",
          "The result is a centralized content ecosystem that supports stronger mobile experiences.",
        ],
        icon: "/icons/arrow-right.svg",
      },
      {
        id: 5,
        title: "CMS Integration and Migration",
        description: [
          "We connect CRMs, payment gateways, analytics, and marketing tools using APIs and webhooks.",
          "Migration is designed to preserve data integrity, minimize downtime, and keep workflows flexible.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "CMS Module Development",
        description: [
          "We deliver multi-site, multi-language, and multi-team content management with enterprise-grade security.",
          "Custom modules and automation create a central hub for truth, compliance, and control.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 7,
        title: "AI-powered CMS Solutions",
        description: [
          "We apply NLP models to automate content summarization, tagging, categorization, and personalization.",
          "AI content intelligence improves search rankings, insights, and user engagement.",
        ],
        icon: "/icons/ai-brain.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Techionik",
    spanTitle: "for Custom CMS Development Company",
    description:
      "As a top Custom CMS Development Company, we help businesses build CMS solutions for websites, mobile apps, and e-commerce platforms with reliable content management, integrations, and growth-focused execution.",
    cards: [
      {
        id: 1,
        title: "Expert CMS Developers",
        description:
          "Our top-tier CMS developers deliver cutting-edge solutions for custom CMS development, websites, and content systems with strong quality assurance.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Custom and Tailored CMS Solutions",
        description:
          "We align CMS builds to your industry needs, agile roadmap, responsive design, and multi-platform usage requirements.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Advanced Features, Integrations and Analytics",
        description:
          "Social media integration, third-party APIs, plugins, analytics, and SEO-optimized features help improve reach and engagement.",
        icon: "/icons/browser.svg",
      },
      {
        id: 4,
        title: "Secure and Compliance-First Architectures",
        description:
          "Security, NDAs, and risk minimization are built into the delivery process so your content and data stay protected.",
        icon: "/icons/check.svg",
      },
      {
        id: 5,
        title: "Flexible Engagement and Dedicated Teams",
        description:
          "Hire CMS developers or complete teams on hourly, weekly, or monthly models aligned to your time zone and delivery needs.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Agile Process and Rapid Delivery",
        description:
          "Milestone tracking and iterative delivery help reduce costs, improve time-to-market, and keep the CMS release predictable.",
        icon: "/icons/streamline.svg",
      },
      {
        id: 7,
        title: "Continuous Support, Trust and ROI Focus",
        description:
          "We provide post-launch support, performance monitoring, and enhancements that help maximize ROI and long-term value.",
        icon: "/icons/check-gradener.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Top Outsourcing Models for",
    MiddleTitle: "CMS Development",
    lastTitle: "Services",
    description:
      "Choose the engagement model that matches your pace, control needs, and operational goals.",
    items: [
      {
        title: "Staff Augmentation",
        description:
          "<ul><li>Rapidly scale your CMS team on demand</li><li>Access niche CMS expertise without long-term commitments</li><li>Maintain full control over project progress and quality</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Team",
        description:
          "<ul><li>Full-time CMS experts committed to your project</li><li>Flexible team size to handle changing demands</li><li>Long-term collaboration ensures consistency and high performance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Project-Based Outsourcing",
        description:
          "<ul><li>End-to-end CMS project delivery with defined timelines</li><li>Fixed cost structure for predictable budgeting and ROI</li><li>Benefit from expert management without resource strain</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Managed IT Services",
        description:
          "<ul><li>Continuous CMS monitoring, maintenance, and optimization</li><li>Proactive security management and compliance assurance</li><li>Reduce IT overhead while keeping operations stable</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Custom CMS Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "Why should I choose a custom CMS development company for my business?",
        answer:
          "A custom CMS gives you tailored workflows, better scalability, stronger security, and a publishing experience that matches your business needs.",
      },
      {
        id: 2,
        question: "What types of CMS development services are available?",
        answer:
          "We provide custom CMS creation, theme and plugin development, integrations, migration, and post-launch support across major platforms and bespoke systems.",
      },
      {
        id: 3,
        question: "How can a custom CMS benefit my business?",
        answer:
          "It improves content control, workflow efficiency, SEO performance, multi-language publishing, and high-traffic scalability.",
      },
      {
        id: 4,
        question: "Can you migrate my existing website to a new CMS safely?",
        answer:
          "Yes. We handle content mapping, API integrations, platform upgrades, and migration planning to minimize disruption and data loss.",
      },
      {
        id: 5,
        question: "How does CMS development improve website performance?",
        answer:
          "Optimized code, caching, media handling, and backend workflow improvements can increase load speed and improve SEO and usability.",
      },
      {
        id: 6,
        question: "Is a custom CMS secure for my business data?",
        answer:
          "Yes. We build role-based access, encryption, firewalls, monitoring, and patching into the CMS architecture.",
      },
      {
        id: 7,
        question: "Can a custom CMS integrate with my existing tools and systems?",
        answer:
          "Absolutely. We integrate CRMs, e-commerce platforms, analytics tools, and marketing automation systems into a connected ecosystem.",
      },
      {
        id: 8,
        question: "How long does it take to develop a custom CMS?",
        answer:
          "Basic CMS projects may take 2 to 3 months, while advanced custom platforms can take 4 to 6 months or more depending on scope.",
      },
      {
        id: 9,
        question: "How much does it cost to implement a custom CMS?",
        answer:
          "Cost depends on scope, features, integrations, and developer expertise, but a custom CMS is designed to return long-term value through flexibility and scale.",
      },
      {
        id: 10,
        question: "Which industries benefit the most from CMS development?",
        answer:
          "E-commerce, healthcare, education, media, fintech, and travel-style content businesses gain a lot from flexible, secure CMS platforms.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Build a CMS that gives your team full control over publishing and growth.",
    description:
      "Techionik delivers custom, headless, and cloud CMS solutions that improve publishing speed, SEO, and content operations across web and mobile channels.",
    backgroundImage: heroImage,
    imageAlt: "CMS development CTA",
    buttonText: "Talk to a CMS Consultant",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: cmsDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our CMS Development Process",
    descriptiption:
      "Our CMS web development process delivers clarity, predictability, and transparency from requirement gathering to deployment and post-launch support.",
    mainDescription:
      "We keep strategy, design, development, testing, and launch support aligned so the CMS is stable and easy to own.",
    card: [
      {
        id: 1,
        title: "Discovery, Competitive Analysis and Business Understanding",
        description:
          "<p>We evaluate business goals, audience needs, budget, timeline, and software requirements to define feasibility and the best CMS approach.</p>",
      },
      {
        id: 2,
        title: "CMS Strategy, Roadmap and Engagement Model Planning",
        description:
          "<p>We define CMS architecture, CI/CD planning, platform selection, and engagement structure so delivery stays aligned with your goals.</p>",
      },
      {
        id: 3,
        title: "UX/UI Design, User-Centric Layouts and Feedback Loops",
        description:
          "<p>Wireframes and prototypes shape a user-friendly interface that supports content workflows and intuitive administration.</p>",
      },
      {
        id: 4,
        title: "CMS Development and Custom Implementation",
        description:
          "<p>Our developers build the product using the right technologies, adding admin panels, responsive interfaces, modules, plugins, and integrations.</p>",
      },
      {
        id: 5,
        title: "Quality Assurance, CI/CD and Performance Validation",
        description:
          "<p>We validate functionality, performance, security, and usability so the CMS is stable, scalable, and enterprise-ready.</p>",
      },
      {
        id: 6,
        title: "Deployment, Product Launch and Post-Launch Support",
        description:
          "<p>We manage launch, environment setup, and ongoing support so the CMS evolves with business needs and remains future-ready.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industries We Serve With",
    gradientTitle: "Custom CMS Development",
    afterGradientTitle: "Services",
    description:
      "We deliver industry-leading custom CMS development services across sectors, providing fast, reliable platforms capable of multi-platform publishing, AI personalization, and compliance management.",
    slides: [
      {
        title: "Retail",
        description:
          "CMS platforms for retail and e-commerce with AI recommendations, omnichannel personalization, and lightning-fast catalog updates.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Digital learning CMS systems with LMS support, gamified content, role-based access, and multi-language publishing.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "CMS platforms for public portals, workflow automation, sensitive data handling, accessibility, and compliance.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Fintech",
        description:
          "Secure CMS solutions for financial dashboards, compliance content, and banking API-linked experiences.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "HIPAA-compliant CMS platforms with EHR integration, patient portals, telemedicine content, and role-based access.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "CMS solutions that streamline supply chain content, production tracking, inventory updates, and real-time dashboards.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Headless, agile CMS architectures that help startups launch faster with scalable content delivery and secure integrations.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Headless CMS platforms for media teams with scheduled releases, SEO-friendly publishing, and global audience engagement.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CMS Development Services",
    serviceType: "CMS Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "CMS development services for custom, headless, and cloud content management systems with integrations, workflow automation, and AI-powered publishing.",
  }),
};
