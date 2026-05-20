// utils/CircleStats.tsx
"use client";

type CircleStatProps = {
  value: string;
  text: string;
  rotate?: boolean;
};

const CircleStat = ({ value, text, rotate = true }: CircleStatProps) => {
  // Make a valid ID for the path
  const pathId = text.replace(/\s+/g, "-");

  return (
    <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center">
      {/* CENTER NUMBER */}
      <div className="absolute text-center z-10">
        <h3 className="gradient-text font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">{value}</h3>
        <p className="text-white text-xs sm:text-sm md:text-base font-normal mt-1">{text}</p>
      </div>

      {/* CIRCULAR TEXT */}
      <svg viewBox="0 0 120 120" className={`w-full h-full ${rotate ? "animate-spin-slow" : ""}`}>
        <defs>
          <path
            id={pathId}
            d="
              M60,60 
              m0,-50 
              a50,50 0 1,1 0,100 
              a50,50 0 1,1 0,-100
            "
          />
        </defs>

        <text
          fill="#999999"
          fontSize="12"
          letterSpacing="1"
          textAnchor="middle"
        >
          <textPath href={`#${pathId}`} startOffset="50%">
            {`${text} \u00A0`.repeat(8)} {/* repeat more times for full circle */}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircleStat;
