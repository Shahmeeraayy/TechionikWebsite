import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import TailoredSolutions from "@/components/TailoredSolutions";
import OutsourcingModels from "@/components/OutSourceModel";
import OurClientSays from "@/components/OurClientSays";
import FAQComponent from "@/views/home/FAQs";
import ContactHero from "@/components/ConnectHero";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import ThreeColumnSection from "@/components/sections/technologyComponents/chooseNext";
import TechServices from "@/views/home/TechServices";
import HiringProcess from "@/components/HiringProcess";
import H_Skills from "@/components/H_Skills";
import { hiringData } from "@/data/hiringCardData";

import { stepsData } from "@/data/chooseNextjs";

import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
// import { SingleHiringList } from "@/app/api/SingleHiring/utils/getSingleHiring";
import ActionSection, {
  sampleData,
} from "@/components/singleHiring/dedicatedOffshoreDev";
import PriceList, {
  sampleDataa,
} from "@/components/singleHiring/hireDeveloper";
import TypeOfServices, {
  sampleDataaa,
} from "@/components/singleHiring/typesOfServices";
import { SingleHiringList } from "@/app/api/singleHiring/utils/getSingleHiring";
import { getSiteUrl } from "@/lib/site";
// import { transformHireDeveloperPage } from "@/app/api/ParentHiring/utils/transformHiringPage";

type ActionSectionCardItem = {
  title?: string;
  description?: string;
};

type ServiceLinkItem = {
  title?: string;
  slug?: string;
};

type PriceListCardItem = {
  pkgTitle?: string;
  priceRange?: string;
  description?: string;
};

type AdvantageCardItem = {
  id?: string | number;
  title?: string;
  description?: string;
};

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/hire-developers`;
  const ogImageUrl = `${siteUrl}/images/og/hiring-og.jpg`;

  const description =
    "Build your career at Techionik. Join our team of experts in custom software and AI development. We value talent, innovation, and professional growth.";

  return {
    title: "Hiring | Join the Techionik Team - Careers in Tech & AI",
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "tech jobs",
      "software developer hiring",
      "AI jobs",
      "careers at Techionik",
      "remote tech roles",
      "tech engineering jobs",
      "junior software developer",
      "senior developer roles",
    ],
    openGraph: {
      title: "Hiring | Join the Techionik Team - Careers in Tech & AI",
      description: description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Careers at Techionik",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Join Techionik | Engineering & AI Careers",
      description: description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// structural schema for web mcp and speakable
// const unifiedHiringSchema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     // 1. ORGANIZATION
//     {
//       "@type": "Organization",
//       "@id": "https://www.techionik.com/#organization",
//       name: "Techionik",
//       url: "https://www.techionik.com",
//       logo: "https://www.techionik.com/logo.png",
//     },
//     // 2. WEBPAGE & SPEAKABLE
//     {
//       "@type": "WebPage",
//       "@id": "https://www.techionik.com/hiring#webpage",
//       url: "https://www.techionik.com/hiring",
//       name: "Hire Dedicated Offshore Developers | Techionik",
//       about: { "@id": "https://www.techionik.com/#organization" },
//       description:
//         "Hire dedicated offshore developers from Techionik. Scale your team with experts in Frontend, Backend, and Full-Stack development.",
//       speakable: {
//         "@type": "SpeakableSpecification",
//         cssSelector: [".hiring-voice-narrative"],
//       },
//       mainEntity: { "@id": "https://www.techionik.com/hiring#hiring-service" },
//     },
//     // 3. MAIN HIRING SERVICE (The Bridge)
//     {
//       "@type": "Service",
//       "@id": "https://www.techionik.com/hiring#hiring-service",
//       name: "Offshore Developer Hiring Services",
//       provider: { "@id": "https://www.techionik.com/#organization" },
//       description:
//         "Techionik provides top-tier offshore talent for startups, SMBs, and large-scale enterprises.",
//       subjectOf: [
//         { "@id": "https://www.techionik.com/hiring#roles" },
//         { "@id": "https://www.techionik.com/hiring#process" },
//         { "@id": "https://www.techionik.com/hiring#tech-stacks" },
//       ],
//     },
//     // 4. HIRING CARDS (Developer Roles)
//     {
//       "@type": "ItemList",
//       "@id": "https://www.techionik.com/hiring#roles",
//       name: "Available Developer Roles",
//       itemListElement: hiringData.cards.map((card, i) => ({
//         "@type": "ListItem",
//         position: i + 1,
//         name: `${card.title} ${card.category}`,
//         description: card.features.join(" "),
//       })),
//     },
//     // 5. THREE COLUMN SECTION (Hiring Process)
//     {
//       "@type": "ItemList",
//       "@id": "https://www.techionik.com/hiring#process",
//       name: "How to Hire Developers through Techionik",
//       itemListElement: stepsData.cards.map((step, i) => ({
//         "@type": "ListItem",
//         position: i + 1,
//         name: step.title,
//         description: step.description,
//       })),
//     },
//     // 6. TECHNICAL EXPERT TECH STACK
//     {
//       "@type": "ItemList",
//       "@id": "https://www.techionik.com/hiring#tech-stacks",
//       name: "Technical Expertise in Various Tech Stacks",
//       itemListElement: TechexpertTechStack.cards.map((card, i) => ({
//         "@type": "ListItem",
//         position: i + 1,
//         name: card.title,
//         description: card.features.join(" "),
//       })),
//     },
//   ],
// };

const roles = hiringData.cards.map((c) => c.title).join(", ");
const processCount = stepsData.cards.length;
export default async function HireDeveloper(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const page = await SingleHiringList(slug);
  console.log("----------------------------------", page);

  if (!page) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden scroll-smooth min-h-screen py-20">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedHiringSchema),
        }}
      /> */}

      {page?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: page.addScheema,
          }}
        />
      )}

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div className="hiring-voice-narrative" style={{ display: "none" }}>
        {`Techionik helps you hire dedicated offshore developers for your projects. 
          We provide experts in ${roles}. 
          Our transparent hiring process consists of ${processCount} simple steps to ensure you get the best global talent.`}
      </div>
      <section id="authorcard" className="blur-image-wrapper">
        <ContactSection
          data={{
            badge: "Get in touch with us",
            image: "/9e21d53faef01d178df2d585f80b1c7c58c68439.png",
            title: "Hire Offshore Developers",
            highlightedWord: "Offshore",
            description:
              "Have questions or want to learn more about AtomAI? Reach out to our team—we're here to help you take the next step.",
            formTitle: "Share What's in Your Mind",
            formDesc:
              "Please fill out the form ,we will back to you in a couple of buisness hours",
          }}
        />
      </section>
      <section>
        <ActionSection
          data={{
            title: page.actionSection.title || sampleData.title,
            subtitle: page.actionSection.subtitle || sampleData.subtitle,
            description:
              page.actionSection.description || sampleData.description,
            items: (page.actionSection.items || sampleData.items).map(
              (item: ActionSectionCardItem) => ({
                title: item.title || sampleData.items[0].title,
                description:
                  item.description || sampleData.items[0].description,
              }),
            ),
          }}
        />
      </section>
      <section
        id="contact-hero  "
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 "
      >
        <ThreeColumnSection
          stepsData={{
            mainTitle: page?.howCanHire?.title || "",
            middleTitle: page?.howCanHire?.subtitle || "",
            endTitle: "",
            mainDescription: page?.howCanHire?.description || "",
            cards: (page?.howCanHire?.items || []).map((s, index) => ({
              id: index + 1,
              icon: "",
              title: s.title || "",
              description: s.description || "",
              label: s.title || "",
            })),
          }}
        />
      </section>
      <section
        id="contact-hero  "
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20  "
      >
        <ContactHero
          content={{
            title: page?.cta?.title || "",
            description: page?.cta?.description || "",
            buttonText: page?.cta?.buttonLabel || "",
            buttonLink: page?.cta?.buttonLink || "",
            buttonVariant: "glass",
            // buttonIcon: page?.cta?.buttonIcon || "",
          }}
        />
      </section>
      <section>
        <TypeOfServices
          data={{
            title: page?.typeOfServices?.title || "",
            middleTitle: page?.typeOfServices?.middleTitle || "",
            lastTitle: page?.typeOfServices?.lastTitle || "",
            description: page?.typeOfServices?.description || "",
            image: page?.typeOfServices?.image || sampleDataaa.image,
            services: (
              page?.typeOfServices?.services || sampleDataaa.services
            ).map((s: ServiceLinkItem) => ({
              title: s.title || "",
              slug: s?.slug ? `/services/${s.slug}` : "",
            })),
          }}
        />
      </section>
      <section>
        <PriceList
          data={{
            title: page.priceList.title || sampleDataa.title,
            description: page.priceList.description || sampleDataa.description,
            items: (page.priceList.items || sampleDataa.items).map(
              (item: PriceListCardItem) => ({
                pkgTitle: item.pkgTitle || sampleDataa.items[0].pkgTitle,
                priceRange: item.priceRange || sampleDataa.items[0].priceRange,
                description:
                  item.description || sampleDataa.items[0].description,
              }),
            ),
          }}
        />
      </section>
      <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20"
      >
        <TechServices servicesData={servicesDataHome} />
      </section>
      <section
        id="alblog"
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <TailoredSolutions
          data={{
            header: {
              title: page?.solutionsForBusiness.title || "",
              middleTitle: "",
              lastTitle: "",
              description: page?.solutionsForBusiness?.description || "",
            },
            cards: (page?.solutionsForBusiness?.items || []).map(
              (c, index) => ({
                id: index + 1,
                title: c.title || "",
                description: c.description || "",
                bgPattern: "",
              }),
            ),
          }}
        />
      </section>
      <section
        id="hiringprocess"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <HiringProcess
          data={{
            header: {
              mainTitle: page?.howWeHireDeveloper?.title || "",
              highlightTitle: "",
              subtitle: page?.howWeHireDeveloper?.subtitle || "",
              description: page?.howWeHireDeveloper?.description || "",
            },
            steps: (page?.howWeHireDeveloper?.items || []).map((s, index) => ({
              id: String(index + 1).padStart(2, "0"),
              title: s.title || "",
              description: s.description || "",
            })),
          }}
        />
      </section>
      <section
        id="alblog"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <H_Skills
          data={{
            header: {
              mainTitle: page?.hireBestDeveloper.title || "",
              highlightTitle: page?.hireBestDeveloper?.lastTitle || "",

              subtitle: page?.hireBestDeveloper?.subtitle || "",
              description: page?.hireBestDeveloper?.description,

              brandName: "",
            },
            cards: (page?.hireBestDeveloper?.items || []).map((c, index) => ({
              id: index + 1,
              title: c.title || "",
              icon: c.icon || "",
              description: c.description || "",
            })),
          }}
        />
      </section>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
        <ContactHero
          opacity={1}
          content={{
            title: page?.footerCta?.title || "",
            description: page?.footerCta?.description || "",
            buttonText: page?.footerCta?.buttonLabel || "",
            buttonLink: page?.footerCta?.buttonLink || "",
            buttonVariant: "glass",
            // buttonIcon: page?.cutCostNotTalent?.buttonIcon || "",
          }}
        />
      </section>
      <section id="outsourcingmodel">
        <OutsourcingModels
          data={{
            title: page?.choiceBestModel?.title || "",
            MiddleTitle: page?.choiceBestModel?.subtitle || "",
            lastTitle: page?.choiceBestModel?.lastTitle || "",
            description: page?.choiceBestModel?.description || "",
            items: (page?.choiceBestModel?.items || []).map((c) => ({
              title: c.title || "",
              description: c.description || "",
              image: "/images/ParentServices/outsourcingmedia/full.webp",
              hoverImage:
                "/images/ParentServices/outsourcingmedia/colorfull.webp",
            })),
          }}
        />
      </section>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <SoftwareSolution
          data={{
            title: page?.advantageOfHiring?.title || "",
            middleTitle: "",
            // lastTitle: page?.whyChooseTechionik?.lastTitle || "",
            description: page?.advantageOfHiring?.description || "",
            items: (page?.advantageOfHiring?.items || []).map(
              (item: AdvantageCardItem, i: number) => {
                const imageIndex = (i % 4) + 1;
                return {
                  id: i + 1,
                  title: item.title || "",
                  description: item.description || "",
                  image: `/images/about/software-solution/aiLayer${imageIndex}.svg`,
                  hoverImage: `/images/about/software-solution/aiLayer${imageIndex}-hover.svg`,
                  alt: item?.title ?? "Dummy Alt",
                };
              },
            ),
          }}
        />
      </section>
      <section>
        <TechServices
          servicesData={{
            title: page?.emergingTechnologies?.title || "",
            gradientText: page?.emergingTechnologies?.middleTitle || "",
            afterGradientText: page?.emergingTechnologies?.lastTitle || "",
            description: page?.emergingTechnologies?.description || "",
            services: (page?.emergingTechnologies?.items || []).map(
              (item, index) => ({
                id: index + 1,
                title: item.title || "",
                description: item.description || "",
                image: item.image || "",
                ctaText:
                  page?.emergingTechnologies?.buttonLabel || "Explore More",
                ctaLink: page?.emergingTechnologies?.buttonLink || "#",
              }),
            ),
          }}
        />
      </section>
      <section
        id="ourclient-says"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 "
      >
        <OurClientSays />
      </section>
      <section
        id="FAQComponent"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <FAQComponent
          data={{
            mainTitle: "Software Development",
            spanTitle: "FAQs",
            faq:
              page?.faq?.map((f, index) => ({
                id: index + 1,
                question: f.question || "",
                answer: f.answer || "",
              })) || [],
          }}
        />
      </section>

      <section
        id="footercontact"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pt-20"
      >
        <FooterContact />
      </section>
    </main>
  );
}
