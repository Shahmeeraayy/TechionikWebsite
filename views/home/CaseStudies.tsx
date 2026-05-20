"use client";

import { useEffect, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyStackMobile from "@/components/CaseStudyCardMobile";
import Button from "@/components/Button";

export type CaseStudyType = {
  id: number;
  brand?: string;
  title: string;
  description: string;
  solution?: string;
  image?: string;
  imageDesktop?: string;
  imageMobile?: string;
  category?: string;
  href?: string;
  stats?: { value: string; label: string }[];
};

type CaseStudiesProps = {
  caseStudies: CaseStudyType[];
};

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [paused, setPaused] = useState(false);

  useEffect(() => {
    if ( !caseStudies.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  if (!caseStudies.length) return null;

  return (
    <section className="w-full md:px-10 px-6 lg:px-20 overflow-visible">

      {/* HEADER */}
      <div className="w-full mb-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex flex-col md:flex-1">
          <h2 className="text-4xl md:text-[44px] font-bold text-gradient tracking-wide">
            Case <span className="text-dark-gradient">Studies</span>
          </h2>
          <p className="text-[#8B8B8B] mt-4 text-sm md:text-base font-normal">
            Discover how Techionik transforms challenges into success stories with AI driven solutions.
          </p>
        </div>

        <div className="mt-4 md:mt-0 shrink-0">
          <Button
            ariaLabel="View All Case Studies"
            text="View All Case Studies"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="/case-study"
            variant="glass"
            className="inline-flex items-center justify-between bg-[#333333] text-foreground hover:bg-[#444444]"
          />
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden w-full mx-auto relative">
        <CaseStudyStackMobile data={caseStudies} />
      </div>

      {/* Desktop Carousel */}
      <div 
        className="hidden md:block relative w-full h-162.5 hover:cursor-grab perspective-[2000px] mt-10"
        // onMouseEnter={() => setPaused(true)}
        // onMouseLeave={() => setPaused(false)}
      >
        {caseStudies.map((item, index) => (
          <CaseStudyCard
            key={item.id}
            data={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;