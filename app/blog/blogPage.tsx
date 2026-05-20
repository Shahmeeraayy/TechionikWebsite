"use client";

import BlogComponent from "@/components/sections/blog/blogComponent";
import CategoryComponent from "@/components/sections/blog/categoryComponent";
import { DummyBlogData } from "@/data/blogData";
import { useEffect, useState } from "react";
import { Category } from "@/app/api/blog-category/blogCategory.api";
import { MainBlog } from "../api/blog/blog.api";

interface BlogPageClientProps {
  categories: Category[];
  blogs: MainBlog[];
}

const BlogPageClient = ({ categories = [], blogs = [] }: BlogPageClientProps) => {
  const [activeCategories, setActiveCategories] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    // Toggle: if already active, deactivate; otherwise activate
    setActiveCategories(activeCategories === categoryName ? null : categoryName);
  };

  const filteredBlogs = activeCategories
    ? blogs.filter((blog) => blog.categories.includes(activeCategories))
    : blogs;

  const featuredBlogs = filteredBlogs.filter((blog) => blog.isFeatured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.isFeatured);

  return (
    <>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
        <h1 className="text-muted mt-6">Blog</h1>
        <h2 className="text-muted">
          All <span className="gradient-text">Categories</span>
        </h2>
        <CategoryComponent
          onSelect={handleCategorySelect}
          activeCategory={activeCategories}
          categories={categories}
        />
      </section>

      <section className="md:px-10 px-4 sm:px-6 lg:px-20 space-y-10">
        {featuredBlogs.length > 0 && (
          <section className="my-10">
            <div className="flex flex-wrap gap-6">
              {featuredBlogs.map((blog) => (
                <BlogComponent parentSlug="blog" key={blog.id} blogs={blog} />
              ))}
            </div>
          </section>
        )}

        <section className="my-10 min-w-full">
          <div className="flex flex-wrap gap-6">
            {regularBlogs.map((blog) => (
              <BlogComponent parentSlug="blog" key={blog.id} blogs={blog} />
            ))}
          </div>
        </section>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No blogs found in this category.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogPageClient;