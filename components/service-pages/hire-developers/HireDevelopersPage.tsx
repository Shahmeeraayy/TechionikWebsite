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
import { TechexpertTechStack } from "@/data/TechnicalexpertTechStack";
import { tailoredSolutions } from "@/data/solutionsData";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { faqsData } from "@/data/FAQS";
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
      id?: string;
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
      id?: string;
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
      id?: number;
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
      id?: string;
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
      id?: string;
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

const navLinks: NavLink[] = [
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Technologies", href: "#technologies-we-use" },
  { label: "Workflow", href: "#workflow" },
  { label: "Industries", href: "#solutions" },
  { label: "Solutions", href: "#solutions" },
  { label: "Outsourcing Models", href: "#outsourcing-models" },
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
    title: "Pay and Let’s Start",
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
    faq: pageData?.faq || faqsData.faq,
  };

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
            cards: pageData?.hiringPageData?.cards || hiringData.cards,
          }}
        />
      </div>

      <section id="workflow" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={
              <>
                How You Can Hire Offshore Developers Through{" "}
                <span className="bg-[linear-gradient(90deg,#F05323_0%,#F2F2F2_100%)] bg-clip-text text-transparent">
                  TECHIONIK
                </span>
                ?
              </>
            }
            description="Explore and follow our simplified and transparent hiring procedures to hire developers from us."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#16161A] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
              <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#F05323]/10 blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Request Review
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  {processCard.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/70">
                  {processCard.description}
                </p>
              </div>
            </article>

            <div className="relative">
              <div className="absolute left-6 top-4 bottom-4 hidden border-l border-dashed border-white/10 lg:block" />
              <div className="space-y-4">
                {hiringJourney.map((step) => (
                  <div
                    key={step.id}
                    className="relative rounded-[26px] border border-white/10 bg-[#121214] p-6 pl-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:p-7 sm:pl-7 lg:pl-20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F05323]/70 bg-[#F05323] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(240,83,35,0.35)]">
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
