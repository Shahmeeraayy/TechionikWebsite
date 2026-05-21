import { ServicesCTAInterface } from "@/data/servicesCTAData";
import Image from "next/image";
import Button from "./Button";

interface ServiceCTAProps {
  data: ServicesCTAInterface;
  opacity?: boolean;
}

const ServicesCTA = ({ data, opacity = false }: ServiceCTAProps) => {
  return (
    <div className="relative overflow-hidden">
      
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0A]">
        
        {/* Background */}
        <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
          <Image
            src={data.bgImage}
            alt="services CTA Image"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover object-center"
          />
        </div>

        {opacity && (
          <div className="absolute inset-0 bg-black opacity-35"></div>
        )}

        {/* Content */}
        <div className="relative max-w-8xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-6 md:p-8 lg:p-16 z-20">
          <div className="flex flex-col space-y-4 max-w-4xl">
            <h2 className="service-section-heading text-white">
              {data.startTitle}{" "}
              <span className="gradient-text">{data.spanTitle}</span>{" "}
              {data.endTitle}
            </h2>

            <p className="service-section-description text-white/80 max-w-3xl">
              {data.description}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              ariaLabel="Talk to an Expert Button"
              text={data.buttonLabel}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href={data.buttonUrl}
              variant="glass"
              className="inline-flex w-auto justify-between mt-4 bg-[#4B4B4B] border border-gray-500/50 hover:bg-[#5A5A5A] transition-colors"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesCTA;
