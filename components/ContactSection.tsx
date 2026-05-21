"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic, MicOff } from "lucide-react";
import { ContactPageData } from "../data/ContactData";

interface ContactSectionData {
  data: ContactPageData;
}

const ContactSection: React.FC<ContactSectionData> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { transcript, resetTranscript } = useSpeechRecognition();
  const [activeField, setActiveField] = useState<keyof typeof formData | null>(
    null,
  );
  const { badge, image, imageAlt, title, highlightedWord, description } = data;

  const getFieldValue = (field: keyof typeof formData) =>
    activeField === field ? transcript || formData[field] : formData[field];

  const syncTranscriptToForm = (field: keyof typeof formData) => {
    if (transcript) {
      setFormData((prev) => ({
        ...prev,
        [field]: transcript,
      }));
    }
  };

  const startListening = (field: keyof typeof formData) => {
    if (activeField && activeField !== field) {
      syncTranscriptToForm(activeField);
    }
    setActiveField(field);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    if (activeField) {
      syncTranscriptToForm(activeField);
    }
    SpeechRecognition.stopListening();
    setActiveField(null);
  };

  const toggleListening = (field: keyof typeof formData) => {
    if (activeField === field) {
      stopListening();
    } else {
      startListening(field);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeField) {
      syncTranscriptToForm(activeField);
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/thank-you");
    }, 1000);
  };

  const titleParts = title.split(highlightedWord);

  // 🧠 Structured Schema matching the Footer logic
  const contactToolSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        potentialAction: {
          "@type": "ContactAction",
          name: "submitGeneralInquiry",
          description:
            "Submit a general project inquiry or business contact request.",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.techionik.com/api/contact",
            httpMethod: "POST",
            contentType: "application/json",
          },
          expects: [
            {
              "@type": "PropertyValueSpecification",
              valueName: "name",
              valueRequired: true,
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "email",
              valueRequired: true,
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "phone",
              valueRequired: true,
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "message",
              valueRequired: false,
            },
          ],
        },
      },
    ],
  };

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen flex items-center">
      {/* 🧠 WebMCP Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactToolSchema) }}
      />

      <div className="absolute inset-0 z-0 opacity-80">
        <Image
          src={image}
          alt={imageAlt || "Background Decoration"}
          fill
          className="object-fill"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-[--color-bg] px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-orange" />
            <span className="text-white text-sm font-medium">{badge}</span>
          </div>

          <h2 className="service-section-heading-lg text-[var(--color-muted)] max-w-4xl">
            {titleParts[0]}
            <span className="text-dark-gradient">{highlightedWord}</span>
            {titleParts[1]}
          </h2>

          <p
            className="service-section-description text-[var(--color-text)] max-w-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="bg-white/8 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl max-w-xl ml-auto w-full">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            toolname="submitGeneralInquiry"
            tooldescription="Sends a general business inquiry to the Techionik team for project discussions."
            toolautosubmit="true"
          >
            <h2 className="service-card-title text-white">{data?.formTitle}</h2>
            <p className="service-body text-gray-300">{data?.formDesc}</p>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="service-body text-white">Name</label>
              <div className="flex gap-2">
                <input
                  value={getFieldValue("name")}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  placeholder="Enter Your Name"
                  data-description="The full legal or business name of the inquirer."
                />
                <button
                  type="button"
                  onClick={() => toggleListening("name")}
                  className="p-2"
                >
                  {activeField === "name" ? (
                    <MicOff size={16} className="text-red-500" />
                  ) : (
                    <Mic size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="service-body text-white">Email</label>
              <div className="flex gap-2">
                <input
                  value={getFieldValue("email")}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  placeholder="Enter Your Email"
                  data-description="A valid corporate email address for follow-up."
                />
                <button
                  type="button"
                  onClick={() => toggleListening("email")}
                  className="p-2"
                >
                  {activeField === "email" ? (
                    <MicOff size={16} className="text-red-500" />
                  ) : (
                    <Mic size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="service-body text-white">Phone</label>
              <div className="flex gap-2">
                <input
                  value={getFieldValue("phone")}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  placeholder="Enter Your Phone"
                  data-description="Primary contact number including country code."
                />
                <button
                  type="button"
                  onClick={() => toggleListening("phone")}
                  className="p-2"
                >
                  {activeField === "phone" ? (
                    <MicOff size={16} className="text-red-500" />
                  ) : (
                    <Mic size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="service-body text-white">Message</label>
              <div className="flex gap-2">
                <textarea
                  rows={3}
                  value={getFieldValue("message")}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white"
                  placeholder="Discuss About Your Project..."
                  data-description="Detailed project requirements, goals, and technical specifications."
                />
                <button
                  type="button"
                  onClick={() => toggleListening("message")}
                  className="p-2"
                >
                  {activeField === "message" ? (
                    <MicOff size={16} className="text-red-500" />
                  ) : (
                    <Mic size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-gradient-to-r from-[#FF6B35] to-[#D94E1F] text-white py-4 rounded-2xl transition-all hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
