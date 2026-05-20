// import { MainCategory } from "./types";
// import { aiAutomationSubServices } from "./ai-automation";
// import { customSoftwareSubServices } from "./custom-software";
// // import { ServiceWeProvideData, Services } from "../ServiceWeProvideData";

// export const AllServiceData: Record<string, MainCategory> = {
//   //-------------------------------------------------------------------AI AUTOMATION SERVICE DATA -----------------------------------------------------------------
//   //-------------------------------------------------------------------AI AUTOMATION SERVICE DATA ----------------------------------------------------------------
//   "ai-automationsss": {
//     name: "AI Automation",
//     directData: {
//       slug: "ai-automation",
//       name: "AI Automation Service",
//       //------------------------------------------HERO SECTION--------------------------------------------------------
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       ServiceWeProvideLeftSection: {
//         mainHeading: "Next.Js",
//         middleHeading: "Services",
//         endHeading: "We Provide",
//         description:
//           "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//         btnText: "Book Your Consultation Call",
//         btnLink: "/contact",

//         images: [
//           {
//             image1: "/images/technology/clutch-reviews.png",
//             width: 114,
//             height: 54,
//           },
//           {
//             image1: "/images/technology/google-reviews.png",
//             width: 144,
//             height: 42,
//           },
//           {
//             image1: "/images/technology/good-firms.png",
//             width: 125,
//             height: 42,
//           },
//         ],
//       },
//       //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       ServiceWeProvideRightSection: [
//         {
//           index: 1,
//           title: "Business Process Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/business-process-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 2,
//           title: "Sales Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/sales-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 3,
//           title: "Marketing Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/marketing-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 4,
//           title: "Low Code Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/low-code-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 5,
//           title: "No Code Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/no-code-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 6,
//           title: "HR Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/hr-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 7,
//           title: "Calling Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/calling-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 8,
//           title: "Appointment Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/appointment-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 9,
//           title: "Manual Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/manual-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 10,
//           title: "Email Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/email-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 11,
//           title: "Operation Automation",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/ai-automation/operation-automation",
//           btnRightImage: "/images/technology/code.png",
//         },
//       ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         items: [
//           {
//             id: 1,
//             title: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             title: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             title: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             title: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             title: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             title: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             title: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             title: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             title: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             title: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             title: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             title: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             title: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             title: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             title: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             title: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION--------------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//     subServices: aiAutomationSubServices,
//   },
//   //===================================================================== CUSTOM SOFTWARE DEVELOPMENT ===================================================
//   //===================================================================== CUSTOM SOFTWARE DEVELOPMENT ===================================================
//   "custom-software-development": {
//     name: "Custom Software Development",
//     subServices: customSoftwareSubServices,
//     directData: {
//       slug: "custom-software-development",
//       name: "Custom Software Development",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       ServiceWeProvideLeftSection: {
//         mainHeading: "Next.Js",
//         middleHeading: "Services",
//         endHeading: "We Provide",
//         description:
//           "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//         btnText: "Book Your Consultation Call",
//         btnLink: "/contact",

//         images: [
//           {
//             image1: "/images/technology/clutch-reviews.png",
//             width: 114,
//             height: 54,
//           },
//           {
//             image1: "/images/technology/google-reviews.png",
//             width: 144,
//             height: 42,
//           },
//           {
//             image1: "/images/technology/good-firms.png",
//             width: 125,
//             height: 42,
//           },
//         ],
//       },
//       //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       ServiceWeProvideRightSection: [
//         {
//           index: 1,
//           title: "Custom Software Developement",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/custom-software-development/web-development",
//           btnRightImage: "/images/technology/code.png",
//         },
//         {
//           index: 2,
//           title: "Custom Software Developement",
//           description: `Our specialized custom software development solutions encompass enterprise applications, API
//                         development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//           btnText: "Learn More",
//           href: "/services/custom-software-development/mobile-development",
//           btnRightImage: "/images/technology/code.png",
//         },
//       ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION--------------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
//   //========================================================================== DATA SCIENCE SECTION =============================
//   //========================================================================== DATA SCIENCE SECTION =============================
//   "data-science": {
//     name: "Data Science",
//     directData: {
//       name: "Data Science",
//       slug: "data-science",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits in Data Science.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       //   ServiceWeProvideLeftSection: {
//       //     mainHeading: "Next.Js",
//       //     middleHeading: "Services",
//       //     endHeading: "We Provide",
//       //     description:
//       //       "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//       //     btnText: "Book Your Consultation Call",
//       //     btnLink: "/contact",

//       //     images: [
//       //       {
//       //         image1: "/images/technology/clutch-reviews.png",
//       //         width: 114,
//       //         height: 54,
//       //       },
//       //       {
//       //         image1: "/images/technology/google-reviews.png",
//       //         width: 144,
//       //         height: 42,
//       //       },
//       //       {
//       //         image1: "/images/technology/good-firms.png",
//       //         width: 125,
//       //         height: 42,
//       //       },
//       //     ],
//       //   },
//       //   //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       //   ServiceWeProvideRightSection: [
//       //     {
//       //       index: 1,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 2,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 3,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 4,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //   ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION--------------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
//   //========================================================================== BUSINESS INTELLIGENCE SECTION =============================
//   //========================================================================== BUSINESS INTELLIGENCE SECTION =============================
//   "business-intelligence": {
//     name: "Business Intelligence",
//     directData: {
//       name: "Business Intelligence",
//       slug: "business-intelligence",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       //   ServiceWeProvideLeftSection: {
//       //     mainHeading: "Next.Js",
//       //     middleHeading: "Services",
//       //     endHeading: "We Provide",
//       //     description:
//       //       "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//       //     btnText: "Book Your Consultation Call",
//       //     btnLink: "/contact",

//       //     images: [
//       //       {
//       //         image1: "/images/technology/clutch-reviews.png",
//       //         width: 114,
//       //         height: 54,
//       //       },
//       //       {
//       //         image1: "/images/technology/google-reviews.png",
//       //         width: 144,
//       //         height: 42,
//       //       },
//       //       {
//       //         image1: "/images/technology/good-firms.png",
//       //         width: 125,
//       //         height: 42,
//       //       },
//       //     ],
//       //   },
//       //   //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       //   ServiceWeProvideRightSection: [
//       //     {
//       //       index: 1,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 2,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 3,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 4,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //   ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION-------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
//   //========================================================================== STAFF AUGMENTATION SECTION =============================
//   //========================================================================== STAFF AUGMENTATION SECTION =============================
//   "staff-augmentation": {
//     name: "Staff Augmentation",
//     directData: {
//       name: "Staff Augmentation",
//       slug: "staff-augmentation",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       //   ServiceWeProvideLeftSection: {
//       //     mainHeading: "Next.Js",
//       //     middleHeading: "Services",
//       //     endHeading: "We Provide",
//       //     description:
//       //       "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//       //     btnText: "Book Your Consultation Call",
//       //     btnLink: "/contact",

//       //     images: [
//       //       {
//       //         image1: "/images/technology/clutch-reviews.png",
//       //         width: 114,
//       //         height: 54,
//       //       },
//       //       {
//       //         image1: "/images/technology/google-reviews.png",
//       //         width: 144,
//       //         height: 42,
//       //       },
//       //       {
//       //         image1: "/images/technology/good-firms.png",
//       //         width: 125,
//       //         height: 42,
//       //       },
//       //     ],
//       //   },
//       //   //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       //   ServiceWeProvideRightSection: [
//       //     {
//       //       index: 1,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 2,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 3,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 4,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //   ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION-----------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
//   //========================================================================== ARTIFICIAL INTELLIGENCE SECTION =============================
//   //========================================================================== ARTIFICIAL INTELLIGENCE SECTION =============================
//   "artificial-intelligence": {
//     name: "Artificial Intelligence",
//     directData: {
//       name: "Artificial Intelligence",
//       slug: "artificial-intelligence",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       //   ServiceWeProvideLeftSection: {
//       //     mainHeading: "Next.Js",
//       //     middleHeading: "Services",
//       //     endHeading: "We Provide",
//       //     description:
//       //       "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//       //     btnText: "Book Your Consultation Call",
//       //     btnLink: "/contact",

//       //     images: [
//       //       {
//       //         image1: "/images/technology/clutch-reviews.png",
//       //         width: 114,
//       //         height: 54,
//       //       },
//       //       {
//       //         image1: "/images/technology/google-reviews.png",
//       //         width: 144,
//       //         height: 42,
//       //       },
//       //       {
//       //         image1: "/images/technology/good-firms.png",
//       //         width: 125,
//       //         height: 42,
//       //       },
//       //     ],
//       //   },
//       //   //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       //   ServiceWeProvideRightSection: [
//       //     {
//       //       index: 1,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 2,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 3,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 4,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //   ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //------------------------------------------SOFTWARE INSIGHTS SECTION-----------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
//   //========================================================================== OUTSOURCING SECTION =============================
//   //========================================================================== OUTSOURCING SECTION =============================
//   outsourcing: {
//     name: "Outsourcing",
//     directData: {
//       name: "Outsourcing",
//       slug: "outsourcing",
//       HeroServiceData: [
//         {
//           title: "Automation Agency Beyond ♦ Limits.",
//           subtitle: "Amplified With AI",
//           description:
//             "We deliver smart, custom AI solutions that automate workflows and boost efficiency.",
//           video: "/banners/ai-vedio-2.mp4",
//           ctaText: "Let's Discuss Your Idea",
//           ctaLink: "#contact",
//         },
//       ],
//       //------------------------------------------SERVICE WE PROVIDE LEFT SECTION--------------------------------------------------------
//       //   ServiceWeProvideLeftSection: {
//       //     mainHeading: "Next.Js",
//       //     middleHeading: "Services",
//       //     endHeading: "We Provide",
//       //     description:
//       //       "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
//       //     btnText: "Book Your Consultation Call",
//       //     btnLink: "/contact",

//       //     images: [
//       //       {
//       //         image1: "/images/technology/clutch-reviews.png",
//       //         width: 114,
//       //         height: 54,
//       //       },
//       //       {
//       //         image1: "/images/technology/google-reviews.png",
//       //         width: 144,
//       //         height: 42,
//       //       },
//       //       {
//       //         image1: "/images/technology/good-firms.png",
//       //         width: 125,
//       //         height: 42,
//       //       },
//       //     ],
//       //   },
//       //   //------------------------------------------SERVICE WE PROVIDE RIGHT SECTION--------------------------------------------------------
//       //   ServiceWeProvideRightSection: [
//       //     {
//       //       index: 1,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 2,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 3,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //     {
//       //       index: 4,
//       //       title: "Custom Software Developement",
//       //       description: `Our specialized custom software development solutions encompass enterprise applications, API
//       //                     development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
//       //       btnText: "Learn More",
//       //       href: "#",
//       //       btnRightImage: "/images/technology/code.png",
//       //     },
//       //   ],
//       //------------------------------------------SOFTWARE SOLUTIONS SECTION--------------------------------------------------------
//       SoftwareSolutions: {
//         title: "High-end",
//         middleTitle: "Software Solutions",
//         lastTitle: "We Provide",
//         description:
//           "Explore our comprehensive range of tailored solutions designed to drive innovation and enhance business efficiency.",

//         solution: [
//           {
//             id: 1,
//             name: "Enterprise Applications",
//             description:
//               "We develop enterprise applications that integrate business processes, improve collaboration, and support digital transformation, helping organizations manage operations, data, and workflows efficiently through secure, scalable, and user-friendly software systems.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Enterprise Applications",
//           },
//           {
//             id: 2,
//             name: "ERP",
//             description:
//               "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "ERP",
//           },
//           {
//             id: 3,
//             name: "Financial Management",
//             description:
//               "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Financial Management",
//           },
//           {
//             id: 4,
//             name: "Supply Chain Management",
//             description:
//               "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Supply Chain Management",
//           },
//           {
//             id: 5,
//             name: "Asset Management",
//             description:
//               "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Asset Management",
//           },
//           {
//             id: 6,
//             name: "Fleet Management",
//             description:
//               "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Fleet Management",
//           },
//           {
//             id: 7,
//             name: "HR Software",
//             description:
//               "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "HR Software",
//           },
//           {
//             id: 8,
//             name: "eLearning Software",
//             description:
//               "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "eLearning Software",
//           },
//           {
//             id: 9,
//             name: "eCommerce",
//             description:
//               "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "eCommerce",
//           },
//           {
//             id: 10,
//             name: "Mobile Apps",
//             description:
//               "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Mobile Apps",
//           },
//           {
//             id: 11,
//             name: "Content Management",
//             description:
//               "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
//             alt: "Content Management",
//           },
//           {
//             id: 12,
//             name: "Document Management",
//             description:
//               "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Document Management",
//           },
//           {
//             id: 13,
//             name: "CRM",
//             description:
//               "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
//             image: "/images/about/software-solution/aiLayer1.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "CRM",
//           },
//           {
//             id: 14,
//             name: "Marketing & Advertising",
//             description:
//               "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
//             image: "/images/about/software-solution/aiLayer2.svg",
//             hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
//             alt: "Marketing & Advertising",
//           },
//           {
//             id: 15,
//             name: "Web Portals",
//             description:
//               "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
//             image: "/images/about/software-solution/aiLayer3.svg",
//             hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

//             alt: "Web Portals",
//           },
//           {
//             id: 16,
//             name: "Data Analytics",
//             description:
//               "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
//             image: "/images/about/software-solution/aiLayer4.svg",
//             hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
//             alt: "Data Analytics",
//           },
//         ],
//       },
//       //-------------------------------------------SOFTWARE INSIGHTS SECTION-------------------------------------------------------------
//       SoftwareInsights: {
//         startTitle: "Our",
//         spanTitle: "Software Development",
//         endTitle: "Insights",
//         InsightSteps: [
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Development Fundamentals",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Team And Culture",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Metrics And Planning",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "Customer And Project Management",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//           {
//             mainHeading: "In-Depth Guides",
//             descriptionList: [
//               "How To Build Software",
//               "Software Development Automation",
//               "Secure Software Development",
//               "GDPR Compliance In Software",
//               "Development",
//             ],
//           },
//         ],
//       },
//       //------------------------------------------CONTACT HERO SECTION-----------------------------------------------------
//       ContactHero: {
//         title: "Ready to Elevate Your Business?",
//         highlight: "Elevate",
//         description:
//           "Contact us today to discuss how we can tailor our expertise to meet your unique needs.",
//         backgroundImage: "/banners/buissness-banner.webp",
//         buttonText: "Let’s Talk",
//         buttonLink: "/contact",
//         buttonVariant: "glass",
//         buttonIcon: "/icons/arrow-right.svg",
//       },
//       //--------------------------- Industries Section----------------------------
//       IndustriesSection: {
//         title: "We Help Businesses ",
//         gradientTitle: "Use Technology to Grow, ",
//         afterGradientTitle: "Innovate, and Succeed",

//         description:
//           "Technology solutions support organizations in implementing advanced workflows, improving operational efficiency, and enabling smarter decision-making across industries.",

//         slides: [
//           {
//             title: "Healthcare",
//             description:
//               "We deliver compliant digital solutions across care delivery, patient management, and healthcare analytics for improved outcomes.",
//             icon: "🏥",
//             link: "/industrypage/healthcare",
//             bgImage: "/images/industries/Healthcare.webp",
//           },
//           {
//             title: "Real Estate",
//             description:
//               "Our property management solutions, listings, and transactions leverage digital technologies that enhance operational efficiency and client engagement.",
//             icon: "🏠",
//             link: "/industrypage/real-estate",
//             bgImage: "/images/industries/Real-Estate.webp",
//           },
//           {
//             title: "Education",
//             description:
//               "We develop digital learning platforms, student management systems, and analytics to optimize teaching and learning outcomes.",
//             icon: "📚",
//             link: "/industrypage/education",
//             bgImage: "/images/industries/Education.webp",
//           },
//           {
//             title: "Finance",
//             description:
//               "Our solutions power secure digital finance operations, analytics, fraud detection, and compliance for smarter financial management.",
//             icon: "💰",
//             link: "/industrypage/finance",
//             bgImage: "/banners/dollers.webp",
//           },
//           {
//             title: "Retail & Ecommerce",
//             description:
//               "Our automated retail workflows, online and offline operations, and analytics to support growth and market agility.",
//             icon: "🛍️",
//             link: "/industrypage/retail",
//             bgImage: "/images/industries/Retail.webp",
//           },
//           {
//             title: "Manufacturing",
//             description:
//               "We optimize production, supply chains, and business processes to reduce costs, increase efficiency, and maximize output.",
//             icon: "🏭",
//             link: "/industrypage/manufacturing",
//             bgImage: "/images/industries/Manufacturing.webp",
//           },
//           {
//             title: "Hi Tech",
//             description:
//               "We accelerate R&D, software engineering, and product release cycles for technology-driven companies.",
//             icon: "💻",
//             link: "/industrypage/hi-tech",
//             bgImage: "/images/industries/HiTech.webp",
//           },
//           {
//             title: "Insurance",
//             description:
//               "We help organizations implement digital solutions to manage policies, claims, and analytics, enhancing operational efficiency and customer experience.",
//             icon: "📄",
//             link: "/industrypage/insurance",
//             bgImage: "/images/industries/Insurance.webp",
//           },
//         ],
//       },
//       //-------------------------------------------WHAT WE DO SECTION---------------------------------------------
//       WhatWeDo: {
//         miniHeading: "What We Do",
//         mainHeading:
//           "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
//         card: [
//           {
//             id: 1,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 2,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 3,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//           {
//             id: 4,
//             title: "Pre Discovery",
//             paragraph1:
//               "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
//             paragraph2: `We have two types of discovery, dependent on project complexity: 'classic' and 'product design'.`,
//             listHeading1: "Classic Discovery",
//             listParagraph1:
//               "A compact cross-functional team of system architect + business analyst + UX designer, who work with your stakeholders to identify gaps in specification and build a project roadmap.",
//             listHeading2: "Product Design",
//             listParagraph2:
//               "Our system architect, business analyst and UX designer work with your stakeholders to outline a product concept that focuses on end-users, competitors and the market. We then develop the product concept, prototype and high-level architecture - speeding up SDLC and boosting UX.",
//           },
//         ],
//       },
//       //-------------------------------------------FAQ SECTION---------------------------------------------
//       faqComponent: {
//         mainTitle: "Software Development",
//         spanTitle: "FAQs",
//         faqs: [
//           {
//             id: 1,
//             question: "What's Custom Software Development?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 2,
//             question: "How much do Software Development services cost?",
//             answer:
//               "Custom software development services include building tailored software solutions for unique business challenges, modifying existing systems, and updating legacy software to meet the functionality, scalability, and usability.",
//           },
//           {
//             id: 3,
//             question: "Why hire a custom software development company?",
//             answer:
//               "Hiring a professional company ensures expertise, better software architecture, maintenance support, and cost-effective solutions tailored to your business needs.",
//           },
//           {
//             id: 4,
//             question: "What are the technologies do you use?",
//             answer:
//               "We use modern technologies like React, Next.js, Node.js, Python, and cloud services to deliver scalable and efficient solutions.",
//           },
//           {
//             id: 5,
//             question: "How long does it take to develop custom software?",
//             answer:
//               "The timeline depends on the complexity of the project, ranging from a few weeks for simple applications to several months for enterprise solutions.",
//           },
//           {
//             id: 6,
//             question: "Do you provide post-development support?",
//             answer:
//               "Yes, we provide ongoing maintenance, updates, and support to ensure your software continues to meet your business needs.",
//           },
//           {
//             id: 7,
//             question: "Can you integrate our existing systems?",
//             answer:
//               "Absolutely! We can integrate with your existing systems, APIs, and databases for seamless functionality.",
//           },
//           {
//             id: 8,
//             question: "Is my data secure during development?",
//             answer:
//               "Yes, we follow strict security protocols and data protection standards to ensure your data remains safe throughout the development process.",
//           },
//         ],
//       },
//       //------------------------------------------OUTSOURCING MODELS SECTION--------------------------------------------------------
//       OutsourcingModels: {
//         title: "Our Flexible",
//         MiddleTitle: "Outsourcing",
//         lastTitle: "Models",

//         description:
//           "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
//         slides: [
//           {
//             title: "Staff Augmentation",
//             description:
//               "Staff augmentation allows organizations to quickly strengthen internal development teams with experienced engineers and technology specialists.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Expand development teams with skilled AI and software engineers",
//               "Access specialized expertise for complex digital initiatives",
//               "Maintain project while accelerating delivery timelines",
//               "Reduce recruitment overhead and onboarding time",
//             ],
//           },
//           {
//             title: "Dedicated Team ",
//             description:
//               "The dedicated team model provides long-term collaboration with engineers focused on building and improving specific digital products or platforms.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",
//             bulletPoints: [
//               "Continuous collaboration with experienced engineering talent",
//               "Seamless integration with internal teams and development workflows",
//               "Scalable team structures aligned with project requirements",
//               "Long-term product development and improvement",
//             ],
//           },
//           {
//             title: "Project-Based Outsourcing",
//             description:
//               "Project-based outsourcing enables organizations to deliver complete software projects with clearly defined scope, timelines, and outcomes.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "End-to-end delivery for AI and software development projects",
//               "Defined milestones, timelines, and structured development processes",
//               "Suitable for digital transformation and automation initiatives",
//               "Reduced operational complexity through turnkey solutions",
//             ],
//           },
//           {
//             title: "Managed IT Services",
//             description:
//               "Managed IT services support stable and reliable technology infrastructure through continuous monitoring, maintenance, and optimization.",
//             image: "/images/ParentServices/outsourcingmedia/full.webp",
//             hoverImage:
//               "/images/ParentServices/outsourcingmedia/colorfull.webp",

//             bulletPoints: [
//               "Proactive monitoring of systems and infrastructure",
//               "Automation tools that reduce operational workload",
//               "Support for business continuity and system reliability",
//               "Expert technical assistance for ongoing IT management",
//             ],
//           },
//         ],
//       },
//     },
//   },
// };
