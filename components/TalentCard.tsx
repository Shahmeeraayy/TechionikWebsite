import Image from "next/image";
import Button from "@/components/Button";

type CardProps = {
  title: string;
  image: string;
  active?: boolean;
  name?: string;
  designation?: string;
  stack?: string[];
};

const Card = ({ image, active, name, designation, stack }: CardProps) => {
  return (
    <div
      className={`
        relative rounded-[24px] md:rounded-[32px] p-5 md:p-8
        bg-[#16161A] border
        transition-all duration-300
        w-[100%]
        min-h-[420px] md:min-h-[500px] lg:min-h-[571px]
        flex flex-col items-center
        ${active ? "border-orange-500" : "border-white/5"}
      `}
    >
      {/* Image */}
      <div className="w-[50%] h-[160px] sm:h-[190px] md:h-[219px] rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6">
        <Image
          src={image}
          alt={name || "Talent"}
          width={230}
          height={219}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Designation */}
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-gradient text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
          {name}
        </h3>
        <p className="text-primary text-sm md:text-base lg:text-lg font-medium mt-1 md:mt-2">
          {designation}
        </p>
      </div>

      {/* Skill Stack Tags */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center mb-6 md:mb-8 px-1 md:px-2">
        {stack?.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#1C1C1E] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium text-[var(--color-text1)] border border-white/5"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Hire Now Button */}
      <div className="mt-auto">
        <Button
          text="Hire Now"
          icon="/icons/arrow-right.svg"
          size="medium"
          radius="full"
          href="/contact-us"
          variant="glass"
          className="px-6 inline-flex items-center gap-2"
        />
      </div>
    </div>
  );
};

export default Card;
