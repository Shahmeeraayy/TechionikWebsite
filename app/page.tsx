import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import OutsourcingModels from "@/components/OutSourceModel";
import CompanyHighlights from "@/components/companyHighlights";
import Services from "@/components/sections/about/Services/Service";
import { getSiteUrl } from "@/lib/site";
import { heroHomeData } from "@/data/HeroSectionData";
import { homeserviceData } from "@/data/services/HomeServicesData";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { hometechStackData } from "@/data/TechStack/HomeTeckStack";
import { ideaBannerContent } from "@/data/IdeaBanner";
import { faqsData } from "@/data/FAQS";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { getNormalizedBlogs } from "./api/blog/AllBlogComponent";
import { getNormalizedCaseStudies } from "./api/All-CaseStudies/utils/caseStudyComponent";
import { industriesDataHome } from "../data/Industries Data/IndustriesSectionHome";

const CaseStudies = dynamic(() => import("@/views/home/CaseStudies"), {
  loading: () => null,
});

const FAQComponent = dynamic(() => import("@/views/home/FAQs"), {
  loading: () => null,
});

const TechServices = dynamic(() => import("@/views/home/TechServices"), {
  loading: () => null,
});

const TechStack = dynamic(() => import("@/views/home/TechStacks"), {
  loading: () => null,
});

const AllBlogs = dynamic(() => import("@/views/home/AllBlogs"), {
  loading: () => null,
});

const IdeaBanner = dynamic(() => import("@/views/home/IdeaBanner"), {
  loading: () => null,
});

const IndustriesSection = dynamic(
  () => import("@/views/home/IndustriesSection"),
  { loading: () => null },
);

const OurClientSays = dynamic(() => import("@/components/OurClientSays"), {
  loading: () => null,
});

const AiSection = dynamic(() => import("@/views/home/AiAndMl"), {
  loading: () => null,
});

const FooterContact = dynamic(
  () => import("@/components/sections/home/footer-content/FooterContent"),
  { loading: () => null },
);

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/`;
  const description =
    "Accelerate your roadmap with AI-native engineering talent, intelligent software engineering, and AI automation across 30+ industries.";

  return {
    title: "Techionik | AI-Native Engineering Talent & Software Automation",
    description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "AI-native engineering talent",
      "software development services",
      "AI automation",
      "staff augmentation",
      "dedicated engineering team",
      "project outsourcing",
      "managed IT services",
      "Techionik",
      "digital transformation",
      "enterprise software",
    ],
    openGraph: {
      title: "Techionik | AI-Native Engineering Talent & Software Automation",
      description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${siteUrl}/images/og/home-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik AI-native engineering and automation",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Techionik | AI-Native Engineering Talent & Software Automation",
      description,
      images: [`${siteUrl}/images/og/home-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Home() {
  const siteUrl = getSiteUrl();
  const [blogsData, caseStudyData] = await Promise.all([
    getNormalizedBlogs(5),
    getNormalizedCaseStudies(),
  ]);
  const homeCaseStudies = caseStudyData.slice(0, 6);

  const faqSchema = faqsData.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const unifiedHomeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Techionik",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.webp`,
        },
        description:
          "Techionik helps companies accelerate their roadmap with AI-native engineering talent, intelligent software engineering, and AI automation across 30+ industries.",
        foundingDate: "2022",
        sameAs: [
          "https://www.linkedin.com/company/techionik1/",
          "https://www.instagram.com/techionik/",
          "https://www.facebook.com/techionik/",
        ],
        employee: [
          {
            "@type": "Person",
            "@id": `${siteUrl}/#person-hassan`,
            name: "Hassan Suhail",
            jobTitle: "CEO",
            url: siteUrl,
            sameAs: "https://www.linkedin.com/in/hassan-suhail93/",
          },
          {
            "@type": "Person",
            "@id": `${siteUrl}/#person-haseeb`,
            name: "Haseeb Suhail",
            jobTitle: "CTO",
            url: siteUrl,
            sameAs: "https://www.linkedin.com/in/haseeb-suhail-109367199/",
          },
          {
            "@type": "Person",
            "@id": `${siteUrl}/#person-wade`,
            name: "Ayyub Zaman",
            jobTitle: "COO",
            url: siteUrl,
            sameAs: "https://www.linkedin.com/in/ayub-zaman/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Techionik",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: ["en", "de", "fi", "ar"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        name: "Accelerate Your Roadmap With AI-Native Engineering Talent",
        url: siteUrl,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".home-voice-narrative"],
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${siteUrl}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faqpage`,
        mainEntity: faqSchema,
      },
    ],
  };

  return (
    <main className="overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedHomeSchema) }}
      />

      <div className="home-voice-narrative" style={{ display: "none" }}>
        Techionik helps companies accelerate their roadmap with AI-native
        engineering talent, intelligent software engineering, and AI
        automation across more than 30 industries.
      </div>

      <section id="hero">
        <HeroSection slides={heroHomeData} />
      </section>

      <section id="why-choose-us" className="mx-auto">
        <CompanyHighlights />
      </section>

      <section id="engagement-models" className="pt-20">
        <OutsourcingModels data={outsourcingModelsData} />
      </section>

      <section
        id="core-service-home"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-15"
      >
        <Services data={homeserviceData} />
      </section>

      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10 pb-20"
      >
        <TechServices servicesData={servicesDataHome} />
      </section>

      <section id="industries" className="pt-5">
        <IndustriesSection industries={industriesDataHome} />
      </section>

      <section
        id="idea-banner"
        className="bg-primary max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 pt-0 lg:pt-20"
      >
        <IdeaBanner content={ideaBannerContent} />
      </section>

      <section id="case-studies" className="pt-5">
        <CaseStudies caseStudies={homeCaseStudies} />
      </section>

      <section
        id="tech-stack"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-15"
      >
        <TechStack data={hometechStackData} />
      </section>

      <section id="all-blogs" className="pt-10">
        <AllBlogs blogsData={blogsData} />
      </section>

      <section
        id="our-clients"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 flex justify-center pt-15"
      >
        <OurClientSays />
      </section>

      <section
        id="faqs"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 flex justify-center pb-15"
      >
        <FAQComponent data={faqsData} />
      </section>

      <section
        id="ai-section"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 flex justify-center"
      >
        <AiSection />
      </section>

      <section
        id="footer"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 flex justify-center py-10"
      >
        <FooterContact />
      </section>
    </main>
  );
}
