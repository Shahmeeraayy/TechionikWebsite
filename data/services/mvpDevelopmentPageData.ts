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

type MVPBlog = {
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
  brand: item.brandTitle ?? "RASTAH",
  title: item.title,
  description:
    item.description ??
    "We help teams validate ideas quickly and launch market-ready MVPs with a clear path to scale.",
  solution: "MVP development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: MVPBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const mvpDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Technologies We Use for MVP Delivery",
    middleTitle: "To Move Fast",
    description:
      "Our MVP teams use a practical stack built around React, Flutter, Python, AWS, and modern product tooling to validate ideas quickly, support clean handoffs, and keep future scaling realistic.",
  },
  filters: ["Frontend", "Backend", "Mobile Platforms", "Database", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Next.js", icon: "/next.svg", category: ["Frontend"] },
    { name: "Flutter", icon: "/icons/vibe-coding.svg", category: ["Mobile Platforms"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "Figma", icon: "/icons/browser.svg", category: ["Frontend", "Mobile Platforms"] },
    { name: "OpenAI", icon: "/icons/ai-brain.svg", category: ["AI/ML", "Backend"] },
    { name: "Firebase", icon: "/icons/cloud.svg", category: ["Mobile Platforms", "Backend"] },
    { name: "GitHub", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
  ],
};

export const mvpDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "MVP Development Services | Techionik - Rapid Product Validation & Scalable Launches",
    description:
      "Techionik develops custom MVP solutions for startups, SMBs, and enterprises, combining idea validation, prototyping, user feedback, and full-cycle software delivery to launch faster with less risk.",
    keywords: [
      "MVP development services",
      "minimum viable product development",
      "startup MVP development",
      "MVP software development",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "MVP Development Services",
      subtitle: "",
      description:
        "Techionik develops custom MVP solutions for startups, SMBs, and large enterprises, combining agile delivery, real user feedback, and custom-fit software to reduce risk and launch quickly with a trusted expert software development team.",
      image: heroImage,
      imageAlt: "MVP development hero banner",
      ctaText: "Let's Discuss Your Idea",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "End-to-End",
    spanTitle: "MVP Development",
    title2: "Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "If you are looking for expert Minimum Viable Product (MVP) development services, we provide end-to-end solutions from idea validation, prototyping, and user testing to full-cycle bespoke MVP software development.",
    RightDescription2:
      "Our in-house team can build a fully functional prototype for mobile MVPs and web apps in just a couple of weeks, helping teams test demand before investing in a full-scale product.",
    buttonLabel: "Let's Discuss Your Idea",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "End-to-End MVP Development Services We Provide",
    mainDescription:
      "We align product strategy, design, and engineering so your MVP can validate the market, earn early user feedback, and move toward a scalable product roadmap with confidence.",
    cards: [
      {
        id: 1,
        title: "MVP Web Development",
        description: [
          "High-performance web applications focused on core features, rapid prototyping, and conversion-driven UX that helps your product earn trust from day one.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "MVP Software Development",
        description: [
          "Custom MVP software engineered around your goals, using agile methodologies, scalable architecture, and a product-first delivery model.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "MVP Mobile App Development",
        description: [
          "iOS and Android MVPs built with rapid prototyping, responsive experiences, and architectures that can grow with your product road map.",
        ],
        icon: "/icons/vibe-coding.svg",
      },
      {
        id: 4,
        title: "MVP Development for Startups",
        description: [
          "Startup-ready MVP services that validate ideas, minimize market risk, and accelerate time-to-market with lean execution.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 5,
        title: "UI/UX Design",
        description: [
          "Wireframing, journey mapping, and interactive prototypes that keep the MVP user-centric, technically feasible, and easy to test.",
        ],
        icon: "/icons/box-icon.png",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Techionik",
    spanTitle: "as a Leading MVP Development Company?",
    description:
      "Techionik delivers end-to-end MVP solutions with senior product talent, AI-enabled delivery, and a practical engineering model that helps teams ship faster without sacrificing quality.",
    cards: [
      {
        id: 1,
        title: "Research-Driven, Customer-Centric",
        description:
          "We combine experience, market analysis, and customer feedback to solve real product problems instead of building features in a vacuum.",
        icon: "/icons/check.svg",
      },
      {
        id: 2,
        title: "End-to-End, Fully Managed Teams",
        description:
          "Our in-house PMs, designers, QA engineers, and developers deliver full-cycle MVP work, from planning to launch.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 3,
        title: "Agile, AI-Driven Execution",
        description:
          "We use agile delivery and AI-assisted workflows to speed up repetitive work, reduce errors, and keep the team focused on product quality.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 4,
        title: "Advanced Technology Stack",
        description:
          "We work with modern technologies like React, Flutter, AWS, and Python so MVPs stay flexible and ready to evolve.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Regulatory Compliance and QA",
        description:
          "Our MVP delivery process includes QA and DevOps discipline so security, reliability, and compliance stay in view from the start.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 6,
        title: "Startup-Centric Strategy",
        description:
          "We build product plans that match startup goals, funding realities, and the need to learn quickly from the market.",
        icon: "/icons/vibe-coding.svg",
      },
      {
        id: 7,
        title: "Proven Track Record",
        description:
          "With delivered software products, global clients, and recognition from Clutch and GoodFirms, we focus on outcomes that can grow with the business.",
        icon: "/icons/google-firm.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our MVP",
    MiddleTitle: "Engagement",
    lastTitle: "Models",
    description:
      "Choose the delivery model that matches your stage, scope, and speed requirements.",
    items: [
      {
        title: "Validation Sprint",
        description:
          "<ul><li>Ideal for idea validation and scope shaping</li><li>Fast prototype discovery with clear product direction</li><li>Great for early-stage founders</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated MVP Team",
        description:
          "<ul><li>PM, designers, and engineers working as one unit</li><li>Great for longer MVP builds and iterative roadmaps</li><li>Supports steady delivery and product ownership</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Milestone-Based Delivery",
        description:
          "<ul><li>Predictable scope, timeline, and checkpoints</li><li>Useful for founders who need phased releases</li><li>Balances control and speed</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "MVP Recovery",
        description:
          "<ul><li>Audit, refactor, and stabilize stalled projects</li><li>Ideal when a build needs a reset</li><li>Helps teams recover speed and confidence</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "MVP Development Services",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "Why should startups choose Techionik over other MVP development companies?",
        answer:
          "Techionik is a results-driven MVP development company for startups and SMBs. We combine AI-enabled SDLC, senior product engineers, cloud-native stacks, and proven MVP frameworks to reduce failure risk, accelerate validation, and deliver investor-ready products.",
      },
      {
        id: 2,
        question: "What engagement models do you offer for MVP development?",
        answer:
          "We offer fully managed MVP teams, dedicated developers, and milestone-based delivery so you can choose the model that best fits your roadmap and budget.",
      },
      {
        id: 3,
        question: "How fast can Techionik start MVP development?",
        answer:
          "We can onboard skilled MVP professionals in 7 to 14 days, depending on the scope, team shape, and technology stack you need.",
      },
      {
        id: 4,
        question: "Can Techionik rescue or take over a failing MVP project?",
        answer:
          "Yes. We handle MVP recovery and mid-project takeovers by auditing the architecture, refactoring unstable code, optimizing DevOps pipelines, and realigning the product strategy.",
      },
      {
        id: 5,
        question: "How do you ensure MVPs are aligned with real market needs?",
        answer:
          "Every MVP starts with problem validation, competitor analysis, and user-centric design so the build solves a real customer need before you scale it further.",
      },
      {
        id: 6,
        question: "How do you handle time zones and global collaboration?",
        answer:
          "We work across UK, US, EU, and APAC time zones with structured sprint rituals, dashboards, and async reporting to keep communication clear and delivery moving.",
      },
      {
        id: 7,
        question: "Can I scale or modify my MVP team during development?",
        answer:
          "Absolutely. Our teams are flexible, so you can add or rotate designers, frontend developers, backend developers, or QA engineers as priorities change.",
      },
      {
        id: 8,
        question: "How secure is my intellectual property and product data?",
        answer:
          "Your IP stays secure through NDAs, secure repositories, role-based access, encrypted communication, and enterprise-grade security practices.",
      },
      {
        id: 9,
        question: "Do your MVP development services meet regulatory and compliance standards?",
        answer:
          "Yes. We build with GDPR, HIPAA, PCI-DSS, AML, and KYC expectations in mind where they apply, and we embed compliance into QA and DevOps workflows.",
      },
      {
        id: 10,
        question: "What determines the cost of MVP development?",
        answer:
          "Cost depends on scope, complexity, platform, and tech stack. We use lean prioritization and sprint-based delivery to keep budgets focused on the highest-value features.",
      },
      {
        id: 11,
        question: "How does Techionik use AI to accelerate MVP development?",
        answer:
          "We integrate AI-driven SDLC practices to automate repetitive coding tasks, speed up testing, optimize prioritization, and reduce delivery cycles.",
      },
      {
        id: 12,
        question: "How do I start my MVP development journey with Techionik?",
        answer:
          "Start with a discovery call. We will validate the idea, define the roadmap, choose the right stack, and align the team to deliver your MVP with confidence.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Ready to launch your MVP with less risk and faster validation?",
    description:
      "Partner with Techionik for idea validation, prototyping, user testing, and full-cycle MVP development that turns a concept into a market-ready product.",
    backgroundImage: heroImage,
    imageAlt: "MVP development CTA",
    buttonText: "Talk to an MVP Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: mvpDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our MVP Development Process",
    descriptiption:
      "We provide full-service MVP development for startups and SMBs using a structured process that covers idea validation, prototyping, agile delivery, testing, deployment, and post-launch iteration.",
    mainDescription:
      "Our process keeps scope, technology, and delivery aligned so you can launch faster and learn from real users sooner.",
    card: [
      {
        id: 1,
        title: "Idea Validation and Target Audience Analysis",
        description:
          "<p>We analyze your target audience, market needs, and competitors to validate the concept before we build anything substantial.</p>",
      },
      {
        id: 2,
        title: "Defining MVP Scope and Prioritizing Core Features",
        description:
          "<p>We review the product direction, provide feedback, and define the lean scope so the MVP focuses on the features that matter most.</p>",
      },
      {
        id: 3,
        title: "Wireframing and UI/UX Prototyping",
        description:
          "<p>We craft user-friendly wireframes and interactive prototypes to validate the experience before development begins.</p>",
      },
      {
        id: 4,
        title: "Agile MVP Development with Backend and Frontend Teams",
        description:
          "<p>Our designers and engineers deliver the MVP through agile workflows, continuous feedback loops, and scalable architecture.</p>",
      },
      {
        id: 5,
        title: "QA Testing, Performance Metrics, and Automated Validation",
        description:
          "<p>We test across environments, monitor quality metrics, and fix issues so the MVP is stable, usable, and ready for real users.</p>",
      },
      {
        id: 6,
        title: "Deployment, Launch, and Product Strategy Execution",
        description:
          "<p>We manage staging to production deployment and help you launch with analytics, KPIs, and clear product strategy support.</p>",
      },
      {
        id: 7,
        title: "Feedback Loops, Iteration, and Long-Term Scaling",
        description:
          "<p>After launch, we collect feedback and performance insights so the product can evolve with market demand and user expectations.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industries We Work With",
    gradientTitle: "MVP Development",
    afterGradientTitle: "",
    description:
      "We power MVP development for startups and enterprises across sectors, transforming concepts into validated, scalable products with rapid iteration and measurable market success.",
    slides: [
      {
        title: "Retail",
        description:
          "Launch e-commerce, POS, and inventory MVPs with rapid prototyping, real-time analytics, and scalable foundations.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Prototype e-learning platforms, virtual classrooms, and student engagement tools with UX-first product validation.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Build secure citizen portals, service delivery apps, and compliance-driven MVPs that can scale safely.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Fintech",
        description:
          "Validate payment, lending, and financial management products with secure transactions and cloud-native architecture.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Prototype telemedicine, patient management, and wellness products with security, compliance, and real-world feedback.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Develop MVPs for smart factories, predictive maintenance, and operations tools with a lean build-first approach.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Turn ideas into investor-ready, market-validated products with agile delivery and clear product milestones.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Launch streaming, gamified, and media MVPs with interactive UX and quick feedback cycles.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MVP Development Services",
    serviceType: "MVP Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "MVP development services for startups and enterprises, covering idea validation, prototyping, user testing, and scalable product delivery.",
  }),
};
