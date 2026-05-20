export interface Feature {
    id: number;
    title: string;
    category: string;
    icon: string;
    features: string[];
}

export interface HiringPageData {
    header: {
        mainTitle: string;
        highlightTitle: string;
        subtitle: string;
    };
    cards: Feature[];
}

export const TechexpertTechStack: HiringPageData = {
    header: {
        mainTitle: "Our Technical Experts in Various",
        highlightTitle: "Tech Stacks",
        subtitle: "Leverage this global talent to enhance your project's innovation and execution, delivering exceptional results.",
    },
    cards: [
        {
            id: 1,
            title: "Hire Python Developer ",
            category: "",
            icon: "/python.svg",
            features: [
                "Looking to build scalable software, integrate AI, or expand your cloud infrastructure? ",
                "Let’s explore how TECHIONIK can accelerate your vision with cutting-edge development and offshore talent."
            ]
        },
        {
            id: 2,
            title: "Hire Java Developer",
            category: "",
            icon: "/java.svg",
            features: [
                "We build high-performance solutions using Next.js, .NET, React, Node.js, Python, Docker, Kubernetes.",
                "AWS — empowering innovation through a future-ready tech stack."
            ]
        },
        {
            id: 3,
            title: "Hire IOS Developer",
            category: "",
            icon: "/iso.svg",
            features: [
                "We build high-performance solutions using Next.js, .NET, React, Node.js, Python, Docker, Kubernetes. ",
                "AWS — empowering innovation through a future-ready tech stack.",
            ]
        }
    ]
};