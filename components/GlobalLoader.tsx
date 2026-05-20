"use client";

import React from "react";
import { useLoading } from "@/app/providers/LoadingProvider";
import Image from "next/image";

export default function GlobalLoader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  // Change this to use a custom asset:
  // const customAsset: any = "/loader.gif"; // or "/loader.mp4" or "/loader.png"
  const customAsset: any = null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col items-center gap-6">
        {customAsset ? (
          <div className="relative w-48 h-48 flex items-center justify-center">
            {customAsset.endsWith(".mp4") ? (
              <video
                src={customAsset}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={customAsset}
                alt="Loading..."
                fill
                className="object-contain"
              />
            )}
          </div>
        ) : (
          <div className="relative w-20 h-20">
            {/* Premium Multi-layer Spinner */}
            <div className="absolute inset-0 border-4 border-[#f05323]/10 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-[#f05323] border-l-[#f05323]/30 rounded-full animate-spin"></div>

            <div className="absolute inset-3 border-2 border-b-[#f05323] border-r-[#f05323]/20 rounded-full animate-spin [animation-duration:1.5s]"></div>

            {/* Inner Glow Center */}
            <div className="absolute inset-[35%] bg-[#f05323] rounded-full animate-pulse shadow-[0_0_20px_#f05323]"></div>
          </div>
        )}

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-semibold tracking-[0.2em] text-xs uppercase opacity-80">
            Techionik
          </p>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#f05323] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 bg-[#f05323] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 bg-[#f05323] rounded-full animate-bounce"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
