import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import { faqsData } from "@/data/FAQS";

export const customSoftwarePageCopy = {
  templateVariant: "default",
  meta: {
    title:
      "Custom Software Development | Techionik - Building Scalable Software for Digital Success",
    description:
      "Explore Techionik's custom software development services. We design scalable, secure, and modern software solutions that help businesses streamline operations and grow with confidence.",
    keywords: [
      "custom software development",
      "software development company",
      "scalable business software",
      "digital transformation",
      "Techionik",
    ],
    image: "/banners/Hero.webp",
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
      title: "Building Scalable Software",
      subtitle: "for Digital Success",
      description:
        "We design secure, scalable software solutions that help modern businesses move faster, streamline operations, and turn ambitious ideas into reliable digital products.",
      image: "/banners/Hero.webp",
      imageAlt: "Custom software development hero banner",
      ctaText: "Let's Discuss Your Idea",
      ctaLink: "#contact",
    },
  ] satisfies HeroSlide[],
  whatYouGet: {
    id: 1,
    title1: "Our Core Tech Stack for",
    spanTitle: "Custom Software Development",
    title2: "Services",
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
      "From discovery and architecture through launch and optimization, we turn complex business needs into clear product roadmaps and dependable delivery plans.",
    RightDescription2:
      "Our team blends modern engineering, UI/UX thinking, automation, and cloud-ready architecture to build software that is maintainable, adaptable, and ready to scale.",
    buttonLabel: "Let's Discuss Your Idea",
    buttonLink: "#contact",
  } satisfies WhatYouGett,
  softwareSolutions: {
    title: "Why Choose Techionik",
    middleTitle: "for Software Development",
    lastTitle: "",
    description:
      "We build software that drives business growth and long-term value. Our expert teams combine transparent delivery, modern engineering practices, and a product-first mindset to deliver secure, scalable digital solutions.",
    items: [
      {
        id: 1,
        title: "Global Trust & Proven Expertise",
        description:
          "Trusted by businesses that need measurable outcomes, we bring a delivery mindset shaped by years of building reliable software systems across different industries.",
        image: "/images/about/software-solution/aiLayer1.svg",
        hoverImage: "/images/about/software-solution/aiLayer1-hover.svg",
        alt: "Global Trust and Proven Expertise",
      },
      {
        id: 2,
        title: "Comprehensive Full-Cycle Development",
        description:
          "We support the full product journey, from discovery and design to engineering, testing, launch, and post-release improvements, so teams can move with confidence.",
        image: "/images/about/software-solution/aiLayer2.svg",
        hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
        alt: "Comprehensive Full-Cycle Development",
      },
      {
        id: 3,
        title: "Certified Quality & Security",
        description:
          "Security, reliability, and quality are built into every stage of delivery, helping you ship software that is resilient, compliant, and easy to maintain.",
        image: "/images/about/software-solution/aiLayer3.svg",
        hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
        alt: "Certified Quality and Security",
      },
      {
        id: 4,
        title: "Innovation & Technical Excellence",
        description:
          "We stay close to modern engineering practices, emerging AI capabilities, and cloud-native patterns so your platform stays future-ready as your business grows.",
        image: "/images/about/software-solution/aiLayer4.svg",
        hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
        alt: "Innovation and Technical Excellence",
      },
    ],
  } satisfies SoftwareSolutions,
  servicesCTA: {
    startTitle: "Streamline Your Business Operations with",
    spanTitle: "Software",
    endTitle: "Solutions",
    bgImage: "/banners/servicesCTA.png",
    description:
      "Turn manual workflows into secure, scalable digital systems with a software partner that understands product, architecture, and business growth.",
    buttonLabel: "Talk to an Expert",
    buttonUrl: "#contact",
  } satisfies ServicesCTAInterface,
  whatWeDo: {
    title: "Consistency is Key to Our Delivery Process",
    descriptiption:
      "We follow the same framework regardless of the project so teams get clarity, structure, and predictable progress from the first workshop through delivery.",
    mainDescription:
      "A shared process keeps communication simple and helps us move quickly without sacrificing quality.",
    card: [
      {
        id: 1,
        title: "Discovery",
        description:
          "<p>We map goals, users, constraints, and success metrics before design or development begins.</p>",
      },
      {
        id: 2,
        title: "Architecture",
        description:
          "<p>We shape scalable technical foundations, data flows, and delivery milestones that support the product vision.</p>",
      },
      {
        id: 3,
        title: "Build",
        description:
          "<p>We develop the solution in focused iterations with QA, review loops, and clear communication throughout.</p>",
      },
      {
        id: 4,
        title: "Optimize",
        description:
          "<p>We refine performance, expand functionality, and support long-term improvements after launch.</p>",
      },
    ],
  } satisfies WhatWeDo,
  solutionsWeDeliver: {
    title: "Solutions",
    spanTitle: "We Deliver",
    description:
      "We deliver tailored software solutions that streamline operations, strengthen collaboration, and help businesses grow with measurable impact.",
    cards: [
      {
        id: 1,
        title: "Custom Platforms",
        description: [
          "Tailored digital products designed around your workflows, users, and long-term business goals.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Enterprise Systems",
        description: [
          "Reliable internal systems that improve visibility, automation, and team productivity across the organization.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "Integrations",
        description: [
          "Connected software ecosystems that reduce duplication, share data cleanly, and keep operations moving smoothly.",
        ],
        icon: "/icons/cloud.svg",
      },
      {
        id: 4,
        title: "Cloud-Native Delivery",
        description: [
          "Modern software architectures that are secure, scalable, and easier to evolve as your product grows.",
        ],
        icon: "/icons/cloud.svg",
      },
    ],
  } satisfies SolutionWeDeliver,
  industries: {
    title: "We Help Businesses ",
    gradientTitle: "Use Technology to Grow, ",
    afterGradientTitle: "Innovate, and Succeed",
    description:
      "We build industry-aware software that supports efficient workflows, better decision-making, and digital experiences tailored to each sector.",
    slides: [
      {
        title: "Healthcare",
        description:
          "Patient-focused software, operational tools, and secure data systems that modernize care delivery.",
        icon: "",
        link: "/industries/healthcare",
        bgImage: "/banners/Hero.webp",
      },
      {
        title: "Finance",
        description:
          "Secure, scalable platforms for financial operations, reporting, compliance, and customer-facing services.",
        icon: "",
        link: "/industries/finance",
        bgImage: "/banners/hero1.png",
      },
      {
        title: "Retail",
        description:
          "Commerce and workflow systems that improve customer experience, inventory visibility, and team efficiency.",
        icon: "",
        link: "/industries/retail",
        bgImage: "/banners/dollers.webp",
      },
      {
        title: "Manufacturing",
        description:
          "Operational software that supports production planning, asset tracking, and process automation.",
        icon: "",
        link: "/industries/manufacturing",
        bgImage: "/banners/buissness-banner.webp",
      },
    ],
  } satisfies IndustriesData,
  faq: {
    mainTitle: faqsData.mainTitle,
    spanTitle: faqsData.spanTitle,
    faq: faqsData.faq,
  },
};
