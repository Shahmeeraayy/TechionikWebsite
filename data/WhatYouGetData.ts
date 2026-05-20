export interface Reviews {
  image1: string;
  width: number;
  height: number;
}

export interface WhatYouGett {
  id: number;
  title1: string;
  spanTitle: string;
  title2: string;
  reviews: Reviews[];
  RightDescription1: string;
  RightDescription2: string;
  buttonLabel?: string;
  buttonLink?: string;
}

export const WhatYouGetData: WhatYouGett =
{
  id: 1,
  title1: "What you get with TECHIONIK",
  spanTitle: "HealthCare",
  title2: "Software development",
  reviews: [
    {
      image1: "/images/technology/clutch-reviews.png",
      width: 114,
      height: 54,
    },
    {
      image1: "/images/technology/google-reviews.png",
      width: 144,
      height: 42,
    },
    {
      image1: "/images/technology/good-firms.png",
      width: 125,
      height: 42,
    },
  ],
  RightDescription1:
    "Our custom healthcare software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
  RightDescription2:
    "Our advanced healthcare software solutions automate essential tasks like data collection, data processing, and complex analyses, improving the efficiency of medical staff. Additionally, with decades of data science expertise, we help our clients implement machine learning and advanced data analytics to unlock valuable insights",
}
