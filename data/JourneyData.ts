interface JourneyYear {
  year: string;
  list: string[];
}

interface JourneyData {
  title: string;
  gradientTitle: string;
  afterGradientTitle: string;
  description: string;
  timeline: JourneyYear[];
}

export const journeyData: JourneyData = {
  title: "Our",
  gradientTitle: "Journey",
  afterGradientTitle: "So Far",
  description:
    "Techionik operates across multiple locations worldwide, ensuring seamless collaboration and support for our clients.",

  timeline: [
    {
      year: "2019",
      list: [
        "TECHIONIK began its journey with a vision to build reliable software solutions for modern businesses.",
        "We started by delivering custom web and mobile development services.",
        "Built strong client relationships and established a foundation of technical excellence and trust.",
      ],
    },
    {
      year: "2020",
      list: [
        "Expanded our engineering capabilities and started delivering scalable software solutions for growing companies.",
        "Focused on cloud development, system integrations, and improving software architecture.",
        "Supported businesses undergoing rapid digital transformation.",
      ],
    },
    {
      year: "2021",
      list: [
        "Strengthened expertise in enterprise software and digital product engineering.",
        "Collaborated with global clients and improved development processes.",
        "Introduced advanced analytics and automation to help organizations operate smarter and scale faster.",
      ],
    },
    {
      year: "2022",
      list: [
        "Innovation accelerated with intelligent automation and data-driven systems.",
        "Built AI-enabled applications and modernized legacy platforms.",
        "Helped businesses streamline operations through smarter workflows and predictive insights.",
      ],
    },
    {
      year: "2023",
      list: [
        "Marked a major step toward becoming an AI-native engineering partner.",
        "Expanded services in AI automation, machine learning, and data science.",
        "Supported enterprises with scalable architectures and high-performance digital products.",
      ],
    },
    {
      year: "2024",
      list: [
        "Focused on enterprise automation and advanced digital transformation.",
        "Introduced multi-agent AI systems and enhanced automation frameworks.",
        "Helped organizations reduce workloads, optimize operations, and unlock deeper insights from their data.",
      ],
    },
    {
      year: "2025",
      list: [
        "Global network of top engineering talent continued to grow.",
        "Strengthened outsourcing models and delivered complex AI solutions across industries.",
        "Helped companies accelerate product development while maintaining reliability, security, and performance.",
      ],
    },
    {
      year: "2026",
      list: [
        "Today TECHIONIK stands as an AI-native digital engineering partner delivering intelligent software, automation, and scalable technology solutions.",
        "We help businesses innovate faster, transform operations, and build future-ready systems powered by advanced AI and engineering expertise.",
      ],
    },
  ],
};