"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../Button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useSlider } from "@/components/hooks/Slider";
import { ServiceData } from "@/data/services/service-component-types";
import { Plus } from "lucide-react";

interface propss {
  data: ServiceData;
}

const ServiceCard = ({ data }: propss) => {
  const { emblaRef, emblaApi } = useSlider({
    align: "start",
    containScroll: "trimSnaps",
  });

  const allServices = [
    ...(data?.slider?.service1 || []),
    ...(data?.slider?.service2 || []),
    ...(data?.slider?.service3 || []),
    ...(data?.slider?.service4 || []),
    ...(data?.slider?.service5 || []),
    ...(data?.slider?.service6 || []),
  ];

  const normalizeStateByScreen = useCallback((services: typeof allServices) => {
    if (typeof window === "undefined") return services;
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return services;
    return services.map((service) => ({ ...service, state: true }));
  }, []);

  const [services, setServices] = useState(() =>
    normalizeStateByScreen(allServices),
  );

  const handleToggle = (id: number | string) => {
    if (window.innerWidth < 640) return;

    setServices((prev) =>
      prev.map((service) => ({
        ...service,
        state: service.id === id ? !service.state : false,
      })),
    );

    setTimeout(() => {
      emblaApi?.reInit();
    }, 750);
  };

  useEffect(() => {
    const onResize = () => {
      setServices((prev) => normalizeStateByScreen(prev));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [normalizeStateByScreen]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`shrink-0 header pr-6 flex flex-col justify-between min-h-[320px] md:min-h-[380px]
                overflow-hidden
                transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${service.state ? "w-[496px]" : "w-[200px]"}
                ${index === services.length - 1 ? "" : "border-r border-r-[#2A2A34]"}
              `}
            >
              {/* TOP SECTION */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 pb-7 w-fit">
                  <div className="w-12 h-12 border p-1.5 rounded-full flex items-center justify-center bg-[#26262B] border-[#26262B]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={38}
                      height={38}
                    />
                  </div>
                  <h3>{service.title}</h3>
                </div>

                {/* MIDDLE SECTION */}
                <AnimatePresence initial={false}>
                  {service.state && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="h-auto pb-6 md:pb-12">
                        <p
                          className="caption text-muted wrap-break-word leading-7"
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        />

                        {/* <ul className="list-disc list-inside mt-4 space-y-2 pl-2 leading-7">
                          {service.lists.map((item: any, idx: any) => (
                            <li key={idx} className="caption text-muted">
                              {item}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BOTTOM SECTION */}
              <div className="w-auto p-3">
                {service.state ? (
                  <div>
                    <Button
                      ariaLabel="Explore More"
                      text="Explore More"
                      icon="/icons/arrow-right.svg"
                      size="medium"
                      radius="full"
                      href={service.href}
                      className={`inline-flex text-foreground`}
                      variant="glass"
                      iconRotate={45}
                    />
                  </div>
                ) : (
                  <button
                    aria-label="expand"
                    onClick={() => handleToggle(service.id)}
                    className="items-center justify-center gap-2 rounded-full px-4 py-4 backdrop-blur-sm bg-white-200 border border-gray-400 dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20 transition-all duration-500"
                  >
                    <motion.span
                      animate={{ rotate: service.state ? 45 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <Plus size={24} className="text-foreground" />
                    </motion.span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Arrow Icons */}
      <div className="flex justify-end mt-0 lg:mt-6">
        <div className="flex gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="p-3 rounded-full border border-primary-dark text-[--color-text] hover:bg-white/10 transition"
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
                  <linearGradient id="gradArrow" x1="0" y1="0" x2="24" y2="0">
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
    </>
  );
};

export default ServiceCard;
