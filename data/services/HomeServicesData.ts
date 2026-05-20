import { ServiceData } from "../services/service-component-types";

export const homeserviceData: ServiceData = {
  title: "Core",
  middleTitle: "Services",
  lastTitle: "",
  description:
    "Get full-stack coverage. Unblock execution across the SDLC.",
  slider: {
    service1: [
      {
        id: 1,
        icon: "icons/cloud.svg",
        title: "Software Development",
        description:
          "Build cloud-native architectures and cross-platform applications designed for performance, scale, and longevity.",
        state: true,
        lists: [
          "Custom Software Development",
          "Enterprise Software Development",
          "MVP Development",
          "Software Development Outsourcing",
          "Full-Stack Development",
          "Front-End Development",
        ],
        href: "/services/software-development",
      },
    ],
    service2: [
      {
        id: 2,
        icon: "icons/vibe-coding.svg",
        title: "Application Development",
        description:
          "Launch web and mobile applications with smooth performance, stable sessions, and secure data handling.",
        state: false,
        lists: [
          "Mobile App Development",
          "Desktop Application Development",
          "Web Application Development",
          "Application Modernization",
          "Application Integration",
          "Progressive Web App (PWA) Development",
        ],
        href: "/services/application-development",
      },
    ],
    service3: [
      {
        id: 3,
        icon: "icons/ai-brain.svg",
        title: "AI & Machine Learning",
        description:
          "Deploy intelligent AI systems that create real business value.",
        state: false,
        lists: [
          "AI Consulting Services",
          "AI Software Development",
          "Generative AI Development",
          "Machine Learning Services",
          "Agentic AI Development",
          "AI Hire Developers",
        ],
        href: "/services/ai-ml",
      },
    ],
    service4: [
      {
        id: 4,
        icon: "icons/data-line.svg",
        title: "Data & Analytics",
        description:
          "Turn complex data into decisions your leadership will actually use.",
        state: false,
        lists: [
          "Business Intelligence Services",
          "Data Engineering / Big Data",
          "Analytics Strategy",
          "Data Warehousing",
          "Dashboards & Reporting",
          "Data Integration",
        ],
        href: "/services/data-analytics",
      },
    ],
    service5: [
      {
        id: 5,
        icon: "icons/cloud.svg",
        title: "Infrastructure & DevOps",
        description:
          "Strengthen deployment pipelines, cloud operations, and infrastructure foundations.",
        state: false,
        lists: [
          "DevOps Services & Solutions",
          "Cloud Services / Cloud Migration",
          "CI/CD Automation",
          "Observability",
          "Environment Management",
          "Release Operations",
        ],
        href: "/services/infrastructure-devops",
      },
    ],
    service6: [
      {
        id: 6,
        icon: "icons/browser.svg",
        title: "Integration & APIs",
        description:
          "Connect systems, automate workflows, and keep data moving cleanly across the stack.",
        state: false,
        lists: [
          "Custom API Development",
          "CMS Development",
          "ERP Software Development",
          "Workflow Automation",
          "Platform Integration",
          "Data Sync Services",
        ],
        href: "/services/integration-api",
      },
    ],
  },
};
