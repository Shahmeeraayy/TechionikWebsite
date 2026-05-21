import React from "react";

interface PriceItem {
  pkgTitle: string;
  priceRange: string;
  description: string;
}

interface PriceListData {
  title: string;
  description: string;
  items: PriceItem[];
}

interface PriceListProps {
  data: PriceListData;
}

export default function PriceList({ data }: PriceListProps) {
  const { title, description, items } = data;

  // Split title: all words bold-white except last word which is bold-white too,
  // but we replicate the design: first line normal weight gray, last word(s) bold white
  const titleWords = title.trim().split(" ");
  // Heuristic: last 3 words on second line bold
  const firstLine = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(" ");
  const secondLine = titleWords.slice(Math.ceil(titleWords.length / 2)).join(" ");

  return (
    <section className="bg-[--color-bg] px-6 py-20 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-8xl mx-auto mb-14">
        <h2 className="service-section-heading-lg mb-5">
          <span className="text-[#9a9a9a]">{firstLine}</span>
          <br />
          <span className="text-white">{secondLine}</span>
        </h2>
        <div
          className="service-section-description text-[#9a9a9a] max-w-lg [&_p]:m-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1d] rounded-2xl p-7 flex flex-col gap-5 border border-[#2a2a2d] hover:border-[#c0522a]/40 transition-colors duration-300"
          >
            {/* Title + Price Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="service-card-title-sm text-white leading-none">
                {item.pkgTitle}
              </h3>
              {item.priceRange && (
                <span className="text-[#c0522a] text-xs font-medium bg-[#c0522a]/10 border border-[#c0522a]/30 rounded-full px-3 py-1 whitespace-nowrap">
                  {item.priceRange}
                </span>
              )}
            </div>

            {/* Description */}
            <div
              className="service-body text-[#9a9a9a]
                [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:m-0 [&_ul]:p-0
                [&_li]:flex [&_li]:items-start [&_li]:gap-2
                [&_li]:before:content-['•'] [&_li]:before:text-[#c0522a] [&_li]:before:font-bold
                [&_p]:m-0 [&_p]:text-[#7a7a7a] [&_p]:text-xs [&_p]:mb-3"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sample data matching the screenshot
// ---------------------------------------------------------------------------
export const sampleDataa: PriceListData = {
  title: "Hire Android Developers as Per Your Need",
  description:
    "<p>Leverage this global talent to enhance your project's innovation and execution, delivering exceptional results.</p>",
  items: [
    {
      pkgTitle: "Tier 1",
      priceRange: "$2000 - $2500 (Monthly)",
      description:
        "<ul><li>1 Android Developer</li><li>4â€“6 years of Android Development experience</li><li>Managed 4 â€“ 5 projects</li><li>Completed over 800+ development hours</li><li>Suitable for general-level projects</li></ul>",
    },
    {
      pkgTitle: "Tier 2",
      priceRange: "$2000 - $2500 (Monthly)",
      description:
        "<ul><li>1 Android Developer</li><li>4â€“6 years of Android Development experience</li><li>Managed 4 â€“ 5 projects</li><li>Completed over 800+ development hours</li><li>Suitable for general-level projects</li></ul>",
    },
    {
      pkgTitle: "Build",
      priceRange: "",
      description:
        "<p>Dedicated Android Development Team</p><ul><li>Dedicated and experienced development</li><li>The Android team committed to your project</li><li>working full-time for 8 hours a day, and 160 hours a month</li></ul>",
    },
  ],
};

