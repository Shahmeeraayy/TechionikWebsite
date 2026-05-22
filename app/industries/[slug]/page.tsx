import type { Metadata } from "next";
import ConnectHero from "@/components/ConnectHero";
import Services from "@/components/sections/about/Services/Service";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import TechnologyExpertiseComponent from "@/components/TechnologyExpertise";
import WhatYouGet from "@/components/WhatYouGet";
import { caseStudies } from "@/data/CaseStudy";
import { IndustryData } from "@/data/detailIndustryData";
import AiSection from "@/views/home/AiAndMl";
import AllBlogs from "@/views/home/AllBlogs";
import CaseStudies from "@/views/home/CaseStudies";
import { notFound } from "next/navigation";
import { getSingleIndustry } from "@/app/api/Industries/utils/getSingleIndustry";
import {
  getParentPage,
  transformParentServices,
} from "@/app/api/parentService/utils/getParentService";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const apiData = await getSingleIndustry(slug);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = `/industries/${slug}`;
  const canonicalUrl = `${baseUrl}${pathname}`;

  if (!apiData) return {};

  const title = apiData.metaTitle || apiData.title || "Techionik | Industry";
  const description =
    apiData.metaDescription ||
    apiData.shortDescription ||
    "Techionik builds secure, scalable, and custom software solutions.";
  const keywords = apiData.metaKeyWords
    ? apiData.metaKeyWords.split(",").map((k) => k.trim())
    : ["Techionik", "industry software solutions"];

    return {
      title: title,
      description: description,
      robots: {
        index: true,
        follow: true,
      },
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: apiData.imageUrl.startsWith("http")
            ? apiData.imageUrl
            : `${baseUrl}${apiData.imageUrl}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [
        apiData.imageUrl.startsWith("http")
          ? apiData.imageUrl
          : `${baseUrl}${apiData.imageUrl}`,
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const IndustryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const apiData = await getSingleIndustry(slug);
  const localData = IndustryData[slug];

  // If both are missing, show 404
  if (!apiData && !localData) {
    notFound();
  }

  const industryName = apiData?.name || "Industry";

  // Map API Case Studies to CaseStudyType
  const normalizedCaseStudies = apiData?.caseStudies?.length
    ? apiData.caseStudies.map((cs: any, i: number) => ({
        id: cs.id ?? i + 1,
        brand: "",
        title: cs.title ?? "Case Study",
        description: cs.shortDescription ?? "",
        solution: "",
        image: cs.ogImage ?? "/banners/caseStudy.webp",
        imageDesktop: cs.ogImage ?? "/banners/caseStudy.webp",
        imageMobile: cs.ogImage ?? "/banners/caseStudy.webp",
        category: cs.categories?.[0]?.name ?? "Success Story",
        href: `/case-studies/${cs.slug}`,
        stats: [],
      }))
    : caseStudies;

  // Map API Blogs to the shape expected by AllBlogs
  const normalizedBlogs = (apiData?.blogs ?? []).map((b: any) => ({
    id: b.id,
    title: b.title,
    description: b.shortDescription,
    image: b.ogImage ?? "/banners/dollers.webp",
    stack: b.tags?.map((t: any) => t.name) ?? [],
    slug: b.slug,
  }));
  const Data = await getParentPage();
  const transformedData = transformParentServices(Data, "industry");
  // 1. Structural Schema (WebMCP/Search)
  // const unifiedIndustrySchema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     // 1. ORGANIZATION
  //     {
  //       "@type": "Organization",
  //       "@id": "https://www.techionik.com/#organization",
  //       name: "Techionik",
  //       url: "https://www.techionik.com",
  //       logo: "https://www.techionik.com/logo.png",
  //     },
  //     // 2. WEBPAGE & SPEAKABLE
  //     {
  //       "@type": "WebPage",
  //       "@id": `https://www.techionik.com/industrypage/${slug}#webpage`,
  //       url: `https://www.techionik.com/industrypage/${slug}`,
  //       name: apiData?.title || `${industryName} Solutions`,
  //       about: { "@id": "https://www.techionik.com/#organization" },
  //       description: apiData?.metaDescription || apiData?.shortDescription,
  //       speakable: {
  //         "@type": "SpeakableSpecification",
  //         cssSelector: [".industry-detail-voice-narrative"],
  //       },
  //       mainEntity: {
  //         "@id": `https://www.techionik.com/industrypage/${slug}#service`,
  //       },
  //     },

  //     // 4. CORE SERVICES (Fixed @type and added @id)
  //     {
  //       "@type": "Service", // Changed from "ServiceWeProvide" to valid "Service"
  //       "@id": `https://www.techionik.com/industrypage/${slug}#core-services`,
  //       name: "Techionik Core Services",
  //       hasOfferCatalog: {
  //         "@type": "OfferCatalog",
  //         name: "Main Service Portfolio",
  //         itemListElement: (transformedData.slider?.service1 || []).map(
  //           (service: any, i: number) => ({
  //             "@type": "Offer",
  //             itemOffered: {
  //               "@type": "Service",
  //               name: service.title,
  //               description: service.description,
  //             },
  //           }),
  //         ),
  //       },
  //     },
  //     // 5. SOFTWARE SOLUTIONS
  //     {
  //       "@type": "ItemList",
  //       "@id": `https://www.techionik.com/industrypage/${slug}#software-solutions`,
  //       name: "Custom Software Solutions",
  //       itemListElement: (apiData?.softwareSolutions?.items || []).map(
  //         (item: any, i: number) => ({
  //           "@type": "ListItem",
  //           position: i + 1,
  //           name: item.title,
  //           description: item.description,
  //         }),
  //       ),
  //     },
  //     // 6. TECHNOLOGY EXPERTISE
  //     {
  //       "@type": "ItemList",
  //       "@id": `https://www.techionik.com/industrypage/${slug}#tech-expertise`,
  //       name: "Technology Expertise",
  //       itemListElement: (apiData?.technologyExpertise?.cards || []).map(
  //         (card: any, i: number) => ({
  //           "@type": "ListItem",
  //           position: i + 1,
  //           name: card.title,
  //           description: Array.isArray(card.description)
  //             ? card.description.join(" ")
  //             : card.description,
  //         }),
  //       ),
  //     },
  //   ],
  // };
  const solutionsSummary = apiData?.softwareSolutions?.items
    ?.slice(0, 2)
    .map((s: any) => s.title)
    .join(", ");
  const techSummary = apiData?.technologyExpertise?.cards
    ?.slice(0, 2)
    .map((t: any) => t.title)
    .join(", ");
  return (
    <div>
      <main className="overflow-x-hidden scroll-smooth">
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(unifiedIndustrySchema),
          }}
        /> */}

        {apiData?.addScheema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: apiData.addScheema,
            }}
          />
        )}

        {/* 2. Hidden Voice Source */}
        <div
          className="industry-detail-voice-narrative"
          style={{ display: "none" }}
        >
          {`Techionik specializes in ${industryName} solutions. 
        Our key software offerings include ${solutionsSummary}. 
        We leverage expertise in ${techSummary} to deliver scalable, secure results for the ${industryName} sector.`}
        </div>
        {/* --- SOURCED FROM API --- */}
        <section id="HeroSection">
          {apiData?.heroSlides && (
            <HeroSection slides={[apiData.heroSlides] as any} />
          )}
        </section>

        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 py-20"
          id="whatyouget"
        >
          {apiData?.whatYouGet && (
            <WhatYouGet data={apiData.whatYouGet as any} />
          )}
        </section>

        {/* --- SOURCED FROM LOCAL DATA --- */}
        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-0"
          id="coreservices"
        >
          <Services data={transformedData} />
        </section>

        {/* --- SOURCED FROM API --- */}
        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-10 py-0"
          id="softwaresolution"
        >
          {apiData?.softwareSolutions && (
            <SoftwareSolution data={apiData.softwareSolutions as any} />
          )}
        </section>

        {/* --- SOURCED FROM API --- */}
        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-10"
          id="connecthero"
        >
          {apiData?.cta && <ConnectHero content={apiData.cta as any} />}
        </section>

        {/* --- SOURCED FROM LOCAL DATA --- */}
        <section className="py-10" id="casestudy">
          <CaseStudies caseStudies={normalizedCaseStudies as any} />
        </section>

        {/* --- SOURCED FROM API --- */}
        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-0"
          id="SolutionsWeDeliverComponent"
        >
          {apiData?.technologyExpertise && (
            <TechnologyExpertiseComponent
              data={apiData.technologyExpertise as any}
            />
          )}
        </section>

        {/* --- STATIC / UNCHANGED --- */}
        <section className="py-10" id="allblogs">
          <AllBlogs blogsData={normalizedBlogs as any} />
        </section>

        <section
          className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-0"
          id="aisection"
        >
          <AiSection />
        </section>
      </main>
    </div>
  );
};

export default IndustryPage;
