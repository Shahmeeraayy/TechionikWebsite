import Button from "@/components/Button";
import { FrondendProjectData } from "@/data/frontendExpertiseData";
import Image from "next/image";

const TechnologyTechStacks = () => {
  return (
    <section className="w-full bg-[--color-bg]">
      <div className="">
        {/* Heading */}
        <div className="space-y-6 mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-muted">
            Find Related <span className="text-dark-gradient">Frontend</span>{" "}
            Expertise
          </h2>

          <p className="text-muted max-w-2xl mx-auto md:mx-0">
            Build your backend dream team with experts in Node.js, Python, Java,
            and more, delivering secure, high-performance server solutions.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid
                    lg:px-10
                    xl:px-15   
                     grid-cols-2 
                     md:grid-cols-3 
                     lg:grid-cols-4 
                     gap-10"
        >
          {FrondendProjectData.map((item, index) => (
            <div
              key={index}
              className="group 
                         bg-[#16161A] 
                         rounded-3xl 
                         flex 
                         flex-col 
                         justify-between 
                         h-48 
                         overflow-hidden
                         transition-all 
                         duration-300 
                         hover:bg-[#1E1E24]"
            >
              {/* Icon */}
              <div className="flex justify-center items-center flex-1">
                <Image
                  src={item.icon}
                  alt="tech icon"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Bottom Bar */}
              <div
                className="flex 
                           items-center 
                           justify-between
                           bg-[#26262B] 
                           px-4 
                           py-3 
                           rounded-b-3xl"
              >
                {/* Text */}
                <p
                  className="text-white 
                             text-sm 
                             font-medium 
                             transition-transform 
                             duration-300 
                             group-hover:scale-90"
                >
                  {item.buttonText}
                </p>

                {/* Button */}
                <div
                  className="flex md:opacity-0 md:-translate-x-2 
                             md:group-hover:opacity-100 
                             md:group-hover:translate-x-0
                             transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                    <Button
                      showIcon={true}
                      size="small"
                      icon={item.buttonIcon}
                      className="!p-0 !min-w-0 !w-full !h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyTechStacks;
