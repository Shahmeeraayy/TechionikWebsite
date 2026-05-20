"use client";
import { MainBlog } from "@/app/api/blog/blog.api";
// import { MainBlog } from "../api/blog/blog.api";
// import Button from "@/components/Button";
// import { BlogData } from "@/data/blogData";
import { Calendar } from "lucide-react";
import Image from "next/image";
import LoadingLink from "@/components/LoadingLink"; 

interface BlogProps {
  blogs: MainBlog;
  parentSlug: string;
}

const BlogComponent = ({ blogs, parentSlug }: BlogProps) => {
  const { title, shortDescription, image, slug, date, layout, isFeatured } = blogs;

  // Format date to string if it's a Date object or any other type
  const formatDate = (dateValue: any): string => {
    if (typeof dateValue === 'string') {
      return dateValue;
    }
    if (dateValue && typeof dateValue === 'object' && 'toLocaleDateString' in dateValue) {
      return (dateValue as any).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return String(dateValue || '');
  };

  const formattedDate = formatDate(date);

  const isSideLayout = layout === "image-left" || layout === "image-right";
  const isStackedLayout =
    layout === "image-top" ||
    layout === "image-bottom" ||
    layout === "image-background";

  return (
    <LoadingLink
      href={`/${parentSlug}/${slug}`}
      className={`
        shrink-0 rounded-lg overflow-hidden shadow-lg bg-[#16161A] block transition-all hover:ring-2 hover:ring-[#F05323]
        ${isStackedLayout ? "w-full md:w-[47%] lg:w-[35%] xl:w-[25%] max-h-150" : ""}
        ${isSideLayout ? "w-full max-h-150 md:h-75" : ""}
      `}
    >
      {/* IMAGE BACKGROUND */}
      {layout === "image-background" && (
        <div className="relative h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-30"
          />

          <div className="relative z-10 h-full p-4 flex flex-col justify-end gap-2">
            {isFeatured && (
              <div className="flex items-center gap-2 bg-[--color-muted] w-fit px-3 py-1 rounded-2xl">
                <div className="w-2 h-2 bg-primary-dark rounded-full" />
                <span className="text-sm font-medium text-primary-dark">
                  Featured
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-200 line-clamp-3">{shortDescription}</p>

            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="text-[#F05323]" size={16} />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE TOP */}
      {layout === "image-top" && (
        <div className="flex flex-col h-full justify-around">
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="p-4 flex flex-col gap-2 flex-1 space-y-4">
            {isFeatured && (
              <div className="flex items-center gap-2 bg-[--color-muted] w-fit px-3 py-1 rounded-2xl">
                <div className="w-2 h-2 bg-primary-dark rounded-full" />
                <span className="text-sm font-medium text-primary-dark">
                  Featured
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-300 line-clamp-3">{shortDescription}</p>

            <div className="flex items-center gap-2 text-gray-500 mt-auto">
              <Calendar className="text-[#F05323]" size={16} />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE BOTTOM */}
      {layout === "image-bottom" && (
        <div className="flex flex-col h-full">
          <div className="p-4 flex flex-col gap-2 flex-1">
            {isFeatured && (
              <div className="flex items-center gap-2 bg-[--color-muted] w-fit px-3 py-1 rounded-2xl">
                <div className="w-2 h-2 bg-primary-dark rounded-full" />
                <span className="text-sm font-medium text-primary-dark">
                  Featured
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-300 line-clamp-3">{shortDescription}</p>

            <div className="flex items-center gap-2 text-gray-500 mt-auto">
              <Calendar className="text-[#F05323]" size={16} />
              <span>{formattedDate}</span>
            </div>
          </div>

          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* IMAGE LEFT */}
      {layout === "image-left" && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative w-full md:w-1/2 h-48 md:h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center gap-2">
            {isFeatured && (
              <div className="flex items-center gap-2 bg-[--color-muted] w-fit px-3 py-1 rounded-2xl">
                <div className="w-2 h-2 bg-primary-dark rounded-full" />
                <span className="text-sm font-medium text-primary-dark">
                  Featured
                </span>
              </div>
            )}
            <div className ="flex flex-col gap-7">
              {/* {blog.brandTitle && (
                <h3 className="text-muted">{blog.brandTitle}</h3>
              )} */}
              <h3 className="font-bold text-white">{title}</h3>

              {shortDescription && (
                <p className="text-gray-300 line-clamp-3">{shortDescription}</p>
              )}
              {/* {blog.btnText && blog.btnLink && (
                <Button
                  className="inline-flex w-full md:w-auto lg:w-[30%] justify-between"
                  variant="glass"
                  size="medium"
                  icon="/icons/arrow-right.svg"
                  showIcon={true}
                  text={blog.btnText}
                  href={blog.btnLink}
                />
              )} */}

              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="text-[#F05323]" size={16} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE RIGHT */}
      {layout === "image-right" && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center gap-6">
            {isFeatured && (
              <div className="flex items-center gap-2 bg-[--color-muted] border border-orange-500 w-fit px-3 py-1 rounded-2xl">
                <div className="w-2 h-2 bg-primary-dark rounded-full" />
                <span className="text-sm font-medium text-primary-dark">
                  Featured
                </span>
              </div>
            )}
            <div className ="flex flex-col gap-7">
              {/* {blog.brandTitle && (
                <h3 className="text-muted">{blog.brandTitle}</h3>
              )} */}
              <h3 className="font-bold text-white">{title}</h3>

              {shortDescription && (
                <p className="text-gray-300 line-clamp-3">{shortDescription}</p>
              )}
              {/* {blog.btnText && blog.btnLink && (
                <Button
                  className="inline-flex w-full md:w-auto lg:w-[30%] justify-between"
                  variant="glass"
                  size="medium"
                  icon="/icons/arrow-right.svg"
                  showIcon={true}
                  text={blog.btnText}
                  href={blog.btnLink}
                />
              )} */}

              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="text-[#F05323]" size={16} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-48 md:h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </LoadingLink>
  );
};

export default BlogComponent;
