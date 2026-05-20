import CareerHero from "@/components/career/careerHero"; // Adjust path as needed
import ApplicationForm from "@/components/career/ApplicationForm"; // Adjust path as needed
import { getCareerBySlug } from "@/app/api/career/utils/getCareers";

interface ApplyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ApplyJobPage({ params }: ApplyPageProps) {
  // 1. Await params to extract the slug (Required in Next.js 15+)
  const { slug } = await params;

  // 2. Fetch the job data for the Hero section
  const response = await getCareerBySlug(slug);
  const job = response?.success ? response.data : null;

  // 3. Fallback if the URL is invalid
  if (!job) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  // 4. Render the Hero and the Form together
  return (
    <main className="w-full bg-black min-h-screen">
      {/* Same Hero Section */}
      <CareerHero job={job} buttons={false} />

      {/* New Application Form */}
      <ApplicationForm jobTitle={job.title} careerSlug={slug} />
    </main>
  );
}
