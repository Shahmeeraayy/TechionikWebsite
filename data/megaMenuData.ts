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
  href?: string;
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
        name: "Software Development",
        slug: "custom-software-development",
        href: "/services/custom-software-development",
        icon: "/icons/cloud.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          { id: 101, name: "Web Development", slug: "web-development" },
          { id: 102, name: "Mobile App Development", slug: "mobile-development" },
          { id: 103, name: "Backend Development", slug: "backend-development" },
          { id: 105, name: "CMS Development Services", slug: "cms-development" },
        ]
      },
      {
        id: 2,
        name: "AI Automation",
        slug: "ai-automation",
        href: "/services/ai-automation",
        icon: "/icons/ai-brain.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: [
          { id: 201, name: "Business Process Automation", slug: "business-process-automation" },
          { id: 202, name: "Sales Automation", slug: "sales-automation" },
          { id: 203, name: "Marketing Automation", slug: "marketing-automation" },
          { id: 204, name: "Low Code Automation", slug: "low-code-automation" },
          { id: 205, name: "No Code Automation", slug: "no-code-automation" },
          { id: 206, name: "Operation Automation", slug: "operation-automation" },
          { id: 207, name: "HR Automation", slug: "hr-automation" },
          { id: 208, name: "Calling Automation", slug: "calling-automation" },
          { id: 209, name: "Appointment Automation", slug: "appointment-automation" },
          { id: 210, name: "Manual Automation", slug: "manual-automation" },
          { id: 211, name: "Email Automation", slug: "email-automation" }
        ]
      },
      {
        id: 3,
        name: "Application Development",
        slug: "application-development",
        href: "/services/application-development",
        icon: "/icons/building.svg",
        imageUrl: "/images/megamenu-newsletter.png",   // most right featured section
        children: []
      },
      {
        id: 4,
        name: "Data Science",
        slug: "data-science",
        href: "/services/data-science",
        icon: "/icons/data-line.svg",
        children: [
          { id: 301, name: "Data Analytics", slug: "data-analytics" },
          { id: 302, name: "Machine Learning Models", slug: "machine-learning-models" }
        ]
      },
      {
        id: 5,
        name: "Business Intelligence",
        slug: "business-intelligence",
        href: "/services/business-intelligence",
        icon: "/icons/browser.svg",
        children: [
          { id: 401, name: "Dashboard Creation", slug: "dashboard-creation" }
        ]
      },
      {
        id: 6,
        name: "IT Staff Augmentation",
        slug: "staff-augmentation",
        href: "/services/staff-augmentation",
        icon: "/icons/people-team.svg",
        imageUrl: "/images/megamenu-newsletter.png",
        children: []
      },
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
