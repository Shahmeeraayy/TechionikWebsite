export interface SolutionWeDeliverCard {
  id: number;
  title: string;
  description: string[] | string;
  icon:string;
}
export interface SolutionWeDeliver{
  title: string;
  spanTitle: string;
  description: string;
  cards: SolutionWeDeliverCard[]
}

export const SolutionWeDeliverData: SolutionWeDeliver = {
  title: "Solutions",
  spanTitle: "We Deliver",
  description: "We IT-enable all kinds of B2B, B2C interactions and internal Operations",
  cards: [
    {
    id: 1,
    title: "Supply Chain Management",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  {
    id: 2,
    title: "Asset Management",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  {
    id: 3,
    title: "Enterprise Applications",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  {
    id: 4,
    title: "Custom Software  Development",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  {
    id: 5,
    title: "Industry Management",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  {
    id: 6,
    title: "Industry Management",
    description: [
      "Full-scale development handled with expertise. ",
      "Skilled IT team managing the entire development life cycle.",
      "Skilled IT team managing the entire development life cycle",
    ],
    icon: "/icons/cloud.svg"
  },
  ]
};
