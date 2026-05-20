import { CALENDLY_URL } from "@/utils/links";

export interface CTAData {
  title: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const CTAactionData: CTAData = {
  title: "Build Smarter, Scale Faster with Proven",
  highlightedText: "Tech Expertise",
  description:
    "Partner with a team that understands your vision and delivers customized software, cloud, and IT solutions.",
  ctaText: "Book Your Consultation Call",
  ctaLink: CALENDLY_URL,
};
