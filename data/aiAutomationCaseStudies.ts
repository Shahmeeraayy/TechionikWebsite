export type AiAutomationCaseStudy = {
  slug: string;
  route: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  heroSummary: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  capabilities: string[];
  workflowHighlights: string[];
  businessOutcomes: string[];
};

function normalizeCaseStudyTitle(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function dedupeAiAutomationCaseStudies(
  studies: AiAutomationCaseStudy[],
): AiAutomationCaseStudy[] {
  const seenSlugs = new Set<string>();
  const seenRoutes = new Set<string>();
  const seenTitles = new Set<string>();

  return studies.filter((study) => {
    const normalizedTitle = normalizeCaseStudyTitle(study.title);
    const hasDuplicate =
      seenSlugs.has(study.slug) ||
      seenRoutes.has(study.route) ||
      seenTitles.has(normalizedTitle);

    if (hasDuplicate) {
      return false;
    }

    seenSlugs.add(study.slug);
    seenRoutes.add(study.route);
    seenTitles.add(normalizedTitle);

    return true;
  });
}

const rawAiAutomationCaseStudies: AiAutomationCaseStudy[] = [
  {
    slug: "business-automation",
    route: "/case-studies/business-automation",
    title: "Business Automation Case Study",
    badge: "Case Study \u203a Business Automation",
    description:
      "Automating approvals, internal handoffs, and operational workflows to reduce manual effort and improve execution speed.",
    image: "/banners/buissness-banner.webp",
    imageAlt: "Business automation case study banner",
    heroSummary:
      "A workflow automation engagement focused on removing repetitive business tasks, improving visibility across teams, and creating a more dependable operating rhythm.",
    overview:
      "This case study highlights a practical automation program built for organizations dealing with repetitive approvals, fragmented internal processes, and disconnected operational handoffs.",
    challenge:
      "Manual approvals, spreadsheet-driven coordination, and siloed task ownership were slowing execution and increasing the risk of missed follow-ups, duplicate work, and inconsistent reporting.",
    solution:
      "We designed an automation layer that connected forms, routing logic, notifications, status tracking, and exception handling so teams could move from intake to completion with less friction.",
    impact:
      "The result was a more controlled and scalable operating model with faster workflow completion, clearer accountability, and better visibility into process performance.",
    capabilities: [
      "Workflow orchestration",
      "Rules-based approvals",
      "Notification automation",
      "Operational reporting",
    ],
    workflowHighlights: [
      "Automated task assignment based on workflow stage and business rules",
      "Approval routing with audit-ready status visibility",
      "Trigger-based updates for cross-functional teams",
      "Exception handling paths for incomplete or blocked requests",
    ],
    businessOutcomes: [
      "Reduced dependency on manual coordination",
      "Shorter turnaround times across repeatable workflows",
      "Improved consistency in operational execution",
      "Clearer process visibility for managers and stakeholders",
    ],
  },
  {
    slug: "customer-onboarding-automation",
    route: "/case-studies/customer-onboarding-automation",
    title: "Customer Onboarding Automation Project",
    badge: "Case Study \u203a Customer Onboarding Automation",
    description:
      "Streamlining intake, verification, and activation flows to deliver a faster and more structured onboarding experience.",
    image: "/513541ea13a60ecfd75bea894b9fdfebd44a00ce.jpg",
    imageAlt: "Customer onboarding automation case study banner",
    heroSummary:
      "A customer onboarding automation project built to reduce activation delays, coordinate internal teams, and create a smoother first-touch experience for new customers.",
    overview:
      "This case study focuses on the automation of onboarding workflows where multiple steps, stakeholders, and validations had to happen in the right order without losing visibility.",
    challenge:
      "Customer intake relied on manual collection, fragmented communication, and separate review steps, which created inconsistent onboarding experiences and slowed customer activation.",
    solution:
      "We structured the onboarding journey around automated intake capture, verification checkpoints, team notifications, task routing, and milestone-based progression across the lifecycle.",
    impact:
      "The onboarding process became more consistent, easier to manage, and better aligned with customer expectations while internal teams gained a clearer operating flow.",
    capabilities: [
      "Intake automation",
      "Verification routing",
      "Checklist orchestration",
      "Lifecycle visibility",
    ],
    workflowHighlights: [
      "Automated handoff from lead capture to onboarding workflow",
      "Structured verification steps with progress tracking",
      "Team-specific task routing for activation stages",
      "Status-based follow-ups to prevent stalled onboarding",
    ],
    businessOutcomes: [
      "Faster activation readiness for new customers",
      "Reduced process gaps during onboarding",
      "Improved collaboration between internal teams",
      "More consistent customer onboarding journeys",
    ],
  },
  {
    slug: "gen-ai-image-generation",
    route: "/case-studies/gen-ai-image-generation",
    title: "Gen AI Image Generation Case Study",
    badge: "Case Study \u203a Gen AI Image Generation",
    description:
      "Building a controlled image-generation workflow for faster content creation, creative review, and brand-aligned outputs.",
    image: "/banners/smart-automation.webp",
    imageAlt: "Gen AI image generation case study banner",
    heroSummary:
      "A generative AI automation engagement designed to accelerate visual production while keeping review workflows, prompt structure, and output consistency under control.",
    overview:
      "This case study covers an AI-assisted visual production pipeline for teams producing creative assets at speed while still needing consistency, governance, and review checkpoints.",
    challenge:
      "Content teams needed a faster way to create image variations and campaign visuals without relying on fully manual production cycles for every request and revision.",
    solution:
      "We introduced an AI image generation workflow with prompt templates, review checkpoints, approval stages, asset organization, and revision handling built into the process.",
    impact:
      "The delivery model supported faster creative exploration, more efficient production cycles, and a stronger operational structure around AI-assisted content generation.",
    capabilities: [
      "Prompt workflow design",
      "Creative review automation",
      "Asset versioning",
      "AI-assisted production ops",
    ],
    workflowHighlights: [
      "Prompt-based request intake for creative generation",
      "Automated review stages before approval and release",
      "Organized output handling for teams and campaigns",
      "Structured revision flow for iteration and reuse",
    ],
    businessOutcomes: [
      "Faster turnaround on visual asset creation",
      "More scalable content generation operations",
      "Improved creative consistency across outputs",
      "Clearer review governance for AI-generated content",
    ],
  },
  {
    slug: "lead-outreach-nurturing",
    route: "/case-studies/lead-outreach-nurturing",
    title: "Lead Outreach & Nurturing Case Study",
    badge: "Case Study \u203a Lead Outreach & Nurturing",
    description:
      "Automating outreach sequences and nurture logic to keep lead engagement timely, relevant, and easier to manage at scale.",
    image: "/3bfd051f51f4ccd9c9abe10674e2cd060cfee26b.png",
    imageAlt: "Lead outreach and nurturing case study banner",
    heroSummary:
      "A lead automation case study centered on outreach sequencing, qualification support, and nurture workflows that help sales and growth teams stay consistent.",
    overview:
      "This case study showcases a structured automation workflow for pipeline engagement, where lead follow-up timing and message continuity directly influenced conversion opportunities.",
    challenge:
      "Lead handling was inconsistent across follow-ups, resulting in slower responses, missed engagement windows, and nurture journeys that were difficult to track or optimize.",
    solution:
      "We designed a lead workflow that coordinated first-touch outreach, segment-based sequencing, nurture follow-ups, activity triggers, and team visibility across the pipeline.",
    impact:
      "The outreach function became more predictable and scalable, with stronger timing, better pipeline coverage, and easier operational control for growth teams.",
    capabilities: [
      "Lead routing",
      "Sequence automation",
      "Nurture logic",
      "Pipeline visibility",
    ],
    workflowHighlights: [
      "Automated first-response flow for new inbound or sourced leads",
      "Lead segmentation for nurture path selection",
      "Follow-up sequencing triggered by behavior or stage changes",
      "Team alerts for high-intent or re-engaged prospects",
    ],
    businessOutcomes: [
      "More consistent lead engagement over time",
      "Reduced response delays in outreach operations",
      "Better visibility across nurture stages and handoffs",
      "A more scalable workflow for growth and sales teams",
    ],
  },
  {
    slug: "social-media-agent",
    route: "/case-studies/social-media-agent",
    title: "Social Media Agent Case Study",
    badge: "Case Study \u203a Social Media Agent",
    description:
      "Creating an AI-assisted social media operations flow for planning, caption generation, reviews, and publishing support.",
    image: "/879587540b91e93c5048ef637642b401c8bc0f8c.jpg",
    imageAlt: "Social media agent case study banner",
    heroSummary:
      "An AI-powered social media operations case study built around faster content workflows, better campaign coordination, and a more consistent publishing cadence.",
    overview:
      "This case study explores how an AI-assisted agent can support social content planning, draft generation, review cycles, and publishing operations across channels.",
    challenge:
      "Managing multi-channel social content manually made it difficult to maintain posting consistency, coordinate approvals, and keep campaign execution aligned with internal timelines.",
    solution:
      "We structured an AI-assisted agent workflow that supported content ideation, caption generation, scheduling preparation, review loops, and publishing coordination.",
    impact:
      "Teams gained a more repeatable content operations process with clearer approvals, faster campaign movement, and better day-to-day publishing support.",
    capabilities: [
      "Content operations support",
      "Caption generation",
      "Review coordination",
      "Publishing workflow assistance",
    ],
    workflowHighlights: [
      "AI-assisted draft generation for social content planning",
      "Review-ready content packaging for internal approval",
      "Scheduling support tied to campaign timing and channels",
      "Operational visibility across content production stages",
    ],
    businessOutcomes: [
      "More consistent publishing workflows across channels",
      "Reduced manual effort in content preparation",
      "Stronger coordination between content and marketing teams",
      "A scalable operating model for social media execution",
    ],
  },
];

export const aiAutomationCaseStudies =
  dedupeAiAutomationCaseStudies(rawAiAutomationCaseStudies);

export function getAiAutomationCaseStudyBySlug(slug: string) {
  return aiAutomationCaseStudies.find((study) => study.slug === slug) ?? null;
}
