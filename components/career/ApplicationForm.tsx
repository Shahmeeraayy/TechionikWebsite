"use client";

import React, { FormEvent, useState, ChangeEvent } from "react";
import { Paperclip, X, FileText } from "lucide-react"; // Added icons for better UX
import { submitApplication } from "@/app/application/services/application.service";

interface ApplicationFormProps {
  jobTitle: string;
  careerSlug: string;
}
export default function ApplicationForm({
  jobTitle,
  careerSlug,
}: ApplicationFormProps) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Reset the input value so the same file can be re-selected if needed
    const fileInput = document.getElementsByName(
      "resume",
    )[0] as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      // 3. Append the identifier to the FormData before submitting
      formData.append("careerSlug", careerSlug);

      const result = await submitApplication(formData);

      if (result.success) {
        alert("Success! Your application has been submitted");
        (e.target as HTMLFormElement).reset();
        setSelectedFile(null);
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.log("Submission error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-black min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800/80 rounded-[2rem] p-8 md:p-12 shadow-2xl">
        <form className="space-y-7" onSubmit={handleSubmit}>
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-300 ml-1">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                required
                placeholder="Enter Your First Name"
                className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                required
                placeholder="Enter Your Last Name"
                className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-300 ml-1">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
                className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Enter Your Phone No"
                className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Row 3: LinkedIn */}
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Linkedin Profile
            </label>
            <input
              name="linkDinUrl"
              type="url"
              placeholder="Enter Your Linkedin Profile URL"
              className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full placeholder:text-gray-500"
            />
          </div>

          {/* Row 4: Cover Letter */}
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              required
              placeholder="Write your cover letter here..."
              rows={5}
              className="bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-5 py-4 outline-none border border-transparent focus:border-gray-600 transition-colors w-full resize-none placeholder:text-gray-500"
            />
          </div>

          {/* Row 5: Resume File Upload - UPDATED UI */}
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Resume
            </label>
            <div className="relative bg-[#1a1a1a] border border-dashed border-gray-700 hover:border-gray-500 transition-colors rounded-2xl h-40 md:h-48 flex items-center justify-center p-6 cursor-pointer group">
              <input
                name="resume"
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                accept=".pdf,.doc,.docx"
                required={!selectedFile}
              />

              <div className="flex flex-col items-center gap-3">
                {selectedFile ? (
                  <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                    <div className="bg-[#f05323]/10 p-4 rounded-full mb-2">
                      <FileText className="w-8 h-8 text-[#f05323]" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">
                      {selectedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="mt-2 text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 z-20"
                    >
                      <X className="w-3 h-3" /> Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-gray-400 text-sm text-center max-w-sm px-4">
                      Drag and drop or browse to upload your files
                    </span>
                    <Paperclip className="absolute bottom-5 right-5 w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-5 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group w-fit">
              <div className="relative flex items-center justify-center w-5 h-5 rounded bg-[#1a1a1a] border border-gray-700 group-hover:border-gray-500 transition-colors overflow-hidden">
                <input
                  type="checkbox"
                  className="opacity-0 absolute inset-0 cursor-pointer peer"
                />
                <div className="w-full h-full bg-[#f05323] hidden peer-checked:flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xs md:text-sm text-gray-400 font-medium select-none group-hover:text-gray-300 transition-colors">
                Get update about new vacancies at TECHIONIK
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#f05323] hover:bg-[#d6451a] disabled:bg-gray-600 text-white text-sm md:text-base px-10 py-3 md:py-3.5 rounded-full font-medium transition-colors"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
