import { BASE_URL } from "@/app/api/config/apiConfig";

export const downloadCaseStudyApi = async (payload: any) => {
  console.log("Sending Payload:", payload); // Debugging line

  const response = await fetch(`${BASE_URL}/case-studies/download-form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/pdf',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // This will tell us if it's a 400, 404, or 500 error
    const errorData = await response.json().catch(() => ({}));
    console.error("API Error Response:", errorData);
    throw new Error(errorData.message || `Server responded with ${response.status}`);
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${payload.caseStudySlug || 'case-study'}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
  window.URL.revokeObjectURL(url);
};
