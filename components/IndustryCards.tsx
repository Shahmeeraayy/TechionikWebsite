import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import {
  getAllIndustries,
  TransformedAllIndustriesPage,
} from "@/app/api/Industries/utils/getIndustries";
import LoadingLink from "./LoadingLink";

const IndustriesSection = async () => {
  const data = await getAllIndustries();

  return (
    <section className="bg-[--color-bg] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {data?.map((industry: TransformedAllIndustriesPage) => (
            <div
              key={industry.id}
              className="group flex flex-col gap-6 rounded-[32px] border border-white/0 bg-[#111113] p-6 transition-all hover:border-t-[#FF6B35]/50 hover:border-r-[#FF6B35]/50 hover:bg-black"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1C1C1E]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <LoadingLink href={industry.link} className="w-fit">
                  <div className="flex items-center gap-3 rounded-full bg-[#1C1C1E] px-5 py-2 transition-colors hover:bg-[#252528]">
                    <span className="text-medium font-medium text-gray-300">
                      Explore Industry
                    </span>
                    <div className="rounded-full bg-[#FF6B35] p-1.5 text-white">
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
          <span className="text-medium font-medium text-white">View More</span>
          <div className="verient-glsss rounded-full bg-[#FF6B35] p-1.5 text-white transition-transform group-hover:rotate-90">
            <Plus size={18} strokeWidth={3} />
          </div>
        </button> */}
      </div>
    </section>
  );
};

export default IndustriesSection;
