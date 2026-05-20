// --- 1. Department Interface ---
export interface Department {
  id: string;
  name: string;
  slug: string;
  title?: string; // Present in the dropdown API, but omitted in the nested job response
}

// --- 2. Location Interface ---
export interface Location {
  id: string;
  name: string;
  slug: string;
  city: string;
  country: string;
  departmentId?: string;
  department?: Department;
  title?: string; // Present in the dropdown API
  stateProvince?: string; // Present in the job nested object
  zipPostalCode?: string; // Present in the job nested object
  remoteOnsite?: string; // Present in the job nested object
}

// --- 3. Job Interface ---
export interface Job {
  id: string;
  title: string;
  slug: string;
  departmentId: string;
  locationId: string;
  department: Department;
  location: Location;
  image: string;
  htmlText: string;
  industry: string;
  dateOpen: string;
  salary: string;
  jobType: string;
  workExperience: string;
  city: string;
  remoteOnsite: string;
  experiences: string;
  stateProvince: string;
  country: string;
  zipPostalCode: string;
  jobExpired: boolean;
  createdAt: string;
  updatedAt: string;
}

// --- 4. API Response Wrappers ---
// Use these to type the actual fetch responses

export interface ApiListResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

export interface ApiSingleResponse<T> {
  success: boolean;
  data: T;
}