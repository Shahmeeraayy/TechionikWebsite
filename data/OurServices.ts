import cloudIcon from "../public/icons/cloud.svg";
 export interface ServiceType {
  id: number;
  title: string;
  description: string;
  points: string[];
  icon: string; // path to icon
}

 export const services: ServiceType[] = [
  {
    id: 1,
    title: "Cloud Services",
    description:
      "Unlock the power of the cloud with CodersWire’s comprehensive cloud solutions. We provide scalable, secure, and cost-effective cloud services that enable businesses to enhance agility, reduce costs, and improve operational efficiency.",
    points: [
      "Cloud Consulting",
      "Cloud Application Development",
      "Cloud Security Consulting",
      "Configuration Management",
      "Cloud Migration",
      "Cloud Infrastructure Management",
    ],
    icon: `${cloudIcon.src}`,
  },
  
  {
    id: 2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, ensuring scalability and performance.",
    points: ["Custom Applications", "Web Development", "Mobile Apps"],
   icon: `${cloudIcon.src}`,
  },
  {
    id: 3,
    title: "Application Development",
    description: "Build robust applications to streamline business operations.",
    points: ["Web Apps", "Mobile Apps", "API Integrations"],
   icon: `${cloudIcon.src}`,
  },
  {
    id: 4,
    title: "QA Testing",
    description: "Ensure the highest quality of your software products.",
    points: ["Manual Testing", "Automation Testing", "Performance Testing"],
       icon: `${cloudIcon.src}`,
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights.",
    points: ["Data Visualization", "Business Intelligence", "Predictive Analytics"],
   icon: `${cloudIcon.src}`,
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Create user-friendly interfaces and engaging experiences.",
    points: ["UI Design", "UX Research", "Prototyping"],
   icon: `${cloudIcon.src}`,
  },
  {
    id: 7,
    title: "IT Consulting",
    description: "Expert IT guidance to help you make the right decisions.",
    points: ["Strategy Planning", "System Integration", "Risk Management"],
    icon: `${cloudIcon.src}`,
  },
];