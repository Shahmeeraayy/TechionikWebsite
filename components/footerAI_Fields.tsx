"use client";

import React from "react";

export default function AskAI() {
  // The updated prompt tailored for Techionik
  const promptText = `As a top recruiter preparing a summary of a potential development partner, read https://www.techionik.com/ and create a compelling overview. Your goal is to highlight the company's strengths and offerings for an internal stakeholder. Summarize in bullets: what Techionik is, who it's for, standout services/capabilities (e.g., custom web & mobile app development, AI/ML solutions, LLM integration, staff augmentation, UI/UX design), Proof / portfolio/case studies (clients, technologies used, business outcomes), When to engage them (e.g., building an MVP, scaling an existing product, needing specialized AI expertise, augmenting an in-house team), and a clear project development process (from initial discovery/consultation to deployment and ongoing support). Focus strictly on the information presented on their website.`;

  // URL encode the prompt so it can be safely passed in the URL parameters
  const encodedPrompt = encodeURIComponent(promptText);

  // Configuration for each AI provider
const aiProviders = [
  {
    name: "ChatGPT",
    url: `https://chatgpt.com/?q=${encodedPrompt}`,
    bgColor: "bg-[#74aA9c]",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg"
        alt="ChatGPT"
        className="w-6 h-6 invert"
      />
    ),
  },
  {
    name: "Claude",
    url: `https://claude.ai/new?q=${encodedPrompt}`,
    bgColor: "bg-[#d97757]",
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/50/claude-ai.png" alt="claude-ai"
        // alt="Claude"
        className="w-6 h-6 invert"
      />
    ),
  },
  {
    name: "Gemini",
    url: `https://www.google.com/search?udm=50&aep=11&q=.${encodedPrompt}`,
    bgColor: "bg-white",
    icon: (
      <img
        src="https://img.icons8.com/fluency/48/gemini-ai.png" alt="gemini-ai"
        // alt="Google Gemini"
        className="w-6 h-6"
      />
    ),
  },
  {
    name: "Perplexity",
    url: `https://www.perplexity.ai/?q=${encodedPrompt}`,
    bgColor: "bg-black border border-gray-700",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/perplexity.svg"
        alt="Perplexity"
        className="w-6 h-6 invert"
      />
    ),
  },
];
 return (
    <div className="flex flex-col items-start gap-4 py-6">
      <h3 className="text-gray-300 text-base md:text-lg font-medium">
        Ask AI for a summary of Techionik
      </h3>

      {/* AI Buttons Row */}
      <div className="flex items-center gap-3">
        {aiProviders.map((provider) => (
          <a
            key={provider.name}
            href={provider.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Ask ${provider.name}`}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-lg ${provider.bgColor}`}
          >
            {provider.icon}
          </a>
        ))}
      </div>

      {/* Crawler Optimized Link */}
      {/* <Link 
        href="/ai-research-hub" 
        className="text-gray-400 text-sm hover:text-white underline decoration-gray-600 hover:decoration-white transition-colors mt-2"
      >
        AI research hub (text-only, crawler-optimized)
      </Link> */}
    </div>
  );
}
