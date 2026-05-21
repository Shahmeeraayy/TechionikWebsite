"use client";
import Image from "next/image";
import { ArrowLeft, Star } from "lucide-react";
import Button from "@/components/Button";
import { useSlider } from "@/components/hooks/Slider"; // Ensure this hook is correctly imported
import { ourClientSaysData } from "../data/OurClientSaysData";

const OurClientSays = () => {
  // Initialize slider logic to handle the right and left arrow clicks
  const { emblaRef, emblaApi } = useSlider();

  return (
    <section className="bg-[-var(--color-bg)] overflow-hidden font-sans my-10 lg:my-0">
      <div className="space-y-10 lg:space-y-0">
        {/* Fix: Added min-width and flex-shrink-0 to prevent button cutting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex-1 space-y-4">
            <h2 className="service-section-heading-lg text-(--color-muted)">
              {ourClientSaysData.title}{" "}
              <span className="text-dark-gradient">
                {ourClientSaysData.highlightedText}
              </span>{" "}
            </h2>
            <p className="service-section-description text-muted max-w-xl">
              {ourClientSaysData.description}
            </p>
          </div>

          <div className="shrink-0 z-10">
            <Button
              ariaLabel={ourClientSaysData.ctaText}
              text={ourClientSaysData.ctaText}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href={ourClientSaysData.ctaLink}
              variant="glass"
              className="inline-flex items-center text-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Testimonial Slider Area */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {ourClientSaysData.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-2"
                  >
                    <div className="bg-(--color-secondary-dark) rounded-4xl p-8 md:p-12 border border-white/15 relative h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="service-card-title text-gradient mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="service-body text-(--color-primary-light) font-medium">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                        <div className="relative w-16 h-16 rounded-full border-2 border-(--color-primary-light) overflow-hidden shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="service-section-description text-(--color-muted) mb-8">
                        {testimonial.content}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-[#C19800] text-[#C19800]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fix: Linked emblaApi calls to handle slider movement on click */}
            <div className="flex gap-4">
              {/* Prev */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-3 rounded-full border border-(--color-primary-dark) text-(--color-text) hover:border-(--color-primary-dark) transition-all"
              >
                <ArrowLeft size={24} />
              </button>

              {/* Next with gradient border + icon */}
              <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#F05323] to-[#CACACA]">
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="p-3 rounded-full bg-black flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient
                        id="arrowGrad"
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#F05323" />
                        <stop offset="100%" stopColor="#CACACA" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="url(#arrowGrad)"
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

          {/* Globe/Avatar Visualization */}
          <div className="relative w-full h-125 lg:h-150 mx-auto gap-20 hidden lg:block overflow-visible">
            {/* The Background Globe Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/ParentServices/OurCustomerSaysMedia/bg_OurCutsomersays.png"
                alt="Globe Background"
                fill
                className="object-contain object-center scale-100 lg:scale-110 translate-y-0"
              />
            </div>
            {ourClientSaysData.globeIcons.map((icon) => (
              <div
                key={icon.id}
                className="absolute w-14 h-14 rounded-full border-2 overflow-hidden bg-black"
                style={{
                  top: icon.top,
                  left: icon.left,
                  borderColor: icon.borderColor,
                }}
              >
                <Image
                  src={icon.image}
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientSays;
