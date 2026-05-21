"use client";
import React from "react";
import Image from "next/image";
import { ProgrammerSkillsData } from "../data/H_skillsData";
import { createMarkup } from "@/utils/GlobalFuntions";

const ProgrammerSkills: React.FC<{ data: ProgrammerSkillsData }> = ({
  data,
}) => {
  const { header, cards } = data;

  return (
    <section className="bg-[--color-bg] pb-10 px-6">
      <div className="max-w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="service-section-heading-lg text-(--color-muted) mb-6">
            {header.mainTitle}{" "}
            <span className="text-dark-gradient">{header.highlightTitle}</span>{" "}
            <br className="hidden md:block" />
            {header.brandName}
          </h2>
          <p
            className="service-section-description text-[var(--color-muted)]"
            dangerouslySetInnerHTML={createMarkup(header.description ?? "")}
          />
        </div>

        {/* Skills Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[var(--color-secondary-dark)] rounded-[32px] p-10 border border-[#2A2A34] flex flex-col h-full shadow-2xl relative overflow-hidden group hover:bg-[#16161A1A] hover:border-[#E85D33]/20 transition-all"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 bg-[var(--color-secondary-dark)] rounded-full border border-[#303038] flex items-center justify-center mb-10 shadow-inner">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="w-14 h-14 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Card Title */}
              <h3 className="service-card-title gradient-text mb-8">
                {card.title}
              </h3>

              {/* Content Section */}
              <div className="flex-grow">
                {card.description ? (
                  <div
                    className="service-body text-gray-400 prose prose-invert"
                    dangerouslySetInnerHTML={createMarkup(card.description)}
                  />
                ) : card.skills && card.skills.length > 0 ? (
                  <ol className="space-y-2">
                    {card.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="flex gap-4 service-body text-gray-400"
                      >
                        <span className="text-gray-600 font-medium">
                          {index + 1}.
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>

              {/* Decorative side accent visible in reference image */}
              <div className="absolute right-0 top-1/4 h-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#E85D33]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammerSkills;
