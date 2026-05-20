import { ServiceData } from "../services/service-component-types";

export const aboutserviceData: ServiceData = {
    title: "Modern Software",
    middleTitle: "Engineering for Intelligent",
    lastTitle: "Digital Systems",
    description: "Our teams design and develop software solutions that integrate AI, automation, cloud infrastructure, and connected services to support evolving business needs.",
    
    slider: {

        service1: [
            {
                id: 1,
                icon: "icons/cloud.svg",
                title: "Software Development",
                description: 
                "Custom software development enables organizations to build digital platforms tailored to their operational requirements. Development typically includes architecture design, engineering, testing, deployment, and long-term optimization.",
                state: true,
                lists: [
                    'Custom Software Development',
                    'Enterprise Software Development',
                    'MVP Development',
                    'Software Development Outsourcing',
                    'Full-Stack Development',
                    'Front-End Development'
                ],
                href: "/services/software-development"
            }
        ],
        
        service2: [
            {
                id: 2,
                icon: "icons/ai-brain.svg",
                title: "AI & Machine Learning",
                description: 
                "AI and machine learning systems help organizations streamline processes, reduce manual workloads, and improve decision-making through intelligent data analysis and automation.",
                state: false,
                lists: [
                    'AI Consulting Services',
                    'AI Software Development',
                    'Generative AI Development',
                    'Machine Learning Services',
                    'Agentic AI Development',
                    'AI Hire Developers'
                ],
                href: "/services/ai-ml"
            }
        ],
        
        service3: [
            {
                id: 3,
                icon: "icons/vibe-coding.svg",
                title: "Application Development",
                description: 
                "Modern applications enable organizations to manage operations, deliver services, and interact with customers across digital platforms. Application development focuses on creating secure and scalable systems for web and mobile environments.",
                state: false,
            lists: [
                'Mobile App Development',
                'Desktop Application Development',
                'Web Application Development',
                'Application Modernization',
                'Application Integration',
                'Progressive Web App (PWA) Development'
            ],
            href: "/services/application-development"
        }
    ],
    
    service4: [
        {
            id: 4,
            icon: "icons/data-line.svg",
            title: "Data & Analytics",
            description: 
            "Data and analytics services help organizations extract valuable insights from complex datasets using machine learning, business intelligence, and advanced analytics.",
            state: false,
            lists: [
                'Business Intelligence Services',
                'Data Engineering / Big Data',
                'Analytics Strategy',
                'Data Warehousing',
                'Dashboards & Reporting',
                'Data Integration'
            ],
            href: "/services/data-analytics"
        }
    ],
    service5: [
        {
            id: 5,
            icon: "icons/cloud.svg",
            title: "Infrastructure & DevOps",
            description: 
            "Infrastructure and DevOps services help organizations build reliable cloud foundations, improve deployment pipelines, and keep release operations stable.",
            state: false,
            lists: [
                'DevOps Services & Solutions',
                'Cloud Services / Cloud Migration',
                'CI/CD Automation',
                'Observability',
                'Environment Management',
                'Release Operations',
            ],
            href: "/services/infrastructure-devops"
        }
    ],
    service6: [
        {
            id: 6,
            icon: "icons/browser.svg",
            title: "Integration & APIs",
            description: 
            "Integration and API services connect systems, automate workflows, and keep data moving cleanly across the stack.",
            state: false,
            lists: [
                'Custom API Development',
                'CMS Development',
                'ERP Software Development',
                'Workflow Automation',
                'Platform Integration',
                'Data Sync Services'
            ],
            href: "/services/integration-api"
        }
    ],
}
}
