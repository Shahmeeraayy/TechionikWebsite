import type { HeroSlide } from "@/data/HeroSectionData";
import type { WhatYouGett } from "@/data/WhatYouGetData";
import type { SoftwareSolutions } from "@/data/SoftwareSolution";
import type { ServicesCTAInterface } from "@/data/servicesCTAData";
import type { WhatWeDo } from "@/data/what-we-do-data";
import type { SolutionWeDeliver } from "@/data/solutionWeDeliverData";
import type { IndustriesData } from "@/data/Industries Data/types";
import type { OutsourcingSlide } from "@/data/outSourceModel";
import type { FAQ } from "@/data/FAQS";
import type { CaseStudyType } from "@/views/home/CaseStudies";
import type { TalentPoolData } from "@/data/Talent Pool/types";
import type { TrustLogoItem } from "@/components/TrustLogoStrip";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import WhatYouGet from "@/components/WhatYouGet";
import TrustLogoStrip from "@/components/TrustLogoStrip";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import ServicesCTA from "@/components/servicesCTA";
import TechStack from "@/views/home/TechStacks";
import WhatWeDoCard from "@/components/whatWeDoCard";
import IndustriesSection from "@/views/home/IndustriesSection";
import SolutionsWeDeliverComponent from "@/components/SolutionWeDeliver";
import OutSourceModels from "@/components/OutSourceModel";
import TechServices from "@/views/home/TechServices";
import CaseStudies from "@/views/home/CaseStudies";
import TalentPool from "@/views/home/TalentPool";
import OurClientSays from "@/components/OurClientSays";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import SoftwareDevelopmentInsights from "@/components/softwareInsights";
import FAQComponent from "@/views/home/FAQs";
import type { SoftwareInsights } from "@/data/softwareInsightsData";
import type { TechStackData } from "@/data/TechStack/AboutTeckStack";
import type { ServiceType as TechServicesData } from "@/data/TechServices/HomeTechServices";

export type ParentServiceTemplateVariant =
  | "default"
  | "compact"
  | "editorial"
  | "expanded";

export interface ParentServiceTemplateProps {
  variant?: ParentServiceTemplateVariant;
  narrative: string;
  schemaMarkup?: string | null;
  heroSlides: HeroSlide[];
  trustLogos?: TrustLogoItem[];
  whatYouGetData: WhatYouGett;
  whyChooseData: SoftwareSolutions | null;
  servicesCtaData: ServicesCTAInterface;
  techStackData: TechStackData;
  whatWeDoData: WhatWeDo | null;
  industriesData: IndustriesData | null;
  solutionsWeDeliverData: SolutionWeDeliver | null;
  outsourcingData: OutsourcingSlide;
  techServicesData: TechServicesData;
  normalizedCaseStudies: CaseStudyType[];
  talentPoolData: TalentPoolData;
  faqData: FAQ | null;
  softwareInsightsData: SoftwareInsights;
}

const variantClasses: Record<
  ParentServiceTemplateVariant,
  {
    shell: string;
    section: string;
    heroSpacing: string;
    techServicesSpacing: string;
    footerSpacing: string;
  }
> = {
  default: {
    shell: "overflow-x-hidden scroll-smooth",
    section: "max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20",
    heroSpacing: "pt-10",
    techServicesSpacing: "pt-15 pb-25",
    footerSpacing: "pt-10",
  },
  compact: {
    shell: "overflow-x-hidden scroll-smooth",
    section: "max-w-7xl mx-auto md:px-8 px-4 sm:px-6 lg:px-16",
    heroSpacing: "pt-8",
    techServicesSpacing: "pt-12 pb-20",
    footerSpacing: "pt-8",
  },
  editorial: {
    shell: "overflow-x-hidden scroll-smooth",
    section: "max-w-[90rem] mx-auto md:px-12 px-4 sm:px-6 lg:px-24",
    heroSpacing: "pt-12",
    techServicesSpacing: "pt-16 pb-28",
    footerSpacing: "pt-12",
  },
  expanded: {
    shell: "overflow-x-hidden scroll-smooth",
    section: "max-w-[96rem] mx-auto md:px-12 px-4 sm:px-6 lg:px-28",
    heroSpacing: "pt-14",
    techServicesSpacing: "pt-18 pb-28",
    footerSpacing: "pt-12",
  },
};

const ParentServiceTemplate = ({
  variant = "default",
  narrative,
  schemaMarkup,
  heroSlides,
  trustLogos,
  whatYouGetData,
  whyChooseData,
  servicesCtaData,
  techStackData,
  whatWeDoData,
  industriesData,
  solutionsWeDeliverData,
  outsourcingData,
  techServicesData,
  normalizedCaseStudies,
  talentPoolData,
  faqData,
  softwareInsightsData,
}: ParentServiceTemplateProps) => {
  const theme = variantClasses[variant] ?? variantClasses.default;

  return (
    <main className={theme.shell}>
      {schemaMarkup ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaMarkup,
          }}
        />
      ) : null}

      <div className="service-voice-narrative" style={{ display: "none" }}>
        {narrative}
      </div>

      <section id="hero">
        <HeroSection slides={heroSlides} showSubtitle={false} />
      </section>

      {trustLogos?.length ? <TrustLogoStrip logos={trustLogos} /> : null}

      <section className={`${theme.section} ${theme.heroSpacing}`}>
        <WhatYouGet data={whatYouGetData} />
      </section>

      {whyChooseData ? (
        <section className={`${theme.section} pt-10`}>
          <SoftwareSolution data={whyChooseData} />
        </section>
      ) : null}

      <section className={`${theme.section} pt-10`}>
        <ServicesCTA opacity={true} data={servicesCtaData} />
      </section>

      <section className={`${theme.section} pb-10`}>
        <TechStack data={techStackData} />
      </section>

      {whatWeDoData ? (
        <section className={`${theme.section} py-0`}>
          <WhatWeDoCard whatwedo={whatWeDoData} />
        </section>
      ) : null}

      {(industriesData?.slides?.length ?? 0) > 0 ? (
        <section className={`${theme.section} pt-20 pb-15`}>
          <IndustriesSection industries={industriesData as IndustriesData} />
        </section>
      ) : null}

      {solutionsWeDeliverData ? (
        <section>
          <SolutionsWeDeliverComponent data={solutionsWeDeliverData} />
        </section>
      ) : null}

      <section>
        <OutSourceModels data={outsourcingData} />
      </section>

      <section id="tech-services" className={`${theme.section} ${theme.techServicesSpacing}`}>
        <TechServices servicesData={techServicesData} />
      </section>

      <CaseStudies caseStudies={normalizedCaseStudies} />

      <section className={`${theme.section} py-15`}>
        <TalentPool data={talentPoolData} />
      </section>

      <section className={`${theme.section}`}>
        <OurClientSays />
      </section>

      {faqData ? (
        <section className={`${theme.section} pb-25`}>
          <FAQComponent data={faqData} />
        </section>
      ) : null}

      <section id="contact" className={`${theme.section} py-0`}>
        <FooterContact />
      </section>

      <section className={`${theme.section} ${theme.footerSpacing}`}>
        <SoftwareDevelopmentInsights data={softwareInsightsData} />
      </section>
    </main>
  );
};

export default ParentServiceTemplate;
