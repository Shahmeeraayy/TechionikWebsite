// components/ExpertGrid.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DetailedBlogDummyData } from "@/data/blogDetailedData";
import { createSlug } from "@/utils/slugify";
import { getAuthors } from "@/app/api/author/author.api";
import { getAuthorBySlug } from "@/app/api/author/authorAPIBySlug.api";

// --- TYPES ---
export interface ExpertSectionData {
  title: string;
  experts: {
    id: number | string;
    name: string;
    role: string;
    image: string;
    badgeTop: string | number;
    badgeBottom: string;
  }[];
}

interface DisplayAuthor {
  id: string | number;
  name: string;
  image: string;
  role: string;
  slug: string;
  badgeMainText: string | number;
  badgeSubText: string;
}

interface ExpertGridProps {
  data?: ExpertSectionData;
  disableLinks?: boolean; // <--- NEW PROP
}

// --- CARD COMPONENT ---

const ExpertCard: React.FC<{ author: DisplayAuthor; href?: string }> = ({
  author,
  href,
}) => {
  // 1. Define the content of the card (The UI part)
  const CardContent = (
    <div className="relative group bg-[--color-bg] rounded-4xl overflow-hidden border border-[#2A2A34] transition-transform hover:scale-[1.02] h-full flex flex-col">
      {/* Badge */}
      <div className="absolute top-0 right-0 z-20 bg-[#16161A] backdrop-blur-md text-white px-4 py-3 rounded-bl-2xl text-xs font-medium border-b border-l border-white/10 text-center leading-tight">
        <span className="block text-sm font-bold">{author.badgeMainText}</span>
        <span className="block text-gray-300">{author.badgeSubText}</span>
      </div>

      {/* Image */}
      <div className="relative h-64 w-full rounded-b-2xl bg-[#2A2A34]">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover object-top rounded-b-2xl"
        />
      </div>

      {/* Info */}
      <div className="p-6 text-center mt-auto">
        <h3
          className={`text-foreground text-xl font-bold transition-colors ${href ? "group-hover:text-primary" : ""}`}
        >
          {author.name}
        </h3>
        <p className="text-[#F05323] text-sm font-medium mt-1 uppercase tracking-wide">
          {author.role}
        </p>
      </div>
    </div>
  );

  // 2. Conditional Rendering: Wrap in Link ONLY if href exists
  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return <div className="block h-full">{CardContent}</div>;
};

// --- MAIN COMPONENT ---
const ExpertGrid = async ({ data, disableLinks = false }: ExpertGridProps) => {
  let sectionTitle = "Our Experts";
  let finalAuthors: DisplayAuthor[] = [];

  // --- LOGIC ---
  if (data) {
    sectionTitle = data.title;
    finalAuthors = data.experts.map((expert) => ({
      id: expert.id,
      name: expert.name,
      image: expert.image,
      role: expert.role,
      slug: createSlug(expert.name),
      badgeMainText: expert.badgeTop,
      badgeSubText: expert.badgeBottom,
    }));
  } else {
    // 1. Fetch top-level Authors from the API directly
    const apiAuthors = await getAuthors();

    // 2. Fetch detailed profiles concurrently to get exact roles and their blog counts
    const detailedAuthorsPromises = apiAuthors.map((author) =>
      getAuthorBySlug(author.slug),
    );
    const detailedAuthorsResults = await Promise.all(detailedAuthorsPromises);

    // 3. Map exact API data into final presentation shape
    finalAuthors = apiAuthors.map((author, index) => {
      const details = detailedAuthorsResults[index]?.data;
      const authorDetail = details?.author;
      const blogsCount = details?.blogs?.length || 0;

      return {
        id: author.id || author.slug || index,
        name: author.name,
        image:
          author.imageUrl || authorDetail?.avatar || "/images/blog/avatar.png",
        role: authorDetail?.role || "author",
        slug: author.slug,
        badgeMainText: blogsCount,
        badgeSubText: blogsCount === 1 ? "Article" : "Articles",
      };
    });
  }

  return (
    <section className="bg-[--color-bg] pt-20 pb-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {finalAuthors.map((author) => (
            <ExpertCard
              key={author.id}
              author={author}
              // Only pass the href if links are NOT disabled
              href={disableLinks ? undefined : `/author/${author.slug}`}
            />
          ))}
        </div>

        {/* Only show 'View More' button if links are enabled, or you can control this separately */}
        {!disableLinks && (
          <div className="flex justify-center mt-16">
            <button className="flex items-center gap-4 bg-[#1A1A1C] text-gray-300 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 group">
              <span className="text-sm font-medium">View More</span>
              <div className="w-8 h-8 bg-[#F05323] rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-90">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpertGrid;
