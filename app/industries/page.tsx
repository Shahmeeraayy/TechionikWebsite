import type { Metadata } from "next";
import PartnerLogos from "@/components/layout/PartnerLogo";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import IndustryCards from "@/components/IndustryCards";
import { HeroIndustryData } from "../../data/HeroIndustryData";
import { getAllIndustries } from "../api/Industries/utils/getIndustries";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = "/industries";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title: "Industries We Serve | Techionik - Custom Software & AI",
    description:
      "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "industries served",
      "healthcare software",
      "fintech solutions",
      "retail tech",
      "logistics software",
      "education technology",
      "custom industry solutions",
      "AI in business",
    ],
    openGraph: {
      title: "Industries We Serve | Techionik - Custom Software & AI",
      description:
        "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${baseUrl}/images/og/industries-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Industries We Serve — Techionik",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Industries We Serve | Sector-Specific Innovation",
      description:
        "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
      images: [`${baseUrl}/images/og/industries-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function IndustryPage() {
  const data = await getAllIndustries();
  // Json ld schema for web mcp and speakable
  // const unifiedIndustryPageSchema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "Organization",
  //       "@id": "https://www.techionik.com/#organization",
  //       name: "Techionik",
  //       url: "https://www.techionik.com",
  //       logo: "https://www.techionik.com/logo.png",
  //     },
  //     {
  //       "@type": "CollectionPage",
  //       "@id": "https://www.techionik.com/industrypage#webpage",
  //       url: "https://www.techionik.com/industrypage",
  //       name: "Industries We Serve | Techionik",
  //       about: { "@id": "https://www.techionik.com/#organization" },
  //       description:
  //         "Explore the diverse industries Techionik serves with tailored AI and custom software solutions.",
  //       speakable: {
  //         "@type": "SpeakableSpecification",
  //         cssSelector: [".industry-voice-narrative"],
  //       },
  //       mainEntity: {
  //         "@type": "ItemList",
  //         name: "Techionik Industry Expertise",
  //         numberOfItems: (data || []).length,
  //         itemListElement: (data || []).map((item, index) => ({
  //           "@type": "ListItem",
  //           position: index + 1,
  //           name: item.title,
  //           description: item.description,
  //           url: `https://www.techionik.com${item.link}`,
  //         })),
  //       },
  //     },
  //   ],
  // };
  const industryListText = (data || [])
    .slice(0, 6) // List top 6 for a concise voice response
    .map((i) => i.title)
    .join(", ");
  return (
    <main className="overflow-x-hidden scroll-smooth">
      {/* Injecting both schemas in an array */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedIndustryPageSchema),
        }}
      /> */}

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div className="industry-voice-narrative" style={{ display: "none" }}>
        {`Techionik provides sector-specific software and AI innovation. 
          We serve diverse industries including ${industryListText}, and more. 
          Each solution is custom-built to meet unique sector challenges.`}
      </div>

      <section id="HeroSection">
        <HeroSection slides={HeroIndustryData} />
      </section>

      <section id="industrycards">
        <IndustryCards />
      </section>
    </main>
  );
}
