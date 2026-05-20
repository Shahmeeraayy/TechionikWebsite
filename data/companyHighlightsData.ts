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
  sectionTitle: "Why TECHIONIK",
  sectionSubtitle: "",
  description:
    "Get software development services, built around your needs. From intelligent automation to full-cycle custom software - TECHIONIK helps companies achieve their roadmaps with the top 3% technology talent. Trusted by enterprises across 30+ industries.",
  mainImage: {
    altText: "AI engineering globe illustration",
    imageUrl: "/images/home/redGlobe.webp",
  },
  stats: [
    {
      id: "industries",
      value: "30+",
      label: "Industries served",
    },
    {
      id: "talent",
      value: "Top 3%",
      label: "Technology talent",
    },
    {
      id: "engineers",
      value: "Vetted",
      label: "AI-augmented engineers",
    },
    {
      id: "roadmaps",
      value: "Built",
      label: "Around your needs",
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
