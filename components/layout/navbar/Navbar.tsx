"use client";
import React from "react";
import LoadingLink from "@/components/LoadingLink";
import { Navlink } from "@/app/api/menu/utils/buildnavlinks";

import Button from "@/components/Button";
import Image from "next/image";
import MegaMenu from "./megamenu";
import MobileMenu from "./mobileNav";

interface NavMenuProps {
  navLinks: Navlink[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks }) => {
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(
    null,
  );

  return (
    <>
      <nav className="hidden md:flex gap-8 items-center justify-center flex-1 font-inter text-[14px] h-full">
        {navLinks.map((link) => {
          if (link.isMega) {
            const isOpen = activeMegaMenu === link.name;

            return (
              <div
                key={link.name}
                className="static h-full flex items-center"
                onMouseEnter={() => setActiveMegaMenu(link.name)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <LoadingLink
                  href={link.href || "#"}
                  className="inline-flex items-center gap-2 text-white hover:text-[#F05323] font-medium transition-colors relative z-10 py-4"
                  onClick={() => {
                    setActiveMegaMenu(null);
                  }}
                >
                  {link.name}
                  <Image
                    src="/icons/dropdown.svg"
                    alt="arrow"
                    width={10}
                    height={10}
                    className={`transition-transform duration-300 text-foreground opacity-80 ${isOpen ? "rotate-180 text-[#F05323]" : ""}`}
                  />
                </LoadingLink>
                <MegaMenu
                  isOpen={isOpen}
                  onClose={() => setActiveMegaMenu(null)}
                  data={link.children || []}
                  parentSlug={link.href?.replace(/^\/+/, "") || ""}
                />
              </div>
            );
          }

          if (link.type === "button") {
            return (
              <Button
                key={link.name}
                text={link.name}
                href={link.href}
                size="medium"
                radius="full"
                className="ml-2"
              />
            );
          }

          return (
            <LoadingLink
              key={link.name}
              href={link.href!}
              className="text-white hover:text-[#F05323] font-medium transition-colors py-4"
            >
              {link.name}
            </LoadingLink>
          );
        })}
      </nav>

      {/* Outside the nav so md:hidden works correctly */}
      <MobileMenu navLinks={navLinks} />
    </>
  );
};

export default NavMenu;
