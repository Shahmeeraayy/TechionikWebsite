
interface cardsData {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconAlt?: string;
  label: string;
}

export interface WhyChooseNext {
  mainTitle: string;
  middleTitle: string;
  endTitle: string;
  mainDescription: string;
  cards: cardsData[]
}

export const stepsData: WhyChooseNext = {
  mainTitle:"How You Can Hire ",
  middleTitle:"Offshore Developers",
  endTitle: "Through Techionik",
  mainDescription:"Explore and follow our simplified and transparent hiring procedures to hire developers from us.",
  cards:[
    {
    id: 1,
    title: "High Performance Web Frameworks",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed. Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
    icon: "/icons/smallbd.svg",
    label: "High Performance Web Framework",
  },
  {
    id: 2,
    title: "High Performance Web Frameworks1212",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed. Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
    icon: "/icons/smallbd.svg",
    label: "High Performance Web Framework",
  },
  {
    id: 3,
    title: "High Performance Web Frameworks344",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed. Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
    icon: "/icons/smallbd.svg",
    label: "High Performance Web Framework",
  },
  {
    id: 4,
    title: "High Performance Web Frameworks3434",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed. Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
    icon: "/icons/smallbd.svg",
    label: "High Performance Web Framework",
  },
  {
    id: 5,
    title: "High Performance Web Framework56767s",
    description:
      "Our experts review your request to analyze key aspects, including the number of offshore experts needed. Our experts review your request to analyze key aspects, including the number of offshore experts needed.",
    icon: "/icons/smallbd.svg",
    label: "High Performance Web Framework",
  },

  ]
}
