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
  title: "Emerging",
  gradientText: "Innovation &",
  afterGradientText: "Disruptive Technologies",
  description:
    "We design responsive, high-performance websites and digital solutions using modern technologies to enhance user experiences and drive business growth.",

  services: [
    {
      id: 1,
      title: "AI & ML",
      description:
        "Collect, process, and analyze large datasets to uncover patterns and intelligent insights. Our experts apply artificial intelligence and machine learning to build predictive models, automate decision-making, enhance forecasting, and transform business processes through data-driven intelligence.",
      image: "/images/home/ai-image.webp",
      ctaText: "View AI & ML",
      ctaLink: "/services/data-science",
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Data science services help organizations uncover meaningful insights from complex datasets through advanced analytics, machine learning, and predictive modeling. Our experts analyze patterns, run data experiments, and build intelligent models that support informed decisions, improve performance, and reveal new opportunities across business operations.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Science",
      ctaLink: "/services/data-science",
    },
    {
      id: 3,
      title: "Computer Vision",
      description:
        "Computer vision solutions analyze images and video streams to extract actionable insights, helping organizations detect objects, recognize patterns, and automate visual inspection. Using deep learning, image recognition, and AI-powered video analytics, we transform visual data into intelligence that improves operational visibility, quality monitoring, and faster decision-making.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Services",
      ctaLink: "/services/computer-vision",
    },
    {
      id: 4,
      title: "Big Data",
      description:
        "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Services",
      ctaLink: "/services/data-science",
    },
    {
      id: 5,
      title: "Build BlockChain",
      description:
        "Build blockchain solutions that improve data integrity, transaction transparency, and digital trust. We develop decentralized applications, smart contracts, and distributed ledger platforms that help organizations manage assets, verify transactions, and process data faster across secure and transparent blockchain networks.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Services",
      ctaLink: "/services/blockchain",
    },
    {
      id: 6,
      title: "Natural Language Processing",
      description:
        "Natural language processing solutions help organizations transform unstructured text and speech into valuable insights. Our experts develop AI-driven NLP applications for chatbots, sentiment analysis, document understanding, and intelligent search using machine learning, deep learning, and advanced language models.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Services",
      ctaLink: "/services/nlp",
    },
    {
      id: 7,
      title: "Internet of Things (IoT)",
      description:
        "Internet of Things solutions connect devices, sensors, and platforms to collect, store, and analyze real-time data. We help organizations build smart operations, automate monitoring, optimize asset performance, and gain actionable insights through connected systems, intelligent analytics, and scalable IoT architectures.",
      image: "/images/home/ai-image.webp",
      ctaText: "View Services",
      ctaLink: "/services/iot",
    },
  ],
};
