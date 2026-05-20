export interface SkillCard {
    id: number;
    title: string;
    icon: string; // SVG or icon path
    skills?: string[];
    description?: string; // HTML content
}

export interface ProgrammerSkillsData {
    header: {
        mainTitle: string;
        highlightTitle: string;
        brandName: string;
        subtitle: string;
        description?: string;
    };
    cards: SkillCard[];
}

export const skillsData: ProgrammerSkillsData = {
    header: {
        mainTitle: "Hire The Best",
        highlightTitle: "Offshore Programmers",
        brandName: "with TECHIONIK",
        subtitle: "Our outsourcing models are designed to optimize your operational success and project outcomes.",
        description: "With over 500+ successful project deployments and 100+ enterprise clients, Techionik stands as a beacon of technological excellence and client-centric innovation. We specialize in transforming complex business challenges into scalable, AI-powered digital solutions that drive measurable growth. Our commitment to quality, transparency, and timely delivery has earned us a reputation as a trusted partner for businesses looking to enhance their digital presence and operational efficiency."
    },
    cards: [
        {
            id: 1,
            title: "Technical Developers Skills",
            icon: "/iconoir_developer.png",
            skills: [
                "Proficiency across modern programming languages and frameworks.",
                "Expertise in web development frameworks and libraries.",
                "Strong grip on database technologies, including relational databases and NoSQL databases for efficient data management.",
                "Experience with DevOps practices and tools for (CI/CD) pipelines."
            ]
        },
        {
            id: 2,
            title: "Non-Technical Development Skills",
            icon: "/mdi_settings-refresh-outline.png",
            skills: [
                "Embracing global work environments with sensitivity to cultural differences.",
                "Anticipating challenges and proposing innovative solutions.",
                "Delivering quality work within timelines.",
                "Fluent in English speaking to avoid the communication gaps."
            ]
        }
    ]
};