import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HiringPageData } from "../data/hiringCardData";

const HiringSection: FC<{ data: HiringPageData }> = ({ data }) => {
  const { header, cards } = data;

  return (
    <section className="bg-[--color-bg] px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-8xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="service-section-heading-lg mb-6 text-white">
            {header.mainTitle}
            <br /> <span className="gradient-text">{header.highlightTitle}</span>
          </h2>
          <p className="service-section-description whitespace-pre-line text-(--color-muted)">
            {header.subtitle}
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {cards.map((item) => {
            const iconAlt = `${item.title.trim()} ${item.category?.trim() ?? ""}`.trim();

            return (
              <article
                key={item.id}
                className="flex h-full flex-col rounded-[32px] border border-[#2A2A34] bg-[#16161A] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)] lg:p-10"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#303038] bg-[#26262B]">
                  <Image
                    src={item.icon}
                    alt={iconAlt || item.title.trim()}
                    width={44}
                    height={44}
                    className="h-11 w-11 opacity-80"
                  />
                </div>

                <h3 className="service-card-title mt-8 text-[var(--color-muted)]">
                  {item.title.trim()}
                  {item.category?.trim() ? (
                    <>
                      <br />
                      <span className="gradient-text">{item.category.trim()}</span>
                    </>
                  ) : null}
                </h3>

                <ul className="mt-8 flex-grow space-y-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 service-body text-white">
                      <span className="mt-0.5 font-bold text-[#F05323]">•</span>
                      <span className="leading-7">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us"
                  className="group mt-10 inline-flex h-14 w-full max-w-[180px] items-center justify-between rounded-full bg-[#434345] pl-6 pr-2 transition-colors hover:bg-[#4d4d4f]"
                >
                  <span className="service-body font-medium text-white">Hire Now</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E85D33] text-white transition-transform group-hover:translate-x-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
