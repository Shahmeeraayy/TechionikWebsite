"use client"; // Required for hooks and click events
import React from "react";
import { useSlider } from "@/components/hooks/Slider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HiringProcessData } from "../data/hiring-processData";
import { createMarkup } from "@/utils/GlobalFuntions";

const HiringProcess: React.FC<{ data: HiringProcessData }> = ({ data }) => {
  const { header, steps } = data;
  // Integrating your custom slider hook
  const { emblaRef, emblaApi } = useSlider();

  return (
    <section className="bg-[--color-bg] py-24 px-6 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 max-w-2xl">
          <h2 className="service-section-heading-lg text-dark-gradient mb-6">
            {header.mainTitle}{" "}
            <span className="text-dark-gradient">{header.highlightTitle}</span>
          </h2>
          <p
            className="service-section-description text-[var(--color-muted)]"
            dangerouslySetInnerHTML={createMarkup(header.description ?? "")}
          />
        </div>

        {/* Slider Container */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {steps.map((step, index) => (
              <div
                key={step.id}
                // Responsive widths: 100% on mobile, 50% on tablet, 33.3% on desktop
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 p-8 flex flex-col gap-8 relative"
              >
                {/* Vertical Divider logic (only visible between slides on desktop) */}
                {index !== 0 && (
                  <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-[#F05C44] hidden md:block" />
                )}

                {/* Step Header Card */}
                <div className="bg-[#121214] rounded-2xl p-6 border border-white/5 flex items-center gap-4 shadow-lg">
                  <span className="bg-[#E85D33] text-white font-bold px-3 py-1 rounded-md text-xl">
                    {step.id}
                  </span>
                  <div>
                    <h3 className="service-card-title-sm text-white">
                      {step.title}
                    </h3>
                    <div className="flex gap-1 mt-2">
                      <div className="h-1.5 w-12 bg-[#F05C44] rounded-full"></div>
                      <div className="h-1.5 w-6 bg-[#F05C44] rounded-full"></div>
                      <div className="h-1.5 w-8 bg-[#F05C44] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6">
                  <p
                    className="service-body text-[var(--color-text)]"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />

                  {step.extraContent && (
                    <p
                      className="service-body text-[var(--color-text)]"
                      dangerouslySetInnerHTML={createMarkup(
                        step.extraContent ?? "",
                      )}
                    />
                  )}

                  {step.bulletPoints && (
                    <ul className="space-y-4">
                      {step.bulletPoints.map((bp, i) => (
                        <li
                          key={i}
                          className="service-body text-[var(--color-text)]"
                        >
                          <strong className="text-[var(--color-text)]">
                            • {bp.label}:
                          </strong>{" "}
                          {bp.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-12">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-foreground hover:border-[#E85D33] hover:bg-white/5 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-12 h-12 rounded-full border border-[#E85D33] flex items-center justify-center text-[#E85D33] hover:bg-[#E85D33] hover:text-white transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;

