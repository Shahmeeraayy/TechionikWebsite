import ContactHero from "@/components/ConnectHero";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import TechnologyExpertiseComponent from "@/components/TechnologyExpertise";
import WhatYouGet from "@/components/WhatYouGet";
import IndustriesSection from "@/views/home/IndustriesSection";
import CaseStudies from "@/views/home/CaseStudies";
import Certifications from "@/components/sections/how-we-work-component/certificates";
import OurClientSays from "@/components/OurClientSays";
import AllBlogs from "@/views/home/AllBlogs";
import FAQs from "@/views/home/FAQs";
import OutsourcingModels from "@/components/OutSourceModel";
import SolutionsWeDeliverComponent from "@/components/SolutionWeDeliver";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubServicePageDataBySlug } from "@/app/api/subService/utils/getSubServicePageData";

import type { SubServicePageData } from "@/app/api/subService/utils/getSubServicePageData";
import WhatWeDoCard from "@/components/whatWeDoCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const apiData = await getSubServicePageDataBySlug(category, slug);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = `/services/${category}/${slug}`;
  const canonicalUrl = `${baseUrl}${pathname}`;

  if (!apiData) return {};

  const title = apiData.heroSlides?.[0]?.title || "Techionik | Subservice";
  const description =
    apiData.whatYouGet?.RightDescription1 ||
    apiData.heroSlides?.[0]?.description ||
    "Techionik builds secure, scalable, and custom software solutions.";
  const keywords = ["Techionik", "software development", title];

  // Get image from hero or use fallback
  const imageUrl = apiData.heroSlides?.[0]?.image || "/images/og-default.png";

  return {
    title: title,
    description: description,
    robots: {
      index: false,
      follow: false,
    },
    other: {
      "X-Robots-Tag": "noindex, nofollow",
    },
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`,
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
        imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`,
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const SubServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) => {
  const { slug, category } = await params;
  const apiData: SubServicePageData | null = await getSubServicePageDataBySlug(
    category,
    slug,
  );
  console.log(apiData?.industries);

  if (!apiData) return notFound();
  // const unifiedSubServiceSchema = {
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
  //       "@type": "WebPage",
  //       "@id": `https://www.techionik.com/services/${category}/${slug}#webpage`,
  //       url: `https://www.techionik.com/services/${category}/${slug}`,
  //       name: apiData.heroSlides?.[0]?.title,
  //       about: { "@id": "https://www.techionik.com/#organization" },
  //       description: `Techionik offers specialized ${apiData.heroSlides?.[0]?.title}. ${apiData.whatYouGet?.RightDescription1}`,
  //       speakable: {
  //         "@type": "SpeakableSpecification",
  //         cssSelector: [".subservice-voice-narrative"],
  //       },
  //       // ALL SUB-ENTITIES NESTED HERE
  //       mainEntity: [
  //         // 1. THE SPECIFIC SERVICE
  //         {
  //           "@type": "Service",
  //           "@id": `https://www.techionik.com/services/${category}/${slug}#service`,
  //           name: apiData.heroSlides?.[0]?.title,
  //           description: apiData.whatYouGet?.RightDescription1,
  //           provider: { "@id": "https://www.techionik.com/#organization" },
  //           serviceType: category,
  //         },
  //         // 2. TECHNOLOGY EXPERTISE
  //         {
  //           "@type": "ItemList",
  //           "@id": `https://www.techionik.com/services/${category}/${slug}#technology-expertise`,
  //           name:
  //             apiData.technologyExpertise?.mainTitle || "Technology Expertise",
  //           description: apiData.technologyExpertise?.mainDescription,
  //           itemListElement: (apiData.technologyExpertise?.cards || []).map(
  //             (card: any, i: number) => ({
  //               "@type": "ListItem",
  //               position: i + 1,
  //               name: card.title,
  //               description: Array.isArray(card.description)
  //                 ? card.description.join(" ")
  //                 : card.description,
  //             }),
  //           ),
  //         },
  //         // 3. SOLUTIONS WE DELIVER
  //         {
  //           "@type": "ItemList",
  //           "@id": `https://www.techionik.com/services/${category}/${slug}#solutions-delivered`,
  //           name: apiData.solutionsWeDeliver?.title || "Solutions We Deliver",
  //           description: apiData.solutionsWeDeliver?.description,
  //           itemListElement: (apiData.solutionsWeDeliver?.cards || []).map(
  //             (card: any, i: number) => ({
  //               "@type": "ListItem",
  //               position: i + 1,
  //               name: card.title,
  //               description: Array.isArray(card.description)
  //                 ? card.description.join(" ")
  //                 : card.description,
  //             }),
  //           ),
  //         },
  //       ],
  //     },
  //   ],
  // };
  return (
    <main>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedSubServiceSchema),
        }}
      /> */}

      {apiData.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: apiData.addScheema,
          }}
        />
      )}

      <div className="subservice-voice-narrative" style={{ display: "none" }}>
        {`Techionik provides expert ${apiData.heroSlides?.[0]?.title}. ${apiData.whatYouGet?.RightDescription1}. Our expertise includes ${apiData.technologyExpertise?.cards?.map((c: any) => c.title).join(", ")}.`}
      </div>
      {/* Hero Section */}
      <div className="">
        <HeroSection slides={apiData?.heroSlides ?? []} />
      </div>

      {/* What You Get */}
      {apiData?.whatYouGet && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-10">
          <WhatYouGet data={apiData?.whatYouGet} />
        </div>
      )}

      {/* Technology Expertise */}
      {apiData?.technologyExpertise && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-10">
          <TechnologyExpertiseComponent data={apiData?.technologyExpertise} />
        </div>
      )}

      {/* Solutions We Deliver */}
      {(apiData?.solutionsWeDeliver?.cards?.length ?? 0) > 0 && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-10">
          <SoftwareSolution
            data={{
              title: apiData?.solutionsWeDeliver?.title,
              middleTitle: apiData?.solutionsWeDeliver?.spanTitle,
              lastTitle: "",
              description: apiData?.solutionsWeDeliver?.description,
              items: apiData?.solutionsWeDeliver?.cards.map((c, i) => ({
                id: c?.id,
                title: c?.title,
                description: Array.isArray(c?.description)
                  ? c?.description?.join(" ")
                  : c?.description,
                image: `/images/about/software-solution/aiLayer${(i % 4) + 1}.svg`,
                hoverImage: `/images/about/software-solution/aiLayer${(i % 4) + 1}-hover.svg`,
                alt: c?.title,
              })),
            }}
          />
        </div>
      )}

      {/* Outsourcing Models */}
      {apiData?.outsourcingModels && (
        <section>
          <OutsourcingModels data={apiData?.outsourcingModels} />
        </section>
      )}

      {/* Contact Hero (CTA) */}
      {apiData?.contactHero && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-8">
          <ContactHero content={apiData?.contactHero} />
        </div>
      )}

      {apiData?.whatWeDo && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-8">
          <WhatWeDoCard whatwedo={apiData?.whatWeDo} />
        </div>
      )}

      {/* Industries Section */}
      {(apiData?.industries?.slides?.length ?? 0) > 0 && (
        <section className="pt-10 pb-15">
          <IndustriesSection industries={apiData?.industries} />
        </section>
      )}

      {/* Case Studies */}
      {(apiData?.caseStudies?.length ?? 0) > 0 && (
        <div>
          <CaseStudies caseStudies={apiData?.caseStudies} />
        </div>
      )}

      {/* Certifications */}
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-10 lg:py-8">
        <Certifications />
      </div>

      {/* Blogs */}
      {(apiData?.blogs?.length ?? 0) > 0 && (
        <div>
          <AllBlogs blogsData={apiData?.blogs} />
        </div>
      )}

      {/* Client Testimonials */}
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
        <OurClientSays />
      </div>

      {/* FAQs */}
      {apiData?.faq && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-20">
          <FAQs data={apiData?.faq} />
        </section>
      )}
    </main>
  );
};

export default SubServicePage;
