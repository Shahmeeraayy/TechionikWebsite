"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, MapPin, Clock } from "lucide-react";
import { Job, Department, Location } from "@/app/api/career/types/career.types"; // Adjust path as needed

interface OpenPositionsProps {
  initialJobs: Job[];
  departments: Department[];
  locations: Location[];
}

export default function OpenPositions({
  initialJobs,
  departments,
  locations,
}: OpenPositionsProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [expandedGroups, setExpandedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  // 1. Filter jobs based on selected dropdowns
  const filteredJobs = initialJobs.filter((job) => {
    const matchDept =
      selectedDepartment === "All" ||
      job.department?.slug === selectedDepartment;
    const matchLoc =
      selectedLocation === "All" || job.location?.slug === selectedLocation;
    return matchDept && matchLoc;
  });

  // 2. Group the filtered jobs by Job Title
  const groupedJobs = filteredJobs.reduce(
    (acc: { [key: string]: Job[] }, job) => {
      if (!acc[job.title]) {
        acc[job.title] = [];
      }
      acc[job.title].push(job);
      return acc;
    },
    {},
  );

  // Toggles the accordion state for grouped jobs
  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Helper to format the location string
  const formatLocation = (job: Job) => {
    if (job.remoteOnsite === "remote") return "Remote";
    const type = job.remoteOnsite
      ? job.remoteOnsite.charAt(0).toUpperCase() + job.remoteOnsite.slice(1)
      : "";
    return `${job.city}${type && type.toLowerCase() !== job.city.toLowerCase() ? ` / ${type}` : ""}`;
  };

  return (
    <section className="w-full bg-[--color-bg] bg-black text-white py-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-gray-800 pb-10 mb-2">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Open Positions
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Find your next role and help us build the future.
            </p>
          </div>

          <div className="flex gap-4">
            {/* Department Filter */}
            <div className="relative">
              <select
                className="bg-[#1a1a1a] text-gray-300 text-sm px-4 py-2.5 rounded-lg outline-none border border-transparent focus:border-gray-600 cursor-pointer appearance-none pr-10 min-w-[160px]"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.slug}>
                    {dept.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <select
                className="bg-[#1a1a1a] text-gray-300 text-sm px-4 py-2.5 rounded-lg outline-none border border-transparent focus:border-gray-600 cursor-pointer appearance-none pr-10 min-w-[150px]"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.slug}>
                    {loc.title || loc.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col">
          {Object.keys(groupedJobs).length === 0 ? (
            <p className="text-gray-500 py-8 text-center">
              No open positions match your selected filters.
            </p>
          ) : (
            Object.entries(groupedJobs).map(([title, jobsGroup]) => {
              const isSingle = jobsGroup.length === 1;
              const isExpanded = expandedGroups[title] || false;
              const primaryJob = jobsGroup[0];

              return (
                <div
                  key={title}
                  className="border-b border-gray-900/80 flex flex-col"
                >
                  <Link href={`/careers/${primaryJob.slug}`}>
                  {/* Main Row */}
                  <div className="py-8 flex items-center justify-between group cursor-pointer" >
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl md:text-2xl font-normal text-gray-100 tracking-wide">
                        {title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          {formatLocation(primaryJob)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="capitalize">
                            {primaryJob.jobType}
                          </span>
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{primaryJob.workExperience}</span>
                      </div>
                    </div>

                    {/* Action Button: Arrow (if single) OR Plus/Minus (if multiple) */}
                    {isSingle ? (
                      // <Link href={`/careers/${primaryJob.slug}`}>
                        <button className="flex items-center justify-center text-gray-500 hover:text-white transition-colors p-2">
                          <ArrowRight className="w-6 h-6" />
                        </button>
                      // </Link>
                    ) : (
                      <button
                        onClick={() => toggleGroup(title)}
                        className="w-9 h-9 rounded-full bg-[#333333] flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                      >
                        {isExpanded ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </div>
                  </Link>

                  {/* Expanded Sub-rows (Accordion) */}
                  {!isSingle && isExpanded && (
                    <div className="pl-4 md:pl-8 pb-8 space-y-4 pt-2">
                      {jobsGroup.map((job) => (
                        <div
                          key={job.id}
                          className="flex items-center justify-between group bg-[#0a0a0a] p-4 rounded-lg border border-gray-900"
                        >
                          <div className="flex flex-col gap-2">
                            <span className="text-lg text-gray-300">
                              {job.title}
                            </span>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5" />
                                {formatLocation(job)}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                              <span>{job.workExperience}</span>
                            </div>
                          </div>

                          <Link href={`/careers/${job.slug}`}>
                            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                              <ArrowRight className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
