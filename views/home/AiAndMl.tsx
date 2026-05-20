"use client";

import Button from "@/components/Button";
import { CALENDLY_URL } from "@/utils/links";
import Image from "next/image";
export default function AiSection() {
  return (
    <div className="flex justify-center items-center gap-20 flex-wrap sm:no-wrap">
      <div
        className="bg-cover bg-center bg-no-repeat
        xl:w-163.25 xl:h-160.5
        lg:h-130.5 lg:w-113.25 
        sm:w-143.25 sm:h-140.5
        w-93.25 h-100.5
      "
        style={{ backgroundImage: "url('/banners/smart-automation.webp')" }}
      >
        <div className=" max-w-lg space-y-6 flex flex-col items-start justify-center h-full mx-auto px-5 lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            Smart <span className="text-dark-gradient">Automation</span> keeps
            your systems powerful, not complicated
          </h2>

          <p className="text-white/80 text-base md:text-lg">
            Book a quick call and get a clear look at how Whenevr works,
            what&apos;s included, and whether it fits your pace.
          </p>

          <Button
            ariaLabel="Let's Talk"
            text="Let's Talk"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href={CALENDLY_URL}
            variant="glass"
            className="inline-flex w-auto justify-between"
          />
        </div>
      </div>
      <div className=" h-fit w-fit">
        <Image
          src="/banners/Calendar.webp"
          width={318}
          height={406}
          alt="Calendar"
          className="object-center"
        />
      </div>
    </div>
  );
}
