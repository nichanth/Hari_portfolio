import { motion } from "framer-motion";

const experiences = [
  {
    role: "SW Technical Lead",
    company: "ZF Overseas Inc, Seoul, South Korea",
    year: "SEP 2025 - Till Date",
    description:
      "Leading end-to-end application software development and technical delivery for Steering ECU programs within the Chassis 2.0 platform using AUTOSAR architecture. Coordinating with BSW, Validation, Functional Safety (ISO 26262), and Cybersecurity (ISO 21434) teams.",
  },
  {
    role: "Technical Lead",
    company: "ZF Technology Centre India, Hyderabad",
    year: "JAN 2022 - SEP 2025",
    description:
      "Integrated application software components, BSW modules, and low-level drivers for Electric Power Steering (EPS) variants. Handled AUTOSAR ECU model configuration, NVM, OS, RTE code generation, secure bootloader integration, and linker script adaptation.",
  },
  {
    role: "Embedded SW Lead",
    company: "UST Global Technologies, Coimbatore",
    year: "MAR 2019 - JAN 2022",
    description:
      "Developed and integrated platform foundation software components for Robert Bosch Engineering. Developed and optimized reliable tools/environments for CI/CD pipelines working within a DevOps framework.",
  },
  {
    role: "Senior Engineer - R&D",
    company: "SS Systems, Coimbatore",
    year: "JUN 2013 - MAR 2019",
    description:
      "Designed, programmed, and debugged system software for Industrial Power Electronics and IoT products. Structured hardware/software architectures, implemented core functions, and developed test setups/jigs for validation.",
  }
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