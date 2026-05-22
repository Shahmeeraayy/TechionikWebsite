"use client";

import LoadingLink from "@/components/LoadingLink";
import { CALENDLY_URL } from "@/utils/links";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";
import { getMainCaseStudy } from "../api/All-CaseStudies/utils/getCaseStudies";
import { CaseStudyCategory } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";

type DisplayGroupName =
  | "Industries"
  | "Services"
  | "Technologies & Platforms";

type CardVariant = "top" | "overlay";

interface BlogPageClientProps {
  caseStudyCategories: CaseStudyCategory[];
  allCaseStudies: getMainCaseStudy[];
}

interface DisplayCategory {
  id: string;
  name: string;
  group: DisplayGroupName;
}

const DISPLAY_GROUP_ORDER: DisplayGroupName[] = [
  "Industries",
  "Services",
  "Technologies & Platforms",
];

const twoLineClamp = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
} as CSSProperties;

const threeLineClamp = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
} as CSSProperties;

function normalizeKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const WEBSITE_SERVICE_DISPLAY_CATEGORIES: DisplayCategory[] = [
  {
    id: "software-development",
    name: "Software Development",
    group: "Services",
  },
  {
    id: "application-development",
    name: "Application Development",
    group: "Services",
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    group: "Services",
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    group: "Services",
  },
  {
    id: "design",
    name: "Design",
    group: "Services",
  },
  {
    id: "quality-assurance",
    name: "Quality Assurance",
    group: "Services",
  },
  {
    id: "infrastructure-devops",
    name: "Infrastructure & DevOps",
    group: "Services",
  },
  {
    id: "integration-api",
    name: "Integration & APIs",
    group: "Services",
  },
  {
    id: "automation",
    name: "Automation & Process",
    group: "Services",
  },
];

const WEBSITE_SERVICE_NAME_BY_KEY = Object.fromEntries(
  WEBSITE_SERVICE_DISPLAY_CATEGORIES.map((category) => [
    normalizeKey(category.name),
    category.name,
  ]),
) as Record<string, string>;

const WEBSITE_SERVICE_TAG_ALIASES: Record<string, string[]> = {
  "artificial-intelligence": ["AI & Machine Learning"],
  "machine-learning": ["AI & Machine Learning"],
  "ai-platform": ["AI & Machine Learning"],
  "ai-automation": ["AI & Machine Learning", "Automation & Process"],
  "web-development": ["Application Development"],
  "cloud-migration": ["Infrastructure & DevOps"],
  "ui-ux-design": ["Design"],
  erp: ["Integration & APIs"],
  "business-automation": ["Automation & Process"],
  "business-process-automation": ["Automation & Process"],
  automation: ["Automation & Process"],
  "business-intelligence": ["Data & Analytics"],
  "data-intelligence": ["Data & Analytics"],
  "api-integrations": ["Integration & APIs"],
  devops: ["Infrastructure & DevOps"],
};

const STUDY_SERVICE_HINTS: Record<string, string[]> = {
  "erp-enterprise-resource-planning-system": [
    "Integration & APIs",
    "Automation & Process",
  ],
  "assetra-wealth-management-software": [
    "Software Development",
    "Data & Analytics",
  ],
  "homecert-ie-real-estate-compliance-platform": [
    "Application Development",
    "Quality Assurance",
  ],
  "data-driven-real-estate-acquisition-platform": [
    "Application Development",
    "Data & Analytics",
  ],
  "layoffhub-ai-review-management-software": [
    "AI & Machine Learning",
    "Software Development",
  ],
};

const FALLBACK_DISPLAY_GROUPS: Record<DisplayGroupName, DisplayCategory[]> = {
  Industries: [
    { id: "fashion-retail", name: "Fashion & Retail", group: "Industries" },
    { id: "real-estate", name: "Real Estate", group: "Industries" },
    { id: "hospitality", name: "Hospitality", group: "Industries" },
    {
      id: "food-beverage",
      name: "Food & Beverage",
      group: "Industries",
    },
    {
      id: "customer-experience",
      name: "Customer Experience",
      group: "Industries",
    },
    { id: "commerce", name: "Commerce", group: "Industries" },
    { id: "proptech", name: "PropTech", group: "Industries" },
    { id: "lifestyle", name: "Lifestyle Brands", group: "Industries" },
  ],
  Services: WEBSITE_SERVICE_DISPLAY_CATEGORIES,
  "Technologies & Platforms": [
    {
      id: "react-nextjs",
      name: "React & Next.js",
      group: "Technologies & Platforms",
    },
    { id: "nodejs", name: "Node.js", group: "Technologies & Platforms" },
    { id: "python", name: "Python", group: "Technologies & Platforms" },
    {
      id: "dialogflow",
      name: "Google Dialogflow",
      group: "Technologies & Platforms",
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      group: "Technologies & Platforms",
    },
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure",
      group: "Technologies & Platforms",
    },
    {
      id: "data-intelligence",
      name: "Data Intelligence",
      group: "Technologies & Platforms",
    },
    {
      id: "api-integrations",
      name: "API Integrations",
      group: "Technologies & Platforms",
    },
  ],
};

function resolveWebsiteServiceNames(value: string): string[] {
  const normalized = normalizeKey(value);
  if (!normalized) return [];

  const directMatch = WEBSITE_SERVICE_NAME_BY_KEY[normalized];
  const aliasMatches = WEBSITE_SERVICE_TAG_ALIASES[normalized] ?? [];

  return Array.from(
    new Set([...(directMatch ? [directMatch] : []), ...aliasMatches]),
  );
}

function getStudyServiceTags(study: getMainCaseStudy): string[] {
  const categoryMatches = (study.categories || []).flatMap((category) =>
    resolveWebsiteServiceNames(category),
  );
  const slugMatches = STUDY_SERVICE_HINTS[study.slug] || [];

  return Array.from(new Set([...categoryMatches, ...slugMatches]));
}

function normalizeGroupLabel(value?: string): DisplayGroupName | null {
  const normalized = normalizeKey(value ?? "");

  if (normalized.startsWith("industry")) return "Industries";
  if (normalized.startsWith("service")) return "Services";
  if (
    normalized.startsWith("technologies-and-platforms") ||
    normalized.startsWith("technology") ||
    normalized.startsWith("platform")
  ) {
    return "Technologies & Platforms";
  }

  return null;
}

function buildDisplayGroups(
  apiCategories: CaseStudyCategory[],
  allCaseStudies: getMainCaseStudy[],
): Record<DisplayGroupName, DisplayCategory[]> {
  const availableServiceKeys = new Set(
    allCaseStudies.flatMap((study) =>
      getStudyServiceTags(study).map((serviceName) => normalizeKey(serviceName)),
    ),
  );

  const serviceCategories =
    availableServiceKeys.size > 0
      ? WEBSITE_SERVICE_DISPLAY_CATEGORIES.filter((category) =>
          availableServiceKeys.has(normalizeKey(category.name)),
        )
      : WEBSITE_SERVICE_DISPLAY_CATEGORIES;

  const mergedGroups = DISPLAY_GROUP_ORDER.reduce(
    (accumulator, groupName) => {
      accumulator[groupName] =
        groupName === "Services"
          ? [...serviceCategories]
          : [...FALLBACK_DISPLAY_GROUPS[groupName]];
      return accumulator;
    },
    {} as Record<DisplayGroupName, DisplayCategory[]>,
  );

  const seenByGroup = DISPLAY_GROUP_ORDER.reduce(
    (accumulator, groupName) => {
      accumulator[groupName] = new Set(
        FALLBACK_DISPLAY_GROUPS[groupName].map((category) =>
          normalizeKey(category.name),
        ),
      );
      return accumulator;
    },
    {} as Record<DisplayGroupName, Set<string>>,
  );

  for (const category of apiCategories) {
    const group = normalizeGroupLabel(category.parentCategoryName);
    if (!group) continue;

    if (group === "Services") {
      const resolvedServiceNames = resolveWebsiteServiceNames(category.name);

      for (const serviceName of resolvedServiceNames) {
        const normalizedServiceName = normalizeKey(serviceName);
        if (!normalizedServiceName || seenByGroup[group].has(normalizedServiceName)) {
          continue;
        }

        seenByGroup[group].add(normalizedServiceName);
        mergedGroups[group].push({
          id: normalizedServiceName,
          name: serviceName,
          group,
        });
      }

      continue;
    }

    const normalizedName = normalizeKey(category.name);
    if (!normalizedName || seenByGroup[group].has(normalizedName)) continue;

    seenByGroup[group].add(normalizedName);
    mergedGroups[group].push({
      id: category.id || normalizedName,
      name: category.name,
      group,
    });
  }

  return mergedGroups;
}

function formatPublishedAt(value: string): string {
  if (!value) return "Recent case study";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function getStudyImage(study: getMainCaseStudy): string {
  const remoteImage = study.image?.trim();
  if (remoteImage) return remoteImage;

  return "/banners/caseStudy.webp";
}

function getStudyTags(study: getMainCaseStudy): string[] {
  const apiCategories = (study.categories || []).filter(Boolean);
  return Array.from(new Set([...apiCategories, ...getStudyServiceTags(study)]));
}

function getStudyLabel(study: getMainCaseStudy): string {
  const apiLabel = (study.categories || []).find((category) => {
    const normalized = normalizeKey(category);
    return normalized && normalized !== "technology" && normalized !== "case-study";
  });

  return apiLabel || "Case Study";
}

function getStudyDescription(study: getMainCaseStudy): string {
  const description = study.shortDescription?.trim();

  if (description) return description;

  return "Explore how Techionik turned a complex requirement into a scalable digital outcome.";
}

function PrimaryPillLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <LoadingLink
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F05323] to-[#8A3014] pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(138,48,20,0.45)] transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span>{label}</span>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/12 transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </LoadingLink>
  );
}

function StoryMeta({ study }: { study: getMainCaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold tracking-[0.2em] text-white/75">
        {getStudyLabel(study)}
      </span>
      <span className="flex items-center gap-2 tracking-[0.08em] text-[#C5C5D0]">
        <CalendarDays className="h-3.5 w-3.5 text-[#F05323]" />
        {formatPublishedAt(study.date)}
      </span>
    </div>
  );
}

function CardExploreAction() {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold text-white/90">
      Explore
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#F05323]/40 bg-[#F05323] text-white transition-transform duration-300">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </span>
  );
}

function StoryCard({
  study,
  variant,
}: {
  study: getMainCaseStudy;
  variant: CardVariant;
}) {
  const imageSrc = getStudyImage(study);
  const description = getStudyDescription(study);

  if (variant === "overlay") {
    return (
      <LoadingLink
        href={`/case-study/${study.slug}`}
        className="group relative block min-h-[440px] overflow-hidden rounded-[28px] border border-white/10 bg-[#121219] shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
      >
        <Image
          src={imageSrc}
          alt={study.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-6 sm:p-7">
          <StoryMeta study={study} />
          <h3
            className="mt-5 text-2xl font-bold leading-tight text-white sm:text-[28px]"
            style={twoLineClamp}
          >
            {study.title}
          </h3>
          <p
            className="mt-4 text-sm leading-7 text-[#C5C5D0]"
            style={threeLineClamp}
          >
            {description}
          </p>
          <div className="mt-6">
            <CardExploreAction />
          </div>
        </div>
      </LoadingLink>
    );
  }

  return (
    <LoadingLink
      href={`/case-study/${study.slug}`}
      className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#141419] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={study.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-6">
        <div className="absolute -top-16 left-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.18),transparent_72%)]" />
        <StoryMeta study={study} />
        <h3
          className="relative text-2xl font-bold leading-tight text-white"
          style={twoLineClamp}
        >
          {study.title}
        </h3>
        <p
          className="relative text-sm leading-7 text-[#9FA0AF]"
          style={threeLineClamp}
        >
          {description}
        </p>
        <div className="relative mt-auto pt-2">
          <CardExploreAction />
        </div>
      </div>
    </LoadingLink>
  );
}

function FeaturedStory({
  study,
}: {
  study: getMainCaseStudy;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#17171d] shadow-[0_36px_100px_rgba(0,0,0,0.45)]">
      <div className="grid lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative flex flex-col gap-6 overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute -left-24 top-4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.26),transparent_72%)]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_72%)]" />

          <span className="relative inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
            Featured Story
          </span>

          <div className="relative space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F05323]">
              {getStudyLabel(study)}
            </p>
            <h3 className="bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#9D9DA8_100%)] bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-[42px]">
              {study.title}
            </h3>
            <p className="max-w-xl text-base leading-8 text-[#B7B7C3]">
              {getStudyDescription(study)}
            </p>
          </div>

          <div className="relative flex flex-wrap items-center gap-4 pt-3">
            <PrimaryPillLink
              href={`/case-study/${study.slug}`}
              label="Explore"
            />
            <span className="flex items-center gap-2 text-sm text-[#C5C5D0]">
              <CalendarDays className="h-4 w-4 text-[#F05323]" />
              {formatPublishedAt(study.date)}
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[430px]">
          <Image
            src={getStudyImage(study)}
            alt={study.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-[#17171d]" />
        </div>
      </div>
    </div>
  );
}

const CaseStudyPage = ({
  caseStudyCategories = [],
  allCaseStudies = [],
}: BlogPageClientProps) => {
  const displayGroups = useMemo(
    () => buildDisplayGroups(caseStudyCategories, allCaseStudies),
    [allCaseStudies, caseStudyCategories],
  );

  const [activeGroup, setActiveGroup] = useState<DisplayGroupName>("Services");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleCategories = displayGroups[activeGroup];

  const filteredCaseStudies = useMemo(() => {
    if (!activeCategory) return allCaseStudies;

    const selectedKey = normalizeKey(activeCategory);

    return allCaseStudies.filter((study) =>
      getStudyTags(study).some((tag) => normalizeKey(tag) === selectedKey),
    );
  }, [activeCategory, allCaseStudies]);

  const leadStories = filteredCaseStudies.slice(0, 3);
  const featuredStory =
    filteredCaseStudies.find((study) => study.slug === "rastah") ||
    filteredCaseStudies.find((study) => study.isFeatured) ||
    filteredCaseStudies[0];
  const archiveStories = filteredCaseStudies.filter(
    (study) => study.id !== featuredStory?.id,
  );

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,83,35,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(240,83,35,0.08),transparent_28%),linear-gradient(180deg,#100503_0%,#050506_45%,#000000_100%)]" />
        <div
          className="absolute inset-x-0 bottom-[-8%] top-[16%] bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage:
              "url('/images/ParentServices/ServiceHeromedia/Service_Parent_Page_Section.svg')",
            backgroundSize: "1400px auto",
          }}
        />
        <div className="absolute -left-24 top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.2),transparent_72%)] blur-2xl" />
        <div className="absolute bottom-6 right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-2xl" />

        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-24 pt-20 text-center sm:px-8 lg:px-16 lg:pb-28">
          <div className="inline-flex flex-wrap items-center justify-center rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm text-white/75 backdrop-blur-xl">
            <LoadingLink href="/" className="transition hover:text-white">
              Home
            </LoadingLink>
            <span className="mx-2 text-white/30">/</span>
            <span>Insights</span>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-[#F05323]">Case Study</span>
          </div>

          <h1 className="mt-7 max-w-5xl bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#999999_100%)] bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-[58px] lg:leading-[1.12]">
            Explore How We Chart Pathways to Success Through Technological
            Innovation
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#CECECE] sm:text-lg">
            Delve into our case studies showcasing how precision and
            cutting-edge innovation at Techionik drive transformative outcomes
            across sectors like retail, hospitality, AI automation, and modern
            digital experiences.
          </p>

          <PrimaryPillLink
            href={CALENDLY_URL}
            label="Let's Discuss Your Idea"
            className="mt-10"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div className="flex flex-col items-start gap-8">
          <div className="flex w-full flex-wrap gap-3">
            {DISPLAY_GROUP_ORDER.map((group) => {
              const isActive = activeGroup === group;

              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => {
                    setActiveGroup(group);
                    setActiveCategory(null);
                  }}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
                    isActive
                      ? "border-[#F05323]/50 bg-gradient-to-r from-[#F05323] to-[#8A3014] text-white shadow-[0_20px_45px_rgba(240,83,35,0.22)]"
                      : "border-white/10 bg-[#1A1A21] text-[#CECECE] hover:border-white/20 hover:text-white"
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleCategories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={`${category.group}-${category.id}`}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      isActive ? null : category.name,
                    )
                  }
                  className={`group relative min-h-[88px] overflow-hidden rounded-[24px] border px-6 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#F05323]/50 bg-[#1B1B24] shadow-[0_24px_60px_rgba(240,83,35,0.16)]"
                      : "border-white/10 bg-[#16161A] hover:-translate-y-1 hover:border-white/20"
                  }`}
                >
                  <span className="absolute left-1/2 top-[-3.5rem] h-32 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.24),transparent_72%)] opacity-85" />
                  <span className="relative flex items-center justify-between gap-4">
                    <span className="max-w-[80%] text-sm font-semibold text-white sm:text-base">
                      {category.name}
                    </span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[#F05323] bg-[#F05323] text-white"
                          : "border-white/15 bg-white/5 text-white/75 group-hover:border-[#F05323]/40"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-center gap-3 pt-2">
            {DISPLAY_GROUP_ORDER.map((group) => (
              <span
                key={group}
                className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                  activeGroup === group ? "bg-[#F05323]" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 sm:px-8 lg:px-16 lg:pb-28">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F05323]">
              Case Study Archive
            </p>
            <h2 className="mt-4 max-w-3xl bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#9D9DA8_100%)] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Real project stories with a more editorial presentation
            </h2>
          </div>

          <p className="text-sm text-[#A8A8B3] sm:text-base">
            Showing {filteredCaseStudies.length}{" "}
            {filteredCaseStudies.length === 1 ? "story" : "stories"}
            {activeCategory ? ` for ${activeCategory}` : ""}.
          </p>
        </div>

        {filteredCaseStudies.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-white/15 bg-[#111114] px-8 py-16 text-center">
            <p className="text-lg font-semibold text-white">
              No case studies match this category yet.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#9FA0AF]">
              Try another category or clear the active filter to browse the full
              archive.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="mt-8 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {leadStories.map((story, index) => (
                <StoryCard
                  key={`${story.id}-${index}`}
                  study={story}
                  variant={index === 2 ? "overlay" : "top"}
                />
              ))}
            </div>

            {featuredStory && filteredCaseStudies.length > 1 ? (
              <FeaturedStory study={featuredStory} />
            ) : null}

            {archiveStories.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {archiveStories.map((story, index) => (
                  <StoryCard
                    key={`${story.id}-archive-${index}`}
                    study={story}
                    variant={index % 3 === 1 ? "overlay" : "top"}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
};

export default CaseStudyPage;
