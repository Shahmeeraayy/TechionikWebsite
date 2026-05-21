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

type MachineLearningBlog = {
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
    "We deliver custom ML models, predictive analytics, NLP, and computer vision solutions that help teams automate work and make better decisions.",
  solution: "Machine learning development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: MachineLearningBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const machineLearningTechStackData: TechStackData = {
  headingData: {
    title: "Our Tech Stack for",
    middleTitle: "Machine Learning",
    lastTitle: "Development",
    description:
      "Our stack includes TensorFlow, PyTorch, data science libraries, MLOps tooling, and cloud-native infrastructure to help us deliver reliable, production-ready machine learning systems across enterprise environments.",
  },
  filters: ["AI/ML", "Backend", "Cloud/DevOps", "Database"],
  techIcons: [
    { name: "TensorFlow", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "PyTorch", icon: "/python.svg", category: ["AI/ML", "Backend"] },
    { name: "BERT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "GPT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "LLaMA 2", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "CNNs", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "RNNs", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "LSTMs", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "Pandas", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
    { name: "NumPy", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
    { name: "Matplotlib", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
    { name: "Scikit-Learn", icon: "/icons/coding.svg", category: ["AI/ML", "Backend"] },
    { name: "OpenCV", icon: "/icons/browser.svg", category: ["AI/ML"] },
    { name: "AutoML", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "SHAP", icon: "/icons/values.svg", category: ["AI/ML", "Database"] },
    { name: "LIME", icon: "/icons/values.svg", category: ["AI/ML", "Database"] },
  ],
};

export const machineLearningDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Machine Learning Development Services | Techionik - Custom ML, NLP and Computer Vision",
    description:
      "Techionik is a top machine learning development company delivering custom ML models, predictive analytics, NLP, computer vision, deep learning, and MLOps solutions that automate workflows and drive measurable business outcomes.",
    keywords: [
      "machine learning development services",
      "custom ML model development",
      "computer vision development",
      "NLP services",
      "MLOps",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Machine Learning Development Company",
      subtitle: "",
      description:
        "We are a top machine learning development company that delivers custom ML models, predictive analytics, NLP, and computer vision solutions. Our ML engineers utilize TensorFlow and PyTorch to automate workflows, optimize decisions, and drive measurable business outcomes.",
      image: heroImage,
      imageAlt: "Machine learning development hero banner",
      ctaText: "Talk to an ML Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Full-Cycle",
    spanTitle: "Machine Learning",
    title2: "Development Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "Techionik offers end-to-end machine learning development services to help businesses develop AI-powered software solutions from data preparation to model deployment. Hire ML developers from us to drive innovation, improve operational efficiency, automate processes, and increase customer satisfaction.",
    RightDescription2:
      "Our full-cycle delivery combines research, model engineering, deployment, and ongoing optimization so you can ship high-impact ML solutions with confidence.",
    buttonLabel: "Scale Your Business",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Our full-cycle Machine Learning Development Services",
    mainDescription:
      "We help organizations turn data into production-ready machine learning solutions, from custom model development and computer vision to NLP, deep learning, and MLOps.",
    cards: [
      {
        id: 1,
        title: "Custom ML Model Development",
        description: [
          "We develop domain-specific machine learning solutions using architectures such as BERT, GPT, LLaMA 2, CNNs, and RNNs.",
          "Feature engineering, hyperparameter tuning, and enterprise integration help accelerate deployment and maximize business value.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "Computer Vision Development",
        description: [
          "Our computer vision solutions process images and video to enable object detection, classification, segmentation, OCR, facial recognition, video analytics, and anomaly detection.",
          "We build enterprise-ready visual intelligence systems that improve automation and decision-making.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "Generative AI Development",
        description: [
          "We build generative AI solutions using GANs, VAEs, and transformer architectures to generate text, images, video, and interactive content.",
          "The result is intelligent automation, dynamic content creation, and enterprise-ready AI-driven workflows.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Natural Language Processing Services",
        description: [
          "We develop NLP solutions using BERT, GPT, RAG, RNNs, and transformer-based architectures to process text and speech.",
          "Use cases include sentiment analysis, machine translation, chatbots, semantic search, and predictive language automation.",
        ],
        icon: "/icons/data-line.svg",
      },
      {
        id: 5,
        title: "Deep Learning Development",
        description: [
          "Our deep learning team delivers solutions using CNNs, RNNs, LSTMs, GANs, and attention-based architectures.",
          "These models support vision, language, and structured prediction use cases such as image recognition, object detection, and predictive modeling.",
        ],
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 6,
        title: "MLOps",
        description: [
          "We provide MLOps services featuring automated ML pipelines, CI/CD workflows, version control, monitoring, drift detection, retraining, and auditability.",
          "Our delivery model supports reliable ML operations across cloud and on-premise environments.",
        ],
        icon: "/icons/cloud.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose TECHIONIK",
    spanTitle: "as Your Ideal Machine Learning Development Company",
    description:
      "Global companies trust Techionik to build custom machine learning solutions that combine measurable results, enterprise readiness, security, and scalable delivery across industries.",
    cards: [
      {
        id: 1,
        title: "Proven Track Record with Measurable Results",
        description:
          "With 5+ years of experience, 50+ ML projects delivered, and work across 10+ countries, we focus on outcomes that directly contribute to business growth.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Certifications and Global Recognition",
        description:
          "As an ISO 27001 and Microsoft/AWS-certified partner, we prioritize security and operational excellence while meeting global delivery standards.",
        icon: "/icons/check.svg",
      },
      {
        id: 3,
        title: "Agile Methodology for Seamless Execution",
        description:
          "Our iterative approach enables flexible project scaling, faster time-to-market, lower operational risk, and continuous alignment with changing business needs.",
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Enterprise-Ready ML Solutions with Full Deployment",
        description:
          "From model development to integration, API connectivity, hybrid cloud deployment, and monitoring, we build ML systems for real-world performance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Security-First Approach to Protect Your Data",
        description:
          "We follow current compliance regulations and secure engineering practices to protect confidentiality, integrity, and availability throughout the ML lifecycle.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 6,
        title: "Tailored Solutions for Diverse Industries",
        description:
          "Our team has delivered customized ML solutions for retail, healthcare, finance, and real estate, applying industry-specific best practices to maximize impact.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 7,
        title: "Cost-Efficient, Scalable Machine Learning",
        description:
          "We optimize both cost and performance so your machine learning solutions stay flexible, scalable, and capable of delivering a strong return on investment.",
        icon: "/icons/values.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "ML Development",
    MiddleTitle: "Engagement",
    lastTitle: "Models We Offer",
    description:
      "Our engagement models are designed to align with your technical complexity, delivery timelines, and operational scale while preserving predictability and engineering excellence.",
    items: [
      {
        title: "Staff Augmentation for Machine Learning",
        description:
          "<ul><li>Rapid access to vetted ML engineers</li><li>Seamless integration with in-house teams</li><li>Full control over priorities and execution</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Machine Learning Development Team",
        description:
          "<ul><li>Long-term ML specialists aligned to your roadmap</li><li>Consistent delivery with stable team composition</li><li>Deep domain understanding and ownership</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Project-Based Machine Learning Outsourcing",
        description:
          "<ul><li>Fixed scope, timeline, and deliverables</li><li>End-to-end ML development accountability</li><li>Ideal for PoCs, MVPs, and production builds</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Managed Machine Learning and IT Services",
        description:
          "<ul><li>End-to-end ownership of ML systems in production</li><li>Continuous monitoring, retraining, and optimization</li><li>SLA-driven performance, security, and reliability</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Machine Learning Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What makes your machine learning development process more efficient than others?",
        answer:
          "Our process is built around agility and efficiency, combining rapid prototyping, AutoML, CI/CD pipelines, and cloud-native infrastructure to speed up delivery without sacrificing accuracy.",
      },
      {
        id: 2,
        question: "How does your team integrate machine learning with existing infrastructure and business workflows?",
        answer:
          "We work closely with your IT team to integrate ML models into CRM systems, data warehouses, ERP solutions, and cloud or on-premise environments with minimal disruption.",
      },
      {
        id: 3,
        question: "What industries do you specialize in for machine learning development?",
        answer:
          "We build ML solutions for healthcare, e-commerce, finance, manufacturing, logistics and supply chain, and other data-heavy sectors that need automation and predictive intelligence.",
      },
      {
        id: 4,
        question: "How do you ensure the quality, accuracy, and scalability of ML models in production?",
        answer:
          "We use rigorous testing, continuous monitoring, scalability checks, and hyperparameter tuning so models stay robust, accurate, and ready for growth.",
      },
      {
        id: 5,
        question: "How do you address data privacy and security when handling sensitive data for machine learning?",
        answer:
          "We use encryption, anonymization, access controls, audit trails, and compliance-aligned processes to protect sensitive data throughout the ML lifecycle.",
      },
      {
        id: 6,
        question: "What is your approach to preventing bias in machine learning models and ensuring fairness?",
        answer:
          "We apply bias detection, representative datasets, explainable AI techniques such as SHAP and LIME, and continuous monitoring to keep models fair and transparent.",
      },
      {
        id: 7,
        question: "How do you measure success after deploying machine learning models in real-world applications?",
        answer:
          "We define KPIs with your team and track accuracy, business impact, operational efficiency, customer experience, response time, and throughput after launch.",
      },
      {
        id: 8,
        question: "What makes your machine learning models interpretable and explainable for business leaders?",
        answer:
          "We use SHAP, LIME, and visualization tools to turn model outputs into understandable explanations that help leaders make data-driven decisions with confidence.",
      },
      {
        id: 9,
        question: "What types of machine learning solutions can you create for startups and SMEs with limited resources?",
        answer:
          "We deliver cost-effective, scalable ML solutions using pre-trained models, cloud infrastructure, and MVP-focused delivery so smaller teams can validate ideas quickly.",
      },
      {
        id: 10,
        question: "How long does it typically take to build and deploy a custom ML model in a large-scale enterprise environment?",
        answer:
          "Timelines vary by data complexity and integration needs, but many enterprise ML projects move from preparation to deployment over a few months with agile delivery.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Scale Your Business With Proven",
    middleTitle: "Machine Learning",
    lastTitle: "Solutions",
    description:
      "Partner with top-rated nearshore teams to design, deploy, and scale ML solutions with speed and reliability. Hire certified machine learning experts on-demand to accelerate business growth and drive innovation.",
    backgroundImage: heroImage,
    imageAlt: "Machine learning development CTA",
    buttonText: "Hire ML Experts On-Demand",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: machineLearningTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Machine Learning Development Process",
    descriptiption:
      "We've fine-tuned our ML development process through countless projects, so whether you need full-cycle execution or team support, we can help you move from idea to production smoothly.",
    mainDescription:
      "Our process keeps problem framing, data quality, and model governance aligned so your ML systems can deliver dependable performance at scale.",
    card: [
      {
        id: 1,
        title: "Problem Definition and Business Understanding",
        description:
          "<p>We work closely with stakeholders to define the objective, connect the model to business goals, and establish measurable impact criteria.</p>",
      },
      {
        id: 2,
        title: "Data Collection and Preparation",
        description:
          "<p>We aggregate, clean, normalize, and augment data from multiple sources so the training set is structured, reliable, and useful.</p>",
      },
      {
        id: 3,
        title: "Exploratory Data Analysis (EDA)",
        description:
          "<p>Using tools such as Pandas, NumPy, and Matplotlib, we explore patterns, relationships, and outliers that guide feature engineering and model design.</p>",
      },
      {
        id: 4,
        title: "Feature Engineering",
        description:
          "<p>We transform raw data into meaningful features through scaling, encoding, and new feature creation to improve predictive performance.</p>",
      },
      {
        id: 5,
        title: "Model Selection and Training",
        description:
          "<p>We choose the right algorithm for the problem, then tune and validate it using cross-validation, hyperparameter optimization, and grid search.</p>",
      },
      {
        id: 6,
        title: "Model Evaluation and Deployment",
        description:
          "<p>After evaluating accuracy, precision, recall, and F1 score, we deploy the model into production and integrate it with existing systems.</p>",
      },
      {
        id: 7,
        title: "Model Monitoring and Continuous Improvement",
        description:
          "<p>We monitor for data drift, concept drift, and performance degradation, then retrain models automatically when needed.</p>",
      },
      {
        id: 8,
        title: "Feedback Loops and Reporting",
        description:
          "<p>We create feedback loops and reporting dashboards to track accuracy, response time, throughput, and other KPIs that keep the model on target.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Tailored Machine Learning",
    gradientTitle: "Solutions for",
    afterGradientTitle: "Industry Needs",
    description:
      "We deliver machine learning development solutions across a wide range of industries, transforming data into predictive intelligence, automation, and measurable business impact.",
    slides: [
      {
        title: "Retail",
        description:
          "Improve inventory control, POS performance, and e-commerce platforms with automated forecasting, purchase pattern analysis, and real-time decision support.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create AI-powered learning systems, digital classrooms, and student data platforms that enhance engagement, guide learning paths, and support everyday processes.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop compliant AI systems for workflow automation, service request handling, identity platforms, and modernization of outdated systems across departments.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Offer AI tools for risk scoring, fraud detection, compliance tracking, and automation of core banking or trading tasks with dependable data handling.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Deliver ML software for EHR improvement, telehealth platforms, patient data handling, diagnostic support, and cloud-enabled workflows aligned with healthcare standards.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Create ML systems that automate production tasks, predict equipment issues, track IoT devices, and provide data-focused insights to increase reliability and output.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Offer AI-powered MVPs, cloud-ready platforms, automation tools, and integration layers that help startups launch faster and move toward long-term expansion.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Real Estate",
        description:
          "Enhance property recommendations, valuations, client engagement, CRM workflows, and lead response time with machine learning that scales across modern real estate teams.",
        link: "/industries/real-estate",
        bgImage: "/images/industries/Real-Estate.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Machine Learning Development Services",
    serviceType: "Machine Learning Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Machine learning development services for custom ML models, predictive analytics, NLP, computer vision, deep learning, and MLOps for enterprise transformation.",
  }),
};
