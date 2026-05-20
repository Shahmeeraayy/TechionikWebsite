import { ServiceData } from "../services/service-component-types";

export const homeserviceData: ServiceData = {
    title: "Our",
    middleTitle: "Core",
    lastTitle: "Services",
    description: "Delivering cutting-edge, AI-powered software and automation solutions, TECHIONIK combines deep engineering expertise and innovation to build intelligent, adaptable systems that drive growth, streamline operations, and empower businesses worldwide.",
    
    slider: {

        service1: [
            {
                id: 1,
                icon: "icons/cloud.svg",
                title: "Software Development",
                description: 
                "Our software development company engineers custom cloud-native architectures and cross-platform applications. Integrating AI-driven automation and API-first design, we execute legacy modernization and full-cycle SDLC to transform complex back-end frameworks into high-performance digital products.",
                state: true,
                lists: [
                    'Custom Software Development',
                    'Mobile app development',
                    'Software Outsourcing',
                    'MVP development',
                    'Enterprise Software Development',
                    'Web development'
                ],
                href: "/services/custom-software-development"
            }
        ],
        
        service2: [
            {
                id: 2,
                icon: "icons/ai-brain.svg",
                title: "AI Automation",
                description: 
                "We design intelligent AI systems that transform operational complexity into clarity, accelerate decision-making, and reveal actionable insights from data, harnessing machine learning, predictive analytics, and advanced automation to reshape how organizations operate.",
                state: false,
                lists: [
                    'Business Process Automation (BPA)',
                    'Sale Automation',
                    'Marketing Automation',
                    'Low-code/no-code (LCNC) automation',
                    'HR Automation',
                    'Calling & Appointment Automation'
                ],
                href: "/services/ai-automation"
            }
        ],
        
        service3: [
            {
                id: 3,
                icon: "icons/vibe-coding.svg",
                title: "Application Development",
                description: 
                "We build custom applications with modern design, helping SMBs and large firms test, secure, manage, migrate, integrate, and optimize digital solutions across web and mobile platforms, accelerating innovation and transforming operations.",
                state: false,
                lists: [
                'Mobile App Development',
                'Web App Development',
                'SaaS App Development',
                'Application modernization',
                'Application integration',
                'Progressive Web App (PWA) Development'
            ],
            href: "/services/custom-software-development/app-development"
        }
    ],
    
    service4: [
        {
            id: 4,
            icon: "icons/data-line.svg",
            title: "Data Science",
            description: 
            "Data science services help organizations uncover business insights by analyzing complex datasets, running experiments, and building predictive models using machine learning, artificial intelligence, deep learning, and advanced analytics platforms.",
            state: false,
            lists: [
                'Data Engineering',
                'Data mining services',
                'Agentic AI Development',
                'Data science consulting',
                'Business intelligence',
                'Generative AI Solutions'
            ],
            href: "/services/data-science"
        }
    ],
    service5: [
        {
            id: 5,
            icon: "icons/data-line.svg",
            title: "Business intelligence",
            description: 
            "Business intelligence solutions turn complex data into actionable insights, helping organizations analyze performance, build interactive dashboards, and support strategic decisions through BI consulting, implementation, data visualization, advanced analytics, and reporting systems.",
            state: false,
            lists: [
                'BI Consulting',
                'BI Implementation',
                'Self Services BI',
                'Dashboard Development',
                'Data Integration',
                'BI Strategy and Roadmap Planning',
            ],
            href: "/services/business-intelligence"
        }
    ],
    service6: [
        {
            id: 6,
            icon: "icons/data-line.svg",
            title: "IT staff augmentation",
            description: 
            "IT staff augmentation services provide skilled developers, engineers, and technology specialists to strengthen internal teams, helping organizations accelerate projects, fill talent gaps, and deliver software solutions faster across web, cloud, and enterprise platforms.",
            state: false,
            lists: [
                'UI/UX Designer',
                'Project Managers',
                'Software Developers',
                'AI & Machine Learning Specialists',
                'Cloud Architects',
                'Quality Assurance Expert'
            ],
            href: "/services/staff-augmentation"
        }
    ],
}
}