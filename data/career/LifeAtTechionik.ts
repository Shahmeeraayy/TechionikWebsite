export interface Principle {
  id: number;
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
}

export interface LifeImage {
  src: string;
  alt: string;
  label: string;
}

export interface LifeAtTechionikData {
  mainHeading: string;
  description: string;
  subHeading: string;
  principles: Principle[];
  images: LifeImage[];
}

export const lifeAtTechionikData: LifeAtTechionikData = {
  mainHeading: "Life at Techionik",
  description:
    "From brainstorming radical new ideas to celebrating massive product launches, life here is built around collaboration, unbridled creativity, and continuous learning. We work hard, but we ensure the journey is incredibly rewarding.",
  subHeading: "OUR CORE PRINCIPLES",
  principles: [
    {
      id: 1,
      title: "Innovation First",
      description: "Status quo is our enemy. We constantly seek better ways.",
      iconName: "bulb",
      iconColor: "text-blue-400",
    },
    {
      id: 2,
      title: "Ownership Mindset",
      description: 'We act like owners. We don\'t say "that\'s not my job."',
      iconName: "shield",
      iconColor: "text-orange-500",
    },
    {
      id: 3,
      title: "Customer Obsession",
      description: "Every decision starts with the user and works backwards.",
      iconName: "heart",
      iconColor: "text-blue-400",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "We stay curious, read, adapt, and share knowledge.",
      iconName: "book",
      iconColor: "text-orange-500",
    },
  ],
  images: [
    {
      src: "/images/career/PortraitImg.jpg", // Replace with your actual paths
      alt: "Office Hackathon",
      label: "Office Hackathon",
    },
    {
      src: "/images/career/squareImg.png",
      alt: "Team Retreat",
      label: "Team Retreat",
    },
    {
      src: "/images/career/squareImg2.png",
      alt: "Brainstorming",
      label: "Brainstorming",
    },
  ],
};