"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import Image from "next/image";
import { useLoading } from "@/app/providers/LoadingProvider";
import { CALENDLY_URL } from "@/utils/links";

const sizeClasses = {
  small: "px-4 h-10 text-sm",
  medium: "pl-[16px] pr-[8px] h-12 text-[16px]",
  large: "px-8 h-16 text-lg",
};

const radiusClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const variantClasses = {
  gradient:
    "bg-gradient-to-r from-[#F05323] to-[#8A3014] text-white hover:scale-105 transition-transform duration-300 px-6 py-2 rounded-4xl font-semibold",
  glass:
    "bg-white/30 backdrop-blur-md border border-white/40 rounded-4xl text-white font-semibold hover:bg-white/40 hover:scale-105 transition-transform duration-300",
};

// Define the object with a specific type to satisfy TypeScript indexing
const iconRotateClasses: Record<number, string> = {
  0: "rotate-0",
  45: "rotate-[-45deg]",
  60: "rotate-[-60deg]",
  90: "rotate-[-90deg]",
  "-45": "rotate-[45deg]",
  "-60": "rotate-[60deg]",
  "-90": "rotate-[90deg]",
};

interface ButtonProps {
  children?: ReactNode;
  text?: string;
  href?: string;
  icon?: string;
  hoverIcon?: string;
  showIcon?: boolean;
  size?: "small" | "medium" | "large";
  radius?: "md" | "lg" | "full";
  variant?: "gradient" | "glass";
  className?: string;
  iconRotate?: 0 | 45 | 60 | 90 | -45 | -60 | -90;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = React.memo(
  ({
    ariaLabel,
    text,
    href,
    icon,
    hoverIcon,
    showIcon = true,
    size = "small",
    radius = "full",
    variant = "glass",
    className = "",
    iconRotate = 0,
    onClick,
    type = "button",
  }) => {
    const { setIsLoading } = useLoading();
    const isContactHref = href === "/contact" || href === "/contact-us";
    const isBookingLabel = /book|consultation|appointment|let['’]?s talk|talk to an expert/i.test(
      `${text ?? ""} ${ariaLabel ?? ""}`
    );
    const effectiveHref = isContactHref && isBookingLabel ? CALENDLY_URL : href;
    const isExternalHref =
      effectiveHref?.startsWith("http://") ||
      effectiveHref?.startsWith("https://");

    // Added 'flex' to ensure text and icon sit side-by-side
    const buttonClasses = `
      group flex items-center justify-between gap-3
      transition-all duration-300 
      ${sizeClasses[size]}
      ${radiusClasses[radius]}
      ${variantClasses[variant]}
      ${className}
    `;

    const handleAction = (e: React.MouseEvent) => {
      if (
        effectiveHref &&
        !effectiveHref.startsWith("#") &&
        !isExternalHref &&
        !effectiveHref.startsWith("mailto:") &&
        !effectiveHref.startsWith("tel:")
      ) {
        setIsLoading(true);
      }
      if (onClick) onClick();
    };

    const content = (
      <>
        {text && <span>{text}</span>}

        {showIcon && icon && (
          <span className="relative flex items-center justify-center">
            <Image
              src={icon}
              alt="icon"
              width={32}
              height={24}
              // Accessing the record safely
              className={`transition-transform duration-300 ${iconRotateClasses[iconRotate] || "rotate-0"}`}
            />

            {hoverIcon && (
              <span className="hidden group-hover:block absolute inset-0">
                <Image src={hoverIcon} alt="hover icon" fill className="object-contain" />
              </span>
            )}
          </span>
        )}
      </>
    );

    if (effectiveHref) {
      if (isExternalHref) {
        return (
          <a
            href={effectiveHref}
            className={buttonClasses}
            onClick={handleAction}
            aria-label={ariaLabel || text}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={effectiveHref} className={buttonClasses} onClick={handleAction} aria-label={ariaLabel || text}>
          {content}
        </Link>
      );
    }

    return (
      <button className={buttonClasses} type={type} onClick={handleAction} aria-label={ariaLabel || text}>
        {content}
      </button>
    );
  }
);

export default Button;
