import {
  ApiListResponse,
  ApiSingleResponse,
  Job,
  Department,
  Location
} from "../types/career.types";
import { BASE_URL } from "../../config/apiConfig";

const fallbackDepartment: Department = {
  id: "fallback-engineering",
  name: "Engineering",
  slug: "engineering",
  title: "Engineering",
};

const fallbackLocation: Location = {
  id: "fallback-remote",
  name: "Remote",
  slug: "remote",
  city: "Remote",
  country: "Global",
  departmentId: fallbackDepartment.id,
  department: fallbackDepartment,
  title: "Remote",
  stateProvince: "",
  zipPostalCode: "",
  remoteOnsite: "Remote",
};

const fallbackJobs: Job[] = [
  {
    id: "fallback-frontend-developer",
    title: "Frontend Developer",
    slug: "frontend-developer",
    departmentId: fallbackDepartment.id,
    locationId: fallbackLocation.id,
    department: fallbackDepartment,
    location: fallbackLocation,
    image: "/images/career/squareImg.png",
    htmlText:
      "<p>We are looking for a frontend developer to build responsive, polished web experiences with React and Next.js.</p>",
    industry: "Software Development",
    dateOpen: new Date().toISOString(),
    salary: "Competitive",
    jobType: "Full-time",
    workExperience: "2+ years",
    city: "Remote",
    remoteOnsite: "Remote",
    experiences: "React, Next.js, TypeScript, Tailwind CSS",
    stateProvince: "",
    country: "Global",
    zipPostalCode: "",
    jobExpired: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const fallbackCareersResponse: ApiListResponse<Job> = {
  success: true,
  count: fallbackJobs.length,
  data: fallbackJobs,
};

const fallbackDepartmentsResponse: ApiListResponse<Department> = {
  success: true,
  count: 1,
  data: [fallbackDepartment],
};

const fallbackLocationsResponse: ApiListResponse<Location> = {
  success: true,
  count: 1,
  data: [fallbackLocation],
};

/**
 * Fetches all open career positions
 */
export async function getCareers(): Promise<ApiListResponse<Job> | null> {
  try {
    const response = await fetch(`${BASE_URL}/careers`, {
      // Optional: Add Next.js caching/revalidation options here if needed
      next: { revalidate: 300 } 
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching careers: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch careers:", error);
    return fallbackCareersResponse;
  }
}

/**
 * Fetches a specific career job description by its slug
 */
export async function getCareerBySlug(slug: string): Promise<ApiSingleResponse<Job> | null> {
  try {
    const response = await fetch(`${BASE_URL}/careers/${slug}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching career with slug ${slug}: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch career details for ${slug}:`, error);
    const fallbackJob = fallbackJobs.find((job) => job.slug === slug);
    return fallbackJob ? { success: true, data: fallbackJob } : null;
  }
}

/**
 * Fetches all career departments for the dropdown filter
 */
export async function getCareerDepartments(): Promise<ApiListResponse<Department> | null> {
  try {
    const response = await fetch(`${BASE_URL}/dropdowns/career-departments`);
    
    if (!response.ok) {
      throw new Error(`Error fetching departments: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch career departments:", error);
    return fallbackDepartmentsResponse;
  }
}

/**
 * Fetches all career locations for the dropdown filter
 */
export async function getCareerLocations(): Promise<ApiListResponse<Location> | null> {
  try {
    const response = await fetch(`${BASE_URL}/dropdowns/career-locations`);
    
    if (!response.ok) {
      throw new Error(`Error fetching locations: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch career locations:", error);
    return fallbackLocationsResponse;
  }
}
