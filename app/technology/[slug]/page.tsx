import HeroSection from "@/components/sections/home/hero/HeroSection";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import FAQComponent from "@/views/home/FAQs";
import OurClientSays from "@/components/OurClientSays";
import TechnologyTechStacks from "../../../components/sections/technologyComponents/techStack";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import OutsourcingModels from "@/components/OutSourceModel";
import ServiceWeProvide from "../../../components/sections/technologyComponents/serviceWeProvide";
import ThreeColumnSection from "@/components/sections/technologyComponents/chooseNext";
import ContactHero from "@/components/ConnectHero";

// Import the explicitly typed transformed interface from our utility
import {
  getSingleTechnology,
  TransformedSingleTechnology,
} from "@/app/api/technology/utils/getSingleTechnology"; // Adjust path if needed
import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

interface Props {
  data: TransformedSingleTechnology;
}

const TechnologyDetailClient = async ({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) => {
  const { slug } = await params;
  const data = await getSingleTechnology(slug);
  if (!data) {
    return notFound();
  }
  //   const unifiedTechDetailSchema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "Organization",
  //       "@id": "https://www.techionik.com/#organization",
  //       "name": "Techionik",
  //       "url": "https://www.techionik.com",
  //       "logo": "https://www.techionik.com/logo.png"
  //     },
  //     {
  //       "@type": "WebPage",
  //       "@id": `https://www.techionik.com/technology/${slug}#webpage`,
  //       "url": `https://www.techionik.com/technology/${slug}`,
  //       "name": data?.metaTitle || data?.name,
  //       "about": { "@id": "https://www.techionik.com/#organization" },
  //       "description": data?.metaDescription || data?.shortDescription,
  //       "speakable": {
  //         "@type": "SpeakableSpecification",
  //         "cssSelector": [".tech-detail-voice-narrative"]
  //       },
  //       "mainEntity": [
  //         // 1. SERVICES WE PROVIDE (Data Right)
  //         {
  //           "@type": "ItemList",
  //           "name": `${data?.name} Services We Provide`,
  //           "description": data?.extraSection?.description,
  //           "itemListElement": (data?.extraSectionServices || []).map((srv: any, i: number) => ({
  //             "@type": "ListItem",
  //             "position": i + 1,
  //             "name": srv.title,
  //             "description": srv.description
  //           }))
  //         },
  //         // 2. WHY CHOOSE TECHNOLOGY (Technical Differentiators)
  //         {
  //           "@type": "ItemList",
  //           "name": data?.whyChooseTechnology?.mainTitle || "Why Choose This Technology",
  //           "description": data?.whyChooseTechnology?.mainDescription,
  //           "itemListElement": (data?.whyChooseTechnology?.cards || []).map((card: any, i: number) => ({
  //             "@type": "ListItem",
  //             "position": i + 1,
  //             "name": card.title,
  //             "description": card.description
  //           }))
  //         },
  //         // 3. WHY CHOOSE TECHIONIK (Brand Value)
  //         {
  //           "@type": "ItemList",
  //           "name": "Why Choose Techionik for this Technology",
  //           "description": data?.whyChooseTechionik?.description,
  //           "itemListElement": (data?.whyChooseTechionik?.items || []).map((wItem: any, i: number) => ({
  //             "@type": "ListItem",
  //             "position": i + 1,
  //             "name": wItem.title,
  //             "description": wItem.description
  //           }))
  //         }
  //       ]
  //     }
  //   ]
  // };
  // const data = await
  return (
    <main>
      {/* 1. Structural + Speakable JSON-LD */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedTechDetailSchema) }}
      /> */}

      {data?.addScheema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: data.addScheema,
          }}
        />
      )}

      {/* 2. Hidden Narrator for AI Voice Assistants */}
      <div className="tech-detail-voice-narrative" style={{ display: "none" }}>
        {`Techionik provides expert solutions in ${data?.name}. 
        Our services include ${data?.extraSectionServices?.map((s: any) => s.title).join(", ")}. 
        ${data?.whyChooseTechnology?.mainDescription}`}
      </div>
      {data?.heroSlides && (
        <div>
          <HeroSection slides={data.heroSlides} />
        </div>
      )}

      {data && (
        <div className=" pt-10 pb-15">
          <ServiceWeProvide
            dataleft={data.extraSection}
            dataright={data.extraSectionServices}
          />
        </div>
      )}

      {data?.outsourcingModels && (
        <section id="outsourcing-models">
          <OutsourcingModels data={data.outsourcingModels as any} />
        </section>
      )}

      {data?.cta && (
        <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-20 pt-5">
          <ContactHero content={data.cta} />
        </section>
      )}

      {data?.whyChooseTechnology &&
        data.whyChooseTechnology.cards.length > 0 && (
          <section className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 mt-10 mb-5">
            <ThreeColumnSection stepsData={data.whyChooseTechnology} />
          </section>
        )}

      {/* --- Mapped Software Solution to API's whyChooseTechionik --- */}
      {data?.whyChooseTechionik && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
          <SoftwareSolution data={data.whyChooseTechionik as any} />
        </div>
      )}

      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 pb-15">
        <TechnologyTechStacks />
      </div>

      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 pt-10">
        <OurClientSays />
      </div>

      {data?.faq && (
        <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 py-0">
          <FAQComponent data={data.faq} />
        </div>
      )}

      <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-16 py-20">
        <FooterContact />
      </div>
    </main>
  );
};

export default TechnologyDetailClient;
