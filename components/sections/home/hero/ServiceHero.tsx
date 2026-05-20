"use client";

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { ServiceHeroSlides } from "@/data/ServiceHeroData";

interface ServiceHeroProps {
  slides: ServiceHeroSlides[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ slides }) => {
  const data = slides[0];

  return (
    <div className="relative w-full min-h-screen  overflow-hidden">
      {/* ✅ Background Media Layer */}
      <div className="absolute inset-0 z-0">
        {data.image?.endsWith(".mp4") ? (
          <video
            src={data.image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          data.image && (
            <Image
              src={data.image}
              alt={data?.title ?? "background image"}
              fill
              priority
              className="object-cover"
            />
          )
        )}
      </div>
      {/* ✅ Overlay Layer */}
      <div className="absolute inset-0.6 bg-primary z-10" />
      {/* ✅ Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Breadcrumb */}
        {/* <div className="mb-10">
          <Button
            className="py-4 "
            text="Home > Services"
            size="large"
            radius="full"
            href="/home"
          />
        </div> */}

        {/* Title */}
        <h1>
          <span className="text-(--color-muted)">{data?.title}</span>
        </h1>

        {/* Description */}
        {data?.description && (
          <p className="mt-6 text-(--color-muted) sm:text-lg md:block delay-200">
            {data?.description}
          </p>
        )}

        {/* CTA */}
        {data?.ctaText && (
          <div className="py-6  delay-400">
            <Button
              text={data?.ctaText}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href={data?.ctaLink || "#"}
              variant="gradient"
              className="inline-flex w-full md:w-auto justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceHero;
