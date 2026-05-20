import type { Metadata } from "next";
import { headers } from "next/headers";
import OutSourceModels from "@/components/OutSourceModel";
import TechServices from "@/views/home/TechServices";
import ServicesHero from "@/components/sections/home/hero/ServiceHero";
import TalentPool from "@/views/home/TalentPool";
import CTASection from "@/components/CTAComponent";
import { ServiceHeroData } from "@/data/ServiceHeroData";
import OurClientSays from "@/components/OurClientSays";
import Services from "@/components/sections/about/Services/Service";
import ServicesCTA from "@/components/servicesCTA";
import { ServicesCTAData } from "@/data/servicesCTAData";
import IndustriesSection from "@/views/home/IndustriesSection";
import TechStack from "@/views/home/TechStacks";
import WhomWeServe from "@/components/sections/about/Serve/page";
import { homeserviceData } from "@/data/services/HomeServicesData";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { industriesDataHome } from "@/data/Industries Data/IndustriesSectionHome";
import { abouttechStackData } from "@/data/TechStack/AboutTeckStack";
import { talentPoolDataHome } from "@/data/Talent Pool/TalentPollDataHome";
import { outsourcingModelsData } from "@/data/outSourceModel";
import {
  getParentPage,
  transformParentServices,
} from "../api/parentService/utils/getParentService";
import HeroSection from "@/components/sections/home/hero/HeroSection";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const pathname = "/services";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  const description =
    "Explore Techionik's services in custom software, AI development, and digital transformation. We build scalable, secure, and smart technology solutions.";

  return {
    title: "Services | Techionik - Custom Software & AI Development Solutions",
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "software services",
      "AI development company",
      "custom software solutions",
      "digital transformation services",
      "enterprise platform development",
      "smart tech solutions",
      "scalable software systems",
      "Techionik services",
    ],
    openGraph: {
      title:
        "Services | Techionik - Custom Software & AI Development Solutions",
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${protocol}://${host}/images/og/services-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Services — Custom Software & AI Development",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Services | Techionik - Software & AI Solutions",
      description: description,
      images: [`${protocol}://${host}/images/og/services-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const OurParentServices = async () => {
  const apiData = await getParentPage();
  const transformedData = transformParentServices(apiData, "parent");

  // 1. Generate Narrative for Voice Search
  const voiceNarrative = (transformedData.slider?.service1 || [])
    .map((s) => s.title)
    .join(", ");

  // 2. UNIFIED SCHEMA (Structural + Speakable Combined)
  const unifiedServicesSchema = {
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
        "@id": "https://www.techionik.com/services#webpage",
        url: "https://www.techionik.com/services",
        name: "Digital Transformation & AI Services | Techionik",
        about: { "@id": "https://www.techionik.com/#organization" },
        // VOICE NARRATION: This description is what Siri/Alexa read
        description: `Techionik is a premier digital engineering agency. Our core expertise includes ${voiceNarrative}. We specialize in building scalable, AI-driven applications.`,
        speakable: {
          "@type": "SpeakableSpecification",
          // Targeting the hidden div for 100% reliability
          cssSelector: [".services-voice-narrative"],
        },
        mainEntity: [
          // THE SERVICES CATALOG
          {
            "@type": "Service",
            name: "Techionik Core Services",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Main Service Portfolio",
              itemListElement: (transformedData.slider?.service1 || []).map(
                (service, i) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                  },
                }),
              ),
            },
          },
          // THE TECH STACK
          {
            "@type": "ItemList",
            name: "Our Technology Stack",
            itemListElement: (abouttechStackData?.techIcons || []).map(
              (tech, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: tech.name,
              }),
            ),
          },
          // OUTSOURCING MODELS
          {
            "@type": "Service",
            name: "Global Talent & Outsourcing Models",
            offers: (outsourcingModelsData?.items || []).map((model) => ({
              "@type": "Offer",
              name: model.title,
            })),
          },
        ],
      },
    ],
  };

  return (
    <main className="overflow-x-hidden scroll-smooth">
      {/* SCRIPT 1: SPEAKABLE ONLY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedServicesSchema),
        }}
      />

      {/* HIDDEN VOICE SOURCE: Guarantees Siri/Alexa find the text without XPath errors */}
      <div className="services-voice-narrative" style={{ display: "none" }}>
        {`Techionik is a premier digital engineering agency. Our core expertise includes ${voiceNarrative}. We specialize in building scalable, AI-driven applications and enterprise-grade platforms.`}
      </div>

      <section id="hero">
        {/* <ServicesHero slides={ServiceHeroData} />
         */}
        <ServicesHero slides={ServiceHeroData} />
      </section>

      {/* Added voice-summary class here as a backup for the cssSelector */}
      <section className="voice-summary max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <Services data={transformedData} />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-20">
        <ServicesCTA opacity={true} data={ServicesCTAData} />
      </section>

      <section id="outsourcingmodel" className="py-5">
        <OutSourceModels data={outsourcingModelsData as any} />
      </section>

      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-10"
      >
        <TechServices servicesData={servicesDataHome} />
      </section>

      <section
        id="CTASection"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <CTASection />
      </section>

      <section
        id="TechStack"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-10"
      >
        <TechStack data={abouttechStackData} />
      </section>

      <section className="py-5">
        <WhomWeServe />
      </section>

      {/* <section
        id="talent-pool"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20"
      >
        <TalentPool data={talentPoolDataHome} />
      </section> */}

      <section
        id="ourclient-says"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <OurClientSays />
      </section>
    </main>
  );
};

export default OurParentServices;
