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
          "Mobile App Development",
          "Software Outsourcing",
          "MVP Development",
          "Enterprise Software Development",
          "Web Development",
        ],
        href: "/services/custom-software-development",
      },
    ],
    service2: [
      {
        id: 2,
        icon: "icons/ai-brain.svg",
        title: "AI Automation",
        description:
          "Deploy intelligent AI systems that create real business value.",
        state: false,
        lists: [
          "Business Process Automation (BPA)",
          "Sales Automation",
          "Marketing Automation",
          "Low-code/No-code (LCNC) Automation",
          "HR Automation",
          "Calling & Appointment Automation",
        ],
        href: "/services/ai-automation",
      },
    ],
    service3: [
      {
        id: 3,
        icon: "icons/vibe-coding.svg",
        title: "Application Development",
        description:
          "Launch web and mobile applications with smooth performance, stable sessions, and secure data handling.",
        state: false,
        lists: [
          "Mobile App Development",
          "Web App Development",
          "SaaS App Development",
          "Application Modernization",
          "Application Integration",
          "Progressive Web App (PWA) Development",
        ],
        href: "/services/application-development",
      },
    ],
    service4: [
      {
        id: 4,
        icon: "icons/data-line.svg",
        title: "Data Science",
        description:
          "Uncover insights from complex datasets. Build models that support informed decisions.",
        state: false,
        lists: [
          "Data Engineering",
          "Data Mining Services",
          "Agentic AI Development",
          "Data Science Consulting",
          "Business Intelligence",
          "Generative AI Solutions",
        ],
        href: "/services/data-science",
      },
    ],
    service5: [
      {
        id: 5,
        icon: "icons/browser.svg",
        title: "Business Intelligence",
        description:
          "Turn complex data into decisions your leadership will actually use.",
        state: false,
        lists: [
          "BI Consulting",
          "BI Implementation",
          "Self-Service BI",
          "Dashboard Development",
          "Data Integration",
          "BI Strategy and Roadmap Planning",
        ],
        href: "/services/business-intelligence",
      },
    ],
    service6: [
      {
        id: 6,
        icon: "icons/people-team.svg",
        title: "IT Staff Augmentation",
        description:
          "Strengthen your team with skilled engineers across web, cloud, and enterprise platforms.",
        state: false,
        lists: [
          "UI/UX Designers",
          "Project Managers",
          "Software Developers",
          "AI & Machine Learning Specialists",
          "Cloud Architects",
          "Quality Assurance Experts",
        ],
        href: "/services/staff-augmentation",
      },
    ],
  },
};
