"use client";

import React from "react";
import Image from "next/image";
import { Partner } from "@/data/partners";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface PartnerLogosProps {
  partners: Partner[];
  className?: string;
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({
  partners,
  className = "",
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 2, stopOnInteraction: false })
  ]);

  // Duplicate partners multiple times to ensure enough items for seamless looping on wide screens
  const duplicatedPartners = Array.from({ length: 10 }).flatMap(() => partners);

  return (
    <div
      className={`relative overflow-hidden w-full h-16 flex items-center ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full items-center">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-[0_0_auto] min-w-0 mr-10 md:mr-16 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
