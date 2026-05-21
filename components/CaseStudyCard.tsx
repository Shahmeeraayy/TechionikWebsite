// components/CaseStudyCard.tsx
"use client";

import Image from "next/image";
import Button from "./Button";
import type { CaseStudyType } from "@/views/home/CaseStudies";

interface CaseStudyCardProps {
  data: CaseStudyType;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function CaseStudyCard({
  data,
  index,
  activeIndex,
  setActiveIndex,
}: CaseStudyCardProps) {
  const stats = data.stats ?? [];
  // Calculate position relative to the active card
  const offset = index - activeIndex;

  let scale = 1;
  let translateY = 0;
  let zIndex = 30;
  let opacity = 1;

  // Render up to 3 cards behind the active one to create the full stack
  if (offset === 0) {
    scale = 1;
    translateY = 0;
    zIndex = 40;
    opacity = 1;
  } else if (offset === 1) {
    scale = 0.95;
    translateY = -45;
    zIndex = 30;
    opacity = 1;
  } else if (offset === 2) {
    scale = 0.9;
    translateY = -90;
    zIndex = 20;
    opacity = 1;
  } else if (offset === 3) {
    scale = 0.85;
    translateY = -135;
    zIndex = 10;
    opacity = 1;
  } else if (offset > 3) {
    scale = 0.8;
    translateY = -180;
    zIndex = 0;
    opacity = 0;
  } else {
    scale = 0.95;
    translateY = 50;
    zIndex = 0;
    opacity = 0;
  }

  return (
    <div
      className={`absolute transition-all duration-300 ease-out w-full max-w-full cursor-pointer`}
      style={{
        transform: `translate(-50%, ${translateY}px) scale(${scale})`,
        zIndex: zIndex,
        opacity: opacity,
        // Allow the active card to grow dynamically to prevent clipping, keep background cards uniform
        height: offset === 0 ? "auto" : "529px",
        minHeight: "529px",
        left: "50%",
        top: "140px",
        transformOrigin: "top center",
        pointerEvents: opacity === 1 ? "auto" : "none",
      }}
      onClick={() => setActiveIndex(index)}
    >
      <div
        className={`w-full h-full rounded-[32px] p-6 md:p-8 lg:p-12 border transition-all duration-300 flex flex-col overflow-hidden
          ${
            offset === 0
              ? "bg-[#16161A] border-[#2A2A34] shadow-2xl"
              : "bg-[#111115] border-[#2A2A34] shadow-none"
          }
        `}
      >
        {offset === 0 && (
          // Changed lg:flex-row to md:flex-row and adjusted gap scaling
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 h-full w-full">
            {/* Left Content */}
            <div className="md:w-[55%] flex flex-col justify-center h-full">
                <h3 className="service-card-title text-white leading-snug mb-4 md:mb-6">
                {data.title} <br className="hidden md:block" />
                {/* with  */}
                {data.brand ?? ""}
              </h3>

              <p className="service-section-description text-[#D1D1D1] mb-6 md:mb-8 lg:mb-10">
                <span className="gradient-text font-semibold mr-2">
                  Solution Delivered:
                </span>
                {data.solution ?? ""}
              </p>

              {/* Scaled gaps and margins for medium screens */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4 md:gap-6">
                    <p className="service-card-title-sm gradient-text w-[60px] md:w-[70px] leading-none">
                      {stat.value}
                    </p>
                    <p className="service-body text-[#8B8B8B] font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  ariaLabel="Read full Case Study"
                  text="Read full Case Study"
                  icon="/icons/arrow-right.svg"
                  size="medium"
                  radius="full"
                  href={data.href}
                  variant="glass"
                  className="bg-[#2A2A34] hover:bg-[#333333] text-white border border-[#3A3A45] pl-6 pr-2 py-2 inline-flex items-center w-max gap-4"
                />
              </div>
            </div>

            {/* Right Content */}
              <div className="md:w-[45%] flex flex-col items-center justify-center relative w-full mt-6 md:mt-0">
                <h4 className="service-card-title-sm font-black text-[#E5E5E5] tracking-widest mb-4 uppercase text-center w-full">
                  {data.brand ?? ""}
                </h4>
              {/* Scaled image height for smaller devices */}
              <div className="relative w-full flex-1 min-h-[200px] md:min-h-[250px] lg:min-h-[350px]">
                <Image
                  src={data.imageDesktop ?? ""}
                  alt={data.brand ?? ""}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
