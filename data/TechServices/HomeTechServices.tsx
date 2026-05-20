export type ServiceType = {
  id?: number;
  title: string;
  description: string;
  gradientText: string;
  afterGradientText: string;
  image?: string;
  services: {
    id: number;
    title: string;
    description: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
    imageAlt?: string;
  }[];
};

export const servicesDataHome: ServiceType = {
  title: "Cutting-Edge",
  gradientText: "Innovation & Technology",
  afterGradientText: "",
  description:
    "Get experts in 100+ technologies. Cover any tech stack.",
  services: [
    {
      id: 1,
      title: "AI & ML",
      description:
        "Build predictive models, automate decision-making, and transform business processes through data-driven intelligence.",
      image: "/images/home/ai-image.webp",
      ctaText: "View AI & ML",
      ctaLink: "/technology",
    },
    {
      id: 2,
      title: "Internet of Things (IoT)",
      description:
        "Connect devices, sensors, and platforms to collect, store, and analyze real-time data at scale.",
      image: "/images/home/ai-image.webp",
      ctaText: "View IoT",
      ctaLink: "/technology",
    },
    {
      id: 3,
      title: "Computer Vision",
      description:
        "Analyze images and video streams to detect objects, recognize patterns, and automate visual inspection.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Computer Vision",
      ctaLink: "/technology",
    },
    {
      id: 4,
      title: "Data Science",
      description:
        "Analyze patterns, run data experiments, and build intelligent models that support informed decisions.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Data Science",
      ctaLink: "/technology",
    },
    {
      id: 5,
      title: "Blockchain",
      description:
        "Develop decentralized applications, smart contracts, and distributed ledger platforms that improve data integrity and digital trust.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Blockchain",
      ctaLink: "/technology",
    },
    {
      id: 6,
      title: "Natural Language Processing (NLP)",
      description:
        "Transform unstructured text and speech into valuable insights with AI-driven NLP applications.",
      image: "/images/home/ai-image.webp",
      ctaText: "View NLP",
      ctaLink: "/technology",
    },
  ],
};
