interface CulturalItem {
    icon: string;
    title: string;
    description: string;
}

interface CultureData {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    culturePoints: CulturalItem[];
    valuePoints: CulturalItem[];
}

export const cultureData: CultureData = {
    title: "Our Culture & Values",
    description: 
        "We're passionate about creating innovative solutions and believe teamwork gets the best results (collaboration fuels success). Learn how we bring these values to life at TECHIONIK.",
    imageUrl: "/images/about/boardMember.svg",
    altText: "Board Members",
    culturePoints: [
        {
            icon: "icons/people-team.svg",
            title: "Our Culture",
            description:
                "We believe in a culture of curiosity, collaboration, and continuous growth. From day one, we’ve built a space where ideas flow freely, teamwork thrives, and people feel empowered to do their best work—while having fun along the way."
        }
    ],
    valuePoints: [
        {
            icon: "icons/values.svg",
            title: "Our Values",
            description:
                "Our values are the foundation of everything we do. They guide how we work, how we treat people, and how we grow together. We lead with integrity, put people first, stay curious, and always aim higher. Because great work starts with great principles."
        }
    ]
}