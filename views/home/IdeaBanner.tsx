"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { IdeaBannerData } from "../../data/IdeaBanner";

interface IdeaBannerProps {
  content: IdeaBannerData;
}

const IdeaBanner: React.FC<IdeaBannerProps> = ({ content }) => {
  return (
    <div
      aria-label="Got an idea or concerns? Call to action"
      className="relative mx-auto min-h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center px-6 md:px-16 lg:px-32 bg-[#16161A] shadow-[0_4px_20px_0_#00000040] rounded-2xl overflow-hidden py-12 md:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage}
          alt="Idea Banner background"
          fill
          className="object-cover"
        />
        {/* Optional overlay to ensure text readability on mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 w-full">
        <div className="space-y-4">
          <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            {content.title
              .split(content.highlight || "")
              .map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="font-bold text-white">
                      {content.highlight}
                    </span>
                  )}
                </React.Fragment>
              ))}
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-prose mx-auto">
            {content.description}
          </p>
        </div>

        <div className="w-full flex justify-center">
          <Button
            text={content.ctaText}
            icon={content.buttonIcon || "/icons/arrow-right.svg"}
            size="medium"
            radius="full"
            href={content.ctaLink}
            variant={content.buttonVariant || "glass"}
            // Removed fixed widths to allow the button to be natural or full-width on mobile
            className="w-auto md:w-auto flex justify-between items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default IdeaBanner;
