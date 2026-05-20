import { motion } from "framer-motion";

const experiences = [
  {
    role: "Embedded Software Technical Lead",
    company: "Automotive Industry",
    year: "2021 - Present",
    description:
      "Leading AUTOSAR architecture, ECU integration, embedded software development and cybersecurity implementation.",
  },

  {
    role: "Embedded Software Engineer",
    company: "Automotive Systems",
    year: "2018 - 2021",
    description:
      "Worked on CAN/CAN FD communication, diagnostics, ECU development and embedded C programming.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 relative"
    >
      <h2 className="text-5xl font-black mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Experience
      </h2>

      <div className="relative border-l border-cyan-500/30 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 ml-10 relative"
          >
            {/* timeline dot */}
            <div className="absolute -left-[52px] top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-cyan-400 font-semibold">
                {exp.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {exp.role}
              </h3>

              <p className="text-slate-400 mt-2">
                {exp.company}
              </p>

              <p className="text-slate-300 mt-4 leading-8">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}