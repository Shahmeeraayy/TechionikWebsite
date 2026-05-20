export interface WhatWeDoCardItem {
  id?: number;
  title?: string;
  description: string;
}

export interface WhatWeDo {
  title: string;
  descriptiption: string;
  mainDescription?: string;
  card?: WhatWeDoCardItem[];
}

export const WhatWeDoData: WhatWeDo = {
  title: "What We Do",
  descriptiption: "Consistency are key to our delivery process, so we follow the same framework regardless of the project.",
  card: [
    {
      id: 1,
      title: "Pre Discovery",
      description: "<p>We visit our client to understand the challenges and goals of delivery.</p>"
    },
    {
      id: 2,
      title: "Discovery",
      description: "<p>We work with you to create a detailed project specification.</p>"
    },
    {
      id: 3,
      title: "Product Design",
      description: "<p>Our system architect, business analyst and UX designer work with you.</p>"
    },
    {
      id: 4,
      title: "Development",
      description: "<p>Full-scale development handled with expertise.</p>"
    },
  ]
};