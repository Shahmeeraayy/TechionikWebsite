"use client";
// pages/_app.tsx
import { useState, useEffect } from "react";
import { TermsHeader, TermsDataItem } from "@/data/TermsData";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";

interface TermsConditionsProps {
  data: TermsHeader;
  innerData: TermsDataItem[];
}

const TermsConditions = ({ data, innerData }: TermsConditionsProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const toc = innerData.flatMap((item) => item.toc ?? []);

  useEffect(() => {
    // 1. Select all headings that have an ID
    const headings = document.querySelectorAll("h2[id], h3[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Matches privacy policy offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(id);
  };

  return (
    <div className="max-w-8xl mx-auto md:px-10 px-4 mt-30 sm:px-6 lg:px-20 space-y-20">
      <div className="space-y-10">
        <h1 className="text-muted text-4xl font-bold">{data.title}</h1>
        <p className="text-muted leading-relaxed">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20">
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32">
            <nav className="flex flex-col">
              {toc.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`transition-all border-l-2 py-3 pl-4 scroll-smooth duration-100 text-sm ${
                      isActive
                        ? "text-primary-dark border-[#F05323] font-medium"
                        : "text-muted hover:text-gradient-dark border-gray-700 hover:border-[#F05323]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <div className="col-span-1 lg:col-span-9">
          {innerData.map((item, idx) => (
            <div
              key={idx}
              className="prose prose-invert max-w-none prose-h2:scroll-mt-32 prose-p:text-gray-400 space-y-5"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))}
        </div>
      </div>
      <FooterContact />
    </div>
  );
};

export default TermsConditions;