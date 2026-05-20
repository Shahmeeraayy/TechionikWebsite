export interface TechionikPoint {
  id: number;
  text: string;
}

export interface TechionikData {
  title: string;
  brandName: string;
  subtitle: string;
  points: TechionikPoint[];
  mainImage: string;
}

export const techionikContent: TechionikData = {
  title: "What sets",
  brandName: "TECHIONIK",
  subtitle: "apart?",
  mainImage: "/images/team-meeting.png", // Update with your actual path
  points: [
    {
      id: 1,
      text: "Almost three decades of custom software development experience",
    },
    {
      id: 2,
      text: "Extensive technology consulting expertise",
    },
    {
      id: 3,
      text: "Deep strategic product design expertise with a UX-certified team",
    },
    {
      id: 4,
      text: "One of the largest data science teams in Ukraine",
    },
    {
      id: 5,
      text: "Reduced investment risk with MVP development",
    },
    {
      id: 6,
      text: "World-leading technological innovation via ELEKS’ in-house R&D lab",
    },
  ],
};