"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { WhatYouGett } from "@/data/WhatYouGetData";

interface WhatYouGetProps {
  data: WhatYouGett;
}

const WhatYouGet = ({ data }: WhatYouGetProps) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-gradient w-full xl:w-[80%] wrap-break-word">
            {data.title1}{" "}
            <span className="text-dark-gradient">{data.spanTitle}</span>{" "}
            {data.title2}
          </h2>

          {data.reviews.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {data.reviews.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[92px] sm:w-[110px] md:w-[124px]"
                >
                  <Image
                    src={image.image1}
                    width={image.width}
                    height={image.height}
                    alt="review platform"
                    className="h-auto w-full object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          )}

          {data.buttonLabel && (
            <div>
              <Button
                ariaLabel={data.buttonLabel}
                text={data.buttonLabel}
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"
                href={data.buttonLink || "#"}
                variant="glass"
                className="inline-flex w-auto justify-between"
              />
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-5 text-muted break-words">
          <p
            className="voice-summary"
            dangerouslySetInnerHTML={{ __html: data.RightDescription1 }}
          />
          <p dangerouslySetInnerHTML={{ __html: data.RightDescription2 }} />
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
