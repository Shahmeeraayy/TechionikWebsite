import type { ReactNode } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import HiringInquiryForm from "./HiringInquiryForm";
import HiringCard from "@/components/hirngCards";
import TailoredSolutions from "@/components/TailoredSolutions";
import HireTechStack from "@/components/singleHiring/hireTechStack";
import OutsourcingModels from "@/components/OutSourceModel";
import OurClientSays from "@/components/OurClientSays";
import FAQComponent from "@/views/home/FAQs";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import { hiringData } from "@/data/hiringCardData";
import type { Feature as HiringCardFeature } from "@/data/hiringCardData";
import { TechexpertTechStack } from "@/data/TechnicalexpertTechStack";
import { tailoredSolutions } from "@/data/solutionsData";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { faqsData } from "@/data/FAQS";
import type { FAQ as FAQData } from "@/data/FAQS";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";

const sfPro = localFont({
  src: [
    {
      path: "../../../public/fonts/SFPRODISPLAYREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SFPRODISPLAYMEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SFPRODISPLAYBOLD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

type PageData = {
  addScheema?: string | null;
  hero?: {
    image?: string;
    title?: string;
    description?: string;
  };
  faq?: Array<{
    question?: string;
    answer?: string;
  }>;
  hiringPageData?: {
    header?: {
      mainTitle?: string;
      highlightTitle?: string;
      subtitle?: string;
    };
    cards?: Array<{
      id?: string | number;
      title?: string;
      category?: string;
      icon?: string;
      features?: string[];
    }>;
  };
  technicalExperts?: {
    header?: {
      mainTitle?: string;
      highlightTitle?: string;
      subtitle?: string;
    };
    cards?: Array<{
      id?: string | number;
      title?: string;
      category?: string;
      icon?: string;
      features?: string[];
    }>;
  };
  tailoredOffshore?: {
    header?: {
      title?: string;
      middleTitle?: string;
      lastTitle?: string;
      description?: string;
    };
    cards?: Array<{
      id?: string | number;
      title?: string;
      description?: string;
      bgPattern?: string;
    }>;
  };
  hiringProcess?: {
    header?: {
      mainTitle?: string;
      highlightTitle?: string;
      subtitle?: string;
    };
    steps?: Array<{
      id?: string | number;
      title?: string;
      description?: string;
    }>;
  };
  programmerSkills?: {
    header?: {
      mainTitle?: string;
      highlightTitle?: string;
      subtitle?: string;
      brandName?: string;
    };
    cards?: Array<{
      id?: string | number;
      title?: string;
      icon?: string;
      skills?: string[];
    }>;
  };
  cutCostNotTalent?: {
    title?: string;
    highlight?: string;
    lgImage1?: string;
    lgImage2?: string;
    lgImage3?: string;
    lgImage4?: string;
    smImage1?: string;
    smImage2?: string;
    smImage3?: string;
    smImage4?: string;
    description?: string;
    backgroundImage?: string;
    buttonText?: string;
    buttonLink?: string;
  };
  outsourcing?: {
    slides?: Array<{
      title?: string;
      MiddleTitle?: string;
      lastTitle?: string;
      description?: string;
      items?: Array<{
        title?: string;
        description?: string;
        image?: string;
        hoverImage?: string;
      }>;
    }>;
  };
  whyChooseTechionik?: {
    title?: string;
    middleTitle?: string;
    description?: string;
    items?: Array<{
      id?: string | number;
      title?: string;
      description?: string;
    }>;
  };
  emergingTechnologies?: {
    title?: string;
    middleTitle?: string;
    lastTitle?: string;
    description?: string;
    items?: Array<{
      title?: string;
      description?: string;
      image?: string;
    }>;
    buttonLabel?: string;
    buttonLink?: string;
  };
} & Record<string, unknown>;

type HireDevelopersPageProps = {
  pageData?: PageData | null;
  schema?: string | null;
};

type NavLink = {
  label: string;
  href: string;
};

type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

type ServiceLine = {
  title: string;
  description: string;
};

type WhyChooseCard = {
  title: string;
  description: string;
};

type BulletCard = {
  title: string;
  bullets: string[];
};

type AiProcessStep = {
  step: string;
  title: string;
  description: string;
  bullets?: string[];
};

const navLinks: NavLink[] = [
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Technologies", href: "#technologies-we-use" },
  { label: "Workflow", href: "#workflow" },
  { label: "Industries", href: "#solutions" },
  { label: "Solutions", href: "#solutions" },
  { label: "Outsourcing Models", href: "#outsourcing-models" },
  { label: "AI Developers", href: "#ai-developers" },
  { label: "Case Study", href: "#case-study" },
];

const trustedLogos = [
  { src: "/icons/layoffhubai.svg", alt: "Layoffhub.ai" },
  { src: "/icons/Pergola-Plus.svg", alt: "Pergola Plus" },
  { src: "/icons/RMG.svg", alt: "RMG" },
  { src: "/icons/Assetra.svg", alt: "Assetra" },
  { src: "/icons/upwork.svg", alt: "Upwork" },
];

const hiringJourney: ProcessStep[] = [
  {
    id: "01",
    title: "Request Review",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
  },
  {
    id: "02",
    title: "Initial Screening",
    description:
      "We shortlist candidates based on skills, experience, and alignment with your product goals.",
  },
  {
    id: "03",
    title: "Setting up Interviews",
    description:
      "We arrange focused interviews so you can evaluate technical fit, communication, and team chemistry.",
  },
  {
    id: "04",
    title: "Interview Vetted Candidates",
    description:
      "You meet the best candidates and confirm the offshore developers who are the right match for your roadmap.",
  },
  {
    id: "05",
    title: "Contract Review",
    description:
      "We finalize commercial terms, scope, and onboarding details so delivery starts with complete clarity.",
  },
  {
    id: "06",
    title: "Pay and Let's Start",
    description:
      "Once everything is approved, your dedicated developers are ready to join your team and start delivery.",
  },
];

const serviceExpertise: ServiceLine[] = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions that align with your roadmap, business goals, and delivery timelines.",
  },
  {
    title: "MVP Development",
    description:
      "Fast, reliable product builds designed to validate ideas and reach the market sooner.",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Scalable software systems built for complex operations, security, and long-term growth.",
  },
  {
    title: "Cloud Applications",
    description:
      "Secure cloud-native applications that support modern teams, automation, and growth.",
  },
  {
    title: "Web, Desktop and Mobile App Development",
    description:
      "Cross-platform engineering for web, desktop, and mobile experiences that feel consistent.",
  },
  {
    title: "SaaS Development",
    description:
      "Subscription-ready software products with product-market fit, reliability, and scale in mind.",
  },
  {
    title: "Custom APIs Development",
    description:
      "Robust API layers that connect systems, simplify integrations, and extend your ecosystem.",
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "On-Demand & Instant Scalability",
    description:
      "Hire offshore developers quickly and scale the team up or down as your roadmap changes.",
  },
  {
    title: "Behavior Screening",
    description:
      "We filter for communication, ownership, and collaboration so every hire fits the team culture.",
  },
  {
    title: "150+ Pre-Vetted Offshore Developers",
    description:
      "Access a deep talent bench of engineers ready to start on frontend, backend, mobile, and cloud work.",
  },
  {
    title: "Flexible Pricing and Engagement Models",
    description:
      "Choose the model that matches budget, timeline, and governance without compromising quality.",
  },
];

const aiIntroHighlights = [
  "Pre-vetted AI talent",
  "Machine learning and NLP expertise",
  "Two-week onboarding target",
  "Startup to enterprise support",
];

const aiTechExpertiseCards: BulletCard[] = [
  {
    title: "Hire Python Developer",
    bullets: [
      "Build scalable, secure software and integrate it with your infrastructure.",
      "Extend your TECHIONIK team with cutting-edge Python expertise.",
      "Ideal for AI, automation, data pipelines, and backend systems.",
    ],
  },
  {
    title: "Hire Java Developer",
    bullets: [
      "High-performance, enterprise-ready solutions using Java, .NET, Node.js, Python, Docker, Kubernetes, and AWS.",
      "Empower innovation through a future-ready tech stack.",
      "Perfect for backend systems, cloud apps, and complex enterprise solutions.",
    ],
  },
  {
    title: "Hire iOS Developer",
    bullets: [
      "Build high-performance, scalable iOS applications using Swift, Objective-C, and modern frameworks.",
      "Integrate with cloud services, Docker, Kubernetes, and AI-powered apps.",
      "Future-ready, feature-rich mobile solutions that elevate your business.",
    ],
  },
];

const aiDeveloperSolutions: ServiceLine[] = [
  {
    title: "AI Developers for Startups",
    description:
      "We provide AI experts who help startups build MVPs, AI-powered applications, chatbots, and automation tools. Our developers work with modern frameworks like Python, TensorFlow, and OpenAI APIs to turn innovative ideas into scalable products.",
  },
  {
    title: "AI Developers for SMBs",
    description:
      "Our AI developers support small and medium businesses by implementing AI automation, predictive analytics, recommendation systems, and intelligent chatbots. We help SMBs reduce operational costs and improve productivity using smart AI solutions.",
  },
  {
    title: "AI Developers for Enterprises",
    description:
      "Leverage enterprise-grade AI development with custom machine learning models, NLP solutions, computer vision systems, and AI automation platforms. Our developers ensure secure architecture, scalable infrastructure, and reliable deployment.",
  },
];

const aiHiringSteps: AiProcessStep[] = [
  {
    step: "01",
    title: "AI Technical Assessment",
    description:
      "Our AI specialists evaluate candidates based on their expertise in:",
    bullets: [
      "Machine learning algorithms",
      "Deep learning frameworks such as TensorFlow and PyTorch",
      "Natural language processing (NLP)",
      "Data modeling and AI architecture",
      "Python programming and AI libraries",
    ],
  },
  {
    step: "02",
    title: "HR Interview",
    description:
      "In this stage we evaluate communication skills, collaboration ability, and problem-solving mindset.",
    bullets: [
      "AI project experience",
      "Ability to work in agile teams",
      "Understanding of business use cases for AI",
      "Communication and collaboration skills",
    ],
  },
  {
    step: "03",
    title: "AI Technical Interview",
    description:
      "Our senior AI architects conduct a deep technical interview covering:",
    bullets: [
      "Machine learning model development",
      "AI system architecture design",
      "Model training and evaluation",
      "Data engineering and pipelines",
      "AI deployment and optimization",
    ],
  },
];

const aiTechnicalSkills = [
  "Strong expertise in Python, R, and AI programming frameworks.",
  "Experience with machine learning, deep learning, and neural networks.",
  "Knowledge of natural language processing (NLP) and computer vision.",
  "Experience building AI models, predictive analytics, and recommendation systems.",
  "Expertise in AI deployment, MLOps, and cloud platforms (AWS, Azure, GCP).",
];

const aiNonTechnicalSkills = [
  "Strong analytical thinking and problem-solving ability.",
  "Ability to translate business problems into AI solutions.",
  "Excellent collaboration with product and data teams.",
  "Clear communication for complex AI concepts.",
  "Continuous learning of new AI technologies and innovations.",
];

const aiCooperationModels: BulletCard[] = [
  {
    title: "AI Development Outsourcing",
    bullets: [
      "Build AI-powered applications with experienced AI engineers.",
      "Skilled AI developers with expertise in machine learning and deep learning.",
      "AI model training, testing, and deployment.",
      "End-to-end AI development services.",
      "Full-cycle project management and delivery assurance.",
    ],
  },
  {
    title: "Dedicated AI Development Team",
    bullets: [
      "Full-stack AI development handled with expertise.",
      "Skilled AI engineers integrated with your internal team.",
      "Perfect for long-term AI development projects.",
      "Agile AI development process.",
      "Faster product innovation using AI technologies.",
    ],
  },
  {
    title: "AI Automation Outsourcing",
    bullets: [
      "Automate business operations with intelligent AI systems.",
      "AI workflow automation and smart process optimization.",
      "AI chatbots and virtual assistants.",
      "AI-powered analytics and predictive systems.",
      "Reduced operational costs using automation.",
    ],
  },
  {
    title: "AI Product Development Team",
    bullets: [
      "Build intelligent AI products with a dedicated development team.",
      "Custom AI product development.",
      "AI SaaS platform development.",
      "AI recommendation engines.",
      "AI integration with existing systems.",
    ],
  },
];

const aiWhyChooseCards: WhyChooseCard[] = [
  {
    title: "On-Demand AI Scalability",
    description:
      "With TECHIONIK, you can quickly hire AI developers within days and scale your AI team based on project requirements.",
  },
  {
    title: "AI Talent Screening",
    description:
      "Our AI engineers pass strict technical screening including machine learning algorithms, NLP, deep learning frameworks, and data modeling.",
  },
  {
    title: "150+ Pre-Vetted AI Developers",
    description:
      "Access a global pool of AI engineers, machine learning specialists, and data scientists ready to build intelligent solutions.",
  },
  {
    title: "Flexible AI Engagement Models",
    description:
      "Choose from AI outsourcing, dedicated AI teams, or project-based AI development depending on your business needs.",
  },
];

const aiFaqs = [
  {
    question: "How quickly can I hire AI developers from Techionik?",
    answer:
      "Our pre-vetted AI developers can typically join your team in about two weeks, depending on the exact skills and team size you need.",
  },
  {
    question: "What AI skills do your developers bring?",
    answer:
      "Our developers work with machine learning, deep learning, NLP, computer vision, automation, predictive analytics, Python, TensorFlow, PyTorch, and OpenAI APIs.",
  },
  {
    question: "Can I hire developers for front-end, back-end, or full-stack work too?",
    answer:
      "Yes. We can provide front-end, back-end, and full-stack developers alongside AI specialists so you can build complete product teams.",
  },
  {
    question: "Do you work with startups and enterprise teams?",
    answer:
      "Absolutely. We support startups, SMBs, and enterprise organizations with engagement models that match the scope, speed, and governance requirements of each team.",
  },
  {
    question: "How do you screen AI developers?",
    answer:
      "Candidates go through an AI technical assessment, an HR interview, and a senior technical interview before they are added to the team.",
  },
  {
    question: "Can your developers work in my time zone?",
    answer:
      "Yes. We build distributed teams that can align with your preferred time zone and collaboration style for smoother delivery.",
  },
  {
    question: "Can I scale the team up or down during the project?",
    answer:
      "Yes. Our engagement models are flexible, so you can expand or reduce the team as priorities change without restarting the entire project.",
  },
  {
    question: "What makes Techionik a good AI hiring partner?",
    answer:
      "We combine pre-vetted talent, transparent hiring, AI engineering experience, and flexible engagement models so you can move faster without sacrificing quality.",
  },
];

const techStackData = {
  headingData: {
    title: "Technologies",
    middleTitle: " We Use",
    description:
      "Languages, frameworks, platforms, and tools we use to engineer scalable, secure, and high-performing web solutions.",
  },
  filters: [
    "Frontend",
    "Full Stack",
    "Backend",
    "Mobile App",
    "Automation",
    "Platforms",
    "AI & ML",
  ],
  techIcons: [
    { name: "React", icon: "/icons/react.svg", category: ["Frontend", "Full Stack"] },
    { name: "Angular", icon: "/icons/angular.svg", category: ["Frontend", "Full Stack"] },
    { name: "Vue", icon: "/icons/vuejs.svg", category: ["Frontend"] },
    { name: "JavaScript", icon: "/icons/java-script.svg", category: ["Frontend", "Full Stack"] },
    { name: "Node.js", icon: "/icons/nodejs.svg", category: ["Backend", "Full Stack", "Automation"] },
    { name: "Python", icon: "/icons/php.svg", category: ["Backend", "AI & ML", "Automation"] },
    { name: "Java", icon: "/icons/java.svg", category: ["Backend", "Full Stack"] },
    { name: "iOS", icon: "/icons/iso.svg", category: ["Mobile App"] },
    { name: "Cloud", icon: "/icons/cloud.svg", category: ["Platforms", "Automation"] },
    { name: "AI", icon: "/icons/ai-brain.svg", category: ["AI & ML"] },
    { name: "C++", icon: "/icons/c++.svg", category: ["Backend", "Full Stack"] },
    { name: "CSS", icon: "/icons/css.svg", category: ["Frontend"] },
  ],
} satisfies TechStackData;

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.05] ${
          centered ? "mx-auto max-w-4xl" : "max-w-5xl"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8 ${
            centered ? "mx-auto max-w-4xl" : "max-w-4xl"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
  centered = true,
}: {
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
  centered?: boolean;
}) {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#121214] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt="banner background"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,83,35,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_35%)]" />
          </div>

          <div
            className={`relative z-10 flex min-h-[260px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10 lg:px-16 ${
              centered ? "lg:min-h-[360px]" : "lg:min-h-[320px] lg:items-start lg:text-left"
            }`}
          >
            <div className="max-w-4xl space-y-5">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
                {title}
              </h3>
              <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                {description}
              </p>
            </div>

            <Link
              href={buttonHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 pl-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <span>{buttonText}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F05323]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiCard({
  title,
  step,
  children,
}: {
  title: string;
  step?: string;
  children: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121214] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:p-8">
      {step ? (
        <div className="mb-5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-sm font-semibold text-white">
          {step}
        </div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
        {children}
      </div>
    </article>
  );
}

function WorkflowGlassCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="relative isolate h-[452px] w-full max-w-[350px] overflow-visible rounded-[24px]">
      <div className="absolute -inset-[26px] rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_54%),radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_68%)] blur-[24px] opacity-70" />
      <div className="absolute inset-0 rounded-[24px] border border-white/12 bg-[rgba(16,16,18,0.82)] shadow-[0_22px_60px_rgba(0,0,0,0.65)] backdrop-blur-[40px]" />
      <div className="absolute inset-[1px] rounded-[23px] bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_32%,rgba(255,255,255,0.01)_100%)]" />
      <div className="relative z-10 flex h-full flex-col px-6 py-[22px] sm:px-7 sm:py-6">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
          Request Review
        </div>

        <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#ff8b4c_0%,#f05323_100%)] shadow-[0_12px_30px_rgba(240,83,35,0.34)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 5.5c0-1.1-.9-2-2-2H6C4.9 3.5 4 4.4 4 5.5v8c0 1.1.9 2 2 2h2.4l2.7 2.5c.4.4 1 .4 1.4 0L15.2 15H18c1.1 0 2-.9 2-2v-7.5Z"
              fill="#111111"
            />
            <path d="M8 8.5h8" stroke="#F5F5F5" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8 11.5h5.5" stroke="#F5F5F5" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.05em] text-white sm:text-[1.5rem]">
          {title}
        </h3>
        <p className="mt-5 max-w-[20ch] text-[0.95rem] leading-6 text-white/70">
          {description}
        </p>
      </div>
    </article>
  );
}

function WorkflowStackArt() {
  const slabGroups = hiringJourney.map((step, index) => ({
    ...step,
    translateY: index * 94,
    translateX: index === 0 ? 0 : -8,
    active: index === 0,
  }));

  return (
    <div className="relative h-[640px] w-full overflow-visible">
      <svg
        viewBox="0 0 720 640"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="Stacked workflow illustration"
      >
        <defs>
          <linearGradient id="workflowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F05323" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#F05323" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="topOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A33" />
            <stop offset="100%" stopColor="#E14010" />
          </linearGradient>
          <linearGradient id="leftOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D44A1B" />
            <stop offset="100%" stopColor="#7F2A10" />
          </linearGradient>
          <linearGradient id="rightOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C53D13" />
            <stop offset="100%" stopColor="#9E300E" />
          </linearGradient>
          <linearGradient id="topDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#23232B" />
            <stop offset="100%" stopColor="#14141A" />
          </linearGradient>
          <linearGradient id="leftDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111116" />
            <stop offset="100%" stopColor="#09090D" />
          </linearGradient>
          <linearGradient id="rightDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D1D24" />
            <stop offset="100%" stopColor="#17171D" />
          </linearGradient>
          <filter id="slabShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="14"
              floodColor="#000000"
              floodOpacity="0.45"
            />
          </filter>
          <filter id="topGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        <ellipse cx="330" cy="70" rx="210" ry="58" fill="url(#workflowGlow)" filter="url(#topGlow)" opacity="0.9" />

        {slabGroups.map((layer) => (
          <g
            key={layer.id}
            transform={`translate(${layer.translateX} ${layer.translateY})`}
            filter="url(#slabShadow)"
          >
            <polygon
              points="52,28 474,0 684,116 262,144"
              fill={layer.active ? "url(#topOrange)" : "url(#topDark)"}
            />
            <polygon
              points="52,28 262,144 262,206 52,90"
              fill={layer.active ? "url(#leftOrange)" : "url(#leftDark)"}
            />
            <polygon
              points="474,0 684,116 684,178 474,62"
              fill={layer.active ? "url(#rightOrange)" : "url(#rightDark)"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function normalizeHiringCards(
  cards: Array<{
    id?: string | number;
    title?: string;
    category?: string;
    icon?: string;
    features?: string[];
  }>,
): HiringCardFeature[] {
  return cards.map((card, index) => ({
    id: typeof card.id === "number" ? card.id : index + 1,
    title: card.title ?? "",
    category: card.category ?? "",
    icon: card.icon ?? "",
    features: card.features ?? [],
  }));
}

function normalizeFaqItems(
  faqItems: Array<{
    id?: string | number;
    question?: string;
    answer?: string;
  }>,
): FAQData["faq"] {
  return faqItems.map((item, index) => ({
    id: typeof item.id === "number" ? item.id : index + 1,
    question: item.question ?? "",
    answer: item.answer ?? "",
  }));
}

export default function HireDevelopersPage({
  pageData,
  schema,
}: HireDevelopersPageProps) {
  const heroImage =
    pageData?.hero?.image || "/images/how-we-work/team-discussion.jpg";
  const heroDescription =
    pageData?.hero?.description ||
    "Partner with TECHIONIK, your premier destination to hire offshore developers, and save your software development costs by up to 50%.";

  const heroFormTitle = "Share What's in Your Mind";
  const heroFormDescription =
    "Please fill out the form, and we'll get back to you within a couple of business hours.";

  const processCard = hiringJourney[0];
  const faqData = {
    mainTitle: "Software Development",
    spanTitle: "FAQs",
    faq: pageData?.faq ? normalizeFaqItems(pageData.faq) : faqsData.faq,
  };
  const aiFaqData = {
    mainTitle: "Hire AI Developers",
    spanTitle: "FAQs",
    faq: normalizeFaqItems(aiFaqs),
  };
  const hiringPageCards = pageData?.hiringPageData?.cards
    ? normalizeHiringCards(pageData.hiringPageData.cards)
    : hiringData.cards;

  return (
    <main className={`${sfPro.className} overflow-x-hidden bg-black text-white`}>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ) : null}

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hire offshore developers hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80 blur-[1px]"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(240,83,35,0.14),transparent_26%),radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(240,83,35,0.12),transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid min-h-[760px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="pt-10 lg:pt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#F05323]" />
                Get in touch with us
              </div>

              <h1 className="mt-8 max-w-[12ch] text-[clamp(3.3rem,6.5vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
                Hire{" "}
                <span className="bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#B6B6B6_65%,#F05323_120%)] bg-clip-text text-transparent">
                  Offshore
                </span>{" "}
                Developers
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg lg:text-xl">
                {heroDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                  Pre-vetted offshore talent
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                  Scale teams in days, not months
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                  Start with clear next steps
                </span>
              </div>
            </div>

            <div className="w-full justify-self-end lg:max-w-[540px]">
              <HiringInquiryForm
                title={heroFormTitle}
                description={heroFormDescription}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b0b0d]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex gap-3 overflow-x-auto pb-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === 0
                    ? "bg-[#26262B] text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-5 rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md">
            {trustedLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={48}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="hire-dedicated-developer" className="scroll-mt-28">
        <HiringCard
          data={{
            header: {
              mainTitle: pageData?.hiringPageData?.header?.mainTitle || hiringData.header.mainTitle,
              highlightTitle:
                pageData?.hiringPageData?.header?.highlightTitle ||
                hiringData.header.highlightTitle,
              subtitle:
                pageData?.hiringPageData?.header?.subtitle ||
                hiringData.header.subtitle,
            },
            cards: hiringPageCards,
          }}
        />
      </div>

      <section id="workflow" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px]">
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#B7B7B7] sm:text-4xl lg:text-[4rem] lg:leading-[1.02]">
              <span className="block">How you can hire offshore</span>
              <span className="block">
                <span className="text-[#F05323]">developers</span> through{" "}
                <span className="text-[#D7D7D7]">TECHIONIK</span>?
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Explore and follow our simplified and transparent hiring
              procedures to hire developers from us.
            </p>
          </div>

          <div className="mt-16 hidden xl:grid grid-cols-[350px_minmax(0,1fr)] items-start gap-10">
            <WorkflowGlassCard
              title={processCard.title}
              description={processCard.description}
            />

            <div className="grid grid-cols-[minmax(0,1fr)_280px] items-start gap-6 xl:gap-8">
              <WorkflowStackArt />

              <div className="flex h-[640px] flex-col justify-between py-8">
                {hiringJourney.map((step) => (
                  <div key={step.id} className="flex items-center gap-4">
                    <div className="h-px w-24 border-t border-dashed border-white/25" />
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.35)] ${
                        step.id === "01"
                          ? "border-[#F05323]/70 bg-[#F05323] text-white"
                          : "border-white/10 bg-[#2a2a30] text-white/70"
                      }`}
                    >
                      {step.id}
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.02em] text-[#AFAFAF]">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 xl:hidden lg:grid-cols-[350px_minmax(0,1fr)]">
            <WorkflowGlassCard
              title={processCard.title}
              description={processCard.description}
            />

            <div className="space-y-4">
              {hiringJourney.map((step) => (
                <div
                  key={step.id}
                  className="relative rounded-[26px] border border-white/10 bg-[#121214] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F05323]/70 bg-[#F05323] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(240,83,35,0.35)]">
                      {step.id}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                        {step.title}
                      </h4>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Build Your Dream Tech Team Offshore"
        description="Access pre-vetted developers across top tech stacks and accelerate your projects with a delivery model built for speed and confidence."
        buttonText="Hire Developer Now"
        buttonHref="/contact-us"
        backgroundImage="/images/home/dedicated-team.png"
      />

      <section id="solutions" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={
              <>
                What types of software services our developers have expertise
                on?
              </>
            }
            description="Our developers have all the expertise to provide comprehensive end-to-end software services. Here we list down some of them for you."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#16161A] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/home/Software-Development.webp"
                alt="Software development services"
                width={900}
                height={620}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(240,83,35,0.18),transparent_35%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  End-to-end delivery
                </p>
                <p className="mt-2 max-w-xl text-lg leading-8 text-white/80">
                  Software services designed to support product teams, scale
                  operations, and turn complex ideas into reliable platforms.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#16161A] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
              <div className="space-y-4">
                {serviceExpertise.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex gap-4 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10 ${
                      index === 0 ? "border-[#F05323]/35" : ""
                    }`}
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F05323]/15 text-[#F05323]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-7 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="technologies" className="scroll-mt-28">
        <HiringCard
          data={{
            header: {
              mainTitle: TechexpertTechStack.header.mainTitle,
              highlightTitle: TechexpertTechStack.header.highlightTitle,
              subtitle: TechexpertTechStack.header.subtitle,
            },
            cards: TechexpertTechStack.cards,
          }}
        />
      </div>

      <div id="outsourcing-solutions" className="scroll-mt-28">
        <TailoredSolutions data={tailoredSolutions} />
      </div>

      <section id="technologies-we-use" className="scroll-mt-28 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HireTechStack data={techStackData} />
        </div>
      </section>

      <CtaBanner
        title="Cut Costs, Not Talent"
        description="Hire skilled offshore developers who work in your time zone and deliver high-performance results, fast."
        buttonText="Build Your Offshore Team Now"
        buttonHref="/contact-us"
        backgroundImage="/banners/hero1.png"
      />

      <section id="outsourcing-models" className="scroll-mt-28 py-12 sm:py-16">
        <OutsourcingModels data={outsourcingModelsData} />
      </section>

      <section id="why-choose-us" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose TECHIONIK For Offshore Software Development Partner?"
            description="We have outlined several reasons that make our approach unique from our competitors."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseCards.map((card, index) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#16161A] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,83,35,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_38%)]" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-[#F05323]">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-study" className="scroll-mt-28 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OurClientSays />
        </div>
      </section>

      <section id="ai-developers" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#121214_0%,#17171b_55%,#0d0d10_100%)] px-6 py-10 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,83,35,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_35%)]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Hire AI Developers
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.05]">
                Hire AI Developers for Custom AI & Machine Learning Solutions
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                We help businesses create AI and machine learning solutions
                that grow with your operations, automate key processes, and
                drive smarter, faster results. Our pre-vetted AI developers can
                join your team in just two weeks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {aiIntroHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            <section className="scroll-mt-28">
              <SectionHeading
                title="Technical Experts in Various Tech Stacks"
                description={
                  <>
                    <p>
                      Leverage top-tier global talent to enhance innovation
                      and execution across your AI, backend, cloud, and mobile
                      projects.
                    </p>
                  </>
                }
                centered
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {aiTechExpertiseCards.map((card) => (
                  <AiCard key={card.title} title={card.title}>
                    <ul className="space-y-3">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05323]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </AiCard>
                ))}
              </div>
            </section>

            <section className="scroll-mt-28">
              <SectionHeading
                title="Our Tailored AI Development Solutions for Businesses of All Sizes"
                description="Expand your business with expert AI developers who build intelligent automation, machine learning models, and scalable AI solutions for startups, SMBs, and enterprises."
                centered
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {aiDeveloperSolutions.map((card) => (
                  <AiCard key={card.title} title={card.title}>
                    <p>{card.description}</p>
                  </AiCard>
                ))}
              </div>
            </section>

            <section className="scroll-mt-28">
              <SectionHeading
                title="How We Hire AI Developers"
                description="Our technical recruitment team follows a strict process to hire the best AI engineers and machine learning experts."
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {aiHiringSteps.map((step) => (
                  <AiCard key={step.title} title={step.title} step={step.step}>
                    <>
                      <p>{step.description}</p>
                      {step.bullets ? (
                        <div className="mt-4">
                          <ul className="space-y-3">
                            {step.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05323]" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </>
                  </AiCard>
                ))}
              </div>
            </section>

            <section className="scroll-mt-28">
              <SectionHeading
                title="Hire the Best AI Developers with TECHIONIK"
                description="Our AI outsourcing models help companies integrate advanced artificial intelligence capabilities into their products and services."
                centered
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <AiCard title="Technical AI Developer Skills">
                  <ol className="space-y-3">
                    {aiTechnicalSkills.map((skill) => (
                      <li key={skill} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05323]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ol>
                </AiCard>

                <AiCard title="Non-Technical Skills">
                  <ol className="space-y-3">
                    {aiNonTechnicalSkills.map((skill) => (
                      <li key={skill} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05323]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ol>
                </AiCard>
              </div>
            </section>

            <section className="scroll-mt-28">
              <SectionHeading
                title="Choose the Best Suitable AI Development Cooperation Model"
                description="Hire top AI experts to accelerate innovation, automate business processes, and build intelligent products powered by artificial intelligence."
                centered
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {aiCooperationModels.map((model) => (
                  <AiCard key={model.title} title={model.title}>
                    <ul className="space-y-3">
                      {model.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05323]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </AiCard>
                ))}
              </div>
            </section>

            <section className="scroll-mt-28">
              <SectionHeading
                title="Why Choose TECHIONIK for AI Development?"
                description="We deliver powerful AI software solutions and intelligent automation that help businesses innovate faster and scale globally."
                centered
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {aiWhyChooseCards.map((card, index) => (
                  <AiCard
                    key={card.title}
                    title={card.title}
                    step={`0${index + 1}`}
                  >
                    <p>{card.description}</p>
                  </AiCard>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQComponent data={aiFaqData} />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQComponent data={faqData} />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FooterContact />
        </div>
      </section>
    </main>
  );
}
