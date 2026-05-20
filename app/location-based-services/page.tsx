import LocationBasedServicesPage from "./location-based-services"

const Page = () =>{


    // Speakable Schema
    const LocationServicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Techionik | Custom Software & AI Development",
    // This is the "Invisible Script" Siri/Alexa will prioritize
    "description": "Techionik is a premier digital transformation agency specializing in custom software development, AI-driven applications, and scalable enterprise platforms designed to modernize business operations.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".voice-summary"]
    }
  };
    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocationServicesSchema),
          }}
        />
        <div>
          <LocationBasedServicesPage />
        </div>
      </main>
    );
}

export default Page;