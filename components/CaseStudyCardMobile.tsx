"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import type { CaseStudyType } from "@/views/home/CaseStudies";

function MobileCard({
  data,
  index,
  activeIndex,
  total,
  setActiveIndex,
}: {
  data: CaseStudyType;
  index: number;
  activeIndex: number;
  total: number;
  setActiveIndex: (index: number) => void;
}) {
  const stats = data.stats ?? [];
  let offset = index - activeIndex;
  if (offset < 0) offset += total;

  if (offset > 3) {
    return null;
  }

  let scale = 1;
  let translateY = 0;
  let zIndex = 0;
  let opacity = 0;
  let pointerEvents: "auto" | "none" = "none";

  if (offset === 0) {
    scale = 1;
    translateY = 0;
    zIndex = 40;
    opacity = 1;
    pointerEvents = "auto";
  } else if (offset === 1) {
    scale = 0.95;
    translateY = -20;
    zIndex = 30;
    opacity = 1;
    pointerEvents = "auto";
  } else if (offset === 2) {
    scale = 0.90;
    translateY = -40;
    zIndex = 20;
    opacity = 1;
    pointerEvents = "auto";
  } else if (offset === 3) {
    scale = 0.85;
    translateY = -60;
    zIndex = 10;
    opacity = 0.6;
    pointerEvents = "auto";
  } else {
    scale = 0.82;
    translateY = -70;
    zIndex = 0;
    opacity = 0;
    pointerEvents = "none";
  }

  return (
    <div
      className="absolute w-full transition-all duration-500 ease-out"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        zIndex,
        opacity,
        pointerEvents,
        transformOrigin: "top center",
        top: 0,
        left: 0,
        right: 0,
        cursor: offset !== 0 ? "pointer" : "default",
      }}
      onClick={() => {
        if (offset !== 0) setActiveIndex(index);
      }}
    >
      <div
        className={`w-full rounded-[28px] p-6 border flex flex-col transition-all duration-500
          ${offset === 0
            ? "bg-[#16161A] border-[#2A2A34] shadow-2xl"
            : "bg-[#111115] border-[#2A2A34] shadow-none"
          }
        `}
      >
        {offset === 0 ? (
          <div className="flex flex-col gap-5">

            {/* Brand name */}
            <h4 className="service-card-title-sm font-black text-[#E5E5E5] tracking-widest uppercase text-center w-full">
              {data.brand ?? ""}
            </h4>

            {/* Image */}
            <div className="relative w-full" style={{ height: "200px" }}>
              <Image
                src={data.imageDesktop ?? ""}
                alt={data.brand ?? ""}
                fill
                className="object-contain object-center"
                sizes="100vw"
              />
            </div>

            {/* Title */}
            <h3 className="service-card-title text-white leading-snug">
              {data.title} with {data.brand ?? ""}
            </h3>

            {/* Solution */}
            <p className="service-section-description text-[#D1D1D1]">
              <span className="gradient-text font-semibold mr-1">Solution Delivered:</span>
              {data.solution ?? ""}
            </p>

            {/* Stats */}
            <div className="flex flex-col gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <p className="service-card-title-sm gradient-text w-[64px] leading-none shrink-0">
                    {stat.value}
                  </p>
                  <p className="service-body text-[#8B8B8B] font-medium leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-2">
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
        ) : (
          <div style={{ height: "529px" }} />
        )}
      </div>
    </div>
  );
}

interface CaseStudyStackMobileProps {
  data: CaseStudyType[];
}

export default function CaseStudyStackMobile({ data }: CaseStudyStackMobileProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative w-full" style={{ paddingTop: "40px" }}>
      <div className="relative w-full" style={{ minHeight: "540px" }}>
        {data.map((item, i: number) => (
          <MobileCard
            key={i}
            data={item}
            index={i}
            activeIndex={activeIndex}
            total={total}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
}
