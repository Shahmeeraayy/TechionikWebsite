"use client";

import { useEffect, useState } from "react";

interface TOCProps {
  toc: { id: string; name: string }[];
}

export default function TOCSidebar({ toc }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -80% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [toc]);

  return (
    <nav className="flex flex-col">
      {toc.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                const offset = 120; // adjust scroll offset if header is fixed
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
              setActiveId(item.id);
            }}
            className={`transition-all border-l-2 py-3 pl-4 scroll-smooth duration-100 text-sm ${
              isActive
                ? "gradient-text border-[#F05323] font-medium"
                : "text-muted hover:gradient-text border-gray-700 hover:border-[#F05323]"
            }`}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}
