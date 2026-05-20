"use client";

import Image from "next/image";
import { useState } from "react";
import WhyChoiceUs from "@/views/home/tabs/whyChoseUs";

const tabItems = [
  { id: "highlights", label: "Why Choose Us" },
  { id: "certifications", label: "Certifications" },
] as const;

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabItems)[number]["id"]>(
    "highlights",
  );

  return (
    <div className="mx-auto w-full">
      <div className="max-w-[3840px] mx-auto flex overflow-x-auto border-b border-gray-700 bg-surface px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`flex-shrink-0 py-3 px-6 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "bg-[#26262B] text-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-8">
        {activeTab === "highlights" ? <WhyChoiceUs /> : <Certifications />}
      </div>
    </div>
  );
}

function Certifications() {
  const certs = [
    { name: "ISO 9001:2015", logo: "/icons/iso9001.png" },
    { name: "ISO 14001:2015", logo: "/icons/iso14001.png" },
    { name: "BAFE SP101", logo: "/icons/bafe.png" },
    { name: "SSIP", logo: "/icons/ssip.png" },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 justify-center sm:grid-cols-4">
      {certs.map((cert) => (
        <div key={cert.name} className="flex flex-col items-center">
          <Image
            src={cert.logo}
            alt={cert.name}
            width={80}
            height={80}
            className="mb-2 h-20 w-20"
          />
          <div className="text-center text-sm text-gray-400">{cert.name}</div>
        </div>
      ))}
    </div>
  );
}
