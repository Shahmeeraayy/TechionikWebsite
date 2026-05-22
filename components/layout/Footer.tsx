"use client";

import React, { useState } from "react";
import LoadingLink from "@/components/LoadingLink";
import Image from "next/image";
import { motion } from "framer-motion";
import AskAI from "../footerAI_Fields";

const socialIcons = [
  {
    src: "/icons/browser.svg",
    alt: "Browser",
    href: "https://dribbble.com/Techionik",
  },
  {
    src: "/icons/be.svg",
    alt: "Be",
    href: "https://www.behance.net/techionikltd",
  },
  {
    src: "/icons/linkedin.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/techionik/",
  },
  {
    src: "/icons/facebook.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/techionik",
  },
  {
    src: "/icons/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/techionik/",
  },
  {
    src: "/icons/twitter.svg",
    alt: "Twitter",
    href: "https://x.com/i/flow/login?redirect_after_login=%2Ftechionik",
  },
  {
    src: "/icons/pinterst.svg",
    alt: "Pinterest",
    href: "https://www.pinterest.com/techionik1/",
  },
];
const Footer = () => {
  const [open, setOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "true");
    setOpen(false);
  };
  return (
    <footer className="bg-black text-gray-300 text-sm w-full">
      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className=" mx-auto md:px-10 px-4 py-8 sm:px-6 lg:px-20 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary shrink-0">
            <LoadingLink href="/">
              <Image
                src="/logo.png"
                alt="Techionik Logo"
                width={242}
                height={42}
              />
            </LoadingLink>
          </div>

          {/* Address Pills */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Image
                src="/icons/england.svg"
                alt="England"
                width={24}
                height={24}
              />
              22 A High Street, Southend-on-Sea, United Kingdom
              <br />
              SS1 1DQ
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Image
                src="/icons/pakistan.svg"
                alt="pakistan"
                width={24}
                height={24}
              />
              🇵🇰 224 A Iqbal Avenue Phase 1,
              <br /> Lahore
            </span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER LINKS */}
      <div className="mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 py-12">
          {/* Company */}
          <div>
            <h4 className="mb-4 gradient-text">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Client Reviews", href: "/our-clients" },
                { label: "How We Work", href: "/how-we-work" },
              ].map((item) => (
                <li key={item.label}>
                  <LoadingLink
                    href={item.href}
                    className="hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Tech Stack */}
          <div>
            <h4 className="mb-4 gradient-text">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Angular",
                "JavaScript",
                "Python",
                "Laravel",
                "Node JS",
                "Microsoft Azure",
              ].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 gradient-text">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Software Development", href: "/services/software-development" },
                {
                  label: "Application Development",
                  href: "/services/application-development",
                },
                {
                  label: "AI & Machine Learning",
                  href: "/services/ai-ml",
                },
                {
                  label: "Data & Analytics",
                  href: "/services/data-analytics",
                },
                {
                  label: "Quality Assurance",
                  href: "/services/quality-assurance",
                },
                { label: "Infrastructure & DevOps", href: "/services/infrastructure-devops" },
                { label: "Integration & APIs", href: "/services/integration-api" },
                { label: "Automation & Process", href: "/services/automation" },
                { label: "Design", href: "/services/design" },
              ].map((item) => (
                <li key={item.label}>
                  <LoadingLink
                    href={item.href}
                    className="hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Hire Developer */}
          <div>
            <h4 className="mb-4 gradient-text">Hire Developer</h4>
            <ul className="space-y-2 text-sm">
              {[
                {
                  label: "AI & Automation Expert",
                  href: "#",
                },
                {
                  label: "Software Development Expert",
                  href: "#",
                },
                {
                  label: "Data Science Expert",
                  href: "#",
                },
                {
                  label: "Business Intelligence Expert",
                  href: "#",
                },
                {
                  label: "Staff Augmentation Expert",
                  href: "#",
                },
                { label: "Outsourcing Expert", href: "#" },
                { label: "Digital Marketing Expert", href: "#" },
                { label: "Graphic Designing Expert", href: "#" },
                { label: "UI/UX Designing Expert", href: "#" },
                {
                  label: "Web Development Expert",
                  href: "#",
                },
              ].map((item) => (
                <li key={item.label}>
                  <LoadingLink
                    href={item.href}
                    className="hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 gradient-text">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "blogs", href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "contact us", href: "/contact-us" },
                { label: "Industries", href: "/industries" },
                { label: "How We Work", href: "/how-we-work" },
                { label: "Authors", href: "/author" },
                { label: "Our Clients", href: "/our-clients" },
                {
                  label: "Location Based Services",
                  href: "/location-based-services",
                },
                { label: "Technology Page", href: "/technology" },
              ].map((item) => (
                <li key={item.label}>
                  <LoadingLink
                    href={item.href}
                    className="hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h4 className="mb-4 gradient-text">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Terms of Services", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Careers", href: "/careers" },
                // { label: "Sitemap", href: "/sitemap" },
              ].map((item) => (
                <li key={item.label}>
                  <LoadingLink
                    href={item.href}
                    className="hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </LoadingLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA + CONTACT */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8">
          {/* Button */}
          <div>
            <AskAI/>
          </div>

          {/* Contact Pills */}
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              // {
              //   icon: "/icons/email.svg",
              //   text: "info@techionik.com",
              //   href: "mailto:info@techionik.com",
              // },
              {
                icon: "/icons/england.svg",
                text: "+44 744 1396 181",
                href: "tel:+447441396181",
              },
              // {
              //   icon: "/icons/usa.svg",
              //   text: "+44 744 1396 181",
              //   href: "tel:+447441396181",
              // },
              {
                icon: "/icons/pakistan.svg",
                text: "+92 329 2446644",
                href: "tel:+923292446644",
              },
            ].map((c, idx) => (
              <LoadingLink
                key={idx}
                href={c.href}
                className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2"
              >
                <Image src={c.icon} alt={c.text} width={24} height={24} />
                {c.text}
              </LoadingLink>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-gray-400 py-4">
          <p className="text-left md:text-sm">
            © Copyright Techionik. All Rights Reserved
            <br />
            Developed by Techionik
          </p>

          {/* Partner Logos Scrolling */}
          <div className="overflow-hidden w-full md:w-[50%] h-16 flex items-center">
            <div className="flex animate-scroll gap-6">
              {[
                "/icons/Cluch.svg",
                "/icons/google-review.svg",
                "/icons/upwork.svg",
                "/icons/RMG.svg",
                "/icons/google-firm.svg",
                "/icons/layoffhubai.svg",
                "/icons/Pergola-Plus.svg",
                "/icons/accoutions.svg",
                "/icons/RMG.svg",
                "/icons/Assetra.svg",
              ].map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt="Partner"
                  width={80}
                  height={40}
                  className="h-8 sm:h-10"
                />
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1 py-2">
            {socialIcons.map((icon) => (
              <LoadingLink
                key={icon.alt}
                href={icon.href}
                target="blank"
                className="flex h-8 w-8 cursor-pointer items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={34}
                  height={34}
                  className="h-8.5 w-8.5"
                />
              </LoadingLink>
            ))}
          </div>
        </div>
      </div>

      {/* COOKIE BAR */}
      {open && (
        <div className="fixed bottom-0 w-full border-t border-white/20 bg-gray-900/80 hover:bg-gray-900/90 px-4 py-2 backdrop-blur-md z-200">
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-400 text-center md:text-left"
            >
              <p>
                By continuing to use this site, you agree to our{" "}
                <span className="text-orange-500 cursor-pointer">
                  cookie policy
                </span>{" "}
                and{" "}
                <LoadingLink
                  href="/privacy-policy"
                  className="text-orange-500 cursor-pointer"
                >
                  <span className="text-orange-500 cursor-pointer">
                    privacy policy
                  </span>
                </LoadingLink>
                .
              </p>
              <button
                onClick={handleClose}
                className="flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white font-medium text-base hover:bg-emerald-800 pointer-events-auto"
              >
                Got it
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      )}
    </footer>
  );
};

export default Footer;
