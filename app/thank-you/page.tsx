"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black text-white px-6 overflow-hidden">
      
      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#F05323]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#2979ff]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* 🌐 Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ✅ Success Icon Animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.1 
        }}
        className="relative z-10 mb-8"
      >
        <div className="p-6 bg-gradient-to-br from-[#F05323] to-[#8A3014] rounded-full shadow-[0_0_50px_rgba(240,83,35,0.3)]">
          <CheckCircle2 className="w-16 h-16 md:w-24 md:h-24 text-white" />
        </div>
        
        {/* Pulsing ring effect */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 border-2 border-[#F05323] rounded-full"
        />
      </motion.div>

      {/* ✨ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Thank <span className="text-dark-gradient">You!</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Your message has successfully gravitating towards our team. 
          We typically respond within a couple of business hours. 
          Get ready to elevate your project!
        </p>

        {/* 🔗 Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 px-10 py-4 bg-[#F05323] rounded-full font-bold text-white transition-all duration-300 hover:bg-[#ff6434] hover:shadow-[0_8px_25px_rgba(240,83,35,0.4)] active:scale-95"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Return Home</span>
          </Link>
          
          <Link
            href="/services"
            className="group flex items-center gap-3 px-10 py-4 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full font-bold transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Decorative Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-32 h-32 bg-[#F05323]/10 rounded-full blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-[15%] w-48 h-48 bg-[#2979ff]/10 rounded-full blur-3xl hidden lg:block"
      />
    </div>
  );
}
