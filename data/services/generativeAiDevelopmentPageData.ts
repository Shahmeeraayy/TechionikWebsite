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

type GenerativeAIBlog = {
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
    "We help organizations launch generative AI products that reduce costs, enforce compliance, and accelerate transformation.",
  solution: "Generative AI development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: GenerativeAIBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const generativeAiTechStackData: TechStackData = {
  headingData: {
    title: "Our Tech Stack for",
    middleTitle: "Generative AI",
    lastTitle: "Development",
    description:
      "Our stack includes proven AI frameworks, scalable ML tooling, secure data engineering layers, and advanced generative AI platforms, enabling consistent output quality, efficient model operations, and reliable delivery for enterprise-grade AI initiatives across industries.",
  },
  filters: ["AI/ML", "Cloud/DevOps", "Backend", "Database"],
  techIcons: [
    { name: "GPT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "RAG", icon: "/icons/data-line.svg", category: ["AI/ML", "Backend"] },
    { name: "LLMs", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "TensorFlow", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "PyTorch", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "VAE", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "GANs", icon: "/icons/coding.svg", category: ["AI/ML"] },
    { name: "DDPM", icon: "/icons/values.svg", category: ["AI/ML"] },
    { name: "LLaMA", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "HITL", icon: "/icons/people-team.svg", category: ["AI/ML", "Backend"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
  ],
};

export const generativeAiDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Generative AI Development Services | Techionik - LLMs, RAG and AI Transformation",
    description:
      "Techionik delivers future-forward generative AI development services that reduce costs, meet compliance requirements, and accelerate digital transformation with LLMs, RAG pipelines, agentic AI, and custom GenAI solutions.",
    keywords: [
      "generative AI development services",
      "LLM development",
      "RAG pipelines",
      "genAI product development",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Generative AI Development Services",
      subtitle: "Future-forward AI development for enterprise transformation.",
      description:
        "As a trusted generative AI development company, we deliver future-forward AI development services that reduce costs, meet compliance, and accelerate digital transformation. Our AI engineers help organizations integrate agentic AI, custom large language models, retrieval-augmented generation pipelines, and generative AI to align with organizational goals.",
      image: heroImage,
      imageAlt: "Generative AI development hero banner",
      ctaText: "Start Your GenAI Project",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "Generative AI",
    title2: "Development Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "We deliver custom generative AI solutions, from strategic consulting and GPT integration to model development, helping organizations innovate faster, automate processes, and enforce security and compliance at each architectural tier.",
    RightDescription2:
      "Startups, SMBs, and established companies rely on us for AI services to build smarter systems and accelerate growth.",
    buttonLabel: "Build Generative AI",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Our Generative AI Development Services and Solutions",
    mainDescription:
      "We deliver custom generative AI solutions, from strategic consulting and GPT integration to model development, helping organizations innovate faster, automate processes, and enforce security and compliance at each architectural tier.",
    cards: [
      {
        id: 1,
        title: "Machine Learning Models",
        description: [
          "We create powerful machine learning models designed around your data and business goals.",
          "Our approach includes feature engineering, training, and scalable deployment with integrated monitoring.",
        ],
        icon: "/icons/data-line.svg",
      },
      {
        id: 2,
        title: "Generative AI Model Development",
        description: [
          "We use GPT, VAE, GAN, and DDPM architectures to enable intelligent workflows, automated code generation, synthetic data, and predictive forecasting.",
          "Each model path includes design, feature engineering, training, and deployment pipelines.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 3,
        title: "LLM Development and Fine-Tuning",
        description: [
          "We refine specialized LLMs for enterprise knowledge tasks with a focus on unbiased outputs, token efficiency, and compliance.",
          "Optimization and validation deliver accurate predictions and adaptable runtime behavior.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Generative AI Model Replication",
        description: [
          "We replicate and scale generative models such as GPT, transformers, and GANs to support enterprise workflows.",
          "Our versioned deployment process keeps outputs consistent, reproducible, and bias-aware across environments.",
        ],
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 5,
        title: "Generative AI Product Development",
        description: [
          "We integrate LLMs into adaptable platforms using prompt engineering, fine-tuning, output validation, and HITL workflows.",
          "The result is a reliable AI product aligned with your brand and regulatory requirements.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 6,
        title: "Gen AI Application Development",
        description: [
          "We integrate LLM intelligence into web and mobile platforms to create personalized and automated user experiences.",
          "Techniques such as fine-tuning, NLP, and behavioral analytics keep the product useful and aligned with business goals.",
        ],
        icon: "/icons/browser.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Us as the",
    spanTitle: "Best Generative AI Company",
    description:
      "TECHIONIK uses AI in software development, top 3% talent, and cutting-edge technology to deliver bespoke generative AI solutions that meet client goals and support long-term business growth.",
    cards: [
      {
        id: 1,
        title: "Deep AI Expertise",
        description:
          "Our AI engineers bring 7+ years of experience in LLMs, neural networks, and NLP and have delivered more than 50 production-ready generative AI solutions.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "Custom Industry Solutions",
        description:
          "We build customized AI applications for text, image, and multimodal workflows across healthcare, finance, automotive, real estate, and retail.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "Enterprise Integration",
        description:
          "Our AI platforms integrate with enterprise systems, cloud platforms, and APIs to support continuous deployment and high availability.",
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Security and Compliance",
        description:
          "We apply HIPAA, SOC 2, ISO 27001, GDPR, and CCPA controls throughout the lifecycle of gen AI applications and enterprise AI platforms.",
        icon: "/icons/check.svg",
      },
      {
        id: 5,
        title: "Efficiency and Cost Optimization",
        description:
          "Generative AI automates workflows, reduces human errors, and can deliver faster execution while lowering large-scale implementation costs.",
        icon: "/icons/values.svg",
      },
      {
        id: 6,
        title: "Global Reach and Expert Support",
        description:
          "With 30+ certified AI experts globally, we provide full-cycle AI services with continuous monitoring, support, and domain expertise.",
        icon: "/icons/people-team.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible Generative AI Development",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Our AI development teams offer flexible engagement options to help startups, SMBs, and enterprises build generative AI products with confidence.",
    items: [
      {
        title: "AI Development Outsourcing",
        description:
          "<ul><li>Access experienced AI engineers for LLMs, RAG, and generative AI projects</li><li>Reduce development costs and avoid delays caused by hiring limitations</li><li>Deliver enterprise-grade AI solutions faster without compromising quality or compliance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Integrate AI specialists quickly to fill expertise gaps and meet project deadlines</li><li>Retain full control over models, workflows, and strategic decisions</li><li>Ensure consistent, high-quality output aligned with your goals</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated AI Development Team",
        description:
          "<ul><li>Full-time AI engineers focused solely on your project objectives</li><li>Seamless alignment with internal processes and infrastructure</li><li>Reliable delivery that enhances efficiency and supports growth</li></ul>",
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
    mainTitle: "Generative AI Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What makes your AI development services ideal for enterprise applications?",
        answer:
          "Our services are tailored for enterprises seeking scalable, secure, and business-aligned AI solutions that integrate seamlessly with existing platforms and improve decision-making.",
      },
      {
        id: 2,
        question: "Will we work with experienced AI specialists?",
        answer:
          "Yes. You will work with senior AI engineers and data scientists with deep experience in machine learning, LLM fine-tuning, GANs, diffusion models, and deployment.",
      },
      {
        id: 3,
        question: "How do your AI engineers integrate with our teams?",
        answer:
          "We align with your project management tools, agile processes, and enterprise workflows through collaborative planning, HITL mechanisms, and regular sprint reviews.",
      },
      {
        id: 4,
        question: "Can your AI solutions be incorporated into our current systems?",
        answer:
          "Yes. We specialize in enterprise-grade integration with cloud platforms, APIs, CRMs, ERPs, and existing databases using secure microservices and containerized deployments.",
      },
      {
        id: 5,
        question: "How do you safeguard data privacy and compliance?",
        answer:
          "We implement enterprise security and compliance standards including GDPR, CCPA, HIPAA, SOC 2, ISO 27001, and PCI DSS with encrypted storage, access controls, and audit-ready governance.",
      },
      {
        id: 6,
        question: "How are your AI solutions customized to our objectives?",
        answer:
          "We start with stakeholder workshops, then select and fine-tune the right models for your workflows so the solution matches your business goals and operational context.",
      },
      {
        id: 7,
        question: "What steps do you follow to deploy AI models into production?",
        answer:
          "We validate outputs, deploy securely in containers, use CI/CD pipelines, add observability, and continue fine-tuning after launch to keep performance stable.",
      },
      {
        id: 8,
        question: "Can generative AI features be added to customer-facing platforms?",
        answer:
          "Absolutely. We integrate LLM-powered chatbots, content generators, recommendation engines, and multimodal AI features into web and mobile platforms.",
      },
      {
        id: 9,
        question: "Do your AI services support mobile applications?",
        answer:
          "Yes. We build AI-enabled mobile apps with smart assistants, predictive analytics, and lightweight model deployment for responsive real-time interactions.",
      },
      {
        id: 10,
        question: "How quickly can your team scale up for a new AI project?",
        answer:
          "We can mobilize AI teams within 48 to 72 hours, depending on the scope, required roles, and deployment urgency.",
      },
      {
        id: 11,
        question: "Why should businesses integrate generative AI into existing workflows?",
        answer:
          "Generative AI automates content creation, improves decision-making, and provides actionable insights that help reduce costs and increase innovation.",
      },
      {
        id: 12,
        question: "Do your AI services cater to startups as well as large enterprises?",
        answer:
          "Yes. We support startups, SMBs, and enterprise organizations with deployment pipelines and solution architecture matched to each business size.",
      },
      {
        id: 13,
        question: "How long does it typically take to build and launch generative AI applications?",
        answer:
          "A typical generative AI MVP can be delivered in 6 to 16 weeks, while enterprise-grade implementations often take 3 to 6 months depending on complexity.",
      },
      {
        id: 14,
        question: "What ongoing support do you provide after deployment?",
        answer:
          "We provide model monitoring, prompt bug fixes, retraining, fine-tuning, and dedicated account management to keep systems aligned with business needs.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Trusted Artificial Intelligence Services for Growing and Enterprise Businesses",
    description:
      "Startups, SMBs, and established companies rely on us for AI services to build smarter systems and accelerate growth.",
    backgroundImage: heroImage,
    imageAlt: "Generative AI CTA",
    buttonText: "Talk to a GenAI Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: generativeAiTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "End-to-End Generative AI Product Development Process",
    descriptiption:
      "Our structured generative AI product development process supports rapid model integration, secure LLM deployment, and precise system alignment from concept to production.",
    mainDescription:
      "We focus on speed, governance, and reliable output so your generative AI journey advances with less risk.",
    card: [
      {
        id: 1,
        title: "Discovery, Strategy, and Feasibility",
        description:
          "<p>We analyze business objectives, identify use cases, and assess feasibility with market analysis and success metrics to create a clear roadmap.</p>",
      },
      {
        id: 2,
        title: "Data Acquisition, Cleaning, and Preparation",
        description:
          "<p>We collect high-quality datasets and preprocess them through deduplication, normalization, and enrichment to improve reliability and reduce bias.</p>",
      },
      {
        id: 3,
        title: "Model Design, Development, and Training",
        description:
          "<p>We create generative AI architectures such as LLMs, GPT, and LLaMA integrations, then fine-tune and test them for context-aware outputs.</p>",
      },
      {
        id: 4,
        title: "Prototyping, PoC, and Rapid Validation",
        description:
          "<p>We validate solutions through prototypes and proofs of concept to reduce risk, surface bottlenecks early, and align the final system with business goals.</p>",
      },
      {
        id: 5,
        title: "Deployment, Integration, and MLOps",
        description:
          "<p>We integrate AI into your infrastructure with secure, scalable, and compliant architectures supported by ongoing MLOps monitoring and optimization.</p>",
      },
      {
        id: 6,
        title: "Continuous Improvement, Support, and Responsible AI",
        description:
          "<p>Post-deployment, we refine models through iterative learning, token optimization, and infrastructure tuning while keeping ethical AI and explainability in view.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industries We Serve with",
    gradientTitle: "Generative AI",
    afterGradientTitle: "Development Services",
    description:
      "Generative AI solutions are implemented across 9+ industries, addressing role-specific use cases and compliance-heavy systems with scalable performance.",
    slides: [
      {
        title: "Retail",
        description:
          "Enhance personalized shopping, demand forecasting, and inventory optimization while handling seasonal traffic spikes and payment integrations.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Power adaptive learning, automated grading, and personalized curricula with secure, scalable digital learning systems.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Automate document processing, citizen support, and policy analysis with compliance-driven public sector AI systems.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Fintech",
        description:
          "Improve fraud detection, credit scoring, and customer support with secure automation across high-volume financial platforms.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Support predictive diagnostics, patient engagement, and clinical decision-making with HIPAA and GDPR-aware systems.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Optimize supply chains, predictive maintenance, and automation with reliable operations and scalable AI deployments.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Speed MVPs, cloud-ready platforms, and integration layers so startups can move faster and scale with confidence.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Power content automation, personalization, and audience engagement across high-traffic media platforms.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Real Estate",
        description:
          "Improve property recommendations, valuations, and client engagement while integrating smoothly with CRM and listing systems.",
        link: "/industries/real-estate",
        bgImage: "/images/industries/Real-Estate.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Generative AI Development Services",
    serviceType: "Generative AI Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Generative AI development services covering LLMs, RAG pipelines, model development, product development, integration, and enterprise deployment.",
  }),
};
