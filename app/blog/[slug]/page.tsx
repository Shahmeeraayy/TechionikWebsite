import type { Metadata } from "next";
import AboutSection from "@/components/sections/home/hero/AboutSection";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import ExploreBlog from "./detailedBlogComponent/explore";
import NewsLetter from "./detailedBlogComponent/newsletter";
import AllBlogs from "@/views/home/AllBlogs";
import { getTransformedBlogDetail } from "@/app/api/Blog-Detail/utils/getBlogDetail";
import {
  extractH2Headings,
  injectH2Ids,
} from "@/app/api/Blog-Detail/utils/extractHeading";
import { getNormalizedBlogs } from "@/app/api/blog/AllBlogComponent";
import TOCSidebar from "./detailedBlogComponent/TOCSidebar";
import Image from "next/image";
import { getSiteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getTransformedBlogDetail(slug);

  if (!blog) return {};

  const siteUrl = getSiteUrl();
  const imageUrl = blog.ogImage.startsWith("http")
    ? blog.ogImage
    : `${siteUrl}${blog.ogImage}`;
  const canonicalUrl = `${siteUrl}/blog/${slug}`;

  return {
    title: blog.seo.title || blog.title,
    description: blog.seo.description || blog.shortDescription,
    keywords: blog.seo.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: blog.seo.title || blog.title,
      description: blog.seo.description || blog.shortDescription,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo.title || blog.title,
      description: blog.seo.description || blog.shortDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = await getTransformedBlogDetail(slug);
  if (!blog) notFound();

  // Use a fallback image if author image is missing
  const authorImage = blog?.author?.image || "/icons/avatar.svg";

  const HeroSection = {
    title: blog?.title ?? "Building Scalable Software",
    subtitle: "For Digital Success",
    description:
      blog?.shortDescription ??
      "We build secure, reliable, and custom software solutions designed to streamline operations and accelerate business growth.",

    image: blog?.ogImage ?? "/images/about/about-us.png",

    ctaLink: "/contact-us",
  };

  // 1. Extract h2 headings for the sidebar TOC
  const toc = extractH2Headings(blog.content);

  // 2. Inject id attributes into the HTML so scroll links work
  const contentWithIds = injectH2Ids(blog.content);
  const apiData = await getNormalizedBlogs();

  // Structural Schema for Web mcp and speakable
  const unifiedBlogDetailSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.techionik.com/blog/${slug}#article`,
        headline: blog.title,
        description: blog.shortDescription,
        image: blog.ogImage,
        datePublished: blog.publishedAt,
        articleBody: blog.content,
        // 1. NESTING THE AUTHOR
        author: {
          "@type": "Person",
          "@id": `https://www.techionik.com/author/${blog.author.slug}#person`,
          name: blog.author.name,
          jobTitle: blog.author.role,
          image: authorImage,
          url: `https://www.techionik.com/author/${blog.author.slug}`,
          worksFor: { "@id": "https://www.techionik.com/#organization" },
        },
        // 2. NESTING THE PUBLISHER
        publisher: {
          "@type": "Organization",
          "@id": "https://www.techionik.com/#organization",
          name: "Techionik",
          url: "https://www.techionik.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.techionik.com/logo.png",
          },
        },
        // 3. LINKING TO THE WEBPAGE
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.techionik.com/blog/${slug}#webpage`,
          url: `https://www.techionik.com/blog/${slug}`,
          name: blog.title,
          description: blog.shortDescription,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".blog-detail-voice-narrative"],
          },
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-[--color-bg] scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedBlogDetailSchema),
        }}
      />

      {blog?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blog.addScheema,
          }}
        />
      )}

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div className="blog-detail-voice-narrative" style={{ display: "none" }}>
        {`You are reading ${blog.title}, an article by ${blog.author.name} from Techionik. 
          The article discusses ${blog.shortDescription}`}
      </div>
      <AboutSection slides={[HeroSection]} />

      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: Sidebar TOC */}
        <aside className="hidden lg:block lg:col-span-3">
          {/* The container below becomes the sticky reference for both items */}
          <div className="sticky top-32 flex flex-col gap-10">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest my-10 pl-4">
                  On This Page
                </p>
                <TOCSidebar toc={toc} />
              </div>
            )}

            {/* CTA Card - Now moves with the TOC instead of over it */}
            <div
              className="flex mt-10 flex-col justify-center w-full 2xl:w-[80%] space-y-6 border h-72.5 border-(--color-muted) rounded-lg p-4 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/images/ParentServices/ServiceHeromedia/Service_Parent_Page_Section.svg')",
              }}
            >
              <div className="space-y-4">
                <h3 className="text-white">Start My digital Journey</h3>
                <p className="text-gray-400 caption">
                  Reduce Risk and set a solid foundation for your large-scale
                  projects
                </p>
              </div>
              <Button
                text="Talk To Expert"
                icon="/icons/arrow-right.svg"
                size="medium"
                radius="full"
                href="#"
                variant="gradient"
                showIcon={true}
                iconRotate={45}
                className="inline-flex w-full xl:w-[70%] justify-between"
              />
            </div>
          </div>
        </aside>

        {/* MIDDLE COLUMN: Blog Content */}
        <article className="col-span-1 pt-10 lg:col-span-6 border-x border-2 border-[#2A2A34] bg-[#16161A] px-0 md:px-10 h-fit">
          <div
            className="prose max-w-full overflow-hidden break-words whitespace-pre-wrap prose-invert prose-h2:scroll-mt-32 prose-h2:text-orange-500 prose-p:text-gray-400 prose-img:max-w-full prose-pre:overflow-x-auto prose-table:block prose-table:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />

          {/* Author + Categories + Date */}
          <div className="mt-10 mb-6 flex items-center justify-between border-t border-gray-800 pt-8">
            <Link href={`/author/${blog.author.slug}`}>
              <div className="flex gap-4 cursor-pointer group items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-[#F05323] transition-colors">
                  <Image
                    src={authorImage}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h6 className="gradient-text group-hover:underline decoration-[#F05323] underline-offset-4">
                    {blog.author.name}
                  </h6>
                  <p className="text-muted caption">{blog.author.role}</p>
                </div>
              </div>
            </Link>

            {/* Social links — only show platforms that have a value */}
            <div className="flex gap-4">
              {Object.entries(blog.author.socialLinks).map(
                ([platform, href]) =>
                  href ? (
                    <Link
                      href={href}
                      key={platform}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={`/icons/${platform}.svg`}
                        alt={`${platform} icon`}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </Link>
                  ) : null,
              )}
            </div>
          </div>

          <div className="my-10 flex justify-between gap-2">
            <div>
              {blog.categories.map((category) => (
                <span
                  className="mr-3 text-muted caption p-2 border border-gray-800 rounded-2xl"
                  key={category.id}
                >
                  {category.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <data>
                <p className="gradient-text caption">Published Date:</p>
                <p className="text-muted caption">
                  {new Date(blog.publishedAt).toDateString()}
                </p>
              </data>
            </div>
          </div>
        </article>

        {/* RIGHT COLUMN */}
        <aside className="col-span-1 lg:col-span-3">
          <div className="lg:flex lg:flex-col gap-8 my-10 max-w-87.5 ml-auto hidden ">
            <NewsLetter
              heading="Subscribe"
              description="Get the latest news and updates"
              label="Enter your email"
              placeholder="Enter your email"
              buttonText="Subscribe"
            />
            <div className="my-50 hidden lg:block">
              <ExploreBlog
                width="w-[80%]"
                href="#"
                image="/images/blog/blog-aside-image.png"
                heading="Explore AI Services"
                icon="/icons/arrow-diagonal.svg"
              />
            </div>
            <div className="my-50 hidden lg:block">
              <ExploreBlog
                width="w-[70%]"
                href="#"
                image="/images/blog/blog-aside-image2.jpg"
                heading="Explore Tailored Software Solutions"
                icon="/icons/arrow-diagonal.svg"
              />
            </div>
            <div className="my-50 hidden lg:block">
              <ExploreBlog
                width="w-[70%]"
                href="#"
                image="/images/blog/blog-aside-image2.jpg"
                heading="Explore Tailored Software Solutions"
                icon="/icons/arrow-diagonal.svg"
              />
            </div>
          </div>
        </aside>
      </div>

      <div className="py-10">
        <AllBlogs blogsData={apiData} />
      </div>
    </main>
  );
}
