import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, Plus } from "lucide-react";
// import { industriesData, Industry } from "../data/IndustryData";
import {
  getAllIndustries,
  TransformedAllIndustriesPage,
} from "@/app/api/Industries/utils/getIndustries";
import { Industry } from "@/app/api/Industries/types/AllIndustries.type";
import LoadingLink from "./LoadingLink";

const IndustriesSection = async () => {
  const data = await getAllIndustries();
  console.log("--------------------------------", data);
  return (
    <section className="bg-[--color-bg] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
          {data?.map((industry: TransformedAllIndustriesPage) => (
            <div
              key={industry.id}
              className="bg-[#111113] rounded-[32px] p-6 border border-white/0 flex flex-col gap-6 group hover:border-t-[#FF6B35]/50 
                            hover:border-r-[#FF6B35]/50 transition-all hover:bg-black"
            >
              {/* Industry Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1C1C1E]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-2xl font-bold">
                  {industry.title}
                </h3>

                <LoadingLink href={industry.link} className="w-fit">
                  <div className="flex items-center gap-3 p-4 bg-[#1C1C1E] hover:bg-[#252528] px-5 py-2 rounded-full transition-colors group/btn">
                    <span className="text-gray-300 text-medium font-medium">
                      Explore Industry
                    </span>
                    <div className="bg-[#FF6B35] p-1.5 rounded-full text-white">
                      <MoveUpRight size={18} strokeWidth={3} />
                    </div>
                  </div>
                </LoadingLink>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <button className="flex items-center gap-3 bg-[#1C1C1E] border border-white/10 px-8 py-3 rounded-full hover:bg-[#252528] transition-all group">
                    <span className="text-white text-medium font-medium">View More</span>
                    <div className="bg-[#FF6B35] verient-glsss p-1.5 rounded-full text-white group-hover:rotate-90 transition-transform">
                        <Plus size={18} strokeWidth={3} />
                    </div>
                </button> */}
      </div>
    </section>
  );
};

export default IndustriesSection;
