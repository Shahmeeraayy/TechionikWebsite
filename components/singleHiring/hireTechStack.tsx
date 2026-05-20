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

export default function HireTechStack({ data }: Props) {
  const { emblaRef } = useSlider();
  const [active, setActive] = useState<Category | null>("Frontend");

  const filteredStacks = active
    ? data.techIcons.filter((icon) => icon.category.includes(active))
    : data.techIcons;

  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 my-12">
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

        <div className="shrink-0 p-3">
          <Button
            ariaLabel="View All Technologies"
            text="View All Technologies"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="/technology"
            variant="glass"
            className="inline-flex w-auto text-foreground justify-between"
          />
        </div>
      </div>

      {/* Body: Sidebar + Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Filter Buttons stacked in column */}
        <div
          className="flex flex-row md:flex-col gap-3 md:w-52 lg:w-56 shrink-0 overflow-x-auto md:overflow-visible"
          ref={emblaRef}
        >
          {data.filters.map((item: string) => (
            <button
              key={item}
              onClick={() =>
                active === item ? setActive(null) : setActive(item as Category)
              }
              className={`whitespace-nowrap shrink-0 md:w-full text-left px-5 py-3 rounded-full text-sm font-medium transition-all duration-200
                ${
                  active === item
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                    : "bg-zinc-800/60 text-gray-400 hover:bg-zinc-700/80 hover:text-gray-200"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right: Icons Grid inside the card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 rounded-3xl py-6 md:py-10 px-6 md:px-10
            bg-black/5 backdrop-blur-xl
            border border-orange-500/20
            shadow-[0_0_80px_rgba(230,230,230,0.18)]"
        >
          <motion.div
            key={active ?? "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredStacks.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex flex-col items-center justify-center gap-2 group"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-zinc-900 rounded-2xl border border-white/5 hover:border-orange-500/40 transition-all duration-200 overflow-hidden">
                  <Image
                    src={tech?.icon ?? ""}
                    alt={tech.name}
                    fill
                    className="object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {filteredStacks.length === 0 && (
            <div className="flex items-center justify-center min-h-[200px]">
              <p className="text-gray-500 text-sm">No technologies found.</p>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
