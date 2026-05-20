"use client";
import { NearShoreSoftware, tags } from "@/data/nearShoreSoftware";
import Image from "next/image";
import { useState } from "react";

interface NearshoreSoftwareProps {
  data: NearShoreSoftware;
}

const NearshoreSoftware = ({ data }: NearshoreSoftwareProps) => {
  const [activeFilter, setActiveFilter] = useState<tags | null>(null);
  const filters = data.tags;
  const handleTabClick = (filter: tags) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };
  const activeCards = activeFilter
    ? data.card.filter((item) => item.tag.includes(activeFilter))
    : data.card;

  return (
    <main className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h2 className="text-muted">
            {data.mainTitle}{" "}
            <span className="text-dark-gradient">{data.spanTitle}</span>{" "}
            {data.endTitle}
          </h2>
          <p className="text-muted max-w-full md:max-w-[80%] lg:max-w-[70%]">
            {data.mainDescription}
          </p>
        </div>
        <div>
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
        </div>
      </div>
      {/* Updated Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 my-10 mx-auto justify-items-center">
        {activeCards.map((item, index) => (
          <div
            className="flex flex-col justify-between gap-6 bg-[#16161A] rounded-2xl p-9 w-full max-w-[406px] h-[324px]"
            key={index}
          >
            <div className="h-[64px] w-[64px] flex items-center justify-center rounded-full bg-[#26262B]">
              <Image
                src={item.cardIcon}
                alt={item.cardTitle}
                width={41}
                height={41}
              />
            </div>
            <div>
              <h3><span  className="gradient-text">{item.cardTitle}</span></h3>
              <p className="text-muted py-3">{item.cardDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default NearshoreSoftware;
