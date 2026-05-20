import ExpertGrid from "@/components/OurExpert";
import { getAuthors } from "../api/author/author.api";

// Optional: Define metadata for SEO
export const metadata = {
  title: "Our Authors | Tech Blog",
  description:
    "Meet the expert writers and engineers behind our technical content.",
};

const AllAuthorsPage = async () => {
  const apiAuthors = await getAuthors();
  // Optional: You can create a simple hero data object if you want a banner
  const heroData = {
    brandTitle: "Authors",
    title: "Meet Our Team",
    description:
      "Get to know the brilliant minds sharing insights on AI, DevOps, and Cloud Computing.",
    // ... other hero props
    date: new Date(),
    id: 0,
    imageUrl: "",
    slug: "",
    layout: "image-background",
    href: "#",
  };

  // Structural schema for speakable and web mcp
  // const unifiedAuthorSchema = {
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
  //         "@id": "https://www.techionik.com/authors#webpage",
  //         "url": "https://www.techionik.com/authors",
  //         "name": "Our Authors & Technical Experts | Techionik",
  //         "about": { "@id": "https://www.techionik.com/#organization" },
  //         "description": "Meet the brilliant minds behind Techionik. Our authors are expert engineers and consultants sharing insights on AI, DevOps, and Cloud Computing.",
  //         "speakable": {
  //           "@type": "SpeakableSpecification",
  //           "cssSelector": [".authors-voice-narrative"]
  //         },
  //         "mainEntity": {
  //           "@type": "ItemList",
  //           "name": "Techionik Expert Authors",
  //           "numberOfItems": apiAuthors.length,
  //           "itemListElement": apiAuthors.map((author, index) => ({
  //             "@type": "ListItem",
  //             "position": index + 1,
  //             "item": {
  //               "@type": "Person",
  //               "name": author.name,
  //               "image": author.avatar || "/images/blog/avatar.png",
  //               "jobTitle": "Technical Author",
  //               "url": `https://www.techionik.com/author/${author.slug}`
  //             }
  //           }))
  //         }
  //       }
  //     ]
  //   };
  const topAuthorsNarrative = apiAuthors
    .slice(0, 5)
    .map((a) => a.name)
    .join(", ");

  return (
    <main className="min-h-screen bg-black">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedAuthorSchema) }}
      />

      {/* Hidden Narrator for Siri/Alexa */}
      <div className="authors-voice-narrative" style={{ display: "none" }}>
        {`Meet the Techionik expert team. Our authors include ${topAuthorsNarrative}, and more. They provide deep insights into custom software development and artificial intelligence.`}
      </div>
      {/* 1. (Optional) Hero Section */}
      {/* <AboutSection slides={[heroData]} /> */}
      <div className="h-24 bg-[#16161A]"></div>

      {/* 2. The Grid of All Authors */}
      {/* We reuse the component you already built! It automatically 
          deduplicates authors and counts their articles. */}
      <ExpertGrid />
    </main>
  );
};

export default AllAuthorsPage;
