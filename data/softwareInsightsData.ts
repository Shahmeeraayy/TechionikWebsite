interface InsightSteps{
    mainHeading: string;
    descriptionList: string[]
}

export interface SoftwareInsights{
    startTitle: string;
    spanTitle: string;
    endTitle: string;
    InsightSteps: InsightSteps[]
}
export const SoftwareInsightData: SoftwareInsights ={
    startTitle: "Our",
    spanTitle: "Software Development",
    endTitle: "Insights",
    InsightSteps: [
        {
            mainHeading: "In-Depth Guides",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Development Fundamentals",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Team And Culture",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Metrics And Planning",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Customer And Project Management",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "In-Depth Guides",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Metrics And Planning",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "Customer And Project Management",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
        {
            mainHeading: "In-Depth Guides",
            descriptionList: ['How To Build Software', 'Software Development Automation', 'Secure Software Development', 'GDPR Compliance In Software', 'Development']
        },
    ]
}