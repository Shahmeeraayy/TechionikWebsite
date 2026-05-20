import type { Metadata } from "next";
import { headers } from "next/headers";
// NO "use client" — server component
import { getBlogCategories } from "../api/blog-category/blogCategory.api";
import { getMainBlogData } from "../api/blog/blog.api";
import BlogPageClient from "./blogPage"; // ← new file

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const pathname = "/blog";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  const description =
    "Stay updated with the latest in AI, custom software, and digital trends. Techionik's blog offers expert insights and innovation news for your growth.";

  return {
    title: "Blog | Techionik - Insightful Tech, AI & Software Trends",
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "tech blog",
      "AI insights",
      "software news",
      "digital transformation trends",
      "Techionik updates",
      "innovation guides",
      "software development tips",
    ],
    openGraph: {
      title: "Blog | Techionik - Insightful Tech, AI & Software Trends",
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${protocol}://${host}/images/og/blog-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Blog",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Techionik Blog | Tech & AI Trends",
      description: description,
      images: [`${protocol}://${host}/images/og/blog-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const BlogPage = async () => {
  const categories = await getBlogCategories();
  const Blogs = await getMainBlogData();
  const latestTopics = Blogs.slice(0, 4)
    .map((b) => b.title)
    .join(", ");

  const unifiedBlogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. ORGANIZATION
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        name: "Techionik",
        url: "https://www.techionik.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.techionik.com/Logo.webp",
        },
      },
      // 2. WEBPAGE & SPEAKABLE
      {
        "@type": "WebPage",
        "@id": "https://www.techionik.com/blog#webpage",
        url: "https://www.techionik.com/blog",
        name: "Blog | Techionik - Insightful Tech & AI Trends",
        about: { "@id": "https://www.techionik.com/#organization" },
        description:
          "Stay updated with expert insights on AI, custom software, and digital transformation.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".blog-voice-narrative"],
        },
        mainEntity: { "@id": "https://www.techionik.com/blog#blog-list" },
      },
      // 3. BLOG ENTITY
      {
        "@type": "Blog",
        "@id": "https://www.techionik.com/blog#blog-list",
        name: "Techionik Insights",
        publisher: { "@id": "https://www.techionik.com/#organization" },
        blogPost: (Blogs || []).map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.shortDescription,
          image: blog.image,
          datePublished: blog.date,
          url: `https://www.techionik.com/blog/${blog.slug}`,
          author: {
            "@type": "Person",
            name: blog.author?.name || blog.author || "Techionik Team",
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedBlogSchema) }}
      />

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div className="blog-voice-narrative" style={{ display: "none" }}>
        {`Welcome to the Techionik blog. We provide expert insights on digital transformation and AI. 
          Our latest articles cover topics such as ${latestTopics}.`}
      </div>
      <BlogPageClient categories={categories} blogs={Blogs} />
    </>
  );
};

export default BlogPage;
