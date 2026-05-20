export type teamsType = "Development Team" | "Design Team" | "Project Manager";

export interface ProjectCard{
    cardImage: string;
    name: string;
    designation: string;
    description: string;
    TechStacks: string[]
    teamType: teamsType[]
}
export interface ProjectTeam{
    mainTitle: string;
    mainDescription: string;
    tags: teamsType[];
    cardData: ProjectCard[]
    

};

export const ProjectTeamData: ProjectTeam=
    {
        mainTitle: "Project Team",
        mainDescription: "High-performing developers for growing companies",
        tags: ["Development Team", "Design Team", "Project Manager"],
        cardData: [
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Development Team"]
            },
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Development Team"]
            },
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Design Team"]
            },
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Design Team"]
            },
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Project Manager"]
            },
            {
                cardImage: "/images/employee1.svg",
                name: "Noman",
                designation: "Software Engineer",
                description: "Develops responsive web interfaces and user experiences with focus on performance and accessibility standards ",
                TechStacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
                teamType: ["Project Manager"]
            },

        ]
    }
