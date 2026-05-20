import CultureValueBlock from "../Culture/CultureValueBlock";
import { cultureData } from "@/data/CultureData";
import CultureImageText from "./CultureImageText";

const Culture = () => {
  return (
    <div className="main max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-10 lg:pt-15 space-y-0">
      <h2 className="text-gradient">{cultureData.title}</h2>

      {/* CHANGED: Switched to a robust Flexbox layout to guarantee side-by-side alignment on desktop */}
      <div className="content flex flex-col lg:flex-row items-start lg:gap-16 gap-10 pt-4">
        {/* Left Column */}
        <div className="w-full lg:w-[40%] shrink-0">
          <CultureImageText
            description={cultureData.description}
            imageUrl={cultureData.imageUrl}
            altText={cultureData.altText}
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[60%] flex flex-col mt-0 lg:mt-23 space-y-12">
          <CultureValueBlock items={cultureData.culturePoints} />

          <hr className="w-full border border-[#2A2A34]" />

          <CultureValueBlock items={cultureData.valuePoints} />
        </div>
      </div>
    </div>
  );
};

export default Culture;
