type CategoryType = "Industries" | "Services" | "Technologies & Platforms";

type CaseStudyCategoryType =
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

export interface CaseStudyCategory {
  id: String;
  name: string;
  type: CategoryType;
  caseStudyCategory: CaseStudyCategoryType;
  onSelect?: () => void;
}

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    id: "tech",
    type: "Industries",
    name: "Technology",
    caseStudyCategory: "Mobile-dev",
  },
  {
    id: "ai",
    type: "Services",
    name: "Artificial Intelligence",
    caseStudyCategory: "AI",
  },
  {
    id: "web-dev",
    type: "Industries",
    name: "Web Development",
    caseStudyCategory: "Web-dev",
  },
  {
    id: "mobile-dev",
    type: "Industries",
    name: "Mobile Development",
    caseStudyCategory: "Mobile-dev",
  },
  {
    id: "cloud",
    type: "Industries",
    name: "Cloud Computing",
    caseStudyCategory: "Cloud",
  },
  {
    id: "salesforce",
    type: "Services",
    name: "Salesforce",
    caseStudyCategory: "salesforce",
  },
  {
    id: "ml",
    type: "Services",
    name: "Machine Learning",
    caseStudyCategory: "ML",
  },
  {
    id: "data-science",
    type: "Services",
    name: "Data Science",
    caseStudyCategory: "Data-science",
  },
  {
    id: "ui-ux",
    type: "Technologies & Platforms",
    name: "UI/UX Design",
    caseStudyCategory: "UiUx",
  },
  {
    id: "cybersecurity",
    type: "Technologies & Platforms",
    name: "Cybersecurity",
    caseStudyCategory: "Cybersecurity",
  },
  {
    id: "devops",
    type: "Technologies & Platforms",
    name: "DevOps",
    caseStudyCategory: "DevOps",
  },
  {
    id: "blockchain",
    type: "Technologies & Platforms",
    name: "Blockchain",
    caseStudyCategory: "Blockchain",
  },
];
