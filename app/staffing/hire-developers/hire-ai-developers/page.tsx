import type { Metadata } from "next";
import { headers } from "next/headers";

import { hireAiDevelopersPageData } from "@/data/services/hireAiDevelopersPageData";
import HiringAiDevelopersServicePage from "@/app/services/[category]/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const pathname = "/staffing/hire-developers/hire-ai-developers";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  return {
    title: hireAiDevelopersPageData.meta.title,
    description: hireAiDevelopersPageData.meta.description,
    keywords: hireAiDevelopersPageData.meta.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: hireAiDevelopersPageData.meta.title,
      description: hireAiDevelopersPageData.meta.description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${protocol}://${host}${hireAiDevelopersPageData.meta.image}`,
          width: 1200,
          height: 630,
          alt: hireAiDevelopersPageData.meta.title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: hireAiDevelopersPageData.meta.title,
      description: hireAiDevelopersPageData.meta.description,
      images: [
        `${protocol}://${host}${hireAiDevelopersPageData.meta.image}`,
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function StaffingHireAiDevelopersPage() {
  return (
    <HiringAiDevelopersServicePage
      params={Promise.resolve({
        category: "ai-ml",
        slug: "hire-ai-developers",
      })}
    />
  );
}
