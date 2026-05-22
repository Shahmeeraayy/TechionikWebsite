import type { Metadata } from "next";
import Image from "next/image";
import ContactHero from "@/components/ConnectHero";
import { detailCaseStudyCTA } from "@/data/detailCaseStudyCTA";
import {
  aiAutomationCaseStudies,
  getAiAutomationCaseStudyBySlug,
} from "@/data/aiAutomationCaseStudies";
import { getSiteUrl } from "@/lib/site";
import GenericCaseStudyDetailPage, {
  generateGenericCaseStudyMetadata,
} from "@/app/case-study/GenericCaseStudyDetailPage";

export function generateStaticParams() {
  return aiAutomationCaseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getAiAutomationCaseStudyBySlug(slug);

  if (!study) {
    return generateGenericCaseStudyMetadata(slug, "/case-studies");
  }

  const siteUrl = getSiteUrl();
  const imageUrl = study.image.startsWith("http")
    ? study.image
    : `${siteUrl}${study.image}`;

  return {
    title: `${study.title} | Techionik`,
    description: study.description,
    keywords: [
      study.title,
      "AI automation case study",
      "Techionik automation",
      ...study.capabilities,
    ],
    openGraph: {
      title: `${study.title} | Techionik`,
      description: study.description,
      url: `${siteUrl}${study.route}`,
      siteName: "Techionik",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: study.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Techionik`,
      description: study.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${siteUrl}${study.route}`,
    },
  };
}

export default async function AiAutomationCaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getAiAutomationCaseStudyBySlug(slug);

  if (!study) {
    return <GenericCaseStudyDetailPage slug={slug} />;
  }

  return (
    <main className="bg-[#000000] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/8">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,83,35,0.20),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.74)_58%,#000_100%)]" />

        <div className="relative z-10 max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-24 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/12 bg-black/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F05323] backdrop-blur-sm">
              {study.badge}
            </span>
            <h1 className="service-section-heading-lg text-gradient mt-6 max-w-4xl">
              {study.title}
            </h1>
            <p className="service-section-description mt-5 max-w-3xl text-[#C4C4CF]">
              {study.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#E2E2EA]"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <article className="rounded-[28px] border border-white/8 bg-[#121218] p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                Overview
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                AI automation designed for real operating workflows
              </h2>
              <p className="mt-4 text-base leading-8 text-[#BFBFCC]">
                {study.overview}
              </p>
            </article>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <article className="rounded-[28px] border border-white/8 bg-[#101015] p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                  Challenge
                </p>
                <p className="mt-4 text-base leading-8 text-[#BFBFCC]">
                  {study.challenge}
                </p>
              </article>

              <article className="rounded-[28px] border border-white/8 bg-[#101015] p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                  Solution
                </p>
                <p className="mt-4 text-base leading-8 text-[#BFBFCC]">
                  {study.solution}
                </p>
              </article>
            </div>

            <article className="rounded-[28px] border border-white/8 bg-[#121218] p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                Workflow Highlights
              </p>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {study.workflowHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-3xl border border-white/8 bg-black/20 px-5 py-4 text-sm leading-7 text-[#D0D0DB]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[28px] border border-white/8 bg-[#121218] p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                Operational Impact
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Outcomes aligned with scale, clarity, and execution quality
              </h2>
              <p className="mt-4 text-base leading-8 text-[#BFBFCC]">
                {study.impact}
              </p>
            </article>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-[28px] border border-white/8 bg-[#121218] p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                  Business Outcomes
                </p>
                <ul className="mt-5 space-y-4">
                  {study.businessOutcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-3xl border border-white/8 bg-black/20 px-4 py-4 text-sm leading-7 text-[#D0D0DB]"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[#121218] p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F05323]">
                  Delivery Focus
                </p>
                <p className="mt-4 text-sm leading-7 text-[#BFBFCC]">
                  Each AI automation case study is presented as a workflow-first
                  engagement, showing how Techionik helps teams operationalize
                  automation around process clarity, scalability, and business
                  execution.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-20">
        <ContactHero opacity={0.72} content={detailCaseStudyCTA} />
      </section>
    </main>
  );
}
