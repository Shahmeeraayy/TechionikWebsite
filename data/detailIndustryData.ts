import { SoftwareSolutions } from "./SoftwareSolution";
import { WhatYouGett } from "./WhatYouGetData";
import { TechnologyExpertise } from "./technologyExpertiseData";
import { HeroSlide } from "./HeroIndustryData";
import { ContactHeroData } from "./ConnectHero";
import { ServiceData } from "./services/service-component-types";

export interface IndustryContent {
  slug: string;
  name: string;
  softwareSolutions: SoftwareSolutions;
  whatYouGet: WhatYouGett;
  serviceData: ServiceData;
  technologyExpertiseData: TechnologyExpertise;
  HeroIndustryData: HeroSlide[];
  ContactHero: ContactHeroData;
}

export const IndustryData: Record<string, IndustryContent> = {
  finance: {
    slug: "finance",
    name: "Finance",
    ContactHero: {
      title: "Ready to Elevate Your Business?",
      highlight: "Elevate",
      description:
        "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
      backgroundImage: "/banners/buissness-banner.webp",
      buttonText: "Let’s Talk",
      buttonLink: "/contact",
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    softwareSolutions: {
      title: "High-end",
      middleTitle: "Software Solutions",
      lastTitle: "We Provide For Finance",
      description:
        "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

      items: [
        {
          id: 1,
          title: "Enterprise Applications",
          description:
            "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Enterprise Applications",
        },
        {
          id: 2,
          title: "ERP",
          description:
            "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "ERP",
        },
        {
          id: 3,
          title: "Financial Management",
          description:
            "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Financial Management",
        },
        {
          id: 4,
          title: "Supply Chain Management",
          description:
            "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Supply Chain Management",
        },
        {
          id: 5,
          title: "Asset Management",
          description:
            "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Asset Management",
        },
        {
          id: 6,
          title: "Fleet Management",
          description:
            "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Fleet Management",
        },
        {
          id: 7,
          title: "HR Software",
          description:
            "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "HR Software",
        },
        {
          id: 8,
          title: "eLearning Software",
          description:
            "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "eLearning Software",
        },
        {
          id: 9,
          title: "eCommerce",
          description:
            "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "eCommerce",
        },
        {
          id: 10,
          title: "Mobile Apps",
          description:
            "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Mobile Apps",
        },
        {
          id: 11,
          title: "Content Management",
          description:
            "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Content Management",
        },
        {
          id: 12,
          title: "Document Management",
          description:
            "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Document Management",
        },
        {
          id: 13,
          title: "CRM",
          description:
            "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "CRM",
        },
        {
          id: 14,
          title: "Marketing & Advertising",
          description:
            "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Marketing & Advertising",
        },
        {
          id: 15,
          title: "Web Portals",
          description:
            "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

          alt: "Web Portals",
        },
        {
          id: 16,
          title: "Data Analytics",
          description:
            "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Data Analytics",
        },
      ],
    },
    serviceData: {
      title: "Our",
      middleTitle: "Coreassasasas",
      lastTitle: "Servasasasices",
      description:
        "We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.",

      slider: {
        service1: [
          {
            id: 1,
            icon: "/icons/cloud.svg",
            title: "Finance Services",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: true,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service2: [
          {
            id: 2,
            icon: "/icons/ai-brain.svg",
            title: "AI & Automation",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service3: [
          {
            id: 3,
            icon: "/icons/vibe-coding.svg",
            title: "Software Development",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service4: [
          {
            id: 4,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service5: [
          {
            id: 5,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service6: [
          {
            id: 6,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
      },
    },
    whatYouGet: {
      id: 1,
      title1: "What you get with TECHIONIK",
      spanTitle: "Finance",
      title2: "Software development",
      reviews: [
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
      ],
      RightDescription1:
        "Our custom Finance software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
      RightDescription2:
        "Our advanced Finance software solutions automate essential tasks like data collection, data processing, and complex analyses, improving the efficiency of medical staff. Additionally, with decades of data science expertise, we help our clients implement machine learning and advanced data analytics to unlock valuable insights",
    },
    technologyExpertiseData: {
      mainTitle: "The scope of our Finance software development services",
      mainDescription:
        "We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.",
      cards: [
        {
          id: 1,
          title: "Computer Vision",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 2,
          title: "Data Mining",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 3,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 4,
          title: "Data Science and Machine Learning",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 5,
          title: "Mixed Augmented and Virtual Reality",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 6,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
      ],
    },
    HeroIndustryData: [
      {
        title:
          "Transforming Finance Industries Through Innovation and Expertise",
        subtitle: "", // required
        description:
          "Delve into our case studies showcasing how precision and cutting-edge innovation at TECHIONIK drive transformative outcomes in sectors like oil and gas, fintech, healthcare, and more.",
        video: "/banners/ai-vedio-2.mp4", // required
        ctaText: "Let’s Discuss Your Idea",
        ctaLink: "#contact",
      },
    ],
  },
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    ContactHero: {
      title: "Ready to Elevate Your Business?",
      highlight: "Elevate",
      description:
        "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
      backgroundImage: "/banners/buissness-banner.webp",
      buttonText: "Let’s Talk",
      buttonLink: "/contact",
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    HeroIndustryData: [
      {
        title:
          "Transforming HealthCare Industries Through Innovation and Expertise",
        subtitle: "", // required
        description:
          "Delve into our case studies showcasing how precision and cutting-edge innovation at TECHIONIK drive transformative outcomes in sectors like oil and gas, fintech, healthcare, and more.",
        video: "/banners/ai-vedio-2.mp4", // required
        ctaText: "Let’s Discuss Your Idea",
        ctaLink: "#contact",
      },
    ],
    softwareSolutions: {
      title: "High-end",
      middleTitle: "Software Solutions",
      lastTitle: "We Provide For Healthcare",
      description:
        "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

      items: [
        {
          id: 1,
          title: "Enterprise Applications",
          description:
            "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Enterprise Applications",
        },
        {
          id: 2,
          title: "ERP",
          description:
            "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "ERP",
        },
        {
          id: 3,
          title: "Financial Management",
          description:
            "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Financial Management",
        },
        {
          id: 4,
          title: "Supply Chain Management",
          description:
            "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Supply Chain Management",
        },
        {
          id: 5,
          title: "Asset Management",
          description:
            "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Asset Management",
        },
        {
          id: 6,
          title: "Fleet Management",
          description:
            "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Fleet Management",
        },
        {
          id: 7,
          title: "HR Software",
          description:
            "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "HR Software",
        },
        {
          id: 8,
          title: "eLearning Software",
          description:
            "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "eLearning Software",
        },
        {
          id: 9,
          title: "eCommerce",
          description:
            "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "eCommerce",
        },
        {
          id: 10,
          title: "Mobile Apps",
          description:
            "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Mobile Apps",
        },
        {
          id: 11,
          title: "Content Management",
          description:
            "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Content Management",
        },
        {
          id: 12,
          title: "Document Management",
          description:
            "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Document Management",
        },
        {
          id: 13,
          title: "CRM",
          description:
            "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "CRM",
        },
        {
          id: 14,
          title: "Marketing & Advertising",
          description:
            "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Marketing & Advertising",
        },
        {
          id: 15,
          title: "Web Portals",
          description:
            "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

          alt: "Web Portals",
        },
        {
          id: 16,
          title: "Data Analytics",
          description:
            "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Data Analytics",
        },
      ],
    },
    serviceData: {
      title: "Our",
      middleTitle: "Core",
      lastTitle: "Services",
      description:
        "We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.",

      slider: {
        service1: [
          {
            id: 1,
            icon: "/icons/cloud.svg",
            title: "Cloud Services",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: true,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service2: [
          {
            id: 2,
            icon: "/icons/ai-brain.svg",
            title: "AI & Automation",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service3: [
          {
            id: 3,
            icon: "/icons/vibe-coding.svg",
            title: "Software Development",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service4: [
          {
            id: 4,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service5: [
          {
            id: 5,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service6: [
          {
            id: 6,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
      },
    },
    whatYouGet: {
      id: 1,
      title1: "What you get with TECHIONIK",
      spanTitle: "HealthCare",
      title2: "Software development",
      reviews: [
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
      ],
      RightDescription1:
        "Our custom healthcare software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
      RightDescription2:
        "Our advanced healthcare software solutions automate essential tasks like data collection, data processing, and complex analyses, improving the efficiency of medical staff. Additionally, with decades of data science expertise, we help our clients implement machine learning and advanced data analytics to unlock valuable insights",
    },
    technologyExpertiseData: {
      mainTitle: "The scope of our healthcare software development services",
      mainDescription:
        "We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.",
      cards: [
        {
          id: 1,
          title: "Computer Vision",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 2,
          title: "Data Mining",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 3,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 4,
          title: "Data Science and Machine Learning",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 5,
          title: "Mixed Augmented and Virtual Reality",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 6,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
      ],
    },
  },
  retail: {
    slug: "retail",
    name: "Retail",
    ContactHero: {
      title: "Ready to Elevate Your Business?",
      highlight: "Elevate",
      description:
        "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
      backgroundImage: "/banners/buissness-banner.webp",
      buttonText: "Let’s Talk",
      buttonLink: "/contact",
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    HeroIndustryData: [
      {
        title:
          "Transforming Retail Industries Through Innovation and Expertise",
        subtitle: "", // required
        description:
          "Delve into our case studies showcasing how precision and cutting-edge innovation at TECHIONIK drive transformative outcomes in sectors like oil and gas, fintech, healthcare, and more.",
        video: "/banners/ai-vedio-2.mp4", // required
        ctaText: "Let’s Discuss Your Idea",
        ctaLink: "#contact",
      },
    ],
    softwareSolutions: {
      title: "High-end",
      middleTitle: "Software Solutions",
      lastTitle: "We Provide For Healthcare",
      description:
        "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

      items: [
        {
          id: 1,
          title: "Enterprise Applications",
          description:
            "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Enterprise Applications",
        },
        {
          id: 2,
          title: "ERP",
          description:
            "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "ERP",
        },
        {
          id: 3,
          title: "Financial Management",
          description:
            "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Financial Management",
        },
        {
          id: 4,
          title: "Supply Chain Management",
          description:
            "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Supply Chain Management",
        },
        {
          id: 5,
          title: "Asset Management",
          description:
            "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Asset Management",
        },
        {
          id: 6,
          title: "Fleet Management",
          description:
            "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Fleet Management",
        },
        {
          id: 7,
          title: "HR Software",
          description:
            "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "HR Software",
        },
        {
          id: 8,
          title: "eLearning Software",
          description:
            "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "eLearning Software",
        },
        {
          id: 9,
          title: "eCommerce",
          description:
            "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "eCommerce",
        },
        {
          id: 10,
          title: "Mobile Apps",
          description:
            "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Mobile Apps",
        },
        {
          id: 11,
          title: "Content Management",
          description:
            "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Content Management",
        },
        {
          id: 12,
          title: "Document Management",
          description:
            "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Document Management",
        },
        {
          id: 13,
          title: "CRM",
          description:
            "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "CRM",
        },
        {
          id: 14,
          title: "Marketing & Advertising",
          description:
            "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Marketing & Advertising",
        },
        {
          id: 15,
          title: "Web Portals",
          description:
            "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

          alt: "Web Portals",
        },
        {
          id: 16,
          title: "Data Analytics",
          description:
            "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Data Analytics",
        },
      ],
    },
    serviceData: {
      title: "Our",
      middleTitle: "Core",
      lastTitle: "Services",
      description:
        "We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.",

      slider: {
        service1: [
          {
            id: 1,
            icon: "/icons/cloud.svg",
            title: "Cloud Services",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: true,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service2: [
          {
            id: 2,
            icon: "/icons/ai-brain.svg",
            title: "AI & Automation",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service3: [
          {
            id: 3,
            icon: "/icons/vibe-coding.svg",
            title: "Software Development",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service4: [
          {
            id: 4,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service5: [
          {
            id: 5,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service6: [
          {
            id: 6,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
      },
    },
    whatYouGet: {
      id: 1,
      title1: "What you get with TECHIONIK",
      spanTitle: "HealthCare",
      title2: "Software development",
      reviews: [
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
      ],
      RightDescription1:
        "Our custom healthcare software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
      RightDescription2:
        "Our advanced healthcare software solutions automate essential tasks like data collection, data processing, and complex analyses, improving the efficiency of medical staff. Additionally, with decades of data science expertise, we help our clients implement machine learning and advanced data analytics to unlock valuable insights",
    },
    technologyExpertiseData: {
      mainTitle: "The scope of our healthcare software development services",
      mainDescription:
        "We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.",
      cards: [
        {
          id: 1,
          title: "Computer Vision",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 2,
          title: "Data Mining",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 3,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 4,
          title: "Data Science and Machine Learning",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 5,
          title: "Mixed Augmented and Virtual Reality",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 6,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
      ],
    },
  },
  education: {
    slug: "education",
    name: "Education",
    ContactHero: {
      title: "Ready to Elevate Your Business?",
      highlight: "Elevate",
      description:
        "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
      backgroundImage: "/banners/buissness-banner.webp",
      buttonText: "Let’s Talk",
      buttonLink: "/contact",
      buttonVariant: "glass",
      buttonIcon: "/icons/arrow-right.svg",
    },
    HeroIndustryData: [
      {
        title:
          "Transforming Education Industries Through Innovation and Expertise",
        subtitle: "", // required
        description:
          "Delve into our case studies showcasing how precision and cutting-edge innovation at TECHIONIK drive transformative outcomes in sectors like oil and gas, fintech, healthcare, and more.",
        video: "/banners/ai-vedio-2.mp4", // required
        ctaText: "Let’s Discuss Your Idea",
        ctaLink: "#contact",
      },
    ],
    softwareSolutions: {
      title: "High-end",
      middleTitle: "Software Solutions",
      lastTitle: "We Provide For Healthcare",
      description:
        "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

      items: [
        {
          id: 1,
          title: "Enterprise Applications",
          description:
            "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Enterprise Applications",
        },
        {
          id: 2,
          title: "ERP",
          description:
            "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "ERP",
        },
        {
          id: 3,
          title: "Financial Management",
          description:
            "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Financial Management",
        },
        {
          id: 4,
          title: "Supply Chain Management",
          description:
            "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Supply Chain Management",
        },
        {
          id: 5,
          title: "Asset Management",
          description:
            "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Asset Management",
        },
        {
          id: 6,
          title: "Fleet Management",
          description:
            "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Fleet Management",
        },
        {
          id: 7,
          title: "HR Software",
          description:
            "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "HR Software",
        },
        {
          id: 8,
          title: "eLearning Software",
          description:
            "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "eLearning Software",
        },
        {
          id: 9,
          title: "eCommerce",
          description:
            "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "eCommerce",
        },
        {
          id: 10,
          title: "Mobile Apps",
          description:
            "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Mobile Apps",
        },
        {
          id: 11,
          title: "Content Management",
          description:
            "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
          alt: "Content Management",
        },
        {
          id: 12,
          title: "Document Management",
          description:
            "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Document Management",
        },
        {
          id: 13,
          title: "CRM",
          description:
            "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
          image: "/images/about/software-solution/aiLayer1.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "CRM",
        },
        {
          id: 14,
          title: "Marketing & Advertising",
          description:
            "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
          image: "/images/about/software-solution/aiLayer2.svg",
          hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
          alt: "Marketing & Advertising",
        },
        {
          id: 15,
          title: "Web Portals",
          description:
            "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
          image: "/images/about/software-solution/aiLayer3.svg",
          hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

          alt: "Web Portals",
        },
        {
          id: 16,
          title: "Data Analytics",
          description:
            "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
          image: "/images/about/software-solution/aiLayer4.svg",
          hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
          alt: "Data Analytics",
        },
      ],
    },
    serviceData: {
      title: "Our",
      middleTitle: "Core",
      lastTitle: "Services",
      description:
        "We offer a range of comprehensive services, from custom application to product development, IT consulting, QA testing, and more.",

      slider: {
        service1: [
          {
            id: 1,
            icon: "/icons/cloud.svg",
            title: "Cloud Services",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: true,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service2: [
          {
            id: 2,
            icon: "/icons/ai-brain.svg",
            title: "AI & Automation",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service3: [
          {
            id: 3,
            icon: "/icons/vibe-coding.svg",
            title: "Software Development",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],

        service4: [
          {
            id: 4,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service5: [
          {
            id: 5,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
        service6: [
          {
            id: 6,
            icon: "/icons/data-line.svg",
            title: "Data Science",
            href: "#",
            description:
              "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
            state: false,
            lists: [
              "Cloud Consulting",
              "Cloud Application Development",
              "Cloud Security Consulting",
              "Configuration Management",
              "Cloud Migration",
              "Cloud Infrastructure Management",
            ],
          },
        ],
      },
    },
    whatYouGet: {
      id: 1,
      title1: "What you get with TECHIONIK",
      spanTitle: "HealthCare",
      title2: "Software development",
      reviews: [
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
      ],
      RightDescription1:
        "Our custom healthcare software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
      RightDescription2:
        "Our advanced healthcare software solutions automate essential tasks like data collection, data processing, and complex analyses, improving the efficiency of medical staff. Additionally, with decades of data science expertise, we help our clients implement machine learning and advanced data analytics to unlock valuable insights",
    },
    technologyExpertiseData: {
      mainTitle: "The scope of our healthcare software development services",
      mainDescription:
        "We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.",
      cards: [
        {
          id: 1,
          title: "Computer Vision",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 2,
          title: "Data Mining",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 3,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 4,
          title: "Data Science and Machine Learning",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 5,
          title: "Mixed Augmented and Virtual Reality",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
        {
          id: 6,
          title: "Natural Language Processing",
          description: [
            "Interactive medical imaging solutions",
            "Advanced diagnostics and screening applications",
            "Intelligent screening tools",
            "Medical staff training tools and simulators",
            "Lab tests automation solutions",
          ],
          icon: "/icons/box-icon.png",
        },
      ],
    },
  },
};
