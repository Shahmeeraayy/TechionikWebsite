import type { Metadata } from "next";
import CaseStudyPage from "../case-study/CaseStudyPage";
import { getCaseStudyCategories } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";
import { getMainCaseStudyData } from "../api/All-CaseStudies/utils/getCaseStudies";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/case-studies`;
  const ogImageUrl = `${siteUrl}/images/og/case-study-og.jpg`;

  const description =
    "Explore Techionik's case studies. See how we help global clients transform their operations with custom software and advanced AI-driven applications.";

  return {
    title: "Case Studies | Techionik - Success Stories in Tech & AI",
    description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "software case studies",
      "AI implementation stories",
      "tech success stories",
      "client transformations",
      "software development examples",
      "Techionik case study",
    ],
    openGraph: {
      title: "Case Studies | Techionik - Success Stories in Tech & AI",
      description,
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
      title: "Techionik Case Studies | Client Success Stories",
      description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const Page = async () => {
  const caseStudiesCategories = await getCaseStudyCategories();
  const allCaseStudies = await getMainCaseStudyData();
  const featuredProjects = allCaseStudies
    .slice(0, 3)
    .map((cs) => cs.title)
    .join(", ");

  const unifiedCaseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.techionik.com/case-studies#webpage",
        url: "https://www.techionik.com/case-studies",
        name: "Case Studies | Techionik - Success Stories in Tech & AI",
        description:
          "Explore Techionik's case studies. See how we help global clients transform their operations with custom software and AI.",
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
          numberOfItems: allCaseStudies?.length || 0,
          itemListElement: (allCaseStudies || []).map((cs, index) => ({
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
        {`Techionik has a proven track record of digital transformation. 
          Our case studies showcase success stories like ${featuredProjects}, and more. 
          We specialize in custom software and advanced AI solutions for global clients.`}
      </div>
      <CaseStudyPage
        allCaseStudies={allCaseStudies}
        caseStudyCategories={caseStudiesCategories}
      />
    </main>
  );
};

export default Page;
