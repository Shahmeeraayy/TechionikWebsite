import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aiAutomationCaseStudies } from "@/data/aiAutomationCaseStudies";

const cardLayouts = [
  "xl:col-span-7 xl:row-span-2 min-h-[420px]",
  "xl:col-span-5 min-h-[260px]",
  "xl:col-span-5 min-h-[260px]",
  "xl:col-span-4 min-h-[300px]",
  "xl:col-span-8 min-h-[300px]",
];

export default function AIAutomationCaseStudies() {
  return (
    <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      <div className="mb-10 md:mb-14 max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#F05323]">
          AI Automation
        </span>
        <h2 className="service-section-heading text-gradient mt-6">
          AI Automation <span className="text-dark-gradient">Case Studies</span>
        </h2>
        <p className="service-section-description mt-4 text-[#B6B6C5]">
          Real automation solutions built for business workflows, customer
          onboarding, lead generation, content automation, and AI-powered
          operations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[180px]">
        {aiAutomationCaseStudies.map((study, index) => (
          <Link
            key={study.slug}
            href={study.route}
            aria-label={`Open ${study.title}`}
            className={`group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#121218] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#F05323]/45 hover:shadow-[0_30px_90px_rgba(240,83,35,0.12)] ${cardLayouts[index] ?? "min-h-[280px]"}`}
          >
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,83,35,0.20),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.92)_100%)]" />
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex max-w-[85%] rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#E7D8D3] backdrop-blur-sm">
                  {study.badge}
                </span>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white/90 backdrop-blur-sm transition duration-300 group-hover:border-[#F05323]/50 group-hover:bg-[#F05323] group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-[26px] leading-[1.15] font-semibold text-white md:text-[30px]">
                  {study.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#C2C2CF] md:text-[15px]">
                  {study.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white">
                  <span>Open Case Study</span>
                  <span className="h-px w-10 bg-gradient-to-r from-[#F05323] to-transparent" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
