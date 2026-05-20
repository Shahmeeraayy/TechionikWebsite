import { ServiceData } from "../services/service-component-types";

export const aboutserviceData: ServiceData = {
    title: "Modern Software",
    middleTitle: "Engineering for Intelligent",
    lastTitle: "AI-Driven Systems",
    description: "Our teams design and develop software solutions that integrate artificial intelligence, automation, and cloud infrastructure to create adaptable systems that support evolving business needs.",
    
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
                "AI automation systems help organizations streamline processes, reduce manual workloads, and improve decision-making through intelligent data analysis. Using machine learning, predictive analytics, and automation technologies, businesses can transform complex operational workflows into efficient digital systems.",
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
                "Modern applications enable organizations to manage operations, deliver services, and interact with customers across digital platforms. Application development focuses on creating secure and scalable systems for web and mobile environments.",
                state: false,
                lists: [
                'Mobile App Development',
                'Web App Development',
                'SaaS App Development',
                'Application modernization',
                'Application integration',
                'Progressive Web App (PWA) Development'
            ],
            href: "/services/custom-software-development/application-development"
        }
    ],
    
    service4: [
        {
            id: 4,
            icon: "icons/data-line.svg",
            title: "Data Science",
            description: 
            "Data science services help organizations extract valuable insights from complex datasets using machine learning, artificial intelligence, and advanced analytics. By analyzing patterns and building predictive models, businesses can make more informed decisions and improve operational performance.",
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
            "Business intelligence solutions transform raw data into actionable insights through analytics platforms, data visualization tools, and reporting systems. Organizations use BI platforms to monitor performance, analyze trends, and support strategic planning.",
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
            "IT staff augmentation provides skilled developers, engineers, and technology specialists who support internal teams and accelerate software development projects.",
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
