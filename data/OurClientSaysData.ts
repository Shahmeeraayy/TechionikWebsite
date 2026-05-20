export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface ClientGlobeIcon {
  id: number;
  image: string;
  top: string;
  left: string;
  borderColor: string;
}

export interface OurClientSaysData {
  title: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  testimonials: Testimonial[];
  globeIcons: ClientGlobeIcon[];
}

export const ourClientSaysData: OurClientSaysData = {
  title: "What Our ",
  highlightedText: "Clients Says",
  description:
    "Our success is defined by the results and satisfaction of those we serve.",
  ctaText: "View All Clients",
  ctaLink: "/our-clients",
  testimonials: [
    {
      id: 1,
      name: "Bernardine Denigan",
      position: "Product manager",
      company: "Cisco",
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_15.png",
      content:
        "Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. Their attention to detail is commendable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ali Haider",
      position: "Lead Developer",
      company: "Techionik",
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_14.png",
      content:
        "The team provided a highly scalable solution that exceeded our expectations. Their technical expertise in Next.js and Cloud infrastructure is top-tier.",
      rating: 5,
    },
  ],
  globeIcons: [
    {
      id: 1,
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_15.png",
      top: "30%",
      left: "15%",
      borderColor: "#FF6B35",
    },
    {
      id: 2,
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_14.png",
      top: "50%",
      left: "25%",
      borderColor: "#0070f3",
    },
    {
      id: 3,
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_11.png",
      top: "20%",
      left: "55%",
      borderColor: "#FF6B35",
    },
    {
      id: 4,
      image: "/images/ParentServices/OurCustomerSaysMedia/Ellipse_7.png",
      top: "35%",
      left: "85%",
      borderColor: "#0070f3",
    },
  ],
};
