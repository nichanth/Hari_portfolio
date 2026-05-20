import { motion } from "framer-motion";
import AmbientParallaxBackground from "../AmbientParallaxBackground";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 relative overflow-hidden bg-slate-950">
      {/* Seamless integrated background overlay */}
      <AmbientParallaxBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* LEFT BIO PARAGRAPHS */}
          <div className="lg:col-span-3 space-y-6 text-slate-300 text-base md:text-lg leading-8 md:leading-9">
            <p>
              I am an Embedded Software Technical Lead with extensive
              experience in Automotive Embedded Systems, AUTOSAR
              architecture, ECU software development, CAN/CAN FD
              communication, and cybersecurity implementation.
            </p>
            <p>
              Over the years, I have contributed to the design and
              development of scalable automotive software solutions,
              collaborating with cross-functional engineering teams to
              deliver high-performance and safety-critical systems for
              modern vehicle platforms.
            </p>
            <p>
              My expertise includes embedded C/C++, ECU diagnostics,
              AUTOSAR stack integration, software architecture,
              debugging complex automotive systems, and leading
              technical teams through complete software development
              lifecycles.
            </p>
            <p>
              I am passionate about building reliable, secure, and
              future-ready automotive technologies that contribute to
              intelligent mobility and next-generation connected
              vehicle ecosystems.
            </p>
          </div>

          {/* RIGHT SIDE METRICS GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 min-w-0">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 truncate">
                8+
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300 font-medium">
                Years Experience
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 tracking-tight break-words">
                AUTOSAR
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">
                ECU Architecture
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 tracking-tight break-words">
                CAN FD
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">
                Vehicle Communication
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 tracking-tight break-words">
                Cybersecurity
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">
                Automotive Security
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}