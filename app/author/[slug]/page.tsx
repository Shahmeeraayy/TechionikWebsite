import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Data Imports
import { DummyBlogData } from "@/data/blogData";
import { DetailedBlogDummyData } from "@/data/blogDetailedData";
import { createSlug } from "@/utils/slugify";
import AuthorProfile from "@/components/authorCard"; // Make sure path is correct
import OurExpert from "@/components/OurExpert";

// API Import
import { getAuthorBySlug } from "@/app/api/author/authorAPIBySlug.api";
import { getAuthors } from "@/app/api/author/author.api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AuthorPage({ params }: PageProps) {
  const apiAuthors = await getAuthors();
  const { slug } = await params;

  // 1. Fetch Author data from API
  const apiResponse = await getAuthorBySlug(slug);
  const apiAuthor = apiResponse?.data?.author;

  // 2. Fallback to Local Data
  const localAuthorProfile = DetailedBlogDummyData.find(
    (blog) => createSlug(blog.blogWriterName) === slug,
  );

  if (!apiAuthor && !localAuthorProfile) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-4">
          Author Not Found or API Failed
        </h1>
        <p className="text-gray-400 mb-8">
          Attempted to fetch slug: <strong>{slug}</strong>
        </p>
        <div className="bg-gray-900 p-6 rounded-lg overflow-auto max-w-3xl w-full text-left text-sm">
          <strong>Debug API Response:</strong>
          <pre className="mt-2 text-green-400">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  // 3. Prepare Social Links
  // Try to map API socials to the local component structure, or use local socials
  let finalSocials = localAuthorProfile?.blogWriterSocials || [];
  if (apiAuthor?.socialLinks && Object.keys(apiAuthor.socialLinks).length > 0) {
    finalSocials = Object.entries(apiAuthor.socialLinks)
      .filter(([_, href]) => Boolean(href)) // Only include platforms with a valid URL
      .map(([platform, href]) => ({
        platform: platform as any,
        icon: `/images/blog/socials/${platform}.png`,
        href: href as string,
      }));
  }

  // 4. Find all blogs written by this author (using local data as fallback strategy for blogs for now)
  // const authorBlogSlugs = DetailedBlogDummyData
  //   .filter((blog) => createSlug(blog.blogWriterName) === slug)
  //   .map((blog) => blog.slug);

  // const authorBlogs = DummyBlogData.filter((blog) =>
  //   authorBlogSlugs.includes(blog.slug)
  // );

  // 5. Use API blogs if provided, otherwise local dummy blogs
  let finalBlogs: any[] = [];
  if (apiResponse?.data && Array.isArray(apiResponse.data.blogs)) {
    // Map the raw backend API blog objects to match the UI component's expected schema
    finalBlogs = apiResponse.data.blogs.map((b: any) => ({
      id: b.id || b.slug,
      href: `/blog/${b.slug}`,
      imageUrl: b.ogImage || "/banners/Software-Development.webp", // Match backend's ogImage
      blogCategory: Array.isArray(b.categories)
        ? b.categories.map((c: any) => c.name)
        : [],
      title: b.title || "Untitled",
      description: b.shortDescription || "",
      date: b.publishedAt || b.createdAt || new Date(),
    }));
  } else {
    // Fallback exactly to local DummyBlogData structure ONLY if API completely fails
    // finalBlogs = authorBlogs;

    // ❌ OLD (causing issue)
    // return <p className="text-center text-2xl font-bold text-white">No Blogs Written by this author</p>

    // ✅ NEW: let UI handle empty state
    finalBlogs = [];
  }
  // strubctural schema for both web mcp and speakable
  // const unifiedAuthorSlugSchema = {
  //     "@context": "https://schema.org",
  //     "@graph": [
  //       {
  //         "@type": "Organization",
  //         "@id": "https://www.techionik.com/#organization",
  //         "name": "Techionik",
  //         "url": "https://www.techionik.com",
  //         "logo": "https://www.techionik.com/logo.png"
  //       },
  //       {
  //         "@type": "ProfilePage",
  //         "@id": `https://www.techionik.com/author/${slug}#webpage`,
  //         "url": `https://www.techionik.com/author/${slug}`,
  //         "name": `${apiAuthor?.name || "Author"} | Techionik Expert`,
  //         "about": { "@id": "https://www.techionik.com/#organization" },
  //         "speakable": {
  //           "@type": "SpeakableSpecification",
  //           "cssSelector": [".author-detail-voice-narrative"],
  //         },
  //         // The WebPage points to the Person
  //         "mainEntity": { "@id": `https://www.techionik.com/author/${slug}#person` }
  //       },
  //       {
  //         "@type": "Person",
  //         "@id": `https://www.techionik.com/author/${slug}#person`,
  //         "name": apiAuthor?.name || localAuthorProfile?.blogWriterName,
  //         "jobTitle": apiAuthor?.role || localAuthorProfile?.blogWriterRole,
  //         "description": apiAuthor?.shortDescription || localAuthorProfile?.blogWriterBio,
  //         "image": apiAuthor?.avatar || localAuthorProfile?.blogWriterImage,
  //         "worksFor": { "@id": "https://www.techionik.com/#organization" },
  //         "sameAs": finalSocials.map((s) => s.href),
  //         // This is the correct property to link a person to their works
  //         "subjectOf": { "@id": `https://www.techionik.com/author/${slug}#articles` }
  //         // "mainEntityOfPage": { "@id": `https://www.techionik.com/author/${slug}#articles` }
  //       },
  //       // WE DEFINE THE LIST SEPARATELY TO STOP NESTING ERRORS
  //       {
  //         "@type": "ItemList",
  //         "@id": `https://www.techionik.com/author/${slug}#articles`,
  //         "name": `Articles by ${apiAuthor?.name || "Author"}`,
  //         "numberOfItems": finalBlogs.length,
  //         "itemListElement": finalBlogs.map((blog: any, i: number) => ({
  //           "@type": "ListItem",
  //           "position": i + 1,
  //           "item": {
  //             "@type": "BlogPosting",
  //             "headline": blog.title,
  //             "description": blog.description,
  //             "url": `https://www.techionik.com${blog.href}`,
  //             "datePublished": blog.date,
  //             "author": { "@id": `https://www.techionik.com/author/${slug}#person` }
  //           },
  //         })),
  //       }
  //     ],
  //   };
  const authorName =
    apiAuthor?.name || localAuthorProfile?.blogWriterName || "Author";
  const authorBio =
    apiAuthor?.shortDescription || localAuthorProfile?.blogWriterBio || "";
  const recentBlogs = finalBlogs
    .slice(0, 3)
    .map((b) => b.title)
    .join(", ");
  return (
    <main className="min-h-screen bg-[--color-bg] text-foreground pb-20">
      {/* 1. Master Unified Schema */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedAuthorSlugSchema) }}
      /> */}
      {apiAuthors[0]?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: apiAuthors[0].addScheema,
          }}
        />
      )}

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div
        className="author-detail-voice-narrative"
        style={{ display: "none" }}
      >
        {`${authorName} is a ${apiAuthor?.role || "technical expert"} at Techionik. 
          ${authorBio} 
          Recently, ${authorName} has written about ${recentBlogs}.`}
      </div>
      <div className="h-20 bg-[#16161A]"></div>

      {/* --- SECTION A: AUTHOR PROFILE --- */}
      <AuthorProfile
        name={apiAuthor?.name || localAuthorProfile?.blogWriterName || "Author"}
        image={
          apiAuthor?.avatar ||
          localAuthorProfile?.blogWriterImage ||
          "/images/blog/avatar.png"
        }
        role={
          apiAuthor?.role ||
          localAuthorProfile?.blogWriterRole ||
          "Content Writer"
        }
        bio={
          apiAuthor?.shortDescription ||
          localAuthorProfile?.blogWriterBio ||
          "Expert content writer sharing insights on technology and AI."
        }
        socials={finalSocials}
        articleCount={finalBlogs.length}
      />

      {/* --- SECTION B: AUTHOR'S BLOG GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-8 w-1 bg-[#F05323] rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            All <span className="text-dark-gradient">Blogs</span>
          </h2>
        </div>

        {/* ✅ FIXED CONDITIONAL RENDERING */}
        {finalBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalBlogs.map((blog) => (
              <Link href={blog.href} key={blog.id} className="group h-full">
                <article className="bg-[#16161A] border border-[#2A2A34] rounded-2xl overflow-hidden hover:border-[#F05323]/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {blog.blogCategory.slice(0, 1).map((cat: string) => (
                        <span
                          key={cat}
                          className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10 uppercase tracking-wide"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2 group-hover:text-[#F05323] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {blog.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#2A2A34] flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-2 text-white font-medium">
                        Read Article
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-bold text-white mt-10">
            No Blogs Written by this author
          </p>
        )}

        <section>
          <OurExpert />
        </section>
      </section>
    </main>
  );
}
