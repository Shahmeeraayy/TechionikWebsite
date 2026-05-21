"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlider } from "@/components/hooks/Slider";

interface TechServiceItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  imageAlt?: string;
}

interface TechServicesData {
  title: string;
  description: string;
  gradientText: string;
  afterGradientText: string;
  services: TechServiceItem[];
}

interface TechServicesProps {
  servicesData: TechServicesData;
}

const TechServices = ({ servicesData }: TechServicesProps) => {
  // Embla is only used for the mobile ref
  const { emblaRef, emblaApi } = useSlider({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedService, setSelectedService] = useState<TechServiceItem | null>(
    servicesData?.services?.[0] || null,
  );

  // Sync mobile slider position if the active service changes via desktop click
  useEffect(() => {
    if (emblaApi && selectedService) {
      const index = servicesData.services.findIndex(
        (s) => s.id === selectedService.id,
      );
      if (index !== -1) emblaApi.scrollTo(index);
    }
  }, [emblaApi, selectedService, servicesData?.services]);

  if (!servicesData?.services || !Array.isArray(servicesData.services))
    return null;

  const activeService = selectedService ?? servicesData.services[0];
  if (!activeService) return null;

  return (
    <div className="w-full">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-12 gap-6">
        {/* Title and Description */}
        <div className="max-w-2xl">
          <h2 className="service-section-heading text-gradient">
            {servicesData?.title}{" "}
            <span className="text-dark-gradient">
              {servicesData?.gradientText}{" "}
            </span>
            {servicesData?.afterGradientText}
          </h2>
          <div
            className="service-section-description service-rich-text text-muted mt-4"
            dangerouslySetInnerHTML={{
              __html: servicesData?.description ?? "",
            }}
          />
        </div>

        {/* 1. DESKTOP FILTERS (No Embla, Static Wrap) */}
        <div className="hidden md:flex flex-wrap justify-end gap-3 max-w-3xl">
          {servicesData.services.map((service) => (
            <button
              key={`desktop-${service.id}`}
              onClick={() => setSelectedService(service)}
              className={`service-pill transition-all whitespace-nowrap ${
                activeService.id === service.id
                  ? "bg-primary-dark text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* 2. MOBILE FILTERS (Embla Slider Only) */}
      <div
        className="block md:hidden mb-8 overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-3 touch-pan-y">
          {servicesData.services.map((service) => (
            <button
              key={`mobile-${service.id}`}
              onClick={() => setSelectedService(service)}
              className={`service-pill transition-all whitespace-nowrap flex-none ${
                activeService.id === service.id
                  ? "bg-primary-dark text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Service Card Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-secondary max-w-8xl mx-auto rounded-3xl gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 2xl:w-1/3 relative h-64 md:h-85 rounded-2xl overflow-hidden">
              <Image
              src={activeService?.image ?? ""}
              alt={activeService?.imageAlt ?? "Service Image"}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-5">
            <h3 className="service-card-title text-gradient">
              {activeService.title}
            </h3>
            <div
              className="service-rich-text text-[#CECECE]"
              dangerouslySetInnerHTML={{
                __html: activeService.description ?? "",
              }}
            />

            <div className="pt-4">
              <Button
                ariaLabel={activeService?.ctaText ?? ""}
                text={`${activeService?.ctaText ?? ""}`}
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"
                href={activeService?.ctaLink ?? ""}
                variant="glass"
                className="hidden md:inline-flex"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechServices;
