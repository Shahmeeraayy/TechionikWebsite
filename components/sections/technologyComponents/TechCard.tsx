"use client";

import { useState } from "react";
import Image from "next/image";
import LoadingLink from "@/components/LoadingLink";
import { TechnologyItem } from "@/data/TechnologiesData";

interface TechCardProps {
  item: TechnologyItem;
}

const TechCard = ({ item }: TechCardProps) => {
  const { name, logo, dotIcon, href } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LoadingLink
      href={href}
      className="block h-[240px] w-[233px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-[#2A2A34] p-6 shadow-[0px_4px_20px_0px_#00000040] transition-all duration-500 ${
          isHovered ? "bg-[#2A2A34]" : "bg-[#000000]"
        }`}
      >
        <div className="relative z-10 mb-3 flex w-full shrink-0 items-center gap-3">
          <Image
            src={dotIcon}
            alt="dot"
            width={10}
            height={10}
            className="h-2.5 w-2.5 shrink-0 object-contain"
          />
          <span className="truncate text-sm font-medium text-white">{name}</span>
        </div>

        <div className="relative z-10 flex min-h-0 flex-grow items-center justify-center">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="(max-width: 768px) 85vw, 233px"
            className="object-contain opacity-100 transition-all duration-300"
          />
        </div>

        <div className="relative z-10 mt-auto flex w-full items-center justify-start pt-2">
          <div className="flex w-full items-center">
            <span
              className={`whitespace-nowrap overflow-hidden text-ellipsis rounded-full bg-[#2A2A34] text-[11px] font-bold text-white transition-all duration-500 ${
                isHovered
                  ? "max-w-[130px] opacity-100 px-4 py-2 mr-2"
                  : "max-w-0 opacity-0 px-0 py-0 mr-0"
              }`}
            >
              View {name}
            </span>

            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isHovered
                  ? "rotate-45 border-orange-500 bg-orange-500"
                  : "border-[#F05323] bg-[#1A1A1F]"
              }`}
            >
              <Image
                src="/icons/arrow-diagonal.svg"
                alt="arrow"
                width={14}
                height={14}
                className="h-3.5 w-3.5 brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </LoadingLink>
  );
};

export default TechCard;
