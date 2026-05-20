import { motion } from "framer-motion";

const projects = [
  {
    title: "AUTOSAR ECU Architecture",
    description: "Designed scalable AUTOSAR ECU software architecture for modern automotive systems.",
    tags: ["Classic AUTOSAR", "BSW", "RTE", "Layered Arch"],
    renderGraphic: () => (
      <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-center space-y-2 font-mono text-[10px] tracking-wider select-none">
        <div className="w-full py-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 text-center rounded font-bold">APPLICATION LAYER</div>
        <div className="w-full py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-center rounded italic">RTE (Run-Time Environment)</div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-slate-400">
          <div className="py-2.5 bg-slate-900 border border-slate-800 rounded">Services</div>
          <div className="py-2.5 bg-slate-900 border border-slate-800 rounded">ECU Abstr.</div>
          <div className="py-2.5 bg-slate-900 border border-slate-800 rounded">MCAL</div>
        </div>
        <div className="w-full py-1.5 bg-slate-800/50 border border-slate-700 text-slate-500 text-center rounded text-[9px]">MICROCONTROLLER HARDWARE</div>
      </div>
    ),
  },
  {
    title: "CAN FD Communication Stack",
    description: "Implemented high-performance CAN/CAN FD communication modules and diagnostics.",
    tags: ["CAN FD", "ISO 11898", "CAPL", "UDS Diagnostics"],
    renderGraphic: () => (
      <div className="w-full h-full bg-slate-950 relative flex items-center justify-center p-4 font-mono text-[10px] select-none">
        <div className="absolute w-4/5 h-[2px] bg-slate-800 top-[42%]" />
        <div className="absolute w-4/5 h-[2px] bg-slate-800 top-[58%]" />
        <div className="z-10 flex justify-between items-center w-full px-4">
          <div className="p-2 bg-slate-900 border border-cyan-500/40 rounded text-cyan-400 text-center">
            <p className="font-bold">ECU 1</p>
            <span className="text-[8px] text-slate-500">Tx/Rx</span>
          </div>
          <div className="flex flex-col items-center space-y-3 px-2 flex-1">
            <svg viewBox="0 0 100 30" className="w-full stroke-cyan-500 fill-none stroke-2 opacity-80">
              <path d="M 0 15 L 20 15 L 20 5 L 40 5 L 40 25 L 60 25 L 60 15 L 100 15" />
            </svg>
            <span className="text-[9px] text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800">5 Mbps FD</span>
          </div>
          <div className="p-2 bg-slate-900 border border-blue-500/40 rounded text-blue-400 text-center">
            <p className="font-bold">ECU 2</p>
            <span className="text-[8px] text-slate-500">Tx/Rx</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Automotive Cybersecurity",
    description: "Developed embedded cybersecurity mechanisms for secure ECU communication.",
    tags: ["ISO 21434", "SecOC", "Crypto Stack", "SHE/HSE"],
    renderGraphic: () => (
      <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center space-y-3 p-4 font-mono text-[10px] select-none">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-slate-900 border border-slate-800 text-slate-400 rounded">Plain PDU</div>
          <div className="text-cyan-400 font-bold animate-pulse">➔ [SecOC] ➔</div>
          <div className="p-2 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 rounded flex items-center gap-1">🔒 Secured</div>
        </div>
        <div className="w-4/5 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-[9px] text-slate-400 flex items-center justify-center gap-2">
          <span className="text-blue-400">MAC Verification:</span> <span className="text-emerald-400 font-bold">PASSED [OK]</span>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto bg-slate-950">
      <div className="flex flex-col items-start mb-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="h-1 w-20 bg-cyan-500 rounded mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="backdrop-blur-lg bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="h-52 border-b border-white/10 overflow-hidden relative">
              {project.renderGraphic()}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mt-3 text-sm leading-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}