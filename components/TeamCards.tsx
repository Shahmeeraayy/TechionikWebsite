// "use client";

// import Image from "next/image";
// import React from "react";
// import { HeadingParts, TeamSection } from "../data/TeamData";

// interface TeamCardProps {
//   sections: TeamSection[];
//   heading: HeadingParts;
//   className?: string;

// }

// const TeamCard: React.FC<TeamCardProps> = ({ sections, heading ,className }) => {
//   return (
//     <div className={`flex flex-col gap-0 ${className}`}>

//       <div className="max-w-xl mb-16">
//         <h2 className="text-gradient">
//           {heading?.title} <span className="text-dark-gradient">{heading?.middleTitle}</span> {heading?.lastTitle}
//         </h2>
//       </div>

//       {sections.map((section, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center gap-10 ${section.member.layout === 1 ? "md:flex-row-reverse" : ""
//             }`}
//         >
//           {/* Text */}
//           <div className="w-full md:w-1/2 px-4 md:px-0">
//             <h2 className="text-gradient text-3xl md:text-4xl font-bold mb-4">
//               {section.title}
//             </h2>
//             <p className=" text-gray-200 md:text-lg">{section.description}</p>
//           </div>

//           {/* Member Card */}
//           <div className="w-full md:w-1/2 relative image-box h-118.75 rounded-xl border-2 border-[#2A2A34] shadow-lg bg-[#16161A]">
//             <Image
//               src={section.member.image}
//               alt={section.member.name}
//               fill
//               className="object-cover rounded-xl"
//             />
//             <div className="info flex justify-between items-center px-4 py-2 absolute bottom-0 w-full rounded-b-xl bg-[#16161A] shadow-md">
//               <div>
//                 <p className="gradient-text font-semibold">{section.member.name}</p>
//                 <p className="plain-text1 text-sm">{section.member.position}</p>
//               </div>
//               {section.member.socialIcon && section.member.socialLink && (
//                 <a
//                   href={section.member.socialLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div className="circle flex items-center justify-center w-9 h-9 border border-white rounded-full">
//                     <Image
//                       src={section.member.socialIcon}
//                       alt={`${section.member.name} social`}
//                       width={20}
//                       height={20}
//                       className="object-contain"
//                     />
//                   </div>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamCard;




"use client";

import Image from "next/image";
import React from "react";
import { HeadingParts, TeamSection } from "../data/TeamData";

interface TeamCardProps {
  sections: TeamSection[];
  heading: HeadingParts;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  sections,
  heading,
  className,
}) => {
  return (
    // {/* Expanded container width to 1400px to better utilize 1080p screens */}
    <div
      className={`flex bg-[--color-bg] flex-col gap-12 lg:gap-0 max-w-[1400px] mx-auto px-6 md:px-12 w-full ${className || ""}`}
    >
      {heading && (
        <div className="max-w-2xl">
          <h2 className="text- text-4xl lg:text-5xl font-bold">
            {heading?.title}{" "}
            <span className="text-dark-gradient">{heading?.middleTitle}</span>{" "}
            {heading?.lastTitle}
          </h2>
        </div>
      )}

      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24 ${
            section.member.layout === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Side - Scaled up typography constraints for 1920x1080 */}
          <div className="w-full md:w-1/2 lg:w-[48%] max-w-2xl">
            {/* Custom Orange Quotes Graphic */}
            <div className="flex gap-1.5 mb-8">
              <div className="w-3 h-8 bg-[#FF5A36] rounded-sm transform -skew-x-12"></div>
              <div className="w-3 h-8 bg-[#d6d4d3] rounded-sm transform -skew-x-12"></div>
            </div>

            <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-8">
              {section.title}
            </h2>
            <p className="text-muted text-lg lg:text-xl leading-relaxed">
              {section.description}
            </p>
          </div>

          {/* Member Card Side - Scaled up max width and padding */}
          <div className="w-full md:w-1/2 lg:w-[45%] max-w-[550px] relative pt-20 lg:pt-24">
            <div className="relative rounded-2xl border border-[#2A2A34] bg-[#16161A] shadow-2xl">
              
              {/* Image - Scaled up to 480px height to feel robust on desktop */}
              <div className="absolute -top-30 lg:-top-34 left-1/2 -translate-x-1/2 w-[90%] h-[400px] lg:h-[480px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={section.member.image}
                  alt={section.member.name}
                  fill
                  className="object-cover object-top grayscale filter"
                />
              </div>

              {/* Spacer Math: 480px (image height) - 96px (top-24 overlap) = 384px. Tailwind 'h-96' is exactly 384px. */}
              <div className="h-[280px] lg:h-86" />

              {/* Info Bar - Scaled up paddings and font sizes to match the larger card */}
              <div className="relative z-10 border-t border-[#2A2A34] flex justify-between items-center px-8 lg:px-10 py-6 lg:py-8">
                <div>
                  <p className="text-white text-2xl font-bold tracking-wide">
                    {section.member.name}
                  </p>
                  <p className="text-[#FF5A36] text-base mt-1.5 font-medium">
                    {section.member.position}
                  </p>
                </div>

                {section.member.socialIcon && section.member.socialLink && (
                  <a
                    href={section.member.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full bg-transparent transition-colors hover:bg-gray-800">
                      <Image
                        src={section.member.socialIcon}
                        alt={`${section.member.name} social`}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;