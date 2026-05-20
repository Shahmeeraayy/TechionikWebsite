import ContactHero from "@/components/ConnectHero";
import CTASection from "@/components/CTAComponent";
import OurExpert from "@/components/OurExpert";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import TeamCard from "@/components/TeamCards";
import { CeoSuiteData } from "@/data/ceoSuiteData";
import { contactHeroContent } from "@/data/ConnectHero";
import { leadershipSaysData } from "@/data/leadershipSaysData";
import { teamHeading, teamSections } from "@/data/TeamData";
// import { section } from "framer-motion/client";

const CeoSuite = () => {


  // Speakable Schema
const unifiedCeoSuiteSchema = {
  
  "@context": "https://schema.org",
  "@graph": [
    // 1. ORGANIZATION
    {
      "@type": "Organization",
      "@id": "https://www.techionik.com/#organization",
      "name": "Techionik",
      "url": "https://www.techionik.com",
      "logo": "https://www.techionik.com/logo.png"
    },
    // 2. WEBPAGE & SPEAKABLE
    {
      "@type": "WebPage",
      "@id": "https://www.techionik.com/ceo-suite#webpage",
      "url": "https://www.techionik.com/ceo-suite",
      "name": "Leadership & Vision | Techionik CEO Suite",
      "about": { "@id": "https://www.techionik.com/#organization" },
      "description": "Meet the leadership team at Techionik. Driven by mission, vision, and a philosophy of exceptional engineering.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".ceo-voice-narrative"]
      },
      "mainEntity": [
        { "@id": "https://www.techionik.com/ceo-suite#leadership-team" },
        { "@id": "https://www.techionik.com/ceo-suite#expert-advisors" }
      ]
    },
    // 3. EXECUTIVE LEADERSHIP (Team Data)
    {
      "@type": "ItemList",
      "@id": "https://www.techionik.com/ceo-suite#leadership-team",
      "name": "Executive Leadership Team",
      "itemListElement": teamSections.map((section, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Person",
          "name": section.member.name,
          "jobTitle": section.member.position,
          "image": section.member.image,
          "sameAs": [section.member.socialLink],
          "description": section.description // Connecting the mission/vision to the person
        }
      }))
    },
    // 4. EXPERT ADVISORS (OurExpert Data)
    {
      "@type": "ItemList",
      "@id": "https://www.techionik.com/ceo-suite#expert-advisors",
      "name": "Strategic Experts & Leadership",
      "itemListElement": leadershipSaysData.experts.map((expert, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Person",
          "name": expert.name,
          "jobTitle": expert.role,
          "image": expert.image
        }
      }))
    }
  ]
};
const leaders = teamSections.map(s => `${s.member.name}, our ${s.member.position}`).join("; ");
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedCeoSuiteSchema) }}
      />
      
      {/* 2. Hidden Voice Source */}
      <div className="ceo-voice-narrative" style={{ display: 'none' }}>
        {`Techionik's leadership team is dedicated to empowering businesses through AI and engineering. 
          Our team is led by ${leaders}. 
          We are committed to a mission of accelerating innovation and driving sustainable growth.`}
      </div>
      <section id="hero">
        <HeroSection slides={CeoSuiteData} />
      </section>
      <section className="bg-[--color-bg] py-20 px-4 md:px-20 flex flex-col gap-20">
        <TeamCard heading={teamHeading} sections={teamSections} className="mx-auto" />
      </section>
      <section id="ourexpert">
        <OurExpert disableLinks={true} data={leadershipSaysData} />
      </section>
      <section className=" max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 pb-15">
        <ContactHero content={contactHeroContent}/>
      </section>
    </div>
  );
};
export default CeoSuite;
