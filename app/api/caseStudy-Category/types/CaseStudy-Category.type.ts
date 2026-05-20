export interface CaseStudy_CategoryData{
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
    parentCategoryId: null;
    parentCategoryName: string;
    parentCategorySlug: string;
}



export interface blogCategory{
    success: boolean;
    count: number;
    data: CaseStudy_CategoryData[] 
}