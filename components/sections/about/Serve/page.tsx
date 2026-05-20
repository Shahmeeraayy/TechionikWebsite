// 

import { serveData } from "../../../../data/ServeCard";
import ServeLargeCard from "../Serve/ServeCardLarge";
import ServeSmallCard from "../Serve/ServeCardSmall";

const WhomWeServe = () => {
  return (
    <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10 space-y-[62px]">

      {/* Heading */}
      <div className="space-y-[28px]">
        <h2 className="text-gradient">
          {serveData.title}{" "}
          <span className="text-dark-gradient">{serveData.subtitle}</span>
        </h2>
        <p className="body-2 text-muted">{serveData.description}</p>
      </div>

      {/* Card1 */}
      {serveData.serve1.map((item, i) => (
        <ServeLargeCard key={i} item={item} />
      ))}

      {/* Card2 + Card3 */}
      <div className="flex gap-6 lg:flex-row flex-col">
        {serveData.serve2.map((item, i) => (
          <ServeSmallCard key={`s2-${i}`} item={item} />
        ))}

        {serveData.serve3.map((item, i) => (
          <ServeSmallCard key={`s3-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhomWeServe;
