export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Certification {
  id: string;
  name: string;
  imageAlt: string;
  imageUrl: string;
}

export interface MainImage {
  altText: string;
  imageUrl: string;
}

export interface CompanyHighlightsData {
  sectionTitle: string;
  sectionSubtitle?: string;
  description: string;
  mainImage: MainImage;
  stats: Stat[];
  certifications: Certification[];
}

export const companyHighlightsData: CompanyHighlightsData = {
  sectionTitle: "Why choose",
  sectionSubtitle: "TECHIONIK",
  description: "We deliver next-generation AI software solutions and automation that help businesses innovate, scale, and grow. As a trusted custom software development company, we build intelligent digital solutions for complex challenges. Trusted by enterprises across 30+ industries and recognized with a 98% client trust score, we transform challenges into competitive edge. ",
  mainImage: {
    altText: "Orange dotted globe illustration",
    imageUrl: "/images/home/redGlobe.webp", // Placeholder for your image path
  },
  stats: [
    {
      id: "projects",
      value: "300+",
      label: "Projects Delivered",
    },
    {
      id: "experience",
      value: "5+",
      label: "Years Experience",
    },
    {
      id: "experts",
      value: "25+",
      label: "IT Experts",
    },
    {
      id: "countries",
      value: "3",
      label: "Countries we serve",
    },
  ],
  certifications: [
    {
      id: "iso",
      name: "ISO 9001:2015",
      imageAlt: "ISO 9001:2015 Certified Company Logo",
      imageUrl: "/certificates/iso.webp", 
    },
    {
      id: "iso2",
      name: "ISO 9001:2015",
      imageAlt: "ISO 9001:2015 Certified Company Logo",
      imageUrl: "/certificates/iso.webp", 
    },
    {
      id: "bafe",
      name: "BAFE",
      imageAlt: "BAFE Fire Safety Register Logo",
      imageUrl: "/certificates/bafe.webp", 
    },
    {
      id: "ssip",
      name: "SSIP",
      imageAlt: "SSIP Certification Body Member Logo",
      imageUrl: "/certificates/ssip.webp",
    },
  ],
};