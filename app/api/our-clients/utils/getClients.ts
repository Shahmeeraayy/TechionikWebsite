// clients.utils.ts

import { ClientsApiResponse, ClientData } from "@/app/api/our-clients/types/client-type";
import { IndustryDropdownApiResponse, IndustryDropdownItem } from "@/app/api/our-clients/types/industry-dropdown.type";
import { ServiceDropdownApiResponse, ServiceDropdownItem } from "@/app/api/our-clients/types/service-dropdown.type";
import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";

// The structure your components expect
export interface OurClients {
    id: string; // was number before, now string from API
    name: string;
    logo: string;
    industry: string;
    services: string[];
    href: string;
}

/**
 * Fetch clients from API
 */
export const fetchClients = async (): Promise<OurClients[]> => {
    try {
        const res = await fetch(`${BASE_URL}${ENDPOINTS.ALL_CLIENTS}`);
        const json: ClientsApiResponse = await res.json();

        // Map API structure to OurClients structure
        const mapped: OurClients[] = json.data.map((client: ClientData) => ({
            id: client?.id ?? " ",
            name: client?.name ?? " ",
            logo: client?.logoUrl || "/images/our-clients/marvel.png",
            industry: client?.industry?.name || "Unknown",
            services: client?.service ? [client?.service?.name] : [],
            href: client?.caseStudy ? `/case-studies/${client?.caseStudy?.slug}` : "#",
        }));

        return mapped;
    } catch (error) {
        console.error("Failed to fetch clients:", error);
        return [];
    }
};

/**
 * Fetch industries from API
 */
export const fetchIndustries = async (): Promise<string[]> => {
    try {
        const res = await fetch(`${BASE_URL}${ENDPOINTS.CLIENT_INDUSTRIES}`);
        const json: IndustryDropdownApiResponse = await res.json();

        const industries: string[] = json.data.map((item: IndustryDropdownItem) => item.name);
        return industries;
    } catch (error) {
        console.error("Failed to fetch industries:", error);
        return [];
    }
};

/**
 * Fetch services from API
 */
export const fetchServices = async (): Promise<string[]> => {
    try {
        const res = await fetch(`${BASE_URL}${ENDPOINTS.CLIENT_SERVICES}`);
        const json: ServiceDropdownApiResponse = await res.json();

        const services: string[] = json.data.map((item: ServiceDropdownItem) => item.name);
        return services;
    } catch (error) {
        console.error("Failed to fetch services:", error);
        return [];
    }
};

/**
 * Filter clients by selected industry and service
 */
export const filterClients = (
    clients: OurClients[],
    selectedIndustry: string,
    selectedService: string
): OurClients[] => {
    return clients.filter((client) => {
        const industryMatch = selectedIndustry ? client.industry === selectedIndustry : true;
        const serviceMatch = selectedService ? client.services.includes(selectedService) : true;
        return industryMatch && serviceMatch;
    });
};
