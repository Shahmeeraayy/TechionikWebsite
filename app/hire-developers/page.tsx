import type { Metadata } from "next";
import HireDevelopersPage from "@/components/service-pages/hire-developers/HireDevelopersPage";
import { ParentHirigList } from "@/app/api/ParentHiring/utils/getHirigList";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/hire-developers`;
  const imageUrl = `${siteUrl}/images/home/dedicated-team.png`;
  const description =
    "Hire offshore developers from Techionik and scale your team with pre-vetted software talent across frontend, backend, full-stack, mobile, and AI roles.";
  const title = "Hire Offshore Developers | Techionik";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "hire offshore developers",
      "dedicated offshore developers",
      "offshore software development",
      "remote engineering team",
      "Techionik hiring",
      "hire full stack developers",
      "hire frontend developers",
      "hire backend developers",
      "hire AI developers",
      "machine learning developers",
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Hire offshore developers at Techionik",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function HireDevelopersRoute() {
  const pageData = await ParentHirigList("hire-developer");
  const schema =
    pageData?.addScheema ??
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Hire Offshore Developers | Techionik",
      url: "https://www.techionik.com/hire-developers",
      description:
        "Hire offshore developers with Techionik and build high-performing remote teams, including AI and machine learning specialists.",
      publisher: {
        "@type": "Organization",
        name: "Techionik",
      },
    });

  return <HireDevelopersPage pageData={pageData} schema={schema} />;
}
