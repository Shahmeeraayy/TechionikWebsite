import type { Metadata } from "next";
import PartnerLogos from "@/components/layout/PartnerLogo";
import ContactSection from "@/components/ContactSection";
import TechionikGlobal from "@/components/sections/how-we-work-component/techionikGlobal";
import { contactPageData } from "@/data/ContactData";
import { CountryCardData } from "@/data/countryCardData";
// import TechionikGlobal from "how-we-work-component/techionikGlobal"
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.techionik.com";
  const pathname = "/contact-us";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    title: "Contact Us | Techionik - Custom Software & AI Development",
    description:
      "Get in touch with Techionik. Discuss your next project, explore partnerships, or ask questions about our custom software and AI solutions. Reach out now.",
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "contact Techionik",
      "hire software developers",
      "AI project consultation",
      "software development partnership",
      "get in touch Techionik",
      "IT agency contact",
      "software project estimation",
      "digital transformation consultation",
    ],
    openGraph: {
      title: "Contact Techionik | Custom Software & AI Development",
      description:
        "Get in touch with Techionik. Discuss your next project, explore partnerships, or ask questions about our custom software and AI solutions. Reach out now.",
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${baseUrl}/images/og/contact-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Contact Techionik — Custom Software & AI Development",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Techionik | Let's Talk Innovation",
      description:
        "Get in touch with Techionik. Discuss your next project, explore partnerships, or ask questions about our custom software and AI solutions. Reach out now.",
      images: [`${baseUrl}/images/og/contact-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function AboutPage() {
  const unifiedContactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        name: "Techionik",
        url: "https://www.techionik.com",
        logo: "https://www.techionik.com/logo.png",
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.techionik.com/contact-us#webpage",
        url: "https://www.techionik.com/contact-us",
        name: "Contact Techionik | Let's Talk Innovation",
        about: { "@id": "https://www.techionik.com/#organization" },
        description:
          "Reach out to Techionik for custom software and AI development consultation. We operate globally with offices in Pakistan, the UK, and the USA.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".contact-voice-narrative"],
        },
        mainEntity: CountryCardData.map((loc) => ({
          "@type": "LocalBusiness",
          name: `Techionik ${loc.countryName}`,
          telephone: loc.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.address,
            addressCountry: loc.countryName,
          },
          parentOrganization: {
            "@id": "https://www.techionik.com/#organization",
          },
        })),
      },
    ],
  };
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedContactSchema),
        }}
      />

      {/* 2. Hidden Voice Source for Siri/Alexa */}
      <div className="contact-voice-narrative" style={{ display: "none" }}>
        You can reach Techionik for custom software and AI projects. We have
        offices in Pakistan, the United Kingdom, and the United States. Our team
        is ready to discuss your digital transformation needs.
      </div>
      <section id="Contactus ">
        <ContactSection data={contactPageData} />
      </section>
      <section className="w-full" id="techionikGlobal ">
        <div className="px-6 md:px-10 lg:px-10 xl:px-20 space-y-2 pt-20">
          <h2 className="text-gradient">
            Our <span className="text-dark-gradient">Locations</span>
          </h2>
          <p className="text-muted">
            Our Operation Spans Over Three Countries Globally
          </p>
        </div>
        <TechionikGlobal />
      </section>
    </main>
  );
}
