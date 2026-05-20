"use client";

import Button from "@/components/Button";
import { Category } from "@/app/api/blog-category/blogCategory.api";
import { useState } from "react";
import Image from "next/image";

interface categoryProps {
  categories: Category[];
  onSelect: (name: string) => void;
  activeCategory: string | null;
}

const CategoryComponent = ({
  onSelect,
  categories,
  activeCategory,
}: categoryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const max_per_page = 8;
  const Total_pages = Math.ceil(categories.length / max_per_page);
  const StartIndex = currentPage * max_per_page;
  const EndIndex = StartIndex + max_per_page;
  const categories_per_page = categories.slice(StartIndex, EndIndex);

  return (
    <div className="max-w-8xl">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 min-h-28">
        {categories_per_page.map((cat) => (
          <div className="relative group" key={cat.id}>
            {/* Outer wrapper: rounded border, dark bg, fixed height */}
            <div
              className="relative w-full h-14 overflow-hidden rounded-xl items-center border border-white/10 bg-[#1a1a1a] cursor-pointer"
              onClick={() => onSelect(cat.name)}
            >
              {/* 1. BACKGROUND IMAGE: visible on hover/active */}
              <Image
                src="/images/ParentServices/ServiceHeromedia/Service_Parent_Page_Section.svg"
                alt="background"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover transition-opacity duration-300 z-0 ${
                  activeCategory === cat.name
                    ? "opacity-60"
                    : "opacity-0 group-hover:opacity-60"
                }`}
              />

              {/* 2. CATEGORY NAME: centered left with padding */}
              <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-white text-sm font-medium whitespace-nowrap pointer-events-none">
                {cat.name}
              </span>

              {/* 3. BORDER LINES: Top-right corner accent */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-30">
                <div
                  className={`absolute top-0 right-0 w-32 h-[1.5px] bg-primary-dark transition-opacity duration-500 ${
                    activeCategory === cat.name
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`absolute top-0 right-0 w-[1.5px] h-32 bg-primary-dark transition-opacity duration-500 ${
                    activeCategory === cat.name
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* 4. ARROW ICON: right-center, shown on hover/active */}
              <div
                className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 pointer-events-none ${
                  activeCategory === cat.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="bg-orange-600 rounded-full p-1.5 flex items-center justify-center">
                  <Image
                    src="/icons/arrow-diagonal.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-13 flex justify-center items-center gap-3">
        {Array.from({ length: Total_pages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`${
              index === currentPage ? "bg-primary-dark" : "bg-(--color-muted)"
            } w-4 h-4 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
