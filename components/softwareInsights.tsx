"use client";
import { SoftwareInsights } from "@/data/softwareInsightsData";
import Button from "./Button";
import { useState } from "react";

interface SoftwareInsightProps {
  data: SoftwareInsights;
}

const SoftwareDevelopmentInsights = ({ data }: SoftwareInsightProps) => {
  // Set to 5 initially so the button naturally occupies the 6th slot
  const [visibleItems, setVisibleItems] = useState(5);
  
  const handleToggle = () => {
    setVisibleItems(visibleItems === 5 ? data.InsightSteps.length : 5);
  };

  return (
    <main className="py-10">
      <div className="space-y-10">
        {/* Main Heading Section */}
        <div>
          <h2 className="service-section-heading text-muted">
            {data.startTitle}{" "}
            <span className="gradient-text">{data.spanTitle}</span>{" "}
            {data.endTitle}
          </h2>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-6 relative">
          {data.InsightSteps.slice(0, visibleItems).map((item, index) => {
            // Target the items in the bottom row when collapsed
            const needsFade = visibleItems === 5 && index >= 3;

            return (
              <div 
                key={index} 
                className={`space-y-4 ${
                  needsFade 
                    ? "mask-[linear-gradient(to_bottom,black_30%,transparent_100%)]" 
                    : ""
                }`}
              >
                {/* Column Heading */}
                <div>
                  <h3 className="service-card-title-sm gradient-text">{item.mainHeading}</h3>
                </div>
                {/* Links List */}
                <div>
                  <ul className="space-y-2">
                    {item.descriptionList.map((list, listIndex) => (
                      <li key={listIndex} className="service-body text-muted hover:text-white transition-colors cursor-pointer">
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          
          {/* Button Container */}
          <div className={`col-start-3 flex items-center justify-start ${visibleItems === 5 ? "" : "mt-8"}`}>
            <Button
              onClick={handleToggle}
              text={visibleItems === 5 ? "Show All Links" : "Show Less"}
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              iconRotate={visibleItems === 5 ? -90 : 90}
              variant="glass"
              className="inline-flex text-foreground bg-transparent! border-none justify-around items-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SoftwareDevelopmentInsights;
