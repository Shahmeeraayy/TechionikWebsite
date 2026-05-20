export interface SolutionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  alt: string;
}

export interface SoftwareSolutions {
  title: string;
  middleTitle: string;
  description: string;
  lastTitle?: string;
  items: SolutionItem[]
}


export const softwaresolutionData: SoftwareSolutions = {
  title: "Solutions",
  middleTitle: "We",
  lastTitle: "Deliver",
  description:
    " We IT-enable B2B and B2C interactions while optimizing internal operations with modern, secure, and scalable digital solutions.",

  items: [
    {
      id: 1,
      title: "Enterprise Applications",
      description: "<ul> <li>We develop enterprise applications that integrate business </li><li>We develop enterprise applications that integrate business </li><li>We develop enterprise applications that integrate business </li></ul>",
      image: "/images/about/software-solution/aiLayer1.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "Enterprise Applications",
    },
    {
      id: 2,
      title: "ERP",
      description: "Our ERP solutions integrate finance, operations, procurement, and human resources into a single system, giving businesses real-time visibility, better planning, and improved operational efficiency across departments and workflows.",
      image: "/images/about/software-solution/aiLayer2.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "ERP",
    },
    {
      id: 3,
      title: "Financial Management",
      description: "Our financial management software helps organizations control budgets, track expenses, manage accounting processes, and gain real-time financial insights through automated reporting, analytics, and secure digital financial operations.",
      image: "/images/about/software-solution/aiLayer3.svg",
      hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
      alt: "Financial Management",
    },
    {
      id: 4,
      title: "Supply Chain Management",
      description: "We build supply chain management solutions that improve procurement, inventory tracking, logistics coordination, and demand planning, helping businesses increase visibility, reduce costs, and optimize end-to-end supply chain operations.",
      image: "/images/about/software-solution/aiLayer4.svg",
      hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
      alt: "Supply Chain Management",
    },
    {
      id: 5,
      title: "Asset Management",
      description: "Our asset management software helps organizations track equipment, monitor asset performance, schedule maintenance, and manage lifecycle costs, improving operational efficiency and maximizing the value of critical business assets.",
      image: "/images/about/software-solution/aiLayer1.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "Asset Management",
    },
    {
      id: 6,
      title: "Fleet Management",
      description: "Fleet management solutions help companies track vehicles, monitor fuel usage, manage maintenance schedules, and optimize routes using GPS tracking and analytics to improve efficiency and reduce transportation costs.",
      image: "/images/about/software-solution/aiLayer2.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "Fleet Management",
    },
    {
      id: 7,
      title: "HR Software",
      description: "Our HR software streamlines recruitment, employee records, payroll management, and performance tracking, helping organizations manage their workforce efficiently while improving employee engagement and HR operational productivity.",
      image: "/images/about/software-solution/aiLayer3.svg",
      hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
      alt: "HR Software",
    },
    {
      id: 8,
      title: "eLearning Software",
      description: "We develop eLearning software that supports online training, course management, and interactive learning experiences, enabling educational institutions and businesses to deliver flexible, engaging, and scalable digital learning programs.",
      image: "/images/about/software-solution/aiLayer4.svg",
      hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
      alt: "eLearning Software",
    },
    {
      id: 9,
      title: "eCommerce",
      description: "Our eCommerce solutions help businesses sell products online through secure platforms, seamless payment systems, inventory management, and personalized shopping experiences that improve customer engagement and drive revenue growth.",
      image: "/images/about/software-solution/aiLayer1.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "eCommerce",
    },
    {
      id: 10,
      title: "Mobile Apps",
      description: "We develop mobile applications for iOS and Android that deliver seamless user experiences, real-time functionality, and secure performance, helping businesses connect with customers anytime through intuitive and high-performing mobile solutions.",
      image: "/images/about/software-solution/aiLayer2.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "Mobile Apps",
    },
    {
      id: 11,
      title: "Content Management",
      description: "Content management systems help organizations create, manage, and publish digital content easily, enabling teams to update websites, manage media, and maintain consistent online experiences without complex technical processes.",
      image: "/images/about/software-solution/aiLayer3.svg",
      hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",
      alt: "Content Management",
    },
    {
      id: 12,
      title: "Document Management",
      description: "Document management solutions help businesses securely store, organize, share, and track documents digitally, improving collaboration, reducing paperwork, and ensuring easy access to important files and records.",
      image: "/images/about/software-solution/aiLayer4.svg",
      hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
      alt: "Document Management",
    },
    {
      id: 13,
      title: "CRM",
      description: "Our CRM software helps businesses manage customer relationships, track sales activities, automate marketing workflows, and analyze customer data to improve engagement, retention, and overall sales performance.",
      image: "/images/about/software-solution/aiLayer1.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "CRM",
    },
    {
      id: 14,
      title: "Marketing & Advertising",
      description: "We develop marketing and advertising solutions that automate campaigns, track customer engagement, and analyze marketing performance, helping businesses reach the right audience and maximize digital marketing results.",
      image: "/images/about/software-solution/aiLayer2.svg",
      hoverImage: "/images/about/software-solution/aiLayer2-hover.svg",
      alt: "Marketing & Advertising",
    },
    {
      id: 15,
      title: "Web Portals",
      description: "Web portal solutions provide secure online platforms where customers, employees, or partners can access information, manage services, and interact with businesses through personalized digital experiences.",
      image: "/images/about/software-solution/aiLayer3.svg",
      hoverImage: "/images/about/software-solution/aiLayer3-hover.svg",

      alt: "Web Portals",
    },
    {
      id: 16,
      title: "Data Analytics",
      description: "Data analytics solutions help businesses collect, process, and analyze large datasets, turning raw data into valuable insights that support smarter decisions, performance optimization, and strategic growth.",
      image: "/images/about/software-solution/aiLayer4.svg",
      hoverImage: "/images/about/software-solution/aiLayer4-hover.svg",
      alt: "Data Analytics",
    },
  ],
};