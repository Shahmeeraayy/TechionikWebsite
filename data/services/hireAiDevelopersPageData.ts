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

type HireAiDevelopersBlog = {
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
    "We help businesses create AI and machine learning solutions that scale with operations and automate key processes.",
  solution: "AI developer hiring",
  imageDesktop: item.imageUrl,
  imageMobile: item.imageUrl,
  href: item.href,
  stats: [],
}));

const blogs: HireAiDevelopersBlog[] = DummyBlogData.slice(0, 5).map((blog) => ({
  id: String(blog.id),
  title: blog.title,
  description: blog.description ?? "",
  image: blog.imageUrl,
  stack: blog.blogCategory,
  slug: blog.slug,
}));

export const hireAiDevelopersTechStackData: TechStackData = {
  headingData: {
    title: "Technical Experts in Various",
    middleTitle: "Tech Stacks",
    description:
      "Leverage top-tier global talent to enhance your projects' innovation and execution, delivering exceptional results across AI, backend, cloud, and mobile development.",
  },
  filters: ["Frontend", "Backend", "Mobile Platforms", "AI/ML", "Cloud/DevOps", "Database"],
  techIcons: [
    { name: "Python", icon: "/python.svg", category: ["Backend", "AI/ML"] },
    { name: "TensorFlow", icon: "/python.svg", category: ["AI/ML"] },
    { name: "PyTorch", icon: "/python.svg", category: ["AI/ML"] },
    { name: "OpenAI", icon: "/icons/ai-brain.svg", category: ["AI/ML"] },
    { name: "React", icon: "/icons/react.svg", category: ["Frontend"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend"] },
    { name: "Java", icon: "/java.svg", category: ["Backend"] },
    { name: "iOS", icon: "/iso.svg", category: ["Mobile Platforms"] },
    { name: "AWS", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Azure", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "GCP", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Docker", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "Kubernetes", icon: "/icons/cloud.svg", category: ["Cloud/DevOps"] },
    { name: "LangChain", icon: "/icons/coding.svg", category: ["AI/ML", "Backend"] },
    { name: "MLOps", icon: "/icons/check-gradener.svg", category: ["AI/ML", "Cloud/DevOps"] },
    { name: "Data Pipelines", icon: "/icons/data-line.svg", category: ["Backend", "Database"] },
  ],
};

export const hireAiDevelopersPageData = {
  templateVariant: "default",
  meta: {
    title: "Hire AI Developers | Techionik - Custom AI & Machine Learning Solutions",
    description:
      "Hire pre-vetted AI developers from Techionik to build custom AI and machine learning solutions that scale with your operations, automate key processes, and deliver smarter results in just two weeks.",
    keywords: [
      "hire AI developers",
      "AI developer hiring",
      "machine learning developers",
      "dedicated offshore developers",
      "Techionik",
    ],
    image: heroImage,
  },
  heroSlides: [
    {
      title: "Hire AI Developers for Custom AI & Machine Learning Solutions",
      subtitle: "",
      description:
        "We help businesses create AI and machine learning solutions that grow with your operations, automating key processes and driving smarter, faster results. Our pre-vetted AI developers can join your team in just two weeks.",
      image: heroImage,
      imageAlt: "Hire AI developers hero banner",
      ctaText: "Hire AI Developers",
      ctaLink: "/contact-us",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Hire a Dedicated",
    spanTitle: "Offshore Developer",
    title2: "With TECHIONIK",
    reviews: defaultReviewImages,
    RightDescription1:
      "We help businesses of all sizes, from startups to enterprise, scale faster with pre-vetted, experienced developers ready to join your team.",
    RightDescription2:
      "Our developers cover custom software development, MVP development, enterprise software development, cloud applications, web, desktop, and mobile app development, SaaS development, custom API development, and AI-driven engineering. You can also hire front-end developers, back-end developers, full-stack developers, Python developers, Java developers, and iOS developers when you need specialized delivery.",
    buttonLabel: "Start Hiring",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  technologyExpertise: {
    mainTitle: "How We Hire AI Developers",
    mainDescription:
      "Our technical recruitment team follows a strict process to hire the best AI engineers and machine learning experts, ensuring every developer is aligned to your delivery goals.",
    cards: [
      {
        id: 1,
        title: "AI Technical Assessment",
        description: [
          "We evaluate machine learning algorithms, deep learning frameworks like TensorFlow and PyTorch, NLP, data modeling, AI architecture, and Python programming.",
          "This ensures every developer meets our high AI development standards before moving forward.",
        ],
        icon: "/icons/ai-brain.svg",
      },
      {
        id: 2,
        title: "HR Interview",
        description: [
          "We assess communication skills, collaboration ability, and problem-solving mindset.",
          "We also review project experience, agile teamwork, and understanding of business use cases for AI.",
        ],
        icon: "/icons/people-team.svg",
      },
      {
        id: 3,
        title: "AI Technical Interview",
        description: [
          "Senior AI architects conduct a deep technical interview covering model development, system architecture, training, evaluation, data engineering, and deployment optimization.",
          "Only candidates who pass this stage join our AI development team.",
        ],
        icon: "/icons/coding.svg",
      },
    ],
  } satisfies TechnologyExpertise,
  solutionsWeDeliver: {
    title: "Our Tailored AI Development Solutions for",
    spanTitle: "Businesses of All Sizes",
    description:
      "Expand your business with expert AI developers who build intelligent automation, machine learning models, and scalable AI solutions for startups, SMBs, and enterprises.",
    cards: [
      {
        id: 1,
        title: "AI Developers for Startups",
        description:
          "We help startups build MVPs, AI-powered applications, chatbots, and automation tools using Python, TensorFlow, and OpenAI APIs so new ideas can become scalable products quickly.",
        icon: "/icons/people-team.svg",
      },
      {
        id: 2,
        title: "AI Developers for SMBs",
        description:
          "Our AI developers implement automation, predictive analytics, recommendation systems, and intelligent chatbots that reduce costs and improve productivity for growing businesses.",
        icon: "/icons/data-line.svg",
      },
      {
        id: 3,
        title: "AI Developers for Enterprises",
        description:
          "We deliver enterprise-grade AI development with custom machine learning models, NLP solutions, computer vision systems, and AI automation platforms built for scale and reliability.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Hire Front-end Developers",
        description:
          "Build seamless, user-centric web and app interfaces with smooth deployment, responsive design, and access to 45+ expert front-end developers with 5+ years of experience.",
        icon: "/icons/browser.svg",
      },
      {
        id: 5,
        title: "Hire Back-end Developers",
        description:
          "Design robust server-side architectures and APIs with skilled Node.js, Python, PHP, Ruby, and database engineers supported by 120+ dedicated back-end developers.",
        icon: "/icons/coding.svg",
      },
      {
        id: 6,
        title: "Hire Full-Stack Developers",
        description:
          "Handle both front-end and back-end delivery with 30+ full-stack developers experienced in MERN, MEAN, and end-to-end software solutions for agile teams.",
        icon: "/icons/check-gradener.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  outsourcingModels: {
    title: "Choose the Best Suitable",
    MiddleTitle: "AI Development Cooperation",
    lastTitle: "Model",
    description:
      "Hire top AI experts to accelerate innovation, automate business processes, and build intelligent products powered by artificial intelligence.",
    items: [
      {
        title: "AI Development Outsourcing",
        description:
          "<ul><li>Build AI-powered applications with experienced AI engineers</li><li>Skilled AI developers with expertise in machine learning and deep learning</li><li>End-to-end AI development services with full-cycle project management</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "Dedicated AI Development Team",
        description:
          "<ul><li>Skilled AI engineers integrated with your internal team</li><li>Perfect for long-term AI development projects</li><li>Agile AI development process and faster product innovation</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "AI Automation Outsourcing",
        description:
          "<ul><li>AI workflow automation and smart process optimization</li><li>AI chatbots and virtual assistants</li><li>Reduced operational costs using intelligent automation</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
      {
        title: "AI Product Development Team",
        description:
          "<ul><li>Custom AI product development</li><li>AI SaaS platform development</li><li>AI recommendation engines and integration with existing systems</li></ul>",
        image: "/images/ParentServices/outsourcingmedia/full.webp",
        hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      },
    ],
  } satisfies OutsourcingSlide,
  faq: {
    mainTitle: "Hire AI Developers",
    spanTitle: "FAQs",
    faq: [
      {
        id: 1,
        question: "How quickly can I hire AI developers from Techionik?",
        answer:
          "Our pre-vetted AI developers can typically join your team in about two weeks, depending on the exact skills and team size you need.",
      },
      {
        id: 2,
        question: "What AI skills do your developers bring?",
        answer:
          "Our developers work with machine learning, deep learning, NLP, computer vision, automation, predictive analytics, Python, TensorFlow, PyTorch, and OpenAI APIs.",
      },
      {
        id: 3,
        question: "Can I hire developers for front-end, back-end, or full-stack work too?",
        answer:
          "Yes. We can provide front-end, back-end, and full-stack developers alongside AI specialists so you can build complete product teams.",
      },
      {
        id: 4,
        question: "Do you work with startups and enterprise teams?",
        answer:
          "Absolutely. We support startups, SMBs, and enterprise organizations with engagement models that match the scope, speed, and governance requirements of each team.",
      },
      {
        id: 5,
        question: "How do you screen AI developers?",
        answer:
          "Candidates go through an AI technical assessment, an HR interview, and a senior technical interview before they are added to the team.",
      },
      {
        id: 6,
        question: "Can your developers work in my time zone?",
        answer:
          "Yes. We build distributed teams that can align with your preferred time zone and collaboration style for smoother delivery.",
      },
      {
        id: 7,
        question: "Can I scale the team up or down during the project?",
        answer:
          "Yes. Our engagement models are flexible, so you can expand or reduce the team as priorities change without restarting the entire project.",
      },
      {
        id: 8,
        question: "What makes Techionik a good AI hiring partner?",
        answer:
          "We combine pre-vetted talent, transparent hiring, AI engineering experience, and flexible engagement models so you can move faster without sacrificing quality.",
      },
    ],
  } satisfies FAQ,
  contactHero: {
    title: "Cut Costs, Not Talent",
    description:
      "Hire expert AI developers who work in your time zone and deliver high-performance AI solutions, machine learning models, and automation systems faster.",
    backgroundImage: heroImage,
    imageAlt: "Hire AI developers CTA",
    buttonText: "Hire AI Developers",
    buttonLink: "/contact-us",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
  } satisfies ContactHeroData,
  techStackData: hireAiDevelopersTechStackData,
  caseStudies,
  blogs,
  whatWeDo: {
    title: "How You Can Hire Offshore Developers Through TECHIONIK",
    descriptiption:
      "Explore our simplified, transparent hiring process and get your dedicated developers ready to join your team.",
    mainDescription:
      "We keep hiring straightforward so you can review candidates quickly, approve the right talent, and get moving with confidence.",
    card: [
      {
        id: 1,
        title: "Request Review",
        description:
          "<p>Submit your requirements and our experts assess your needs and the number of developers required.</p>",
      },
      {
        id: 2,
        title: "Initial Screening",
        description:
          "<p>We shortlist candidates based on skills, experience, and project requirements.</p>",
      },
      {
        id: 3,
        title: "Setting Up Interviews",
        description:
          "<p>Schedule interviews with vetted candidates to evaluate fit for your team and roadmap.</p>",
      },
      {
        id: 4,
        title: "Interview Vetted Candidates",
        description:
          "<p>Select the best developers after one-on-one discussions with the shortlisted team.</p>",
      },
      {
        id: 5,
        title: "Contract Review",
        description:
          "<p>Finalize terms, contracts, and project scope before onboarding your dedicated developers.</p>",
      },
      {
        id: 6,
        title: "Pay and Let's Start",
        description:
          "<p>Complete payment and get your dedicated developers ready to join your team.</p>",
      },
    ],
  } satisfies WhatWeDo,
  industries: {
    title: "Our AI Developers Support",
    gradientTitle: "Business Growth",
    afterGradientTitle: "Across Industries",
    description:
      "Our AI developers help startups and enterprises integrate intelligent automation, machine learning models, and scalable AI systems across a wide range of industries.",
    slides: [
      {
        title: "Retail",
        description:
          "Build AI solutions for inventory control, customer experience, automation, and predictive analytics that improve conversion and operational efficiency.",
        link: "/industries/retail",
        bgImage: "/images/industries/Retail.webp",
        icon: "*",
      },
      {
        title: "Education",
        description:
          "Create AI-enabled learning platforms, grading automation, and personalized learning experiences for modern education teams.",
        link: "/industries/education",
        bgImage: "/images/industries/Education.webp",
        icon: "*",
      },
      {
        title: "Government",
        description:
          "Develop secure, compliant AI systems for citizen services, workflow automation, and public-sector decision support.",
        link: "/industries/government",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Finance",
        description:
          "Implement risk scoring, fraud detection, analytics, and automation for banking, fintech, and trading workflows.",
        link: "/industries/finance",
        bgImage: "/banners/dollers.webp",
        icon: "*",
      },
      {
        title: "Healthcare",
        description:
          "Deliver AI software for diagnostics, telehealth, patient data handling, and secure workflow automation.",
        link: "/industries/healthcare",
        bgImage: "/images/industries/Healthcare.webp",
        icon: "*",
      },
      {
        title: "Manufacturing",
        description:
          "Create AI systems for predictive maintenance, production automation, and IoT-driven operational insight.",
        link: "/industries/manufacturing",
        bgImage: "/images/industries/Manufacturing.webp",
        icon: "*",
      },
      {
        title: "Startups",
        description:
          "Launch AI-powered MVPs, automation tools, and cloud-ready products that help founders move faster from idea to market.",
        link: "/industries/startups",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
      {
        title: "Entertainment",
        description:
          "Build AI features for content automation, audience analytics, recommendations, and streaming experiences.",
        link: "/industries/entertainment-media",
        bgImage: "/images/industries/HiTech.webp",
        icon: "*",
      },
    ],
  } satisfies IndustriesData,
  addScheema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hire AI Developers",
    serviceType: "AI Developer Hiring",
    provider: {
      "@type": "Organization",
      name: "Techionik",
      url: getSiteUrl(),
    },
    areaServed: "Global",
    description:
      "Hire pre-vetted AI developers to build custom AI and machine learning solutions, automation systems, and scalable digital products for startups, SMBs, and enterprises.",
  }),
};
