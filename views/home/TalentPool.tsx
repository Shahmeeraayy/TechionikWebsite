"use client";
import React from "react";
import Card from "@/components/TalentCard";
import { useSlider } from "@/components/hooks/Slider";
import Button from "@/components/Button";
import { ArrowLeft } from "lucide-react";
import { TalentPoolData } from "@/data/Talent Pool/types";

type Props = {
  data: TalentPoolData;
};

const TalentPool = ({ data }: Props) => {
  const { emblaRef, emblaApi } = useSlider({ loop: false });

  return (
    <section className="">

      {/* Header + description — padded to match site layout */}
      <div className="">
        <div className="flex flex-col justify-between space-y-7 md:flex-row ">
          <h2 className="text-gradient">
            {data.title}{" "}
            <span className="gradient-text">{data.highlightedText}</span>
          </h2>
          <Button
            ariaLabel="View All Talents"
            text={data.ctaText}
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href={data.ctaLink}
            variant="gradient"
            className="hidden md:inline-flex"
          />
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-muted max-w-3xl text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
          <Button
            ariaLabel="View All Talents"
            text={data.ctaText}
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href={data.ctaLink}
            variant="gradient"
            className="inline-flex md:hidden mt-6"
          />
        </div>
      </div>

      {/*
        Embla viewport — no padding here so cards can bleed right.
        Left alignment with heading is handled by the first slide's padding.

        Gap = 16px mobile, 20px md+
        Pattern: container ml = -(gap), each slide pl = gap
        First slide pl = section-padding + gap so it lines up under the heading.
      */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4" 
        style={{ 
          // marginLeft: "-16px"

         }}>
          {data.team.map((member, i) => (
            <div
              key={i}
              className="
                shrink-0
                w-[75%] 
                md:w-[36%]
                lg:w-[30%]
                2xl:w-[24%]
              "
              style={{
                // paddingLeft:
                //   i === 0
                //     ? "calc(1rem + 24px)"   /* px-4 (mobile indent) + gap */
                //     : "24px",
              }}
            >
              <Card
                title={member.name}
                name={member.name}
                designation={member.designation}
                image={member.image}
                stack={member.stack}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <div className="flex justify-end mt-0 lg:mt-6">
        <div className="flex gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-3 rounded-full border border-primary-dark text-[--color-text] hover:bg-white/10 transition"
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
    </section>
  );
};

export default TalentPool;