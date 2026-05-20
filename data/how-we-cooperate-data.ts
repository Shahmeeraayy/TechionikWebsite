export type layout = "image-left" | "image-right";

export interface HoWeCooperate {
  index: number;
  Heading: string;
  Description: string;
  listHeading1: string;
  listParagraph1: string;
  listHeading2: string;
  listParagraph2: string;
  buttonText: string;
  image: string;
  layout: layout
}

export const HowWeCooperateData: HoWeCooperate[] = [
  {
    index: 1,
    Heading: "Product-oriented delivery",
    Description:
      "A guaranteed delivery of your software product within your timeline or budget constraints",
    listHeading1: "Our Responsibility",
    listParagraph1:
      "the implementation roadmap, budget, quality metrics, risk management, delivery process setup, and all the team-related aspects",
    listHeading2: "Client Responsibility",
    listParagraph2:
      " providing business context, time/budget constraints and the product vision",
    buttonText: "Explore More",
    image: "/images/how-we-work/WeCooperate.jpg",
    layout: "image-left"
  },
  {
    index: 2,
    Heading: "Product-oriented delivery",
    Description:
      "A guaranteed delivery of your software product within your timeline or budget constraints",
    listHeading1: "Our Responsibility",
    listParagraph1:
      "the implementation roadmap, budget, quality metrics, risk management, delivery process setup, and all the team-related aspects",
    listHeading2: "Client Responsibility",
    listParagraph2:
      " providing business context, time/budget constraints and the product vision",
    buttonText: "Explore More",
    image: "/images/how-we-work/programing.jpg",
    layout: "image-right"
  },
];
