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

type AgenticAIBlog = {
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
    "We build agentic AI systems that automate workflows, improve decision-making, and generate measurable enterprise value.",
  solution: "Agentic AI development",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  category: item.category,
  stats: [],
}));

const blogs: AgenticAIBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const agenticAiTechStackData: TechStackData = {
  headingData: {
    title: "We Integrate AI Technologies That Drive",
    middleTitle: "Intelligent",
    lastTitle: "Innovation",
    description:
      "We integrate advanced AI into enterprise systems, improving workflow efficiency, generating predictive intelligence, and enabling organizations to adapt rapidly to evolving digital and industry demands.",
  },
  filters: ["AI/ML", "Cloud/DevOps", "Backend", "Database"],
  techIcons: [
    { name: "LangChain", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "CrewAI", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "AutoGen", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "OpenAI GPT", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "Amazon Bedrock", icon: "/icons/cloud.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Azure AI", icon: "/icons/cloud.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "RAG", icon: "/icons/data-line.svg", category: ["AI/ML", "Backend"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "APIs", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Knowledge Graphs", icon: "/icons/data-line.svg", category: ["Database", "AI/ML"] },
    { name: "Event-Driven Architecture", icon: "/icons/streamline.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Slack", icon: "/icons/browser.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Salesforce", icon: "/icons/browser.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Trello", icon: "/icons/browser.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
  ],
};

export const agenticAiDevelopmentPageData = {
  templateVariant: "default",
  meta: {
    title: "Agentic AI Development Company | Techionik - Autonomous AI Agents & Automation",
    description:
      "Techionik helps organizations across 12+ industries achieve intelligent process automation through autonomous reasoning, decision-making, secure human-AI collaboration, and measurable ROI with agentic AI solutions.",
    keywords: [
      "agentic AI development",
      "autonomous AI agents",
      "agentic workflow automation",
      "multi-agent systems",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Agentic AI Development Company",
      subtitle: "",
      description:
        "Our Agentic AI development services help organizations across 12+ industries achieve intelligent process automation through autonomous reasoning and decision-making. We specialize in building agentic AI solutions for startups, SMBs, and enterprises. Hire Agentic AI developers to deliver measurable ROI via secure, human-AI collaboration.",
      image: heroImage,
      imageAlt: "Agentic AI development hero banner",
      ctaText: "Talk to an Agentic AI Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "Agentic AI",
    title2: "Development Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "As an AI development company, we build custom agentic AI that thinks, learns, and acts autonomously. Our top agentic AI consultants partner with you from strategy to deployment, offering end-to-end business process automation and reduced development time.",
    RightDescription2:
      "We help teams design secure human-AI collaboration models that improve decision-making, reduce manual effort, and create more resilient operations across complex enterprise workflows.",
    buttonLabel: "Build Agentic AI",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Our Agentic AI Services",
    mainDescription:
      "As an AI development company, we build custom agentic AI that thinks, learns, and acts autonomously, with consulting and development support from strategy through deployment.",
    cards: [
      {
        id: 1,
        title: "Custom AI Agent Development",
        description: [
          "We build intelligent autonomous agents with reinforcement learning, hierarchical and utility-based models, context-aware perception, and natural language interaction.",
          "These systems support seamless task automation, enterprise integration, and human-in-the-loop AI autonomy.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "Autonomous Workflow Automation",
        description: [
          "Agentic AI solutions integrate AI-driven RPA, event-triggered processes, and API or system connectivity.",
          "We reduce manual effort, handle exceptions intelligently, and improve operational efficiency with measurable gains.",
        ],
        icon: "/icons/streamline.svg",
      },
      {
        id: 3,
        title: "Custom Agentic Process Automation",
        description: [
          "Our agentic process automation agents use LLM orchestration to manage approvals, escalations, and exception handling across ERP, CRM, and BPM systems.",
          "The result is adaptive, human-in-the-loop workflows that outperform rigid RPA bots at enterprise scale.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Custom AI Strategy and Consulting",
        description: [
          "We align business KPIs with autonomous agent architectures through workflow analysis, strategy design, integration planning, scalability assessment, and data pipeline strategy.",
          "That process delivers ROI-driven roadmaps, PoCs, and custom AI agents from scratch.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "Agentic AI Integration Services",
        description: [
          "We embed AI agents, generative AI, and LLM-powered solutions into CRMs, ERPs, and cloud platforms.",
          "Our integrations support secure, enterprise-ready multi-agent systems with real-time data synchronization and workflow automation.",
        ],
        icon: "/icons/cloud.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Our",
    spanTitle: "Agentic AI Development Company",
    description:
      "Techionik is a globally trusted agentic AI development company, powered by top 3% AI talent. Our consulting and development teams deliver intelligent AI-powered agentic solutions that support enterprise digital transformation.",
    cards: [
      {
        id: 1,
        title: "Business-First Engineering for Faster, Measurable ROI",
        description:
          "Our business-first engineering approach aligns GenAI and agentic AI development with clear KPIs, driving faster data evaluation, quicker turnaround, less manual work, and better ROI.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 2,
        title: "Advanced Multi-Agent Intelligence Built by In-House Experts",
        description:
          "Our in-house agentic AI engineers specialize in multi-agent intelligence using LangChain, CrewAI, and AutoGen to deliver smarter, scalable, and API-driven architectures.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 3,
        title: "Enterprise-Ready GenAI, RAG, and Tech Stack Integration",
        description:
          "We integrate agentic AI systems with your tech stack using GenAI and RAG to reduce hallucinations and support automated workflows across ERP, CRM, APIs, and cloud platforms.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Architected for Real-World Complexity and Transparency",
        description:
          "Our methodology embeds transparency, human-in-the-loop controls, and continuous auditing into AI architectures so regulated environments stay reliable and explainable.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 5,
        title: "Self-Improving AI with Continuous Optimization",
        description:
          "We build self-improving workflows that learn from outcomes, adapt autonomously, and continuously optimize performance for long-term advantage.",
        icon: "/icons/streamline.svg",
      },
      {
        id: 6,
        title: "Full-Cycle AI Development with Security and Best Practices",
        description:
          "Our full-cycle delivery covers discovery, design, deployment, and evolution with secure coding and enterprise compliance built in.",
        icon: "/icons/values.svg",
      },
      {
        id: 7,
        title: "Security, Compliance, and Responsible AI at the Core",
        description:
          "Every system is engineered with secure coding, continuous auditing, tokenization, and compliance for GDPR, CCPA, PCI DSS, ISO/IEC 27001, and WCAG.",
        icon: "/icons/check.svg",
      },
      {
        id: 8,
        title: "Accelerated Time-to-Value with Proven IP and Experience",
        description:
          "We leverage deep cross-industry experience and proven IP to reduce time-to-value while delivering agentic AI services for startups, SMBs, and enterprises.",
        icon: "/icons/people-team.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Flexible AI Development Outsourcing for",
    MiddleTitle: "Reliable Enterprise",
    lastTitle: "Solutions",
    description:
      "Our AI development outsourcing model addresses talent gaps, reduces operational overhead, and speeds up project delivery while keeping solutions aligned with your business objectives.",
    items: [
      {
        title: "AI Development Outsourcing",
        description:
          "<ul><li>Access experienced AI engineers for machine learning, NLP, computer vision, and agentic AI projects</li><li>Reduce development costs and avoid delays caused by hiring limitations</li><li>Deliver enterprise-grade AI solutions faster without compromising quality or compliance</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Team Augmentation",
        description:
          "<ul><li>Integrate AI specialists quickly to fill expertise gaps and meet deadlines</li><li>Retain full control over code, models, workflows, and strategic AI decisions</li><li>Ensure consistent output aligned with organizational goals</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated AI Development Team",
        description:
          "<ul><li>Full-time AI engineers focused solely on your project objectives</li><li>Seamless alignment with internal processes, tools, and existing infrastructure</li><li>Reliable delivery that enhances efficiency and supports business growth</li></ul>",
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
    mainTitle: "Agentic AI Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What is the critical first step for successful agentic AI?",
        answer:
          "The first step is to redesign the process to be agent-native, using end-to-end value stream mapping so autonomous agents are applied to the right work from the start.",
      },
      {
        id: 2,
        question: "What is the difference between Agentic AI and traditional automation like RPA?",
        answer:
          "RPA follows a script. Agentic AI reasons, plans, and makes context-aware decisions, allowing it to collaborate with other agents and reimagine operations instead of only speeding up old ones.",
      },
      {
        id: 3,
        question: "What is the #1 reason Agentic AI projects fail?",
        answer:
          "They automate the wrong process. Layering intelligent agents onto broken human-centric workflows creates higher cost without meaningful ROI.",
      },
      {
        id: 4,
        question: "How do you measure and guarantee ROI for an Agentic AI project?",
        answer:
          "We tie ROI to business outcomes, use a FinOps-style discipline for token costs, and measure success through operational ROI, cycle-time reduction, and smarter use of human talent.",
      },
      {
        id: 5,
        question: "Will Agentic AI replace our human workforce?",
        answer:
          "No. Our approach builds a hybrid human-agent workforce where agents handle high-volume execution and humans focus on governance, innovation, and exception handling.",
      },
      {
        id: 6,
        question: "Do we need to replace our legacy systems to use Agentic AI?",
        answer:
          "Not necessarily. We can use an integration layer so agents safely interact with and extend the life of legacy systems without a rip-and-replace approach.",
      },
      {
        id: 7,
        question: "What are the biggest risks, and how do you manage governance?",
        answer:
          "The main risks are uncontrolled cost, opaque decisions, and security gaps. We address them with zero-trust architecture, immutable audit logs, and a defined autonomy spectrum.",
      },
      {
        id: 8,
        question: "What does the future of Agentic AI in the enterprise look like?",
        answer:
          "The future is agent-native: organizations will be designed to manage a permanent silicon workforce through continuous learning and autonomous improvement.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Hire Agentic AI developers to deliver measurable ROI via secure, human-AI collaboration.",
    description:
      "Partner with Techionik to build agentic AI systems that automate workflows, improve decision-making, and create secure, high-impact enterprise outcomes.",
    backgroundImage: heroImage,
    imageAlt: "Agentic AI development CTA",
    buttonText: "Talk to an Agentic AI Expert",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: agenticAiTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our End-to-End Agentic AI Development Process",
    descriptiption:
      "Our custom Agentic AI methodology transforms complex operations into intelligent, autonomous workflows using multi-agent systems, transformer-based LLMs, iterative modeling, MLOps pipelines, and agentic AI software.",
    mainDescription:
      "We help deliver enterprise-grade solutions that optimize efficiency, decision-making, real-time analytics, and measurable ROI.",
    card: [
      {
        id: 1,
        title: "Strategic Discovery and High-Impact Prioritization",
        description:
          "<p>We collaborate with leadership to identify low-risk processes where autonomous agents can deliver the maximum ROI and define the KPIs for success.</p>",
      },
      {
        id: 2,
        title: "Advanced Process Mapping and System Architecture",
        description:
          "<p>We create workflow diagrams, system architecture, and data requirements, then define communication protocols, decision trees, and orchestration pipelines.</p>",
      },
      {
        id: 3,
        title: "Custom AI Agent Development with AI Intelligence",
        description:
          "<p>We develop custom AI agents using modern frameworks, with human-in-the-loop validation to ensure safety, quality, and enterprise integration.</p>",
      },
      {
        id: 4,
        title: "Rigorous Testing, Validation, and Compliance",
        description:
          "<p>Agents are tested against KPIs, ethical AI standards, and compliance requirements so secure, reliable performance is proven before release.</p>",
      },
      {
        id: 5,
        title: "Seamless Integration and Enterprise Deployment",
        description:
          "<p>We connect AI agents to CRMs, ERPs, collaboration tools, and cloud platforms, then train teams to operate fully functional workflows with confidence.</p>",
      },
      {
        id: 6,
        title: "Continuous Optimization, Scaling, and Intelligence Evolution",
        description:
          "<p>Ongoing monitoring and iterative updates improve reasoning, reduce errors, and expand capabilities as your business evolves.</p>",
      },
      {
        id: 7,
        title: "Rapid Prototyping and Feedback Loops",
        description:
          "<p>Functional prototypes are deployed with real data, then refined through feedback loops that accelerate adoption and strengthen governance.</p>",
      },
      {
        id: 8,
        title: "End-to-End Governance and Roadmapping",
        description:
          "<p>We establish autonomy governance, decision boundaries, tool-calling pipelines, and knowledge graphs so the system remains ethical, compliant, and scalable.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Transform Your Industry with",
    gradientTitle: "Agentic AI Software",
    afterGradientTitle: "Development",
    description:
      "We deliver agentic AI software development across compliance-heavy, high-scale industries by combining real-world context, autonomous decision-making, and enterprise-grade reliability to automate workflows and drive measurable performance improvements.",
    slides: [
      {
        title: "Retail and E-Commerce",
        description:
          "Autonomously manage pricing, promotions, inventory, and customer engagement to improve conversions and resilience.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Healthcare and Life Sciences",
        description:
          "Automate triage, treatment monitoring, and compliance-aware workflows for secure and personalized care delivery.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance and Banking",
        description:
          "Detect fraud, automate compliance, and optimize credit or portfolio decisions across mission-critical financial systems.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Manufacturing and Logistics",
        description:
          "Optimize schedules, coordinate supply chains, and predict equipment failures with autonomous workflow intelligence.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Education and EdTech",
        description:
          "Personalize learning paths, automate administration, and curate content dynamically for diverse learner profiles.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government and Public Sector",
        description:
          "Automate citizen services, streamline workflows, and support transparent decision-making in governance-heavy environments.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Deploy autonomous workflows, personalize experiences, and adapt quickly to market shifts without sacrificing enterprise readiness.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Agentic AI Development Services",
    serviceType: "Agentic AI Development",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Agentic AI development services for enterprises, covering autonomous agents, workflow automation, human-in-the-loop collaboration, governance, and scalable deployment.",
  }),
};
