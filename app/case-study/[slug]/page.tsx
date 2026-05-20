import type { Metadata } from "next";
import ContactHero from "@/components/ConnectHero";
import DownloadCaseStudyReport from "@/components/downloadCaseStudy";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import { notFound } from "next/navigation";
import { getTransformedCaseStudyDetail } from "@/app/api/caseStudy-detail/utils/getCaseStudyDetail";
import { injectH2Ids } from "@/app/api/Blog-Detail/utils/extractHeading";
import { detailCaseStudyCTA } from "@/data/detailCaseStudyCTA";
import { DownloadCaseStudyData } from "@/data/downloadCaseStudyData";
import Link from "next/link";
import Image from "next/image";
import { getSiteUrl } from "@/lib/site";
import type { DetailCaseStudyCategories } from "@/app/api/caseStudy-detail/types/casetudyDetail.type";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getTransformedCaseStudyDetail(slug);

  if (!caseStudy) return {};

  const siteUrl = getSiteUrl();
  const imageUrl = caseStudy.ogImage.startsWith("http")
    ? caseStudy.ogImage
    : `${siteUrl}${caseStudy.ogImage}`;
  const canonicalUrl = `${siteUrl}/case-study/${slug}`;

  return {
    title: caseStudy.seo.title || caseStudy.title,
    description: caseStudy.seo.description || caseStudy.shortDescription,
    keywords: caseStudy.seo.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: caseStudy.seo.title || caseStudy.title,
      description: caseStudy.seo.description || caseStudy.shortDescription,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.seo.title || caseStudy.title,
      description: caseStudy.seo.description || caseStudy.shortDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const CaseStudyDetailedPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data = await getTransformedCaseStudyDetail(slug);
  if (!data) return notFound();

  const contentWithIds = injectH2Ids(data.content);
  const heroSlideData = {
    title: data?.title ?? "Building Scalable Software",
    subtitle: "",
    description:
      data?.shortDescription ??
      "We build secure, reliable, and custom software solutions designed to streamline operations and accelerate business growth.",
    video: data?.ogImage ?? "/banners/ai-vedio-2.mp4",
    image: data?.ogImage ?? "/banners/dollers.webp",
    ctaLink: "#",
  };
  // const unifiedCaseStudyDetailSchema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "CreativeWork",
  //       "@id": `https://www.techionik.com/case-study/${slug}#casestudy`,
  //       headline: data.title,
  //       description: data.shortDescription,
  //       image: data.ogImage,
  //       datePublished: data.publishedAt,
  //       text: data.content,
  //       // 1. NESTING THE AUTHOR
  //       author: {
  //         "@type": "Person",
  //         "@id": `https://www.techionik.com/author/${data.author.slug}#person`,
  //         name: data.author.name,
  //         jobTitle: data.author.role,
  //         url: `https://www.techionik.com/author/${data.author.slug}`,
  //         worksFor: { "@id": "https://www.techionik.com/#organization" },
  //       },
  //       // 2. NESTING THE PUBLISHER
  //       publisher: {
  //         "@type": "Organization",
  //         "@id": "https://www.techionik.com/#organization",
  //         name: "Techionik",
  //         url: "https://www.techionik.com",
  //         logo: {
  //           "@type": "ImageObject",
  //           url: "https://www.techionik.com/logo.png",
  //         },
  //       },
  //       // 3. LINKING TO THE WEBPAGE & SPEAKABLE
  //       mainEntityOfPage: {
  //         "@type": "WebPage",
  //         "@id": `https://www.techionik.com/case-study/${slug}#webpage`,
  //         url: `https://www.techionik.com/case-study/${slug}`,
  //         name: data.title,
  //         description: data.shortDescription,
  //         speakable: {
  //           "@type": "SpeakableSpecification",
  //           cssSelector: [".case-study-detail-voice-narrative"],
  //         },
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="min-h-screen bg-[--color-bg]">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedCaseStudyDetailSchema),
        }}
      /> */}
      {data?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: data.addScheema,
          }}
        />
      )}

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div
        className="case-study-detail-voice-narrative"
        style={{ display: "none" }}
      >
        {`This Techionik case study explores ${data.title}. 
          Written by our expert ${data.author.name}, it details how we delivered ${data.shortDescription}.`}
      </div>
      {/* Hero — stays intact */}
      <HeroSection slides={[heroSlideData]} />

      {/* Main grid */}
      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN: Dangerous HTML content — col span 7 */}
          <article className="col-span-1 lg:col-span-8 pt-10 border-x border-2 border-[#2A2A34] bg-[#16161A] px-0 md:px-10">
            <div
              className="prose prose-invert max-w-none prose-h2:scroll-mt-32 prose-h2:text-orange-500 prose-p:text-gray-400 text-white"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Author + Categories + Date at bottom */}
            <div className="mt-10 flex justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  <h6 className="gradient-text">{data.author.name}</h6>
                  <p className="text-muted caption">{data.author.role}</p>
                </div>
              </div>

              {/* Social links — only show if value exists */}
              <div className="flex gap-4">
                {Object.entries(data.author.socialLinks).map(
                  ([platform, href]) =>
                    href ? (
                      <Link
                        href={href}
                        key={platform}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={`/icons/${platform}.svg`}
                          alt={`${platform} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </Link>
                    ) : null,
                )}
              </div>
            </div>

            {/* Categories + Published Date */}
            <div className="my-10 flex justify-between gap-2">
              <div>
                {data.categories.map((category: DetailCaseStudyCategories) => (
                  <span
                    className="mr-3 text-muted caption p-2 border border-gray-800 rounded-2xl"
                    key={category.id}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <data>
                  <p className="gradient-text caption">Published Date:</p>
                  <p className="text-muted caption">
                    {new Date(data.publishedAt).toDateString()}
                  </p>
                </data>
              </div>
            </div>
          </article>

          {/* RIGHT COLUMN: Download form — col span 5 */}
          <aside className="col-span-1 lg:col-span-4">
            <div className="sticky top-32">
              <DownloadCaseStudyReport
                data={DownloadCaseStudyData}
                caseStudySlug={slug}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* CTA — stays intact */}
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <ContactHero opacity={1} content={detailCaseStudyCTA} />
      </section>
    </div>
  );
};

export default CaseStudyDetailedPage;
