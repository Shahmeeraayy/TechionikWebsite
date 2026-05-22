import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Database,
  FileText,
  Landmark,
  Layers3,
  Lock,
  Server,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import type { TransformedCaseStudyDetail } from "@/app/api/caseStudy-detail/utils/getCaseStudyDetail";

type AssetraCaseStudyPageProps = {
  study: TransformedCaseStudyDetail;
};

type StatCard = {
  label: string;
  value: string;
};

type StepCard = {
  step: string;
  title: string;
  description: string;
};

type RoleCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ModuleCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const HERO_STAT_CARDS: StatCard[] = [
  { label: "Category", value: "Wealth Management" },
  { label: "Cooperation", value: "2023 - 2025" },
  { label: "Role", value: "Design and Development" },
  { label: "Model", value: "Subscription SaaS" },
];

const HERO_TAGS = [
  "Family office workflows",
  "Portfolio visibility",
  "Tenant operations",
  "AI lease analysis",
];

const TIMELINE: StepCard[] = [
  {
    step: "05 Days",
    title: "Research",
    description:
      "Stakeholder discovery, workflow mapping, and validation of the core asset management journey.",
  },
  {
    step: "07 Days",
    title: "UI / UX Design",
    description:
      "A clean, high-trust interface was shaped around dashboards, permissions, and data-heavy operations.",
  },
  {
    step: "05 Days",
    title: "Branding",
    description:
      "A sharper visual system, premium typography, and a financial-grade color language.",
  },
  {
    step: "30 Days",
    title: "Development",
    description:
      "Core workflows were built for clients, assets, companies, employees, and tenant journeys.",
  },
  {
    step: "06 Days",
    title: "Deployment & Testing",
    description:
      "Release hardening, QA, and system checks before launch.",
  },
];

const CHALLENGES = [
  "Centralized visibility across properties, companies, and financial accounts.",
  "Role-based management for multiple stakeholders working in the same environment.",
  "AI-powered lease analysis to reduce manual review overhead.",
  "Scalable handling of tenants and sub-companies without losing control.",
];

const SOLUTIONS = [
  {
    number: "01",
    title: "Client Management",
    points: [
      "Add and manage clients and ownership records.",
      "Keep a unified view of owners and associated entities.",
    ],
  },
  {
    number: "02",
    title: "Asset Management",
    points: [
      "Assign company or personal assets with clear ownership links.",
      "Handle real estate, bank accounts, and portfolio entities in one place.",
      "Connect assets to clients or companies without switching systems.",
    ],
  },
  {
    number: "03",
    title: "Employee Roles",
    points: [
      "Add employees with tailored permissions and account scopes.",
      "Assign roles for managing clients, tenants, and operational tasks.",
    ],
  },
];

const ROLES: RoleCard[] = [
  {
    icon: Users,
    title: "Family Office Manager",
    description:
      "Manages clients, companies, and employees while overseeing asset allocation and tenant relationships.",
  },
  {
    icon: BadgeCheck,
    title: "Owner",
    description:
      "Holds ownership of companies and assets, and can monitor financial overviews and permissions.",
  },
  {
    icon: ShieldCheck,
    title: "Employee",
    description:
      "Added with role-based permissions so tasks can be delegated without losing control.",
  },
  {
    icon: Landmark,
    title: "Tenant",
    description:
      "Assigned to real estate properties with access to rent payments and maintenance requests.",
  },
];

const RESULTS = [
  {
    value: "70%",
    label: "less lease contract processing time with AI abstraction",
  },
  {
    value: "100%",
    label: "centralized management of multi-level assets",
  },
  {
    value: "Multi-tenant",
    label: "login support to improve tenant experience",
  },
  {
    value: "Enterprise-ready",
    label: "scalable for family offices with sub-company tracking",
  },
];

const FUTURE_ENHANCEMENTS = [
  "Integrate with external accounting tools such as QuickBooks and Xero.",
  "Launch a mobile app for tenant convenience and faster field interactions.",
  "Add real-time dashboards with financial analytics and risk insights.",
];

const WORKFLOW: StepCard[] = [
  {
    step: "01",
    title: "Subscription",
    description: "Purchase a plan and activate the platform.",
  },
  {
    step: "02",
    title: "Initialize",
    description: "Set up the system and subscription state.",
  },
  {
    step: "03",
    title: "Manager access",
    description: "Authenticate the family office manager and staff.",
  },
  {
    step: "04",
    title: "Onboard clients",
    description: "Bring clients, owners, and employees into the workspace.",
  },
  {
    step: "05",
    title: "Assign assets",
    description: "Map properties, bank accounts, and company entities.",
  },
  {
    step: "06",
    title: "Tenant portal",
    description: "Support rent payments and maintenance requests.",
  },
  {
    step: "07",
    title: "AI layer",
    description: "Use lease abstraction for contract parsing and review.",
  },
  {
    step: "08",
    title: "View & download",
    description: "Publish lease contracts in a secure, usable format.",
  },
];

const TECH_STACK = [
  {
    icon: Server,
    label: "Backend",
    value: "Application services and workflow orchestration",
  },
  {
    icon: Layers3,
    label: "Frontend",
    value: "React.js, Next.js, Tailwind CSS",
  },
  {
    icon: Database,
    label: "Database",
    value: "Centralized asset, client, and relationship records",
  },
  {
    icon: BrainCircuit,
    label: "AI layer",
    value: "Custom lease abstraction model trained for contract parsing",
  },
  {
    icon: Cloud,
    label: "Hosting",
    value: "Secure cloud deployment for a scalable SaaS experience",
  },
  {
    icon: Lock,
    label: "Security",
    value: "JWT auth and role-based access control",
  },
];

const CORE_MODULES: ModuleCard[] = [
  {
    icon: Users,
    title: "Family Office Hub",
    description: "A central place to manage people, permissions, and operations.",
  },
  {
    icon: Landmark,
    title: "Asset Management",
    description: "Track real estate, bank accounts, and company assets together.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Turn lease documents into actionable, structured records.",
  },
  {
    icon: ShieldCheck,
    title: "Employee Roles",
    description: "Control access with tailored role-based permissions.",
  },
  {
    icon: Workflow,
    title: "Tenant Portal",
    description: "Support day-to-day rent and maintenance interactions.",
  },
  {
    icon: Sparkles,
    title: "AI Lease Analysis",
    description: "Use the AI layer to interpret and abstract contract details.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F05323]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#B7B7C3] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function StatTile({ label, value }: StatCard) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function MiniPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
      {children}
    </span>
  );
}

function WorkflowStep({ step, title, description }: StepCard) {
  return (
    <div className="relative rounded-[24px] border border-white/10 bg-black/30 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
        {step}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#A9A9B6]">{description}</p>
    </div>
  );
}

function RoleTile({ icon: Icon, title, description }: RoleCard) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#101016] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F05323]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#A9A9B6]">{description}</p>
    </div>
  );
}

function ModuleTile({ icon: Icon, title, description }: ModuleCard) {
  return (
    <div className="flex gap-4 rounded-[22px] border border-white/10 bg-black/25 p-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F05323]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#9FA0AF]">{description}</p>
      </div>
    </div>
  );
}

export default function AssetraCaseStudyPage({
  study,
}: AssetraCaseStudyPageProps) {
  const categoryNames = study.categories.map((category) => category.name);

  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,83,35,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#0a0a0d_0%,#050506_45%,#000000_100%)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('/images/ParentServices/ServiceHeromedia/Service_Parent_Page_Section.svg')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1500px auto",
          }}
        />
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(240,83,35,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-28 sm:px-8 lg:px-16 lg:pb-20 lg:pt-32">
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <MiniPill>
                  <Image
                    src="/icons/Assetra.svg"
                    alt="Assetra logo"
                    width={22}
                    height={22}
                    className="h-5 w-5"
                  />
                  Assetra
                </MiniPill>
                <MiniPill>Case study</MiniPill>
                <MiniPill>Wealth management software</MiniPill>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.03]">
                Assetra Wealth Management Software
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#C9C9D4] sm:text-lg">
                {study.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#E5E5EF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#workflow"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F05323] to-[#8A3014] pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(138,48,20,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore workflow</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/12 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/25 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                      Build Your Idea
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#C9C9D4]">
                      Consult our expert team to shape a secure wealth
                      management workflow around your own product vision.
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    Consult our expert
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#overview"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Overview
                </Link>
                <Link
                  href="#methodology"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Methodology
                </Link>
                <Link
                  href="#roles"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Roles
                </Link>
                <Link
                  href="#impact"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Impact
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(240,83,35,0.16),transparent_60%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,23,0.92)_0%,rgba(7,7,10,0.96)_100%)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(240,83,35,0.18)_0%,rgba(16,16,22,0.92)_40%,rgba(5,5,8,0.98)_100%)] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                          Central dashboard
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-white">
                          One view for assets, entities, and teams
                        </h2>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                          Portfolio
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Visibility
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#B7B7C3]">
                          Properties, companies, and financial accounts in one place.
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                          AI
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Lease analysis
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#B7B7C3]">
                          Faster contract review through document abstraction.
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                          Roles
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Controlled access
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#B7B7C3]">
                          Managers, owners, employees, and tenants get their own paths.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                        Design focus
                      </p>
                      <Layers3 className="h-5 w-5 text-white/45" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      High-trust SaaS for family office workflows
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9A9B6]">
                      Built to keep complex financial relationships readable,
                      secure, and easy to act on.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                        AI layer
                      </p>
                      <BrainCircuit className="h-5 w-5 text-white/45" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      Lease abstraction and document processing
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9A9B6]">
                      AI tools help extract signal from long-form contracts and
                      support day-to-day review.
                    </p>
                  </div>

                  <div className="sm:col-span-2 rounded-[28px] border border-white/10 bg-black/30 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Image
                          src="/icons/Assetra.svg"
                          alt="Assetra logo"
                          width={28}
                          height={28}
                          className="h-7 w-7"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                          Client note
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#C9C9D4]">
                          &ldquo;The redesigned experience feels much more
                          intuitive, and the new interface helped improve
                          engagement and conversions while keeping complex
                          workflows easy to manage.&rdquo;
                        </p>
                        <p className="mt-4 text-sm font-semibold text-white">
                          Bernardine Denigan
                        </p>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          CEO at Assetra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 lg:px-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {HERO_STAT_CARDS.map((card) => (
            <StatTile key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-16 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <div className="space-y-8">
            <article
              id="overview"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="About Assetra"
                title="A modern wealth platform built around clarity and control"
                description={study.shortDescription}
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Centralized dashboard for all asset and ownership data.",
                  "Intelligent handling of real estate, bank accounts, and company assets.",
                  "Built for wealth managers, family office teams, and tenants.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-black/25 p-5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#F05323]" />
                    <p className="mt-4 text-sm leading-7 text-[#C9C9D4]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(240,83,35,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[#F05323]" />
                  <p className="text-sm leading-7 text-[#C9C9D4]">
                    Assetra combines centralized visibility, AI-assisted
                    document handling, and role-based access control to turn a
                    traditionally fragmented wealth management process into a
                    smoother digital experience.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="methodology"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="Methodology"
                title="A phased approach that balanced speed, polish, and reliability"
                description="The delivery process was broken into clear stages so the product could move from research to release without losing quality."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {TIMELINE.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[24px] border border-white/10 bg-black/25 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Clock3 className="h-4 w-4 text-[#F05323]" />
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                        {item.step}
                      </p>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#A9A9B6]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-8 xl:grid-cols-2">
              <article className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8">
                <SectionHeader
                  eyebrow="Challenges"
                  title="The product had to solve fragmented asset operations"
                  description="Family offices often manage multiple clients with diverse portfolios, and traditional methods lacked the visibility and control needed to scale."
                />

                <div className="mt-8 space-y-4">
                  {CHALLENGES.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-[22px] border border-white/10 bg-black/25 p-4"
                    >
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#F05323]" />
                      <p className="text-sm leading-7 text-[#C9C9D4]">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8">
                <SectionHeader
                  eyebrow="Solution"
                  title="Three pillars of functionality shaped the platform"
                  description="The solution was structured around client management, asset management, and employee roles so the system could stay flexible without becoming chaotic."
                />

                <div className="mt-8 space-y-4">
                  {SOLUTIONS.map((item) => (
                    <div
                      key={item.number}
                      className="rounded-[24px] border border-white/10 bg-black/25 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#F05323]">
                          {item.number}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <ul className="mt-3 space-y-2">
                            {item.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 text-sm leading-7 text-[#A9A9B6]"
                              >
                                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#F05323]" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article
              id="workflow"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="System flow"
                title="A secure workflow that connects managers, clients, tenants, and AI"
                description="The flow was designed so every participant could enter at the right point without exposing unnecessary complexity."
              />

              <div className="relative mt-8">
                <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-[#F05323]/10 via-[#F05323]/60 to-[#F05323]/10 xl:block" />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {WORKFLOW.map((step) => (
                    <WorkflowStep key={step.step} {...step} />
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <p className="text-sm leading-7 text-[#C9C9D4]">
                  The platform connects wealth management, real estate, tenant
                  operations, and AI-powered contract analysis into a single
                  operating model.
                </p>
              </div>
            </article>

            <article
              id="roles"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="User roles"
                title="Four user types keep the experience organized and secure"
                description="Role-based permissions ensure every stakeholder sees exactly what they need, and nothing more."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {ROLES.map((role) => (
                  <RoleTile key={role.title} {...role} />
                ))}
              </div>
            </article>

            <article
              id="impact"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="Results and impact"
                title="The system delivered measurable efficiency and scalability gains"
                description="Assetra was positioned as more than a dashboard - it became an operating layer for wealth managers who need speed, control, and consistency."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {RESULTS.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(240,83,35,0.08)_0%,rgba(0,0,0,0.25)_100%)] p-5"
                  >
                    <p className="text-3xl font-bold text-white">{result.value}</p>
                    <p className="mt-3 text-sm leading-7 text-[#C9C9D4]">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <p className="text-sm leading-7 text-[#C9C9D4]">
                  Assetra empowers wealth managers with an intelligent,
                  scalable, and automated environment to manage clients,
                  properties, and financial data. With advanced AI models and a
                  robust backend architecture, the experience shifts from
                  manual oversight to a modern digital workflow.
                </p>
              </div>
            </article>

            <article
              id="future"
              className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <SectionHeader
                eyebrow="Future enhancements"
                title="The roadmap keeps the product extensible"
                description="The case study closes with a realistic set of next-step improvements focused on integrations, convenience, and analytics."
              />

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {FUTURE_ENHANCEMENTS.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-black/25 p-5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#C9C9D4]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-6 self-start lg:sticky lg:top-28">
            <div className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/icons/Assetra.svg"
                    alt="Assetra logo"
                    width={26}
                    height={26}
                    className="h-6 w-6"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                    Project snapshot
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Assetra
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Wealth management and portfolio operations
                  </p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Categories
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {categoryNames.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E5E5EF]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Delivery focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#C9C9D4]">
                    Subscription-based SaaS, role-based access, AI document
                    parsing, and scalable asset visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
              <SectionHeader
                eyebrow="Technology stack"
                title="The implementation stack emphasized modern web delivery"
                description="The PDF highlights a layered stack spanning backend services, frontend delivery, database support, AI abstraction, hosting, and security."
              />

              <div className="mt-8 space-y-3">
                {TECH_STACK.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-[22px] border border-white/10 bg-black/25 p-4"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F05323]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#0f0f14] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
              <SectionHeader
                eyebrow="Core modules"
                title="The platform is built around six operating modules"
                description="These modules turn the system into a practical tool for day-to-day wealth and property operations."
              />

              <div className="mt-8 space-y-3">
                {CORE_MODULES.map((module) => (
                  <ModuleTile key={module.title} {...module} />
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(240,83,35,0.14)_0%,rgba(10,10,14,0.95)_55%,rgba(10,10,14,0.95)_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#F05323]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F05323]">
                  Closing note
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#D2D2DD]">
                Assetra transforms traditional asset oversight into a modern
                digital experience, bringing client management, property
                workflows, and financial data into a single intelligent system.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 sm:px-8 lg:px-16">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(240,83,35,0.18)_0%,rgba(15,15,20,0.98)_55%,rgba(0,0,0,0.98)_100%)] p-8 shadow-[0_36px_100px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F05323]">
                Next step
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[46px]">
                Ready to design a secure wealth platform of your own?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#D0D0DB]">
                We can help shape the product story, interface, and technical
                architecture around your financial workflows, your users, and
                your growth plans.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f1f1f1]"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Browse more case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
