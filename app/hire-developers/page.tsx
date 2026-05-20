import type { Metadata } from "next";
import { headers } from "next/headers";
import ContactSection from "@/components/ContactSection";
import HiringCard from "@/components/hirngCards";
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
import { contactPageData } from "@/data/hiringdata";
import { hiringData } from "@/data/hiringCardData";
import { TechexpertTechStack } from "@/data/TechnicalexpertTechStack";
import { tailoredSolutions } from "@/data/solutionsData";

import { stepsData } from "@/data/chooseNextjs";

import { hiringProcessData } from "@/data/hiring-processData";
import { skillsData } from "@/data/H_skillsData";
import { contactHeroContent } from "@/data/ConnectHero";
import { HiringPageCTAImageData } from "@/data/hiringPageCTAImageData";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import { softwaresolutionData } from "@/data/SoftwareSolution";
import { faqsData } from "@/data/FAQS";
import { servicesDataHome } from "@/data/TechServices/HomeTechServices";
import { outsourcingModelsData } from "@/data/outSourceModel";
import { ParentHirigList } from "@/app/api/ParentHiring/utils/getHirigList";
import { q } from "framer-motion/client";
import HireTechStack from "@/components/singleHiring/hireTechStack";
import { abouttechStackData } from "@/data/TechStack/AboutTeckStack";
// import { transformHireDeveloperPage } from "@/app/api/ParentHiring/utils/transformHiringPage";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";
  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const pathname = "/hire-developers";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

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
          url: `${protocol}://${host}/images/og/hiring-og.jpg`,
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
      images: [`${protocol}://${host}/images/og/hiring-og.jpg`],
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
export default async function hiring() {
  const page = await ParentHirigList("hire-developer"); // or params.slug
  console.log("----------------------------------", page?.addScheema);
  // const rawData = await ParentHirigList("hire-developer"); // or params.slug
  // const page = transformHireDeveloperPage(rawData);
  // console.log("----------------------------------",page);
  // if (!page) {
  //   return <div className="p-10 text-red-500">No data found</div>;
  // }

  // const roles =
  //   page.hiringPage.cards.map((c) => c.title).join(", ") || "";
  // const processCount = page.hiringProcess.steps.length || 0;

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
            image:
              page?.hero.image ||
              "/9e21d53faef01d178df2d585f80b1c7c58c68439.png",
            imageAlt: page?.hero.imageAlt || "Background Decoration",
            title: page?.hero.title || "Hire Offshore Developers",
            highlightedWord: page?.hero.subtitle || "Offshore",
            description:
              page?.hero.description ||
              "Have questions or want to learn more about AtomAI? Reach out to our team—we're here to help you take the next step.",
            formTitle: "Share What's in Your Mind",
            formDesc:
              "Please fill out the form ,we will back to you in a couple of buisness hours",
          }}
        />
      </section>
      <section id="hiringcard">
        <HiringCard
          data={{
            header: {
              mainTitle: page?.hiringPageData?.header?.mainTitle || "",
              highlightTitle:
                page?.hiringPageData?.header?.highlightTitle || "",
              subtitle: page?.hiringPageData?.header?.subtitle || "",
            },
            cards: (page?.hiringPageData?.cards || []).map((c) => ({
              id: c.id,
              title: c.title || "",
              category: c.category || "",
              icon: c.icon || "",
              features: c.features || [],
            })),
          }}
        />
      </section>
      {/* <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
        <HireTechStack data={abouttechStackData} />
      </section> */}
      <section
        id="contact-hero  "
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 "
      >
        <ThreeColumnSection
          stepsData={{
            mainTitle: page?.whyChooseNext?.mainTitle || "",
            middleTitle: page?.whyChooseNext?.middleTitle || "",
            endTitle: page?.whyChooseNext?.endTitle || "",
            mainDescription: page?.whyChooseNext?.mainDescription || "",
            cards: (page?.whyChooseNext?.cards || []).map((s) => ({
              id: s.id,
              title: s.title,
              description: s.description || "",
              icon: s.icon || "",
              label: s.label || "",
            })),
          }}
        />
      </section>
      <section
        id="contact-hero  "
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20  "
      >
        <ContactHero content={contactHeroContent} />
      </section>
      {/* <section
        id="tech-services"
        className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20"
      >
        <TechServices servicesData={servicesDataHome} />
      </section> */}
      <section id="hiringcard">
        <HiringCard
          data={{
            header: {
              mainTitle: page?.technicalExperts?.header?.mainTitle || "",
              highlightTitle:
                page?.technicalExperts?.header?.highlightTitle || "",
              subtitle: page?.technicalExperts?.header?.subtitle || "",
            },
            cards: (page?.technicalExperts?.cards || []).map((c) => ({
              id: c.id,
              title: c.title || "",
              category: c.category || "",
              icon: c.icon || "",
              features: c.features || [],
            })),
          }}
        />
      </section>
      <section
        id="alblog"
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20"
      >
        <TailoredSolutions
          data={{
            header: {
              title: page?.tailoredOffshore?.header?.title || "",
              middleTitle: page?.tailoredOffshore?.header?.middleTitle || "",
              lastTitle: page?.tailoredOffshore?.header?.lastTitle || "",
              description: page?.tailoredOffshore?.header?.description || "",
            },
            cards: (page?.tailoredOffshore?.cards || []).map((c) => ({
              id: c.id,
              title: c.title || "",
              description: c.description || "",
              bgPattern: c.bgPattern || "",
            })),
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
              mainTitle: page?.hiringProcess?.header?.mainTitle || "",
              highlightTitle: page?.hiringProcess?.header?.highlightTitle || "",
              subtitle: page?.hiringProcess?.header?.subtitle || "",
            },
            steps: (page?.hiringProcess?.steps || []).map((s) => ({
              id: s.id,
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
              mainTitle: page?.programmerSkills?.header?.mainTitle || "",
              highlightTitle:
                page?.programmerSkills?.header?.highlightTitle || "",
              subtitle: page?.programmerSkills?.header?.subtitle || "",
              brandName: page?.programmerSkills?.header?.brandName || "",
            },
            cards: (page?.programmerSkills?.cards || []).map((c) => ({
              id: c.id,
              title: c.title || "",
              icon: c.icon || "",
              skills: c.skills || [],
            })),
          }}
        />
      </section>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
        <ContactHero
          opacity={1}
          content={{
            title: page?.cutCostNotTalent.title || "",
            highlight: page?.cutCostNotTalent.highlight || "",
            lgImage1: page?.cutCostNotTalent.lgImage1 || "/icons/react.svg",
            lgImage2: page?.cutCostNotTalent.lgImage2 || "/icons/react.svg",
            lgImage3: page?.cutCostNotTalent.lgImage3 || "/icons/php.svg",
            lgImage4: page?.cutCostNotTalent.lgImage4 || "/icons/react.svg",
            smImage1: page?.cutCostNotTalent.smImage1 || "/icons/java.svg",
            smImage2: page?.cutCostNotTalent.smImage2 || "/icons/angular.svg",
            smImage3: page?.cutCostNotTalent.smImage3 || "/icons/c++.svg",
            smImage4: page?.cutCostNotTalent.smImage4 || "/icons/css.svg",
            description: page?.cutCostNotTalent.description || "",
            backgroundImage: page?.cutCostNotTalent.backgroundImage || "",
            buttonText: page?.cutCostNotTalent.buttonText || "",
            buttonLink: page?.cutCostNotTalent.buttonLink || "",
            buttonVariant: "glass",
            // buttonIcon: page?.cutCostNotTalent?.buttonIcon || "",
          }}
        />
      </section>
      <section id="outsourcingmodel">
        <OutsourcingModels
          data={{
            title: page?.outsourcing?.slides[0]?.title || "",
            MiddleTitle: page?.outsourcing?.slides[0]?.MiddleTitle || "",
            lastTitle: page?.outsourcing?.slides[0]?.lastTitle || "",
            description: page?.outsourcing?.slides[0]?.description || "",
            items: (page?.outsourcing?.slides[0]?.items || []).map((c) => ({
              title: c.title || "",
              description: c.description || "",
              image:
                c.image || "/images/ParentServices/outsourcingmedia/full.webp",
              hoverImage:
                c.hoverImage ||
                "/images/ParentServices/outsourcingmedia/colorfull.webp",
            })),
          }}
        />
      </section>
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <SoftwareSolution
          data={{
            title: page?.whyChooseTechionik?.title || "",
            middleTitle: page?.whyChooseTechionik?.middleTitle || "",
            // lastTitle: page?.whyChooseTechionik?.lastTitle || "",
            description: page?.whyChooseTechionik?.description || "",
            items: (page?.whyChooseTechionik?.items || []).map(
              (item: any, i: number) => {
                const imageIndex = (i % 4) + 1;
                return {
                  id: item.id,
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
      <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
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
