"use client";

import Button from "@/components/Button";
import { useSlider } from "@/components/hooks/Slider";
import {
  ServicesData,
  ServiceWeProvideData,
} from "@/data/ServiceWeProvideData";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ServiceWeProvideProps {
  dataleft: typeof ServiceWeProvideData;
  dataright: typeof ServicesData;
}

const ServiceWeProvide = ({ dataleft, dataright }: ServiceWeProvideProps) => {
  // const { emblaRef } = useSlider();
  const { emblaRef, emblaApi } = useSlider();

  return (
    <div>
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        {/* LEFT SECTION */}
        <div className="flex flex-col space-y-10 w-full lg:min-w-[50%] xl:min-w-[40%]">
          <h2 className="text-muted">
            {dataleft.mainHeading}{" "}
            <span className="gradient-text">{dataleft.middleHeading} </span>
            {dataleft.endHeading}
          </h2>

          <p
            className="text-muted w-full md:w-[80%] lg:w-[70%]"
            dangerouslySetInnerHTML={{ __html: dataleft.description }}
          />

          <div>
            <Button
              className="inline-flex justify-between w-auto text-foreground"
              text={dataleft.btnText}
              size="medium"
              showIcon={true}
              icon="/icons/arrow-right.svg"
              variant="glass"
              href={dataleft.btnLink}
            />
          </div>

          {/* Review Images */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 flex-nowrap">
              {dataleft.images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 max-w-[120px]">
                  <Image
                    src={image.image1}
                    width={image.width}
                    height={image.height}
                    alt="review platform"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION ( SLIDER) */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {dataright.map((data) => (
              <div
                key={data.index}
                className="flex-[0_0_320px] 
                           bg-[#16161A] 
                           rounded-3xl 
                           p-8 
                           flex 
                           flex-col 
                           justify-between
                           min-w-[500px] 
                           min-h-95"
              >
                {/* Index Badge */}
                <div className="flex justify-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#26262B] rounded-full text-lg font-bold">
                    <span className="bg-gradient-to-r from-[#F05323] to-[#E1E1E1] bg-clip-text text-transparent">
                      {data.index}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mt-6">
                  {data.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mt-4">
                  {data.description}
                </p>

                {/* Button */}
                <div
                  className={`mt-6 flex items-center ${data.btnRightImage ? "justify-between" : ""}`}
                >
                  <Button
                    className={`inline-flex items-center ${data.btnRightImage ? "relative top-6" : ""}`}
                    text={data.btnText}
                    size="medium"
                    showIcon={true}
                    icon="/icons/arrow-right.svg"
                    variant="glass"
                    href={data.href || "#"}
                  />

                  {data.btnRightImage && (
                    <div className="shrink-0 ml-4">
                      <Image
                        src={data.btnRightImage}
                        width={200}
                        height={200}
                        alt="btn image"
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
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
                      <linearGradient
                        id="gradArrow"
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="0"
                      >
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
      </div>
    </div>
  );
};

export default ServiceWeProvide;
