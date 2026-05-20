import React from 'react';
import { motion } from 'framer-motion';

export default function Interests() {
  const interestsData = [
    { name: "Adaptive AUTOSAR", icon: "⚡" },
    { name: "ADAS (Advanced Driver Assistance Systems)", icon: "🚗" },
    { name: "Artificial Intelligence", icon: "🧠" },
    { name: "Internet of Things (IoT)", icon: "🌐" },
    { name: "Cybersecurity Systems", icon: "🛡️" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <motion.section 
      id="interests" 
      className="py-16 px-4 max-w-6xl mx-auto w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* HEADER: Matches Experience & Education exactly */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
          Interests
        </h2>
      </div>

      {/* Grid Layout: Stacks on mobile, splits up to 3 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {interestsData.map((interest, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ 
              y: -3, 
              backgroundColor: "rgba(15, 23, 42, 0.4)", 
              borderColor: "rgba(34, 211, 238, 0.25)" 
            }}
            className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/15 border border-slate-900/80 transition-all duration-300 overflow-hidden relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-900 group-hover:bg-cyan-400 transition-colors duration-300" />
            <div className="text-xl bg-slate-950/60 p-2 rounded-lg border border-slate-800/40 shrink-0">
              {interest.icon}
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-slate-100 transition-colors duration-200">
              {interest.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}