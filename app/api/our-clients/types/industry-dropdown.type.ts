// industry-dropdown.types.ts

export interface IndustryDropdownItem {
    id: string;
    name: string;
    title: string;
    slug: string;
    imageUrl: string;
}

export interface IndustryDropdownApiResponse {
    success: boolean;
    count: number;
    data: IndustryDropdownItem[];
}