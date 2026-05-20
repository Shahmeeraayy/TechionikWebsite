export interface TTechnologyExpertiseCardData{
    id: number;
    title: string;
    description: string[];
    icon: string;
    

}
export interface TechnologyExpertise {
    mainTitle: string;
    mainDescription?: string
    cards: TTechnologyExpertiseCardData[]
}

export const TechnologyExpertiseData: TechnologyExpertise = {
    mainTitle: "The scope of our healthcare software development services",
    mainDescription: "We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.",
    cards: [
    {
        id: 1,
        title:"Computer Vision",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    {
        id: 2,
        title:"Data Mining",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    {
        id: 3,
        title:"Natural Language Processing",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    {
        id:4 ,
        title:"Data Science and Machine Learning",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    {
        id: 5,
        title:"Mixed Augmented and Virtual Reality",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    {
        id: 6,
        title:"Natural Language Processing",
        description: ["Interactive medical imaging solutions", "Advanced diagnostics and screening applications", "Intelligent screening tools", "Medical staff training tools and simulators", "Lab tests automation solutions"],
        icon: "/icons/box-icon.png"
    },
    ]
}