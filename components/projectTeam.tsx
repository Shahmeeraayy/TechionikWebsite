"use client";
import { ProjectTeam, teamsType } from "@/data/projectTeamData";
import Image from "next/image";
import { useState } from "react";
import { useSlider } from "./hooks/Slider";
interface ProjectTeamProps {
  data: ProjectTeam;
}

const ProjectTeamCard = ({ data }: ProjectTeamProps) => {
  const { emblaRef, emblaApi } = useSlider();
  const filters = data.tags;
  const [activeFilter, setActiveFilter] = useState<teamsType | null>(null);
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTabClick = (filter: teamsType) => {
    setActiveFilter(filter === activeFilter ? null : filter);
    // setActiveIndex(null);
  };
  // const ActiveCard = activeIndex !== null ? data.cardData[activeIndex] : null;
  const FilteredCards = activeFilter
    ? data.cardData.filter((card)=> card.teamType.includes(activeFilter))
    : data.cardData;

  return (
    <main className="my-15">
      <div>
        <h2 className="gradient-text">{data.mainTitle}</h2>
        <p className="text-muted">{data.mainDescription}</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 flex-wrap my-10">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => handleTabClick(item)}
            className={`px-4 py-2 rounded-full text-sm transition-all
                  ${
                    activeFilter === item
                      ? " text-white bg-primary-dark"
                      : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      {/* Card Grid / Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 w-full">
          {FilteredCards.map((item, index) => (
            <div
              className="flex-none w-[362px] h-[323px] bg-[#111111] border border-zinc-800 rounded-2xl mr-6 p-6 flex flex-col gap-5"
              key={index}
            >
              {/* Header: Image & Info */}
              <div className="flex gap-4 items-center">
                <div className="w-[127px] h-[80px] shrink-0 bg-slate-600 rounded-xl overflow-hidden border border-zinc-700">
                  <Image
                    src={item.cardImage}
                    alt={item.name}
                    width={127}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-white text-lg font-medium">
                    {item.name}
                  </h6>
                  <p className="text-zinc-400 text-sm mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>

              {/* Description Body */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex gap-2 flex-wrap mt-auto pt-2">
                {item.TechStacks.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-zinc-200 text-zinc-900 text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectTeamCard;
