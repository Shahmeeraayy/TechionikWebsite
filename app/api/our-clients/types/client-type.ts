// clients.types.ts

export interface ClientIndustry {
    id: string;
    name: string;
    slug: string;
}

export interface ClientService {
    id: string;
    name: string;
    slug: string;
}

export interface ClientCaseStudy {
    id: string;
    title: string;
    slug: string;
}

export interface ClientData {
    id: string;
    name: string;
    slug: string;
    logoUrl: string;
    websiteUrl: string;
    description: string;
    shortDescription: string;
    metaTitle: string;
    metaDescription: string;
    metaKeyWords: string;
    templateData: Record<string, any>;
    sortOrder: number;
    industry: ClientIndustry;
    subIndustry: ClientIndustry | null;
    service: ClientService;
    subService: ClientService | null;
    caseStudy: ClientCaseStudy | null;
}

export interface ClientPage {
    templateData: Record<string, any>;
    metaTitle: string;
    metaDescription: string;
    metaKeyWords: string;
}

export interface ClientsApiResponse {
    success: boolean;
    page: ClientPage;
    count: number;
    data: ClientData[];
}