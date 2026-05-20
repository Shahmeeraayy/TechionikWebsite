// data/ourExpertsData.ts

export interface Expert {
  id: number;
  name: string;
  role: string;
  image: string;
  badgeTop: string | number; 
  badgeBottom: string;
}

export interface ExpertsSection {
  title: string;
  experts: Expert[];
}

export const expertsData: ExpertsSection = {
  title: "Our Experts",
  experts: [
    {
      id: 1,
      name: "Ali Haider",
      role: "AI Coach & Strategist",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
    {
      id: 2,
      name: "Haider",
      role: "Senior Developer",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
    {
      id: 3,
      name: "Ahmad",
      role: "Product Manager",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
    {
      id: 4,
      name: "Ali",
      role: "UX Designer",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
    {
      id: 5,
      name: "Ali Haider",
      role: "AI Specialist",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
    {
      id: 6,
      name: "Haider",
      role: "Tech Lead",
      image: "/images/home/ali-haider.webp",
      badgeTop: 32,
      badgeBottom: "Articles",
    },
  ],
};