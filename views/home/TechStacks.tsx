"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Category, TechStackData } from "@/data/TechStack/AboutTeckStack";
import { useSlider } from "@/components/hooks/Slider";

type Props = {
  data: TechStackData;
};

export default function TechStack({ data }: Props) {
  const { emblaRef } = useSlider();
  const [active, setActive] = useState<Category | null>("Frontend");

  const filteredStacks = active
    ? data.techIcons.filter((icon) => icon.category.includes(active))
    : data.techIcons;
  const firstRow = [...filteredStacks, ...filteredStacks];
  const secondRow = [...filteredStacks.reverse(), ...filteredStacks.reverse()];

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 my-12">
        {/* Left Side: Heading & Description */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gradient">
            {data.headingData.title}
            <span className="text-gradient">
              {" "}
              {data.headingData.middleTitle}
            </span>
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            {data.headingData.description}
          </p>
        </div>

        {/* Right Side: Filters and Button perfectly inline */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:overflow-hidden max-w-full">
          {/* Carousel for Filters - Full width on mobile, flexible on desktop */}
          <div className="overflow-hidden w-full lg:flex-1" ref={emblaRef}>
            <div className="flex gap-3 items-center">
              {data.filters.map((item: string) => (
                <button
                  key={item}
                  onClick={() =>
                    active === item
                      ? setActive(null)
                      : setActive(item as Category)
                  }
                  className={`h-10 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap shrink-0
            ${
              active === item
                ? "text-white bg-primary-dark"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Button - Full width centered on mobile, shrink-to-fit on desktop */}
          <div className="shrink-0 w-full lg:w-auto flex justify-start lg:block p-3">
            <Button
              ariaLabel="View All Technologies"
              text="View All Technologies"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="/technology"
              variant="glass"
              className="inline-flex w-auto md:w-auto text-foreground justify-between"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl py-6 md:py-10
          bg-black/5 backdrop-blur-xl
          border border-orange-500/20
          shadow-[0_0_80px_rgba(230, 230, 230, 0.18)]"
      >
        <div className="overflow-hidden">
          <div className="flex gap-0 md:gap-6 w-max animate-scroll pause-on-hover">
            {firstRow.map((tech, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center
        min-w-28 md:min-w-37.5 min-h-28 md:min-h-35
        hover:border-orange-500/40 transition"
              >
                <Image
                  src={tech?.icon ?? ""}
                  alt={tech.name}
                  fill
                  className="object-cover "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mt-3 md:mt-6">
          <div className="flex gap-0 md:gap-6 w-max animate-scrollRight pause-on-hover">
            {secondRow.map((tech, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center
        min-w-28 md:min-w-37.5 min-h-28 md:min-h-35
        hover:border-orange-500/40 transition"
              >
                <Image
                  src={tech?.icon ?? ""}
                  alt={tech.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
