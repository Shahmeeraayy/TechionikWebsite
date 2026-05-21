import React from "react";
import Image from "next/image";
// import { ParentServiceOutsourcingModels } from "../app/api/parentService/types/parentService.type";
import { OutsourcingSlide } from "@/data/outSourceModel";
import { createMarkup } from "@/utils/GlobalFuntions";

interface OutsourcingModelsProps {
  // data: ParentServiceOutsourcingModels
  data: OutsourcingSlide;
}
const OutsourcingModels = ({ data }: OutsourcingModelsProps) => {
  return (
    <section className="bg-[var(--color-bg)] pb-20 px-4 sm:px-8 lg:px-16 2xl:px-20 overflow-hidden font-sans">
      {/* ───────── HEADER ───────── */}
      <div className="max-w-8xl 2xl:max-w-8xl mx-auto mb-10">
        <h2 className="service-section-heading mb-4 xl:mb-6 text-gradient">
          {data?.title}{" "}
          <span className="text-dark-gradient">
            {data?.MiddleTitle} {data?.lastTitle}
          </span>{" "}
        </h2>

        <div
          className="service-section-description service-rich-text text-muted w-full lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]"
          dangerouslySetInnerHTML={createMarkup(data?.description || "")}
        />
      </div>

      {/* ───────── GRID ───────── */}
      <div className="max-w-8xl 2xl:max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
        {data?.items?.map((slide, index) => {
          // {data?.items?.map((slide, index) => {
          const isRightCard = index % 2 !== 0;
          const isTopRow = index < 2;

          let globePosition = "";
          // TOP LEFT CARD (index 0)
          // ─────────────────────────────────────────────
          if (!isRightCard && isTopRow) {
            globePosition = `
      lg:-right-30 lg:-bottom-38
      xl:-right-50 xl:-bottom-52
      2xl:-right-70 2xl:-bottom-70
    `;
          }

          // ─────────────────────────────────────────────
          // TOP RIGHT CARD (index 1)
          if (isRightCard && isTopRow) {
            globePosition = `
      lg:-left-30 lg:-bottom-38
      xl:-left-50 xl:-bottom-52
      2xl:-left-70 2xl:-bottom-70
    `;
          }

          // ─────────────────────────────────────────────
          // BOTTOM LEFT CARD (index 2)
          if (!isRightCard && !isTopRow) {
            globePosition = `
      lg:-right-30 lg:bottom-26
      xl:-right-51 xl:-top-50
      2xl:-right-70 2xl:-top-80
    `;
          }

          // ─────────────────────────────────────────────
          // BOTTOM RIGHT CARD (index 3)
          if (isRightCard && !isTopRow) {
            globePosition = `
      lg:-left-30 lg:bottom-26
      xl:-left-50 xl:-top-50
      2xl:-left-70 2xl:-top-80
    `;
          }

          return (
            <div
              key={index}
              className="
                group
                relative
                bg-(--color-secondary-dark)
                hover:bg-transparent
                rounded-2xl xl:rounded-3xl
                overflow-hidden
                min-h-60 xl:min-h-70 2xl:min-h-73.5
                border border-white/5
                transition-all duration-500
              "
            >
              {/* ───── ORANGE CORNER LINES ───── */}
              {/* <div className="absolute inset-0 pointer-events-none z-30">
                <div className="absolute top-0 right-0 w-20 xl:w-32 h-[1.5px] bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-[1.5px] h-20 xl:h-32 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div> */}
              <div
                className="absolute inset-0 pointer-events-none z-30 rounded-2xl xl:rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  border: "1px solid",
                  borderImageSlice: 1,
                  borderImageSource: `conic-gradient(
                     from 180deg at 51.95% 49.81%,
                     rgba(22, 22, 26, 0) -62.19deg,
                     rgba(22, 22, 26, 0.105455) 121.23deg,
                     rgba(240, 83, 35, 0.2) 142.73deg,
                     #F05323 227.05deg,
                     rgba(22, 22, 26, 0) 297.81deg,
                     rgba(22, 22, 26, 0.105455) 481.23deg
                   )`,
                }}
              />
              {/* ───── GLOBE ───── */}
              <div
                className={`
                  absolute z-0
                  hidden lg:block
                  w-65 h-70
                  xl:w-100 xl:h-100
                  2xl:w-140 2xl:h-137.5
                  pointer-events-none
                  transition-transform duration-700
                  group-hover:scale-105 2xl:group-hover:scale-110
                  ${globePosition}
                `}
              >
                <Image
                  src={slide?.image || "/globe.svg"}
                  alt={slide?.title || ""}
                  fill
                  sizes="(min-width:1536px) 560px, (min-width:1280px) 220px, 160px"
                  quality={55}
                  className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
                <Image
                  src={slide?.hoverImage || "/globe.svg"}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width:1536px) 560px, (min-width:1280px) 220px, 160px"
                  quality={55}
                  className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* ───── TEXT ───── */}
              <div
                className={`
                  relative z-10
                  flex
                  ${isRightCard ? "lg:justify-end lg:text-right justify-start text-left" : "justify-start text-left"}
                  p-6 sm:p-8 xl:p-12 2xl:p-14
                `}
              >
                <div className="max-w-full lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%]">
                  <h3
                    className="
                    text-gradient
                    service-card-title
                    mb-4 xl:mb-6 2xl:mb-8
                  "
                  >
                    {slide?.title}
                  </h3>
                  {/* <p className="text-sm sm:text-base xl:text-lg text-[var(--color-muted)] max-w-xl xl:max-w-2xl leading-relaxed">
                    {slide.description}
                  </p> */}

                  <div
                    className="service-rich-text text-muted group-hover:text-[var(--color-outsource-hover)] [&>ul]:space-y-2 xl:[&>ul]:space-y-3"
                    dangerouslySetInnerHTML={createMarkup(
                      slide?.description || "",
                    )}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OutsourcingModels;
