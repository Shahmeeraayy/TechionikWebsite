"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import TechCard from "@/components/sections/technologyComponents/TechCard";
import { EmergingTechData } from "@/data/TechnologiesData"; 
import { IApiTechnology } from "@/app/api/technology/utils/getAllTechnologies";

// --- Internal UI Interfaces ---
interface TechnologyItem {
  id: string;
  name: string;
  logo: string;
  dotIcon: string;
  href: string;
  slug: string;
}

interface TechnologyHead {
  title: string;
  subTitle?: string;
}

interface TechnologyProps {
  apiData: IApiTechnology[];
}

const Technology = ({ apiData }: TechnologyProps) => {
  // Process the API data instantly without useEffect using useMemo
  const { uniqueHeads, dynamicPills } = useMemo(() => {
    const headsMap = new Map<string, TechnologyHead>();
    const servicesSet = new Set<string>();

    apiData.forEach((tech) => {
      tech.heads?.forEach((head) => {
        if (!headsMap.has(head.title)) {
          headsMap.set(head.title, { title: head.title, subTitle: "" });
        }
      });

      tech.services?.forEach((service) => {
        servicesSet.add(service.title);
      });
    });

    return {
      uniqueHeads: Array.from(headsMap.values()),
      dynamicPills: Array.from(servicesSet),
    };
  }, [apiData]);

  // UI Selection State for Emerging Technologies (The Filter)
  // Default to the first pill if available, otherwise empty string
  const [activePill, setActivePill] = useState<string>("");

  const mapTechToUI = (tech: IApiTechnology): TechnologyItem => {
    const imageUrl = tech?.imageUrl || tech?.iconUrl || "/icons/tech-default.svg";
    return {
      id: tech?.id,
      name: tech?.name,
      logo: imageUrl,
      dotIcon: "/icons/eclipse-orange.svg",
      href: `/technology/${tech.slug}`,
      slug: tech?.slug,
    };
  };

  // Handle empty state if no data comes back from the server
  if (!apiData || apiData.length === 0) {
    return (
      <div className="mt-[144px] min-h-[50vh] flex items-center justify-center text-white text-xl">
        No Technologies found.
      </div>
    );
  }

  return (
    <main>
      <div className="mt-[80px] md:mt-[144px] px-6 md:px-16 lg:px-[110px] max-w-screen-2xl mx-auto">
        
        {/* Top Categories (Heads) */}
        {uniqueHeads.map((head, index) => {
          // FILTER LOGIC
          const matchingTechs = apiData.filter((tech) => {
            const belongsToHead = tech.heads?.some((h) => h.title === head.title);
            const matchesService = activePill ? tech.services?.some((s) => s.title === activePill) : true;
            return belongsToHead && matchesService;
          });

          return (
            <div key={index} className="mb-[80px] md:mb-[144px]">
              <h2 className="mb-[37px] flex items-center gap-1">
                <span className="text-gradient bg-clip-text text-transparent">
                  {head.title}
                </span>
                {head.subTitle && (
                  <span className="text-[#64748b] font-normal text-[26px] ml-3 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFFF_0%,#999999_100%)] bg-clip-text text-transparent">
                    {head.subTitle}
                  </span>
                )}
              </h2>
              
              {/* Cards Grid */}
              <div className="flex flex-wrap gap-[28px] justify-center md:justify-start min-h-[240px]">
                {matchingTechs.map((tech, techIndex) => (
                  <TechCard key={techIndex} item={mapTechToUI(tech)} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Emerging Innovation & Disruptive Technologies Section */}
        {dynamicPills.length > 0 && (
          <div className="mb-[80px] md:mb-[144px]">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[--color-text] leading-tight mb-4">
              {EmergingTechData.title}{" "}
              <span className="text-dark-gradient text-[#F05323]">
                {EmergingTechData.spanTitle}
              </span>{" "}
              & <br />
              {EmergingTechData.endTitle}
            </h2>
            
            <p className="text-[#64748b] text-[14px] md:text-[16px] mb-10 max-w-2xl tracking-wide">
              <span className="text-[#a1a1aa] font-medium mr-1">
                {EmergingTechData.descriptionTitle}
              </span>
              {EmergingTechData.description}
            </p>

            {/* Dynamic Technology Pills */}
            <div className="flex flex-wrap gap-4 md:gap-5">
              {dynamicPills.map((pill, idx) => {
                const isActive = activePill === pill;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePill(isActive ? "" : pill)}
                    className={`flex items-center justify-center px-6 py-4 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#F05323] text-white shadow-[0px_4px_20px_0px_rgba(240,83,35,0.3)]"
                        : "bg-[#2A2A34] text-[#e2e8f0] hover:bg-[#3A3A44]"
                    }`}
                  >
                    {pill}
                    {isActive && (
                      <Image
                        src="/icons/arrow-diagonal.svg"
                        alt="arrow"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 ml-2 brightness-0 invert"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default Technology;

