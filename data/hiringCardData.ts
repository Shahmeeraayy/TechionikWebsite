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

export const hiringData: HiringPageData = {
    header: {
        mainTitle: "Hire a Dedicated",
        highlightTitle: "Offshore Developer",
        subtitle: "We work with all kinds of businesses, from Startups to SMB's and Large-scale enterprises!",
    },
    cards: [
        {
            id: 1,
            title: "Hire Front-end ",
            category: "Developers",
            icon: "/frontend.png",
            features: [
                "Seamless and user-centric web and app design approaches.",
                "Ensure rapid project deployment.",
                "45+ front-end developers.",
                "7+ Years of average working experience."
            ]
        },
        {
            id: 2,
            title: "Hire Back-end",
            category: "Developers",
            icon: "/backend.png",
            features: [
                "Expertise in databases, server technologies, API integration.",
                "Skilled in .NET, PHP, Python, Node.js, Ruby and more.",
                "120+ backend developers."
            ]
        },
        {
            id: 3,
            title: "Hire Full-Stack",
            category: "Developers",
            icon: "/fullstack.png",
            features: [
                "Ability to handle everything from UI/UX design to database management.",
                "Proficient in both front-end and back-end technologies.",
                "MERN and MEAN stack developers.",
                "30+ full-stack developers."
            ]
        }
    ]
};