import type { Metadata } from "next";
import { partners } from "@/data/partners";
import TeamCard from "@/components/TeamCards";
import { teamSections } from "@/data/TeamData";
import TechStack from "@/views/home/TechStacks";

import TechServices from "@/views/home/TechServices";
import { AboutUsData } from "@/data/AboutSectionData";

import PartnerLogos from "@/components/layout/PartnerLogo";
import OutsourcingModels from "@/components/OutSourceModel";
import Culture from "@/components/sections/about/Culture/page";
import IndustriesSection from "@/views/home/IndustriesSection";
import WhomWeServe from "@/components/sections/about/Serve/page";
import Journey from "@/components/sections/about/Journey/Jounery";
import AboutSection from "@/components/sections/home/hero/AboutSection";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import { softwaresolutionData } from "@/data/SoftwareSolution";
import Services from "@/components/sections/about/Services/Service";
import { teamHeading } from "@/data/TeamData";
import TailoredSolutions from "@/components/TailoredSolutions";
import { tailoredSolutions } from "@/data/solutionsData";
import Certifications from "@/components/sections/how-we-work-component/certificates";
import OurClientSays from "@/components/OurClientSays";
import { servicesDataAbout } from "@/data/TechServices/AboutTechServices";
import { industriesDataAbout } from "@/data/Industries Data/IndustriesSectionAbout";
import { abouttechStackData } from "@/data/TechStack/AboutTeckStack";
import { outsourcingModelsData } from "@/data/outSourceModel";
import {
  getParentPage,
  transformParentServices,
} from "../api/parentService/utils/getParentService";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = "/about-us";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title: "About Us | Techionik - Custom Software & AI Development",
    description:
      "Discover Techionik's journey, mission, and the passionate team driving innovation. We are your trusted partner in custom software and digital growth.",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "about Techionik",
      "software development team",
      "AI experts",
      "Techionik mission",
      "IT company culture",
      "technology consultants",
      "custom software agency",
      "AI innovation",
      "digital transformation partners",
    ],
    openGraph: {
      title: "About Techionik | Custom Software & AI Development",
      description:
        "Discover Techionik's journey, mission, and the passionate team driving innovation. We are your trusted partner in custom software and digital growth.",
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${baseUrl}/images/og/about-og.jpg`,
          width: 1200,
          height: 630,
          alt: "About Techionik — Custom Software & AI Development",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Techionik | Software & AI Innovation",
      description:
        "Discover Techionik's journey, mission, and the passionate team driving innovation. We are your trusted partner in custom software and digital growth.",
      images: [`${baseUrl}/images/og/about-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function AboutPage() {
  const industriesData = industriesDataAbout;
  const apiData = await getParentPage();
  const transformedData = transformParentServices(apiData, "about");

  //   // --- Structural About Page Schema with all components ---
  //   const aboutBrandSchema = {
  //     "@context": "https://schema.org",
  //     "@graph": [
  //       {
  //         "@type": "Organization",
  //         "@id": "https://www.techionik.com/#organization",
  //         name: "Techionik",
  //         url: "https://www.techionik.com",
  //         logo: "https://www.techionik.com/logo.png",
  //         sameAs: [
  //           "https://www.linkedin.com/company/techionik",
  //           "https://github.com/techionik",
  //         ],
  //       },
  //       {
  //         "@type": "WebPage",
  //         "@id": "https://www.techionik.com/about-us#webpage",
  //         url: "https://www.techionik.com/about-us",
  //         name: "About Techionik | Custom Software & AI Development",
  //         about: { "@id": "https://www.techionik.com/#organization" },
  //         speakable: {
  //           "@type": "SpeakableSpecification",
  //           // Use only the class that exists in your AboutSection component
  //           cssSelector: [".voice-summary"],
  //         },
  //         mainEntity: [
  //           // 1. Core Services (Dynamic)
  //           {
  //             "@type": "ItemList",
  //             name: "Our Services",
  //             itemListElement: (transformedData.slider?.service1 || []).map(
  //               (service, i) => ({
  //                 "@type": "ListItem",
  //                 position: i + 1,
  //                 name: service.title,
  //               }),
  //             ),
  //           },
  //           // 2. Industries Served (Dynamic)
  //           {
  //             "@type": "ItemList",
  //             name: "Industries We Serve",
  //             itemListElement: (industriesData.slides || []).map(
  //               (industry, i) => ({
  //                 "@type": "ListItem",
  //                 position: i + 1,
  //                 name: industry.title,
  //               }),
  //             ),
  //           },
  //           // 3. Team Highlights (Using your actual teamSections data)
  //           {
  //             "@type": "ItemList",
  //             name: "Techionik Leadership",
  //             itemListElement: teamSections.map((section, i) => ({
  //               "@type": "ListItem",
  //               position: i + 1,
  //               item: {
  //                 "@type": "Person",
  //                 name: section.member.name,
  //                 jobTitle: section.member.position, // Use .position to match your interface
  //                 image: `https://www.techionik.com${section.member.image}`,
  //               },
  //             })),
  //           },
  //         ],
  //       },
  //     ],
  //   };

  //   // --- Voice Search Schema (Speakable) ---
  //   const AboutSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "AboutPage", // Specifically using AboutPage for better SEO
  //   "name": "About Techionik | Custom Software & AI Development",
  //   // This is what the XPath will read
  //   "description": "Techionik is a premier digital transformation agency specializing in custom software development, AI-driven applications, and scalable enterprise platforms designed to modernize business operations. Learn about our team, mission, and journey.",
  //   "speakable": {
  //     "@type": "SpeakableSpecification",
  //     "xpath": [
  //       "//script[@id='about-voice-schema']/@description"
  //     ]
  //   },
  // };
  const servicesNarrative = (transformedData.slider?.service1 || [])
    .map((s) => s.title)
    .join(", ");

  // 2. Combined Structural + Speakable Schema
  const combinedAboutSchema = {
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
        "@type": "AboutPage",
        "@id": "https://www.techionik.com/about-us#webpage",
        url: "https://www.techionik.com/about-us",
        name: "About Techionik | Custom Software & AI Development",
        about: { "@id": "https://www.techionik.com/#organization" },
        // VOICE NARRATION: This is the XPath target
        description: `Techionik is a premier digital transformation agency. We specialize in ${servicesNarrative}. Learn about our team, mission, and journey.`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".about-voice-narrative"],
        },
        mainEntity: [
          {
            "@type": "ItemList",
            name: "Our Core Services",
            itemListElement: (transformedData.slider?.service1 || []).map(
              (service, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: service.title,
              }),
            ),
          },
          {
            "@type": "ItemList",
            name: "Techionik Leadership",
            itemListElement: teamSections.map((section, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: section.member.name,
                jobTitle: section.member.position,
              },
            })),
          },
        ],
      },
    ],
  };
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <script
        id="about-voice-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedAboutSchema),
        }}
      />
      {/* HIDDEN VOICE SOURCE: This is what Siri will find and read */}
      <div className="about-voice-narrative" style={{ display: "none" }}>
        {`Techionik is a premier digital transformation agency. We specialize in ${servicesNarrative}. Learn about our team, mission, and journey.`}
      </div>
      <section id="about">
        <AboutSection slides={AboutUsData} />
      </section>

      <section id="logos" className="max-w-8xl mx-auto">
        <PartnerLogos partners={partners} className="" />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section className=" py-10 px-4 md:px-20 flex flex-col gap-20">
        <TeamCard
          heading={teamHeading}
          sections={teamSections}
          className="mx-auto"
        />
      </section>

      <section className="pb-10">
        <WhomWeServe />
      </section>

      <section className="">
        <Culture />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <Services data={transformedData} />
      </section>

      <section
        id="software-solutions"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-10"
      >
        <SoftwareSolution data={softwaresolutionData} />
      </section>

      <section id="outsourcing-models">
        <OutsourcingModels data={outsourcingModelsData} />
      </section>

      <section
        id="alblog"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-5"
      >
        <TailoredSolutions data={tailoredSolutions} />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-15">
        <Certifications />
      </section>

      <section
        id="tech-stack"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-20"
      >
        <TechStack data={abouttechStackData} />
      </section>

      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-15 pt-5"
      >
        <TechServices servicesData={servicesDataAbout} />
      </section>

      <section id="industrial">
        <IndustriesSection industries={industriesData} />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-0 lg:pt-15">
        <OurClientSays />
      </section>
    </main>
  );
}
