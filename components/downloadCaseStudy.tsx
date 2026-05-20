"use client";
import { DownloadCaseStudy } from "@/data/downloadCaseStudyData";
import { useState, FormEvent } from "react";
import Button from "./Button";
import { downloadCaseStudyApi } from "@/app/application/services/caseStudyForm.service";
import { CheckCircle2, Download } from "lucide-react"; // Helpful icons

interface DownloadCaseStudyProps {
  data: DownloadCaseStudy;
  caseStudySlug: string;
}

const DownloadCaseStudyReport = ({
  data,
  caseStudySlug,
}: DownloadCaseStudyProps) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await downloadCaseStudyApi({ ...userData, caseStudySlug });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      alert(`Error generating your download: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#16161A] p-6 md:p-8 rounded-[2rem] border border-gray-800/50 shadow-xl space-y-6">
      {/* Dynamic Header */}
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold">
          <span className="gradient-text">
            {isSubmitted
              ? "Download Ready!"
              : `${data.mainTitle} ${data.subTitle}`}
          </span>
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          {isSubmitted
            ? "Thank you for your interest. Your report should have started downloading."
            : "Fill the form below to receive your free case study report."}
        </p>
      </div>

      {!isSubmitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400 ml-1">
                First Name *
              </label>
              <input
                name="firstName"
                required
                value={userData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Noman"
                className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none border border-transparent focus:border-orange-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400 ml-1">
                Last Name *
              </label>
              <input
                name="lastName"
                required
                value={userData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Butt"
                className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none border border-transparent focus:border-orange-500/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-400 ml-1">
              Email Address *
            </label>
            <input
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
              type="email"
              placeholder="buttnoman778@gmail.com"
              className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none border border-transparent focus:border-orange-500/50 transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-400 ml-1">
              Phone Number *
            </label>
            <input
              name="phoneNo"
              required
              value={userData.phoneNo}
              onChange={handleChange}
              type="tel"
              placeholder="03216013698"
              className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none border border-transparent focus:border-orange-500/50 transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Company */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-400 ml-1">
              Company Name *
            </label>
            <input
              name="companyName"
              required
              value={userData.companyName}
              onChange={handleChange}
              type="text"
              placeholder="Techionik"
              className="w-full rounded-full bg-[#1a1d23] px-5 py-3 text-sm text-white outline-none border border-transparent focus:border-orange-500/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-3.5 mt-2 rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-900/20"
          >
            {loading ? "Preparing PDF..." : "Submit & Download Report"}
          </button>
        </form>
      ) : (
        /* Success State View */
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="bg-green-500/10 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-lg">
              Submission Successful!
            </h4>
            <p className="text-gray-400 text-sm max-w-[250px] mx-auto">
              If your download didn't start automatically, click the button
              below.
            </p>
          </div>

          <button
            onClick={() => downloadCaseStudyApi({ ...userData, caseStudySlug })}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full text-sm font-medium transition-all"
          >
            <Download className="w-4 h-4" />
            Download Again
          </button>

          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-orange-500 hover:underline transition-all"
          >
            Submit for another company
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadCaseStudyReport;
