import type { ReactNode } from "react";

type BulletCard = {
  title: string;
  bullets: string[];
};

type StepCard = {
  step: string;
  title: string;
  description: string;
  bullets?: string[];
};

type TextCard = {
  title: string;
  description: string;
};

const dedicatedDeveloperRoles: BulletCard[] = [
  {
    title: "Hire Front-end Developers",
    bullets: [
      "Build seamless, user-centric web and app interfaces.",
      "Ensure smooth deployment and responsive design.",
      "Access 45+ expert front-end developers with 5+ years of experience.",
      "Expertise in React, Angular, Vue.js, and modern UI frameworks.",
    ],
  },
  {
    title: "Hire Back-end Developers",
    bullets: [
      "Design robust server-side architectures and APIs.",
      "Skilled in Node.js, Python, PHP, Ruby, and database management.",
      "120+ dedicated back-end developers available.",
      "Ensure scalable, secure, high-performance back-end solutions.",
    ],
  },
  {
    title: "Hire Full-Stack Developers",
    bullets: [
      "Handle both front-end and back-end seamlessly.",
      "Expertise in MERN, MEAN, and full-stack technologies.",
      "30+ full-stack developers ready for your projects.",
      "Perfect for end-to-end software solutions and agile teams.",
    ],
  },
];

const offshoreHiringProcess: StepCard[] = [
  {
    step: "Step 1",
    title: "Request Review",
    description:
      "Submit your requirements; our experts assess your needs and the number of developers required.",
  },
  {
    step: "Step 2",
    title: "Initial Screening",
    description:
      "We shortlist candidates based on skills, experience, and project requirements.",
  },
  {
    step: "Step 3",
    title: "Setting up Interviews",
    description:
      "Schedule interviews with vetted candidates to evaluate fit.",
  },
  {
    step: "Step 4",
    title: "Interview Vetted Candidates",
    description:
      "Select the best developers after one-on-one discussions.",
  },
  {
    step: "Step 5",
    title: "Contract Review",
    description:
      "Finalize terms, contracts, and project scope before onboarding.",
  },
  {
    step: "Step 6",
    title: "Pay and Let\u2019s Start",
    description:
      "Complete payment and get your dedicated developers ready to join your team.",
  },
];

const softwareServicesExpertise: TextCard[] = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions that align with your business goals.",
  },
  {
    title: "MVP Development",
    description: "Rapid prototypes to validate ideas and accelerate time-to-market.",
  },
  {
    title: "Enterprise Software Development",
    description: "Scalable solutions for complex business operations.",
  },
  {
    title: "Cloud Applications",
    description: "Build robust, secure, and scalable cloud-native apps.",
  },
  {
    title: "Web, Desktop, and Mobile App Development",
    description: "Cross-platform solutions for every device.",
  },
  {
    title: "SaaS Development",
    description: "Transform ideas into subscription-ready SaaS platforms.",
  },
  {
    title: "Custom APIs Development",
    description:
      "Seamless integrations to connect and enhance your digital ecosystem.",
  },
];

const techStackCards: BulletCard[] = [
  {
    title: "Hire Python Developer",
    bullets: [
      "Build scalable, secure software and integrate it with your infrastructure.",
      "Extend your TECHIONIK team with cutting-edge Python expertise.",
      "Ideal for AI, automation, data pipelines, and backend systems.",
    ],
  },
  {
    title: "Hire Java Developer",
    bullets: [
      "High-performance, enterprise-ready solutions using Java, .NET, Node.js, Python, Docker, Kubernetes, and AWS.",
      "Empower innovation through a future-ready tech stack.",
      "Perfect for backend systems, cloud apps, and complex enterprise solutions.",
    ],
  },
  {
    title: "Hire iOS Developer",
    bullets: [
      "Build high-performance, scalable iOS applications using Swift, Objective-C, and modern frameworks.",
      "Integrate with cloud services, Docker, Kubernetes, and AI-powered apps.",
      "Future-ready, feature-rich mobile solutions that elevate your business.",
    ],
  },
];

const aiDeveloperSolutions: TextCard[] = [
  {
    title: "AI Developers for Startups",
    description:
      "We provide AI experts who help startups build MVPs, AI-powered applications, chatbots, and automation tools. Our developers work with modern frameworks like Python, TensorFlow, and OpenAI APIs to transform innovative ideas into scalable AI products.",
  },
  {
    title: "AI Developers for SMBs",
    description:
      "Our AI developers support small and medium businesses by implementing AI automation, predictive analytics, recommendation systems, and intelligent chatbots. We help SMBs reduce operational costs and improve productivity using smart AI solutions.",
  },
  {
    title: "AI Developers for Enterprises",
    description:
      "Leverage enterprise-grade AI development with custom machine learning models, NLP solutions, computer vision systems, and AI automation platforms. Our developers ensure secure architecture, scalable infrastructure, and reliable deployment.",
  },
];

const aiHiringSteps: StepCard[] = [
  {
    step: "01",
    title: "AI Technical Assessment",
    description:
      "Our AI specialists evaluate candidates based on their expertise in:",
    bullets: [
      "Machine Learning algorithms",
      "Deep Learning frameworks (TensorFlow, PyTorch)",
      "Natural Language Processing (NLP)",
      "Data modeling and AI architecture",
      "Python programming and AI libraries",
    ],
  },
  {
    step: "02",
    title: "HR Interview",
    description:
      "In this stage we evaluate communication skills, collaboration ability, and problem-solving mindset.",
    bullets: [
      "AI project experience",
      "ability to work in agile teams",
      "understanding of business use cases for AI",
      "communication and collaboration skills",
    ],
  },
  {
    step: "03",
    title: "AI Technical Interview",
    description:
      "Our senior AI architects conduct a deep technical interview covering:",
    bullets: [
      "machine learning model development",
      "AI system architecture design",
      "model training and evaluation",
      "data engineering and pipelines",
      "AI deployment and optimization",
    ],
  },
];

const technicalAiSkills: string[] = [
  "Strong expertise in Python, R, and AI programming frameworks.",
  "Experience with Machine Learning, Deep Learning, and Neural Networks.",
  "Knowledge of Natural Language Processing (NLP) and Computer Vision.",
  "Experience building AI models, predictive analytics, and recommendation systems.",
  "Expertise in AI deployment, MLOps, and cloud platforms (AWS, Azure, GCP).",
];

const nonTechnicalSkills: string[] = [
  "Strong analytical thinking and problem-solving ability.",
  "Ability to translate business problems into AI solutions.",
  "Excellent collaboration with product and data teams.",
  "Clear communication for complex AI concepts.",
  "Continuous learning of new AI technologies and innovations.",
];

const cooperationModels: BulletCard[] = [
  {
    title: "AI Development Outsourcing",
    bullets: [
      "Build AI-powered applications with experienced AI engineers.",
      "Skilled AI developers with expertise in Machine Learning & Deep Learning.",
      "AI model training, testing, and deployment.",
      "End-to-end AI development services.",
      "Full-cycle project management and delivery assurance.",
    ],
  },
  {
    title: "Dedicated AI Development Team",
    bullets: [
      "Full-stack AI development handled with expertise.",
      "Skilled AI engineers integrated with your internal team.",
      "Perfect for long-term AI development projects.",
      "Agile AI development process.",
      "Faster product innovation using AI technologies.",
    ],
  },
  {
    title: "AI Automation Outsourcing",
    bullets: [
      "Automate business operations with intelligent AI systems.",
      "AI workflow automation and smart process optimization.",
      "AI chatbots and virtual assistants.",
      "AI-powered analytics and predictive systems.",
      "Reduced operational costs using automation.",
    ],
  },
  {
    title: "AI Product Development Team",
    bullets: [
      "Build intelligent AI products with a dedicated development team.",
      "Custom AI product development.",
      "AI SaaS platform development.",
      "AI recommendation engines.",
      "AI integration with existing systems.",
    ],
  },
];

const whyChooseCards: TextCard[] = [
  {
    title: "On-Demand AI Scalability",
    description:
      "With TECHIONIK, you can quickly hire AI developers within days and scale your AI team based on project requirements.",
  },
  {
    title: "AI Talent Screening",
    description:
      "Our AI engineers pass strict technical screening including machine learning algorithms, NLP, deep learning frameworks, and data modeling.",
  },
  {
    title: "150+ Pre-Vetted AI Developers",
    description:
      "Access a global pool of AI engineers, machine learning specialists, and data scientists ready to build intelligent solutions.",
  },
  {
    title: "Flexible AI Engagement Models",
    description:
      "Choose from AI outsourcing, dedicated AI teams, or project-based AI development depending on your business needs.",
  },
];

function SectionShell({
  eyebrow,
  title,
  description,
  centered = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  centered?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={centered ? "text-center" : "text-left"}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f05323]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="service-section-heading text-white">{title}</h2>
          {description ? (
            <div
              className={`service-section-description mt-5 text-white/75 ${
                centered ? "mx-auto max-w-4xl" : "max-w-4xl"
              }`}
            >
              {description}
            </div>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

function CardSurface({
  title,
  children,
  step,
}: {
  title: string;
  children: ReactNode;
  step?: string;
}) {
  return (
    <article className="service-card-surface h-full p-6 sm:p-8">
      {step ? (
        <div className="mb-5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-sm font-semibold text-white">
          {step}
        </div>
      ) : null}
      <h3 className="service-card-title-sm text-white">{title}</h3>
      <div className="mt-4 text-white/75 service-rich-text">{children}</div>
    </article>
  );
}

function BulletCardSurface({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <article className="service-card-surface h-full p-6 sm:p-8">
      <h3 className="service-card-title-sm text-white">{title}</h3>
      <div className="mt-4 service-rich-text text-white/75">
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function TextCardSurface({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="service-card-surface h-full p-6 sm:p-8">
      <h3 className="service-card-title-sm text-white">{title}</h3>
      <p className="service-body mt-4 text-white/75">{description}</p>
    </article>
  );
}

export default function HireAiDevelopersPage() {
  return (
    <main className="bg-[var(--color-bg)] text-white">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="service-card-surface rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h1 className="service-section-heading-lg text-white">
              Hire AI Developers for Custom AI & Machine Learning Solutions
            </h1>
            <p className="service-section-description mt-6 max-w-4xl text-white/75">
              We help businesses create AI and machine learning solutions that
              grow with your operations, automating key processes, and driving
              smarter, faster results. Our pre-vetted AI developers can join
              your team in just two weeks.
            </p>
          </div>
        </div>
      </section>

      <SectionShell
        title="Hire a Dedicated Offshore Developer"
        description={
          <p>
            {"We help businesses of all sizes\u2014from startups to enterprise\u2014scale faster with pre-vetted, experienced developers ready to join your team."}
          </p>
        }
        centered
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {dedicatedDeveloperRoles.map((role) => (
            <BulletCardSurface
              key={role.title}
              title={role.title}
              bullets={role.bullets}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="How You Can Hire Offshore Developers Through TECHIONIK"
        description={<p>Explore our simplified, transparent hiring process:</p>}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offshoreHiringProcess.map((step) => (
            <CardSurface key={step.title} title={step.title} step={step.step}>
              <p>{step.description}</p>
            </CardSurface>
          ))}
        </div>
      </SectionShell>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#161b22] via-[#12161d] to-[#0c1016] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="service-section-heading text-white">
              Build Your Dream Tech Team Offshore
            </h2>
            <p className="service-section-description mt-5 max-w-4xl text-white/75">
              Access pre-vetted developers across top tech stacks, ready to
              accelerate your projects and scale your business efficiently.
            </p>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Section 1: Software Services Expertise"
        title="What types of software services do our developers excel in?"
        description={
          <p>
            {"Our developers bring deep expertise across end-to-end software development. Here\u2019s what they can do for you:"}
          </p>
        }
      >
        <div className="service-card-surface p-6 sm:p-8 lg:p-10">
          <div className="service-rich-text text-white/75">
            <ul>
              {softwareServicesExpertise.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}</strong>
                  {" \u2013 "}
                  {service.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        title="Technical Experts in Various Tech Stacks"
        description={
          <>
            <p>Our Technical Experts in Various Tech Stacks</p>
            <p className="mt-4">
              {"Leverage top-tier global talent to enhance your projects\u2019 innovation and execution, delivering exceptional results."}
            </p>
          </>
        }
        centered
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {techStackCards.map((card) => (
            <BulletCardSurface
              key={card.title}
              title={card.title}
              bullets={card.bullets}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow={"Hire AI Developers Page \u2013 Optimized"}
        title="Our Tailored AI Development Solutions for Businesses of All Sizes"
        description={
          <p>
            Expand your business with our expert AI developers who build
            intelligent automation, machine learning models, and scalable AI
            solutions for startups, SMEs, and enterprises. Our team helps
            organizations integrate AI technologies to improve efficiency,
            enhance customer experience, and drive data-driven decision making.
          </p>
        }
        centered
      >
        <div className="mb-6">
          <p className="service-card-title-sm text-white">AI Developers Solutions</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {aiDeveloperSolutions.map((card) => (
            <TextCardSurface
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="How We Hire AI Developers"
        description={
          <p>
            Our technical recruitment team follows a strict process to hire the
            best AI engineers and machine learning experts.
          </p>
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {aiHiringSteps.map((step) => (
            <CardSurface key={step.title} title={step.title} step={step.step}>
              <>
                <p>{step.description}</p>
                {step.bullets ? (
                  <div className="mt-4 service-rich-text text-white/75">
                    <ul>
                      {step.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            </CardSurface>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Hire The Best AI Developers with TECHIONIK"
        description={
          <p>
            Our AI outsourcing models help companies integrate advanced
            artificial intelligence capabilities into their products and
            services.
          </p>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="service-card-surface h-full p-6 sm:p-8">
            <h3 className="service-card-title-sm text-white">
              Technical AI Developers Skills
            </h3>
            <div className="mt-4 service-rich-text text-white/75">
              <ol>
                {technicalAiSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
            </div>
          </article>

          <article className="service-card-surface h-full p-6 sm:p-8">
            <h3 className="service-card-title-sm text-white">
              Non-Technical Skills
            </h3>
            <div className="mt-4 service-rich-text text-white/75">
              <ol>
                {nonTechnicalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </SectionShell>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#10151d] via-[#0e131a] to-[#090d12] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="service-section-heading text-white">
              Cut Costs, Not Talent
            </h2>
            <p className="service-section-description mt-5 max-w-4xl text-white/75">
              Hire expert AI developers who work in your time zone and deliver
              high-performance AI solutions, machine learning models, and
              automation systems faster.
            </p>
          </div>
        </div>
      </section>

      <SectionShell
        title="Choose the Best Suitable AI Development Cooperation Model"
        description={
          <p>
            Hire top AI experts to accelerate innovation, automate business
            processes, and build intelligent products powered by artificial
            intelligence.
          </p>
        }
        centered
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {cooperationModels.map((model) => (
            <BulletCardSurface
              key={model.title}
              title={model.title}
              bullets={model.bullets}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Why Choose TECHIONIK for AI Development?"
        description={
          <p>
            We deliver powerful AI software solutions and intelligent
            automation that help businesses innovate faster and scale globally.
          </p>
        }
        centered
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {whyChooseCards.map((item) => (
            <TextCardSurface
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
