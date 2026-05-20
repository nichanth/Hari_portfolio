import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      period: "OCT 2025 — OCT 2026",
      degree: "PG Diploma in Electric Vehicle Technology",
      institution: "Centre for Automotive Research and Tribology, IIT Delhi"
    },
    {
      period: "JAN 2016 — MAR 2021",
      degree: "M.S (By Research) - Information & Communication Engineering",
      institution: "Centre for Research, Anna University, Chennai"
    },
    {
      period: "JUN 2010 — APR 2013",
      degree: "B.E (Electronics and Communication Engineering)",
      institution: "KPR Institute of Engineering & Technology, Coimbatore"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto w-full">
      {/* Header Match */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
          Education
        </h2>
      </div>

      {/* Timeline Wrapper Grid */}
      <div className="relative border-l-2 border-slate-900 ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline node bullet */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-400 group-hover:bg-cyan-950 transition-colors duration-300" />
            
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-500/90 uppercase block mb-1">
              {edu.period}
            </span>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400/90 transition-colors duration-200">
              {edu.degree}
            </h3>
            <p className="text-sm md:text-base text-slate-400 mt-1 font-medium">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}