"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import { journeyData } from "../../../../data/JourneyData";

// Typed easing curves to satisfy Framer Motion's strict Easing type
const SPRING: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};
const FAST: Transition = {
  duration: 0.25,
  ease: [0.4, 0, 1, 1] as [number, number, number, number],
};
const ITEM: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { title, gradientTitle, afterGradientTitle, description, timeline } =
    journeyData;

  const HandleClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const yearVariants: Variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: SPRING },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: FAST,
    }),
  };

  const listVariants: Variants = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.04 },
    },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const itemVariants: Variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0, transition: ITEM },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="hidden lg:flex bg-[--color-bg] text-white min-h-screen pt-20 pb-25 overflow-hidden font-sans flex-col">
      {/* ── Header ── */}
      <div className="px-6 sm:px-16 md:px-24 w-full z-20 mb-40">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gradient">{title} </span>
          <span className="text-dark-gradient">{gradientTitle}</span>
          <span className="text-gradient"> {afterGradientTitle}</span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* ── Visual Section ── */}
      <div className="relative w-full max-w-350 mx-auto px-6 sm:px-16 md:px-24 grow">
        {/* TOP ZONE: absolute card + bullet list pushed right */}
        <div
          className="relative w-full mb-20"
          style={{ minHeight: "clamp(200px, 28vw, 360px)" }}
        >
          {/* Diagonal card — hidden below lg */}
          <div
            className="hidden lg:block absolute z-0 pointer-events-none"
            style={{
              top: "-60px",
              left: "-90px",
              width: "clamp(420px, 56vw, 520px)",
              transform: "rotate(-15deg)",
              opacity: 0.85,
            }}
          >
            <Image
              src="/diagonal-card.png"
              alt="journey card"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bullet list */}
          <div className="relative z-10 flex items-start h-full">
            <div className="w-full lg:pl-[clamp(320px,34vw,420px)]">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeIndex}
                  variants={listVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4 pt-2"
                >
                  {timeline[activeIndex].list.map((listItem, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start text-muted text-base md:text-lg font-light tracking-wide"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#888888] mr-4 mt-[6px] shrink-0" />
                      <span>{listItem}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* YEAR — overlaps card bottom via negative margin, z-10 in front */}
        <div
          className="relative z-10 overflow-hidden"
          style={{ marginTop: "clamp(-160px, -8vw, -100px)" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={yearVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative left-10 leading-none tracking-tighter select-none font-black"
              style={{
                fontSize: "clamp(80px, 17vw, 220px)",
                background:
                  "linear-gradient(90deg, #F05A28 0%, #C4674A 42%, #9E8D87 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {timeline[activeIndex].year}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TIMELINE TRACK */}
        <div className="mt-4 -mx-6 sm:-mx-16 md:-mx-24 overflow-x-auto hide-scrollbar">
          <div className="flex justify-start px-6 sm:px-16 md:px-24 py-2">
            <div className="relative inline-flex items-center shrink-0">
              {/* Connecting line — exactly as wide as the pills */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#222222] -translate-y-1/2 z-0 pointer-events-none" />

              {timeline.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={index}
                    onClick={() => HandleClick(index)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: isActive ? 1.04 : 1.07 }}
                    className={`
                      relative z-10 shrink-0 mx-1.5
                      px-5 sm:px-6 md:px-7 py-2 md:py-2.5
                      rounded-full text-sm sm:text-base md:text-lg
                      transition-colors duration-300 ease-out font-medium
                      ${
                        isActive
                          ? "bg-[#F05A28] text-white shadow-[0_4px_20px_rgba(240,90,40,0.45)]"
                          : "bg-[#1A1A1A] text-[#999999] border border-[#333333] hover:bg-[#2A2A2A] hover:text-white"
                      }
                    `}
                  >
                    {item.year}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
};

export default Journey;
