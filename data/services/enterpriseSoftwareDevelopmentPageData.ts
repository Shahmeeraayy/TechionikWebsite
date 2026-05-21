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

type EnterpriseBlog = {
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
    "We build enterprise software systems that unify operations, improve visibility, and support long-term growth.",
  solution: "Enterprise software development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: EnterpriseBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const enterpriseSoftwareDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Tech Stack and Tools TECHIONIK Uses for",
    middleTitle: "Enterprise Software Development",
    description:
      "The same enterprise stack powers our architecture, delivery, and modernization work, including Java, Python, .NET, Node.js, React, Angular, Vue, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Git, Jira, Figma, Zeplin, MuleSoft, and Kafka.",
  },
  filters: ["Frontend", "Backend", "Database", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "Java", icon: "/icons/tech-Java.svg", category: ["Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: ".NET", icon: "/icons/tech-Dot-Net.svg", category: ["Backend"] },
    { name: "Node.js", icon: "/icons/tech-Node.svg", category: ["Backend"] },
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend"] },
    { name: "Vue", icon: "/icons/tech-Vue.svg", category: ["Frontend"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "Jenkins", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "Git", icon: "/icons/browser.svg", category: ["Cloud/DevOps"] },
    { name: "Jira", icon: "/icons/people-team.svg", category: ["Cloud/DevOps"] },
    { name: "Figma", icon: "/icons/coding2.svg", category: ["Frontend"] },
    { name: "Zeplin", icon: "/icons/box-icon.png", category: ["Frontend"] },
    { name: "MuleSoft", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "Kafka", icon: "/icons/data-line.svg", category: ["Backend"] },
    { name: "SAP", icon: "/icons/cloud.svg", category: ["Backend"] },
    { name: "Oracle", icon: "/icons/cloud.svg", category: ["Backend"] },
    {
      name: "Microsoft Dynamics",
      icon: "/icons/cloud.svg",
      category: ["Backend"],
    },
    { name: "SQL Server", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "MongoDB", icon: "/icons/data-line.svg", category: ["Database"] },
    { name: "AI", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    {
      name: "Microservices",
      icon: "/icons/coding.svg",
      category: ["Backend", "Cloud/DevOps"],
    },
  ],
};

export const enterpriseSoftwareDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Enterprise Software Development Services | Techionik",
    description:
      "Techionik delivers enterprise software development services with AI integration, cloud architecture, legacy modernization, ERP and CRM integration, and secure, scalable systems for large organizations.",
    keywords: [
      "enterprise software development services",
      "custom enterprise software development",
      "legacy application modernization",
      "software integration services",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Enterprise Software Development Services",
      subtitle: "",
      description:
        "We engineer scalable, secure enterprise software with advanced automation, AI integration, cloud architecture, and legacy modernization, driving efficiency, resilience, and compliance for large organizations through precision-driven development and continuous innovation.",
      image: heroImage,
      imageAlt: "Enterprise software development hero banner",
      ctaText: "Talk to an Enterprise Architect",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Custom Enterprise Software Solutions for",
    spanTitle: "Automation and Innovation",
    title2: "",
    reviews: defaultReviewImages,
    RightDescription1:
      "As a custom enterprise software development company, we create AI-driven, cloud-native, and microservices-based platforms using DevOps and CI/CD pipelines, ensuring secure, high-performing systems and efficient ERP-CRM integration across enterprise infrastructures.",
    RightDescription2:
      "Our software engineers deliver precision-driven architecture, modernization, and integration work that improves resilience, compliance, and long-term operational performance.",
    buttonLabel: "Discuss Your Enterprise Project",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Enterprise Software Development Services We Offer",
    mainDescription:
      "We design enterprise software that modernizes operations, automates work, and integrates critical systems without compromising security or scale.",
    cards: [
      {
        id: 1,
        title: "Enterprise Application Development Services",
        description: [
          "We deliver custom enterprise applications with Java, Python, C#, Angular, React, cloud-native microservices, AI, automation, and secure databases.",
          "The result is scalable workflows, smoother migration from legacy systems, and stronger business performance.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "Enterprise Software Development Consulting",
        description: [
          "We analyze requirements, assess feasibility, plan security and compliance, design architecture, select the tech stack, and define the roadmap.",
          "Our consultants also implement DevOps, deliver PoCs, optimize software, and manage vendors for enterprise-grade solutions.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 3,
        title: "Enterprise Resource Planning (ERP) Solutions",
        description: [
          "Our ERP solutions integrate finance, HR, supply chain, CRM, and operations using SAP, Oracle, or Microsoft Dynamics.",
          "We support ABAP and SQL customization, real-time analytics, scalable frameworks, and risk-optimized resource management.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Legacy Application Modernization",
        description: [
          "We modernize legacy applications using microservices, containerization, cloud migration, and updated frameworks like Spring Boot, .NET Core, and Angular.",
          "Automated testing, CI/CD, and security practices help deliver scalable, secure, high-performance systems.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "Software Integration Services",
        description: [
          "We unify systems using APIs, microservices, IoT, and cloud platforms with MuleSoft, Boomi, Kafka, Java, Python, and .NET.",
          "This creates secure data exchange, legacy modernization, workflow automation, and enterprise-grade integration.",
        ],
        icon: "/icons/streamline.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Custom Enterprise Software Development Company",
    description:
      "We deliver enterprise-grade software that enhances operational efficiency, ensures scalability, and drives measurable business outcomes. Our certified practices, modern tech stack, and transparent process guarantee secure, high-performance solutions tailored to your business needs.",
    cards: [
      {
        id: 1,
        title: "Global Trust & Proven Expertise",
        description:
          "Trusted by 500+ clients globally, TECHIONIK has completed 3000+ enterprise software projects. With 250+ skilled IT professionals and 10+ years of experience, we provide reliable solutions for mid-size and large enterprises.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "End-to-End Enterprise Software Development",
        description:
          "From UI/UX and architecture design to front-end, back-end, API integrations, microservices, cloud deployment, QA, and DevOps, we cover the complete software lifecycle. Tech Stack & Tools: Java, Python, .NET, Node.js, React, Angular, Vue, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Git, Jira, Figma, Zeplin, MuleSoft, Kafka.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Certified Quality, Security & Compliance",
        description:
          "We adhere to ISO 9001 and ISO 27001 practices, along with GDPR and SOC 2 standards. Secure development environments, code audits, and penetration testing help maintain data integrity and confidentiality.",
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "Innovation & Technology Leadership",
        description:
          "Our R&D teams integrate AI, ML, IoT, blockchain, and cloud-native solutions into enterprise software so platforms stay future-ready and adaptable.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 5,
        title: "Client Success & Partnership Model",
        description:
          "Senior advisors oversee delivery, performance, and growth strategies. Clients retain full ownership of code, data, and IP, and our 98% retention rate supports long-term success.",
        icon: "/icons/browser.svg",
      },
      {
        id: 6,
        title: "Cost Optimization & Flexible Engagement",
        description:
          "We deliver up to 50% cost savings through CI/CD automation, reusable components, and optimized development frameworks. Flexible engagement options include dedicated teams, project-based, or hybrid models.",
        icon: "/icons/values.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible Enterprise Software Development Engagement Models for",
    MiddleTitle: "Scalable and High-Performance",
    lastTitle: "Solutions",
    description:
      "Our engagement models deliver adaptable enterprise software solutions powered by certified developers and architects, ensuring efficiency, scalability, and measurable business impact.",
    items: [
      {
        title: "Software Development Outsourcing",
        description:
          "<ul><li>Access expert engineers on demand</li><li>Lower infrastructure and development costs</li><li>Accelerate delivery through agile and DevOps practices</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Extend your internal engineering team instantly</li><li>Address critical skill gaps with domain specialists</li><li>Maintain complete visibility and process control</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Development Team",
        description:
          "<ul><li>Work with full-time developers focused exclusively on your project</li><li>Integrate seamlessly into your existing workflow</li><li>Ensure consistency, security, and optimized performance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full-Cycle Project Delivery",
        description:
          "<ul><li>Complete ownership from discovery to deployment</li><li>Agile management with continuous integration and testing</li><li>Reduce operational complexity while maintaining quality assurance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  contactHero: {
    title:
      "Deliver enterprise software solutions that optimize workflows and drive measurable results.",
    middleTitle: "",
    description:
      "Custom enterprise software company delivering solutions that optimize workflows, integrate systems, and improve efficiency to support your strategic business objectives.",
    backgroundImage: heroImage,
    imageAlt: "Enterprise software development CTA",
    buttonText: "Partner with Expert Software Developers",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: enterpriseSoftwareDevelopmentTechStackData,
  caseStudies,
  whatWeDo: {
    title: "Our Enterprise Software Development Process",
    descriptiption:
      "TECHIONIK delivers enterprise software solutions with a structured, end-to-end process combining advanced technologies, certified practices, and modern methodologies to achieve measurable business results.",
    mainDescription:
      "We guide programs from discovery through modernization with clear ownership, security, and delivery discipline.",
    card: [
      {
        id: 1,
        title: "Discovery & Requirements Analysis",
        description:
          "<p>We define business goals, user needs, and functional and non-functional requirements. Workshops, competitor research, and roadmap planning ensure projects align with enterprise objectives.</p><p><strong>Tools:</strong> Jira, Confluence, Miro, Trello, KPI mapping, user story mapping</p>",
      },
      {
        id: 2,
        title: "Architecture & UX/UI Design",
        description:
          "<p>We shape scalable architectures using microservices, serverless, or monolithic patterns. Wireframes and prototypes define user flow, navigation, and responsive design.</p><p><strong>Tools:</strong> Figma, Zeplin, InVision, Adobe XD, UML diagrams, ERD, WCAG compliance</p>",
      },
      {
        id: 3,
        title: "Project Planning & Risk Management",
        description:
          "<p>Agile sprint planning, resource allocation, and risk mitigation help keep delivery timely and transparent.</p><p><strong>Tools:</strong> Jira, MS Project, Kanban boards, Gantt charts, RACI matrix</p>",
      },
      {
        id: 4,
        title: "Development & Quality Assurance",
        description:
          "<p>Our front-end teams use React, Angular, and Vue.js while our back-end teams work with Node.js, .NET, Java, Python, and Ruby on Rails. CI/CD pipelines and automated testing keep code secure and high quality.</p><p><strong>Tools:</strong> Git, GitHub, GitLab, Jenkins, Docker, Kubernetes, Selenium, Postman, SonarQube, JUnit, Cypress</p>",
      },
      {
        id: 5,
        title: "Deployment & Integration",
        description:
          "<p>We deploy software to cloud or on-premises environments and integrate it with the wider IT ecosystem through APIs and reliable platform connections.</p><p><strong>Tools:</strong> AWS, Azure, GCP, Terraform, Ansible, Prometheus, Grafana, API gateways, ESB platforms</p>",
      },
      {
        id: 6,
        title: "Support, Maintenance & Modernization",
        description:
          "<p>Continuous monitoring, bug fixes, cloud optimization, feature updates, and DevOps practices keep software efficient, secure, and future-ready.</p><p><strong>Tools:</strong> New Relic, Datadog, Prometheus, Grafana, CI/CD pipelines, ELK stack</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Enterprise Software Development for",
    gradientTitle: "Industry-Specific Needs",
    afterGradientTitle: "",
    description:
      "We deliver custom enterprise software with secure architecture, flexible design, smooth integration, and high-performance functionality to drive measurable business results.",
    slides: [
      {
        title: "Retail",
        description:
          "Optimize inventory, POS, and e-commerce platforms with secure, scalable software and real-time analytics.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Deploy learning management systems, digital classrooms, and secure student data platforms for seamless engagement.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Enable secure, compliant citizen services, workflow automation, and legacy system modernization across departments.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Integrate core banking, trading, and compliance systems with secure, scalable, and high-performance software.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Manage EHR, telemedicine, and patient data securely with interoperable, cloud-based, HIPAA-compliant systems.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Automate production, supply chain, and IoT monitoring with real-time, data-driven enterprise software solutions.",
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
  faq: {
    mainTitle: "Enterprise Software Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question:
          "How does enterprise software development impact business efficiency and ROI?",
        answer:
          "According to Gartner's 2024 IT Spending Report, businesses adopting modern enterprise software frameworks can see up to 35% higher process efficiency and 25% faster decision-making. By integrating automation, analytics, and custom ERP systems, organizations minimize manual work and improve transparency across departments.",
      },
      {
        id: 2,
        question:
          "What technologies are driving the future of enterprise software development?",
        answer:
          "Microservices, cloud-native environments, AI-driven analytics, and low-code frameworks are reshaping enterprise systems. A Deloitte 2024 Tech Trends study shows that modular architecture and DevOps automation are top priorities for scalable, resilient platforms.",
      },
      {
        id: 3,
        question:
          "How secure is enterprise software in handling large-scale business data?",
        answer:
          "The IBM 2024 Cost of a Data Breach Report states that secure DevSecOps pipelines can reduce breach costs by up to $1.7 million per incident. Modern enterprise solutions use end-to-end encryption, zero-trust architectures, and real-time monitoring to protect sensitive data.",
      },
      {
        id: 4,
        question:
          "How long does it take to build an enterprise-grade software solution?",
        answer:
          "Project timelines depend on complexity, integrations, and team model, typically ranging from 4-12 months. Statista's 2024 software delivery insights show that agile and DevOps practices can shorten development cycles by up to 40% without sacrificing quality.",
      },
      {
        id: 5,
        question:
          "Why partner with a specialized enterprise software development company?",
        answer:
          "A Forrester 2024 study shows that enterprises working with specialized vendors can achieve 3x faster scalability and 2x better post-launch performance compared with in-house builds. Experienced partners bring certified engineers, ISO-compliant practices, and deep domain expertise.",
      },
      {
        id: 6,
        question:
          "How will your software integrate with our existing systems without disrupting operations?",
        answer:
          "Our team conducts a comprehensive systems audit to understand your ERP, CRM, databases, and legacy applications. Integration follows API-first and microservices architecture, enabling modular connections while continuous integration pipelines and automated regression testing minimize downtime and disruption.",
      },
      {
        id: 7,
        question:
          "What steps do you take to ensure data security, compliance, and regulatory requirements?",
        answer:
          "Security is embedded across the entire SDLC using DevSecOps practices. We implement role-based access control, AES-256 encryption, SSL/TLS, and multi-factor authentication while following ISO 27001, SOC 2, GDPR, and HIPAA requirements with continuous monitoring and audit logging.",
      },
      {
        id: 8,
        question:
          "How do you manage project timelines, budgets, and changes in requirements?",
        answer:
          "We use Agile Scrum and Kanban methodologies with bi-weekly sprints, sprint planning, and backlog grooming to accommodate changes. Project management tools, milestone-based budgeting, and resource allocation dashboards help keep timelines and costs on target.",
      },
      {
        id: 9,
        question:
          "How will you ensure the software scales with our business growth and future needs?",
        answer:
          "Scalability is built in from the start using microservices, containerization, and cloud-native deployments on AWS, Azure, or GCP. We implement load balancing, caching, and performance testing so the platform can grow as users and transactions increase.",
      },
      {
        id: 10,
        question:
          "How do you manage risks related to security breaches, downtime, or compliance failures?",
        answer:
          "We use threat modeling, continuous vulnerability scanning, automated patching, SIEM monitoring, backup and disaster recovery strategies, and periodic penetration testing. Compliance audits help keep systems aligned with regulatory frameworks and lower operational risk.",
      },
      {
        id: 11,
        question:
          "What reporting and analytics capabilities are built into the software?",
        answer:
          "Enterprise software can include real-time dashboards, KPI tracking, and predictive analytics powered by ETL pipelines, SQL and NoSQL databases, and BI tools such as Power BI, Tableau, and Looker. APIs also make it easy to share insights across other enterprise systems.",
      },
    ],
  } satisfies FAQ,
  blogs,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Software Development Services",
    serviceType: "Enterprise Software Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Enterprise software development services for custom enterprise applications, ERP solutions, legacy modernization, and software integration services.",
  }),
};
