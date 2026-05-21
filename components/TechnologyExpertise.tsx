"use client";
import { TechnologyExpertise } from "@/data/technologyExpertiseData";
import Image from "next/image";
import { useSlider } from "./hooks/Slider";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TechnologyExpertiseProps {
  data: TechnologyExpertise;
}

const TechnologyExpertiseComponent = ({ data }: TechnologyExpertiseProps) => {
  const { emblaRef, emblaApi } = useSlider();

  const [currentSlide, setCurrentSlide] = useState<number | null>(0);
  const showHeader = Boolean(
    data.mainTitle?.trim() || data.mainDescription?.trim(),
  );

  // Only scroll when the target slide is outside the viewport
  const isSlideFullyVisible = useCallback((index: number) => {
    if (!emblaApi) return true;
    const nodes = emblaApi.slideNodes();
    const viewport = emblaApi.containerNode();
    if (!nodes || !viewport) return true;

    const vRect = viewport.getBoundingClientRect();
    const node = nodes[index];
    if (!node) return true;
    const nRect = node.getBoundingClientRect();

    return nRect.left >= vRect.left && nRect.right <= vRect.right;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    if (currentSlide !== null && !isSlideFullyVisible(currentSlide)) {
      emblaApi.scrollTo(currentSlide);
    }
  }, [currentSlide, emblaApi, isSlideFullyVisible]);

  // Collapse / Expand logic
  const handleCardClick = (index: number) => {
    setCurrentSlide((prev) => (prev === index ? null : index));
  };

  // Proper next logic
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!emblaApi) return;

    const baseIndex =
      currentSlide !== null ? currentSlide : emblaApi.selectedScrollSnap();

    const nextIndex = Math.min(baseIndex + 1, data.cards.length - 1);
    setCurrentSlide(nextIndex);
  };

  // Proper prev logic
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!emblaApi) return;

    const baseIndex =
      currentSlide !== null ? currentSlide : emblaApi.selectedScrollSnap();

    const prevIndex = Math.max(baseIndex - 1, 0);
    setCurrentSlide(prevIndex);
  };

  if (data.showAllDescriptions) {
    return (
      <div className="px-4">
        {showHeader && (
          <div className="mb-10 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
            {data.mainTitle && (
              <h2 className="service-section-heading text-gradient">
                {data.mainTitle}
              </h2>
            )}
            {data.mainDescription && (
              <p className="service-section-description text-muted mt-3">
                {data.mainDescription}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.cards.map((item) => (
            <article
              key={item.id}
              className="border border-[#2A2A34] bg-[#16161A] rounded-2xl p-6 shadow-[0_4px_20px_0px_#00000040]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26262B]">
                  <Image
                    src={item.icon || "/icons/box-icon.png"}
                    alt="box icon"
                    width={30}
                    height={30}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-white/60">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>

              <h3 className="service-card-title mt-6">{item.title}</h3>

              <div className="mt-4 service-rich-text text-muted">
                {Array.isArray(item.description) ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4">
      {showHeader && (
        <div className="mb-10 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
          {data.mainTitle && (
            <h2 className="service-section-heading text-gradient">
              {data.mainTitle}
            </h2>
          )}
          {data.mainDescription && (
            <p className="service-section-description text-muted mt-3">
              {data.mainDescription}
            </p>
          )}
        </div>
      )}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.cards.map((item, index) => {
            const isActive = currentSlide === index;

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(index)}
                className={`
                  relative border border-[#2A2A34] h-[460px] cursor-pointer
                  transition-all duration-500 ease-in-out
                  flex flex-col overflow-hidden
                  
                  ${
                    isActive
                      ? "flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_35%] px-6 h-[500px]"
                      : "flex-[0_0_70%] md:flex-[0_0_40%] lg:flex-[0_0_20%] px-5 py-10 justify-between"
                  }
                `}
              >
                {/* INDEX when inactive */}
                {!isActive && (
                  <h3 className="text-end">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                )}

                {/* ICON */}
                <div
                  className={`
                    absolute transition-all duration-500 ease-in-out transform-gpu
                    ${
                      isActive
                        ? "top-6 left-6 scale-100 "
                        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100"
                    }
                  `}
                >
                  <div
                    className={`bg-[#26262B] ${
                      isActive ? "w-12 h-12" : "w-20 h-20 lg:w-28 lg:h-28"
                    } rounded-full flex items-center justify-center`}
                  >
                    <Image
                      src={item.icon || "/icons/box-icon.png"}
                      alt="box icon"
                      // These define the original aspect ratio
                      width={60}
                      height={60}
                      // Mobile: w-8 h-8 (32px) | Desktop: w-[60px] h-[60px] (or whatever isActive logic requires)
                      className={`object-contain transition-all duration-300 
                      ${isActive ? "w-8 h-8 md:w-[30px] md:h-[30px]" : "w-12 h-12 md:w-[60px] md:h-[60px]"}
                      `}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3
                  className={`service-card-title transition-all duration-500 ${
                    isActive ? "mt-24 text-left" : "text-center"
                  }`}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                {isActive && (
                  <div className="mt-4 h-[220px] overflow-y-auto pr-3 service-rich-text text-muted">
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc space-y-2 pl-5">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </div>
                )}
                {/* <div className="mt-4 h-[80px]" /> */}
                {/* FOOTER — only when active */}
                {isActive && (
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between mt-10">
                    {/* Counter */}
                    <div className="text-sm font-medium">
                      {String(index + 1).padStart(2, "0")} /
                      {String(data.cards.length).padStart(2, "0")}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-4">
                      <button
                        onClick={goPrev}
                        disabled={index === 0}
                        className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition disabled:opacity-40"
                      >
                        <ArrowLeft size={20} />
                      </button>

                      <button
                        onClick={goNext}
                        disabled={index === data.cards.length - 1}
                        className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition disabled:opacity-40"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyExpertiseComponent;
