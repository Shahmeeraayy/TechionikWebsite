export type ServiceType = {
  id?: number;
  title: string;
  description: string;
  gradientText: string;
  afterGradientText: string;
  image?: string;
  services?: any[];
};

export const servicesDataAbout: ServiceType = {
title: "Cutting-Edge",
gradientText: "Innovation &",
afterGradientText: "Technology",
description:
  "Modern digital solutions rely on advanced technologies that support automation, connectivity, and intelligent data analysis. These technologies enable organizations to build scalable platforms and optimize operations.",


services:[
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Artificial intelligence and machine learning technologies analyze large datasets to identify patterns, generate predictions, and support automated decision-making. These technologies are widely used in forecasting, recommendation systems, fraud detection, and process automation.",
    image: "/images/home/ai-image.webp",
    ctaText:  "ai-machine-learning",
   ctaLink:"/services/data-science"
     
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Data science technologies help organizations analyze structured and unstructured data to identify trends, test hypotheses, and generate predictive insights. These insights support improved decision-making and operational optimization.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Data Science",
   ctaLink:"/services/data-science"
  },
  {
    id: 3,
    title: "Computer Vision",
    description:
      "Computer vision technologies analyze images and video streams to identify objects, detect patterns, and automate visual inspection processes. Using deep learning and image recognition models, organizations can improve quality monitoring, security systems, and operational analysis.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"/services/computer-vision"
  },
    {
    id: 4,
    title: "Big Data",
    description:
      "Unlock the potential of AI and Machine Learning software development with our top-level AI and ML engineers. We offer smart solutions to automate your processes, reveal hidden patterns and facilitate predictive analysis so that you always stay ahead over your competitors.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"/services/data-science"
  },
    {
    id: 5,
    title: "Blockchain Development",
    description:
      "Blockchain technology enables secure and transparent digital transactions through decentralized data systems. Solutions include distributed ledgers, smart contracts, and decentralized applications designed to improve data integrity and transaction transparency.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"/services/blockchain"
  },
    {
    id: 6,
    title: "Natural Language Processing",
    description:
      "Natural language processing enables systems to understand and analyze human language in text and speech formats. Applications include chatbots, sentiment analysis systems, document automation tools, and intelligent search platforms.",
    image: "/images/home/ai-image.webp", 
        ctaText:  "View Services",
   ctaLink:"/services/nlp"
  },
  {
    id: 7,
    title: "Internet of Things (IoT)",
    description:
    "IoT solutions connect devices, sensors, and software platforms to collect and analyze real-time operational data. Organizations use IoT technologies to automate monitoring, optimize asset performance, and improve operational visibility through connected systems.",
    image: "/images/home/ai-image.webp",
        ctaText:  "View Services",
   ctaLink:"/services/iot"
  }
]
}