"use client";

import { useState } from "react";
import Image from "next/image";
import { stepsData, WhyChooseNext } from "@/data/chooseNextjs";
import { motion, AnimatePresence } from "framer-motion";

interface ThreeColumnSectionProps {
  stepsData: WhyChooseNext;
}
const ThreeColumnSection = ({ stepsData }: ThreeColumnSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!stepsData?.cards || stepsData.cards.length === 0) {
    return null;
  }

  const activeStep = stepsData.cards[activeIndex];

  const cubeSize = 300;
  const rowHeight = 108;

  return (
    <section className="max-w-8xl mx-auto px-6 pb-10 sm: hidden md:hidden lg:block">
      <div className="mb-15 sm:hidden md:hidden lg:block">
        <h2 className="capitalize text-muted lg:w-[60%] xl:w-[50%]">
          {stepsData.mainTitle}{" "}
          <span className="gradient-text">{stepsData.middleTitle}</span>
          {stepsData.endTitle}
        </h2>
        <p
          className="text-muted lg:w-[60%] xl:w-[50%]"
          dangerouslySetInnerHTML={{ __html: stepsData.mainDescription }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        {/* ================= LEFT COLUMN ================= */}
        <div className="relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-[#16161A] p-8 rounded-3xl"
            >
              <Image
                src={activeStep.icon || "/icons/smallbd.svg"}
                alt={activeStep.iconAlt || "icon alt text"}
                width={50}
                height={50}
              />

              <div className="mt-6 text-4xl font-bold text-muted">
                {activeStep.id.toString().padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-4">
                {activeStep.title}
              </h3>

              <p
                className="text-muted mt-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activeStep.description }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= CENTER COLUMN ================= */}
        <div className="flex flex-col items-center gap-5">
          {stepsData.cards.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="flex items-center justify-center relative left-13"
                style={{
                  height: rowHeight,
                  marginTop: index === 0 ? 0 : -18,
                }}
              >
                <Image
                  src={
                    isActive
                      ? "/images/technology/cube-orange.svg"
                      : "/images/technology/cube-black.svg"
                  }
                  alt="cube"
                  width={cubeSize}
                  height={cubeSize}
                  className={`transition-all scale-125 duration-300 ${
                    isActive ? "z-10" : "opacity-100"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col">
          {stepsData.cards.map((step, index) => (
            <div
              key={step.id}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer flex items-center group"
              style={{ height: rowHeight }}
            >
              <Image
                src="/images/technology/dotted-line.svg"
                alt="line"
                width={100}
                height={10}
              />

              <span
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                  index === activeIndex
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-muted group-hover:text-white"
                }`}
              >
                {step.id.toString().padStart(2, "0")}
              </span>

              <span
                className={`ml-3 transition-all ${
                  index === activeIndex
                    ? "text-[--color-text]"
                    : "text-muted group-hover:text-white"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
