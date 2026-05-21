"use client";
import { WhatWeDo } from "@/data/what-we-do-data";
import { useSlider } from "./hooks/Slider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createMarkup } from "@/utils/GlobalFuntions";

interface WhatWeDoCardProps {
  whatwedo: WhatWeDo;
}

const WhatWeDoCard = ({ whatwedo }: WhatWeDoCardProps) => {
  const { emblaRef, emblaApi } = useSlider();

  return (
    <main>
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="service-section-heading w-full lg:w-[70%] 2xl:w-[40%]">
          <span className="text-dark-gradient">{whatwedo.title}</span>
        </h2>
        <div
          className="service-section-description text-muted w-full lg:w-[50%]"
          dangerouslySetInnerHTML={createMarkup(whatwedo.descriptiption)}
        />
        <p className="service-section-description text-muted">
          {whatwedo.mainDescription}
        </p>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {whatwedo.card?.map((item, index) => (
            <div
              key={item.id || index}
            className="shrink-0 w-full sm:w-1/2 flex flex-col border-l px-10 border-gradient-card rounded-lg"
          >
            {/* Top Header of Card */}
            <div className="flex bg-[#FFFFFF12] w-full lg:w-[80%] rounded-lg p-4 gap-4">
              <h6 className="px-4 py-2 bg-primary-dark rounded-lg text-white">
                {item.id || index + 1}
              </h6>
              <div className="flex-1 min-w-0">
                <h6 className="service-card-title-sm">{item.title}</h6>
                {/* 3 Gradient Lines */}
                <div className="flex gap-0">
                  <div className="bg-linear-to-r from-[#F05C44] to-[rgba(240,92,68,0.25)] w-17 h-2 rounded-sm mt-1" />
                  <div className="bg-linear-to-r from-[#F05C44] to-[rgba(240,92,68,0.25)] w-13 h-2 rounded-sm mt-1" />
                  <div className="bg-linear-to-r from-[#F05C44] to-[rgba(240,92,68,0.25)] w-7 h-2 rounded-sm mt-1" />
                </div>
              </div>
            </div>

            {/* Card Body - Now Self Closing */}
            <div
              className="flex flex-col p-4 gap-4 w-full lg:w-[80%] text-muted service-rich-text"
              dangerouslySetInnerHTML={createMarkup(item.description)}
            />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end mt-6">
        <div className="flex gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="p-3 rounded-full border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDoCard;
