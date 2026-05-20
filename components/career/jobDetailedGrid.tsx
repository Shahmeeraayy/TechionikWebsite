import React from "react";
import { Job } from "@/app/api/career/types/career.types";
import Button from "../Button";

interface JobDetailsGridProps {
  job: Job;
}

export default function JobDetailsGrid({ job }: JobDetailsGridProps) {
  // Helper to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  // Helper component to render individual Job Info fields
  const InfoField = ({ label, value }: { label: string; value?: string }) => {
    if (!value) return null; // Skips rendering if the API didn't return this data point
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        <div className="bg-[#1a1a1a] text-gray-200 rounded-lg px-4 py-3 text-sm capitalize">
          {value}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-20 bg-black text-white">
      {/* 12-Column Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (col-span-7): Job Description */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="py-10">
            <span className="text-4xl font-bold mb-2 text-gradient">
              Job Description
            </span>
          </h2>
          <h3 className=" font-semibold mb-8">
            <span className="text-2xl text-dark-gradient">{job.title}</span>
          </h3>

          {/* Securely render HTML content with Tailwind Typography rules */}
          <div
            className="prose prose-invert max-w-none 
              [&>p]:mb-4 [&>p]:text-gray-300 [&>p]:leading-relaxed 
              [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:text-gray-300
              [&>h4]:text-xl [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-4 [&>h4]:text-white
              [&>strong]:text-white"
            dangerouslySetInnerHTML={{ __html: job.htmlText }}
          />
          <div className="py-6">
            <Button
              text={"I Am Interested"}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href={`/careers/${job.slug}/apply`}
              variant="glass"
              className="inline-flex w-full md:w-auto justify-center"
            />
          </div>
        </div>

        {/* Right Column (col-span-5): Job Information Card */}
        <div className="lg:col-span-5 bg-[#111111] rounded-2xl p-6 md:p-8 border border-gray-800 lg:sticky lg:top-8">
          <h3 className="text-xl font-semibold mb-8 text-white">
            Job Information
          </h3>

          <div className="space-y-6">
            <InfoField label="Industry" value={job.industry} />
            <InfoField
              label="Date Opened"
              value={job.dateOpen ? formatDate(job.dateOpen) : undefined}
            />
            <InfoField label="Salary" value={job.salary} />
            <InfoField label="Job Type" value={job.jobType} />
            <InfoField label="Work Experience" value={job.workExperience} />
            <InfoField label="City" value={job.city} />
            <InfoField label="State/Province" value={job.stateProvince} />
            <InfoField label="Country" value={job.country} />
            <InfoField label="Zip/Postal Code" value={job.zipPostalCode} />
          </div>
        </div>
      </div>
    </section>
  );
}
