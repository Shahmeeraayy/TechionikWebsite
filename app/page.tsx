import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getSiteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/`;
  const description =
    "Techionik builds secure, scalable, and custom software solutions - AI-driven apps to enterprise platforms. Transform your business with modern tech.";

  return {
    title: "Techionik | Custom Software & AI Development Company",
    description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "custom software development",
      "AI development company",
      "enterprise platform solutions",
      "digital transformation",
      "custom AI applications",
      "Techionik",
      "secure software",
      "scalable tech solutions",
      "IT outsourcing",
    ],
    openGraph: {
      title: "Techionik | Custom Software & AI Development Company",
      description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${siteUrl}/images/og/home-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Custom Software and AI Development",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Techionik | Custom Software & AI Development Company",
      description,
      images: [`${siteUrl}/images/og/home-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

import HeroSection from "@/components/sections/home/hero/HeroSection";

import OutsourcingModels from "@/components/OutSourceModel";
import ContactHero from "@/components/ConnectHero";
import { heroHomeData } from "../data/HeroSectionData";
import { contactHeroContent } from "../data/ConnectHero";
import CompanyHighlights from "@/components/companyHighlights";
import Services from "@/components/sections/about/Services/Service";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { hometechStackData } from "@/data/TechStack/HomeTeckStack";
import { ideaBannerContent } from "@/data/IdeaBanner";
import { faqsData } from "@/data/FAQS";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { getNormalizedBlogs } from "./api/blog/AllBlogComponent";
import { getIndustriesComponent } from "./api/Industries/utils/industriesComponent";
import {
  getParentPage,
  transformParentServices,
} from "./api/parentService/utils/getParentService";
import { getNormalizedCaseStudies } from "./api/All-CaseStudies/utils/caseStudyComponent";

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

export default async function Home() {
  const blogsData = await getNormalizedBlogs(5);
  const industriesData = await getIndustriesComponent();
  const caseStudyData = await getNormalizedCaseStudies();

  const apiData = await getParentPage();
  const transformedData = transformParentServices(apiData, "home");

  // inside export default async function Home() { ...

  // Schema of the home page-------------------------------------------------------------------------
  // Schema of the home page-=========================================================================

  const unifiedHomeSchema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",

        "@id": "https://techionik.com/#organization",

        name: "Techionik",

        url: "https://techionik.com/",

        logo: {
          "@type": "ImageObject",

          url: "/logo.webp",
        },

        description:
          "Software development and AI automation company ensuring project success no matter what. 15+ happy clients. 20+ projects delivered.",

        foundingDate: "2022",

        sameAs: [
          "https://www.linkedin.com/company/techionik1/",

          "https://www.instagram.com/techionik/",

          "https://www.facebook.com/techionik/",
        ],

        employee: [
          {
            "@type": "Person",

            "@id": "https://techionik.com/#person-hassan",

            name: "Hassan Suhail",

            jobTitle: "CEO",

            url: "https://techionik.com/",

            sameAs: "https://www.linkedin.com/in/hassan-suhail93/",
          },

          {
            "@type": "Person",

            "@id": "https://techionik.com/#person-haseeb",

            name: "Haseeb Suhail",

            jobTitle: "CTO",

            url: "https://techionik.com/",

            sameAs: "https://www.linkedin.com/in/haseeb-suhail-109367199/",
          },

          {
            "@type": "Person",

            "@id": "https://techionik.com/#person-wade",

            name: "Ayyub Zaman",

            jobTitle: "COO",

            url: "https://techionik.com/",

            sameAs: "https://www.linkedin.com/in/ayub-zaman/",
          },
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://techionik.com/#website",

        url: "https://techionik.com/",

        name: "Techionik",

        publisher: {
          "@id": "https://techionik.com/#organization",
        },

        inLanguage: ["en", "de", "fi", "ar"],
      },

      {
        "@type": "WebPage",

        "@id": "https://techionik.com/#webpage",

        name: "Techionik - Innovative AI and Software Solutions",

        url: "https://techionik.com/",

        isPartOf: {
          "@id": "https://techionik.com/#website",
        },

        speakable: {
          "@type": "SpeakableSpecification",
          // Targeting the hidden div for 100% reliability
          cssSelector: [".home-voice-narrative"],
        },

        publisher: {
          "@id": "https://techionik.com/#organization",
        },

        breadcrumb: {
          "@id": "https://techionik.com/#breadcrumb",
        },
      },

      {
        "@type": "BreadcrumbList",

        "@id": "https://techionik.com/#breadcrumb",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item: "https://techionik.com/",
          },
        ],
      },

      {
        "@type": "FAQPage",

        "@id": "https://techionik.com/#faqpage",

        mainEntity: [
          {
            "@type": "Question",

            name: "What services does Techionik provide?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Techionik provides a comprehensive suite of digital transformation services, including mobile app development, AI automation, cloud-native architectures, and data science solutions.",
            },
          },

          {
            "@type": "Question",

            name: "How does Techionik ensure project success?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "We follow a full-cycle SDLC approach, utilizing modern development tools, API-first design, and rigorous quality assurance protocols to deliver high-performing digital products.",
            },
          },

          {
            "@type": "Question",

            name: "Which industries do you serve?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "We serve a diverse range of industries including Healthcare, Fintech, E-commerce, EdTech, and Fire Safety Training systems.",
            },
          },
        ],
      },
    ],
  };

  // Transform API data to match IndustriesSection structure
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedHomeSchema) }}
      />

      {/* HIDDEN VOICE SOURCE: Guarantees Siri/Alexa find the text */}
      <div className="home-voice-narrative" style={{ display: "none" }}>
        Techionik is a premier digital transformation agency specializing in
        custom software development, AI-driven applications, and scalable
        enterprise platforms designed to modernize business operations.
      </div>
      <section id="hero">
        <HeroSection slides={heroHomeData} />
      </section>

      <section id="why-choose-us" className="mx-auto  ">
        <CompanyHighlights />
      </section>

      {/* <section id="outsourcing-models">
        <OutsourcingModels data={outsourcingModelsData as any}/>
      </section> */}

      <section
        id="idea-banner"
        className="bg-primary max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 pt-0 lg:pt-20"
      >
        <IdeaBanner content={ideaBannerContent} />
      </section>
      <section
        id="core-Service-Home"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-15"
      >
        <Services data={transformedData} />
      </section>
      <section
        id="contact-hero"
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20  py-10"
      >
        <ContactHero content={contactHeroContent} />
      </section>

      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10 pb-20"
      >
        <TechServices servicesData={servicesDataHome} />
      </section>

      <section id="case-studies" className="pt-5">
        <CaseStudies caseStudies={caseStudyData} />
      </section>
      <section id="outsourcing-models" className="pt-20">
        <OutsourcingModels data={outsourcingModelsData} />
      </section>
      <section id="industries" className="pt-5">
        <IndustriesSection industries={industriesData} />
      </section>
      <section
        id="TechStack"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-15"
      >
        <TechStack data={hometechStackData} />
      </section>
      {/* 
      
      */}
      {/* <section
        id="TalentPool"
        className="max-w-8xl px-4 mx-auto md:px-12 lg:px-20 pt-10"
      >
        <TalentPool data={talentPoolDataHome} />
      </section> */}
      <section id="AllBlogs" className="pt-10">
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
        id="AiSection"
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

