import React from 'react';
import { motion } from 'framer-motion';

export default function Achievements() {
const awardsData = [
    {
      icon: "🏆",
      title: "Star Award (Q3 2023 & Q4 2024)",
      issuer: "ZF",
      description: "Granted for exceptional technical contributions to the organization."
    },
    {
      icon: "🛡️",
      title: "Excellence Awards (Q4 2022, Q1 2023, Q3 2024)",
      issuer: "ZF",
      description: "Acknowledging outstanding delivery and firmware engineering performance."
    },
    {
      icon: "⭐",
      title: "Star Award (2021)",
      issuer: "UST Global",
      description: "Recognizing outstanding technical leadership during critical product deliveries."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 }
    }
  };

  return (
    <motion.section 
      id="recognition"
      className="py-16 px-4 max-w-6xl mx-auto w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* HEADER: Matches Experience section exactly */}
      <div className="mb-12 flex items-center gap-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
          Recognition
        </h2>
      </div>

      {/* Card Deck Wrapper */}
      <div className="space-y-6 w-full">
        {awardsData.map((award, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01, 
              backgroundColor: "rgba(15, 23, 42, 0.35)",
              borderColor: "rgba(34, 211, 238, 0.25)"
            }}
            className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/15 border border-slate-900/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.02)] transition-all duration-300 pl-8 flex flex-col sm:flex-row items-start gap-4 md:gap-6 overflow-hidden"
          >
            {/* Glowing left boundary border line indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-slate-900 group-hover:bg-cyan-400 transition-colors duration-300" />
            
            {/* Embedded Cyber Badge Wrapper */}
            <div className="text-xl bg-slate-950/80 p-3 rounded-xl border border-slate-800/40 shrink-0 select-none transition-all duration-300 group-hover:border-cyan-500/20 shadow-inner">
              {award.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <span className="text-xs md:text-sm font-semibold tracking-wider text-cyan-400/90 block mb-1">
                {award.issuer}
              </span>
              <h4 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-cyan-400/90 transition-colors duration-200">
                {award.title}
              </h4>
              <p className="text-sm md:text-base text-slate-400 mt-2 font-medium tracking-wide leading-relaxed">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

}