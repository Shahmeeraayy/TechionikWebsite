import React from "react";
import Image from "next/image";
import { LifeAtTechionikData } from "@/data/career/LifeAtTechionik";

// Helper component to render the appropriate SVG icon
const PrincipleIcon = ({ name, color }: { name: string; color: string }) => {
  const className = `w-6 h-6 ${color} flex-shrink-0 mt-1`;

  switch (name) {
    case "bulb":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );
    case "book":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    default:
      return null;
  }
};

interface LifeAtTechionikProps {
  data: LifeAtTechionikData;
}

export default function LifeAtTechionik({ data }: LifeAtTechionikProps) {
  return (
    <section className="w-full bg-[--color-bg] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {data.mainHeading}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              {data.description}
            </p>
          </div>

          {/* Principles Section */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold tracking-[0.2em] uppercase text-white">
              {data.subHeading}
            </h3>

            <div className="space-y-8">
              {data.principles.map((principle) => (
                <div key={principle.id} className="flex items-start gap-4">
                  <PrincipleIcon
                    name={principle.iconName}
                    color={principle.iconColor}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Image Grid */}
        {data.images && data.images.length === 3 && (
          <div className="grid grid-cols-2 gap-4 lg:h-[700px]">
            {/* Tall Image (Left) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <Image
                src={data.images[0].src}
                alt={data.images[0].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-6 left-6 text-white text-sm font-medium z-10">
                {data.images[0].label}
              </span>
            </div>

            {/* Stacked Images (Right) */}
            <div className="grid grid-rows-2 gap-4 h-full">
              {/* Top Stacked Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[200px]">
                <Image
                  src={data.images[1].src}
                  alt={data.images[1].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-6 left-6 text-white text-sm font-medium z-10">
                  {data.images[1].label}
                </span>
              </div>

              {/* Bottom Stacked Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[200px]">
                <Image
                  src={data.images[2].src}
                  alt={data.images[2].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-6 left-6 text-white text-sm font-medium z-10">
                  {data.images[2].label}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
