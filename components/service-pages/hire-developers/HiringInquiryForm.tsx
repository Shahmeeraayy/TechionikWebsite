"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type HiringInquiryFormProps = {
  title: string;
  description: string;
};

export default function HiringInquiryForm({
  title,
  description,
}: HiringInquiryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      router.push("/thank-you");
    }, 450);
  };

  const inputClass =
    "w-full rounded-[18px] border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/40 transition focus:border-[#F05323] focus:bg-white/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[34px] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-[36px] sm:p-8 lg:p-10"
    >
      <div className="mb-6 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            Contact Form
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.35rem]">
            {title}
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-white/70 sm:text-base">
          {description}
        </p>
      </div>

      <div className="space-y-3">
        <input
          className={inputClass}
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
        />

        <input
          className={inputClass}
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          placeholder="Enter Your Number"
          value={formData.phone}
          onChange={(event) => updateField("phone", event.target.value)}
        />

        <input
          className={inputClass}
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Enter Your Email Address"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
        />

        <textarea
          className={`${inputClass} min-h-[140px] resize-none rounded-[24px]`}
          name="description"
          required
          placeholder="Please describe a little"
          value={formData.description}
          onChange={(event) => updateField("description", event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#F05323] to-[#8A3014] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(240,83,35,0.35)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span>{loading ? "Submitting..." : "Submit Now"}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-md">
          <ArrowRight size={18} />
        </span>
      </button>
    </form>
  );
}
