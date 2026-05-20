import React from "react";
import Image from "next/image";
// You may need to install react-icons: npm install react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

export interface AuthorProfileProps {
  name: string;
  image: string;
  role: string;
  bio?: string;
  socials?: {
    platform: string;
    icon?: string;
    href: string;
  }[];
  articleCount?: number;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({
  name,
  image,
  role,
  bio = "Expert content writer sharing insights on technology and AI.",
  socials = [],
  articleCount = 0,
}) => {
  const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("facebook")) return <FaFacebookF />;
    if (p.includes("twitter") || p.includes("x")) return <FaTwitter />;
    if (p.includes("linkedin")) return <FaLinkedinIn />;
    if (p.includes("instagram")) return <FaInstagram />;
    return <FaGlobe />;
  };

  return (
    <div className="flex flex-col gap-12 max-w-7xl w-full mx-auto p-4 md:p-8">
      {/* --- TOP CARD SECTION --- */}
      <div className="relative w-full min-h-[350px] bg-[#16161A] rounded-[32px] p-6 md:p-10 border border-[#2A2A34] overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
        {/* Background Decorative Graphic */}
        <div className="absolute right-0 top-0 h-full w-full md:w-2/3 opacity-40 md:opacity-90 pointer-events-none">
          <div className="w-full h-full bg-[url('/authorcardimg.png')] bg-cover md:bg-contain bg-no-repeat bg-center md:bg-right blend-mode-overlay"></div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0 z-10">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 p-[3px] flex items-center justify-center shadow-lg shadow-orange-500/20">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#16161A]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Card Text Content */}
        <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500/10 text-[#F05323] border border-orange-500/20 px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
              {role}
            </span>
            {articleCount > 0 && (
              <span className="text-gray-500 text-sm">
                • {articleCount} Articles
              </span>
            )}
          </div>

          <h1 className="text-3xl capitalize md:text-5xl font-bold text-white tracking-tight">
            {name}
          </h1>

          {/* Dynamic Social Icons */}
          <div className="flex gap-3 mt-2">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#2A2A34] rounded-full text-gray-400 hover:text-white  hover:border-[#F05323] transition-all duration-300 bg-[#1A1A1C]"
              >
                {/* LOGIC FIXED HERE: */}
                {social.icon &&
                (social.icon.startsWith("/") ||
                  social.icon.startsWith("http")) ? (
                  // If it's a file path, render the Image
                  <div className="relative w-5 h-5">
                    <Image
                      src={social.icon}
                      alt={social.platform}
                      fill
                      className="object-contain invert opacity-70 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  // Else fallback to React Icon
                  getSocialIcon(social.platform)
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM BIO SECTION --- */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
          About{" "}
          <span className="text-dark-gradient">
            Author
          </span>
        </h3>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted leading-relaxed font-normal">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
