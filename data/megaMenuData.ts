// data/menuCMSData.ts

export interface MenuType {
  id: number;
  name: string;
  slug: string;
}

export interface MenuItem {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  imageUrl?: string;
  children?: MenuItem[];
}

export interface MenuResponse {
  type: MenuType;
  menu: MenuItem[];
}

// A dictionary mapping the requested slug to its exact API response
export const MegaMenuResponses: Record<string, MenuResponse> = {
  "services": {
    type: {
      id: 1,
      name: "Services",
      slug: "services"
    },
    menu: [
      {
        id: 1,
        name: "AI Automation",
        slug: "ai-automation",
        icon: "/icons/ai-brain.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          { id: 101, name: "Business Process Automation", slug: "business-process-automation" },
          { id: 102, name: "Sales Automation", slug: "sales-automation" },
          { id: 103, name: "Marketing Automation", slug: "marketing-automation" },
          { id: 104, name: "Low Code Automation", slug: "low-code-automation" },
          { id: 105, name: "No Code Automation", slug: "no-code-automation" },
          { id: 106, name: "Operation Automation", slug: "operation-automation" },
          { id: 107, name: "HR Automation", slug: "hr-automation" },
          { id: 108, name: "Calling Automation", slug: "calling-automation" },
          { id: 109, name: "Appointment Automation", slug: "appointment-automation" },
          { id: 110, name: "Manual Automation", slug: "manual-automation" },
          { id: 111, name: "Email Automation", slug: "email-automation" }
        ]
      },
      {
        id: 2,
        name: "Custom Software Development",
        slug: "custom-software-development",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",   // most right featured section
        children: [
          { id: 201, name: "Web Application Development", slug: "web-development" },
          { id: 202, name: "Mobile App Development", slug: "mobile-development" },
          { id: 203, name: "Backend Development Application", slug: "backend-development" },
          { id: 204, name: "Application Development Services", slug: "application-development" },
          { id: 205, name: "CMS Development Services", slug: "cms-development" },
          { id: 206, name: "Software Development Services", slug: "software-development" }
        ]
      },
      {
        id: 3,
        name: "Data Science",
        slug: "data-science",
        icon: "/icons/building.svg",
        children: [
          { id: 301, name: "Data Analytics", slug: "data-analytics" },
          { id: 302, name: "Machine Learning Models", slug: "machine-learning-models" }
        ]
      },
      {
        id: 4,
        name: "Business Intelligence",
        slug: "business-intelligence",
        icon: "/icons/building.svg",
        children: [
          { id: 401, name: "Dashboard Creation", slug: "dashboard-creation" }
        ]
      },
      {
        id: 5,
        name: "Staff Augmentation",
        slug: "staff-augmentation",
        icon: "/icons/building.svg",
        children: []
      },
      {
        id: 6,
        name: "Artificial Intelligence",
        slug: "artificial-intelligence",
        icon: "/icons/building.svg",
        children: []
      },
      {
        id: 7,
        name: "Outsourcing",
        slug: "outsourcing",
        icon: "/icons/building.svg",
        children: []
      }
    ]
  },
  
  "pages": {
    type: {
      id: 2,
      name: "Pages",
      slug: "/"
    },
    menu: [
      {
        id: 8,
        name: "Industry",
        slug: "industries",
        icon: "/icons/building.svg",
        children: [
          { id: 801, name: "Healthcare", slug: "healthcare" },
          { id: 802, name: "Finance", slug: "finance" },
        //   { id: 803, name: "Real Estate", slug: "real-estate" }
        ]
      },
      {
        id: 9,
        name: "Our Clients",
        slug: "our-clients",
        icon: "/icons/ai-brain.svg",
        children: []
      },
      {
        id: 10,
        name: "How We Work",
        slug: "how-we-work",
        icon: "/icons/ai-brain.svg",
        children: []
      },
      {
        id: 11,
        name: "Technology",
        slug: "technology",
        icon: "/icons/cloud.svg",
        children: [
          { id: 1101, name: "React & Next.js", slug: "nextjs" },
          { id: 1102, name: "Python & AI", slug: "python" },
          { id: 1103, name: "Cloud Infrastructure", slug: "cloud" }
        ]
      },
      {
        id: 12,
        name: "Hiring",
        slug: "hiring",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 13,
        name: "Case Studies",
        slug: "case-study",
        icon: "/icons/cloud.svg",
        children: [
          { id: 1301, name: "Rastah", slug: "rastah" }
        ]
      },
      {
        id: 14,
        name: "Location Based Services",
        slug: "location-based-services",
        icon: "/icons/cloud.svg",
      },
      {
        id: 15,
        name: "CEO Suite",
        slug: "CEO-suite",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 16,
        name: "Authors",
        slug: "author",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 18,
        name: "Terms and Conditions",
        slug: "terms",
        icon: "/icons/cloud.svg",
        children: []
      },
      {
        id: 19,
        name: "Privacy Policy",
        slug: "privacy-policy",
        icon: "/icons/cloud.svg",
      }
    ]
  }
};