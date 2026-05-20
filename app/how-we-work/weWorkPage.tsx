import AboutSection from "@/components/sections/home/hero/AboutSection";
import { HowWeWorkData } from "@/data/how-we-work-data";
import Tabs from "@/components/layout/Tabs";

import ImageOverLaySection from "../../components/sections/how-we-work-component/imageOverlaySection";
import TechionikPrinciplesComponent from "../../components/sections/how-we-work-component/techionikPrinciples";
import { TechionikPrinciplesData } from "@/data/techionikPrinciplesdata";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";
import OurClients from "@/views/home/OurClients";
import Certifications from "../../components/sections/how-we-work-component/certificates";
import { caseStudies } from "@/data/CaseStudy";
import CaseStudies from "@/views/home/CaseStudies";

import ContactHero from "@/components/ConnectHero";
import WhatWeDoCard from "@/components/whatWeDoCard";
import { WhatWeDoData } from "@/data/what-we-do-data";
import CooperateCard from "../../components/sections/how-we-work-component/cooperate-card";
import { HowWeCooperateData } from "@/data/how-we-cooperate-data";
import TechionikGlobal from "../../components/sections/how-we-work-component/techionikGlobal";
import { contactHeroContent } from "@/data/ConnectHero";
import { getNormalizedCaseStudies } from "../api/All-CaseStudies/utils/caseStudyComponent";

const HowWeWork = async () => {
  const caseStudiesData = await getNormalizedCaseStudies();
  return (
    <main>
      <div>
        <AboutSection slides={HowWeWorkData} />
      </div>

      {/* <div>
        <Tabs />
      </div> */}
      {/* <div>
        <SoftawreDevelopmentInsights data={SoftwareInsightData}/>
      </div> */}
      <div >
        <ImageOverLaySection
          image="/images/how-we-work/team-discussion.jpg"
          heading="Technology Partnership"
          description="TECHIONIK has championed technological innovation since 1991. Now, with more than 2000 experts across Europe, the US and Canada, we help clients overcome business challenges with custom software engineering and consultancy services that add tangible value."
          spanText="Problem Solving"
        />
      </div>
      <div className="max-w-8xl mx-auto md:px-10 px-4 mt-30 sm:px-6 lg:px-20">
        <TechionikPrinciplesComponent
          data={TechionikPrinciplesData}
          heading="TECHIONIK Principles That Power Every Client Partnership"
          paragraph="We do not believe in complicated playbooks or hidden processes. What keeps our teams sharp and our clients confident are a few principles we never compromise on."
        />
      </div>

      {/* Techionik Global Section */}
      <section className="max-w-8xl mx-auto md:px-10 px-4 pt-10 sm:px-6 lg:px-20 space-y-10">
        <div>
          <h2 className=" text-muted w-full lg:w-[60%]">
            Techionik global nearshore software development team
          </h2>
          <p className=" text-muted w-full lg:w-[50%]">
            Our global presence spand 18 locations in key cities over key
            continents including Ukraine, Poland, Germany, Estonia, United
            Kingdom, United States, Canada and UAE
          </p>
        </div>
        <TechionikGlobal />
      </section>

      {/* How We Coperate Card */}
      <div className="max-w-8xl mx-auto md:px-10 px-4 pt-10 sm:px-6 lg:px-20 2xl:mt-70 x space-y-10">
        <div className="space-y-10">
          <h2 className="text-muted ">How We Cooperate</h2>
          <p className="text-muted">
            We do not believe in complicated playbooks or hidden processes. What
            keeps our teams sharp and our clients confident are some few
            principle we never compromise on
          </p>
        </div>
        <CooperateCard info={HowWeCooperateData} />
      </div>

      {/* What we do section */}
      <div className="space-y-10 mt-20 max-w-8xl mx-auto md:px-10 px-4 pt-10 sm:px-6 lg:px-20">
        <div>
          <WhatWeDoCard whatwedo={WhatWeDoData} />
        </div>
      </div>
      <section
        id="contact-hero  "
        className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20  "
      >
        <ContactHero content={contactHeroContent} />
      </section>
      <section className="">
        <CaseStudies caseStudies={caseStudiesData} />
      </section>
      <section className="max-w-8xl mx-auto md:px-10 sm:px-6 pt-15">
        <Certifications />
      </section>
      {/* <div className="mt-15 mb-20">
        <OurClients />
      </div> */}
      <div  className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-15">
        <FooterContact />
      </div>
    </main>
  );
};

export default HowWeWork;
