"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black text-white px-6 overflow-hidden">
      {/* 🌌 Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#F05323]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#2979ff]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* 🌐 Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🚀 Floating Rocket (Background - No Overlap) */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute md:top-[20%] md:right-[38%] top-[15%] right-[25%] text-[#F05323]/40 pointer-events-none"
      >
        <Rocket className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>

      {/* 🧊 Floating Shape */}
      {/* <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[35%] w-20 h-20 border border-white/10 rounded-2xl hidden lg:block opacity-30"
      /> */}

      {/* 🧊 Floating Shape 2 */}
      {/* <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -30, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] right-[10%] w-28 h-28 border-t border-r border-[#F05323]/20 rounded-[40px] hidden lg:block opacity-30"
      /> */}

      {/* 🔥 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* 404 Heading */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.2,
          }}
          className="text-[120px] sm:text-[180px] md:text-[220px] font-black tracking-tight leading-none select-none"
        >
          <span className="text-dark-gradient">4</span>
          <span className="text-gradient">0</span>
          <span className="text-dark-gradient">4</span>
        </motion.h1>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 space-y-5"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Lost in Space?
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            The page you're looking for has drifted into another dimension.
            Let’s navigate you safely back to the mothership.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Home Button */}
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-[#F05323] rounded-full font-semibold text-white transition-all duration-300 hover:bg-[#ff6434] hover:shadow-[0_6px_20px_rgba(240,83,35,0.4)] active:scale-95"
          >
            <Home className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Back to Home</span>
          </Link>
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
