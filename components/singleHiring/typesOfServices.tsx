"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Service {
  title: string;
  slug: string;
}

interface TypeOfServicesData {
  title: string;
  middleTitle: string;
  lastTitle: string;
  description: string;
  image: string;
  services: Service[];
}

interface TypeOfServicesProps {
  data: TypeOfServicesData;
}

export default function TypeOfServices({ data }: TypeOfServicesProps) {
  const { title, middleTitle, lastTitle, description, image, services } = data;
  const [activeSlug, setActiveSlug] = useState<string>(services[0]?.slug ?? "");
  const router = useRouter();

  const handleServiceClick = (slug: string) => {
    setActiveSlug(slug);
    router.push(`/${slug}`);
  };

  return (
    <section className="bg-[--color-bg] px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-10 max-w-8xl">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4">
            <span className="text-white">{title} </span>
            <span className="text-[#c0522a]">{middleTitle} </span>
            <span className="text-white">{lastTitle}</span>
          </h2>
          <div
            className="text-[#9a9a9a] text-sm md:text-base leading-relaxed [&_p]:m-0 mt-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Card */}
        <div className="bg-[#141416] border border-[#2a2a2d] rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Panel */}
            <div className="relative w-full md:w-[42%] min-h-[260px] md:min-h-[360px] flex-shrink-0 overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={middleTitle}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#0a1628] to-[#060d1a] flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-36 h-36">
                    <div className="absolute inset-0 rounded-full bg-[#1a3a6e]/40 blur-2xl" />
                    <div className="absolute inset-4 rounded-full bg-[#1e4080]/30 blur-xl" />
                    <div className="relative z-10 w-20 h-20 rounded-full border border-[#2a5ab8]/60 bg-[#0d2550]/80 flex items-center justify-center shadow-[0_0_40px_rgba(30,64,128,0.5)]">
                      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4a8ef5" fontFamily="serif">
                          AI
                        </text>
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full border border-[#2a5ab8]/20 animate-spin [animation-duration:12s]" />
                    <div className="absolute inset-[-16px] rounded-full border border-[#1e3a6e]/20 animate-spin [animation-duration:20s] [animation-direction:reverse]" />
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(74,142,245,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,142,245,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Services List */}
            <div className="max-w-6xl mx-auto flex-1 flex flex-col justify-center divide-y divide-[#2a2a2d]">
              {services.map((service) => {
                const isActive = service.slug === activeSlug;
                return (
                  <button
                    key={service.slug}
                    onClick={() => handleServiceClick(service.slug)}
                    className={`w-full text-left px-7 py-4 text-sm font-medium transition-all duration-200 flex items-center gap-3 group cursor-pointer
                      ${isActive
                        ? "text-white bg-[#1e1e22]"
                        : "text-[#7a7a7a] hover:text-[#c8c8c8] hover:bg-[#191919]"
                      }`}
                  >
                    <span
                      className={`w-1 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${
                        isActive ? "bg-[#c0522a]" : "bg-transparent group-hover:bg-[#c0522a]/30"
                      }`}
                    />
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------
export const sampleDataaa: TypeOfServicesData = {
  title: "What types of",
  middleTitle: "software",
  lastTitle: "services our developers have expertise on?",
  description:
    "<p>Our developers have all the expertise to provide comprehensive end-to-end software services. Here we list down some of them for you:</p>",
  image: "",
  services: [
    { title: "Custom Software Development", slug: "custom-software-development" },
    { title: "MVP Development", slug: "mvp-development" },
    { title: "Enterprise Software Development", slug: "enterprise-software-development" },
    { title: "Cloud Applications", slug: "cloud-applications" },
    { title: "Web, Desktop and Mobile App Development", slug: "web-desktop-mobile" },
    { title: "SaaS Development", slug: "saas-development" },
    { title: "Custom APIs Development", slug: "custom-apis-development" },
  ],
};