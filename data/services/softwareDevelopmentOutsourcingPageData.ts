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

type OutsourcingBlog = {
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
    "We help teams scale faster with dedicated engineering teams, predictable delivery, and stable software outcomes.",
  solution: "Software development outsourcing",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  category: item.category,
  stats: [],
}));

const blogs: OutsourcingBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const softwareDevelopmentOutsourcingTechStackData: TechStackData = {
  headingData: {
    title: "Tech Stack and Tools TECHIONIK Uses for",
    middleTitle: "Software Development Outsourcing",
    description:
      "Our outsourcing teams work across modern front-end, back-end, mobile, database, cloud, and AI tooling to deliver secure, scalable software with strong delivery discipline and maintainable architecture.",
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

export const softwareDevelopmentOutsourcingPageData = {
  templateVariant: "default",
  meta: {
    title: "Software Development Outsourcing Services | Techionik",
    description:
      "Techionik offers software development outsourcing services with dedicated engineering teams, flexible engagement models, full-cycle delivery, DevOps, QA, and end-to-end software solutions for startups, SMBs, and enterprises.",
    keywords: [
      "software development outsourcing",
      "software outsourcing services",
      "full-cycle software development outsourcing services",
      "custom software development outsourcing services",
      "dedicated engineering teams",
      "hire developers",
      "IT outsourcing",
      "software engineering company",
      "top-notch software development services",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Software Development Outsourcing Services",
      subtitle: "",
      description:
        "Techionik offers full-cycle software development outsourcing services, helping startups, SMBs, and enterprises. We deliver end-to-end software solutions through dedicated engineering teams and flexible engagement models, enabling you to hire developers, reduce costs, accelerate time-to-market, and ensure predictable, high-quality outcomes.",
      image: heroImage,
      imageAlt: "Software development outsourcing hero banner",
      ctaText: "Talk to an Outsourcing Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Software Development Outsourcing",
    spanTitle: "Services",
    title2: "We Offer",
    reviews: defaultReviewImages,
    RightDescription1:
      "As a top-notch software outsourcing company, we offer custom software development solutions designed to innovate, mitigate risks, and enhance security. Our expert teams provide a full spectrum of outsourcing services, from strategic insights to accelerated time-to-market, delivering high-performance results through staff augmentation and full-cycle development.",
    RightDescription2:
      "We deliver full-cycle software solutions and end-to-end development expertise so you can hire developers on demand, keep delivery predictable, and maintain consistent quality across web, mobile, cloud, and desktop products.",
    buttonLabel: "Hire a Dedicated Software Development Team",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Software development outsourcing services we offer",
    mainDescription:
      "As a top-notch software outsourcing company, we build high-quality software development outsourcing services that combine strategic insight, risk reduction, and delivery speed.",
    cards: [
      {
        id: 1,
        title: "Custom Software Development Outsourcing",
        description: [
          "We deliver top-rated custom software solutions across web, mobile, cloud, and desktop platforms.",
          "Our dedicated engineering teams align with your workflows, user needs, and long-term growth goals.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "Application Development Outsourcing",
        description: [
          "We create web, mobile, and desktop applications for B2B, B2C, SaaS, customer portals, and internal systems.",
          "Our outsourced application teams focus on user experience, performance, and reliable delivery.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "Enterprise Software Development Outsourcing",
        description: [
          "We modernize mission-critical ERP, CRM, and legacy systems into secure, cloud-native platforms.",
          "POD teams and Agile governance help reduce risk and support compliance-driven transformation.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Software Product Development Outsourcing",
        description: [
          "We deliver high-performing SaaS products, cloud-native applications, MVPs, and full-scale products.",
          "Product-led delivery combines iterative design thinking with DevOps and DevSecOps pipelines.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "UI/UX Design Services",
        description: [
          "Our outsourced UI/UX designers create user-centric interface architecture and high-fidelity wireframes.",
          "We use usability testing and interaction design to improve engagement and conversion rates.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 6,
        title: "Software Testing & Quality Assurance",
        description: [
          "Dedicated QA engineers join from day one to validate quality with automated and manual testing.",
          "We ensure cross-browser compatibility, release readiness, security compliance, and defect-free performance.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 7,
        title: "Dedicated Engineering Teams",
        description: [
          "We assemble dedicated engineering teams that can be shaped around your stack, roadmap, and release cadence.",
          "You get a consistent team that works as an extension of your organization with clear accountability.",
        ],
        icon: "/icons/people-team.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "as your Software Development Outsourcing Company",
    description:
      "Techionik, a global IT service provider, connects you with the top 3% of developers specializing in diverse technologies. We deliver end-to-end customized solutions, harnessing digital innovation to drive business growth and address technology challenges worldwide. In the right engagement model, our teams can deliver 1.5-2.5x faster delivery and up to 3x lower project costs compared to in-house development.",
    cards: [
      {
        id: 1,
        title: "Experienced Global Team of IT Experts",
        description:
          "Our developers, designers, and project managers deliver enterprise software, AI solutions, web and mobile applications, and cloud platforms. With 6+ years of experience, 50+ IT experts, 110+ projects across the UK and USA, and ISO-certified PMO guidance, we ensure seamless, high-quality execution.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Proven Methodology and Predictable Delivery",
        description:
          "We use mature software project management processes that minimize risk, optimize resources, and accelerate time-to-market. With 50+ technologies and PMO expertise, our approach supports scalable, reliable results for custom enterprise software solutions.",
        icon: "/icons/values.svg",
      },
      {
        id: 3,
        title: "Risk Ownership and Accountability",
        description:
          "We take responsibility for outcomes with SLA-backed guarantees, proactive mitigation strategies, and transparent reporting. Clients trust our ISO-aligned processes and in-house PMO to protect investments while maintaining quality across the software lifecycle.",
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Integration with DevOps and CI/CD Pipelines",
        description:
          "Our teams implement end-to-end DevOps practices, continuous integration, and automated deployment pipelines to streamline workflows. That helps you release faster, reduce downtime, and keep delivery consistent.",
        icon: "/icons/streamline.svg",
      },
      {
        id: 5,
        title: "Data-Driven Decision Making and Analytics",
        description:
          "We leverage analytics, KPIs, and real-time performance metrics to guide development decisions and align software outcomes with business objectives. Our data-driven approach keeps results measurable and accountable.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement Models and Rightshoring",
        description:
          "From skill-gap coverage to fully managed software projects, our scalable engagement models combine nearshoring and offshoring to optimize cost, efficiency, and expertise for startups, SMEs, and large enterprises.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 7,
        title: "Rapid Onboarding and Transparent Communication",
        description:
          "Our streamlined onboarding accelerates project initiation, while clear milestones, regular updates, and open communication channels keep stakeholders informed and confident throughout the development lifecycle.",
        icon: "/icons/browser.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Flexible Outsourcing Model",
    MiddleTitle: "for",
    lastTitle: "Software Development",
    description:
      "Software development outsourcing has become a strategic growth lever for organizations seeking faster time-to-market, cost efficiency, and access to global engineering talent. Selecting the right outsourcing model directly impacts delivery speed, product quality, and long-term scalability.",
    items: [
      {
        title: "Staff Augmentation",
        description:
          "<ul><li>Extend your in-house team with skilled external developers.</li><li>Get on-demand access to pre-vetted technical specialists.</li><li>Retain full control over workflows, priorities, and processes.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Team",
        description:
          "<ul><li>Work with a long-term, autonomous team aligned with your business goals.</li><li>Get fully committed developers working exclusively on your project.</li><li>Benefit from predictable monthly costs and stable team continuity.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Project-Based Outsourcing",
        description:
          "<ul><li>Use end-to-end delivery for clearly defined software initiatives.</li><li>Benefit from fixed scope, timelines, and cost predictability.</li><li>Ideal for MVPs, product launches, and migrations.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Managed IT Services",
        description:
          "<ul><li>Outsource ongoing software operations and system management.</li><li>Keep systems stable with monitoring, maintenance, and performance optimization.</li><li>Reduce internal workload with SLA-driven accountability.</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Software Development Outsourcing",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "Why should I choose TECHIONIK for software development outsourcing?",
        answer:
          "Choosing the right outsourcing partner directly affects delivery speed, code quality, and business outcomes. TECHIONIK brings proven delivery frameworks, deep technical expertise, and predictable execution so teams can move faster with less risk.",
      },
      {
        id: 2,
        question: "How do you protect sensitive data and intellectual property?",
        answer:
          "We protect client data and IP with NDAs, strict access controls, encrypted transmission, secure repositories, and compliance-driven processes. Regular audits help ensure intellectual property stays protected throughout the engagement.",
      },
      {
        id: 3,
        question: "How do you manage communication across different time zones?",
        answer:
          "We use overlapping working hours, dedicated points of contact, clear escalation paths, and collaboration tools to keep work visible. Time zone differences are handled with structured workflows, sprint planning, and consistent reporting.",
      },
      {
        id: 4,
        question: "Do you provide post-launch support and ongoing maintenance?",
        answer:
          "Yes. Our outsourcing services continue after delivery with bug fixes, security updates, performance tuning, version upgrades, and continuous monitoring so the software stays stable and scalable.",
      },
      {
        id: 5,
        question: "How do I get started with software development outsourcing?",
        answer:
          "The process starts with requirement discovery and technical evaluation, followed by engagement planning. Once scope, timelines, and the model are agreed, we assemble the team and begin delivery with clear governance.",
      },
      {
        id: 6,
        question: "How much does software development outsourcing cost?",
        answer:
          "Pricing depends on project complexity, engagement model, technology stack, team size, and timeline. We provide transparent estimates and recommend the most efficient model for your budget and delivery goals.",
      },
      {
        id: 7,
        question: "Is outsourcing software development more cost-effective than hiring in-house?",
        answer:
          "In many cases, yes. Outsourcing avoids recruitment, onboarding, benefits, and infrastructure costs while giving you immediate access to skilled talent and flexible scaling. That usually makes delivery faster and more cost-efficient than building a team from scratch.",
      },
      {
        id: 8,
        question: "What are the main risks of outsourcing, and how do you mitigate them?",
        answer:
          "Common risks include communication gaps, quality concerns, and misaligned expectations. We reduce those risks with clear requirements, documented processes, regular reviews, and transparent communication throughout the project.",
      },
      {
        id: 9,
        question: "What types of software development services can be outsourced?",
        answer:
          "Almost every stage of the software lifecycle can be outsourced, including custom software development, web and mobile apps, cloud migration, DevOps, QA testing, UI/UX design, and managed IT services.",
      },
      {
        id: 10,
        question: "How do I know if my business is ready for outsourcing?",
        answer:
          "You may be ready if you face tight deadlines, skill shortages, scaling challenges, or rising development costs. We can assess your situation and recommend the right engagement model to reach measurable results.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Hire a Dedicated Software Development Team",
    middleTitle: "on demand.",
    description:
      "Boost project efficiency with our Software Development Outsourcing services, accessing skilled developers whenever you need them.",
    backgroundImage: heroImage,
    imageAlt: "Software development outsourcing CTA",
    buttonText: "Outsource Your IT Project",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: softwareDevelopmentOutsourcingTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Comprehensive Software Development Outsourcing Process for Optimal Delivery",
    descriptiption:
      "Our software outsourcing process leverages internal resources efficiently while delivering stable, secure, and scalable enterprise-grade solutions. Combining best-in-class technologies, agile practices, and continuous integration and delivery pipelines, we ensure measurable business outcomes across the end-to-end software lifecycle.",
    mainDescription:
      "We align RFI and RFP discovery, delivery planning, QA, deployment, and support so the software lifecycle stays predictable from kickoff to post-launch optimization.",
    card: [
      {
        id: 1,
        title: "Discovery and Initial Requirement Analysis",
        description:
          "<p>We analyze your RFI or RFP, business objectives, and technical environment to craft a tailored proposal. Early evaluation ensures accurate scope, resource allocation, and a roadmap aligned with KPIs like response time under 200ms and error rate below 0.5%.</p>",
      },
      {
        id: 2,
        title: "Project Scoping and Strategy Planning",
        description:
          "<p>We define functional and non-functional requirements, prioritize features, and establish milestones. Strategic planning integrates risk assessment, budget forecasting, and dependency mapping so timelines stay predictable.</p>",
      },
      {
        id: 3,
        title: "SLA Definition and KPI Establishment",
        description:
          "<p>We align on a service level agreement that defines delivery cadence, throughput, and quality thresholds. This formalizes expectations and keeps collaboration measurable throughout the project.</p>",
      },
      {
        id: 4,
        title: "Architecture and UX/UI Design",
        description:
          "<p>We design robust architecture and intuitive UX/UI using the appropriate tech stack. Solutions are structured to integrate into existing environments while staying scalable, maintainable, and ready for long-term use.</p>",
      },
      {
        id: 5,
        title: "Agile Development and CI/CD Implementation",
        description:
          "<p>We execute front-end and back-end development, platform configuration, and integration within a continuous integration and delivery pipeline. Incremental sprints support early defect detection and consistent code quality.</p>",
      },
      {
        id: 6,
        title: "Comprehensive Quality Assurance and Validation",
        description:
          "<p>We run end-to-end testing across devices, browsers, and scenarios. QA validates business logic, reduces post-deployment risks, and ensures stability, security, and enterprise-grade standards.</p>",
      },
      {
        id: 7,
        title: "Deployment and Knowledge Transfer",
        description:
          "<p>We deploy software with rollback strategies, versioning, logging, and monitoring. Detailed knowledge transfer and training help your team adopt the solution smoothly and reduce dependency on in-house ramp-up.</p>",
      },
      {
        id: 8,
        title: "Continuous Support and Process Evolution",
        description:
          "<p>We provide ongoing monitoring, updates, and optimizations to maintain reliability. Feedback loops help us improve development, QA, and operational workflows over time.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Software Development Outsourcing",
    gradientTitle: "Services for",
    afterGradientTitle: "Every Industry",
    description:
      "We deliver custom software development outsourcing services with dedicated engineering teams and flexible engagement models for startups, SMBs, and enterprises across web, mobile, cloud, and desktop products.",
    slides: [
      {
        title: "Retail",
        description:
          "Build commerce platforms, inventory systems, and customer-facing apps that improve conversions and keep operations efficient.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create LMS platforms, digital classrooms, and student portals that support engagement and measurable learning outcomes.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop secure citizen service portals, workflow automation, and legacy modernization across public sector departments.",
        link: "/industries/government",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Integrate banking, trading, compliance, and reporting systems with secure software built for high-volume operations.",
        link: "/industries/finance",
        bgImage: "/images/industries/Insurance.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Manage EHR, telemedicine, and patient data with interoperable, cloud-based, HIPAA-aligned software systems.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Automate production, inventory, and IoT monitoring with real-time, data-driven enterprise software solutions.",
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
    name: "Software Development Outsourcing Services",
    serviceType: "Software Development Outsourcing",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Software development outsourcing services for custom software solutions, application development, enterprise systems, product development, UI/UX design, QA, and managed IT services.",
  }),
};
