export type CaseStudyDisplayGroup =
  | "Industries"
  | "Services"
  | "Technologies & Platforms";

export type CaseStudySearchParams = {
  useCase?: string | string[];
  group?: string | string[];
  category?: string | string[];
};

export type CaseStudyCategoryLike = {
  name: string;
  slug?: string;
  parentCategoryName?: string;
};

export type CaseStudyThemeCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  archiveEyebrow: string;
  archiveTitle: string;
  archiveDescription: string;
  metadataTitle: string;
  metadataDescription: string;
};

export type CaseStudyLike = {
  category?: string | null;
  categories?: { name?: string | null; slug?: string | null }[] | null;
};

const THEME_DESCRIPTIONS: Record<string, string> = {
  healthcare:
    "Digital healthcare platforms support patient management, healthcare analytics, and operational efficiency across medical systems.",
  "real-estate":
    "Real estate technology solutions improve property management, digital listings, and transaction processes while enhancing customer engagement.",
  education:
    "Education platforms support digital learning environments, student management systems, and academic analytics.",
  finance:
    "Financial technology solutions support secure digital operations, fraud detection systems, and financial data analytics.",
  "retail-and-ecommerce":
    "Retail technologies enable automated workflows, omnichannel commerce platforms, and customer behavior analytics.",
  retail:
    "Retail technologies enable automated workflows, omnichannel commerce platforms, and customer behavior analytics.",
  manufacturing:
    "Manufacturing platforms optimize production processes, supply chain management, and industrial automation systems.",
  "high-tech":
    "Technology-focused organizations benefit from advanced engineering solutions that support product development and innovation cycles.",
  insurance:
    "Digital insurance platforms support policy management, claims processing, and risk analytics systems.",
  wealthtech:
    "WealthTech case studies highlight portfolio visibility, AI-assisted analysis, and digital finance workflows.",
  "ai-platform":
    "AI platform case studies show how intelligent systems support product delivery, automation, and scalable user experiences.",
  saas:
    "SaaS case studies focus on platform growth, recurring workflows, and product-led experiences.",
  compliance:
    "Compliance case studies show how secure workflows, documentation, and regulatory controls can be simplified.",
  "business-automation":
    "Automation case studies show how repetitive work can be streamlined across teams and workflows.",
  "automation-process":
    "Automation case studies show how repetitive work can be streamlined across teams and workflows.",
  "data-analytics":
    "Data and analytics case studies show how better visibility leads to faster and smarter decisions.",
  "application-development":
    "Application development case studies show how modern digital products are designed for speed, scale, and usability.",
  "ai-and-machine-learning":
    "AI and machine learning case studies show how intelligent systems create measurable business impact.",
};

function firstValue(value?: string | string[]): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export function normalizeCaseStudyKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeCaseStudyGroupLabel(
  value?: string | null,
): CaseStudyDisplayGroup | null {
  const normalized = normalizeCaseStudyKey(value ?? "");

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

export function resolveCaseStudyInitialState(
  searchParams: CaseStudySearchParams | undefined,
  categories: CaseStudyCategoryLike[],
): {
  initialGroup: CaseStudyDisplayGroup;
  initialCategory: string | null;
} {
  const requestedUseCase =
    firstValue(searchParams?.useCase) ||
    firstValue(searchParams?.category) ||
    "";
  const normalizedRequestedUseCase = normalizeCaseStudyKey(requestedUseCase);

  if (normalizedRequestedUseCase) {
    const matchedCategory = categories.find((category) => {
      const categoryKey = normalizeCaseStudyKey(category.name);
      const slugKey = normalizeCaseStudyKey(category.slug ?? "");

      return (
        categoryKey === normalizedRequestedUseCase ||
        slugKey === normalizedRequestedUseCase
      );
    });

    if (matchedCategory) {
      return {
        initialGroup:
          normalizeCaseStudyGroupLabel(matchedCategory.parentCategoryName) ??
          "Services",
        initialCategory: matchedCategory.name,
      };
    }

    const requestedGroup = normalizeCaseStudyGroupLabel(requestedUseCase);
    if (requestedGroup) {
      return {
        initialGroup: requestedGroup,
        initialCategory: null,
      };
    }
  }

  const explicitGroup = normalizeCaseStudyGroupLabel(
    firstValue(searchParams?.group),
  );

  if (explicitGroup) {
    return {
      initialGroup: explicitGroup,
      initialCategory: null,
    };
  }

  return {
    initialGroup: "Services",
    initialCategory: null,
  };
}

export function getCaseStudyThemeCopy(
  categoryName?: string | null,
): CaseStudyThemeCopy {
  if (!categoryName) {
    return {
      heroEyebrow: "Case Studies",
      heroTitle: "Explore How We Chart Pathways to Success Through Technological Innovation",
      heroDescription:
        "Discover how Techionik transforms challenges into success stories with AI driven solutions.",
      archiveEyebrow: "Case Study Archive",
      archiveTitle: "Real project stories with a more editorial presentation",
      archiveDescription:
        "Browse the full archive to see how Techionik delivers practical, scalable outcomes across different client needs.",
      metadataTitle:
        "Case Studies | Techionik - Success Stories in Tech & AI",
      metadataDescription:
        "Explore Techionik's case studies. See how we help global clients transform their operations with custom software and advanced AI-driven applications.",
    };
  }

  const normalizedKey = normalizeCaseStudyKey(categoryName);
  const description =
    THEME_DESCRIPTIONS[normalizedKey] ??
    `Explore case studies related to ${categoryName} and see how Techionik applies technology to this use case.`;

  return {
    heroEyebrow: "Use Case Focus",
    heroTitle: `${categoryName} Case Studies`,
    heroDescription: description,
    archiveEyebrow: `${categoryName} Archive`,
    archiveTitle: `Real project stories for ${categoryName}`,
    archiveDescription: `Showing practical projects and outcomes tailored to ${categoryName} use cases.`,
    metadataTitle: `${categoryName} Case Studies | Techionik`,
      metadataDescription: description,
  };
}

function isGenericCaseStudyLabel(value: string): boolean {
  const normalized = normalizeCaseStudyKey(value);

  return (
    normalized === "case-study" ||
    normalized === "case-studies" ||
    normalized === "success-story" ||
    normalized === "success-stories" ||
    normalized === "untitled" ||
    normalized === "success"
  );
}

export function getCaseStudyArchiveHref(
  caseStudies: CaseStudyLike[] = [],
  fallbackUseCase?: string,
): string {
  const candidate =
    caseStudies
      .flatMap((caseStudy) => [
        caseStudy.category ?? "",
        ...(caseStudy.categories ?? []).map((category) => category?.name ?? ""),
        ...(caseStudy.categories ?? []).map((category) => category?.slug ?? ""),
      ])
      .map((value) => value.trim())
      .find((value) => value && !isGenericCaseStudyLabel(value)) ?? "";

  const useCase = candidate || fallbackUseCase?.trim() || "";

  return useCase
    ? `/case-studies?useCase=${encodeURIComponent(useCase)}`
    : "/case-studies";
}
