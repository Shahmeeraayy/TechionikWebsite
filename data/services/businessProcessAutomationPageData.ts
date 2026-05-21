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

type BpaBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
};

const heroImage = "/banners/smart-automation.webp";

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
    "We automate repetitive workflows to improve accuracy, throughput, and day-to-day operational efficiency.",
  solution: "Business process automation",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: BpaBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const businessProcessAutomationTechStackData: TechStackData = {
  headingData: {
    title: "Business Process Automation",
    middleTitle: "Technologies and Tools",
    description:
      "We combine RPA platforms, AI workflows, OCR, NLP, workflow engines, APIs, cloud services, and governance tooling to automate complex operations safely and at scale.",
  },
  filters: ["Backend", "Cloud/DevOps", "AI/ML"],
  techIcons: [
    { name: "Microsoft Power Automate", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "UiPath", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "Automation Anywhere", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "Blue Prism", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "OCR", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "NLP", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "BPMN", icon: "/icons/values.svg", category: ["Backend"] },
    { name: "RPA", icon: "/icons/arrow-right.svg", category: ["Cloud/DevOps"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "JavaScript", icon: "/icons/java-script.svg", category: ["Backend"] },
    { name: "REST APIs", icon: "/icons/arrow-right.svg", category: ["Backend"] },
    { name: "Webhooks", icon: "/icons/browser.svg", category: ["Backend"] },
    { name: "Microsoft 365", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "SharePoint", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "SQL", icon: "/icons/data-line.svg", category: ["Backend"] },
    { name: "Azure Logic Apps", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Selenium", icon: "/icons/browser.svg", category: ["Cloud/DevOps"] },
    { name: "Power BI", icon: "/icons/data-line.svg", category: ["Backend", "Cloud/DevOps"] },
  ],
};

export const businessProcessAutomationPageData = {
  templateVariant: "default",
  meta: {
    title:
      "Business Process Automation Services | Techionik - RPA, AI Workflows & Power Automate",
    description:
      "Techionik helps SMBs and enterprises automate manual work with RPA, AI-driven workflows, and Microsoft Power Automate to improve efficiency, accuracy, integration, and scalability.",
    keywords: [
      "business process automation services",
      "BPA consulting",
      "RPA services",
      "workflow automation",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Business Process Automation Services",
      subtitle:
        "RPA, AI workflows, and Microsoft Power Automate for modern operations.",
      description:
        "We deliver full-scale business automation services as a leading business process automation company, helping SMBs and enterprises eliminate up to 80% of manual tasks using RPA, AI-driven workflows, and Microsoft Power Automate to improve day-to-day efficiency, accuracy, and legacy integration.",
      image: heroImage,
      imageAlt: "Business process automation hero banner",
      ctaText: "Talk to an Automation Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "Business Process Automation",
    title2: "Services",
    reviews: defaultReviewImages,
    RightDescription1:
      "At Techionik, our Automation Engineers provide end-to-end process automation solutions using RPA, AI, custom software, and low-code/no-code platforms to simplify workflows, handle repetitive tasks, optimize resources, cut costs, and improve enterprise agility, productivity, and profitability.",
    RightDescription2:
      "We design practical BPA programs that reduce errors, accelerate operations, and connect across legacy systems so your teams can focus on strategic, high-value priorities instead of repetitive manual work.",
    buttonLabel: "Talk to an Automation Expert",
    buttonLink: "/contact-us",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "Business Process Automation Services We Offer",
    mainDescription:
      "We build practical automation programs across workflow orchestration, document processing, RPA, HR automation, CRM and ERP automation, and AI-assisted operations.",
    cards: [
      {
        id: 1,
        title: "Custom Workflow Automation",
        description: [
          "We build intelligent workflow automation that eliminates manual tasks and repetitive processes.",
          "AI-driven insights help teams move faster while reducing errors and operational friction.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "Document Management Automation",
        description: [
          "OCR, NLP, and intelligent document AI automate extraction, classification, and workflow routing across systems.",
          "This keeps paper-heavy workflows organized, searchable, and easier to access.",
        ],
        icon: "/icons/browser.svg",
      },
      {
        id: 3,
        title: "Robotic Process Automation (RPA)",
        description: [
          "We deploy AI-powered software robots to automate high-volume, rule-based back-office tasks.",
          "RPA lowers labor costs, reduces errors, and shifts teams to exception management.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 4,
        title: "HR Workflow Automation",
        description: [
          "We automate payroll, benefits, onboarding, offboarding, reviews, and employee surveys.",
          "Secure data handling keeps HR operations efficient and compliant.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 5,
        title: "Supply Chain Automation",
        description: [
          "We automate forecasting, stock optimization, real-time tracking, and vendor collaboration.",
          "The outcome is fewer stockouts, better visibility, and stronger fulfillment performance.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "CRM & ERP Automation",
        description: [
          "We modernize CRM and ERP workflows by automating customer data management, lead tracking, and inventory control.",
          "The system supports more accurate data and better decision-making for leaders.",
        ],
        icon: "/icons/data-line.svg",
      },
      {
        id: 7,
        title: "Business Process Automation Software",
        description: [
          "We deliver cloud-native, integration-ready automation solutions for healthcare, manufacturing, and finance teams.",
          "These systems improve productivity and transform operations end to end.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 8,
        title: "Business Process Automation Consulting",
        description: [
          "Our BPA consulting helps define strategy, technology selection, system integrations, and rollout planning.",
          "You get end-to-end expertise for operational innovation and change management.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 9,
        title: "Sales Process Automation",
        description: [
          "We automate lead management, follow-ups, CRM integration, partner workflows, and sales operations.",
          "The result is less admin work and stronger B2B and B2C sales productivity.",
        ],
        icon: "/icons/arrow-right.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Techionik",
    spanTitle: "for Business Process Automation Company",
    description:
      "Trusted by startups, SMBs, and enterprises, our Business Process Automation consulting transforms workflows, automates key processes, and integrates solutions with a focus on strategy, technology, governance, and measurable outcomes.",
    cards: [
      {
        id: 1,
        title: "Enterprise-Grade Workflow Automation Solutions",
        description:
          "We deliver automation across ERP, CRM, and HRIS systems while keeping transparency, agility, and secure execution in place.",
        icon: "/icons/coding.svg",
      },
      {
        id: 2,
        title: "AI-Powered, Data-Driven Automation Strategy",
        description:
          "We integrate self-service analytics, AI-powered operations, automated reports, and real-time pipelines for fact-based decisions.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 3,
        title: "Customer Experience-Centric Automation Excellence",
        description:
          "Order management, customer service, and feedback processing become faster and more consistent with automation.",
        icon: "/icons/browser.svg",
      },
      {
        id: 4,
        title: "Security, Compliance, and Governance-Ready Architecture",
        description:
          "Access controls, governed data flows, and automated auditing keep BPA programs secure and transparent.",
        icon: "/icons/check.svg",
      },
      {
        id: 5,
        title: "Scalable BPA Frameworks for Business Growth",
        description:
          "We automate high-volume transactional workflows with precise, error-free operations across ERP, CRM, HRIS, and business platforms.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 6,
        title: "Proven Business Process Realignment Experience",
        description:
          "Since 2020, we have delivered 85+ process enhancements with a strong repeat-collaboration track record.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 7,
        title: "Top IT Talent and Dedicated BPA Team",
        description:
          "Our BPA team combines business process automation engineers, analysts, and implementation specialists for high-impact delivery.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 8,
        title: "Structured, Risk-Free Automation Implementation",
        description:
          "We validate integrations, audit access patterns, verify process events, and execute controlled rollouts for reliable delivery.",
        icon: "/icons/values.svg",
      },
      {
        id: 9,
        title: "Client-First, End-to-End Automation Partnership",
        description:
          "We keep transparency, dedicated expertise, and long-term partnership at the center of each automation engagement.",
        icon: "/icons/streamline.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our Business Process Automation",
    MiddleTitle: "Outsourcing",
    lastTitle: "Models",
    description:
      "Choose the collaboration model that best fits your automation roadmap, internal capacity, and governance needs.",
    items: [
      {
        title: "BPA Project Outsourcing",
        description:
          "<ul><li>Deliver defined automation scopes with expert ownership</li><li>Reduce release delays and internal hiring overhead</li><li>Use secure, scalable automation architectures and frameworks</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "BPA Team Augmentation",
        description:
          "<ul><li>Maintain control over workflows and pipelines</li><li>Ensure adherence to BPA standards and measurable metrics</li><li>Scale faster with specialist support</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated BPA Team",
        description:
          "<ul><li>Seamlessly integrate with internal teams and systems</li><li>Optimize execution, defect management, and reporting</li><li>Scale automation across web, mobile, and cloud environments</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Full BPA Outsourcing",
        description:
          "<ul><li>Reduce operational complexity with end-to-end BPA management</li><li>Keep compliance, security, and reliability in scope</li><li>Deliver predictable, high-performance automation outcomes</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Business Process Automation",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What is Business Process Automation (BPA)?",
        answer:
          "BPA uses RPA, AI workflows, and software platforms to automate repetitive tasks, optimize enterprise processes, and integrate legacy systems.",
      },
      {
        id: 2,
        question: "How does BPA improve efficiency in enterprises?",
        answer:
          "BPA reduces manual work across back-office tasks, document management, approvals, and reporting while increasing speed and accuracy.",
      },
      {
        id: 3,
        question: "How does Robotic Process Automation (RPA) work?",
        answer:
          "RPA uses software robots to automate repetitive tasks such as invoice processing, payroll, claims handling, and account verification.",
      },
      {
        id: 4,
        question: "What is the role of AI in BPA?",
        answer:
          "AI adds intelligent document processing, predictive analytics, workflow optimization, and anomaly detection to automation programs.",
      },
      {
        id: 5,
        question: "How does BPA improve retail and e-commerce operations?",
        answer:
          "It automates catalog management, inventory tracking, returns, self-service, and sales reporting while improving accuracy and responsiveness.",
      },
      {
        id: 6,
        question: "What is the ROI of implementing BPA?",
        answer:
          "Organizations can reduce manual work, improve speed and accuracy, lower costs, and achieve measurable ROI within months.",
      },
      {
        id: 7,
        question: "How do I choose the right BPA software or vendor?",
        answer:
          "Choose a vendor that integrates with ERP, CRM, HRIS, and supply chain systems and provides consulting, testing, deployment, and monitoring support.",
      },
      {
        id: 8,
        question: "How can BPA eliminate reconciliation errors in banking and finance?",
        answer:
          "BPA automates multi-system checks, validates transactions, handles exceptions, and applies AI anomaly detection to reduce reconciliation errors.",
      },
      {
        id: 9,
        question: "How does BPA prevent production downtime in manufacturing?",
        answer:
          "It integrates MES, ERP, IoT sensors, and predictive maintenance analytics to automate inspection alerts and reduce downtime.",
      },
      {
        id: 10,
        question: "How can BPA optimize patient data workflows in healthcare?",
        answer:
          "OCR, NLP, and AI-based routing automate EHR updates, admissions, and claims while improving compliance and throughput.",
      },
      {
        id: 11,
        question: "How does BPA mitigate global supply chain disruptions?",
        answer:
          "It orchestrates ERP, WMS, and supplier portals to automate inventory alerts, routing, and fulfillment priorities.",
      },
      {
        id: 12,
        question: "How can BPA enhance enterprise-scale document processing?",
        answer:
          "OCR, NLP, decision tables, and API integrations automate document ingestion, classification, routing, and exception management.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Ready to streamline",
    middleTitle: "your business processes?",
    description:
      "Tell us which manual tasks, approvals, and legacy workflows are slowing your team down, and we will map the right automation approach.",
    backgroundImage: "/banners/buissness-banner.webp",
    imageAlt: "Business process automation contact banner",
    buttonText: "Let's Talk",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: businessProcessAutomationTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our Process Automation Consulting Approach",
    descriptiption:
      "We guide you from initial analysis to implementation and ongoing support, ensuring your automation delivers efficiency, clarity, and measurable results.",
    mainDescription:
      "Each phase is built to improve feasibility, ROI, compliance, adoption, and long-term value while reducing disruption.",
    card: [
      {
        id: 1,
        title: "Process Discovery & Automation Readiness",
        description:
          "<p>We assess workflows, infrastructure, and automation maturity to identify the highest-impact opportunities and confirm feasibility.</p>",
      },
      {
        id: 2,
        title: "Workflow Analysis & BPMN Modeling",
        description:
          "<p>We map approvals, exceptions, and dependencies using BPMN standards to create an automation-ready process blueprint.</p>",
      },
      {
        id: 3,
        title: "Automation Strategy & Intelligent Design",
        description:
          "<p>We define goals, KPIs, and governance and select the best architecture using Generative AI, rules engines, and data orchestration.</p>",
      },
      {
        id: 4,
        title: "Automation Development & API Integration",
        description:
          "<p>We build secure automation and connect enterprise systems through APIs for reliable data exchange and consistency.</p>",
      },
      {
        id: 5,
        title: "Testing, Quality Assurance & Optimization",
        description:
          "<p>Functional, security, and exception testing ensure automation is resilient and stable across high-volume processes.</p>",
      },
      {
        id: 6,
        title: "Deployment, Enablement & Change Management",
        description:
          "<p>We deploy with minimal disruption and support adoption through documentation and workforce training.</p>",
      },
      {
        id: 7,
        title: "Continuous Monitoring, Support & AI Enhancement",
        description:
          "<p>Post-launch monitoring, performance tuning, and integrations keep automation future-ready and scalable.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Business Process Automation",
    gradientTitle: "Solutions",
    afterGradientTitle: "Across All Industries",
    description:
      "Business process automation accelerates operations across sectors by automating repetitive workflows, tracking performance metrics, optimizing resource management, and executing industry-specific processes.",
    slides: [
      {
        title: "Banking, Financial Services, and Insurance",
        description:
          "Automate bank account opening, credit approval, KYC/AML verification, customer background checks, premium calculation, and insurance claims processing.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Fintech",
        description:
          "Automate loan approvals, account management, transaction monitoring, risk assessment, fraud detection, and real-time analytics for faster financial operations.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Automated product tracking, inventory management, inspections, work orders, quality control, and equipment monitoring.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Automate scheduling, admissions, EMRs, remote monitoring, billing, claims, and audits while improving accuracy.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Retail",
        description:
          "Automate catalogs, inventory, returns, customer self-service, and store reporting to improve sales operations.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Supply Chain Management",
        description:
          "Automate inventory level monitoring, low-stock alerts, order fulfillment tracking, and supplier portal management.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "BPA supports admissions, enrollment, timetabling, and student record workflows to reduce administrative overhead.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Automate citizen service processing, document verification, case tracking, and regulatory compliance workflows for more transparent operations.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Entertainment & Media",
        description:
          "Automate content scheduling, audience analytics, licensing workflows, production pipelines, and digital asset management for smoother delivery.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Startups & Emerging Businesses",
        description:
          "Automate routine admin, reporting, and customer onboarding so startups can focus on innovation and market expansion.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Process Automation Services",
    serviceType: "Business Process Automation",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Business process automation services using RPA, AI workflows, Power Automate, OCR, and workflow integration to reduce manual tasks and improve enterprise efficiency.",
  }),
};
