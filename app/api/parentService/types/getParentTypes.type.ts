export interface ParentApiResponse {
  success: boolean;
  count: number;
  data: ParentType[];
  templateData?: {
    [key: string]: any;
  };
}

export interface ParentType {
  id: string;
  name?: string;
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  imageUrl?: string;
  templateData?: {
    whatWeDo?: {
      title?: string;
      description?: string;
      items?: Array<{
        title: string;
        description: string;
      }>;
    };
    [key: string]: any;
  };
  isActive?: boolean;
  hasPage?: boolean;
  [key: string]: any;
}