export type tags = "Advisory Services" | "Engineering Services" | "Data and AI" | "Optimizing Services"

export interface cardData{
    cardIcon: string;
    cardTitle: string;
    cardDescription: string;
    tag: tags[];
}

export interface NearShoreSoftware{
    mainTitle: string;
    spanTitle: string;
    endTitle: string;
    mainDescription: string;
    tags: tags[];
    card: cardData[];
}

export const NearShoreSoftwareData: NearShoreSoftware ={
    mainTitle: "The Scope Of Our Nearshore",
    spanTitle: "Software Development",
    endTitle: "Services",
    mainDescription: "Our portfolio is expansive. During the thirty years we’ve been in operation, we’ve gained the skills and experience needed to offer broad-ranging, market-leading software and consultancy services.",
    tags: ["Advisory Services","Engineering Services","Data and AI","Optimizing Services"],
    card:[
        {
            cardIcon: "/icons/cloud.svg",
            cardTitle: "Product And Services Design",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ["Advisory Services", "Engineering Services"]
        },
        {
            cardIcon: "/icons/building.svg",
            cardTitle: "Data Science",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ['Data and AI']
        },
        {
            cardIcon: "/icons/box-icon.png",
            cardTitle: "Data Strategy And Consulting",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ['Optimizing Services']
        },
        {
            cardIcon: "/icons/cloud.svg",
            cardTitle: "CyberSecurity",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ['Optimizing Services', 'Engineering Services']
        },
        {
            cardIcon: "/icons/building.svg",
            cardTitle: "Technical Feasibility Study",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ["Advisory Services", "Engineering Services", "Data and AI"]
        },
        {
            cardIcon: "/icons/box-icon.png",
            cardTitle: "Sustainability Consulting",
            cardDescription: "Validate your innovative vision and develop robust product concepts.",
            tag: ["Advisory Services", "Engineering Services", "Data and AI", "Optimizing Services"]
        },
    ]
}