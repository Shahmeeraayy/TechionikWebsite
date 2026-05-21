"use client";
import { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import { useState } from "react";
import { useSlider } from "./hooks/Slider";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createMarkup } from "@/utils/GlobalFuntions";

interface SolutionWeDeliverProps {
  data: SolutionWeDeliver;
}

const SolutionsWeDeliverComponent = ({ data }: SolutionWeDeliverProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { emblaRef, emblaApi } = useSlider();

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const progressPercentage =
    data?.cards?.length > 1 ? (activeIndex / (data.cards.length - 1)) * 90 : 0;

  return (
    <main className="bg-[--color-bg] text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 space-y-3 mb-10">
        <h2 className="service-section-heading text-muted">
          <span className="gradient-text">{data.title}</span> {data.spanTitle}
        </h2>
        <div
          className="service-section-description service-rich-text text-muted w-full lg:w-[70%] 2xl:w-[60%]"
          dangerouslySetInnerHTML={createMarkup(data.description)}
        />
      </div>

      <div className="flex flex-col space-y-10 max-w-8xl mx-auto md:px-10 px-4 lg:px-20">
        <div className="relative flex justify-between items-center w-full md:w-[70%] lg:w-[60%] xl:w-[50%] px-2">
          <div className="absolute top-1/2 left-10 w-[90%] h-[1px] sm:h-[1.5px] md:h-[2px] bg-gray-700 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-10 h-px sm:h-[1.5px] md:h-[2px] bg-orange-600 -translate-y-1/2 transition-all duration-500 ease-in-out z-0"
            style={{ width: `${progressPercentage}%` }}
          />

          {Array.isArray(data.cards) &&
            data.cards.map((item, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center"
                onClick={() => handleTabClick(index)}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeIndex >= index ? "bg-[#26262B]" : "bg-[#26262B]"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    height={26}
                    width={26}
                    className={`transition-all duration-300 ${
                      activeIndex >= index ? "brightness-110" : "opacity-50"
                    }`}
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 px-4 md:px-6 lg:px-8 2xl:px-2">
            {(Array.isArray(data?.cards) ? data.cards : []).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 rounded-lg flex flex-col cursor-pointer w-[260px] min-h-[420px] sm:w-[300px] sm:min-h-[460px] md:w-[340px] md:min-h-[522px]"
                style={{
                  background:
                    activeIndex === index
                      ? "linear-gradient(180deg, #F05323 0%, #8A3014 100%)"
                      : "#16161A",
                }}
                onClick={() => handleTabClick(index)}
              >
                <div className="h-[140px] sm:h-[160px] md:h-[180px] flex items-center">
                  <p className="text-muted text-[100px] md:text-[120px] font-bold leading-none">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                </div>

                <div className="pb-10 space-y-4 flex flex-col flex-grow">
                  <h3 className="service-card-title min-h-[3.5rem] flex items-start">
                    {item.title}
                  </h3>
                  <div className="flex-grow">
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-2">
                        {item.description.map((desc: string, i: number) => (
                          <li key={i} className="service-body text-muted opacity-90">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    ) : typeof item.description === "string" ? (
                      <div
                        className="service-rich-text text-white opacity-90"
                        dangerouslySetInnerHTML={createMarkup(item.description)}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-2">
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
      </div>
    </main>
  );
};

export default SolutionsWeDeliverComponent;
