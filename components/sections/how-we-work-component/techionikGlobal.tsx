"use client";
import Image from "next/image";
import { CountryCardData } from "@/data/countryCardData";
import { Phone, MapPin } from "lucide-react";

const TechionikGlobal = () => {
  return (
    <section className="relative w-full flex flex-col items-center lg:pb-20 bg-[--color-bg] mb-65 md:mb-90 lg:mb-70 xl:mb-105 2xl:mb-90">
      {/* Central Background Image */}
      <div className="relative w-full max-w-full xl:px-60 flex justify-center items-center">
        <Image
          src="/images/ParentServices/OurCustomerSaysMedia/bg_OurCutsomersays.png"
          alt="Globe Background"
          width={1200}
          height={1200}
          className="object-cover object-center w-[65%] 2xl:w-[80%] rounded-2xl"
        />

        {/* Cards Overlay */}
        <div
          className="absolute inset-0 flex justify-center items-start gap-6 md:gap-10 mt-[120px] md:mt-[200px] lg:mt-[150px] xl:mt-[250px] 2xl:mt-[250px]
              px-6 md:px-12"
        >
          {CountryCardData.map((country, index) => (
            <div
              key={index}
              className="relative w-34 h-42 md:w-80 md:h-60 lg:w-80 lg:h-90 xl:w-60 xl:h-80 2xl:w-90 2xl:h-110 rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
                style={{
                  backgroundImage: `url(${country.backgroundImage || "/images/default-bg.jpg"})`,
                }}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {country.countryName}
                </h3>

                {/* Phone and Address */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-500 hover:bg-orange-500 hover:text-white">
                    <Phone size={18} />
                    <span className="text-sm">{country.phone}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-500 hover:bg-orange-500 hover:text-white">
                    <MapPin size={18} />
                    <span className="text-sm">{country.address}</span>
                  </div>
                </div>
              </div>

              {/* Name on top by default */}
              <div className="absolute top-4 w-full text-center text-white font-bold text-lg md:text-xl group-hover:opacity-0 transition-opacity duration-500">
                {country.countryName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechionikGlobal;
