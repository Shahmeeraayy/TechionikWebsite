// "use client";
// import {useState} from "react";
// import {caseStudyCategories} from "@/data/caseStudyCategoryData";
// import CategoryComponent from "@/components/sections/blog/categoryComponent";
// import BlogComponent from "@/components/sections/blog/blogComponent";
// import { caseStudyData } from "@/data/caseStudyData";
// import { CaseStudyCategory } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";

// interface CaseStudyCategoryProps{
//     data: CaseStudyCategory[]
// }

// const CaseStudyPage = ({data}: CaseStudyCategoryProps)=>{  
//     const filters = ['Industries', 'Services', 'Technologies & Platforms']
//     const [activeFilter, setActiveFilter] = useState<string | null>(null)
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    
//     const handleTabClick = (filter: string) => {
//         setActiveFilter(filter === activeFilter ? null : filter)
//         setSelectedCategory(null) // Reset category when tab changes
//     }
    
//     const handleCategorySelect = (categoryId: string) => {
//         setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
//     }
    
//     // Filter case studies by selected category ID (not affected by tabs)
//     const filteredCaseStudies = selectedCategory 
//         ? caseStudyData.filter((caseStudy) => 
//                 caseStudy.blogCategory.includes(selectedCategory)
//         )
//         : caseStudyData
    
//     // Filter categories by active tab
//     const filteredCategories = activeFilter 
//         ? caseStudyCategories.filter((category) => category.type === activeFilter)
//         : caseStudyCategories
    
//     return(
//         <div className="md:px-10 sm:px-6 lg:px-20 py-20">
//             <div className="max-w-7xl mx-auto">
//             <div className="flex gap-3 flex-wrap my-10">
//             {filters.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => handleTabClick(item)}
//                 className={`px-4 py-2 rounded-full text-sm transition-all
//                   ${
//                     activeFilter === item
//                       ? " text-white bg-primary-dark"
//                       : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
//                   }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//          <div>
//              <CategoryComponent categories={filteredCategories as any} onSelect={handleCategorySelect} />
//          </div>
//             </div>

//          <div className="flex flex-wrap gap-6 max-w-7xl mx-auto my-10">
//             {filteredCaseStudies.map((caseStudy: any) => (
//                 <BlogComponent key={caseStudy.id} blog={caseStudy} />
//             ))}
//          </div>
//         </div>
//     )

// }

// export default CaseStudyPage;

"use client";

// import BlogComponent from "@/components/sections/blog/blogComponent";
// import CategoryComponent from "@/components/sections/blog/categoryComponent";
// import { DummyBlogData } from "@/data/blogData";
// import { useState } from "react";
// import { CaseStudyCategory } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";
// import { getMainCaseStudy } from "../api/All-CaseStudies/utils/getCaseStudies";
// import BlogComponent from "@/components/sections/blog/blogComponent";
// // import { Category } from "../api/blog-category/utils/transformBlogCategory";
// // import { getMainBlog } from "../api/blog/utils/getBlog";

// interface BlogPageClientProps {
// caseStudyCategories: CaseStudyCategory[]
// allCaseStudies: getMainCaseStudy
// }

// const BlogPageClient = ({ caseStudyCategories = [], allCaseStudies = [] }: BlogPageClientProps) => {
//   const [activeCategories, setActiveCategories] = useState<string | null>(null);

//   const filteredBlogs = activeCategories
//     ? allCaseStudies.filter((blog) => blog.categories.includes(activeCategories))
//     : blogs;

//   const featuredBlogs = filteredBlogs.filter((blog) => blog.isFeatured);
//   const regularBlogs = filteredBlogs.filter((blog) => !blog.isFeatured);

//   return (
//     <>
//       <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
//         <h1 className="text-muted mt-6">Blog</h1>
//         <h2 className="text-muted">
//           All <span className="gradient-text">Categories</span>
//         </h2>
//         <CategoryComponent
//           onSelect={setActiveCategories}
//           categories={caseStudyCategories}
//         />
//       </section>

//       <section className="md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
//         {featuredBlogs.length > 0 && (
//           <section className="my-10">
//             <div className="flex flex-wrap gap-6">
//               {featuredBlogs.map((caseStudy) => (
//                 <BlogComponent key={caseStudy.id} blogs={blog} />
//               ))}
//             </div>
//           </section>
//         )}

//         <section className="my-10 min-w-full">
//           <div className="flex flex-wrap gap-6">
//             {regularBlogs.map((caseStudy) => (
//               <BlogComponent key={caseStudy.id} blogs={blog} />
//             ))}
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default BlogPageClient;
"use client";
import CategoryComponent from "@/components/sections/blog/categoryComponent";
import BlogComponent from "@/components/sections/blog/blogComponent"; // Ensure this is imported
import { useState } from "react";
import { CaseStudyCategory } from "../api/caseStudy-Category/utils/caseStudyCategoryUtils";
import { getMainCaseStudy } from "../api/All-CaseStudies/utils/getCaseStudies";

interface BlogPageClientProps {
  caseStudyCategories: CaseStudyCategory[];
  allCaseStudies: getMainCaseStudy[]; // Added [] to make it an array
}

const BlogPageClient = ({ caseStudyCategories = [], allCaseStudies = [] }: BlogPageClientProps) => {
  const [activeCategories, setActiveCategories] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    // Toggle: if already active, deactivate; otherwise activate
    setActiveCategories(activeCategories === categoryName ? null : categoryName);
  };

  const filteredBlogs = activeCategories
    ? allCaseStudies.filter((blog) => blog.categories.includes(activeCategories))
    : allCaseStudies;

  const featuredBlogs = filteredBlogs.filter((blog) => blog.isFeatured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.isFeatured);

  return (
    <>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
        <h1 className="text-muted mt-6">Case Studies</h1>
        <h2 className="text-muted">
          All <span className="gradient-text">Categories</span>
        </h2>
        <CategoryComponent
          onSelect={handleCategorySelect}
          activeCategory={activeCategories}
          categories={caseStudyCategories}
        />
      </section>

      <section className="md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
        {featuredBlogs.length > 0 && (
          <section className="my-10">
            <div className="flex flex-wrap gap-6">
              {featuredBlogs.map((CaseStudy) => (
                <BlogComponent parentSlug="case-study" key={CaseStudy.id} blogs={CaseStudy} />
              ))}
            </div>
          </section>
        )}

        <section className="my-10 min-w-full">
          <div className="flex flex-wrap gap-6">
            {regularBlogs.map((CaseStudy) => (
              <BlogComponent parentSlug="case-study" key={CaseStudy.id} blogs={CaseStudy} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default BlogPageClient;