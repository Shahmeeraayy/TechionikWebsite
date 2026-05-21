import { WhatYouGetHiring } from "@/data/whatYouGetHiring"
import Image from "next/image";

interface WhatYouGetHiringProps {
  data: WhatYouGetHiring
}

const WhatYouGetHiringComponent = ({ data }: WhatYouGetHiringProps) => (
  // Added gap-10 for spacing and simplified the flex directions
  <section className="flex flex-col lg:flex-row gap-10 items-center justify-between">
    
    {/* Added w-full lg:w-1/2 to balance the text side */}
    <div className="space-y-4 w-full lg:w-1/2">
      <h2 className="service-section-heading-lg max-w-3xl text-(--color-muted)">
        {data.firstTitle} <span className="text-dark-gradient">{data.spanTitle}</span>
      </h2>
      <p className="service-section-description text-(--color-muted) max-w-xl">
        {data.description1}
      </p>
      <br />
      <p className="service-section-description text-(--color-muted) max-w-xl">
        {data.description2}
      </p>
    </div>

    {/* Changed to w-full on mobile, and lg:w-1/2 on large screens */}
    <div className="w-full lg:w-1/2 rounded-2xl">
      {/* Added w-full and h-auto to ensure the image scales seamlessly */}
      <Image 
        className="rounded-2xl w-full h-auto object-cover" 
        src={data.image} 
        width={760} 
        height={500} 
        alt=""
      />
    </div>
  </section>
)

export default WhatYouGetHiringComponent;
