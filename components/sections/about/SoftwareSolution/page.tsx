"use client";
import React from "react";
import { useSlider } from "@/components/hooks/Slider";
import { SoftwareSolutions } from "../../../../data/SoftwareSolution";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { createMarkup } from "@/utils/GlobalFuntions";

interface SoftwareSolutionProps {
  data: SoftwareSolutions;
}

const SolutionCard = ({
  member,
  index,
}: {
  member: SoftwareSolutions["items"][0];
  index: number;
}) => {
  const [clicked, setClicked] = React.useState(index === 0);

  return (
    <div
      onClick={() => setClicked((prev) => !prev)}
      className="
           group shrink-0 basis-full md:basis-1/2 lg:basis-1/3
           max-w-86.5 h-102.75 flex flex-col rounded-2xl bg-[#111111]
           border border-white/5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]
           overflow-hidden cursor-pointer mx-2
           
           "
    >
      <div className="relative h-1/2 pl-8 pt-10 pr-8 space-y-4">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h3 className="relative z-10 service-card-title text-white">
          {member.title}
        </h3>
        <p
          className={`relative z-10 service-rich-text text-muted transition-opacity duration-500
             ${clicked ? "opacity-100 lg:opacity-100" : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"}
          `}
          dangerouslySetInnerHTML={createMarkup(member.description)}
        />
      </div>

      <div className="relative h-1/2 w-full">
        <Image
          src={member.image}
          alt={member.alt}
          fill
          className={`object-cover transition-opacity duration-500
             ${clicked ? "opacity-0 lg:opacity-0" : "opacity-100 lg:opacity-100 lg:group-hover:opacity-0"}
          `}
        />
        <Image
          src={member.hoverImage || ""}
          alt={member.alt}
          fill
          className={`object-cover transition-opacity duration-500
             ${clicked ? "opacity-100 lg:opacity-100" : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"}
          `}
        />
      </div>
    </div>
  );
};

const SoftwareSolution = ({ data }: SoftwareSolutionProps) => {
  const { emblaRef, emblaApi } = useSlider();

  return (
    <section className="bg-[--color-bg] overflow-hidden font-sans py-16 px-6 md:px-12">
      <div className="">
        <div className="flex flex-col w-full lg:w-[70%] 2xl:w-[60%] md:flex-row md:items-center justify-between gap-6 mb-4">
          <h2 className="service-section-heading text-gradient">
            {data.title}{" "}
            <span className="text-dark-gradient">{data.middleTitle} </span>
            {data.lastTitle}
          </h2>
        </div>

        <p
          className="mb-12 service-section-description text-muted w-full lg:w-[80%] 2xl:w-[70%]"
          dangerouslySetInnerHTML={createMarkup(data.description)}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {data.items?.map((member, i) => (
              <SolutionCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <div className="flex gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 rounded-full border border-[--color-text] text-[--color-text] hover:bg-white/10 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#F05323] to-[#CACACA]">
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-3 rounded-full bg-black flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradArrow" x1="0" y1="0" x2="24" y2="0">
                      <stop offset="0%" stopColor="#F05323" />
                      <stop offset="100%" stopColor="#CACACA" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="url(#gradArrow)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolution;
