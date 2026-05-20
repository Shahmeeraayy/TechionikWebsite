// services-dropdown.types.ts

export interface ServiceDropdownIndustry {
    id: string;
    name: string;
    title: string;
    slug: string;
    type: string; // e.g., "industry"
    shortDescription: string;
    imageUrl: string;
    metaTitle: string;
    metaDescription: string;
    metaKeyWords: string;
    metaId: number;
}

export interface ServiceDropdownItem {
    id: string;
    name: string;
    title: string;
    slug: string;
    imageUrl: string;
    industries: ServiceDropdownIndustry[];
}

export interface ServiceDropdownApiResponse {
    success: boolean;
    count: number;
    data: ServiceDropdownItem[];
}