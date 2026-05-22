import type { Metadata } from "next";
import { headers } from "next/headers";
import OurClientPage from "./ClientsPage"; // Your 'use client' component
import { fetchClients } from "@/app/api/our-clients/utils/getClients";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techionik.com";

  const protocol =
    headersList.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");

  const pathname = "/our-clients";
  const canonicalUrl = `${protocol}://${host}${pathname}`;

  const description =
    "See the global businesses that trust Techionik for custom software and AI solutions. We build lasting partnerships through innovation and excellence.";

  return {
    title: "Our Clients | Techionik - Trusted by Global Business Leaders",
    description,
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "Techionik clients",
      "global business partners",
      "trusted software agency",
      "software development portfolio",
      "client success stories",
      "Techionik partners",
    ],
    openGraph: {
      title: "Our Clients | Techionik - Trusted by Global Business Leaders",
      description,
      url: canonicalUrl,
      siteName: "Techionik",
      images: [
        {
          url: `${protocol}://${host}/images/og/clients-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Techionik Our Clients",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Clients | Techionik - Trusted Business Partners",
      description,
      images: [`${protocol}://${host}/images/og/clients-og.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const ClientsPage = async () => {
  // 1. Fetch live client data on the server for SEO and AI agents
  const clientsData = await fetchClients();
  const topClients = (clientsData || [])
    .slice(0, 5)
    .map((c) => c.name)
    .join(", ");
  const unifiedClientsSchema = {
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
        "@type": "CollectionPage",
        "@id": "https://www.techionik.com/our-clients#webpage",
        url: "https://www.techionik.com/our-clients",
        name: "Our Clients | Techionik - Trusted Business Partners",
        about: { "@id": "https://www.techionik.com/#organization" },
        description:
          "Discover the global brands and businesses that partner with Techionik for AI and custom software development.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".clients-voice-narrative"],
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Techionik Client Directory",
          numberOfItems: clientsData?.length || 0,
          itemListElement: (clientsData || []).map((client, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Organization",
              name: client.name,
              image: client.logo,
              // Including Industry and Service as metadata
              knowsAbout: [client.industry, ...client.services],
              url: client.href.startsWith("http")
                ? client.href
                : `https://www.techionik.com${client.href}`,
            },
          })),
        },
      },
    ],
  };

  return (
    <div className="max-w-8xl mx-auto md:px-10 px-4 mt-30 sm:px-6 lg:px-20 space-y-10">
      {/* Injecting both schemas in a single array */}
      {/* 1. Master Unified Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unifiedClientsSchema),
        }}
      />

      {/* 2. Hidden Voice Source (The "Glue" for Speakable) */}
      <div className="clients-voice-narrative" style={{ display: "none" }}>
        {`Techionik is trusted by global business leaders across various industries. 
          Our partners include ${topClients}, and many more. 
          We specialize in providing tailored software solutions for industries such as ${[...new Set(clientsData.map((c) => c.industry))].slice(0, 3).join(", ")}.`}
      </div>

      {/* Pass the server-fetched data to the client-side component */}
      <OurClientPage info={clientsData} />
    </div>
  );
};

export default ClientsPage;
