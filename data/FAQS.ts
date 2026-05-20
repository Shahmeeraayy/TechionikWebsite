// data/faqs.ts
export interface MultipleFAQs {
  id: number;
  question: string;
  answer: string;
}

export interface FAQ {
  mainTitle: string;
  spanTitle: string;
  faq: MultipleFAQs[];
}

export const faqsData: FAQ = {
  mainTitle: "AI-Native Engineering",
  spanTitle: "FAQs",
  faq: [
    {
      id: 1,
      question: "What is AI-native engineering?",
      answer:
        "AI-native engineering blends expert software delivery with practical AI assistance, helping teams design, build, and ship faster without losing quality or control.",
    },
    {
      id: 2,
      question: "Which industries do you support?",
      answer:
        "We support organizations across 30+ industries, including healthcare, finance, retail, manufacturing, education, real estate, insurance, and hi-tech.",
    },
    {
      id: 3,
      question: "Which engagement model should I choose?",
      answer:
        "Choose staff augmentation to extend your team quickly, a dedicated team for long-term roadmap work, project-based outsourcing for turnkey delivery, or managed IT services for ongoing operational support.",
    },
    {
      id: 4,
      question: "Can you build software from scratch?",
      answer:
        "Yes. We design and deliver custom software, web apps, mobile apps, and enterprise solutions from discovery through launch and support.",
    },
    {
      id: 5,
      question: "Do you offer AI automation services?",
      answer:
        "Yes. We build automation across business processes, sales, marketing, HR, calling, and appointment workflows, along with agentic AI solutions.",
    },
    {
      id: 6,
      question: "How do you collaborate with in-house teams?",
      answer:
        "We adapt to your process, communicate clearly, and integrate with your internal product, engineering, and operations teams to keep delivery aligned.",
    },
    {
      id: 7,
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely. We modernize, integrate, and extend existing platforms so your current systems keep working while new capabilities are added safely.",
    },
    {
      id: 8,
      question: "How do we get started?",
      answer:
        "Start with a call so we can understand your roadmap, goals, and delivery needs, then we will recommend the right team structure and next steps.",
    },
  ],
};
