"use client";

import { useState } from "react";

type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

type HiringWorkflowSectionProps = {
  steps: WorkflowStep[];
};

function WorkflowGlassCard({
  step,
  pulseKey,
}: {
  step: WorkflowStep;
  pulseKey: number;
}) {
  return (
    <article className="relative isolate h-[452px] w-full max-w-[350px] overflow-visible rounded-[24px] select-none lg:-translate-x-[5px]">
      <div className="absolute -inset-[26px] rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_54%),radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_68%)] blur-[24px] opacity-70" />
      <div className="absolute inset-0 rounded-[24px] border border-white/12 bg-[rgba(16,16,18,0.82)] shadow-[0_22px_60px_rgba(0,0,0,0.65)] backdrop-blur-[40px]" />
      <div className="absolute inset-[1px] rounded-[23px] bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_32%,rgba(255,255,255,0.01)_100%)]" />

      <div
        key={`${step.id}-${pulseKey}`}
        className="animate-workflow-card relative z-10 flex h-full flex-col px-6 py-[22px] sm:px-7 sm:py-6"
        style={{
          animation: "workflowCardIn 420ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
          {step.title.toUpperCase()}
        </div>

        <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#ff8b4c_0%,#f05323_100%)] shadow-[0_12px_30px_rgba(240,83,35,0.34)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 5.5c0-1.1-.9-2-2-2H6C4.9 3.5 4 4.4 4 5.5v8c0 1.1.9 2 2 2h2.4l2.7 2.5c.4.4 1 .4 1.4 0L15.2 15H18c1.1 0 2-.9 2-2v-7.5Z"
              fill="#111111"
            />
            <path d="M8 8.5h8" stroke="#F5F5F5" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8 11.5h5.5" stroke="#F5F5F5" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.05em] text-white sm:text-[1.5rem]">
          {step.title}
        </h3>
        <p className="mt-5 max-w-[20ch] text-[0.95rem] leading-6 text-white/70">
          {step.description}
        </p>
      </div>
    </article>
  );
}

function WorkflowStackArt({
  steps,
  activeIndex,
}: {
  steps: WorkflowStep[];
  activeIndex: number;
}) {
  const slabGroups = steps.map((step, index) => {
    const isActive = index === activeIndex;
    const isNearActive = Math.abs(index - activeIndex) === 1;

    return {
      ...step,
      translateY: index * 94 + (isActive ? -12 : isNearActive ? 4 : 0),
      translateX: index === 0 ? 0 : -8,
      scale: isActive ? 1.03 : 1,
      active: isActive,
      opacity: isActive ? 1 : 0.9,
    };
  });

  return (
    <div className="relative h-[640px] w-full overflow-visible">
      <svg
        viewBox="0 0 720 640"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="Stacked workflow illustration"
      >
        <defs>
          <linearGradient id="workflowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F05323" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#F05323" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="topOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A33" />
            <stop offset="100%" stopColor="#E14010" />
          </linearGradient>
          <linearGradient id="leftOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D44A1B" />
            <stop offset="100%" stopColor="#7F2A10" />
          </linearGradient>
          <linearGradient id="rightOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C53D13" />
            <stop offset="100%" stopColor="#9E300E" />
          </linearGradient>
          <linearGradient id="topDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#23232B" />
            <stop offset="100%" stopColor="#14141A" />
          </linearGradient>
          <linearGradient id="leftDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111116" />
            <stop offset="100%" stopColor="#09090D" />
          </linearGradient>
          <linearGradient id="rightDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D1D24" />
            <stop offset="100%" stopColor="#17171D" />
          </linearGradient>
          <filter id="slabShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="14"
              floodColor="#000000"
              floodOpacity="0.45"
            />
          </filter>
          <filter id="topGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        <ellipse
          cx="330"
          cy="70"
          rx="210"
          ry="58"
          fill="url(#workflowGlow)"
          filter="url(#topGlow)"
          opacity="0.9"
        />

        {slabGroups.map((layer) => (
          <g
            key={layer.id}
            filter="url(#slabShadow)"
            style={{
              transform: `translate(${layer.translateX}px, ${layer.translateY}px) scale(${layer.scale})`,
              transformOrigin: "center",
              transformBox: "fill-box",
              opacity: layer.opacity,
              transition:
                "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease",
            }}
          >
            <polygon
              points="52,28 474,0 684,116 262,144"
              fill={layer.active ? "url(#topOrange)" : "url(#topDark)"}
            />
            <polygon
              points="52,28 262,144 262,206 52,90"
              fill={layer.active ? "url(#leftOrange)" : "url(#leftDark)"}
            />
            <polygon
              points="474,0 684,116 684,178 474,62"
              fill={layer.active ? "url(#rightOrange)" : "url(#rightDark)"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function HiringWorkflowSection({
  steps,
}: HiringWorkflowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pulseToken, setPulseToken] = useState(0);

  if (!steps.length) {
    return null;
  }

  const activeStep = steps[activeIndex] ?? steps[0];

  const activateStep = (index: number) => {
    setActiveIndex(index);
    setPulseToken((value) => value + 1);
  };

  return (
    <section id="workflow" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] lg:-ml-8">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#B7B7B7] sm:text-4xl lg:text-[4rem] lg:leading-[1.02]">
            <span className="block">How you can hire offshore</span>
            <span className="block">
              <span className="text-[#F05323]">developers</span> through{" "}
              <span className="text-[#D7D7D7]">TECHIONIK</span>?
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Explore and follow our simplified and transparent hiring procedures
            to hire developers from us.
          </p>
        </div>

        <div className="mt-16 hidden xl:grid grid-cols-[350px_minmax(0,1fr)] items-start gap-10">
          <WorkflowGlassCard step={activeStep} pulseKey={pulseToken} />

          <div className="grid grid-cols-[minmax(0,1fr)_260px] items-start gap-4 xl:gap-5">
            <WorkflowStackArt steps={steps} activeIndex={activeIndex} />

            <div className="flex h-[640px] flex-col justify-between py-8">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => activateStep(index)}
                    aria-pressed={isActive}
                    className={`group flex select-none items-center gap-3 text-left transition-transform duration-300 ${
                      isActive ? "translate-x-1" : "hover:translate-x-1"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                        isActive
                          ? "animate-workflow-step border-[#F05323]/70 bg-[#F05323] text-white"
                          : "border-white/10 bg-[#2a2a30] text-white/70"
                      }`}
                      style={
                        isActive
                          ? { animation: "workflowStepPulse 700ms ease-out" }
                          : undefined
                      }
                    >
                      {step.id}
                    </span>
                    <div
                      className={`h-px flex-1 border-t border-dashed transition-colors duration-300 ${
                        isActive ? "border-white/35" : "border-white/25"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap text-sm font-medium tracking-[-0.02em] transition-colors duration-300 ${
                        isActive ? "text-[#E3E3E3]" : "text-[#AFAFAF]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 xl:hidden lg:grid-cols-[350px_minmax(0,1fr)]">
          <WorkflowGlassCard step={activeStep} pulseKey={pulseToken} />

          <div className="space-y-4">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => activateStep(index)}
                  aria-pressed={isActive}
                  className={`relative select-none rounded-[26px] border p-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-[#F05323]/45 bg-[#151519]"
                      : "border-white/10 bg-[#121214] hover:border-white/15 hover:bg-[#151519]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-[#F05323]/70 bg-[#F05323] text-white shadow-[0_0_0_10px_rgba(240,83,35,0.08)]"
                          : "border-white/10 bg-[#2a2a30] text-white/70"
                      }`}
                    >
                      {step.id}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                        {step.title}
                      </h4>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes workflowCardIn {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.985);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes workflowStepPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(240, 83, 35, 0.45);
            transform: scale(0.94);
          }
          55% {
            box-shadow: 0 0 0 14px rgba(240, 83, 35, 0.1);
            transform: scale(1.06);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(240, 83, 35, 0);
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-workflow-card,
          .animate-workflow-step {
            animation: none !important;
            transition-duration: 0s !important;
          }
        }
      `}</style>
    </section>
  );
}
