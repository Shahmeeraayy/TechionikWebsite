import { BASE_URL } from "@/app/api/config/apiConfig";
import { ApplicationResult } from "../types/application.type"

export const submitApplication = async (formData: FormData): Promise<ApplicationResult> =>{
    try{
        const response = await fetch(`${BASE_URL}/careers/applications`,
            {
                method: "POST",
                body: formData
            }
        );
       const result = await response.json();
       if(!response.ok || !result.success){
        throw new Error(result.message || "Failed to submit application");
       }
       return {
        success: true,
        data: result.data,
       }
    } catch(error){
        return {
            success: false,
            error: error instanceof Error ? error.message : "An unknown error occurred",
        }
    }
}
