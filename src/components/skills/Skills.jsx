import { motion } from "framer-motion";

// Categorized and structured skill data looks much more professional
const skillCategories = [
  {
    category: "Core Languages",
    skills: [
      { name: "Embedded C", level: "Expert", value: 95, details: ["MISRA C", "Bare-metal", "RTOS"] },
      { name: "C++", level: "Advanced", value: 90, details: ["OOP", "C++11/14", "Memory Mgmt"] },
      { name: "Python", level: "Intermediate", value: 80, details: ["Automation", "Scripting", "Testing"] },
    ],
  },
  {
    category: "Automotive & Standards",
    skills: [
      { name: "AUTOSAR", level: "Expert", value: 95, details: ["Classic", "Bsw", "Rte Configuration"] },
      { name: "CAN / CAN FD", level: "Advanced", value: 92, details: ["Vector tools", "CAPL", "J1939"] },
      { name: "Cybersecurity", level: "Advanced", value: 85, details: ["ISO 21434", "SecOC", "Crypto"] },
    ],
  },
];

// Container variants for clean, staggered entry animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-slate-900/60 border border-slate-800 backdrop-blur-sm rounded-xl p-6 hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-slate-100">{skill.name}</h3>
          <span className="text-xs font-mono px-2 py-1 bg-cyan-950/50 text-cyan-400 rounded border border-cyan-800/30">
            {skill.level}
          </span>
        </div>

        {/* Sub-skills / Tags add great technical depth for recruiters */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-6">
          {skill.details.map((detail) => (
            <span key={detail} className="text-xs text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded">
              {detail}
            </span>
          ))}
        </div>
      </div>

      {/* Modern, sleek linear loading/progress bar */}
      <div className="space-y-2">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 max-w-7xl mx-auto dark">
      <div className="flex flex-col items-start mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
          Technical <span className="text-cyan-400">Expertise</span>
        </h2>
        <div className="h-1 w-20 bg-cyan-500 rounded" />
      </div>

      <div className="space-y-14">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 block border-b border-slate-800 pb-2">
               {cat.category}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}