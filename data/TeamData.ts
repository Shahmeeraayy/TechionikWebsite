// ===== Interfaces =====

export interface HeadingParts {
  title: string;
  middleTitle: string;
  lastTitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;          // from /public
  socialIcon?: string;
  socialLink?: string;
  layout: 0 | 1;          // 0 = image right, 1 = image left
}

export interface TeamSection {
  title: string;
  description: string;
  member: TeamMember;
}

// ===== Heading Data =====

export const teamHeading: HeadingParts = {
  title: "What our",
  middleTitle: "Leadership",
  lastTitle: "says",
};

// ===== Team Sections Data =====

export const teamSections: TeamSection[] = [
  {
    title: "Our Mission",
    description:
      "Our mission is to empower businesses with intelligent software, AI automation, and world-class engineering that accelerates innovation, simplifies complexity, and drives sustainable growth through scalable digital solutions built for performance, reliability, and long-term business impact. ",
    member: {
      name: "Hassan Suhail",
      position: "CEO and Founder",
      image: "/images/about/ceo.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "https://www.linkedin.com",
      layout: 0, // image right
    },
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become a global leader in AI-native digital engineering, enabling organizations worldwide to transform operations, unlock data intelligence, and build future-ready systems that drive innovation, efficiency, and long-term competitive advantage.",
    member: {
      name: "Haseeb Suhail",
      position: "Chief Technology Officer",
      image: "/images/about/cto.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "https://www.linkedin.com",
      layout: 1, // image left
    },
  },
  {
    title: "Our Philosophy",
    description:
      "Our philosophy is simple: combine exceptional engineering, intelligent automation, and transparent collaboration to create technology that solves real problems. We believe innovation must deliver measurable business value, empower people, and help organizations grow smarter, faster, and sustainably.",
    member: {
      name: "Ayyub Zaman",
      position: "Chief Operating Officer",
      image: "/images/about/coo.png",
      socialIcon: "/icons/linkedin.svg",
      socialLink: "https://www.linkedin.com",
      layout: 0, // image right
    },
    
  },

];
