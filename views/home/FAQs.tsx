"use client";
import { useState } from "react";
import { FAQ, MultipleFAQs } from "@/data/FAQS";
import { motion, AnimatePresence } from "framer-motion";
import { createMarkup } from "@/utils/GlobalFuntions";

interface FAQProps {
  data: FAQ;
}

const FAQComponent = ({ data }: FAQProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const expandAll = Boolean(data.expandAll);
  const defaultDescription =
    "Find quick answers to the most common questions about our services and solutions.";
  const introDescription =
    data.description === null
      ? ""
      : data.description?.trim()
        ? data.description
        : defaultDescription;

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="w-full">
      <h2 className="service-section-heading text-gradient">
        {data.mainTitle}{" "}
        <span className="text-dark-gradient">{data.spanTitle}</span>
      </h2>
      {introDescription && (
        <p className="service-section-description text-muted mb-10">
          {introDescription}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {data?.faq?.map((faq: MultipleFAQs) => (
          <div
            key={faq.id}
            className="bg-[#16161A] border border-[#2A2A34] rounded-xl shadow-[0_4px_20px_0px_#00000040] p-5 cursor-pointer"
          >
            <div
              className="flex justify-between items-center gap-4"
              onClick={expandAll ? undefined : () => toggleFAQ(faq.id)}
            >
              <h3 className="service-card-title-sm text-white">
                {faq.id}. {faq.question}
              </h3>
              {!expandAll && (
                <span className="text-orange-500 font-bold text-xl">
                  {openFAQ === faq.id ? "-" : "+"}
                </span>
              )}
            </div>

            {expandAll ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-3 service-rich-text text-muted"
                dangerouslySetInnerHTML={createMarkup(faq.answer)}
              />
            ) : (
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 service-rich-text text-muted"
                    dangerouslySetInnerHTML={createMarkup(faq.answer)}
                  />
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
