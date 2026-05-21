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

type DevOpsBlog = {
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
    "We help teams automate delivery, improve reliability, and strengthen cloud operations across critical environments.",
  solution: "DevOps and infrastructure automation",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: DevOpsBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const devopsServicesTechStackData: TechStackData = {
  headingData: {
    title: "Advanced DevOps Stack",
    middleTitle: "and Tools We Use",
    description:
      "Our DevOps teams work with cloud platforms, container orchestration, infrastructure as code, CI/CD automation, observability, and security tooling to build reliable delivery systems for modern product teams.",
  },
  filters: ["Cloud/DevOps", "Backend", "Database"],
  techIcons: [
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/streamline.svg", category: ["Cloud/DevOps"] },
    { name: "Terraform", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "Ansible", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "CloudFormation", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Jenkins", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "GitHub Actions", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "GitLab CI/CD", icon: "/icons/coding.svg", category: ["Cloud/DevOps"] },
    { name: "Argo CD", icon: "/icons/arrow-right.svg", category: ["Cloud/DevOps"] },
    { name: "Helm", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Prometheus", icon: "/icons/data-line.svg", category: ["Cloud/DevOps"] },
    { name: "Grafana", icon: "/icons/browser.svg", category: ["Cloud/DevOps"] },
    { name: "Datadog", icon: "/icons/values.svg", category: ["Cloud/DevOps"] },
    { name: "New Relic", icon: "/icons/ai-brain.svg", category: ["Cloud/DevOps"] },
    { name: "OpenTelemetry", icon: "/icons/arrow-diagonal.svg", category: ["Cloud/DevOps"] },
    { name: "Snyk", icon: "/icons/check-gradener.svg", category: ["Cloud/DevOps"] },
    { name: "Trivy", icon: "/icons/check.svg", category: ["Cloud/DevOps"] },
    { name: "Git", icon: "/icons/coding.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Bash", icon: "/icons/values.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Python", icon: "/python.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Go", icon: "/icons/go.svg", category: ["Backend", "Cloud/DevOps"] },
  ],
};

export const devopsServicesPageData = {
  templateVariant: "default",
  meta: {
    title:
      "DevOps Services and Solutions | Techionik - CI/CD, IaC, DevSecOps, and Cloud Automation",
    description:
      "Techionik delivers DevOps services and solutions for IT infrastructure management, automating operations, CI/CD, Kubernetes, IaC, GitOps, observability, and secure software delivery for startups, SMBs, and enterprises.",
    keywords: [
      "DevOps services and solutions",
      "DevOps implementation services",
      "CI/CD pipeline services",
      "Infrastructure as Code",
      "DevSecOps",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "DevOps Services and Solutions",
      subtitle: "Automate delivery, improve reliability, and scale with confidence.",
      description:
        "Techionik is a top-notch DevOps solutions company delivering expert DevOps services and solutions for IT infrastructure management. We help automate IT operations, IT processes, and the software development lifecycle while implementing CI/CD, Kubernetes, IaC, GitOps, observability, and architecture improvements that strengthen release quality.",
      image: heroImage,
      imageAlt: "DevOps services and solutions hero banner",
      ctaText: "Talk to a DevOps Expert",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "What you get with TECHIONIK",
    spanTitle: "DevOps",
    title2: "Services and Solutions",
    reviews: defaultReviewImages,
    RightDescription1:
      "We deliver end-to-end DevOps services and solutions that empower startups, SMBs, and enterprises to strengthen their brand while enabling CI/CD, infrastructure automation, containerized workloads, and multi-region deployments, ensuring consistent, adaptable, and high-quality releases globally.",
    RightDescription2:
      "Our DevOps experts design flexible, cloud-native architectures with Kubernetes, Docker, and Ansible, crafted to fit business needs while improving speed, stability, and operational visibility.",
    buttonLabel: "Request a DevOps Audit",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "DevOps Services We Offer",
    mainDescription:
      "End-to-end DevOps implementation services accelerate software delivery through workflow automation, CI/CD pipelines, infrastructure management, containerization, and orchestration.",
    cards: [
      {
        id: 1,
        title: "DevOps Implementation Services",
        description: [
          "We design flexible, cloud-native DevOps architectures with Kubernetes, Docker, and Ansible that fit business needs.",
          "The result is faster software delivery through workflow automation, infrastructure management, and reliable orchestration.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "DevOps Automation Services",
        description: [
          "We automate strategy, tool selection, workflow execution, testing, monitoring, and maintenance to reduce manual effort.",
          "Automation creates safer, more flexible development operations while improving efficiency across the delivery pipeline.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 3,
        title: "CI/CD Pipeline Services",
        description: [
          "We implement, audit, and optimize CI/CD services with AI-driven automation for integration, testing, and deployment.",
          "The pipelines accelerate fail-safe releases, minimize errors, and keep the full delivery chain transparent.",
        ],
        icon: "/icons/coding.svg",
      },
      {
        id: 4,
        title: "Infrastructure as Code (IaC)",
        description: [
          "We build Infrastructure as Code frameworks with Terraform, Ansible, and CloudFormation to automate repeatable deployments.",
          "Version-controlled infrastructure reduces human error and keeps cloud environments reliable and consistent.",
        ],
        icon: "/icons/values.svg",
      },
      {
        id: 5,
        title: "DevSecOps as a Service",
        description: [
          "We integrate automated security, continuous monitoring, and remediation across the SDLC using SAST, DAST, IaC audits, and CI/CD controls.",
          "This keeps delivery fast while strengthening compliance, resilience, and release confidence.",
        ],
        icon: "/icons/check.svg",
      },
      {
        id: 6,
        title: "DevOps Consulting Services",
        description: [
          "Our consultants help you build a DevOps culture, define cloud strategy, run audits, and modernize delivery workflows.",
          "We also support proof-of-concepts, pipeline strategy, process optimization, and secure architecture planning.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 7,
        title: "DevOps Outsourcing",
        description: [
          "We provide remote DevOps teams that can take full ownership of cloud infrastructure, CI/CD automation, and DevSecOps pipelines.",
          "The service includes 24/7 monitoring, cost control, security, and compliance support so teams can move faster with confidence.",
        ],
        icon: "/icons/browser.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Why Choose Techionik",
    spanTitle: "As a Leading DevOps Company",
    description:
      "Techionik delivers end-to-end DevOps services with top 3% engineers, accelerating software delivery through automated CI/CD pipelines, cloud-native infrastructure, and DevSecOps practices. Our scalable, agile-backed solutions ensure 99.9% uptime, cost optimization, faster time-to-market, and transparent, outcome-focused delivery.",
    cards: [
      {
        id: 1,
        title: "Experienced Industry-Specific DevOps Experts",
        description:
          "With 25+ industry-specific experts, 10+ DevOps engineers, 15+ certified cloud specialists, and 110+ tech professionals, we deliver solutions across 14+ industries.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "Comprehensive DevOps Services and Solutions",
        description:
          "We offer full-cycle consulting, infrastructure management, and infrastructure as code to reduce cost, streamline maintenance, and lower operational risk.",
        icon: "/icons/coding.svg",
      },
      {
        id: 3,
        title: "Agile DevOps Approach and Cross-Functional Teams",
        description:
          "Our cross-functional agile teams standardize delivery, define roles, embed feedback loops, and use proven methods that improve release quality.",
        icon: "/icons/values.svg",
      },
      {
        id: 4,
        title: "Cloud Infrastructure and Automation Expertise",
        description:
          "We design and manage cloud deployments on AWS and Azure while using CI/CD, DevSecOps, and automation to improve scalability and performance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 5,
        title: "Proven Track Record and Recognized Authority",
        description:
          "With 30+ cloud and DevOps projects completed in the past five years, plus recognition from ISG and Clutch, we bring dependable delivery experience.",
        icon: "/icons/check-gradener.svg",
      },
      {
        id: 6,
        title: "Security, Quality Assurance and DevSecOps",
        description:
          "We combine QA, secure pipelines, vulnerability management, and compliance controls so solutions meet strict security and reliability requirements.",
        icon: "/icons/check.svg",
      },
      {
        id: 7,
        title: "Outcome-Focused DevOps Transformation and Scalability",
        description:
          "We transform web and mobile delivery environments into scalable, high-performing products that support growth, reliability, and faster releases.",
        icon: "/icons/streamline.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Our DevOps Outsourcing",
    MiddleTitle: "Models",
    lastTitle: "",
    description:
      "Our DevOps outsourcing model addresses talent gaps, reduces operational overhead, and accelerates delivery while keeping cloud infrastructure, CI/CD automation, and security aligned with your goals.",
    items: [
      {
        title: "Staff Augmentation",
        description:
          "<ul><li>Scale your DevOps team instantly with skilled experts</li><li>Gain flexible hiring and cost-efficient resource allocation</li><li>Extend your internal capacity without slowing delivery</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated Team",
        description:
          "<ul><li>Get a full-time, focused DevOps team for long-term projects</li><li>Ensure continuity, accountability, and consistent delivery</li><li>Keep ownership aligned with your product roadmap</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Project-Based Outsourcing",
        description:
          "<ul><li>Delegate end-to-end DevOps projects to an experienced team</li><li>Accelerate delivery and optimize pipelines faster</li><li>Reduce operational overhead while keeping scope clear</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Managed IT Services",
        description:
          "<ul><li>Use fully managed DevOps services for monitoring and automation</li><li>Benefit from security, compliance, and continuous optimization</li><li>Keep systems healthy with 24/7 operational support</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "DevOps Services and Solutions",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "Why are DevOps services important for enterprises?",
        answer:
          "DevOps helps enterprises release faster, reduce downtime, and improve reliability by combining automation, CI/CD, and infrastructure as code.",
      },
      {
        id: 2,
        question: "How do DevOps solutions improve software deployment?",
        answer:
          "They automate build, test, and deployment steps so releases become faster, more predictable, and less prone to manual error.",
      },
      {
        id: 3,
        question: "What industries benefit most from DevOps services?",
        answer:
          "Healthcare, fintech, eCommerce, logistics, government, entertainment, education, and startups all benefit from better speed, security, and scale.",
      },
      {
        id: 4,
        question: "How does DevOps ensure application security and compliance?",
        answer:
          "We build security checks, vulnerability scanning, and compliance verification into the delivery pipeline so protection is continuous, not delayed.",
      },
      {
        id: 5,
        question: "What DevOps tools are commonly used?",
        answer:
          "Common tools include Jenkins, GitLab CI/CD, Docker, Kubernetes, Ansible, Terraform, Prometheus, Grafana, and cloud-native security tools.",
      },
      {
        id: 6,
        question: "How do DevOps services support cloud migration?",
        answer:
          "DevOps automates provisioning, deployment, and monitoring so cloud migration is smoother, safer, and easier to scale.",
      },
      {
        id: 7,
        question: "What is the role of automation in DevOps solutions?",
        answer:
          "Automation reduces repetitive manual work, improves repeatability, and lets teams focus on higher-value engineering and operations tasks.",
      },
      {
        id: 8,
        question: "Can DevOps solutions scale for enterprise workloads?",
        answer:
          "Yes. We design for microservices, containerization, and cloud-native scale so systems stay reliable under peak load.",
      },
      {
        id: 9,
        question: "How does DevOps improve collaboration between teams?",
        answer:
          "It creates shared ownership, clearer feedback loops, and more transparency between development, operations, and QA teams.",
      },
      {
        id: 10,
        question: "What is the difference between DevOps services and traditional IT support?",
        answer:
          "Traditional IT support is reactive, while DevOps is proactive, automated, and focused on continuous delivery and performance improvement.",
      },
      {
        id: 11,
        question: "How do managed DevOps services benefit businesses?",
        answer:
          "Managed DevOps gives businesses monitoring, security, pipeline management, and optimization without needing a large in-house DevOps team.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title:
      "Partner with a trusted DevOps solutions provider to accelerate releases and strengthen infrastructure.",
    description:
      "Our DevOps experts automate IT operations, optimize delivery pipelines, and secure software products with CI/CD, Kubernetes, IaC, GitOps, and observability.",
    backgroundImage: heroImage,
    imageAlt: "DevOps services CTA",
    buttonText: "Talk to a DevOps Consultant",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: devopsServicesTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "Our End-to-End DevOps Development Process",
    descriptiption:
      "Our DevOps process helps you automate and optimize IT operations. We specialize in engineering custom software that is stable and secure, guiding you through the AWS DevOps adoption journey as a trusted DevOps company with proven expertise.",
    mainDescription:
      "From discovery through optimization, we keep infrastructure, automation, and security aligned with the needs of the product and team.",
    card: [
      {
        id: 1,
        title: "End-to-End Analysis and Discovery",
        description:
          "<p>We analyze your software infrastructure and application landscape to align delivery strategy with business goals, budget, and the right engagement model.</p><p><strong>Tools/Practices:</strong> discovery workshops, infrastructure review, budget mapping, engagement modeling.</p>",
      },
      {
        id: 2,
        title: "Solution Design, Architecture and Planning",
        description:
          "<p>We define the DevOps solution, estimate team size and timeline, and shape the architecture so the project starts with a clear plan.</p><p><strong>Tools/Practices:</strong> architecture planning, delivery roadmap, environment design, cloud strategy.</p>",
      },
      {
        id: 3,
        title: "DevOps Culture, KPIs and Implementation Strategy",
        description:
          "<p>We standardize the development process, define KPIs, assign roles, and embed feedback loops so delivery stays transparent and measurable.</p><p><strong>Tools/Practices:</strong> KPI mapping, agile rituals, feedback loops, operating model definition.</p>",
      },
      {
        id: 4,
        title: "Build, Version Control and Continuous Integration",
        description:
          "<p>We manage code changes in a centralized repository and automate build validation through CI pipelines to keep quality and stability high.</p><p><strong>Tools/Practices:</strong> Git, GitHub, GitLab, CI pipelines, automated testing.</p>",
      },
      {
        id: 5,
        title: "Release, Deployment and Infrastructure Automation",
        description:
          "<p>We manage release orchestration and use Infrastructure as Code to keep environments consistent, predictable, and ready for controlled deployments.</p><p><strong>Tools/Practices:</strong> Terraform, Ansible, CloudFormation, Docker, Kubernetes.</p>",
      },
      {
        id: 6,
        title: "Operate, Monitor and Security Management",
        description:
          "<p>We oversee production operations with observability, incident response, and security monitoring so systems stay resilient after launch.</p><p><strong>Tools/Practices:</strong> observability dashboards, incident response, AWS security monitoring, alerting.</p>",
      },
      {
        id: 7,
        title: "Feedback, Optimization and Continuous Improvement",
        description:
          "<p>We collect user feedback, analyze KPIs, and refine the solution to improve performance, cost, and delivery speed over time.</p><p><strong>Tools/Practices:</strong> KPI review, optimization backlog, release retrospectives, continuous improvement.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Industries We Serve",
    gradientTitle: "DevOps",
    afterGradientTitle: "Solutions",
    description:
      "Our DevOps services accelerate software delivery, ensure security, compliance, and scalability across healthcare, fintech, eCommerce, logistics, government, and enterprise-critical applications.",
    slides: [
      {
        title: "Healthcare",
        description:
          "We implement DevOps for healthcare systems, securing EHRs, telemedicine apps, and clinical software while supporting HIPAA compliance and high availability.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "FinTech",
        description:
          "Our DevOps approach strengthens digital banking, mobile payments, and wealth platforms with security, compliance, and high-throughput delivery.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "eCommerce",
        description:
          "We help commerce teams scale platforms, marketplaces, and retail apps with CI/CD, fast releases, and resilient infrastructure.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "DevOps practices streamline LMS, virtual classrooms, and online exam systems with uptime, automation, and reliable performance monitoring.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Logistics",
        description:
          "We optimize fleet management, delivery tracking, and inventory systems with cloud-native reliability and real-time visibility.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "We modernize government IT systems with secure cloud integration, regulatory compliance, and improved service delivery.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "We support video streaming, live events, and VFX solutions with high availability, automated pipelines, and scalable infrastructure.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Startups benefit from rapid DevOps deployment, cloud-native infrastructure, and scalable architectures that accelerate product launches.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DevOps Services and Solutions",
    serviceType: "DevOps Services and Solutions",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "DevOps services and solutions for IT infrastructure management, including CI/CD, Kubernetes, IaC, GitOps, observability, DevSecOps, and cloud automation.",
  }),
};
