import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 md:px-20 border-t border-slate-900/60 overflow-hidden bg-slate-950">
      
      {/* Premium subtle cyan glow behind text elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Professional Brand & Technical Sub-labels */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text tracking-wide uppercase">
            Shrihari Prasath
          </h2>

          <p className="text-xs md:text-sm font-mono text-slate-400 mt-2 tracking-wide">
            Software Technical Lead • Embedded Systems • AUTOSAR • EV Technology
          </p>
        </div>

        {/* Live Tracking Channels matching your CV coordinates */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="https://github.com/shrihariprasath-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            GitHub
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="https://www.linkedin.com/in/shrihariprasath-basuvaiyan-5792131b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            LinkedIn
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="mailto:shrihariprasath.bs@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-200 relative group"
          >
            Email
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-200 group-hover:w-full" />
          </a>
        </div>
      </motion.div>

      {/* Micro Copyright Row */}
      <div className="relative z-10 max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-900/40 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <p>© {currentYear} Shrihari Prasath. All Rights Reserved.</p>
        <p className="text-slate-600">Built with React & Tailwind</p>
      </div>
    </footer>
  );
}