"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import ClientCard from "@/components/ClientCard";
import { slides } from "@/data/OurClient";

// import "swiper/css";
// import "swiper/css/pagination";

const OurClients = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-8">
          <div className="flex flex-col md:flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
              Our success is defined by the results and satisfaction of those we serve.
            </p>
          </div>

          <div className="mt-4 md:mt-0">

                <Button
                 text="View All Clients"
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"

                href="#"
                variant="glass"
                className="inline-flex w-full md:w-auto justify-center"
              />
      
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <ClientCard
                  title={slide.title}
                  designation={slide.desigantion}
                  color={slide.color}
                  description={slide.description}
                  image={slide.image}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
        }

        .swiper-pagination-bullet-active {
          background-color: #f05323 !important;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default OurClients;
