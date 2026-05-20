// app/components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./navbar/Navbar";
import { getNavLinks } from "@/app/api/menu/utils/buildnavlinks";
import Button from "../Button";
import MobileMenu from "./navbar/mobileNav";
import LoadingLink from "../LoadingLink";

const Header = async () => {
  // Fetch navigation links on the server
  const navLinks = await getNavLinks();

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-surface/60 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-[3840px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-15 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <LoadingLink href="/">
            <Image
              src="/Logo.webp"
              alt="Techionik Logo"
              width={230}
              height={42}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 220px"
              className="antialiased"
            />
          </LoadingLink>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block">
          <NavMenu navLinks={navLinks} />
        </div>

        {/* Desktop CTA button */}
        <div className="hidden lg:block">
          <Button
            text="Contact Us"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="/contact-us"
            variant="glass"
            className="inline-flex z-50 text-foreground"
          />
        </div>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
