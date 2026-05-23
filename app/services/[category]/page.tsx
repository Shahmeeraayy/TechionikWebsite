import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ParentServiceTemplate, {
  type ParentServiceTemplateVariant,
} from "@/components/service-pages/ParentServiceTemplate";
import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import type { FAQ } from "@/data/FAQS";
import type { CaseStudyType } from "@/views/home/CaseStudies";
import {
  getParentServicePageCopyBySlug,
  getParentServiceRedirect,
  servicesData,
  servicesOutsourcingData,
  servicesSoftwareInsightsData,
  servicesTalentPoolData,
  servicesTechStackData,
} from "@/data/services/serviceRegistry";
import { getSingleService } from "@/app/api/singleService/utils/getSingleService";
import { getNormalizedCaseStudies } from "@/app/api/All-CaseStudies/utils/caseStudyComponent";
import {
  applicationDevelopmentOutsourcingModelsData,
  applicationDevelopmentTechServicesData,
  applicationDevelopmentTechStackData,
} from "@/data/services/applicationDevelopmentPageCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const redirectTarget = getParentServiceRedirect(category);
  const canonicalCategory = redirectTarget ? redirectTarget.split("/")[0] : category;
  const pageCopy = getParentServicePageCopyBySlug(canonicalCategory);
  const apiData = await getSingleService(canonicalCategory);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = redirectTarget || `/services/${canonicalCategory}`;
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
      index: true,
      follow: true,
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
  const redirectTarget = getParentServiceRedirect(category);
  if (redirectTarget) {
    redirect(redirectTarget);
  }

  const canonicalCategory = category;
  const pageCopy = getParentServicePageCopyBySlug(canonicalCategory);
  const apiData = await getSingleService(canonicalCategory);

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
    ? pageCopy.softwareSolutions?.items.map((s) => s.title).join(", ") ?? ""
    : (apiData?.subServices ?? []).map((s) => s.name).join(", ");

  const serviceNarrative = pageCopy
    ? `${pageCopy.meta.title}. ${pageCopy.meta.description} ${whatYouGetData.RightDescription1} ${whatWeDoData?.mainDescription || ""}`
    : `Techionik provides expert software development services. ${subServicesNarrative}. ${whatWeDoData?.mainDescription || apiData?.shortDescription || ""}`;

  const apiCaseStudies = apiData?.caseStudies ?? [];
    const normalizedCaseStudies: CaseStudyType[] =
      apiCaseStudies.length > 0
        ? apiCaseStudies.map((cs, index) => ({
            id: index + 1,
            brand: "",
            title: cs?.title ?? "Untitled Case Study",
            description: cs?.shortDescription ?? "",
            solution: "",
            category: cs?.categories?.[0]?.name ?? "",
            stats: [],
            imageDesktop: cs?.image ?? "/banners/caseStudy.webp",
            imageMobile: cs?.image ?? "/banners/caseStudy.webp",
            href: `/case-studies/${cs?.slug ?? "#"}`,
          }))
      : await getNormalizedCaseStudies();

  const techStackData =
    category === "application-development"
      ? applicationDevelopmentTechStackData
      : servicesTechStackData;
  const techServicesData = category === "application-development"
    ? applicationDevelopmentTechServicesData
    : servicesData;
  const outsourcingData = category === "application-development"
    ? applicationDevelopmentOutsourcingModelsData
    : servicesOutsourcingData;
  const templateVariant =
    (pageCopy as { templateVariant?: ParentServiceTemplateVariant } | null)
      ?.templateVariant ?? "default";

  return (
    <ParentServiceTemplate
      variant={templateVariant}
      narrative={serviceNarrative}
      schemaMarkup={apiData?.addScheema ?? null}
      heroSlides={heroSlides}
      trustLogos={pageCopy?.trustLogos}
      whatYouGetData={whatYouGetData}
      whyChooseData={whyChooseData}
      servicesCtaData={servicesCtaData}
      techStackData={techStackData}
      whatWeDoData={whatWeDoData}
      industriesData={industriesData}
      solutionsWeDeliverData={solutionsWeDeliverData}
      outsourcingData={outsourcingData}
      techServicesData={techServicesData}
      normalizedCaseStudies={normalizedCaseStudies}
      talentPoolData={servicesTalentPoolData}
      faqData={faqData}
      softwareInsightsData={servicesSoftwareInsightsData}
    />
  );
};

export default SingleServicePage;
