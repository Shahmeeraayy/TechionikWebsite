import Technology from "./technologyPage";
import { getAllTechnologies } from "@/app/api/technology/utils/getAllTechnologies"; // Adjust import path if needed
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = "/technology";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title: "Technology Stack & Expertise | Techionik",
    description:
      "Explore Techionik's advanced technology stack. From Next.js and AI to scalable cloud solutions, we leverage the latest tools to build high-performance, secure software.",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "Techionik technology stack",
      "Next.js development company",
      "AI tech stack",
      "custom software infrastructure",
      "scalable web technologies",
      "modern development tools",
      "cloud computing expertise",
      "frontend and backend technologies",
    ],
    openGraph: {
      title: "Technology Stack & Expertise | Techionik",
      description:
        "Explore Techionik's advanced technology stack. From Next.js and AI to scalable cloud solutions, we leverage the latest tools to build high-performance, secure software.",
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${baseUrl}/images/og/technology-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Technology Stack",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Technology Stack & Expertise | Techionik",
      description:
        "Explore Techionik's advanced technology stack. From Next.js and AI to scalable cloud solutions, we leverage the latest tools to build high-performance, secure software.",
      images: [`${baseUrl}/images/og/technology-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function TechnologyPage() {
  // 1. Fetch data on the server
  const technologiesData = await getAllTechnologies();

  // Speakable Schema
  // 1. Create a dynamic string of tech names for the narrator
  const techNames = (technologiesData || [])
    .slice(0, 15) // Limit to top 15 for brevity in voice search
    .map((t) => t.name)
    .join(", ");

  // 2. The Unified Schema
  const unifiedTechSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        name: "Techionik",
        url: "https://www.techionik.com",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.techionik.com/technology#webpage",
        name: "Technology Stack & Expertise | Techionik",
        description: `Techionik leverages a modern tech stack including ${techNames}. We build high-performance software using industry-leading tools.`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".tech-voice-narrative"],
        },
        mainEntity: (technologiesData || []).reduce((acc: any[], tech) => {
          tech.heads?.forEach((head) => {
            let existingHead = acc.find((item) => item.name === head.title);
            if (!existingHead) {
              existingHead = {
                "@type": "ItemList",
                name: head.title,
                itemListElement: [],
              };
              acc.push(existingHead);
            }
            existingHead.itemListElement.push({
              "@type": "ListItem",
              name: tech.name,
              url: `https://www.techionik.com/technology/${tech.slug}`,
            });
          });
          return acc;
        }, []),
      },
    ],
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedTechSchema) }}
      />

      {/* Hidden Narrator for Siri/Alexa */}
      <div className="tech-voice-narrative" style={{ display: "none" }}>
        {`Techionik's core technology stack includes ${techNames}. We specialize in building scalable applications using these modern frameworks and tools.`}
      </div>
      {/* 2. Pass data as a prop. Fallback to an empty array if null */}
      <Technology apiData={technologiesData || []} />
    </div>
  );
}
