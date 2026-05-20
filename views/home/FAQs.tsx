"use client";
import { useState } from "react";
import { FAQ, MultipleFAQs } from "@/data/FAQS";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps{
  data: FAQ
}
const FAQComponent = ({data}: FAQProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="w-full">
      <h2 className="text-gradient">
        {data.mainTitle} <span className="text-dark-gradient">{data.spanTitle}</span>
      </h2>
      <p className="text-gray-400 mb-10 ">
        Find quick answers to the most common questions about our services and solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {data?.faq?.map((faq: MultipleFAQs) => (
          <div
            key={faq.id}
            className="bg-[#16161A] border border-[#2A2A34] rounded-xl shadow-[0_4px_20px_0px_#00000040] p-5 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="text-white">{faq.id}. {faq.question}</h3>
              <span className="text-orange-500 font-bold text-xl">
                {openFAQ === faq.id ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openFAQ === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 body-2 text-muted"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
