"use client";

import Image from "next/image";
import React from "react";
import { TeamSection } from "../../data/TeamData";
import { teamHeading } from "../../data/TeamData";

interface TeamCardProps {
  sections: TeamSection[];
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ sections, className }) => {
  const { title, middleTitle, lastTitle } = teamHeading;

  return (
    <div className={`flex flex-col gap-20 ${className}`}>
      <h2 className="text-4xl font-bold">
        {title} <span className="text-primary">{middleTitle}</span> {lastTitle}
      </h2>
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            section.member.layout === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="plain-text text-base md:text-lg">
              {section.description}
            </p>
          </div>

          {/* Member Card */}
          <div className="w-full md:w-1/2 relative image-box h-118.75 rounded-xl border-2 border-[#2A2A34] shadow-lg bg-[#16161A]">
            <Image
              src={section.member.image}
              alt={section.member.name}
              fill
              className="object-cover rounded-xl"
            />
            <div className="info flex justify-between items-center px-4 py-2 absolute bottom-0 w-full rounded-b-xl bg-[#16161A] shadow-md">
              <div>
                <p className="gradient-text font-semibold">
                  {section.member.name}
                </p>
                <p className="plain-text1 text-sm">{section.member.position}</p>
              </div>
              {section.member.socialIcon && section.member.socialLink && (
                <a
                  href={section.member.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="circle flex items-center justify-center w-9 h-9 border border-white rounded-full">
                    <Image
                      src={section.member.socialIcon}
                      alt={`${section.member.name} social`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
