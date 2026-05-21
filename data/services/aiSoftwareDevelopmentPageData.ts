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

type AISoftwareBlog = {
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
    "We build AI-powered software products that automate work, improve decisions, and create measurable business value.",
  solution: "AI software development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: AISoftwareBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const aiSoftwareDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Our Tech Stack for",
    middleTitle: "Artificial Intelligence",
    lastTitle: "Development Services",
    description:
      "Our stack includes proven AI frameworks, scalable ML tooling, secure data engineering layers, and advanced generative AI platforms, enabling consistent output quality, efficient model operations, and reliable delivery for enterprise-grade AI initiatives across industries.",
  },
  filters: ["AI/ML", "Cloud/DevOps", "Backend", "Database"],
  techIcons: [
    { name: "GPT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Gemini", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Llama", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "PaLM", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "TensorFlow", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "PyTorch", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "Scikit-Learn", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "OpenCV", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "LangChain", icon: "/icons/coding.svg", category: ["AI/ML", "Backend"] },
    { name: "RPA", icon: "/icons/streamline.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Data Pipelines", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Analytics", icon: "/icons/data-line.svg", category: ["Database", "AI/ML"] },
    { name: "Governance", icon: "/icons/values.svg", category: ["AI/ML", "Cloud/DevOps"] },
  ],
};

export const aiSoftwareDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "AI Software Development Services | Techionik - Intelligent Automation, ML and GenAI",
    description:
      "Techionik delivers enterprise AI solutions with intelligent automation, ML pipelines, generative AI, predictive analytics, and computer vision, ensuring compliance, operational efficiency, and actionable AI insights for your enterprise.",
    keywords: [
      "AI software development services",
      "custom AI development",
      "generative AI products",
      "enterprise AI solutions",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "AI Software Development Services",
      subtitle: "Enterprise AI solutions with intelligence, compliance, and scale.",
      description:
        "Our AI development company delivers enterprise AI solutions with intelligent automation, ML pipelines, generative AI, predictive analytics, and computer vision, ensuring compliance, operational efficiency, and actionable AI insights for your enterprise.",
      image: heroImage,
      imageAlt: "AI software development hero banner",
      ctaText: "Start Your AI Build",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "AI Software",
    title2: "Development Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "AI software development experts deliver solutions designed to fix workflow challenges and ensure reliable performance using advanced frameworks and industry-standard engineering practices.",
    RightDescription2:
      "Techionik delivers end-to-end AI development services, offering AI technology consulting, custom model development, and enterprise AI solutions. Our AI experts implement predictive analytics, automation, and intelligent systems for measurable industry impact.",
    buttonLabel: "Build AI Software",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Custom AI Development Services Delivering Intelligent Solutions for Your Business",
    mainDescription:
      "Techionik delivers end-to-end AI development services, offering AI technology consulting, custom model development, and enterprise AI solutions. Our AI experts implement predictive analytics, automation, and intelligent systems for measurable industry impact.",
    cards: [
      {
        id: 1,
        title: "Generative AI Product Development",
        description: [
          "We develop generative AI products integrating custom LLMs, predictive analytics, and automated content solutions.",
          "Secure prompt engineering, HITL controls, and robust Python, TensorFlow, and PyTorch frameworks support enterprise-grade results.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "Custom AI for Business Process Automation",
        description: [
          "We leverage generative AI, RPA, NLP, and predictive analytics to automate enterprise workflows.",
          "Our delivery focuses on higher throughput, lower friction, and actionable insights across operations.",
        ],
        icon: "/icons/streamline.svg",
      },
      {
        id: 3,
        title: "AI-as-a-Service (AIaaS)",
        description: [
          "AI-as-a-Service platforms provide pre-trained model APIs, secure custom AI model hosting, and flexible cloud deployment.",
          "This setup supports rapid innovation, intelligent decision-making, and smooth integration across enterprise environments.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "AI Chatbot Development",
        description: [
          "Our AI chatbots, powered by generative AI, NLP, and machine learning, automate support and enhance customer engagement.",
          "They deliver intelligent responses, optimize workflows, and improve operational efficiency across enterprises.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 5,
        title: "AI Agent Development",
        description: [
          "Intelligent AI agents automate complex workflows, analyze multimodal data, and deliver real-time enterprise insights.",
          "Reinforcement learning and adaptive systems enhance decision-making, efficiency, and overall productivity.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 6,
        title: "AI Consulting Services",
        description: [
          "We assess feasibility, craft AI roadmaps, optimize workflows, and guide technology selection for enterprise AI adoption.",
          "Our consultants deploy custom AI models aligned with business objectives, regulatory compliance, and operational efficiency.",
        ],
        icon: "/icons/values.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Expert AI Software Development Company",
    description:
      "We deliver end-to-end AI software solutions, developing custom strategies, intelligent models, and generative AI applications that address complex business challenges, optimize workflows, and drive measurable, sustainable enterprise growth.",
    cards: [
      {
        id: 1,
        title: "Proven AI Delivery Expertise and Global Trust",
        description:
          "With 100+ AI software projects deployed across multiple industries, TECHIONIK is a trusted AI software development company with 45+ AI engineers focused on long-term strategy goals.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Full-Cycle AI Development Management",
        description:
          "We handle the full AI software lifecycle: solution design, model engineering, algorithm development, system optimization, testing, deployment, and post-launch support.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Certified Standards and Compliance Assurance",
        description:
          "TECHIONIK follows ISO 9001:2015, ISO 27001:2022, and ISO 20000-1:2018 standards, while environmental, safety, and continuity controls support uninterrupted AI operations.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 4,
        title: "Advanced AI Engineering and Technology Integration",
        description:
          "Our R&D teams integrate AI, ML, NLP, and generative AI frameworks into enterprise applications while prioritizing performance, model accuracy, and maintainability.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 5,
        title: "Client-Focused Collaboration and Transparent IP Ownership",
        description:
          "Senior AI delivery advisors oversee project health, milestones, and performance metrics, while you retain full ownership of AI models, datasets, and intellectual property.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 6,
        title: "Cost-Effective AI Solutions and Flexible Engagement Models",
        description:
          "Automation and efficient pipelines can reduce costs by up to 50%, with dedicated teams, project-based delivery, or hybrid models available for faster deployment.",
        icon: "/icons/values.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible AI Development Outsourcing for",
    MiddleTitle: "Reliable Enterprise",
    lastTitle: "Solutions",
    description:
      "Our AI development outsourcing model addresses talent gaps, reduces operational overhead, and speeds up project delivery while delivering AI solutions aligned with your business objectives.",
    items: [
      {
        title: "AI Development Outsourcing",
        description:
          "<ul><li>Access experienced AI engineers for machine learning, NLP, computer vision, and generative AI projects</li><li>Reduce development costs and avoid hiring delays</li><li>Deliver enterprise-grade AI solutions faster without compromising quality or compliance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Integrate AI specialists quickly to fill expertise gaps and meet deadlines</li><li>Retain full control over code, models, workflows, and strategic AI decisions</li><li>Ensure consistent, high-quality output aligned with your organizational goals</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated AI Development Team",
        description:
          "<ul><li>Full-time AI engineers focused solely on your AI project objectives</li><li>Seamless alignment with internal processes, tools, and infrastructure</li><li>Reliable delivery that enhances operational efficiency and supports business growth</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full AI Development Outsourcing",
        description:
          "<ul><li>End-to-end AI project lifecycle handled by our expert team</li><li>From strategy and model design to deployment, monitoring, and optimization</li><li>Reduce operational burden while ensuring enterprise-ready, high-performance AI solutions</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "AI Software Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "How do you integrate AI into existing business systems and workflows?",
        answer:
          "We assess your infrastructure, data architecture, and workflows, then use APIs, microservices, and cloud-based pipelines to embed AI modules that support automation, prediction, and real-time decision support.",
      },
      {
        id: 2,
        question: "What is your process for deploying AI models into production?",
        answer:
          "We follow a structured deployment pipeline with data validation, model training, testing, and containerized release using Docker and Kubernetes, supported by CI/CD and continuous monitoring.",
      },
      {
        id: 3,
        question: "How do you ensure data privacy, compliance, and security in AI solutions?",
        answer:
          "We use encryption, access controls, secure cloud environments, anonymization, audit trails, and compliance-aligned training pipelines so sensitive data stays protected and auditable.",
      },
      {
        id: 4,
        question: "How do you prevent AI bias and ensure ethical decision-making?",
        answer:
          "We apply fairness checks, bias mitigation techniques, explainable AI practices, and governance protocols so models stay transparent, accountable, and responsible.",
      },
      {
        id: 5,
        question: "What is the typical timeline for developing an AI MVP or proof-of-concept?",
        answer:
          "AI MVPs or proof-of-concepts are typically delivered in 2 to 4 weeks depending on data complexity and scope, while enterprise-scale solutions often require 3 to 6 months end to end.",
      },
      {
        id: 6,
        question: "Can your AI solutions scale across multiple departments or enterprise workflows?",
        answer:
          "Yes. We design modular, cloud-native architectures that support horizontal and vertical scale across departments, workflows, and high-volume enterprise operations.",
      },
      {
        id: 7,
        question: "What post-launch support do you provide for AI applications?",
        answer:
          "We provide model monitoring, retraining pipelines, performance audits, optimization reviews, cloud cost management, and integration troubleshooting after deployment.",
      },
      {
        id: 8,
        question: "Who will work on our AI project, and what expertise do they bring?",
        answer:
          "Your team can include AI architects, data scientists, ML engineers, NLP specialists, computer vision experts, and project managers with deep enterprise delivery experience.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Develop AI software development solutions that simplify operations and improve decision-making.",
    description:
      "AI software development experts deliver solutions designed to fix workflow challenges and ensure reliable performance using advanced frameworks and industry-standard engineering practices.",
    backgroundImage: heroImage,
    imageAlt: "AI software development CTA",
    buttonText: "Talk to an AI Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: aiSoftwareDevelopmentTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our AI Development Process",
    descriptiption:
      "We structure AI development through defined KPIs, rigorous data preparation, model training, validation, deployment, and continuous monitoring, ensuring stable performance, compliance, and production-ready AI systems aligned with enterprise demands.",
    mainDescription:
      "Our process keeps strategy, data, and delivery aligned so your AI software can move from concept to production with less risk.",
    card: [
      {
        id: 1,
        title: "Business Context and KPI Definition",
        description:
          "<p>We align operational targets with AI opportunities and define measurable KPIs such as accuracy, recall, latency ranges, cost per inference, and ROI impact.</p>",
      },
      {
        id: 2,
        title: "Data Acquisition, ETL, and Profiling",
        description:
          "<p>We audit data sources, build ETL pipelines, resolve inconsistencies, and validate schema compliance so the input stream supports stable AI outcomes.</p>",
      },
      {
        id: 3,
        title: "Exploratory Analysis and Feature Design",
        description:
          "<p>We analyze patterns, correlations, and outliers, then design features or embeddings that fit the target problem and model type.</p>",
      },
      {
        id: 4,
        title: "Data Preparation and Enhancement",
        description:
          "<p>Data is cleaned, normalized, deduplicated, and enriched, with augmentation used where needed to improve edge-case coverage and training consistency.</p>",
      },
      {
        id: 5,
        title: "Model Development and Training Lifecycle",
        description:
          "<p>We select the right frameworks and architectures, then tune, benchmark, and refine models against metrics such as precision, F1, AUC, and error variance.</p>",
      },
      {
        id: 6,
        title: "Validation, Stress Testing, and Security Review",
        description:
          "<p>Models are tested against real-world and adversarial scenarios, with security and compliance checks completed before release.</p>",
      },
      {
        id: 7,
        title: "Deployment and Infrastructure Integration",
        description:
          "<p>We deploy models into production using CI/CD and MLOps pipelines, including API integration, autoscaling, and logging for dependable performance.</p>",
      },
      {
        id: 8,
        title: "Monitoring, Drift Detection, and Continuous Improvement",
        description:
          "<p>We track accuracy, latency, cost, and drift after launch, then retrain and optimize models while preserving governance and audit trails.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Custom AI Software Development Solutions",
    gradientTitle: "for Industry",
    afterGradientTitle: "Needs",
    description:
      "We deliver custom AI software development solutions with dependable frameworks, flexible performance, smooth system integration, and workflow automation that improves operations, increases output, and supports business growth.",
    slides: [
      {
        title: "Retail",
        description:
          "Improve inventory control, POS performance, and e-commerce platforms with forecasting, purchase pattern analysis, and real-time decision support.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create AI-powered learning systems, digital classrooms, and student data platforms that enhance engagement and support everyday processes.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop compliant AI systems for workflow automation, service request handling, identity platforms, and modernization of outdated systems.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Offer AI tools for risk scoring, fraud detection, compliance tracking, and automation of core banking or trading tasks.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Deliver AI software for EHR improvement, telehealth platforms, patient data handling, diagnostic support, and cloud-enabled workflows.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Create AI systems that automate production tasks, predict equipment issues, track IoT devices, and provide data-focused insights.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Offer AI-powered MVPs, cloud-ready platforms, automation tools, and integration layers that help startups launch faster.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Develop AI software for content automation, streaming analytics, audience tracking, and media platforms that improve viewing experiences.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Software Development Services",
    serviceType: "AI Software Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "AI software development services covering intelligent automation, ML pipelines, generative AI, predictive analytics, computer vision, and enterprise deployment.",
  }),
};
