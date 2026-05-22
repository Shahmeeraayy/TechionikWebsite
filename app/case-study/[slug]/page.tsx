import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssetraCaseStudyPage from "@/components/case-study/AssetraCaseStudyPage";
import GenericCaseStudyDetailPage, {
  generateGenericCaseStudyMetadata,
} from "@/app/case-study/GenericCaseStudyDetailPage";
import { getTransformedCaseStudyDetail } from "@/app/api/caseStudy-detail/utils/getCaseStudyDetail";

const ASSETRA_CASE_STUDY_SLUG = "assetra-wealth-management-software";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateGenericCaseStudyMetadata(slug);
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === ASSETRA_CASE_STUDY_SLUG) {
    const data = await getTransformedCaseStudyDetail(slug);

    if (!data) {
      return notFound();
    }

    return <AssetraCaseStudyPage study={data} />;
  }

  return <GenericCaseStudyDetailPage slug={slug} />;
}
