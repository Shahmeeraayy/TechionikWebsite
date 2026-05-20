export interface ProcessStep {
    id: string; // e.g., "01"
    title: string;
    description: string;
    extraContent?: string;
    bulletPoints?: {
        label: string;
        text: string;
    }[];
}

export interface HiringProcessData {
    header: {
        mainTitle: string;
        highlightTitle: string;
        subtitle: string;
        description?: string;
    };
    steps: ProcessStep[];
}

export const hiringProcessData: HiringProcessData = {
    header: {
        mainTitle: "How We Hire",
        highlightTitle: "Developers",
        subtitle: "Our technical recruitment team has streamlined these hiring procedures to make the process smoother for our organization.",
    },
    steps: [
        {
            id: "01",
            title: "Technical Role Assessment",
            description: "Our HR specialists compile information from the relevant team which wants to add up any new team member in their existing team.",
            extraContent: "Our HR Specialists Compile Information From The Relevant Team Which Wants To Add Up Any New Team Member In Their Existing Team."
        },
        {
            id: "02",
            title: "HR Interview",
            description: "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
            extraContent: "Our HR Specialists Compile Information From The Relevant Team Which Wants To Add Up Any New Team Member In Their Existing Team.",

            bulletPoints: [
                { label: "Classic Discovery", text: "A Compact Cross-Functional Team Of System Architect + Business Analyst + UX Designer..." },
                { label: "Product Design", text: "Our System Architect, Business Analyst And UX Designer Work With Your Stakeholders..." }
            ]
        },
        {
            id: "03",
            title: "HR Interview",
            description: "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
            extraContent: "Our HR Specialists Compile Information From The Relevant Team Which Wants To Add Up Any New Team Member In Their Existing Team.",

            bulletPoints: [
                { label: "Classic Discovery", text: "A Compact Cross-Functional Team Of System Architect + Business Analyst + UX Designer..." },
                { label: "Product Design", text: "Our System Architect, Business Analyst And UX Designer Work With Your Stakeholders..." }
            ]
        },
        {
            id: "04",
            title: "HR Interview",
            description: "We work with you to create a detailed project specification, from which we design and implement an expedited and risk-averse full-scale development process.",
            extraContent: "Our HR Specialists Compile Information From The Relevant Team Which Wants To Add Up Any New Team Member In Their Existing Team.",

            bulletPoints: [
                { label: "Classic Discovery", text: "A Compact Cross-Functional Team Of System Architect + Business Analyst + UX Designer..." },
                { label: "Product Design", text: "Our System Architect, Business Analyst And UX Designer Work With Your Stakeholders..." }
            ]
        }
    ]
};