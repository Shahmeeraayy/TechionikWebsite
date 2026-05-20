import Image from "next/image";
import { techionikContent } from "@/data/setsTechionikApartData";

const SetsTechionikApart = () => {
  const { title, brandName, subtitle, points, mainImage } = techionikContent;

  return (
    <section className="bg-[--color-bg] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-8xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl text-foreground md:text-4xl font-bold mb-12">
          {title} <span className="text-dark-gradient">{brandName}</span> {subtitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Timeline Points */}
          <div className="space-y-0">
            {points.map((point, index) => (
              <div key={point.id} className="flex group">
                {/* Connector Line Logic */}
                <div className="flex flex-col items-center mr-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-500 bg-zinc-800 shrink-0">
                    <CheckIcon />
                  </div>
                  {/* Don't show the line after the last item */}
                  {index !== points.length - 1 && (
                    <div className="w-[1px] h-16 bg-[#F05323]/50"></div>
                  )}
                </div>

                {/* Text Content */}
                <div className="pb-8 pt-2">
                  <p className="text-foreground text-lg leading-snug max-w-md">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={mainImage}
              alt="Team working together"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple reusable Check Icon component
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default SetsTechionikApart;