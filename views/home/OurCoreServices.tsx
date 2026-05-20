"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import { ServiceType, services } from "@/data/OurServices";

export default function CoreServices() {
  const [selectedService, setSelectedService] = useState<ServiceType>(
    services[0],
  );

  return (
    <section className="flex flex-col md:flex-row gap-8 p-8 md:p-16 text-white bg-primary max-w-[1440px] mx-auto my-24 rounded-[24px]">
      {/* Sidebar */}

      <div>
        <div className="md:w-3/3 flex flex-col gap-8">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="gradient-text">Core</span> Services
          </h2>
          <p className="text-gray-400">
            We offer a range of comprehensive services, from custom application
            to product development, IT consulting, QA testing, and more. We
            offer a range of comprehensive services, from custom
          </p>
        </div>
        <div className="bg-gray-800 background-color rounded-xl p-6 flex flex-col gap-3 md:w-3/ border-r-4 border-t-3 border-orange-500 mt-[58px]">
          {services.map((service) => (
            <button
              key={service.id}
              className={`text-left px-4 py-2 rounded-lg transition-colors  ${
                selectedService.id === service.id
                  ? "bg-gray-700 text-white font-semibold"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Panel */}
      <div className="md:w-3/2 bg-gray-800 rounded-xl p-[41px] relative">
        <div className="inline items-center gap-4 mb-20">
          <div className="bg-gray-700 text-orange-500 rounded-full w-[64px] h-[64px] flex items-center justify-center font-bold">
            <h3 className="text-2xl font-semibold gradient-text">
              {selectedService.id.toString().padStart(2, "0")}
            </h3>
          </div>
          <div className="absolute bottom-[63px] sm: right-[67px] hidden md:inline-flex">
            <Image
              src={selectedService.icon}
              alt={selectedService?.title ?? ""}
              width={150}
              height={150}
            />
          </div>
          <h3 className="text-2xl font-semibold pt-[26px] pb-[28px]">
            {selectedService.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-4">{selectedService.description}</p>
        <ul className="list-disc list-inside text-gray-400 mb-6 ">
          {selectedService.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        <div className="absolute bottom-[63px] left-[67px]">
          <Button
            text="Explore More"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="#"
            className="hidden md:inline-flex"
          />
        </div>
      </div>
    </section>
  );
}
