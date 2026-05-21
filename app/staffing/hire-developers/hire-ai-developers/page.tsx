import type { Metadata } from "next";
import HireAiDevelopersPage from "@/components/service-pages/hire-ai-developers/HireAiDevelopersPage";

export const metadata: Metadata = {
  title: "Hire AI Developers for Custom AI & Machine Learning Solutions | Techionik",
  description:
    "We help businesses create AI and machine learning solutions that grow with your operations, automating key processes, and driving smarter, faster results. Our pre-vetted AI developers can join your team in just two weeks.",
};

export default function StaffingHireAiDevelopersPage() {
  return <HireAiDevelopersPage />;
}
