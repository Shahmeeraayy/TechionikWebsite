"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
import Button from "@/components/Button";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export interface Blog {
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
}

const defaultBlogs: Blog[] = [
  {
    title: "AI in Healthcare",
    description:
      "How AI is transforming modern healthcare solutions with advanced diagnostics, predictive analytics, and personalized treatment plans.",
    image: "/images/home/blog-one.png",
    stack: [
      "Cloud",
      "AI",
      "Healthcare",
      "Technology",
      "Analytics",
      "Innovation",
    ],
    slug: "ai-in-healthcare",
  },
  {
    title: "CO-AI: Multimodal AI Framework for Detecting Synthetic Films",
    description:
      "A revolutionary framework combining computer vision, NLP, and audio analysis to detect AI-generated synthetic media in the film industry.",
    image: "/images/home/blog-three.png",
    stack: [
      "AI",
      "Multimodal",
      "Synthetic Media",
      "Detection",
      "Computer Vision",
      "NLP",
    ],
    slug: "co-ai-multimodal-ai-framework",
  },
  {
    title: "E-Commerce Growth",
    description:
      "Driving conversions and customer engagement with data-driven e-commerce strategies and personalized shopping experiences.",
    image: "/images/home/blog-three.png",
    stack: [
      "E-Commerce",
      "Data Analytics",
      "Marketing",
      "Technology",
      "Growth",
      "Strategy",
    ],
    slug: "e-commerce-growth",
  },
  {
    title: "EdTech Platforms",
    description:
      "Enhancing learning experiences through innovative educational technology platforms and adaptive learning systems.",
    image: "/images/home/blog-one.png",
    stack: [
      "EdTech",
      "Education",
      "Technology",
      "Learning",
      "Innovation",
      "Digital",
    ],
    slug: "edtech-platforms",
  },
  {
    title: "Fintech Innovations",
    description:
      "Revolutionizing banking and finance with smart technology solutions and digital transformation strategies.",
    image: "/images/home/blog-three.png",
    stack: [
      "Fintech",
      "Banking",
      "Finance",
      "Technology",
      "Innovation",
      "Digital",
    ],
    slug: "fintech-innovations",
  },
];

export default function AllBlogs({ blogsData }: { blogsData?: Blog[] }) {
  const displayBlogs =
    blogsData && blogsData.length > 0 ? blogsData : defaultBlogs;

  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const handleSlideClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="bg-[--var(-color-bg)] pt-15 text-white px-4 sm:px-6 md:px-10 lg:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <div>
            <h2 className="text-gradient text-4xl md:text-5xl font-bold">
              All <span className="text-dark-gradient">Blogs</span>
            </h2>
          </div>
          <div>
            <Button
              ariaLabel="View All Blogs"
              text="View All Blogs"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="/blog"
              variant="glass"
              className="inline-flex text-foreground"
            />
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={24}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-20"
        >
          {displayBlogs.map((blog, index) => {
            const isActive = activeIndex === index;

            return (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <motion.div
                  onClick={() => {
                    if (isMobile) {
                      router.push(`/blog/${blog.slug}`);
                    } else {
                      handleSlideClick(index);
                    }
                  }}
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  onUpdate={() => swiperRef?.update()}
                  animate={{
                    width: isMobile ? 340 : isActive ? 780 : 340,
                  }}
                  // UPDATED: Faster, more natural spring-like easing instead of 1.5s circOut
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="relative h-145 rounded-3xl overflow-hidden flex bg-[#0A0A0A] border border-gray-800/60 hover:border-[#F05323]/40 cursor-pointer shadow-xl group"
                >
                  <motion.div
                    animate={{
                      width: isMobile ? "100%" : isActive ? "50%" : "100%",
                    }}
                    // UPDATED: Matched parent transition for perfect synchronization
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="relative h-full shrink-0 z-10"
                  >
                    <Image
                      src={blog.image || "/banners/dollers.webp"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />

                    <motion.div
                      animate={{ opacity: isActive ? 0.4 : 0.9 }}
                      className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity duration-300"
                    />

                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.stack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                    </motion.div>

                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-6 left-6 flex flex-wrap gap-2 pointer-events-none"
                    >
                      {blog.stack.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-black/60 backdrop-blur-sm text-gradient text-sm rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {!isMobile && (
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 30,
                      }}
                      // UPDATED: Added a slight delay (0.15s) so the text slides in right as the box makes room for it
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: isActive ? 0.15 : 0,
                      }}
                      className="w-[50%] shrink-0 p-8 flex flex-col justify-center relative bg-linear-to-br from-[#16161A] to-[#0A0A0A] z-0"
                    >
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-linear-to-b from-[#1A1A1A] to-[#0E0E0E] text-white text-xs rounded-full border border-[#F05323]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {blog.title}
                      </h3>
                      <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                        {blog.description}
                      </p>
                      <Button
                        ariaLabel="Read Article"
                        text="Read Article"
                        icon="/icons/arrow-right.svg"
                        size="medium"
                        radius="full"
                        href={`/blog/${blog.slug}`}
                        variant="glass"
                        className="inline-flex w-[56%] items-center"
                      />
                    </motion.div>
                  )}
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-end ">
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="p-3 rounded-full border border-primary-dark text-muted hover:bg-white/10 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#F05323] to-[#CACACA]">
              <button
                onClick={() => swiperRef?.slideNext()}
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
      </div>
    </section>
  );
}
