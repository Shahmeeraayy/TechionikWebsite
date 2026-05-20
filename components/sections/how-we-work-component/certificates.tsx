"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useSlider } from "@/components/hooks/Slider";
import {
  CertificateHeadingData,
  CertificationsData,
} from "@/data/certificateData";
import Button from "@/components/Button";

const Certifications = () => {
  // Pass loop: true in options and the Autoplay plugin in the second argument
  const { emblaRef, emblaApi } = useSlider({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <main className="w-full">
      {/* Header Container: Flex-col on mobile, flex-row on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-full mx-auto px-4 py-8 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {CertificateHeadingData.heading}{" "}
            <span className="text-dark-gradient">
              {CertificateHeadingData.spanText}
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            {CertificateHeadingData.description}
          </p>
        </div>

        {/* Button Wrapper: Full width on mobile */}
        <div className="w-full md:w-auto">
          <Button
            size="medium"
            className="w-auto md:w-auto"
            variant="gradient"
            text={CertificateHeadingData.buttonText}
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div
        className="overflow-hidden mt-10 cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex items-center">
          {CertificationsData.map((item, i) => (
            <div
              key={i}
              // flex-[0_0_50%] means 2 logos on mobile, 25% means 4 on desktop
              className="flex justify-center items-center flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] shrink-0 px-6"
            >
              <Image
                src={item.image}
                alt="Certification logo"
                width={128}
                height={128}
                sizes="128px"
                className="w-24 h-24 md:w-32 md:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation: Arrows Only */}
      <div className="flex justify-end mt-12 px-4">
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

export default Certifications;
