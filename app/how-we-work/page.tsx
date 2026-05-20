import type { Metadata } from "next";
import { headers } from "next/headers";
import HowWeWork from "./weWorkPage";
import { TechionikPrinciplesData } from "@/data/techionikPrinciplesdata";
import { CountryCardData } from "@/data/countryCardData";
import { HowWeCooperateData } from "@/data/how-we-cooperate-data";
import { WhatWeDoData } from "@/data/what-we-do-data";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const pathname = "/how-we-work";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  const description =
    "Learn about Techionik's agile development process. From initial idea to final launch, we ensure transparency, quality, and speed in all tech projects.";

  return {
    title: "How We Work | Techionik - Our Agile Development Process",
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "agile software development",
      "tech development process",
      "software lifecycle",
      "scrum methodology",
      "transparent development",
      "quality assurance",
      "Techionik workflow",
    ],
    openGraph: {
      title: "How We Work | Techionik - Our Agile Development Process",
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${protocol}://${host}/images/og/how-we-work-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Workflow and Process",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "How Techionik Works | Secure & Agile Development",
      description: description,
      images: [`${protocol}://${host}/images/og/how-we-work-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// structural schema implementing web mcp and speakable
const unifiedHowWeWorkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.techionik.com/#organization",
      name: "Techionik",
      url: "https://www.techionik.com",
      logo: "https://www.techionik.com/logo.png",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.techionik.com/how-we-work#webpage",
      url: "https://www.techionik.com/how-we-work",
      name: "How We Work | Our Agile Development Process",
      about: { "@id": "https://www.techionik.com/#organization" },
      description:
        "Learn about Techionik's agile development process and core principles like Transparency, Innovation, and Speed.",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".work-voice-narrative"],
      },
      mainEntity: [
        // 1. TECHIONIK PRINCIPLES
        {
          "@type": "ItemList",
          "@id": "https://www.techionik.com/how-we-work#principles",
          name: "Techionik Core Principles",
          itemListElement: TechionikPrinciplesData.map((p, i) => ({
            "@type": "ListItem",
            // "position": i + 1,
            name: p.title,
            description: p.description,
          })),
        },
        // 2. GLOBAL LOCATIONS
        {
          "@type": "ItemList",
          "@id": "https://www.techionik.com/how-we-work#locations",
          name: "Our Global Presence",
          itemListElement: CountryCardData.map((c, i) => ({
            "@type": "ListItem",
            // "position": i + 1,
            item: {
              "@type": "Place",
              name: c.countryName,
              address: c.address,
              telephone: c.phone,
            },
          })),
        },
        // 3. COOPERATION MODELS
        {
          "@type": "ItemList",
          "@id": "https://www.techionik.com/how-we-work#cooperation",
          name: "How We Cooperate",
          itemListElement: HowWeCooperateData.map((m, i) => ({
            "@type": "ListItem",
            // "position": i + 1,
            name: m.Heading,
            description: m.Description,
          })),
        },
        // 4. WHAT WE DO (Process Steps)
        {
          "@type": "ItemList",
          "@id": "https://www.techionik.com/how-we-work#process",
          name: "Our Delivery Process",
          itemListElement: WhatWeDoData.card?.map((step, i) => ({
            "@type": "ListItem",
            // "position": i + 1,
            name: step.title,
            description: step.description.replace(/<[^>]*>?/gm, ""),
          })),
        },
      ],
    },
  ],
};
const HowWeWorkPage = () => {
  const principles = TechionikPrinciplesData.map((p) => p.title).join(", ");
  const locations = CountryCardData.map((c) => c.countryName).join(", ");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedHowWeWorkSchema),
        }}
      />

      {/* Hidden Narrator for AI Voice Assistants */}
      <div className="work-voice-narrative" style={{ display: "none" }}>
        {`Techionik operates on core principles of ${principles}. 
          We have a global presence in ${locations}. 
          Our delivery process follows a structured framework including ${WhatWeDoData.card?.map((c) => c.title).join(", ")}.`}
      </div>
      <HowWeWork />
    </div>
  );
};

export default HowWeWorkPage;
