export interface SolutionCard {
    id: number;
    title: string;
    description: string;
    bgPattern: string;
    bgWidth?: string;
    bgHeight?: string;
}

export interface SolutionsData {
    header: {
        title: string;
        middleTitle: string;
        lastTitle: string;
        description: string;
    };
    cards: SolutionCard[];
}

export const tailoredSolutions: SolutionsData = {
    header: {
        title: "Global",
        middleTitle: "Location-Based",
        lastTitle: "IT Outsourcing Services",
        description:
            "Expand your development capacity with our offshore services, tailored to support startups, empower businesses, and streamline enterprise operations with global talent.",
    },
    cards: [
        {
            id: 1,
            title: "Onshore Services",
            description:
                "Our onshore outsourcing services provide local developers who collaborate closely with your team, ensuring smooth communication, regulatory alignment, and faster project delivery.",
            bgPattern: "/flower.png",
            bgWidth: "400px",
            bgHeight: "400px"
        },
        {
            id: 2,
            title: "Nearshore  Services",
            description:
                "Our nearshore outsourcing services connect you with skilled developers in nearby regions, enabling real-time collaboration, cultural alignment, and efficient software development.",
            bgPattern: "/flower2.png",
            bgWidth: "450px",
            bgHeight: "400px"
        },
        {
            id: 3,
            title: "Offshore Services",
            description:
                "Our offshore outsourcing services give access to global talent, reducing development costs while maintaining high-quality software engineering and continuous project progress.",
            bgPattern: "/dotted.png",
            bgWidth: "400px",
            bgHeight: "300px"
        },
    ]
};