import type { Metadata } from "next";
import CaseStudyPage from "../case-study/CaseStudyPage";
import { getCaseStudyCategories } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";
import { getMainCaseStudyData } from "../api/All-CaseStudies/utils/getCaseStudies";
import { getSiteUrl } from "@/lib/site";
import {
  getCaseStudyThemeCopy,
  normalizeCaseStudyKey,
  resolveCaseStudyInitialState,
  type CaseStudySearchParams,
} from "@/lib/caseStudyTheme";

export const revalidate = 3600;

function getRequestedThemeValue(searchParams?: CaseStudySearchParams): string | null {
  const value = searchParams?.useCase ?? searchParams?.category;
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<CaseStudySearchParams> | CaseStudySearchParams;
}): Promise<Metadata> {
  const resolvedSearchParams = (await searchParams) ?? {};
  const requestedTheme = getRequestedThemeValue(resolvedSearchParams);
  const themeCopy = getCaseStudyThemeCopy(requestedTheme);
  const siteUrl = getSiteUrl();
  const canonicalUrl = requestedTheme
    ? `${siteUrl}/case-studies?useCase=${encodeURIComponent(requestedTheme)}`
    : `${siteUrl}/case-studies`;
  const ogImageUrl = `${siteUrl}/images/og/case-study-og.jpg`;

  return {
    title: themeCopy.metadataTitle,
    description: themeCopy.metadataDescription,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      requestedTheme ?? "case studies",
      "software case studies",
      "AI implementation stories",
      "tech success stories",
      "client transformations",
      "software development examples",
      "Techionik case study",
    ],
    openGraph: {
      title: themeCopy.metadataTitle,
      description: themeCopy.metadataDescription,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Techionik Case Studies",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: themeCopy.metadataTitle,
      description: themeCopy.metadataDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const Page = async ({
  searchParams,
}: {
  searchParams?: Promise<CaseStudySearchParams> | CaseStudySearchParams;
}) => {
  const caseStudiesCategories = await getCaseStudyCategories();
  const allCaseStudies = await getMainCaseStudyData();
  const resolvedSearchParams = (await searchParams) ?? {};
  const requestedTheme = getRequestedThemeValue(resolvedSearchParams);
  const { initialGroup, initialCategory } = resolveCaseStudyInitialState(
    resolvedSearchParams,
    caseStudiesCategories,
  );
  const requestedThemeKey = requestedTheme
    ? normalizeCaseStudyKey(requestedTheme)
    : "";
  const themedCaseStudies =
    requestedThemeKey.length > 0
      ? allCaseStudies.filter((caseStudy) =>
          (caseStudy.categories ?? []).some(
            (category) => normalizeCaseStudyKey(category) === requestedThemeKey,
          ),
        )
      : allCaseStudies;
  const archiveCaseStudies =
    themedCaseStudies.length > 0 ? themedCaseStudies : allCaseStudies;
  const featuredProjects = archiveCaseStudies
    .slice(0, 3)
    .map((cs) => cs.title)
    .join(", ");
  const themeCopy = getCaseStudyThemeCopy(initialCategory ?? requestedTheme);
  const siteUrl = getSiteUrl();
  const canonicalUrl = requestedTheme
    ? `${siteUrl}/case-studies?useCase=${encodeURIComponent(requestedTheme)}`
    : `${siteUrl}/case-studies`;

  const unifiedCaseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.techionik.com/case-studies#webpage",
        url: canonicalUrl,
        name: themeCopy.metadataTitle,
        description: themeCopy.metadataDescription,
        publisher: {
          "@type": "Organization",
          "@id": "https://www.techionik.com/#organization",
          name: "Techionik",
          url: "https://www.techionik.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.techionik.com/logo.png",
          },
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".case-study-voice-narrative"],
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Techionik Client Success Stories",
          numberOfItems: archiveCaseStudies?.length || 0,
          itemListElement: (archiveCaseStudies || []).map((cs, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: cs.title,
              description: cs.shortDescription,
              url: `https://www.techionik.com${cs.href || `/case-studies/${cs.slug}`}`,
              image: cs.image || "/banners/caseStudy.webp",
            },
          })),
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedCaseStudySchema),
        }}
      />

      <div className="case-study-voice-narrative" style={{ display: "none" }}>
        {requestedTheme
          ? `Techionik's ${requestedTheme} case studies highlight how we turn that use case into measurable business outcomes. Our projects showcase success stories like ${featuredProjects}, and more.`
          : `Techionik has a proven track record of digital transformation. 
          Our case studies showcase success stories like ${featuredProjects}, and more. 
          We specialize in custom software and advanced AI solutions for global clients.`}
      </div>
      <CaseStudyPage
        allCaseStudies={allCaseStudies}
        caseStudyCategories={caseStudiesCategories}
        initialGroup={initialGroup}
        initialCategory={initialCategory}
      />
    </main>
  );
};

export default Page;
