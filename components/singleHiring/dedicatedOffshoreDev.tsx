import React from "react";

interface ActionItem {
  title: string;
  description: string;
}

interface ActionSectionData {
  title: string;
  subtitle: string;
  description: string;
  items: ActionItem[];
}

interface ActionSectionProps {
  data: ActionSectionData;
}

export default function ActionSection({ data }: ActionSectionProps) {
  const { title, subtitle, description, items } = data;

  return (
    <section className="bg-[#111113] py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-8xl mx-auto mb-14">
        <h2 className="service-section-heading-lg text-white">
          {title}{" "}
          <span className="block">
            {subtitle.split(" ").map((word, i) =>
              i === subtitle.split(" ").length - 1 ? (
                <span key={i} className="text-[#F0532366]">
                  {word}
                </span>
              ) : (
                <span key={i} className="text-[#9a9a9a]">
                  {word}{" "}
                </span>
              )
            )}
          </span>
        </h2>
        <div
          className="service-section-description text-[#9a9a9a] max-w-md prose-p:m-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1d] rounded-2xl p-8 flex flex-col gap-10 border border-[#2a2a2d] hover:border-[#c0522a]/40 transition-colors duration-300"
          >
            {/* Number */}
            <span className="text-[#c0522a] text-6xl md:text-7xl font-bold leading-none tracking-tighter select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div>
              <h3 className="service-card-title text-white mb-4">
                {item.title}
              </h3>
              <div
                className="service-body text-[#9a9a9a]
                  [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:m-0 [&_ul]:p-0
                  [&_li]:flex [&_li]:items-start [&_li]:gap-2
                  [&_li]:before:content-['•'] [&_li]:before:text-[#c0522a] [&_li]:before:font-bold [&_li]:before:mt-0
                  [&_p]:m-0"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Example usage / page preview
// ---------------------------------------------------------------------------
export const sampleData: ActionSectionData = {
  title: "Hire a Dedicated",
  subtitle: "Offshore Developer",
  description:
    "<p>We work with all kinds of businesses, from Startups to SMB's and Large-scale enterprises!</p>",
  items: [
    {
      title: "Senior Android Developer",
      description:
        "<ul><li>6-7 years of Experience</li><li>Architectural design authority</li><li>Innovative feature implementation</li><li>Google Play optimization</li><li>Technical leadership in Kotlin</li></ul>",
    },
    {
      title: "Mid-Senior Android Developer",
      description:
        "<ul><li>4-5 years of experience</li><li>Android SDK talent</li><li>Efficient code configuring</li><li>Material Design principles</li><li>Team project coordination</li></ul>",
    },
    {
      title: "Junior Android Developer",
      description:
        "<ul><li>2-3 years of experience</li><li>UI/UX design</li><li>Lifecycle management skills</li><li>Performance monitoring</li><li>API integration capability</li></ul>",
    },
  ],
};

