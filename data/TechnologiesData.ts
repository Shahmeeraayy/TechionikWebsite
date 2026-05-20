export interface TechnologyItem {
  id: string;
  name: string;
  logo: string;
  dotIcon: string;
  href: string;
  slug: string;
}

export interface TechnologyCategory {
  title: string;
  subTitle?: string;
  items: TechnologyItem[];
}

export interface TechnologiesHero {
  title: string;
  spanTitle: string;
  description: string;
}

export interface EmergingTech {
  title: string;
  spanTitle: string;
  endTitle: string;
  descriptionTitle: string;
  description: string;
  pills: {
    name: string;
    href: string;
    hasIcon?: boolean;
    isHighlighted?: boolean;
  }[];
}

export const TechnologiesHeroData: TechnologiesHero = {
  title: "Technologies",
  spanTitle: "We Work With",
  description:
    "We specialize in leveraging top-tier technologies to deliver impactful solutions. Our expertise ensures that clients stay ahead in today's digital landscape, empowering them to thrive.",
};

export const TechnologiesCategories: TechnologyCategory[] = [
  {
    title: "Web",
    subTitle: "(Back-end)",
    items: [
      {
        id: "1",
        name: "C++",
        slug: "c-plus-plus",
        logo: "/icons/tech-c++.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/c-plus-plus",
      },
      {
        id: "2",
        name: "Java",
        slug: "java",
        logo: "/icons/tech-Java.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/java",
      },
      {
        id: "3",
        name: "GO",
        slug: "go",
        logo: "/icons/tech-go.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/go",
      },
      {
        id: "4",
        name: "Node JS",
        slug: "node-js",
        logo: "/icons/tech-Node.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/node-js",
      },
      {
        id: "5",
        name: "Vue JS",
        slug: "vue-js",
        logo: "/icons/tech-Vue.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/vue-js",
      },
      {
        id: "6",
        name: ".Net",
        slug: "dot-net",
        logo: "/icons/tech-Dot-Net.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/dot-net",
      },
      {
        id: "7",
        name: "php",
        slug: "php",
        logo: "/icons/tech-Php.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/php",
      },
    ],
  },
  {
    title: "Web",
    subTitle: "(Front-end)",
    items: [
      {
        id: "8",
        name: "HTML",
        slug: "html",
        logo: "/icons/tech-Html.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/html",
      },
      {
        id: "9",
        name: "Java Script",
        slug: "javascript",
        logo: "/icons/tech-Javascript.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/javascript",
      },
      {
        id: "10",
        name: "GO",
        slug: "go",
        logo: "/icons/tech-Go.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/go",
      },
      {
        id: "11",
        name: "Node JS",
        slug: "node-js",
        logo: "/icons/tech-Node.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/node-js",
      },
      {
        id: "12",
        name: "Vue JS",
        slug: "vue-js",
        logo: "/icons/tech-Vue.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/vue-js",
      },
      {
        id: "13",
        name: ".Net",
        slug: "dot-net",
        logo: "/icons/tech-Dot-Net.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/dot-net",
      },
      {
        id: "14",
        name: "php",
        slug: "php",
        logo: "/icons/tech-Php.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/php",
      },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        id: "15",
        name: "C++",
        slug: "c-plus-plus",
        logo: "/icons/tech-c++.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/c-plus-plus",
      },
      {
        id: "16",
        name: "Java Script",
        slug: "javascript",
        logo: "/icons/tech-Javascript.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/javascript",
      },
      {
        id: "17",
        name: "GO",
        slug: "go",
        logo: "/icons/tech-Go.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/go",
      },
      {
        id: "18",
        name: "Node JS",
        slug: "node-js",
        logo: "/icons/tech-Node.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/node-js",
      },
      {
        id: "19",
        name: "Vue JS",
        slug: "vue-js",
        logo: "/icons/tech-Vue.svg",
        dotIcon: "/icons/eclipse-orange.svg",
        href: "/technology/vue-js",
      },
    ],
  },
];

export const EmergingTechData: EmergingTech = {
  title: "Emerging",
  spanTitle: "Innovation",
  endTitle: "Disruptive Technologies",
  descriptionTitle: "TECHIONIK",
  description:
    "is offering multiple software solutions which are very much popular now a days in IT industry.",
  pills: [
    { name: "Big Data", href: "#", hasIcon: true, isHighlighted: true },
    { name: "Artificial Intelligence", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "Internet of Things", href: "#" },
    { name: "Computer Vision", href: "#" },
    { name: "Block Chain", href: "#" },
  ],
};
