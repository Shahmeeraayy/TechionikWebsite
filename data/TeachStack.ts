export type ServiceType = {
  id: number;
  title: string;
  description: string;
  image: string; 
  designation:string;
  icons: string[];
};

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Crafting pixel-perfect, responsive user interfaces with modern frameworks like React, Next.js, and Vue.js. We build intuitive web applications that deliver exceptional user experiences.",
    image: "/images/home/ai-image.webp",
    designation: "User Interface & Experience",
    icons: [
      "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  },
  {
    id: 2,
    title: "Data Science",
    description: "Transforming raw data into actionable insights using advanced analytics, machine learning, and predictive modeling. We help businesses make data-driven decisions.",
    image: "/images/home/ai-image.webp",
    designation: "Analytics & Intelligence",
    icons: [
    "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
          "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Building robust, scalable server-side applications with microservices architecture, API development, and database management for high-performance systems.",
    image: "/images/home/ai-image.webp",
    designation: "Server & Infrastructure",
    icons: [
         "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Creating cross-platform and native mobile applications for iOS and Android with seamless performance and engaging user interfaces.",
    image: "/images/home/ai-image.webp",
    designation: "iOS & Android Solutions",
    icons: [
      "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  },
  {
    id: 5,
    title: "Database Management",
    description: "Designing, implementing, and optimizing database systems for efficient data storage, retrieval, and management with high security and availability.",
    image: "/images/home/ai-image.webp",
    designation: "Storage & Optimization",
    icons: [
      "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  },
  {
    id: 6,
    title: "Natural Language Processing",
    description: "Implementing AI-powered language models for chatbots, sentiment analysis, text classification, and automated content processing.",
    image: "/images/home/ai-image.webp",
    designation: "AI Language Processing",
    icons: [
    "/icons/coding.svg",
      "/icons/coding2.svg", 
  "/icons/coding.svg",
      "/icons/coding2.svg", 
    ]
  }
];


