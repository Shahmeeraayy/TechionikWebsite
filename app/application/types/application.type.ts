export interface ApiResponse {
  success: boolean;
  data?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    linkDinUrl: string;
    coverLetter: string;
    resumeUrl: string;
    createdAt: string;
  };
  message?: string;
}

export interface ApplicationResult{
    success: boolean;
    data?: ApiResponse['data'];
    error?: string;
}