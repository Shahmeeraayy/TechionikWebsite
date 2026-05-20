import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { FAQ } from "@/data/FAQS";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import WhatYouGet from "@/components/WhatYouGet";
import TrustLogoStrip from "@/components/TrustLogoStrip";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import ServicesCTA from "@/components/servicesCTA";
import TechStack from "@/views/home/TechStacks";
import WhatWeDoCard from "@/components/whatWeDoCard";
import IndustriesSection from "@/views/home/IndustriesSection";
import SolutionsWeDeliverComponent from "@/components/SolutionWeDeliver";
import OutSourceModels from "@/components/OutSourceModel";
import TechServices from "@/views/home/TechServices";
import CaseStudies, { type CaseStudyType } from "@/views/home/CaseStudies";
import TalentPool from "@/views/home/TalentPool";
import OurClientSays from "@/components/OurClientSays";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import SoftwareDevelopmentInsights from "@/components/softwareInsights";
import FAQComponent from "@/views/home/FAQs";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { talentPoolDataHome } from "@/data/Talent Pool/TalentPollDataHome";
import { abouttechStackData } from "@/data/TechStack/AboutTeckStack";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { getSingleService } from "@/app/api/singleService/utils/getSingleService";
import { getNormalizedCaseStudies } from "@/app/api/All-CaseStudies/utils/caseStudyComponent";
import { customSoftwarePageCopy } from "@/data/services/customSoftwarePageCopy";
import { SoftwareInsightData } from "@/data/softwareInsightsData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const isCustomSoftwarePage = category === "custom-software-development";
  const pageCopy = isCustomSoftwarePage ? customSoftwarePageCopy : null;
  const apiData = await getSingleService(category);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = `/services/${category}`;
  const canonicalUrl = `${baseUrl}${pathname}`;

  if (!apiData && !pageCopy) return {};

  const title =
    pageCopy?.meta.title ||
    apiData?.metaTitle ||
    apiData?.title ||
    "Techionik | Service";
  const description =
    pageCopy?.meta.description ||
    apiData?.metaDescription ||
    apiData?.shortDescription ||
    "Techionik builds secure, scalable, and custom software solutions.";
  const keywords =
    pageCopy?.meta.keywords ||
    (apiData?.metaKeyWords
      ? apiData.metaKeyWords.split(",").map((k) => k.trim())
      : ["Techionik", "software development"]);
  const image =
    pageCopy?.meta.image ||
    (apiData?.imageUrl?.startsWith("http")
      ? apiData.imageUrl
      : apiData?.imageUrl
        ? `${baseUrl}${apiData.imageUrl}`
        : `${baseUrl}/banners/Hero.webp`);

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
    other: {
      "X-Robots-Tag": "noindex, nofollow",
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: image,
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
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const SingleServicePage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const isCustomSoftwarePage = category === "custom-software-development";
  const pageCopy = isCustomSoftwarePage ? customSoftwarePageCopy : null;
  const apiData = await getSingleService(category);

  if (!apiData && !pageCopy) {
    return notFound();
  }

  const heroSlides: HeroSlide[] = pageCopy?.heroSlides ?? apiData?.hero ?? [];

  const whatYouGetData: WhatYouGett =
    pageCopy?.whatYouGet ??
    {
      id: 1,
      title1: apiData?.extraSection?.title || "What you get with TECHIONIK",
      spanTitle: "",
      title2: "",
      reviews: [
        {
          image1: "/images/technology/clutch-reviews.png",
          width: 114,
          height: 54,
        },
        {
          image1: "/images/technology/google-reviews.png",
          width: 144,
          height: 42,
        },
        {
          image1: "/images/technology/good-firms.png",
          width: 125,
          height: 42,
        },
      ],
      RightDescription1:
        apiData?.extraSection?.description ||
        "We help businesses turn complex requirements into secure, scalable software products.",
      RightDescription2:
        "Our delivery model keeps strategy, architecture, and implementation aligned from the first workshop through launch.",
      buttonLabel: "Let's Discuss Your Idea",
      buttonLink: "#contact",
    };

  const whyChooseData: SoftwareSolutions | null =
    pageCopy?.softwareSolutions ??
    (apiData?.whyChooseTechionik as SoftwareSolutions);

  const servicesCtaData: ServicesCTAInterface =
    pageCopy?.servicesCTA ??
    {
      startTitle: "Streamline Your Business Operations with",
      spanTitle: "Software",
      endTitle: "Solutions",
      bgImage: "/banners/servicesCTA.png",
      description:
        "Turn manual workflows into secure, scalable digital systems with a software partner that understands product, architecture, and growth.",
      buttonLabel: "Talk to an Expert",
      buttonUrl: "#contact",
    };

  const whatWeDoData: WhatWeDo | null =
    pageCopy?.whatWeDo ?? (apiData?.whatWeDo as WhatWeDo) ?? null;
  const industriesData: IndustriesData | null =
    pageCopy?.industries ?? (apiData?.industries as IndustriesData) ?? null;
  const solutionsWeDeliverData: SolutionWeDeliver | null =
    pageCopy?.solutionsWeDeliver ??
    (apiData?.solutionsWeDeliver as SolutionWeDeliver) ??
    null;
  const faqData: FAQ | null = pageCopy?.faq ?? (apiData?.faq as FAQ) ?? null;

  const subServicesNarrative = pageCopy
    ? pageCopy.softwareSolutions.items.map((s) => s.title).join(", ")
    : (apiData?.subServices ?? []).map((s) => s.name).join(", ");

  const apiCaseStudies = apiData?.caseStudies ?? [];
  const normalizedCaseStudies: CaseStudyType[] =
    apiCaseStudies.length > 0
      ? apiCaseStudies.map((cs, index) => ({
          id: cs?.id ?? index,
          brand: "",
          title: cs?.title ?? "Untitled Case Study",
          description: cs?.shortDescription ?? "",
          solution: "",
          stats: [],
          imageDesktop: cs?.image ?? "/banners/caseStudy.webp",
          imageMobile: cs?.image ?? "/banners/caseStudy.webp",
          href: `/case-study/${cs?.slug ?? "#"}`,
        }))
      : await getNormalizedCaseStudies();

  return (
    <main className="overflow-x-hidden scroll-smooth">
      {apiData?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: apiData.addScheema,
          }}
        />
      )}

      <div className="service-voice-narrative" style={{ display: "none" }}>
        {`Techionik provides expert software development services. ${subServicesNarrative}. ${whatWeDoData?.mainDescription || apiData?.shortDescription || ""}`}
      </div>

      <section id="hero">
        <HeroSection slides={heroSlides} />
      </section>

      {pageCopy?.trustLogos?.length ? (
        <TrustLogoStrip logos={pageCopy.trustLogos} />
      ) : null}

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
        <WhatYouGet data={whatYouGetData} />
      </section>

      {whyChooseData && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
          <SoftwareSolution data={whyChooseData} />
        </section>
      )}

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
        <ServicesCTA opacity={true} data={servicesCtaData} />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-10">
        <TechStack data={abouttechStackData} />
      </section>

      {whatWeDoData && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-0">
          <WhatWeDoCard whatwedo={whatWeDoData} />
        </section>
      )}

      {(industriesData?.slides?.length ?? 0) > 0 && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-20 pb-15">
          <IndustriesSection industries={industriesData} />
        </section>
      )}

      {solutionsWeDeliverData && (
        <section>
          <SolutionsWeDeliverComponent data={solutionsWeDeliverData} />
        </section>
      )}

      <section>
        <OutSourceModels data={outsourcingModelsData as OutsourcingSlide} />
      </section>

      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-15 pb-25"
      >
        <TechServices servicesData={servicesDataHome} />
      </section>

      <CaseStudies caseStudies={normalizedCaseStudies} />

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-15">
        <TalentPool data={talentPoolDataHome} />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <OurClientSays />
      </section>

      {faqData && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-25">
          <FAQComponent data={faqData} />
        </section>
      )}

      <section
        id="contact"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-0"
      >
        <FooterContact />
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-10">
        <SoftwareDevelopmentInsights data={SoftwareInsightData} />
      </section>
    </main>
  );
};

export default SingleServicePage;
