import ContactSection from "@/components/ContactSection";
import LocationBaseServices from "@/components/LocationBaseServices";
import WhatYouGet from "@/components/WhatYouGet";
// import { contactPageData } from "@/data/ContactData";
import { contactSectionData } from "@/data/LocationBaseHeroData";
import { WhatYouGetHiringData } from "@/data/whatYouGetHiring";
import WhatYouGetHiringComponent from "@/components/whatYouGetHiring";
import SoftwareSolution from "@/components/sections/about/SoftwareSolution/page";
import { softwaresolutionData } from "@/data/SoftwareSolution";
import OurClientSays from "@/components/OurClientSays";
import TechionikGlobal from "@/components/sections/how-we-work-component/techionikGlobal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudyData } from "@/data/caseStudyData";
import CaseStudies from "@/views/home/CaseStudies";
import { section } from "framer-motion/client";
import { caseStudies } from "@/data/CaseStudy";
import Certifications from "@/components/sections/how-we-work-component/certificates";
import AllBlogs from "@/views/home/AllBlogs";
import AiSection from "@/views/home/AiAndMl";
import NearshoreSoftware from "@/components/nearShoreSoftware";
import { NearShoreSoftwareData } from "@/data/nearShoreSoftware";
import SetsTechionikApart from "@/components/setsTechionikApart";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";

const LocationBasedServicesPage = () => {
  return (
    <div>
      <section id="footercontact">
        <LocationBaseServices data={contactSectionData} />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
        <WhatYouGetHiringComponent data={WhatYouGetHiringData} />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 ">
        <SoftwareSolution data={softwaresolutionData} />
      </section>
      
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 ">
        <OurClientSays />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 space-y-6">
        <div className="text-muted max-w-full md:max-w-[70%] lg:max-w-[50%]">
          <h2>TECHIONIK global nearshore Software development team</h2>
          <p>
            Our global presence spans 18 locations in key cities over three
            continents – including Ukraine, Poland, Germany, Estonia, United
            Kingdom, USA, Canada and UAE.
          </p>
        </div>
        <TechionikGlobal />
      </section>
      <section>
        <NearshoreSoftware data={NearShoreSoftwareData}/>
      </section>
      <section>
        <SetsTechionikApart/>
      </section>
      <section id="case-studies" className="py-20">
        <CaseStudies caseStudies={caseStudies as any[]} />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20">
        <Certifications />
      </section>
      <section id="AllBlogs">
        <AllBlogs />
      </section>
      <section id="ai-section">
        <AiSection />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
        <FooterContact/>
      </section>
    </div>
  );
};

export default LocationBasedServicesPage;
