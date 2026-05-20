import { CALENDLY_URL } from "@/utils/links";

export interface images {
  image1: string;
  width: number;
  height: number;
}
export interface ServiceWeProvide {
  mainHeading: string;
  middleHeading: string;
  endHeading: string;
  description: string;
  btnText: string;
  btnLink?: string;
  images: images[];
}

export const ServiceWeProvideData: ServiceWeProvide = {
  mainHeading: "Next.Js",
  middleHeading: "Services",
  endHeading: "We Provide",
  description:
    "At TECHIONIK, we provide a full spectrum of Next.js development services, crafting high-performance, scalable, and dynamic web applications that propel your business forward. Our solutions blend cutting-edge technology with proven strategies to deliver exceptional outcomes—here’s how we do it:",
  btnText: "Book Your Consultation Call",
  btnLink: CALENDLY_URL,
  
  
  images: [
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
};

export interface Services {
  index: number;
  title: string;
  description: string;
  btnText: string;
  href: string;
  btnRightImage?: string | null;

}

export const ServicesData: Services[] = [
  {
    index: 1,
    title: "Custom Software Developement",
    description: `Our specialized custom software development solutions encompass enterprise applications, API 
development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
    btnText: "Learn More",
    href: "#",
    // btnRightImage: "/images/technology/code.png",
  },
  {
    index: 2,
    title: "Custom Software Developement",
    description: `Our specialized custom software development solutions encompass enterprise applications, API 
development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
    btnText: "Learn More",
    href: "#",
    // btnRightImage: "/images/technology/code.png",
  },
  {
    index: 3,
    title: "Custom Software Developement",
    description: `Our specialized custom software development solutions encompass enterprise applications, API 
development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
    btnText: "Learn More",
    href: "#",
    // btnRightImage: "/images/technology/code.png",
  },
  {
    index: 4,
    title: "Custom Software Developement",
    description: `Our specialized custom software development solutions encompass enterprise applications, API 
development, and ongoing software support. With a focus on quality, our team is dedicated to customizing software to fit your unique business needs.`,
    btnText: "Learn More",
    href: "#",
    // btnRightImage: "/images/technology/code.png",
  },
];
