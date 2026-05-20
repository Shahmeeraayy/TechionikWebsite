"use client";

import Image from "next/image";
import LoadingLink from "@/components/LoadingLink";
import { OurClients } from "@/app/api/our-clients/utils/getClients";

interface ClientCardProps {
  data: OurClients;
}

const ClientsCard = ({ data }: ClientCardProps) => {
  const { name, logo, industry, href } = data;

  return (
    <LoadingLink href={href}>
      <div className="group relative flex flex-col bg-[#FFFFFF08] border border-white/10 rounded-2xl p-6 h-[300px] transition-all duration-500 hover:bg-[#FFFFFF12]">
        {/* Top Section: Industry */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-md border-gradient" />
          <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
            {industry}
          </span>
        </div>

        {/* Middle Section: Logo */}
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="relative h-16 w-full">
            <Image
              src={logo}
              alt={name}
              fill
              sizes="(max-width: 768px) 60vw, 220px"
              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Bottom Section: Button */}
        <div className="mt-auto flex justify-start">
          <div className="flex items-center cursor-pointer group/btn overflow-hidden transition-all duration-500 ease-in-out">
            <span
              className="max-w-0 opacity-0 whitespace-nowrap text-[10px] font-semibold text-white transition-all duration-500 ease-in-out 
      bg-gray-600 rounded-2xl 
      group-hover:max-w-[150px] group-hover:opacity-100 group-hover:px-4 group-hover:py-1.5 group-hover:mr-2"
            >
              Read Case Studies
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border-gradient bg-transparent transition-all duration-300 
      group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:rotate-45"
            >
              <Image
                src="/icons/arrow-diagonal.svg"
                alt="arrow"
                width={16}
                height={16}
                className="w-4 h-4 brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </LoadingLink>
  );
};

export default ClientsCard;
