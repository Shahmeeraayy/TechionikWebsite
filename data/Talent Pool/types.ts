export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  stack: string[];
}

export interface TalentPoolData {
  title: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  team: TeamMember[];
}