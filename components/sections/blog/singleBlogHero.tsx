// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import Button from "@/components/Button";
// // import { HeroSlide } from "../../../../data/HeroSectionData";

// import "swiper/css";
// import "swiper/css/pagination";
// import { AboutHeroSlide } from "@/data/AboutSectionData";
// import Image from "next/image";

// interface BlogHeroSectionProps {
//   slides: BlogHeroSlide[];
//   autoplayDelay?: number;
// }

// const AboutSection: React.FC<AboutHeroSectionProps> = ({
//   slides,
//   autoplayDelay = 5000,
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (swiper: SwiperType) => {
//     setActiveIndex(swiper.realIndex);
//   };

//   return (
//     <div className="relative w-full h-screen max-h-screen min-h-100 overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
//         loop
//         className="h-full"
//         onSlideChange={handleSlideChange}
//         pagination={{ clickable: true }}
//       >
//         {slides.map((data, index) => (
//           <SwiperSlide key={index} className="relative h-full w-full">
//             <Image
//               src={data.image}
//               alt={data.title}
//               fill
//               priority={index === 0}
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//           </SwiperSlide>
//         ))}
//       </Swiper>


//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-20">
//         <h1 key={activeIndex} className="opacity-0 animate-fadeIn">
//           <span className="gradient-text">{slides[activeIndex].title}</span>
//           <br />
//           <span className="text-gray-300">
//             {slides[activeIndex].subtitle}
//           </span>
//         </h1>

//         {slides[activeIndex].description && (
//           <p className="mt-6 text-gray-200 text-base sm:text-lg hidden md:block opacity-0 animate-fadeIn delay-200">
//             {slides[activeIndex].description}
//           </p>
//         )}

//         {slides[activeIndex].ctaText && (
//           <div className="py-6">
//             <Button
//               text={slides[activeIndex].ctaText}
//               icon="/icons/arrow-right.svg"
//               size="medium"
//               radius="full"
//               href={slides[activeIndex].ctaLink || "#"}
//               variant="gradient"
//               className="inline-flex w-full md:w-auto justify-center"
//             />
//           </div>
//         )}
//       </div>
   
//       <style jsx global>{`
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease forwards;
//         }

//         .delay-200 {
//           animation-delay: 0.2s;
//         }

//         .delay-400 {
//           animation-delay: 0.4s;
//         }

//         .swiper-pagination-bullet-active {
//           background-color: #f05323 !important;
//           transform: scale(1.25);
//         }
//       `}</style>

//     </div>
//   );
// };

// export default AboutSection;
