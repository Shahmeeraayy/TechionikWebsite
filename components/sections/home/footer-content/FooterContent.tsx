"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic, MicOff } from "lucide-react";

const FooterContact = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 🧠 form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // 🎤 speech hook
  const { transcript, resetTranscript } = useSpeechRecognition();

  // track which field is active for voice
  const [activeField, setActiveField] = useState<keyof typeof formData | null>(
    null,
  );

  // 🧠 update field when speech changes
  useEffect(() => {
    if (!activeField || !transcript) return;

    const frame = window.requestAnimationFrame(() => {
      setFormData((prev) => ({
        ...prev,
        [activeField]: transcript,
      }));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [transcript, activeField]);

  const startListening = (field: keyof typeof formData) => {
    setActiveField(field);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
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
    if (loading || isSuccess) return;
    setLoading(true);

    // Mock API simulation
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Place this inside your FooterContact return block, right at the top
  const FooterContactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.techionik.com/#organization",
        potentialAction: {
          "@type": "ContactAction",
          name: "submitTechnicalConsultation", // Must match your toolname attribute exactly
          description:
            "Submit a request for technical analysis and project estimates.",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.techionik.com/api/contact", // Your actual endpoint
            httpMethod: "POST",
            contentType: "application/json",
          },
          expects: [
            {
              "@type": "PropertyValueSpecification",
              valueName: "na0me",
              valueRequired: true,
              description: "Full name of the inquirer",
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "email",
              valueRequired: true,
              description: "Business email address",
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "phone",
              valueRequired: true,
              description: "Primary phone number",
            },
            {
              "@type": "PropertyValueSpecification",
              valueName: "description",
              valueRequired: false,
              description: "Project details or technical inquiry",
            },
          ],
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FooterContactSchema),
        }}
      />
      {/* Card */}
      <div className="relative rounded-2xl border-2 border-[#2A2A34] bg-linear-to-br from-[#0c0f14] via-[#0b0e13] to-[#090c10] p-8 md:p-12 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Tell Us How We Can <span className="gradient-text">Help?</span>
            </h2>

            <p className="mt-3 max-w-md text-sm text-gray-400">
              Describe your request - we typically respond within a couple of
              business hours.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-white">
              What <span className="gradient-text">Happens</span> Next?
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
                  <Image
                    src="/icons/check-gradener.svg"
                    alt="canada"
                    width={9.84}
                    height={13.78}
                  />
                </span>
                An expert contacts you after having <br /> analyzed your
                requirements;
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
                  <Image
                    src="/icons/check-gradener.svg"
                    alt="canada"
                    width={9.84}
                    height={13.78}
                  />
                </span>
                If needed, we sign an NDA to ensure <br />
                the highest privacy level;
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#26262B] text-xs font-bold text-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] ">
                  <Image
                    src="/icons/check-gradener.svg"
                    alt="canada"
                    width={9.84}
                    height={13.78}
                  />
                </span>
                We submit a comprehensive project
                <br />
                proposal with estimates, timelines,
                <br /> CVs, etc.
              </li>
            </ul>

            {/* TRUSTED BY */}
            <div className="mt-10">
              <h3 className="py-2 gradient-text font-medium">
                Customers who trust us
              </h3>

              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <span className="text-sm text-white">layoffhub.ai</span>
                <span className="text-sm text-white">Pergola Plus</span>
                <span className="text-sm text-white">Accolutions</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            toolname="submitTechnicalConsultation"
            tooldescription="Submits project requirements to Techionik to receive a technical analysis and project estimate."
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Name<span className="text-orange-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  id="user_name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter Your Name"
                  // {/*  AI Field Instruction */}
                  data-description="The full legal or business name of the inquirer."
                  autoComplete="name"
                  className="flex-1 rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
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

            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Email Address<span className="text-orange-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  id="user_email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter Your Email Address"
                  // {/* 👇 AI Field Instruction */}
                  data-description="A valid corporate or personal email address for follow-up."
                  autoComplete="email"
                  className="flex-1 rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
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

            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Phone Number<span className="text-orange-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  id="user_phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter Your Number"
                  // {/* 👇 AI Field Instruction */}
                  data-description="The primary contact phone number, preferably including the country code."
                  autoComplete="tel"
                  className="flex-1 rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
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

            <div>
              <label className="mb-1 block text-sm font-medium text-white">
                Description
              </label>
              <div className="flex gap-2">
                <textarea
                  id="project_description"
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Please describe a little"
                  // {/* 👇 AI Field Instruction */}
                  data-description="Brief details about the software development needs, goals, or technical challenges."
                  rows={5}
                  className="flex-1 rounded-2xl bg-[#1a1d23] px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => toggleListening("description")}
                  className="p-2"
                >
                  {activeField === "description" ? (
                    <MicOff size={16} className="text-red-500" />
                  ) : (
                    <Mic size={16} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="w-4 h-4 rounded border-gray-600 bg-[#1a1d23] text-orange-500 focus:ring-orange-500 focus:ring-offset-[#0c0f14] transition-all cursor-pointer"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-400 cursor-pointer select-none hover:text-gray-300 transition-colors"
              >
                I agree with the{" "}
                <Link
                  href="/terms"
                  className="text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <motion.div
                animate={
                  isSuccess ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  if (isSuccess) {
                    router.push("/thank-you");
                  }
                }}
              >
                <Button
                  type="submit" // 🚀 Crucial for machine execution
                  ariaLabel="Submit project request to Techionik"
                  text={
                    loading
                      ? "Sending..."
                      : isSuccess
                        ? "Success!"
                        : "Submit Now"
                  }
                  icon="/icons/arrow-right.svg"
                  size="medium"
                  radius="full"
                  variant="gradient"
                  className={`inline-flex w-auto justify-between ${
                    loading || isSuccess ? "opacity-50 pointer-events-none" : ""
                  }`}
                />
              </motion.div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-black">
                  ✓
                </span>
                Your privacy is protected
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
