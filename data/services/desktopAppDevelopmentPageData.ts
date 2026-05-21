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

type DesktopAppDevelopmentBlog = {
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
    "We help teams modernize and launch desktop applications with stronger stability, better integration, and clearer delivery strategy.",
  solution: "Desktop app development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: DesktopAppDevelopmentBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const desktopAppDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Desktop Application Development",
    middleTitle: "Technologies",
    lastTitle: "We Use",
    description:
      "We build reliable desktop software with C++/Qt, .NET, Python, Electron, WPF, cloud tools, and AI-assisted workflows so your applications stay secure, maintainable, and high-performing across platforms.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "C++", icon: "/icons/c++.svg", category: ["Backend"] },
    { name: "Qt", icon: "/icons/coding.svg", category: ["Frontend", "Backend"] },
    { name: ".NET", icon: "/icons/dot.svg", category: ["Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "Electron", icon: "/icons/react.svg", category: ["Frontend", "Backend"] },
    { name: "WPF", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "WinUI", icon: "/icons/browser.svg", category: ["Frontend"] },
    { name: "JavaFX", icon: "/java.svg", category: ["Frontend", "Backend"] },
    { name: "SQLite", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "SQL Server", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "gRPC", icon: "/icons/coding.svg", category: ["Backend"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GitHub Actions", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "OpenCV", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "ONNX Runtime", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "ML.NET", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
  ],
};

export const desktopAppDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title:
      "Desktop Application Development Services | Techionik - Windows, macOS, and Linux Software",
    description:
      "Techionik develops desktop application services for Windows, macOS, and Linux using C++/Qt, .NET, and Python. We build high-performance systems with long-term stability, secure integration, automated testing, and reliable architecture.",
    keywords: [
      "desktop application development services",
      "desktop app development",
      "desktop software modernization",
      "cross-platform desktop app development",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Desktop Application Development Services",
      subtitle: "High-performance software for Windows, macOS, and Linux.",
      description:
        "We develop desktop application services for Windows, macOS, and Linux using C++/Qt, .NET, and Python. Our engineers build high-performance systems for demanding workflows with long-term stability and reliable architectures.",
      image: heroImage,
      imageAlt: "Desktop application development hero banner",
      ctaText: "Talk to a Desktop Consultant",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Desktop Application",
    spanTitle: "Development",
    title2: "Solutions",
    reviews: defaultReviewImages,
    RightDescription1:
      "Our desktop application company delivers research-driven architecture, modern programming frameworks, cross-platform development, system integration, automated testing, and performance optimization to create reliable, efficient, and long-lasting desktop applications.",
    RightDescription2:
      "Desktop app experts deliver desktop app development services designed to address workflow issues, fill system gaps, and ensure consistent performance through modern engineering practices.",
    buttonLabel: "Request a Desktop Review",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Our Desktop Application Development Solutions",
    mainDescription:
      "Our desktop application company delivers research-driven architecture, modern programming frameworks, cross-platform development, system integration, automated testing, and performance optimization to create reliable, efficient, and long-lasting desktop applications.",
    cards: [
      {
        id: 1,
        title: "Cross-platform Desktop App Development",
        description: [
          "We build desktop applications for Windows, macOS, and Linux using the right frameworks to reduce cost, simplify updates, and improve deployment consistency.",
          "This approach helps enterprises expand reach while keeping performance and maintenance under control.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "API Development",
        description: [
          "We design enterprise-grade desktop APIs that support interoperability, automated workflows, secure data exchange, and flexible architecture.",
          "Desktop systems stay connected to internal platforms and third-party services without sacrificing speed or reliability.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "UWP Applications Development",
        description: [
          "We develop Universal Windows Platform applications from scratch or refactor existing software for better compatibility and maintainability.",
          "The result is a modern Windows experience that is ready for enterprise deployment and Microsoft Store standards.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Desktop Software Modernization",
        description: [
          "We update legacy desktop software using modern frameworks, secure architectures, and improved workflows.",
          "Modernization improves stability, user retention, operational efficiency, and long-term relevance for business systems.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Desktop Application Integration Services",
        description: [
          "We integrate desktop applications across enterprise systems for automated workflows, real-time synchronization, and legacy compatibility.",
          "This creates adaptable software that supports dependable operations and smoother data flow across your environment.",
        ],
        icon: "/icons/arrow-right.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Desktop App Development Services",
    description:
      "We engineer desktop applications that support long-term business operations and deliver consistent value. Our development teams apply industry-backed practices, modern architectures, and a transparent delivery approach to ship dependable desktop solutions designed for enterprise needs and complex workflows.",
    cards: [
      {
        id: 1,
        title: "Proven Delivery Strength and Global Reliability",
        description:
          "With 100+ desktop software deployments across 3 regions, TECHIONIK is trusted by enterprises and mid-sized organizations seeking stability, technical depth, and predictable delivery.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Full-Cycle Desktop Development Execution",
        description:
          "We manage the entire lifecycle, including interface design, core engineering, system optimization, QA, DevOps, packaging, and long-term support.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Verified Standards and Compliance Alignment",
        description:
          "TECHIONIK adheres to ISO 9001:2015, ISO 27001:2022, ISO 20000-1:2018, ISO 14001:2015, ISO 45001:2018, and ISO 22301:2019 to keep delivery secure, stable, and auditable.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 4,
        title: "Advanced Engineering and Modernization Expertise",
        description:
          "Our engineering teams apply AI, ML, IoT, and modern desktop frameworks to keep applications aligned with evolving platforms and enterprise ecosystems.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Client-Centered Delivery and Transparent Ownership",
        description:
          "Senior advisors oversee project health, performance tracking, and strategy alignment while you retain full ownership of your codebase, IP, and data.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Cost Control and Flexible Engagement Options",
        description:
          "Our automation-led delivery model can reduce cost while preserving quality. Choose dedicated teams, project-based delivery, or hybrid setups for flexibility and faster readiness.",
        icon: "/icons/box-icon.png",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible Desktop App Development",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our desktop app outsourcing model addresses resource gaps, reduces operational overhead, and accelerates project delivery while ensuring your software reflects your brand's quality and vision.",
    items: [
      {
        title: "Desktop App Development Outsourcing",
        description:
          "<ul><li>Access experienced desktop developers for Windows, macOS, and cross-platform applications</li><li>Cut development costs and avoid delays caused by in-house hiring constraints</li><li>Deliver enterprise-grade applications faster without compromising brand standards</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Integrate specialists quickly to fill skill gaps and meet project demands</li><li>Retain full control over code, workflows, and strategic decisions</li><li>Ensure consistent, high-quality output aligned with your brand identity</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Desktop App Team",
        description:
          "<ul><li>Full-time developers focused solely on your desktop application goals</li><li>Smooth alignment with internal processes and existing tools</li><li>Reliable delivery that enhances efficiency and strengthens trust</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full Desktop App Development Outsourcing",
        description:
          "<ul><li>End-to-end desktop application lifecycle handled by our experts</li><li>From concept, architecture, and design to deployment and long-term support</li><li>Reduce operational burden while ensuring consistent, brand-compliant delivery</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Desktop Application Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "How do you ensure cross-platform compatibility for Windows, macOS, and Linux?",
        answer:
          "We use cross-platform frameworks such as Electron, Qt, .NET MAUI, and JavaFX with platform-specific optimization. QA covers multiple OS versions, hardware configurations, and display resolutions so your app behaves consistently everywhere.",
      },
      {
        id: 2,
        question: "How do you handle performance optimization and ensure stable desktop applications?",
        answer:
          "We use modular architecture, asynchronous processing, memory management, and CPU or GPU optimization. Profiling, automated tests, and CI/CD keep builds stable and help us eliminate bottlenecks early.",
      },
      {
        id: 3,
        question: "Can you migrate our legacy desktop software to modern platforms?",
        answer:
          "Yes. We analyze the existing architecture and either refactor or re-engineer the system for modern frameworks such as .NET Core, Electron, or JavaFX while preserving important business logic.",
      },
      {
        id: 4,
        question: "Do you provide rapid prototyping or MVP development for desktop applications?",
        answer:
          "Yes. We can build clickable prototypes and functional MVPs with iterative sprints so stakeholders can validate workflows, gather feedback, and reduce delivery risk before full development.",
      },
      {
        id: 5,
        question: "Can you customize desktop applications for specific industry needs like healthcare, finance, or manufacturing?",
        answer:
          "Absolutely. We tailor features, compliance, integrations, and workflows for industry-specific needs so the final desktop application fits your operational reality and regulatory requirements.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Develop desktop applications that improve efficiency and align with your business direction.",
    description:
      "Desktop app experts deliver desktop app development services designed to address workflow issues, fill system gaps, and ensure consistent performance through modern engineering practices.",
    backgroundImage: heroImage,
    imageAlt: "Desktop app development CTA",
    buttonText: "Hire a Desktop App Developer",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: desktopAppDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our End-to-End Desktop Application Development Process",
    descriptiption:
      "We follow a structured, end-to-end desktop application development process, integrating modern methodologies, enterprise-grade tools, and best practices to deliver high-efficiency, reliable, and adaptable desktop solutions for startups and large enterprises.",
    mainDescription:
      "From discovery to ongoing support, we keep architecture, delivery, and maintenance aligned with your business goals.",
    card: [
      {
        id: 1,
        title: "Product Discovery and Desktop Requirement Analysis",
        description:
          "<p>We define application objectives, user workflows, platform requirements, and performance benchmarks. Stakeholder interviews, market research, and competitor analysis establish a detailed feature set, release plan, and KPI framework.</p><p><strong>Tools/Practices:</strong> Jira, Confluence, Miro, requirement matrices, KPI mapping, use-case documentation.</p>",
      },
      {
        id: 2,
        title: "Desktop Architecture Design and UI/UX Workflow",
        description:
          "<p>We design scalable desktop architecture using native, cross-platform, or hybrid approaches. Wireframes, prototypes, and design systems ensure intuitive navigation, accessibility, and efficient workflows.</p><p><strong>Tools/Practices:</strong> Figma, Zeplin, InVision, UML diagrams, design systems, accessibility standards.</p>",
      },
      {
        id: 3,
        title: "Sprint Planning and Risk Management",
        description:
          "<p>We define sprint cycles, allocate tasks, and outline release timelines. Risk management addresses dependency conflicts, platform constraints, legacy integration, and backlog prioritization.</p><p><strong>Tools/Practices:</strong> Jira, Trello, MS Project, Scrum/Kanban, risk assessment matrices.</p>",
      },
      {
        id: 4,
        title: "Desktop Development and Continuous Testing",
        description:
          "<p>Front-end development uses WPF, Electron, or WinUI, while back-end work leverages .NET, Node.js, or serverless APIs. CI/CD pipelines enable frequent stable builds and continuous testing.</p><p><strong>Tools/Practices:</strong> Git/GitHub/GitLab, Jenkins, Docker, Kubernetes, Postman, Selenium, Appium, SonarQube, code review frameworks.</p>",
      },
      {
        id: 5,
        title: "Deployment, Integration and System Configuration",
        description:
          "<p>We prepare staging and production environments, conduct user acceptance testing, configure APIs, and integrate third-party tools such as payment gateways, analytics, and collaboration platforms.</p><p><strong>Tools/Practices:</strong> AWS, Azure, GCP, Docker, Kubernetes, Terraform, monitoring tools.</p>",
      },
      {
        id: 6,
        title: "Continuous Support, Optimization and Feature Scaling",
        description:
          "<p>We provide long-term monitoring, bug resolution, performance optimization, OS-level updates, and feature expansion to keep the desktop product stable and future-ready.</p><p><strong>Tools/Practices:</strong> New Relic, Datadog, Prometheus, Firebase Analytics, CI/CD pipelines, automated regression suites.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Enterprise Software Development for",
    gradientTitle: "Industry-Specific",
    afterGradientTitle: "Needs",
    description:
      "We develop custom enterprise desktop applications with dependable architecture, adaptable design, smooth system integration, and optimized workflows that enhance productivity, simplify processes, and drive meaningful business results.",
    slides: [
      {
        title: "Retail",
        description:
          "Enhance inventory management, POS systems, and e-commerce platforms with secure, adaptable software and real-time analytics for data-driven decisions.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Deploy learning management systems, digital classrooms, and secure student data platforms to ensure smooth engagement and operational continuity.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Enable secure, compliant citizen services, workflow automation, and modernization of legacy systems across departments for optimized efficiency.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Integrate core banking, trading, and compliance systems with high-efficiency, secure software to maintain accuracy, reliability, and regulatory adherence.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Manage EHRs, telemedicine platforms, and patient data securely with interoperable, cloud-enabled, HIPAA-compliant desktop and enterprise applications.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Automate production lines, supply chains, and IoT monitoring with real-time, data-driven enterprise software solutions that maximize operational reliability.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Deliver MVPs, scalable platforms, and cloud-native architectures with agile development, CI/CD pipelines, and future-ready desktop or enterprise applications.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Streamline content management, streaming systems, and audience analytics with secure, high-efficiency software platforms tailored for media enterprises.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desktop Application Development Services",
    serviceType: "Desktop Application Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Desktop application development services for Windows, macOS, and Linux using C++/Qt, .NET, and Python, with architecture, integration, modernization, testing, and performance optimization for enterprise software.",
  }),
};
