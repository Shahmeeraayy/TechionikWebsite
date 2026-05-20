import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    // Set to false to enable automatic compression and resizing
    unoptimized: false,
    qualities: [40, 55, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-97d6482ef9c641e0bedb3123f8ca0b9d.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'www.techionik.com',
      },
      {
        protocol: 'https',
        hostname: 'techionik-nodejs-web-backend.onrender.com',
      },
    ],
    // Add AVIF support for even better compression than WebP
    // formats: ['image/avif', 'image/webp'],
  },
  // Ensure we are transpiling the heavy libraries we discussed
  transpilePackages: ["swiper", "framer-motion", "tsparticles", "react-tsparticles"],
};

export default withBundleAnalyzer(nextConfig);
