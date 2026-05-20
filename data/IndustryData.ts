export interface Industry {
    id: number | string;
    title: string;
    image: string;
    link: string;
}

export const industriesData: Industry[] = [
    {
        id: 1,
        title: "Healthcare",
        image: "/Software Development.svg",
        link: "/industries/healthcare"
    },
    {
        id: 2,
        title: "Finance",
        image: "/Software Development (1).svg",
        link: "/industries/finance"
    },
    {
        id: 3,
        title: "Healthcare", // Duplicate for mapping demonstration
        image: "/Software Development.svg",
        link: "/industries/healthcare"
    },
    {
        id: 4,
        title: "Finance",
        image: "/Software Development (1).svg",
        link: "/industries/finance"
    },
    {
        id: 5,
        title: "Healthcare",
        image: "/Software Development (1).svg",
        link: "/industries/healthcare"
    },
    {
        id: 6,
        title: "Finance",
        image: "/Software Development (1).svg",
        link: "/industries/finance"
    }
];