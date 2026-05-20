import Button from "@/components/Button";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "@/data/services/service-component-types";

type Props = {
  data: ServiceData;
};

const Services = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between my-10">
        <div className="flex flex-col gap-4 mb-5 lg:mb-10">
          {/* Heading */}
          <div className="flex w-full md:w-[70%] lg:w-[80%] items-center">
            <h2
              id="our_core_services"
              className="text-base md:text-3xl lg:text-4xl font-bold text-gradient"
            >
              {data.title}{" "}
              <span className="text-dark-gradient">{data.middleTitle}</span>{" "}
              {data.lastTitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted w-full lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%] text-sm sm:text-base">
            {data.description}
          </p>
        </div>

        {/* Button */}
        <Button
          ariaLabel="View All Services"
          text="View All Services"
          icon="/icons/arrow-right.svg"
          size="medium"
          href="/services"
          variant="glass"
          showIcon={true}
          className="shrink-0 md:w-auto w-[70%] text-foreground"
        />
      </div>
      <div className="">
        <ServiceCard data={data} />
      </div>
    </>
  );
};

export default Services;
