import React from "react";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Job } from "@/app/api/career/types/career.types";
import Link from "next/link";
import Button from "../Button";

interface JobHeroProps {
  job: Job;
  buttons?: boolean;
}

export default function CareerHero({ job, buttons = true }: JobHeroProps) {
  // Helper function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${job.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl animate-fadeIn">
        {/* Breadcrumb / Tag */}
        <div className="border border-[#f05323]/50 bg-black/40 rounded-full px-4 py-1.5 mb-6 flex items-center gap-2 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#f05323]"></span>
          TECHIONIK | <span className="capitalize">{job.jobType}</span>
        </div>

        {/* Job Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
          {job.title}
        </h1>

        {/* Location & Date */}
        <p className="text-gray-300 text-base md:text-lg mb-8">
          {job.city}, {job.country} | Posted on {formatDate(job.createdAt)}
        </p>

        {/* Action Buttons */}
        {buttons && (
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <Button
              text="I'm interested"
              href={`/careers/${job.slug}/apply`}
              // icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              variant="gradient"
              className="inline-flex w-full md:w-auto justify-center"
            />
            <Link href="#">
              <button className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-colors">
                Share job via email
              </button>
            </Link>
          </div>
        )}

        {/* Social Share */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-400 text-sm">
            Share this job with your network
          </span>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Inline styles for the fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
