"use client";

import Button from "@/components/Button";
import { IndustriesData } from "@/data/Industries Data/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

type IndustriesSectionProps = {
  industries: IndustriesData;
};

const DESKTOP_SLIDES_IN_VIEW = 4;
const TABLET_SLIDES_IN_VIEW = 3;
const MOBILE_SLIDES_IN_VIEW = 1.2;
const AUTO_SLIDE_INTERVAL = 3000;

export default function IndustriesSection({
  industries,
}: IndustriesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const autoSlideTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Responsive carousel (loop: true for endless scrolling) ────────────────────
  const [carouselRef, carouselApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: true,
    slidesToScroll: 1,
  });

  const onCarouselSelect = useCallback(() => {
    if (!carouselApi) return;
    const snap = carouselApi.selectedScrollSnap() % industries.slides.length;
    setActiveIndex(snap);
  }, [carouselApi, industries.slides.length]);

  useEffect(() => {
    if (!carouselApi) return;
    onCarouselSelect();
    carouselApi.on("select", onCarouselSelect);
    carouselApi.on("reInit", onCarouselSelect);
    return () => {
      carouselApi.off("select", onCarouselSelect);
      carouselApi.off("reInit", onCarouselSelect);
    };
  }, [carouselApi, onCarouselSelect]);

  const startAutoSlide = useCallback(() => {
    if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    autoSlideTimer.current = setInterval(() => {
      carouselApi?.scrollNext();
    }, AUTO_SLIDE_INTERVAL);
  }, [carouselApi]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
      autoSlideTimer.current = null;
    }
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    startAutoSlide();
    return () => stopAutoSlide();
  }, [carouselApi, startAutoSlide, stopAutoSlide]);

  const getSlidesInView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return DESKTOP_SLIDES_IN_VIEW;
      if (window.innerWidth >= 768) return TABLET_SLIDES_IN_VIEW;
      return MOBILE_SLIDES_IN_VIEW;
    }
    return DESKTOP_SLIDES_IN_VIEW;
  };

  const [slidesInView, setSlidesInView] = useState(getSlidesInView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesInView(getSlidesInView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!industries || !industries.slides || industries.slides.length === 0)
    return null;

  const activeGradient =
    "linear-gradient(179.33deg, rgba(0, 0, 0, 0) -12.13%, #000000 129.54%)";
  const transparentGradient =
    "linear-gradient(179.33deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)";

  const bgImage = industries.slides[activeIndex]?.bgImage || "";

  // Duplicate slides to guarantee Embla has enough elements to perform the loop
  // Only duplicate if the total slides are less than or equal to the visible slides
  const loopSafeSlides =
    industries.slides.length <= slidesInView
      ? [...industries.slides, ...industries.slides, ...industries.slides]
      : industries.slides;

  return (
    <section className="bg-[-var(--color-bg)] pb-10">
      {/* ── Header ────────────────────────────────────────────────────────────── */}
      <div className="max-w-full mx-auto md:px-10 px-4 pb-10 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div className="flex flex-col md:flex-1 space-y-4 pb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              {industries.title}
              {"  "}
              <span className="text-dark-gradient">
                {industries.gradientTitle}
              </span>
              {"  "}
              {industries.afterGradientTitle}
            </h2>
            <p className="text-gray-400 mt-2 w-full lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%] text-sm sm:text-base">
              {industries.description}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Button
              ariaLabel="View All Industries"
              text="View All Industries"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="/industries"
              variant="glass"
              className="inline-flex text-foreground md:w-auto justify-between"
            />
          </div>
        </div>
      </div>

      {/* ── Responsive Carousel Banner ─────────────────────────────────────────────── */}
      <div
        className="relative w-full h-100 lg:h-141.75 overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <Image
          src={bgImage || "/banners/dollers.webp"}
          alt="Industries Background"
          fill
          className="object-cover transition-all duration-700 ease-in-out"
        />

        <div ref={carouselRef} className="absolute inset-0 overflow-hidden">
          <div className="flex h-full">
            {loopSafeSlides.map((item, idx) => {
              // Calculate original index to sync active state and backgrounds properly
              const originalIdx = idx % industries.slides.length;
              const isActive = activeIndex === originalIdx;

              return (
                <motion.div
                  key={`${item.title}-${idx}`}
                  style={{
                    flex: `0 0 ${100 / slidesInView}%`,
                    minWidth: `${100 / slidesInView}%`,
                  }}
                  onMouseEnter={() => setActiveIndex(originalIdx)}
                  onMouseLeave={() => {
                    if (carouselApi) {
                      setActiveIndex(
                        carouselApi.selectedScrollSnap() %
                          industries.slides.length,
                      );
                    }
                  }}
                  className="relative h-full cursor-pointer"
                  animate={{
                    background: isActive ? activeGradient : transparentGradient,
                  }}
                  whileHover={{ background: activeGradient }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className={`text-xs ${isActive ? "block opacity-100" : "hidden"} md:text-sm text-zinc-300 mb-3 md:mb-4 transition-all duration-300`}
                      >
                        {item.description}
                      </p>
                      <Button
                        ariaLabel="Explore More"
                        text="Explore More"
                        icon="/icons/arrow-right.svg"
                        size="medium"
                        radius="full"
                        href={item.link}
                        variant="glass"
                        className="inline-flex w-auto justify-between"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
