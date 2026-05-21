import React from "react";
import { SolutionsData } from "../data/solutionsData";
import { createMarkup } from "@/utils/GlobalFuntions";


const TailoredSolutions: React.FC<{ data: SolutionsData }> = ({ data }) => {
  const { header, cards } = data;

  return (
    <section className="bg-[--color-bg] px-6 w-full mx-auto">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-4xl">
          <h2 className="service-section-heading text-gradient mb-8">
            {header.title}{" "}
            <span className="text-dark-gradient">{header.middleTitle}</span>{" "}
            {header.lastTitle}
          </h2>
          <p className="service-section-description text-muted max-w-2xl"
             dangerouslySetInnerHTML={createMarkup(header.description)}
          />
        </div>

        {/* Solutions Grid */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group bg-[#121214] rounded-4xl p-10 pt-14 border border-white/5 h-125 flex flex-col overflow-hidden shadow-2xl transition-all hover:border-white/10"
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="service-card-title text-white mb-6">
                  {card.title}
                </h3>
                <p className="service-body text-gray-400"
                   dangerouslySetInnerHTML={createMarkup(card.description)}
                />
              </div>

              {/* Bottom Decorative Graphic */}
              <div
                className="absolute -bottom-8 left-0 w-full h-full pointer-events-none transition-all duration-300 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${card.bgPattern})`,
                  backgroundPosition: "bottom center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${card.bgWidth} ${card.bgHeight}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;
