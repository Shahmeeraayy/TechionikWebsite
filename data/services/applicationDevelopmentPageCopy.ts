import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import type { FAQ } from "@/data/FAQS";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { ServiceType } from "@/data/OurServices";
import { CALENDLY_URL } from "@/utils/links";

type ApplicationDevelopmentTechService = ServiceType & {
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaLink: string;
};

type ApplicationDevelopmentTechServicesData = {
  title: string;
  gradientText: string;
  afterGradientText: string;
  description: string;
  services: ApplicationDevelopmentTechService[];
};

export const applicationDevelopmentPageCopy = {
  templateVariant: "default",
  meta: {
    title:
      "Application Development Services | Techionik - Reliable Applications for Every Platform",
    description:
      "We provide end-to-end Application Development Services for web, mobile, desktop, and cloud solutions with agile processes, UX/UI design, QA, and post-launch support to deliver measurable business results.",
    keywords: [
      "application development services",
      "mobile app development",
      "desktop application development",
      "cloud application development",
      "Techionik",
    ],
    image: "/banners/Software-Development.webp",
  },
  trustLogos: [
    {
      src: "/images/our-clients/Layoffhub.png",
      alt: "Layoffhub",
      width: 180,
      height: 54,
    },
    {
      src: "/images/our-clients/Acclutions.png",
      alt: "Acclutions",
      width: 180,
      height: 54,
    },
    {
      src: "/images/our-clients/Capital.png",
      alt: "Capital",
      width: 180,
      height: 54,
    },
    {
      src: "/images/our-clients/boxelu.png",
      alt: "Boxelu",
      width: 180,
      height: 54,
    },
    {
      src: "/images/our-clients/Rastah.png",
      alt: "Rastah",
      width: 180,
      height: 54,
    },
    {
      src: "/images/our-clients/marvel.png",
      alt: "Marvel",
      width: 180,
      height: 54,
    },
  ],
  heroSlides: [
    {
      title: "Application Development Services",
      subtitle: "for Every Platform and Industry",
      description:
        "We provide end-to-end Application Development Services for web, mobile, desktop, and cloud solutions with agile processes, UX/UI design, QA, and post-launch support to deliver measurable business results.",
      image: "/banners/Software-Development.webp",
      imageAlt: "Application development hero banner",
      ctaText: "Let's Discuss Your Idea",
      ctaLink: "#contact",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Reliable",
    spanTitle: "Application Development",
    title2: "Solutions for Every Platform and Industry",
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
      "We provide end-to-end Application Development Services for web, mobile, desktop, and cloud solutions with agile processes, UX/UI design, QA, and post-launch support to deliver measurable business results.",
    RightDescription2:
      "Our application teams focus on performance, seamless integration, and reliable delivery so every release supports better user experiences, stronger operations, and clear business impact.",
    buttonLabel: "Let's Discuss Your Idea",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  softwareSolutions: {
    title: "Why Choose TECHIONIK",
    middleTitle: "for Application Development Services",
    lastTitle: "",
    description:
      "We engineer enterprise-grade applications that empower business growth and long-term scalability. Our teams apply certified frameworks, modern architectures, and a transparent delivery process to ensure performance, reliability, and measurable impact.",
    items: [
      {
        id: 1,
        title: "Proven Global Expertise",
        description:
          "With 100+ successful deployments and 50+ satisfied clients across 3 regions, TECHIONIK stands as a trusted partner for enterprises seeking stability and innovation. Backed by 45+ skilled engineers and a decade of delivery excellence, we build solutions that align with complex business operations and evolving market demands.",
        image: "/images/about/software-solution/aiLayer1.svg",
        hoverImage: "/images/about/software-solution/aiLayer1-hover.svg",
        alt: "Proven Global Expertise",
      },
      {
        id: 2,
        title: "Full-Cycle Application Development",
        description:
          "From system design and UI/UX to backend engineering, QA, DevOps, and post-release support - we manage every phase of development. Our dedicated PMO framework ensures project consistency, budget control, and delivery precision that aligns with your digital strategy.",
        image: "/images/about/software-solution/aiLayer2.svg",
        hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
        alt: "Full-Cycle Application Development",
      },
      {
        id: 3,
        title: "Certified Quality and Compliance",
        description:
          "TECHIONIK follows ISO 9001:2015, ISO 27001:2022, and ISO 20000-1:2018 standards, ensuring every application meets strict quality, security, and service benchmarks. We also comply with ISO 14001:2015, ISO 45001:2018, and ISO 22301:2019 for sustainability, safety, and continuity - delivering reliable software within verified, audited environments.",
        image: "/images/about/software-solution/aiLayer3.svg",
        hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
        alt: "Certified Quality and Compliance",
      },
      {
        id: 4,
        title: "Advanced Technology Integration",
        description:
          "We integrate AI, ML, IoT, and cloud-native architectures to ensure each application is efficient, resilient, and optimized for future growth. Our R&D division continuously evaluates new technologies and frameworks to enhance system stability, speed, and compatibility with enterprise ecosystems.",
        image: "/images/about/software-solution/aiLayer4.svg",
        hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
        alt: "Advanced Technology Integration",
      },
      {
        id: 5,
        title: "Client Partnership and Transparency",
        description:
          "We operate through a Client Success Program led by senior delivery advisors who track performance and strategy alignment. TECHIONIK guarantees full ownership of code, data, and IP, ensuring you retain complete control over your digital assets. With a 98% retention rate, our model supports trust, clarity, and consistent business outcomes.",
        image: "/images/about/software-solution/aiLayer1.svg",
        hoverImage: "/images/about/software-solution/aiLayer1-hover.svg",
        alt: "Client Partnership and Transparency",
      },
      {
        id: 6,
        title: "Cost Efficiency and Scalable Models",
        description:
          "Our automation-driven delivery process provides up to 50% cost reduction while maintaining enterprise-grade standards. Choose engagement models, dedicated teams, fixed-scope, or hybrid, for flexibility, operational agility, and accelerated time-to-market.",
        image: "/images/about/software-solution/aiLayer2.svg",
        hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
        alt: "Cost Efficiency and Scalable Models",
      },
    ],
  } satisfies SoftwareSolutions,
  servicesCTA: {
    startTitle: "Create applications that improve",
    spanTitle: "efficiency",
    endTitle: "and drive growth.",
    bgImage: "/banners/servicesCTA.png",
    description:
      "Custom application development services focused on performance, seamless integration, and measurable business value powered by advanced technologies.",
    buttonLabel: "Schedule a Call",
    buttonUrl: CALENDLY_URL,
  } satisfies ServicesCTAInterface,
  whatWeDo: {
    title: "Our End-to-End Application Development Services for High-Performance Solutions",
    descriptiption:
      "We follow a structured, end-to-end application development process, combining modern methodologies, advanced tools, and best practices to deliver secure, high-performance, and reliable applications.",
    mainDescription:
      "From discovery to modernization, we keep scope, architecture, delivery, and support aligned with your business outcomes.",
    card: [
      {
        id: 1,
        title: "Discovery & Requirements Analysis",
        description:
          "<p>We define business objectives, target users, and functional/non-functional requirements. Stakeholder workshops, market research, and competitor analysis establish a clear project scope, success metrics, and roadmap.</p><p><strong>Tools/Practices:</strong> Jira, Confluence, Miro, requirement traceability, KPI mapping.</p>",
      },
      {
        id: 2,
        title: "Architecture & UX/UI Design",
        description:
          "<p>We design application architecture using microservices, serverless, or monolithic patterns. UX/UI wireframes and interactive prototypes ensure intuitive navigation, layouts, and interactions for an optimal user experience.</p><p><strong>Tools/Practices:</strong> Figma, Zeplin, InVision, UML diagrams, design systems, accessibility compliance.</p>",
      },
      {
        id: 3,
        title: "Project Planning & Risk Management",
        description:
          "<p>We create detailed timelines, sprint schedules, and resource plans. Risk management covers dependency mapping, mitigation strategies, backlog grooming, and contingency planning.</p><p><strong>Tools/Practices:</strong> Jira, Trello, MS Project, Agile/Scrum/Kanban, risk assessment matrices.</p>",
      },
      {
        id: 4,
        title: "Development & Quality Assurance",
        description:
          "<p>Front-end (React, Angular, Vue) and back-end (Node.js, .NET, Java, Python) development follows agile sprints. CI/CD pipelines enable rapid, reliable releases. QA includes unit, integration, automated, performance, and security testing.</p><p><strong>Tools/Practices:</strong> Git/GitHub/GitLab, Jenkins, Docker, Kubernetes, Selenium, Postman, SonarQube, JUnit, code reviews.</p>",
      },
      {
        id: 5,
        title: "Deployment & Integration",
        description:
          "<p>We configure production environments, perform user acceptance testing (UAT), and integrate applications with existing IT ecosystems. Cloud deployment and containerization ensure reliability, flexibility, and disaster recovery.</p><p><strong>Tools/Practices:</strong> AWS, Azure, GCP, Docker, Kubernetes, Terraform, Ansible, monitoring tools.</p>",
      },
      {
        id: 6,
        title: "Support, Maintenance & Modernization",
        description:
          "<p>Post-launch monitoring, bug fixes, performance tuning, and iterative updates maintain application efficiency. Continuous modernization includes cloud optimization, DevOps practices, feature enhancements, and technology upgrades.</p><p><strong>Tools/Practices:</strong> New Relic, Datadog, Prometheus, Grafana, CI/CD pipelines, automated regression testing.</p>",
      },
    ],
  } satisfies WhatWeDo,
  solutionsWeDeliver: {
    title: "Application Development",
    spanTitle: "Solutions",
    description:
      "We deliver custom enterprise software with secure architecture, flexible design, smooth integration, and high-performance functionality to drive measurable business results.",
    cards: [
      {
        id: 1,
        title: "Retail",
        description:
          "Optimize inventory, POS, and e-commerce platforms with secure, scalable software and real-time analytics.",
        icon: "/icons/browser.svg",
      },
      {
        id: 2,
        title: "Education",
        description:
          "Deploy learning management systems, digital classrooms, and secure student data platforms for seamless engagement.",
        icon: "/icons/building.svg",
      },
      {
        id: 3,
        title: "Government",
        description:
          "Enable secure, compliant citizen services, workflow automation, and legacy system modernization across departments.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Finance",
        description:
          "Integrate core banking, trading, and compliance systems with secure, scalable, and high-performance software.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 5,
        title: "Healthcare",
        description:
          "Manage EHR, telemedicine, and patient data securely with interoperable, cloud-based, HIPAA-compliant systems.",
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 6,
        title: "Manufacturing",
        description:
          "Automate production, supply chain, and IoT monitoring with real-time, data-driven enterprise software solutions.",
        icon: "/icons/coding.svg",
      },
      {
        id: 7,
        title: "Startups",
        description:
          "Deliver MVPs, scalable platforms, and cloud-native architectures with agile, CI/CD-enabled development pipelines.",
        icon: "/icons/vibe-coding.svg",
      },
      {
        id: 8,
        title: "Entertainment",
        description:
          "Streamline content management, streaming platforms, and audience analytics with secure, high-performance software systems.",
        icon: "/icons/people-team.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  industries: {
    title: "Application Development Solutions",
    gradientTitle: "for Industry-Specific",
    afterGradientTitle: "Needs",
    description:
      "We deliver custom enterprise software with secure architecture, flexible design, smooth integration, and high-performance functionality to drive measurable business results.",
    slides: [
      {
        title: "Retail",
        description:
          "Optimize inventory, POS, and e-commerce platforms with secure, scalable software and real-time analytics.",
        icon: "/icons/browser.svg",
        link: "/industries",
        bgImage: "/banners/dollers.webp",
      },
      {
        title: "Education",
        description:
          "Deploy learning management systems, digital classrooms, and secure student data platforms for seamless engagement.",
        icon: "/icons/building.svg",
        link: "/industries",
        bgImage: "/banners/Hero.webp",
      },
      {
        title: "Government",
        description:
          "Enable secure, compliant citizen services, workflow automation, and legacy system modernization across departments.",
        icon: "/icons/cloud.svg",
        link: "/industries",
        bgImage: "/banners/buissness-banner.webp",
      },
      {
        title: "Finance",
        description:
          "Integrate core banking, trading, and compliance systems with secure, scalable, and high-performance software.",
        icon: "/icons/data-line.svg",
        link: "/industries",
        bgImage: "/banners/hero1.png",
      },
      {
        title: "Healthcare",
        description:
          "Manage EHR, telemedicine, and patient data securely with interoperable, cloud-based, HIPAA-compliant systems.",
        icon: "/icons/ai-brain.svg",
        link: "/industries",
        bgImage: "/banners/Software-Development.webp",
      },
      {
        title: "Manufacturing",
        description:
          "Automate production, supply chain, and IoT monitoring with real-time, data-driven enterprise software solutions.",
        icon: "/icons/coding.svg",
        link: "/industries",
        bgImage: "/banners/idea-banner.png",
      },
      {
        title: "Startups",
        description:
          "Deliver MVPs, scalable platforms, and cloud-native architectures with agile, CI/CD-enabled development pipelines.",
        icon: "/icons/vibe-coding.svg",
        link: "/industries",
        bgImage: "/banners/Calendar.webp",
      },
      {
        title: "Entertainment",
        description:
          "Streamline content management, streaming platforms, and audience analytics with secure, high-performance software systems.",
        icon: "/icons/people-team.svg",
        link: "/industries",
        bgImage: "/banners/caseStudy.webp",
      },
    ],
  } satisfies IndustriesData,
  faq: {
    mainTitle: "Application Development",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "What technologies and tools do you use for application development?",
        answer:
          "Our app developers use front-end frameworks like React, Angular, and Vue, and back-end technologies including Node.js, .NET, Java, and Python. For mobile apps, we use Flutter, Swift, and Kotlin. Cloud deployment leverages AWS, Azure, and GCP, with DevOps via Docker, Kubernetes, Jenkins, and Terraform. QA and monitoring utilize Selenium, SonarQube, Prometheus, and Grafana.",
      },
      {
        id: 2,
        question: "How do you ensure the security and performance of applications?",
        answer:
          "We design applications with security-by-design principles, using role-based access, encryption, cloud-native infrastructure, and automated testing. Performance is optimized through microservices, container orchestration, and cloud load balancing, enabling smooth, consistent operation at all times.",
      },
      {
        id: 3,
        question: "Can you modernize or scale an existing application?",
        answer:
          "Yes. We revamp legacy systems using microservices, cloud-native architectures, containerization (Docker/Kubernetes), and CI/CD pipelines. This approach delivers secure, efficient, and adaptable applications with improved system flexibility, interoperability, and user experience.",
      },
      {
        id: 4,
        question: "How do you ensure applications meet business goals and user needs?",
        answer:
          "We begin with requirements analysis, stakeholder workshops, and market research to define KPIs and functional specifications. Using Agile sprints and iterative testing, we deliver solutions that support business objectives, optimize workflows, and strengthen operational efficiency.",
      },
      {
        id: 5,
        question: "How do you approach custom application architecture design?",
        answer:
          "We design applications using modular, microservices, or cloud-native architectures, ensuring flexibility, maintainability, and security. Each design incorporates CI/CD pipelines, automated testing, and DevOps best practices for consistent, reliable application operation.",
      },
    ],
  } satisfies FAQ,
};

export const applicationDevelopmentTechStackData: TechStackData = {
  headingData: {
    title: "Advanced Tech Stack",
    middleTitle: "for Enterprise Application Development Services",
    description:
      "Our application development teams use 100+ modern technologies, including front-end, backend, cloud, DevOps, and AI/ML tools, to deliver high-performance, scalable, and reliable custom applications for enterprises.",
  },
  filters: [
    "Frontend",
    "Backend",
    "Mobile Platforms",
    "Cloud/DevOps",
    "AI/ML",
    "Database",
  ],
  techIcons: [
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend"] },
    { name: "Vue", icon: "/icons/vuejs.svg", category: ["Frontend"] },
    {
      name: "JavaScript",
      icon: "/icons/java-script.svg",
      category: ["Frontend"],
    },
    { name: "HTML5", icon: "/icons/html.svg", category: ["Frontend"] },
    { name: "CSS3", icon: "/icons/css.svg", category: ["Frontend"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: ".NET", icon: "/icons/tech-Dot-Net.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "Java", icon: "/icons/tech-Java.svg", category: ["Backend"] },
    { name: "Go", icon: "/icons/tech-Go.svg", category: ["Backend", "Cloud/DevOps"] },
    { name: "PHP", icon: "/icons/tech-Php.svg", category: ["Backend"] },
    { name: "C++", icon: "/icons/Tech-C++.svg", category: ["Backend"] },
    {
      name: "React Native",
      icon: "/icons/react-icon.svg",
      category: ["Mobile Platforms"],
    },
    {
      name: "Flutter",
      icon: "/icons/coding.svg",
      category: ["Mobile Platforms"],
    },
    {
      name: "Swift",
      icon: "/icons/coding2.svg",
      category: ["Mobile Platforms"],
    },
    {
      name: "Kotlin",
      icon: "/icons/vibe-coding.svg",
      category: ["Mobile Platforms"],
    },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    {
      name: "Docker",
      icon: "/icons/streamline.svg",
      category: ["Cloud/DevOps"],
    },
    {
      name: "Kubernetes",
      icon: "/icons/coding.svg",
      category: ["Cloud/DevOps"],
    },
    {
      name: "Terraform",
      icon: "/icons/coding2.svg",
      category: ["Cloud/DevOps"],
    },
    { name: "AI/ML", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    {
      name: "TensorFlow",
      icon: "/icons/data-line.svg",
      category: ["AI/ML"],
    },
    { name: "PyTorch", icon: "/icons/data-line.svg", category: ["AI/ML"] },
    {
      name: "scikit-learn",
      icon: "/icons/data-line.svg",
      category: ["AI/ML"],
    },
    { name: "Keras", icon: "/icons/data-line.svg", category: ["AI/ML"] },
    { name: "SQL", icon: "/icons/browser.svg", category: ["Database", "AI/ML"] },
    { name: "NoSQL", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "PostgreSQL", icon: "/icons/browser.svg", category: ["Database"] },
    { name: "MongoDB", icon: "/icons/browser.svg", category: ["Database"] },
  ],
};

export const applicationDevelopmentTechServicesData: ApplicationDevelopmentTechServicesData =
  {
    title: "Emerging Technologies",
    gradientText: "for Application Development",
    afterGradientText: "",
    description:
      "Our app developers use AI/ML, IoT, microservices, and cloud-native frameworks with agile practices to create secure, high-performance applications that provide actionable insights and optimize business operations.",
    services: [
      {
        id: 1,
        title: "AI & ML",
        description:
          "<p>We integrate AI and ML into application development using Python, TensorFlow, PyTorch, scikit-learn, and Keras, combined with cloud platforms (AWS, Azure, GCP), microservices, CI/CD pipelines, containerization, and Agile methodologies, to deliver intelligent, predictive, and high-performance enterprise applications optimized for automation, analytics, and data-driven business outcomes.</p>",
        points: ["Python", "TensorFlow", "PyTorch"],
        icon: "/icons/ai-brain.svg",
        image: "/images/technology/code.png",
        imageAlt: "AI and machine learning for application development",
        ctaText: "Explore AI & ML",
        ctaLink: "#contact",
      },
      {
        id: 2,
        title: "Data Science",
        description:
          "<p>We integrate Data Science into application development using Python, R, SQL, TensorFlow, PyTorch, and Apache Spark. Leveraging machine learning, AI, predictive analytics, and ETL pipelines, we enable data-driven applications with real-time insights, automated decision-making, scalable architecture, CI/CD integration, and enterprise-grade security to maximize business impact and performance.</p>",
        points: ["Python", "R", "Apache Spark"],
        icon: "/icons/data-line.svg",
        image: "/banners/hero1.png",
        imageAlt: "Data science driven application development",
        ctaText: "Explore Data Science",
        ctaLink: "#contact",
      },
      {
        id: 3,
        title: "Computer Vision",
        description:
          "<p>We develop computer vision applications using Python, OpenCV, TensorFlow, PyTorch, and C++ for image/video analysis, object detection, facial recognition, OCR, and augmented reality. Leveraging CNNs, GANs, edge computing, cloud AI, Docker, Kubernetes, CI/CD pipelines, and Agile methodologies, we deliver enterprise-grade, high-performance, and secure computer vision solutions.</p>",
        points: ["OpenCV", "TensorFlow", "PyTorch"],
        icon: "/icons/coding.svg",
        image: "/banners/buissness-banner.webp",
        imageAlt: "Computer vision application development",
        ctaText: "Explore Computer Vision",
        ctaLink: "#contact",
      },
      {
        id: 4,
        title: "Data Analytics",
        description:
          "<p>We integrate advanced data analytics into applications using Python, R, SQL, Hadoop, Spark, Power BI, Tableau, and AI/ML models. Real-time ETL pipelines, predictive analytics, and KPI tracking drive actionable insights, optimize application performance, enhance decision-making, and ensure enterprise-grade reliability, security, and measurable business outcomes.</p>",
        points: ["Power BI", "Tableau", "Spark"],
        icon: "/icons/browser.svg",
        image: "/banners/dollers.webp",
        imageAlt: "Data analytics applications",
        ctaText: "Explore Data Analytics",
        ctaLink: "#contact",
      },
      {
        id: 5,
        title: "NLP",
        description:
          "<p>We deliver enterprise-grade application development services using Agile and DevOps methodologies, microservices, serverless architectures, and CI/CD pipelines. Our teams leverage React, Angular, Node.js, .NET, Java, Python, cloud platforms (AWS, Azure, GCP), containerization (Docker, Kubernetes), AI/ML integration, automated testing, and modern UX/UI design to create secure, high-performance, and reliable applications.</p>",
        points: ["React", "Node.js", "Kubernetes"],
        icon: "/icons/ai-brain.svg",
        image: "/banners/Software-Development.webp",
        imageAlt: "NLP and application delivery",
        ctaText: "Explore NLP",
        ctaLink: "#contact",
      },
      {
        id: 6,
        title: "Business Intelligence",
        description:
          "<p>We integrate Business Intelligence into application development using ETL pipelines, data warehouses, real-time analytics, and visualization tools like Power BI and Tableau. Leveraging SQL/NoSQL databases, Python, R, AI/ML models, and cloud platforms (AWS, Azure, GCP), we deliver data-driven applications that provide actionable insights, predictive analytics, and measurable business impact.</p>",
        points: ["Power BI", "Tableau", "SQL"],
        icon: "/icons/data-line.svg",
        image: "/banners/idea-banner.png",
        imageAlt: "Business intelligence applications",
        ctaText: "Explore BI",
        ctaLink: "#contact",
      },
    ],
  };

export const applicationDevelopmentOutsourcingModelsData: OutsourcingSlide = {
  title: "Our Flexible",
  MiddleTitle: "Application Development Outsourcing",
  lastTitle: "Model",
  description:
    "Our application development outsourcing models deliver flexible, efficient solutions with expert developers, helping businesses accelerate growth and achieve digital goals with high-quality, reliable applications.",
  items: [
    {
      title: "Application Development Outsourcing",
      description:
        "<ul><li>Access skilled application developers on demand</li><li>Reduce development costs effectively</li><li>Accelerate project delivery timelines</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
    },
    {
      title: "Team Augmentation",
      description:
        "<ul><li>Extend your in-house development team instantly</li><li>Fill specific technical skill gaps efficiently</li><li>Maintain full control over your projects</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
    },
    {
      title: "Dedicated Development Team",
      description:
        "<ul><li>Full-time developers dedicated to your application projects</li><li>Seamless integration with your existing workflows</li><li>Ensure consistent, high-quality output</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
    },
    {
      title: "Full Outsourcing",
      description:
        "<ul><li>End-to-end application project management handled by experts</li><li>Turnkey solutions from concept to deployment</li><li>Minimize operational overhead and development risks</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
    },
  ],
};
