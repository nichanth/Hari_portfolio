import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text moves slightly slower down, canvas drops faster and fades out
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-transparent flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-20 md:py-0"
    >
      
      {/* LEFT CONTENT */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-2xl text-left"
      >
        <div className="mb-6 inline-block px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm backdrop-blur-md font-mono">
           Automotive Embedded Systems Expert
        </div>

        <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight">
          Shrihariprasath <span className="text-cyan-400">Basuvaiyan</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
          Embedded Software Technical Lead architecting safety-critical systems. 
          Specializing in <span className="text-cyan-400 font-medium">AUTOSAR ECU Architecture</span>, 
          high-throughput <span className="text-cyan-400 font-medium">CAN/CAN FD</span> networks, 
          and hardened <span className="text-cyan-400 font-medium">Automotive Cybersecurity</span> solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <a
            href="/resume.pdf"
            download="Shrihariprasath_Basuvaiyan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-400 transition font-medium text-center shadow-[0_4px_20px_rgba(34,211,238,0.25)]"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition font-medium text-center"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT 3D CANVAS */}
      <motion.div 
        style={{ y: canvasY, opacity: canvasOpacity }}
        className="w-full md:w-[450px] h-[320px] md:h-[450px] flex justify-center items-center mt-12 md:mt-0"
      >
        <HeroCanvas />
      </motion.div>
    </section>
  );
}