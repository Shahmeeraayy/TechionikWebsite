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

type AIConsultingBlog = {
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
    "We help teams turn AI ideas into production-ready systems with clear strategy, governance, and measurable outcomes.",
  solution: "AI consulting",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: AIConsultingBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const aiConsultingTechStackData: TechStackData = {
  headingData: {
    title: "Artificial Intelligence Consulting and Development",
    middleTitle: "Technologies",
    lastTitle: "We Use",
    description:
      "We select enterprise-grade frameworks, cloud platforms, and AI tools aligned with strategy, governance, and brand-driven AI architecture so your organization can move from concept to measurable execution.",
  },
  filters: ["AI/ML", "Cloud/DevOps", "Backend", "Database"],
  techIcons: [
    { name: "GPT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Gemini", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Llama", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "PaLM", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "LangChain", icon: "/icons/coding.svg", category: ["AI/ML", "Backend"] },
    { name: "TensorFlow", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "PyTorch", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "Scikit-Learn", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "OpenCV", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "RPA", icon: "/icons/streamline.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Data Pipelines", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
    { name: "Governance", icon: "/icons/values.svg", category: ["AI/ML", "Cloud/DevOps"] },
  ],
};

export const aiConsultingPageData = {
  templateVariant: "default",
  meta: {
    title: "AI Consulting Services | Techionik - Enterprise AI Strategy, GenAI & MLOps",
    description:
      "Techionik offers expert AI consulting services with enterprise AI strategy, data readiness, model design, MLOps pipelines, GenAI integration, governance, and cost and risk management using GPT, Gemini, Llama, and PaLM.",
    keywords: [
      "AI consulting services",
      "enterprise AI strategy",
      "AI assessment",
      "MLOps pipelines",
      "GenAI integration",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "AI Consulting Services",
      subtitle: "",
      description:
        "We offer expert Artificial Intelligence consulting services with enterprise AI strategy, data readiness, model design, MLOps pipelines, GenAI integration, governance, and cost and risk management using GPT, Gemini, Llama, and PaLM to enhance decision-making and achieve business objectives.",
      image: heroImage,
      imageAlt: "AI consulting hero banner",
      ctaText: "Talk to an AI Consultant",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "AI Consulting",
    title2: "Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "We deliver end-to-end AI consulting services that define enterprise AI goals, assess data readiness, map high-value use cases, and build governance-driven roadmaps with ROI modeling, compliance controls, cloud-native architecture, and execution-ready integration pathways.",
    RightDescription2:
      "Our AI experts provide model design, workflow optimization, and deployment strategies to deliver reliable, high-impact, and actionable AI solutions customized to your organization.",
    buttonLabel: "Discuss Your AI Strategy",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Artificial intelligence Consulting Services We Offer",
    mainDescription:
      "Our AI consulting company offers end-to-end AI solutions, including AI strategy, machine learning and deep learning implementation, data pipeline optimization, infrastructure integration, risk mitigation, and deployment guidance engineered to support high-precision improvements across business systems.",
    cards: [
      {
        id: 1,
        title: "AI Strategy and Roadmap Development",
        description: [
          "Define enterprise-aligned AI goals and assess the data foundation needed to support them.",
          "Map high-value use cases, governance controls, cloud-native architecture, and execution-ready integration pathways.",
        ],
        icon: "/icons/data-line.svg",
      },
      {
        id: 2,
        title: "AI-Powered Automation",
        description: [
          "Deliver AI-powered automation with adaptive ML models, RPA deployment, and predictive workflow intelligence.",
          "Reduce operational latency, cut costs, eliminate errors, and improve enterprise efficiency.",
        ],
        icon: "/icons/streamline.svg",
      },
      {
        id: 3,
        title: "AI Assessment",
        description: [
          "Audit data pipelines, ML frameworks, and infrastructure to evaluate AI readiness.",
          "Prioritize high-ROI use cases and optimize GPU and integration resources with clear strategic guidance.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 4,
        title: "AI Integration Consulting",
        description: [
          "Align data pipelines, legacy systems, and advanced models to improve operational efficiency.",
          "Enable real-time decision-making and deliver system-wide intelligence across connected business tools.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 5,
        title: "AI Audit & Reengineering Consulting",
        description: [
          "Audit, redevelop, and improve existing AI systems to strengthen data pipelines and model quality.",
          "Modernize algorithms, reduce errors, and achieve clearer ROI from AI investments with precision and speed.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "AI Model Development",
        description: [
          "Design and implement predictive analytics, NLP, and computer vision models for practical business outcomes.",
          "Reduce operational bottlenecks, improve accuracy, and support faster, data-driven decisions.",
        ],
        icon: "/icons/ai-brain.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "for Best AI Consulting Company",
    description:
      "Since 2021, TECHIONIK has delivered custom AI consulting solutions with dedicated teams of data scientists, computer vision experts, AI and ML specialists, and automation engineers driving model strategy, enterprise AI deployment, real-time pipelines, and proven results across industries.",
    cards: [
      {
        id: 1,
        title: "Proven AI Consulting Expertise",
        description:
          "Dedicated data scientists, computer vision engineers, ML specialists, and automation experts help build scalable ML models, optimize data pipelines, and guide enterprise AI deployment across cloud platforms.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "End-to-End AI Strategy and Implementation",
        description:
          "We align business goals with model strategy, architecture planning, data audit, feature engineering, experiment tracking, and model lifecycle guidance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "AI Security, Governance and Compliance",
        description:
          "We support model validation, bias detection, audit trails, encryption, risk frameworks, and secure integration for audit-ready systems.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 4,
        title: "Advanced AI Technology Integration",
        description:
          "We integrate LLMs, predictive models, OCR, NLP engines, recommender systems, anomaly detection, real-time analytics, and computer vision pipelines with your existing stack.",
        icon: "/icons/coding.svg",
      },
      {
        id: 5,
        title: "AI-Focused Project Governance",
        description:
          "Dedicated consultants, ML engineers, data architects, and DevOps teams manage delivery, risk control, KPI tracking, and optimization through transparent reporting.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Flexible Engagement for AI Projects",
        description:
          "Choose AI advisory, dedicated AI teams, hybrid engineering, or full-cycle AI implementation based on your scope and roadmap.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 7,
        title: "Comprehensive AI Technical Team",
        description:
          "Our teams span data scientists, ML engineers, deep learning specialists, automation engineers, computer vision experts, cloud AI architects, and QA analysts across Python, TensorFlow, PyTorch, Scikit-Learn, OpenCV, LangChain, and major cloud providers.",
        icon: "/icons/box-icon.png",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our AI Consulting",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our AI consulting outsourcing models offer flexible engagement options including dedicated teams, project-based collaboration, and hybrid approaches, delivering expert guidance, optimized AI architectures, and long-term enterprise AI solutions.",
    items: [
      {
        title: "AI Consulting Project Outsourcing",
        description:
          "<ul><li>Minimize deployment delays and reduce hiring overhead</li><li>Get secure, scalable, enterprise-grade AI architectures</li><li>Use model orchestration and integration strategies that align with delivery goals</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Maintain full control over architecture, workflows, and MLOps practices</li><li>Bridge skill gaps with senior AI specialists on demand</li><li>Keep code quality and performance metrics visible</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated AI Consulting Team",
        description:
          "<ul><li>Seamlessly integrate with internal teams, infrastructure, and AI workflows</li><li>Optimize model performance, reliability, and pipeline scalability</li><li>Support long-term ownership and faster iteration</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full AI Consulting Outsourcing",
        description:
          "<ul><li>Reduce operational complexity while achieving future-proof AI solutions</li><li>Keep systems secure, compliant, and measurable</li><li>Deliver enterprise-ready AI that creates business impact</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "AI Consulting Services",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What can an AI consulting provider help our business achieve?",
        answer:
          "An AI consulting provider can help with strategy, use-case selection, data readiness, model design, automation, deployment planning, and governance so your AI efforts stay aligned with business goals.",
      },
      {
        id: 2,
        question: "How do you assess whether our data is ready for AI?",
        answer:
          "We review your data pipelines, quality, access controls, and infrastructure to identify gaps and prioritize the use cases that are realistic and high value.",
      },
      {
        id: 3,
        question: "Which AI models and platforms do you work with?",
        answer:
          "We work with GPT, Gemini, Llama, PaLM, predictive models, NLP, computer vision, and modern cloud and MLOps stacks depending on the use case and architecture.",
      },
      {
        id: 4,
        question: "Can you integrate AI into our existing systems and workflows?",
        answer:
          "Yes. We connect AI to APIs, ERPs, CRMs, RPA workflows, data pipelines, and event-driven systems so the solution fits your existing environment.",
      },
      {
        id: 5,
        question: "How do you reduce AI project risk and cost?",
        answer:
          "We use roadmap planning, feasibility analysis, proof-of-concept work, governance controls, and deployment guidance to reduce waste and make the investment easier to manage.",
      },
      {
        id: 6,
        question: "How do you handle governance, security, and compliance?",
        answer:
          "We build with audit trails, encryption, bias review, validation, and compliance controls in mind so the solution is easier to govern and safer to operate.",
      },
      {
        id: 7,
        question: "What is AI audit and reengineering consulting?",
        answer:
          "It is a service for reviewing existing AI systems, improving data pipelines, modernizing models, and correcting issues so the solution delivers better outcomes and clearer ROI.",
      },
      {
        id: 8,
        question: "How do we start an AI consulting engagement?",
        answer:
          "Start with a discovery call. We will review goals, data readiness, use cases, risks, and delivery options, then recommend a practical roadmap for implementation.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Partner with a trusted AI consulting services provider to accelerate decisions and solve AI challenges.",
    description:
      "Our AI experts provide model design, workflow optimization, and deployment strategies to deliver reliable, high-impact, and actionable AI solutions.",
    backgroundImage: heroImage,
    imageAlt: "AI consulting CTA",
    buttonText: "Hire an AI Consultant",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: aiConsultingTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Agile-Driven Artificial Intelligence Consulting Services Process",
    descriptiption:
      "We guide enterprises from exploration to full-scale AI implementation using a transparent, structured process that keeps AI strategy, governance, and delivery aligned.",
    mainDescription:
      "Our AI consulting process supports ML, deep learning, NLP, computer vision, and AI pipeline solutions that are engineered for measurable business impact.",
    card: [
      {
        id: 1,
        title: "Needs Assessment",
        description:
          "<p>We analyze business challenges, goals, and infrastructure to identify high-value AI opportunities and map the data readiness needed for execution.</p>",
      },
      {
        id: 2,
        title: "Feasibility Analysis",
        description:
          "<p>We evaluate technical viability, resources, cloud platforms, frameworks, ROI, and risk so your roadmap is grounded in real delivery potential.</p>",
      },
      {
        id: 3,
        title: "Custom Solution Design",
        description:
          "<p>We architect AI systems tailored to your operational needs, data landscape, and team capabilities with ethical and compliant design choices.</p>",
      },
      {
        id: 4,
        title: "POC Development",
        description:
          "<p>We build working prototypes using real data and workflows to validate model accuracy, assess feasibility, and reduce operational risk before full deployment.</p>",
      },
      {
        id: 5,
        title: "Compliance and Security Review",
        description:
          "<p>We assess security, bias, and regulatory controls so the solution aligns with GDPR, HIPAA, ISO, and enterprise governance requirements.</p>",
      },
      {
        id: 6,
        title: "Quality Assurance",
        description:
          "<p>Controlled testing validates functionality, model performance, and user experience so ML, NLP, computer vision, and AI pipelines are reliable in real use.</p>",
      },
      {
        id: 7,
        title: "Full-Scale Deployment",
        description:
          "<p>We implement solutions across enterprise systems with minimal disruption and monitor the rollout to keep performance, security, and ROI on track.</p>",
      },
      {
        id: 8,
        title: "Continuous Support and Optimization",
        description:
          "<p>After launch, we monitor models, retrain as needed, optimize workflows, and provide team training so your AI lifecycle keeps improving over time.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Our Artificial Intelligence",
    gradientTitle: "for Industry Needs",
    afterGradientTitle: "",
    description:
      "We provide strategic AI consulting tailored to industry-specific challenges, advising on cloud-ready, data-intensive architectures, secure integrations, high-throughput AI pipelines, and workflows engineered for operational resilience and measurable business impact.",
    slides: [
      {
        title: "Retail",
        description:
          "Guide inventory, POS, and ecommerce workflows with recommendation engines, automated forecasting, API integration, and high-availability pipelines.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Advise on digital classrooms and LMS platforms with role-based access, predictive analytics, offline-first models, and secure content delivery.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Design cloud-native AI solutions for citizen services, identity verification, and legacy modernization with audit-ready workflows.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Support fraud detection, low-latency APIs, compliance monitoring, and resilient AI-driven transaction workflows for regulated platforms.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Guide EHR, telehealth, and diagnostic systems with HIPAA-compliant pipelines, encrypted data handling, and performance monitoring.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Consult on production automation, IoT intelligence, predictive maintenance, and real-time operational analytics with expandable AI pipelines.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Advise on AI-powered MVPs and cloud-native platforms with API orchestration, model integration layers, and rapid deployment workflows.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment and Media",
        description:
          "Guide streaming and media platforms with high-throughput APIs, distributed model deployment, cloud orchestration, and audience analytics.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Consulting Services",
    serviceType: "AI Consulting",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "AI consulting services for enterprises covering strategy, data readiness, model design, MLOps, GenAI integration, governance, and deployment planning.",
  }),
};
