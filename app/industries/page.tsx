import type { Metadata } from "next";
import IndustryCards from "@/components/IndustryCards";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = "/industries";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title: "Industries We Serve | Techionik - Custom Software & AI",
    description:
      "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "industries served",
      "healthcare software",
      "fintech solutions",
      "retail tech",
      "logistics software",
      "education technology",
      "custom industry solutions",
      "AI in business",
    ],
    openGraph: {
      title: "Industries We Serve | Techionik - Custom Software & AI",
      description:
        "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${baseUrl}/images/og/industries-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Industries We Serve - Techionik",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Industries We Serve | Sector-Specific Innovation",
      description:
        "Explore the diverse industries Techionik serves. From healthcare to fintech, we provide custom software and AI solutions tailored to your sector's unique needs.",
      images: [`${baseUrl}/images/og/industries-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function IndustryPage() {
  return (
    <main className="overflow-x-hidden scroll-smooth bg-black">
      <IndustryCards />
    </main>
  );
}
