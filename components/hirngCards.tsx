"use client";
import React from 'react';
// import Link from 'next/link';
import { HiringPageData } from '../data/hiringCardData';
import Link from 'next/link';
import { useSlider } from './hooks/Slider';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const HiringSection: React.FC<{ data: HiringPageData }> = ({ data }) => {
    const { emblaRef, emblaApi } = useSlider({ loop: false });
    const { header, cards } = data;

    return (
        <section className="bg-[--color-bg] max-w-full py-24 px-6 lg:px-20">
            <div className="max-w-8xl mx-auto">

                {/* Section Header - Now fully dynamic via Props */}
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {header.mainTitle}<br /> <span className="gradient-text">{header.highlightTitle}</span>
                    </h2>
                    <p className="text-(--color-muted) text-xl font-light whitespace-pre-line">
                        {header.subtitle}
                    </p>
                </div>

                {/* Grid Layout */}
<div className="overflow-hidden" ref={emblaRef}>
  <div className="flex gap-8">
    {cards.map((item) => (
      <div
        key={item.id}
        className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]
        bg-[#16161A] rounded-[32px] p-10 border border-[#2A2A34] flex flex-col h-full shadow-xl"
      >
        {/* Icon */}
        <div className="w-20 h-20 bg-[#26262B] rounded-full border border-[#303038] flex items-center justify-center mb-8">
          <Image
            src={item.icon}
            alt={item.category}
            width={44}
            height={44}
            className="w-11 h-11 opacity-80"
          />
        </div>

        {/* Title */}
        <h3 className="text-[var(--color-muted)] text-3xl font-bold leading-tight mb-8">
          {item.title} <br />
          <span className="gradient-text">{item.category}</span>
        </h3>

        {/* Features */}
        <ul className="space-y-4 mb-12 flex-grow">
          {item.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-white text-lg leading-snug"
            >
              <span className="font-bold">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link href="/contact">
          <button className="flex items-center justify-between bg-[#434345] hover:bg-[#4d4d4f] transition-colors w-full max-w-[180px] py-2 pl-6 pr-2 rounded-full group">
            <span className="text-white font-medium text-lg">Hire Now</span>
            <div className="w-10 h-10 bg-[#E85D33] rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>
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
            </div>
        </section>
    );
};

export default HiringSection;
