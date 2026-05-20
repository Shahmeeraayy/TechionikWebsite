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
  title: "Engagement",
  MiddleTitle: "Models",
  lastTitle: "",
  description:
    "Partner with TECHIONIK to thrive in AI software, automation, and IT capabilities.",
  items: [
    {
      title: "Staff Augmentation",
      description:
        "<ul><li>Access specialized skills for complex digital initiatives</li><li>Maintain control while accelerating software delivery</li><li>Reduce recruitment costs and ramp up projects faster</li></ul>",
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
      title: "Dedicated Team",
      description:
        "<ul><li>Long-term collaboration with elite engineering talent</li><li>Full integration with in-house teams</li><li>Teams that grow with your business needs</li></ul>",
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
      description:
        "<ul><li>Predictable timelines, budgets, and quality outcomes</li><li>Turnkey solutions that minimize risk and overhead</li><li>Ideal for automation and digital transformation</li></ul>",
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
      description:
        "<ul><li>Reduce workloads with AI-driven automation</li><li>Ensure business continuity and operational efficiency</li><li>Reliable expert support, 24/7</li></ul>",
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
