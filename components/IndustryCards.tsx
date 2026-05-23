"use client";

import Image from "next/image";
import { ArrowRight, Minus, MoveUpRight, Plus } from "lucide-react";
import { useState } from "react";
import LoadingLink from "./LoadingLink";
import { industriesDataHome } from "@/data/Industries Data/IndustriesSectionHome";
import type { IndustrySlide } from "@/data/Industries Data/types";

const FEATURED_TITLES = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail & E-Commerce",
  "Manufacturing",
  "Hi-Tech",
];

const INDUSTRIES_BY_TITLE = new Map(
  industriesDataHome.slides.map((slide) => [slide.title, slide] as const),
);

const FEATURED_INDUSTRIES = FEATURED_TITLES.map((title) =>
  INDUSTRIES_BY_TITLE.get(title),
).filter((slide): slide is IndustrySlide => Boolean(slide));

const EXTRA_INDUSTRIES = industriesDataHome.slides.filter(
  (slide) => !FEATURED_TITLES.includes(slide.title),
);

function IndustryCard({ slide }: { slide: IndustrySlide }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(19,19,24,0.96)_0%,rgba(7,7,10,0.98)_100%)] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,83,35,0.12),transparent_30%)] opacity-70"
      />

      <div className="relative overflow-hidden rounded-[22px]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
          <Image
            src={slide.bgImage}
            alt={slide.title}
            fill
            sizes="(max-width: 640px) 100vw, 280px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col px-1 pb-1 pt-5">
        <h3 className="text-[1.15rem] font-semibold leading-tight text-[#d9d9d9]">
          {slide.title}
        </h3>

        <LoadingLink
          href={slide.link}
          className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-[#2a2a2f] px-4 py-2 text-[11px] font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:bg-[#35353b]"
        >
          Explore Industry
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f05323] text-white">
            <MoveUpRight className="h-3.5 w-3.5" />
          </span>
        </LoadingLink>
      </div>
    </article>
  );
}

export default function IndustryCards() {
  const [showMore, setShowMore] = useState(false);
  const visibleIndustries = showMore
    ? [...FEATURED_INDUSTRIES, ...EXTRA_INDUSTRIES]
    : FEATURED_INDUSTRIES;

  return (
    <div className="bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-black" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,83,35,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(240,83,35,0.08),transparent_26%)]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[-180px] top-[120px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.22),transparent_64%)] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-160px] top-[200px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.08),transparent_72%)] blur-3xl"
        />

        <Image
          src="/dotted.png"
          alt=""
          width={1000}
          height={1000}
          aria-hidden="true"
          className="absolute left-[-220px] top-[20px] w-[980px] max-w-none opacity-75"
        />

        <div className="relative mx-auto flex max-w-[980px] flex-col items-center px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-white/75 backdrop-blur-sm">
            <LoadingLink href="/" className="transition-colors hover:text-white">
              Home
            </LoadingLink>
            <span className="text-white/35">/</span>
            <span className="text-[#f05323]">Industry</span>
          </div>

          <h1
            className="max-w-[760px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#d9d9d9] text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
          >
            Transforming Industries Through
            <br />
            Innovation and Expertise
          </h1>

          <p className="mt-3 max-w-[760px] text-pretty text-[15px] leading-6 text-white/65 sm:text-base">
            Delve into our case studies showcasing how precision and cutting-edge
            innovation at TECHIONIK drive transformative outcomes in sectors like
            oil and gas, fintech, healthcare, and more.
          </p>

          <LoadingLink
            href="/contact-us"
            className="group mt-4 inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#ff6d32] via-[#f05323] to-[#d94717] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(240,83,35,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Discuss Your Idea
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </LoadingLink>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[580px] px-4 pb-20 pt-0 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {visibleIndustries.map((slide) => (
            <IndustryCard key={slide.link} slide={slide} />
          ))}
        </div>

        {EXTRA_INDUSTRIES.length > 0 ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore((value) => !value)}
              className="group inline-flex items-center gap-4 rounded-full bg-[#2c2c31] px-5 py-2.5 text-[11px] font-medium text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-[#35353b]"
            >
              <span>{showMore ? "View Less" : "View More"}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f05323] text-white transition-transform group-hover:scale-105">
                {showMore ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
