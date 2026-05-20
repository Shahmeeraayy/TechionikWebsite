import CareerHero from "@/components/career/careerHero";
import { getCareerBySlug } from "@/app/api/career/utils/getCareers";
import JobDetailsGrid from "@/components/career/jobDetailedGrid";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ✅ Metadata (OG + Twitter)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const response = await getCareerBySlug(slug);
  const job = response?.success ? response.data : null;

  if (!job) return {};

  const fallbackImage = "/Logo.webp";

  const imageUrl = job.image?.startsWith("http")
    ? job.image
    : job.image
      ? `https://www.techionik.com${job.image}`
      : fallbackImage;

  const description =
    job.htmlText?.replace(/<[^>]+>/g, "").slice(0, 160) || job.title;

  return {
    title: job.title,
    description,
    openGraph: {
      title: job.title,
      description,
      url: `https://www.techionik.com/careers/${slug}`,
      siteName: "Techionik",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: job.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: job.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function DetailCareerPage({ params }: PageProps) {
  const { slug } = await params;

  const response = await getCareerBySlug(slug);
  const job = response?.success ? response.data : null;

  if (!job) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold mb-2">Job Not Found</h1>
        <p className="text-gray-400">We couldn't find a job matching: {slug}</p>
      </div>
    );
  }

  const unifiedServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        name: "Techionik",
        url: "https://www.techionik.com",
        image: "https://www.techionik.com/logo.png",
        logo: "https://www.techionik.com/logo.png",
      },
      {
        "@type": "JobPosting",
        "@id": `https://www.techionik.com/careers/${slug}#job`,
        url: `https://www.techionik.com/careers/${slug}`,
        title: job.title,
        description: job.htmlText,
        image: job.image,
        hiringOrganization: {
          "@type": "Organization",
          name: "Techionik",
          url: "https://www.techionik.com",
          logo: "https://www.techionik.com/logo.png",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: job.city,
            addressLocality: job.city,
            addressRegion: job.stateProvince,
            postalCode: job.zipPostalCode,
            addressCountry: job.country,
          },
        },
        employmentType: job.jobType,
        baseSalary: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: job.salary,
        },
        datePosted: job.dateOpen,
        // ⚠️ Ideally replace with real expiry date if available
        validThrough: job.dateOpen,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedServicesSchema) }}
      />
      <CareerHero job={job} />
      <JobDetailsGrid job={job} />
    </main>
  );
}