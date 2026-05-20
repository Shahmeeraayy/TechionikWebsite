"use client";

import Link from "next/link";
import { useLoading } from "@/app/providers/LoadingProvider";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LoadingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LoadingLink({ href, children, className, onClick, ...props }: LoadingLinkProps) {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const isExternalHref = href.startsWith("http://") || href.startsWith("https://");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      href && 
      !href.startsWith("#") && 
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:")
    ) {
      let targetPath = href.split('?')[0].split('#')[0];
      targetPath = targetPath.endsWith('/') && targetPath.length > 1 ? targetPath.slice(0, -1) : targetPath;
      
      let currentPath = pathname || '/';
      currentPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

      if (targetPath !== currentPath) {
        setIsLoading(true);
      }
    }
    if (onClick) onClick(e);
  };

  if (isExternalHref) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
