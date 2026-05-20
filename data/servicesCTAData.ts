import { CALENDLY_URL } from "@/utils/links";

export interface ServicesCTAInterface {
    startTitle: string;
    spanTitle: string;
    endTitle: string;
    bgImage: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
}

export const ServicesCTAData: ServicesCTAInterface = {
    startTitle: "Your",
    spanTitle: "Innovation",
    endTitle: "Journey Starts Here",
    description: "Accelerate Digital Transformation With Cutting-Edge Development, Cloud DevOps, and IT Infrastructure Services",
    bgImage: "/banners/servicesCTA.png",
    buttonLabel: 'Talk to an expert',
    buttonUrl: CALENDLY_URL
    
} 
