export interface PageStructure {
  name: string;
  slug: string;
  subPages?: { name: string; slug: string }[];
}

export const AllPagesData: Record<string, PageStructure> = {
  "industries": {
    name: "Industry",
    slug: "industries",
    subPages: [
      { name: "Healthcare", slug: "healthcare" },
      { name: "Finance", slug: "finance" },
    //   { name: "Real Estate", slug: "real-estate" },
    ],
  },
  "our-clients": {
    name: "Our Clients",
    slug: "our-clients",
  },
  "how-we-work": {
    name: "How We Work",
    slug: "how-we-work",
  },
  "technology": {
    name: "Technology",
    slug: "technology",
    // subPages: [
    //   { name: "React & Next.js", slug: "custon-software-development" },
    //   { name: "Python & AI", slug: "python" },
    //   { name: "Cloud Infrastructure", slug: "cloud" },
    // ],
  },
  
  "hiring": {
    name: "Hiring",
    slug: "hiring",
  },
  "case-studies": {
    name: "Case Studies",
    slug: "case-study",
    subPages: [
      { name: "E-commerce Success", slug: "rastah" },
    //   { name: "SaaS Automation", slug: "rastah" },
    ],
  },
  "Location Based Services":{
    name: "Location Based Services",
    slug: "location-based-services",
  },
  "Ceo Suite":{
        name: "Ceo Suite",
        slug: "ceo-suite",
  }
};