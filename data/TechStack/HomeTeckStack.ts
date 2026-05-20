export type Category =
  | "Frontend"
  | "Backend"
  | "Mobile Platforms"
  | "Database";
export interface heading {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  description: string;
}
export interface TechIcon {
  name: string;
  icon: string;
  category: Category[];
}
export interface TechStackData {
  headingData: heading;
  filters: Category[];
  techIcons: TechIcon[];
}

export const hometechStackData: TechStackData = {
  headingData: {
    title: "Technologies",
    middleTitle: "We Use",
    description:
      "We use the latest languages, frameworks, and tools to create fast, reliable web solutions that deliver efficient digital experiences.",
  },

  filters: ["Frontend", "Backend", "Mobile Platforms", "Database"],

  techIcons: [
    {
    name: "Java",
    icon: "/icons/java.svg",
    category: ["Backend", "Mobile Platforms"],
  },
  {
    name: "Go",
    icon: "/icons/go.svg",
    category: ["Backend", "Database"],
  },
  {
    name: "Angular",
    icon: "/icons/angular.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: "Vue",
    icon: "/icons/vuejs.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: "Meteor",
    icon: "/icons/meteor.svg",
    category: ["Frontend", "Mobile Platforms", "Database"],
  },
  {
    name: "JavaScript",
    icon: "/icons/java-script.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: ".NET",
    icon: "/icons/dot.svg",
    category: ["Backend", "Database"],
  },
  {
    name: "Ember",
    icon: "/icons/dot.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: "PHP",
    icon: "/icons/php.svg",
    category: ["Backend", "Database"],
  },
  {
    name: "HTML5",
    icon: "/icons/html.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    category: ["Backend", "Database"],
  },
  {
    name: "CSS3",
    icon: "/icons/css.svg",
    category: ["Frontend", "Mobile Platforms"],
  },
  {
    name: "C++",
    icon: "/icons/c++.svg",
    category: ["Backend", "Database"],
  },
  ],
};