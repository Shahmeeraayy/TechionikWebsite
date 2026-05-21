import { redirect } from "next/navigation";

export default async function StaffingSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug[0] === "hire-developers") {
    redirect("/hire-developers");
  }

  if (slug[0] === "ai-ml") {
    redirect(`/services/${slug.join("/")}`);
  }

  redirect("/hire-developers");
}
