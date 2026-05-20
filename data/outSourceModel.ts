export interface OutsourcingSlide {
  title: string;
  items: slides[];
  lastTitle?: string;
  description?: string;
  MiddleTitle?: string;
}

export interface slides {
  title: string;
  description?: string;
  image: string;
  hoverImage: string;
  // bulletPoints: string[];
}

export const outsourcingModelsData: OutsourcingSlide = {
  title: "Our Flexible",
  MiddleTitle: "Outsourcing",
  lastTitle: "Models",

  description:
    "Partner with TECHIONIK to strengthen software development, automation, and IT capabilities through flexible collaboration models designed to support different business and project requirements.",
  items: [
    {
      title: "Staff Augmentation",
      description: "<ul><li>Expand development teams with skilled AI and software engineers</li><li>Access specialized expertise for complex digital initiatives</li><li>Maintain project while accelerating delivery timelines</li><li>Reduce recruitment overhead and onboarding time</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      // bulletPoints: [
      //   "Expand development teams with skilled AI and software engineers",
      //   "Access specialized expertise for complex digital initiatives",
      //   "Maintain project while accelerating delivery timelines",
      //   "Reduce recruitment overhead and onboarding time",
      // ],
    },
    {
      title: "Dedicated Team ",
      description: "<ul><li>Expand development teams with skilled AI and software engineers</li><li>Access specialized expertise for complex digital initiatives</li><li>Maintain project while accelerating delivery timelines</li><li>Reduce recruitment overhead and onboarding time</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",
      // bulletPoints: [
      //   "Continuous collaboration with experienced engineering talent",
      //   "Seamless integration with internal teams and development workflows",
      //   "Scalable team structures aligned with project requirements",
      //   "Long-term product development and improvement",
      // ],
    },
    {
      title: "Project-Based Outsourcing",
      description: "<ul><li>Expand development teams with skilled AI and software engineers</li><li>Access specialized expertise for complex digital initiatives</li><li>Maintain project while accelerating delivery timelines</li><li>Reduce recruitment overhead and onboarding time</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",

      // bulletPoints: [
      //   "End-to-end delivery for AI and software development projects",
      //   "Defined milestones, timelines, and structured development processes",
      //   "Suitable for digital transformation and automation initiatives",
      //   "Reduced operational complexity through turnkey solutions",
      // ],
    },
    {
      title: "Managed IT Services",
      description: "<ul><li>Expand development teams with skilled AI and software engineers</li><li>Access specialized expertise for complex digital initiatives</li><li>Maintain project while accelerating delivery timelines</li><li>Reduce recruitment overhead and onboarding time</li></ul>",
      image: "/images/ParentServices/outsourcingmedia/full.webp",
      hoverImage: "/images/ParentServices/outsourcingmedia/colorfull.webp",

      // bulletPoints: [
      //   "Proactive monitoring of systems and infrastructure",
      //   "Automation tools that reduce operational workload",
      //   "Support for business continuity and system reliability",
      //   "Expert technical assistance for ongoing IT management",
      // ],
    },
  ],
};
