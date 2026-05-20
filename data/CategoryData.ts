type CategoryTypeExtended = "Industries" | "Services" | "Technologies & Platforms";
export interface Category {

  id: string;
  type: CategoryType;
  name: string;
  subCategories?:CategoryTypeExtended;
  onSelected? :()=> void;

}
export type CategoryType =
  | "Tech"
  | "AI"
  | "Web-dev"
  | "Mobile-dev"
  | "Cloud"
  | "salesforce"
  | "ML"
  | "Data-science"
  | "UiUx"
  | "Cybersecurity"
  | "DevOps"
  | "Blockchain";

export const categories: Category[] = [
  {
    id: "tech",
    type: "Tech",
    name: "Technology",
  },
  {
    id: "ai",
    type: "AI",
    name: "Artificial Intelligence",
  },
  {
    id: "web-dev",
    type: "Web-dev",
    name: "Web Development",
  },
  {
    id: "mobile-dev",
    type: "Mobile-dev",
    name: "Mobile Development",
  },
  {
    id: "cloud",
    type: "Cloud",
    name: "Cloud Computing",
  },
  {
    id: "salesforce",
    type: "salesforce",
    name: "Salesforce",
  },
  {
    id: "ml",
    type: "ML",
    name: "Machine Learning",
  },
  {
    id: "data-science",
    type: "Data-science",
    name: "Data Science",
  },
  {
    id: "ui-ux",
    type: "UiUx",
    name: "UI/UX Design",
  },
  {
    id: "cybersecurity",
    type: "Cybersecurity",
    name: "Cybersecurity",
  },
  {
    id: "devops",
    type: "DevOps",
    name: "DevOps",
  },
  {
    id: "blockchain",
    type: "Blockchain",
    name: "Blockchain",
  },
];
