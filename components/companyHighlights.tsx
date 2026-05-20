import React from "react";
import { companyHighlightsData } from "../data/companyHighlightsData"; // Adjust the import path as needed
import Image from "next/image";

const CompanyHighlights: React.FC = () => {
  const {
    sectionTitle,
    sectionSubtitle,
    description,
    stats,
    certifications,
    mainImage,
  } = companyHighlightsData;

  // const rightStat = stats[3];

  return (
    <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Text, Left Stats, Certifications */}
        <div className="flex-1 space-y-10 w-full z-10">
          {/* Header & Description */}
          <div className="space-y-10">
            <h2 className=" body-3 text-gradient">
              {sectionTitle}
              {"  "}
              <span className="text-dark-gradient">{sectionSubtitle}</span>
            </h2>
            <p className=" max-w-4xl font-medium text-muted">{description}</p>
          </div>

          {/* <h3 className="gradient-text body-3">{sectionTitle}</h2> */}

          {/* Stats Grid: Shows all 4 on mobile/tablet, hides the 4th on lg screens */}
          <div className="grid grid-cols-2 lg:flex gap-8 lg:gap-34 max-w-4xl">
            {stats.map((stat, index) => (
              <div key={stat.id} className={`flex items-start gap-3`}>
                {/* SVG Arrow */}
                <Image
                  src="/icons/pixel-arrow-up.svg"
                  alt="Arrow Up"
                  width={20}
                  height={20}
                  className="mt-2"
                />

                {/* Flex Col for Value & Label */}
                <div className="flex flex-col">
                  <span className="gradient-text font-semibold text-3xl md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-muted font-semibold text-sm mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Row (Uniform Width & Height) */}
          <div className="flex w-full lg:w-[80%] flex-wrap items-center justify-between gap-6 md:gap-8 lg:gap-3 xl:gap-11 pt-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="lg:w-24 lg:h-24 w-14 h-14 md:w-26 md:h-26 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                {/* Fallback to text if imageUrl is a placeholder */}
                {cert.imageUrl?.includes("placeholder") ? (
                  <span className="text-[10px] text-center leading-tight text-muted">
                    {cert.name}
                  </span>
                ) : (
                  <Image
                    src={cert.imageUrl}
                    alt={cert.imageAlt}
                    width={100}
                    height={100}
                    sizes="96px" // Add this!
                    quality={40}
                    className="antialiased w-full h-full object-contain "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Globe Image & Floating Stat */}
        <div className="flex-1 relative flex justify-center items-center w-full max-w-lg lg:max-w-xl mt-10 lg:mt-0">
          {/* Background Glow / Ring */}
          {/* <div className="absolute inset-0 rounded-full border-15 md:border-25 border-orange-900/20 shadow-[0_0_80px_rgba(234,88,12,0.15)] transform scale-90"></div> */}

          {/* Main Globe Image */}
          <div className="relative hidden lg:block z-10 w-full aspect-square rounded-full overflow-hidden lg:items-center lg:justify-center">
            <Image
              src={mainImage.imageUrl}
              alt={mainImage.altText}
              fill
              sizes="50vw"
              quality={40}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Floating Right Stat: Hidden on smaller screens, shown only on lg+ */}
          {/* <div className="hidden lg:flex absolute pt-1 left-10 lg:left-25 lg:top-[55%] xl:top-[36%] 2xl:top-[50%] -ml-4 md:-ml-12 z-20 items-start gap-3">

            <Image
              src="/icons/pixel-arrow-up.svg"
              alt="Arrow Up"
              width={20}
              height={20}
              className="mt-2"
            />
            <div className="flex flex-col">
              <span className="gradient-text text-3xl md:text-4xl">
                {rightStat.value}
              </span>
              <span className="text-muted text-sm mt-1">{rightStat.label}</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
