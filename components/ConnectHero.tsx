"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { ContactHeroData } from "../data/ConnectHero";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { createMarkup } from "@/utils/GlobalFuntions";

interface ContactHeroProps {
  content: ContactHeroData;
  opacity?: number;
}

const ContactHero: React.FC<ContactHeroProps> = ({
  content,
  opacity = 0.65,
}) => {
  const showButton = Boolean(content.buttonText?.trim());
  const {
    lgImage1,
    lgImage2,
    lgImage3,
    lgImage4,
    smImage1,
    smImage2,
    smImage3,
    smImage4,
  } = content;

  return (
    /* 1. Gradient Wrapper: 
      Padding top and right creates the 1px border effect, 
      while allowing the rounded-2xl class to actually clip the corners.
    */
    <div
      className="relative mx-auto max-w-8xl rounded-2xl pt-px pr-px overflow-hidden"
      style={{
        background:
          "conic-gradient(from 180deg at 51.95% 49.81%, rgba(22, 22, 26, 0) -62.19deg, rgba(22, 22, 26, 0.105455) 121.23deg, rgba(240, 83, 35, 0.2) 142.73deg, #F05323 227.05deg, rgba(22, 22, 26, 0) 297.81deg, rgba(22, 22, 26, 0.105455) 481.23deg)",
      }}
    >
      {/* 2. Inner Container:
        This holds your content and has a solid background color to mask the rest 
        of the gradient from the parent wrapper.
      */}
      <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[530px] w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0A]">
        {/* 3. Background Layer */}
        <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
          <Image
            src={content.backgroundImage || "/banners/hero1.png"}
            alt={content?.imageAlt || "hero image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            quality={75}
            className="object-cover object-center z-0"
          />
        </div>
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300`}
          style={{ opacity }}
        ></div>

        {/* 4. Floating Images Layer - Desktop Only */}
        {lgImage1 &&
          lgImage2 &&
          lgImage3 &&
          lgImage4 &&
          smImage1 &&
          smImage2 &&
          smImage3 &&
          smImage4 && (
            <>
              {/* Desktop Images */}
              <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
                {/* --- Right Side Images --- */}
                <div className="absolute top-10 right-[5%] w-[180px] h-[180px] flex items-center justify-center">
                  <Image
                    width={171}
                    height={169}
                    src={lgImage1}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-12 right-[15%] w-[180px] h-[180px] flex items-center justify-center">
                  <Image
                    width={171}
                    height={169}
                    src={lgImage2}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-20 right-[22%] w-[140px] h-[140px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={120}
                    src={smImage1}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-8 right-[4%] w-[140px] h-[140px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={120}
                    src={smImage2}
                    alt=""
                    className="object-contain"
                  />
                </div>
                {/* --- Left Side Images --- */}
                <div className="absolute top-10 left-[5%] w-[180px] h-[180px] flex items-center justify-center">
                  <Image
                    width={171}
                    height={169}
                    src={lgImage3}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-12 left-[15%] w-[180px] h-[180px] flex items-center justify-center">
                  <Image
                    width={171}
                    height={169}
                    src={lgImage4}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-1/3 left-[22%] w-[140px] h-[140px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={120}
                    src={smImage3}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-8 left-[4%] w-[140px] h-[140px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={120}
                    src={smImage4}
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Tablet Images - Medium */}
              <div className="hidden md:block lg:hidden absolute inset-0 z-10 pointer-events-none">
                {/* --- Right Side Images --- */}
                <div className="absolute top-8 right-[5%] w-[120px] h-[120px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={113}
                    src={lgImage1}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-8 right-[10%] w-[120px] h-[120px] flex items-center justify-center">
                  <Image
                    width={114}
                    height={113}
                    src={lgImage2}
                    alt=""
                    className="object-contain"
                  />
                </div>
                {/* --- Left Side Images --- */}
                <div className="absolute top-8 left-[5%] w-[80px] h-[80px] flex items-center justify-center">
                  <Image
                    width={70}
                    height={41}
                    src={lgImage3}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-8 left-[10%] w-[80px] h-[80px] flex items-center justify-center">
                  <Image
                    width={70}
                    height={41}
                    src={lgImage4}
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </>
          )}

        {/* 5. Main Text Content Layer */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center space-y-4 sm:space-y-6 md:space-y-8 z-20 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[530px]">
          <p className="service-section-heading-lg text-gradient max-w-4xl">
            {/* {content.title.split(content.highlight || "").map((part: string, idx: number, arr: string[]) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="text-[#F05323]">{content.highlight}</span>
                  )}
                </React.Fragment>
              ))} */}
            {content.title}{" "}
            <span className="text-dark-gradient">{content.middleTitle} </span>
            {/* {content.lastTitle} */}
          </p>

          <p
            className="service-section-description text-gray-300 max-w-2xl px-4"
            dangerouslySetInnerHTML={createMarkup(content.description)}
          />

          {content.features && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 px-4">
              <div className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <MdOutlinePayments
                    color="#F05323"
                    className="h-full w-full"
                  />
                </div>
                <span className="service-body text-black font-semibold">
                  {content.features?.[0]?.text || "100% Safe Payment"}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <HiOutlineUserGroup
                    color="#F05323"
                    className="h-full w-full"
                  />
                </div>
                <span className="service-body text-black font-semibold">
                  {content.features?.[1]?.text || "1k+ People Trust Us"}
                </span>
              </div>
            </div>
          )}

          {showButton && (
            <Button
              ariaLabel={content.buttonText}
              text={content.buttonText}
              icon={content.buttonIcon || "/icons/arrow-right.svg"}
              size="medium"
              // radius="full"
              href={content.buttonLink ?? "/contact-us"}
              variant={
                content.buttonVariant === "gradient" ? "gradient" : "glass"
              }
              className="inline-flex justify-around w-auto mt-4 sm:mt-6 transition-all duration-300 "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
